"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["default-src_app_org-management_org-management_module_ts"],{

/***/ 27358:
/*!***********************************************************************************************************!*\
  !*** ./src/app/org-management/components/jobs-profile/jobs-profile-index/jobs-profile-index.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsProfileIndexComponent": () => (/* binding */ JobsProfileIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_org_management_mapper_job_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/job-title */ 6314);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/job-profile/job-title.service */ 92972);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













class JobsProfileIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(jobTitleService) {
        super();
        this.jobTitleService = jobTitleService;
        this.mandatoryColomns = ["Ser", "id", "code", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = ["jobFamily"];
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        this.isLoaded = false;
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.jobTitleService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_org_management_mapper_job_title__WEBPACK_IMPORTED_MODULE_0__.jobToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(jobProfile) {
        let msg = this.msgTranslate(jobProfile.ar_Name, jobProfile.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(jobProfile);
        });
    }
    delete(jobProfile) {
        this.showLoading();
        this.jobTitleService.Delete(jobProfile.id).subscribe((res) => {
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
JobsProfileIndexComponent.ɵfac = function JobsProfileIndexComponent_Factory(t) { return new (t || JobsProfileIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_3__.JobTitleService)); };
JobsProfileIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: JobsProfileIndexComponent, selectors: [["app-jobs-profile-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 12, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "jobsProfile", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function JobsProfileIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function JobsProfileIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function JobsProfileIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "side-helping-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-dashboard-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions == null ? null : ctx.globalFunctions.reverse());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.jobTitleService)("actions", ctx.rowFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLXByb2ZpbGUtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56351:
/*!********************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/add-org-structure-node/add-org-structure-node.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrgStructureNodeComponent": () => (/* binding */ AddOrgStructureNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_system_setup_org_management_setup_components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/org-management-setup/components/organizations/organizations.component */ 8675);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/org-structure/org-structure.service */ 56808);
/* harmony import */ var app_system_setup_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/organizations.service */ 77304);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown/org-types-dropdown.component */ 26941);

















class AddOrgStructureNodeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(orgStructureService, organizationsService, dialogRef, data) {
        super();
        this.orgStructureService = orgStructureService;
        this.organizationsService = organizationsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.submitted = false;
        // organization dropdown
        this.organizationList = [];
        // console.log(data);
        this.viewName = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.organizations;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // oldId: [0, { nonNullable: true }],
            org_Structure_ID: [null],
            parenT_ID: [null],
            orG_TYPE_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            orG_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
        this.getFormValues();
    }
    onChangeBusinessAndCompanyId() {
        if (this.formCtrls.org_Structure_ID.value > 0 &&
            this.checkNoBusinessOrCompany()) {
            this.getAllUnAssignedOrganizationsByStructureId();
        }
    }
    getFormValues() {
        this.form.patchValue(this.data);
        // // save old org id to edit
        // this.formCtrls.oldId.setValue(this.data.orG_ID);
        setTimeout(() => {
            // this.formCtrls.orG_TYPE_ID.setValue(this.data.orG_TYPE_ID);
            if (!this.form.value.parenT_ID) {
                this.formCtrls.orG_TYPE_ID.disable();
                this.formCtrls.orG_TYPE_ID.setValue(1);
            }
            // this.formCtrls.orG_ID.setValue(this.data.orG_ID);
        }, 100);
        // console.log(this.data, this.form.value);
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                core_Org_Structure_Org: {
                    org_Structure_ID: this.formCtrls.org_Structure_ID.value,
                    orG_TYPE_ID: this.formCtrls.orG_TYPE_ID.value,
                    orG_ID: this.formCtrls.orG_ID.value,
                    parenT_ID: this.formCtrls.parenT_ID.value,
                },
            };
            // this.form.value.oldId == 0 ? this.create(model) : this.update(model);
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.orgStructureService
            .createNode(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.dialogRef.close(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    // update(model: IOrgStructureNodeRequest) {
    //   model.oldOrgID = this.form.value.oldId;
    //   this.showLoading();
    //   this.orgStructureService
    //     .updateNode(model)
    //     .subscribe((res: IResponse<IOrgStructureNodeModel>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.updateSuccessfullyMsg(res?.message?.messageTypeName);
    //         this.dialogRef.close(true);
    //       } else this.errorList(res?.message?.messages);
    //       this.hideLoading();
    //     });
    // }
    // organization list
    getAllUnAssignedOrganizationsByStructureId() {
        this.showLoading();
        this.organizationsService
            .GetAllUnAssignedByStructureId(this.formCtrls.org_Structure_ID.value)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.organizationList = res.data;
                // if (this.formCtrls.oldId.value > 0)
                //   this.organizationList.unshift(this.data.currentOrganization);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    createDialog(value) {
        this.dialogsService
            .addFromDropdownDialog(app_system_setup_org_management_setup_components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_0__.OrganizationsComponent, value)
            .afterClosed()
            .subscribe((res) => {
            this.getAllUnAssignedOrganizationsByStructureId();
        });
    }
}
AddOrgStructureNodeComponent.ɵfac = function AddOrgStructureNodeComponent_Factory(t) { return new (t || AddOrgStructureNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_4__.OrgStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA)); };
AddOrgStructureNodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AddOrgStructureNodeComponent, selectors: [["app-add-org-structure-node"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 14, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "orgStructureNode", 1, "d-inline-block", "mtop-5", "mbottom-10"], ["mat-icon-button", "", 1, "float-right", "mb-1", "mr-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "clearfix"], ["dialogContainer", ""], [1, "row"], [1, "col-12", "mtop-5"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "disableCompany", "appendTo", "filter"], ["label", "organization", "optionDisabled", "assignStr", 3, "control", "submitted", "List", "appendTo", "filter", "viewName", "createNewDialog"], ["align", "end"], [3, "id", "onClick"]], template: function AddOrgStructureNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content", null, 5)(8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 6)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-org-types-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 9)(15, "app-prime-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("createNewDialog", function AddOrgStructureNodeComponent_Template_app_prime_dropdown_createNewDialog_15_listener($event) { return ctx.createDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-dialog-actions", 12)(17, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AddOrgStructureNodeComponent_Template_submit_btn_onClick_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.orG_TYPE_ID)("submitted", ctx.submitted)("disableCompany", ctx.formCtrls.parenT_ID.value ? true : false)("appendTo", _r0)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.orG_ID)("submitted", ctx.submitted)("List", ctx.organizationList)("appendTo", _r0)("filter", true)("viewName", ctx.viewName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", 0);
    } }, dependencies: [_shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_8__.DropdownCoreComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.OrgTypesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: [".mat-dialog-container {\n  padding: 24px;\n}\n\n@media (min-width: 320px) and (max-width: 991px) {\n    .page-title {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1vcmctc3RydWN0dXJlLW5vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7O0FBSUE7RUFDRTtJQUNFLDBCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJhZGQtb3JnLXN0cnVjdHVyZS1ub2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgOjpuZy1kZWVwIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 19892:
/*!**********************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/add-org-structure/add-org-structure.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrgStructureComponent": () => (/* binding */ AddOrgStructureComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/org-structure/org-structure.service */ 56808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../org-structure-hierarchy-details/org-structure-hierarchy-details.component */ 89210);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function AddOrgStructureComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-add-new-btn", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx_r0.moduleId, "/org-structure/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
function AddOrgStructureComponent_app_prime_dropdown_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-prime-dropdown", 18);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx_r1.formCtrls.CopyStructureID)("submitted", ctx_r1.submitted)("List", ctx_r1.structureList);
} }
function AddOrgStructureComponent_reset_form_btn_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddOrgStructureComponent_reset_form_btn_22_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddOrgStructureComponent_p_messages_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "canNotEditOrgStructure"), " ");
} }
function AddOrgStructureComponent_p_messages_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-messages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddOrgStructureComponent_p_messages_24_ng_template_1_Template, 4, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
class AddOrgStructureComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(orgStructureService) {
        super();
        this.orgStructureService = orgStructureService;
        this.submitted = false;
        this.todayDate = new Date();
        this.structureList = [];
        this.todayDate.setHours(0, 0, 0, 0);
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            froM_DATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            CopyStructureID: [null],
        });
        this.activatedRoute.paramMap.subscribe((params) => {
            this.orgStructureId = Number(params.get("orgStructureId")) ?? 0;
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany()) {
            this.orgStructureId == 0 ? this.getAllStructures() : this.getById();
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.orgStructureService
            .getById(this.orgStructureId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.orgStructure = res.data[0];
                this.orgStructureToEdit();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    orgStructureToEdit() {
        this.form.patchValue(this.orgStructure);
        // console.log(this.form.value);
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            this.formCtrls.id.value == 0 ? this.create() : this.update();
        } // else this.toastr.error("General.formNotValid");
    }
    create() {
        const model = {
            Core_Org_Structure: {
                en_Name: this.form.value.en_Name,
                ar_Name: this.form.value.ar_Name,
                froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.froM_DATE ?? this.orgStructure?.froM_DATE),
            },
            CopyStructureID: this.formCtrls.CopyStructureID.value,
        };
        this.showLoading();
        this.orgStructureService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.orgStructureId = res.data.id;
                this.formCtrls.id.setValue(this.orgStructureId);
                let url = `/org-management/${this.moduleId}/org-structure/edit/${this.orgStructureId}`;
                this.navigateTo(url);
                this.orgStructure = res.data;
                this.formCtrls.CopyStructureID.reset();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update() {
        const model = {
            id: this.form.value.id,
            en_Name: this.form.value.en_Name,
            ar_Name: this.form.value.ar_Name,
            froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.froM_DATE ?? this.orgStructure?.froM_DATE),
            to_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.orgStructure.tO_DATE),
        };
        this.showLoading();
        this.orgStructureService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.orgStructure = res.data;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        /* if (this.orgStructureId == 0)  */ this.form.reset({ id: 0 });
        // else this.orgStructureToEdit();
        this.submitted = false;
    }
    canNotEdit() {
        // can edit if org structure from date greater than today date
        return (new Date(this.todayDate).getTime() >=
            new Date(this.orgStructure?.froM_DATE).getTime());
    }
    // organization list
    getAllStructures() {
        this.orgStructureService
            .getAll()
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.structureList = [
                    {
                        id: 0,
                        ar_Name: "انشاء جديد",
                        en_Name: "Create new",
                    },
                    ...res.data,
                ];
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
}
AddOrgStructureComponent.ɵfac = function AddOrgStructureComponent_Factory(t) { return new (t || AddOrgStructureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_4__.OrgStructureService)); };
AddOrgStructureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddOrgStructureComponent, selectors: [["app-add-org-structure"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 19, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "orgStructure", "editTitle", "editOrgStructure", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "froM_DATE", 3, "control", "submitted", "minDate", "disabled"], ["label", "copyFromPreviousStructure", 3, "control", "submitted", "List", 4, "ngIf"], ["align", "end"], [3, "click", 4, "ngIf"], [3, "id", "onClick"], ["severity", "warn", 4, "ngIf"], [3, "orgStructureId", "canNotEdit"], ["label", "copyFromPreviousStructure", 3, "control", "submitted", "List"], [3, "click"], ["severity", "warn"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function AddOrgStructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddOrgStructureComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 0)(10, "div", 1)(11, "form", 7)(12, "div", 0)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, AddOrgStructureComponent_app_prime_dropdown_20_Template, 1, 3, "app-prime-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "mat-card-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, AddOrgStructureComponent_reset_form_btn_22_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClick", function AddOrgStructureComponent_Template_submit_btn_onClick_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, AddOrgStructureComponent_p_messages_24_Template, 2, 0, "p-messages", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "app-org-structure-hierarchy-details", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx.moduleId, "/org-structure/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.froM_DATE)("submitted", ctx.submitted)("minDate", ctx.todayDate)("disabled", ctx.canNotEdit());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.form.value.id == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.canNotEdit());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("orgStructureId", ctx.orgStructureId || ctx.formCtrls.CopyStructureID.value)("canNotEdit", ctx.orgStructureId == 0 ? true : ctx.canNotEdit());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_12__.DropdownCoreComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.Messages, _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_13__.OrgStructureHierarchyDetailsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3JnLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 49963:
/*!**************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/employee-card/employee-card.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeCardComponent": () => (/* binding */ EmployeeCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_personnel_setup_mapper_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/personnel-setup/mapper/employee */ 52614);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employees.service */ 20408);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_structure_employee_card_skeleton_structure_employee_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/skeletons/structure-employee-card-skeleton/structure-employee-card-skeleton.component */ 91365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function EmployeeCardComponent_ng_container_8_p_image_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-image", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "img"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.fileService.preview(ctx_r3.employeeData.img));
} }
function EmployeeCardComponent_ng_container_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmployeeCardComponent_ng_container_8_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.employeeData.contact);
} }
function EmployeeCardComponent_ng_container_8_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.employeeData.email);
} }
function EmployeeCardComponent_ng_container_8_ng_container_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "active"), " ");
} }
function EmployeeCardComponent_ng_container_8_ng_container_20_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "notActive"), " ");
} }
function EmployeeCardComponent_ng_container_8_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EmployeeCardComponent_ng_container_8_ng_container_20_span_2_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EmployeeCardComponent_ng_container_8_ng_container_20_ng_template_3_Template, 3, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 23)(9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 23)(15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.employeeData.isActive)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 7, "noOfEmployeeReporting"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, "asSolidManager"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.employeeData == null ? null : ctx_r8.employeeData.manageSolidEmpNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 11, "asDottedManager"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.employeeData == null ? null : ctx_r8.employeeData.manageDotesEmpNo, "");
} }
function EmployeeCardComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EmployeeCardComponent_ng_container_8_p_image_3_Template, 2, 4, "p-image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, EmployeeCardComponent_ng_container_8_ng_template_4_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 10)(7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EmployeeCardComponent_ng_container_8_p_9_Template, 4, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EmployeeCardComponent_ng_container_8_p_10_Template, 4, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 12)(12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EmployeeCardComponent_ng_container_8_ng_container_20_Template, 20, 13, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.img && ctx_r0.employeeData.img != "")("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.msgTranslate(ctx_r0.employeeData.ar_Name, ctx_r0.employeeData.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, "employment")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.employeeData.jobTitleName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.employeeData.organization, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.showMainData);
} }
function EmployeeCardComponent_ng_container_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "noEmployeeData"), " ");
} }
function EmployeeCardComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-messages", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EmployeeCardComponent_ng_container_9_ng_template_2_Template, 4, 3, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function EmployeeCardComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-structure-employee-card-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
class EmployeeCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(employeesService, dialogRef, data) {
        super();
        this.employeesService = employeesService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loaded = false;
        this.showMainData = false;
        if (data) {
            this.employeeId = data.employeeId;
            this.showMainData = data.showMainData ?? false;
        }
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany() && this.employeeId > 0) this.getEmployeeData();
        const overlays = document.querySelectorAll(".cdk-overlay-backdrop");
        if (overlays.length > 0)
            overlays[overlays.length - 1].classList.add("no-overlay");
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.employeeId > 0)
            this.getEmployeeData();
    }
    getEmployeeData() {
        this.employeesService
            .getEmployeeCardById(this.employeeId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length > 0) {
                    this.employeeData = (0,app_personnel_setup_mapper_employee__WEBPACK_IMPORTED_MODULE_0__.employeeToMap)(res.data)[0];
                }
                this.loaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    // close dilog on resize screen
    onWindowResize(event) {
        this.dialogRef.close();
    }
}
EmployeeCardComponent.ɵfac = function EmployeeCardComponent_Factory(t) { return new (t || EmployeeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
EmployeeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmployeeCardComponent, selectors: [["app-employee-card"]], hostBindings: function EmployeeCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function EmployeeCardComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 11, consts: [[1, "title"], [1, "type-name", "info"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "employee-card"], [4, "ngIf"], [1, "row"], [1, "col-md-4", "col-12", "img-container"], ["preview", "true", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImg", ""], [1, "col-md-8", "col-12", "text-break"], [1, "mtop-5"], [1, "mtop-20"], [1, "mbottom-14", 2, "font-weight", "bold"], ["preview", "true", 3, "src", "alt"], [1, "alt-img-preview"], [1, "pi", "pi-user"], [1, "pi", "pi-phone"], [1, "mx-1"], [1, "fa", "fa-envelope"], ["class", "badge bg-light-success", 4, "ngIf", "ngIfElse"], ["no", ""], [1, "mbottom-14", "mtop-14", 2, "font-weight", "bold"], [1, "font-size-14"], [1, "d-inline-block"], [1, "badge", "bg-light-success"], [1, "badge", "bg-light-danger"], ["severity", "warn"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function EmployeeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmployeeCardComponent_ng_container_8_Template, 21, 13, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EmployeeCardComponent_ng_container_9_Template, 3, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EmployeeCardComponent_ng_container_10_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, "employeeDetails")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.employeeData && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.employeeData && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.employeeData && !ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_skeletons_structure_employee_card_skeleton_structure_employee_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.StructureEmployeeCardSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_image__WEBPACK_IMPORTED_MODULE_10__.Image, primeng_messages__WEBPACK_IMPORTED_MODULE_11__.Messages, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n  margin: -24px;\n  padding: 24px 18px;\n}\n.title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  font-size: 16px;\n}\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-right: -15px;\n}\n.title[_ngcontent-%COMP%]   button.ar[_ngcontent-%COMP%] {\n  margin-left: -15px !important;\n}\n  .mat-dialog-content.employee-card {\n  margin-top: 40px;\n}\n  .mat-dialog-content.employee-card p {\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLDZCQUFBO0FBRUo7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6ImVtcGxveWVlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgbWFyZ2luOiAtMjRweDtcclxuICBwYWRkaW5nOiAyNHB4IDE4cHg7XHJcbiAgaDYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICB9XHJcbiAgYnV0dG9uLmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRlbnQuZW1wbG95ZWUtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5192:
/*!************************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/job-title-details-dialog/job-title-details-dialog.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobTitleDetailsDialogComponent": () => (/* binding */ JobTitleDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-card/employee-card.component */ 49963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/group-by.service */ 58350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/skeletons/org-details-employees-list-skeleton/org-details-employees-list-skeleton.component */ 31534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function JobTitleDetailsDialogComponent_div_41_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgJob_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", ctx_r4.msgTranslate(orgJob_r5.core_Org == null ? null : orgJob_r5.core_Org.ar_Name, orgJob_r5.core_Org == null ? null : orgJob_r5.core_Org.en_Name), " ( ", (tmp_0_0 = orgJob_r5.currentEmployeeNumber) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "of"), " ", orgJob_r5.max_Employee == 0 ? ctx_r4.translate("unlimited") : orgJob_r5.max_Employee, " FTE ) ");
} }
function JobTitleDetailsDialogComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, JobTitleDetailsDialogComponent_div_41_p_1_Template, 3, 6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.nodeData.core_Org_Job_Title);
} }
function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template_p_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const employee_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.openEmployeeCardDialog($event.target, employee_r9.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const employee_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r8.msgTranslate("mleft-10", "mright-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.msgTranslate(employee_r9.ar_Name, employee_r9.en_Name), " ");
} }
function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template, 5, 3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r7.List);
} }
function JobTitleDetailsDialogComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function JobTitleDetailsDialogComponent_ng_container_48_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.searchEmployees($event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_Template, 5, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.employeesGroupsFiltered);
} }
function JobTitleDetailsDialogComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-org-details-employees-list-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function JobTitleDetailsDialogComponent_ng_container_50_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "noEmployeeInJob"), " ");
} }
function JobTitleDetailsDialogComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-messages", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, JobTitleDetailsDialogComponent_ng_container_50_ng_template_2_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
class JobTitleDetailsDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(groupByService, 
    // opened ass dialog
    dialogRef, data, 
    // to open another dialog
    dialog) {
        super();
        this.groupByService = groupByService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.expandedIndex = 0;
        this.employees = [];
        this.loaded = false;
        this.expandedIndex = data.expandedIndex;
        this.nodeData = data.nodeData;
        this.employees = this.nodeData.core_Person_Instance_Job_Title.map((item) => item.core_Person_Instance?.core_Person);
        if (this.employees.length > 0)
            this.sortAndGroupEmployees();
        else
            this.loaded = true;
    }
    ngOnInit() {
        const overlays = document.querySelectorAll(".cdk-overlay-backdrop");
        if (overlays.length > 0)
            overlays[overlays.length - 1].classList.add("no-overlay");
    }
    sortAndGroupEmployees() {
        this.employees = this.employees.filter((emp) => {
            if (emp)
                return emp;
        });
        this.employeesGroups = this.groupByService
            .groupByPartOfProperty(this.employees, this.languageService.isArabic ? "ar_Name" : "en_Name", 1)
            .sort((a, b) => {
            if (a.key < b.key)
                return -1;
            if (a.key > b.key)
                return 1;
            return 0;
        });
        this.employeesGroupsFiltered = this.employeesGroups.slice();
        this.loaded = true;
    }
    // open employee card dialog
    openEmployeeCardDialog(target, employeeId) {
        let lastTarget = this.getHeaderElement(target);
        let targetPositions = lastTarget.getBoundingClientRect();
        // dialog position x-axis (right or left)
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width / 2 + dialogWidth <=
            window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width / 2}px`;
        // can open right
        else if (targetPositions.left - dialogWidth / 2 - 10 >= 0)
            dialogPositions.left = `${targetPositions.left - dialogWidth / 2 - 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeCardComponent, {
            data: { employeeId: employeeId },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "80hv",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    getHeaderElement(target) {
        return target.classList.contains("mat-expansion-panel-body")
            ? target
            : this.getHeaderElement(target.parentElement);
    }
    // search in employees
    searchEmployees(searchName) {
        this.employeesGroupsFiltered = this.employeesGroups
            .map((item) => ({
            key: item.key,
            List: item.List.filter((emp) => emp.en_Name.toLowerCase().includes(searchName.toLowerCase()) ||
                emp.ar_Name.toLowerCase().includes(searchName.toLowerCase())),
        }))
            .filter((item) => item.List.length > 0);
    }
    // close dilog on resize screen
    onWindowResize(event) {
        this.dialogRef.close();
    }
}
JobTitleDetailsDialogComponent.ɵfac = function JobTitleDetailsDialogComponent_Factory(t) { return new (t || JobTitleDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_2__.GroupByService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
JobTitleDetailsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: JobTitleDetailsDialogComponent, selectors: [["app-job-title-details-dialog"]], hostBindings: function JobTitleDetailsDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function JobTitleDetailsDialogComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 32, consts: [[1, "details-dialog-title"], [1, "mb-2"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "type-name", "info"], [1, "clearfix"], [1, "details-dialog", "jobtitle"], ["multi", ""], [3, "expanded"], [1, "expantion-body"], [1, "table-container"], ["class", "no-employees", 4, "ngIf"], [1, "expantion-body", "employee-body"], [4, "ngIf"], [1, "no-employees"], [4, "ngFor", "ngForOf"], [1, "form-control", "mbottom-15", 3, "placeholder", "keyup"], [1, "key-emp"], ["role", "button"], ["class", "name-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "name-container", 3, "click"], [1, "img-small-icon"], [1, "pi", "pi-user"], [1, "emp-name"], ["severity", "warn"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function JobTitleDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-content", 6)(9, "mat-accordion", 7)(10, "mat-expansion-panel", 8)(11, "mat-expansion-panel-header")(12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "table")(18, "tbody")(19, "tr")(20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tr")(34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, JobTitleDetailsDialogComponent_div_41_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-expansion-panel", 8)(43, "mat-expansion-panel-header")(44, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, JobTitleDetailsDialogComponent_ng_container_48_Template, 4, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, JobTitleDetailsDialogComponent_ng_container_49_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, JobTitleDetailsDialogComponent_ng_container_50_Template, 3, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.ar_Name, ctx.nodeData.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.expandedIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 16, "details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 20, "code")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nodeData.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 24, "jobTitle")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.ar_Name, ctx.nodeData.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 28, "jobFamily")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.core_Job_Title_Family == null ? null : ctx.nodeData.core_Job_Title_Family.ar_Name, ctx.nodeData.core_Job_Title_Family == null ? null : ctx.nodeData.core_Job_Title_Family.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nodeData.core_Org_Job_Title.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.expandedIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 30, "employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.employees.length > 0 && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.OrgDetailsEmployeesListSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_12__.Messages, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".mat-dialog-content.details-dialog.jobtitle .mat-expansion-panel-body {\n  padding: 0;\n}\n  .mat-dialog-content.details-dialog.jobtitle .table-container {\n  padding: 0 24px 16px;\n}\n  .mat-dialog-content.details-dialog.jobtitle .no-employees,   .mat-dialog-content.details-dialog.jobtitle .employee-body {\n  padding: 16px 24px 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi10aXRsZS1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUFBSjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUVFOztFQUVFLHlCQUFBO0FBQUoiLCJmaWxlIjoiam9iLXRpdGxlLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRlbnQuZGV0YWlscy1kaWFsb2cuam9idGl0bGUge1xyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHggMTZweDtcclxuICB9XHJcbiAgLm5vLWVtcGxveWVlcyxcclxuICAuZW1wbG95ZWUtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMCAyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 45313:
/*!**************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/job-title-org-chart/job-title-org-chart.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobTitleOrgChartComponent": () => (/* binding */ JobTitleOrgChartComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-card/employee-card.component */ 49963);
/* harmony import */ var _job_title_details_dialog_job_title_details_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-title-details-dialog/job-title-details-dialog.component */ 5192);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/mapper/org-structure */ 5798);
/* harmony import */ var _export_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../export_chart */ 31845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_job_title_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/org-management/services/org-structure/job-title-chart.service */ 60746);
/* harmony import */ var app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/personnel-setup/services/employees/employement-information/employee-job-information.service */ 89609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/skeletons/chart-skeleton/chart-skeleton.component */ 44132);
/* harmony import */ var _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/personnel-setup/employees/employee-dropdown/employee-dropdown.component */ 70502);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management/job-title/job-title-dropdown/job-title-dropdown.component */ 62160);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















const _c0 = ["jobTitleChart"];
function JobTitleOrgChartComponent_app_job_title_dropdown_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-job-title-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_app_job_title_dropdown_6_Template_app_job_title_dropdown_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onChangeSearchValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r0.formCtrls.jobTitleId)("filter", true);
} }
function JobTitleOrgChartComponent_app_employee_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-employee-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_app_employee_dropdown_7_Template_app_employee_dropdown_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.getAllEmployeeJobTitles()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r1.formCtrls.employeeId)("filter", true);
} }
function JobTitleOrgChartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "app-prime-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_div_8_Template_app_prime_dropdown_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.onChangeSearchValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx_r2.formCtrls.jobTitleId)("filter", true)("List", ctx_r2.employeeJobTitles);
} }
function JobTitleOrgChartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15)(1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_div_10_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.exportChart(_r4, "jobTitleChart", "image")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_div_10_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.exportChart(_r4, "jobTitleChart", "pdf")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "exportAsImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, "exportAsPdf"));
} }
function JobTitleOrgChartComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_14_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.upOneLevel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("left", ctx_r17.upOneLevelBtnPositions.btnLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 6, "upOneLevel"), " ", node_r16.parent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("left", ctx_r17.upOneLevelBtnPositions.lineLeft, "px");
} }
function JobTitleOrgChartComponent_ng_template_14_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27)(1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_14_div_8_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26); const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r24.openJobTitleDetailsDialog($event.target, node_r16.data, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", node_r16.data.core_Person_Instance_Job_Title.length, " ");
} }
function JobTitleOrgChartComponent_ng_template_14_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgJob_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", ctx_r28.msgTranslate(orgJob_r29.core_Org == null ? null : orgJob_r29.core_Org.ar_Name, orgJob_r29.core_Org == null ? null : orgJob_r29.core_Org.en_Name), " ( ", (tmp_0_0 = orgJob_r29.currentEmployeeNumber) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " / ", orgJob_r29.max_Employee == 0 ? ctx_r28.translate("unlimited") : orgJob_r29.max_Employee, " FTE ) ");
} }
function JobTitleOrgChartComponent_ng_template_14_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, JobTitleOrgChartComponent_ng_template_14_div_9_p_1_Template, 2, 3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", node_r16.data.core_Org_Job_Title);
} }
function JobTitleOrgChartComponent_ng_template_14_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_14_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33); const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); ctx_r31.expandNode(node_r16); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.changePositions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", node_r16.children.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, node_r16.children.length == 1 ? "jobTitleBelow" : "jobTitlesBelow"), " ");
} }
function JobTitleOrgChartComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, JobTitleOrgChartComponent_ng_template_14_ng_container_0_Template, 6, 8, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_14_Template_div_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const node_r16 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.openJobTitleDetailsDialog($event.target, node_r16.data, 0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 20)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, JobTitleOrgChartComponent_ng_template_14_div_8_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, JobTitleOrgChartComponent_ng_template_14_div_9_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, JobTitleOrgChartComponent_ng_template_14_div_10_Template, 3, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.jobTitleOrgChart && (ctx_r5.jobTitleOrgChart[0] == null ? null : ctx_r5.jobTitleOrgChart[0].data == null ? null : ctx_r5.jobTitleOrgChart[0].data.parentJobTitleID) > 0 && node_r16.data.currentFirstNode == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", node_r16.data.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r5.msgTranslate("mleft-10", "mright-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", node_r16.data.code, " - ", ctx_r5.msgTranslate(node_r16.data.ar_Name, node_r16.data.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r5.msgTranslate(node_r16.data.core_Job_Title_Family == null ? null : node_r16.data.core_Job_Title_Family.ar_Name, node_r16.data.core_Job_Title_Family == null ? null : node_r16.data.core_Job_Title_Family.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (node_r16.data.core_Person_Instance_Job_Title == null ? null : node_r16.data.core_Person_Instance_Job_Title.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (node_r16.data.core_Org_Job_Title == null ? null : node_r16.data.core_Org_Job_Title.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", node_r16.children.length > 0);
} }
function JobTitleOrgChartComponent_app_chart_skeleton_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-chart-skeleton", 32);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
} }
class JobTitleOrgChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(jobTitleChartService, employeeJobInformationService, dialog) {
        super();
        this.jobTitleChartService = jobTitleChartService;
        this.employeeJobInformationService = employeeJobInformationService;
        this.dialog = dialog;
        this.loading = false;
        this.lastSelectedJobId = 0;
        this.searchTypeList = [];
        this.employeeJobTitles = [];
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
        this.exportChart = _export_chart__WEBPACK_IMPORTED_MODULE_5__.exportChart;
    }
    ngOnInit() {
        this.form = this.fb.group({
            searchTypeId: [null],
            jobTitleId: [null],
            employeeId: [null],
        });
        setTimeout(() => {
            this.searchTypeList = [
                {
                    id: 1,
                    ar_Name: "الوظائف",
                    en_Name: "Job titles",
                },
                {
                    id: 2,
                    ar_Name: "الموظفين",
                    en_Name: "Employees",
                },
            ];
        }, 100);
    }
    onChangeBusinessAndCompanyId() {
        this.jobTitleOrgChart = null;
        if (this.checkNoBusinessOrCompany())
            this.getJobTitleOrgChart(this.formCtrls.jobTitleId.value);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getJobTitleOrgChart(jobTitleId) {
        if (jobTitleId > 0) {
            this.lastSelectedJobId = jobTitleId;
            this.jobTitleOrgChart = null;
            this.loading = true;
            this.jobTitleChartService
                .getJobTitleHierarchy(jobTitleId)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                    this.jobTitleOrgChart = (0,app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_4__.jobTitleChartToMap)(res.data);
                    this.jobTitleOrgChart[0].data.currentFirstNode = true;
                    this.changePositions();
                    if (this.lastSelectedJobId == jobTitleId)
                        this.loading = false;
                }
                else {
                    this.errorList(res?.message?.messages);
                    this.loading = false;
                }
            });
        }
    }
    changePositions() {
        setTimeout(() => {
            this.setPositionBtnUpOneLevel();
            this.setPositionUpOneLevelLine();
        }, 100);
    }
    onChangeSearchType() {
        // console.log("change type");
        this.formCtrls.jobTitleId.reset();
        this.formCtrls.employeeId.reset();
    }
    // on select job title or employee to start show from it
    onChangeSearchValue() {
        this.getJobTitleOrgChart(this.formCtrls.jobTitleId.value);
    }
    // up one level in chart
    upOneLevel() {
        // get job titles start from parent job title id
        // if search by job
        if (this.formCtrls.searchTypeId.value == 1)
            this.formCtrls.jobTitleId.setValue(this.jobTitleOrgChart[0].data.parentJobTitleID);
        // if search by employee
        else if (this.formCtrls.searchTypeId.value == 2) {
            this.onChangeSearchType();
            this.getJobTitleOrgChart(this.jobTitleOrgChart[0].data.parentJobTitleID);
        }
        // this.getJobTitleOrgChart(this.jobTitleOrgChart[0].data.parentJobTitleID);
    }
    setPositionBtnUpOneLevel() {
        let btnWidth = document
            .querySelector(".upOneLevel-btn")
            ?.getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.width / 2 - btnWidth / 2 ?? 0;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.lineLeft = firstNodePositions?.width / 2 ?? 0;
    }
    // node details dialog
    openJobTitleDetailsDialog(target, nodeData, expandedIndex) {
        let targetNode = this.getHeaderElement(target);
        let targetPositions = targetNode.getBoundingClientRect();
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width + 10 + dialogWidth <=
            window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width + 10}px`;
        // can open right
        else if (targetPositions.left - dialogWidth - 10 >= 0)
            dialogPositions.left = `${targetPositions.left - dialogWidth - 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_job_title_details_dialog_job_title_details_dialog_component__WEBPACK_IMPORTED_MODULE_2__.JobTitleDetailsDialogComponent, {
            data: {
                nodeData: nodeData,
                expandedIndex: expandedIndex,
            },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "90hv",
            // disableClose: true,
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    getHeaderElement(target) {
        return target.classList.contains("p-organizationchart-node-content")
            ? target
            : this.getHeaderElement(target.parentElement);
    }
    // expand node
    expandNode(node) {
        node.expanded = !node.expanded;
    }
    // // assign employee to job title
    // openAssignDialog(nodeData: IJobTitleModel) {
    //   return this.dialog
    //     .open(AssignEmployeeToJobTitleComponent, {
    //       data: {
    //         nodeData: nodeData,
    //       },
    //       minWidth: "50vw",
    //       autoFocus: false,
    //     })
    //     .afterClosed()
    //     .subscribe((updated: boolean) => {
    //       if (updated) {
    //         // to do >> get first node job title id
    //         this.getJobTitleOrgChart(this.jobTitleOrgChart[0].data.id);
    //       }
    //     });
    // }
    // open employee card dialog
    openEmployeeCardDialog(target, employeeId) {
        let lastTarget = this.getHeaderElement(target);
        let targetPositions = lastTarget.getBoundingClientRect();
        // dialog position x-axis (right or left)
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width / 2 + dialogWidth <=
            window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width / 2}px`;
        // can open right
        else if (targetPositions.left - dialogWidth / 2 - targetPositions.width / 2 + 10 >=
            0)
            dialogPositions.left = `${targetPositions.left - dialogWidth / 2 - targetPositions.width / 2 + 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeCardComponent, {
            data: { employeeId: employeeId },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "80hv",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    // change up one level btn & line positions
    onWindowResize(event) {
        // this.dialog.closeAll();
        this.setPositionBtnUpOneLevel();
        this.setPositionUpOneLevelLine();
    }
    // displayAssignEmployeeIcon(jobTitle: IJobTitleModel): boolean {
    //   let display = false;
    //   jobTitle.core_Org_Job_Title.map((item) => {
    //     if (
    //       item.max_Employee == 0 ||
    //       item.currentEmployeeNumber <= item.max_Employee
    //     )
    //       display = true;
    //   });
    //   return display;
    // }
    getAllEmployeeJobTitles() {
        let employeeId = this.formCtrls.employeeId.value;
        if (employeeId > 0) {
            this.showLoading();
            this.employeeJobInformationService
                .getAllCurrentJobsByEmployeeId(employeeId)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                    this.employeeJobTitles = res.data;
                }
                else
                    this.errorList(res?.message?.messages);
                this.hideLoading();
            });
        }
    }
    onScroll($event) {
        // console.log($event);
        this.changePositions();
    }
}
JobTitleOrgChartComponent.ɵfac = function JobTitleOrgChartComponent_Factory(t) { return new (t || JobTitleOrgChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_org_management_services_org_structure_job_title_chart_service__WEBPACK_IMPORTED_MODULE_6__.JobTitleChartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_7__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog)); };
JobTitleOrgChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: JobTitleOrgChartComponent, selectors: [["app-job-title-org-chart"]], viewQuery: function JobTitleOrgChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.jobTitleChart = _t.first);
    } }, hostBindings: function JobTitleOrgChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("resize", function JobTitleOrgChartComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 12, consts: [[1, "organizationchart-container", "job-title-chart"], [3, "formGroup"], [1, "row", "mx-0"], [1, "col-md-3", "col-12"], ["label", "searchBy", 3, "control", "List", "change"], [3, "control", "filter", "change", 4, "ngIf"], ["class", "col-md-3 col-12", 4, "ngIf"], ["class", "float-right", 4, "ngIf"], ["id", "jobTitleChart", 3, "scroll"], [3, "value", "preserveSpace", "onNodeExpand", "onNodeCollapse"], ["jobTitleChart", ""], ["pTemplate", "job-title"], [3, "width", 4, "ngIf"], [3, "control", "filter", "change"], ["label", "jobTitle", 3, "control", "filter", "List", "change"], [1, "float-right"], [1, "ft-image", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [1, "ft-file", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [4, "ngIf"], [1, "node-header", 3, "id", "click"], [1, "node-content", "main-data"], [1, "node-content"], ["class", "employees-no-section", 4, "ngIf"], ["class", "fte-content", 4, "ngIf"], ["class", "node-footer info", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], [1, "employees-no-section"], [1, "pi", "pi-users", 3, "click"], [1, "fte-content"], [4, "ngFor", "ngForOf"], [1, "node-footer", "info", 3, "click"], [3, "width"]], template: function JobTitleOrgChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "app-prime-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_Template_app_prime_dropdown_change_4_listener() { return ctx.onChangeSearchType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, JobTitleOrgChartComponent_app_job_title_dropdown_6_Template, 1, 2, "app-job-title-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, JobTitleOrgChartComponent_app_employee_dropdown_7_Template, 1, 2, "app-employee-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, JobTitleOrgChartComponent_div_8_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, JobTitleOrgChartComponent_div_10_Template, 5, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scroll", function JobTitleOrgChartComponent_Template_div_scroll_11_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "p-organizationChart", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onNodeExpand", function JobTitleOrgChartComponent_Template_p_organizationChart_onNodeExpand_12_listener() { return ctx.changePositions(); })("onNodeCollapse", function JobTitleOrgChartComponent_Template_p_organizationChart_onNodeCollapse_12_listener() { return ctx.changePositions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, JobTitleOrgChartComponent_ng_template_14_Template, 11, 10, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, JobTitleOrgChartComponent_app_chart_skeleton_15_Template, 1, 1, "app-chart-skeleton", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.searchTypeId)("List", ctx.searchTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.searchTypeId.value == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.searchTypeId.value == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.employeeId.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("col-md-6", !(ctx.formCtrls.employeeId.value > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.jobTitleOrgChart != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.jobTitleOrgChart)("preserveSpace", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_8__.ChartSkeletonComponent, _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.EmployeeDropdownComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_10__.DropdownCoreComponent, _shared_components_dropdowns_org_management_job_title_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.JobTitleDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_19__.OrganizationChart, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".job-title-chart {\n  \n}\n  .job-title-chart .p-organizationchart-node-content {\n  border-radius: 10px;\n  width: 280px !important;\n}\n  .job-title-chart .main-data p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n  .job-title-chart .node-header {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  cursor: pointer;\n}\n  .job-title-chart .node-footer {\n  background-color: inherit;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 13px;\n}\n  .job-title-chart .node-footer:hover {\n  background-color: #e8f3f8;\n  color: #525050 !important;\n}\n  .job-title-chart .p-organizationchart-node-content .node-header:hover {\n  background: #e8f3f8 !important;\n}\n  .job-title-chart .no-employees {\n  margin-top: 1.8rem;\n  text-align: start;\n  color: #525050;\n  padding-bottom: 0.3rem;\n}\n  .job-title-chart .employees-no-section {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n  .job-title-chart .fte-content {\n  padding: 15px 0.7rem 0 0.7rem;\n  text-align: start;\n}\n  .job-title-chart .ft-image,   .job-title-chart .ft-file {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi10aXRsZS1vcmctY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUEyQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FBUkY7QUFsQkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFvQko7QUFsQkU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW9CSjtBQWxCRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFvQko7QUFPRTtFQUNFLDhCQUFBO0FBTEo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQU9FO0VBQ0UsMkNBQUE7QUFMSjtBQU9FO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBT0U7RUFDRSxlQUFBO0FBTEoiLCJmaWxlIjoiam9iLXRpdGxlLW9yZy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ub2RlLWNvbnRlbnQgaW1nIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgd2lkdGg6IDgwcHg7XHJcbi8vICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLmpvYi10aXRsZS1jaGFydCB7XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMjgwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1haW4tZGF0YSBwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5ub2RlLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5ub2RlLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLm5vZGUtZm9vdGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYzZjg7XHJcbiAgICBjb2xvcjogIzUyNTA1MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAuZW1wbG95ZWVzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNXB4IDAuN3JlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1zZWN0aW9uIC5pY29uIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICAuZW1wbG95ZWVzLXNlY3Rpb24gaSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyBwIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyBwOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcclxuICB9ICovXHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IC5ub2RlLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThmM2Y4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uby1lbXBsb3llZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBjb2xvcjogIzUyNTA1MDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgfVxyXG4gIC5lbXBsb3llZXMtbm8tc2VjdGlvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZnRlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweCAwLjdyZW0gMCAwLjdyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcbiAgLmZ0LWltYWdlLC5mdC1maWxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 77886:
/*!******************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/org-details-employees/org-details-employees.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgDetailsEmployeesComponent": () => (/* binding */ OrgDetailsEmployeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-card/employee-card.component */ 49963);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employees.service */ 20408);
/* harmony import */ var app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/group-by.service */ 58350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/skeletons/org-details-employees-list-skeleton/org-details-employees-list-skeleton.component */ 31534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function OrgDetailsEmployeesComponent_ng_container_17_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrgDetailsEmployeesComponent_ng_container_17_ng_container_3_p_4_Template_p_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const employee_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.openEmployeeCardDialog($event.target, employee_r6.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const employee_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r5.msgTranslate("mleft-10", "mright-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.msgTranslate(employee_r6.ar_Name, employee_r6.en_Name), " ");
} }
function OrgDetailsEmployeesComponent_ng_container_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrgDetailsEmployeesComponent_ng_container_17_ng_container_3_p_4_Template, 5, 3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](group_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", group_r4.List);
} }
function OrgDetailsEmployeesComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function OrgDetailsEmployeesComponent_ng_container_17_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.searchEmployees($event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrgDetailsEmployeesComponent_ng_container_17_ng_container_3_Template, 5, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.employeesGroupsFiltered);
} }
function OrgDetailsEmployeesComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-org-details-employees-list-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function OrgDetailsEmployeesComponent_ng_container_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "noEmployeeInOrg"), " ");
} }
function OrgDetailsEmployeesComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-messages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrgDetailsEmployeesComponent_ng_container_19_ng_template_2_Template, 4, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
class OrgDetailsEmployeesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeesService, groupByService, 
    // opened ass dialog
    dialogRef, data, 
    // to open another dialog
    dialog) {
        super();
        this.employeesService = employeesService;
        this.groupByService = groupByService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.expandedIndex = 0;
        this.employees = [];
        this.loaded = false;
        this.expandedIndex = data.expandedIndex;
        this.nodeData = data.nodeData;
    }
    ngOnInit() {
        if (this.checkNoBusinessOrCompany() &&
            this.nodeData.structureId > 0 &&
            this.nodeData.org.id > 0)
            this.getEmployeesByOrgId();
        const overlays = document.querySelectorAll(".cdk-overlay-backdrop");
        if (overlays.length > 0)
            overlays[overlays.length - 1].classList.add("no-overlay");
    }
    getEmployeesByOrgId() {
        this.employeesService
            .getAllByStructureAndOrgId(this.nodeData.structureId, this.nodeData.org.id)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.employees = res.data;
                if (this.employees.length > 0)
                    this.sortAndGroupEmployees();
                else
                    this.loaded = true;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    sortAndGroupEmployees() {
        this.employeesGroups = this.groupByService
            .groupByPartOfProperty(this.employees, this.languageService.isArabic ? "ar_Name" : "en_Name", 1)
            .sort((a, b) => {
            if (a.key < b.key)
                return -1;
            if (a.key > b.key)
                return 1;
            return 0;
        });
        this.employeesGroupsFiltered = this.employeesGroups.slice();
        this.loaded = true;
    }
    // open employee card dialog
    openEmployeeCardDialog(target, employeeId) {
        let lastTarget = this.getHeaderElement(target);
        let targetPositions = lastTarget.getBoundingClientRect();
        // dialog position x-axis (right or left)
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width / 2 + dialogWidth <= window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width / 2}px`;
        // can open right
        else if (targetPositions.left - dialogWidth / 2 - 10 >= 0)
            dialogPositions.left = `${targetPositions.left - dialogWidth / 2 - 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeCardComponent, {
            data: { employeeId: employeeId },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "80hv",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    getHeaderElement(target) {
        return target.classList.contains("mat-expansion-panel-body")
            ? target
            : this.getHeaderElement(target.parentElement);
    }
    // search in employees
    searchEmployees(searchName) {
        this.employeesGroupsFiltered = this.employeesGroups
            .map((item) => ({
            key: item.key,
            List: item.List.filter((emp) => emp.en_Name.toLowerCase().includes(searchName.toLowerCase()) ||
                emp.ar_Name.toLowerCase().includes(searchName.toLowerCase())),
        }))
            .filter((item) => item.List.length > 0);
    }
    // close dilog on resize screen
    onWindowResize(event) {
        this.dialogRef.close();
    }
}
OrgDetailsEmployeesComponent.ɵfac = function OrgDetailsEmployeesComponent_Factory(t) { return new (t || OrgDetailsEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_4__.GroupByService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
OrgDetailsEmployeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrgDetailsEmployeesComponent, selectors: [["app-org-details-employees"]], hostBindings: function OrgDetailsEmployeesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function OrgDetailsEmployeesComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 11, consts: [[1, "details-dialog-title"], [1, "mb-2"], [1, "type-name", "info"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "org-name"], [1, "details-dialog", "company"], ["multi", ""], [3, "expanded"], [1, "expantion-body"], [4, "ngIf"], [1, "form-control", "mbottom-15", 3, "placeholder", "keyup"], [4, "ngFor", "ngForOf"], [1, "key-emp"], ["role", "button"], ["class", "name-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "name-container", 3, "click"], [1, "img-small-icon"], [1, "pi", "pi-user"], [1, "emp-name"], ["severity", "warn"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function OrgDetailsEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-dialog-content", 6)(10, "mat-accordion", 7)(11, "mat-expansion-panel", 8)(12, "mat-expansion-panel-header")(13, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, OrgDetailsEmployeesComponent_ng_container_17_Template, 4, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, OrgDetailsEmployeesComponent_ng_container_18_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrgDetailsEmployeesComponent_ng_container_19_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.nodeData.org.code, " - ", ctx.msgTranslate(ctx.nodeData.org.ar_Name, ctx.nodeData.org.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.orgType.ar_Name, ctx.nodeData.orgType.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", ctx.expandedIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 9, "employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length > 0 && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.OrgDetailsEmployeesListSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_13__.Messages, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctZGV0YWlscy1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 52912:
/*!****************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/org-kpis/org-kpis.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgKpisComponent": () => (/* binding */ OrgKpisComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_org_management_mapper_org_kpi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/org-kpi */ 90709);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_org_kpis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/org-structure/org-kpis.service */ 27515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management-setup/org/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 85443);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 50260);
/* harmony import */ var _shared_components_dropdowns_hr_setup_kpi_dropdown_kpi_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/hr-setup/kpi-dropdown/kpi-dropdown.component */ 50162);



















function OrgKpisComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChangePage", function OrgKpisComponent_ng_container_20_Template_app_material_table_onChangePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.getList($event.pageIndex + 1, $event.pageSize)); })("deleteRow", function OrgKpisComponent_ng_container_20_Template_app_material_table_deleteRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r0.isLoaded)("dataSource", ctx_r0.dataSource)("mandatoryColomns", ctx_r0.mandatoryColomns)("optionalColomns", ctx_r0.optionalColomns)("page", ctx_r0.page)("actions", ctx_r0.rowFunctions);
} }
class OrgKpisComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(orgKpisService) {
        super();
        this.orgKpisService = orgKpisService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "kpi", "actions"];
        this.isLoaded = true;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            OrgTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            OrgId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            KPI_Id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        // if (this.checkNoBusinessOrCompany()) {
        // }
    }
    get formCtrls() {
        return this.form.controls;
    }
    getList(page, pageSize) {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        let orgId = this.formCtrls.OrgId.value;
        if (orgId > 0) {
            this.isLoaded = false;
            this.page.pageIndex = page;
            if (pageSize)
                this.page.pageSize = pageSize;
            let params = {
                PageNumber: page,
                pageSize: this.page.pageSize,
            };
            this.orgKpisService
                .getList(params, orgId)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_org_management_mapper_org_kpi__WEBPACK_IMPORTED_MODULE_0__.orgKpiDisplay)(res.data));
                    this.isLoaded = true;
                    this.page.length = res.meta.totalItemCount;
                }
                else
                    this.errorList(res?.message?.messages);
            });
        }
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                OrgId: this.form.value.OrgId,
                KPI_Id: this.form.value.KPI_Id,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.orgKpisService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getList(this.lastPage);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(kpi) {
        let msg = kpi.kpi;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(kpi);
        });
    }
    delete(kpi) {
        this.showLoading();
        this.orgKpisService.Delete(kpi.id).subscribe((res) => {
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
    clearForm() {
        this.formCtrls.KPI_Id.reset();
        this.submitted = false;
    }
}
OrgKpisComponent.ɵfac = function OrgKpisComponent_Factory(t) { return new (t || OrgKpisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_org_management_services_org_structure_org_kpis_service__WEBPACK_IMPORTED_MODULE_3__.OrgKpisService)); };
OrgKpisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: OrgKpisComponent, selectors: [["app-org-kpis"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 14, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["title", "orgKpis"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "orgTypeControl", "submitted", "filter", "change"], ["align", "end"], [3, "onClick"], [4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function OrgKpisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 3)(6, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-card-content", 5)(8, "div", 0)(9, "div", 1)(10, "form", 6)(11, "div", 0)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-org-types-dropdown-current-structure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7)(15, "app-organization-by-org-type-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function OrgKpisComponent_Template_app_organization_by_org_type_dropdown_change_15_listener() { return ctx.getList(ctx.firstPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-kpi-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-card-actions", 10)(19, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function OrgKpisComponent_Template_submit_btn_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, OrgKpisComponent_ng_container_20_Template, 3, 6, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx.moduleId, "/org-structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.OrgTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.OrgId)("orgTypeControl", ctx.formCtrls.OrgTypeId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.KPI_Id)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.OrgId.value > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_6__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_9__.OrgTypesDropdownCurrentStructureComponent, _shared_components_dropdowns_hr_setup_kpi_dropdown_kpi_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.KpiDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmcta3Bpcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5771:
/*!******************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/org-structure-details/org-structure-details.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgStructureDetailsComponent": () => (/* binding */ OrgStructureDetailsComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../org-structure-hierarchy-details/org-structure-hierarchy-details.component */ 89210);








function OrgStructureDetailsComponent_app_org_structure_hierarchy_details_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-org-structure-hierarchy-details", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("orgStructureId", ctx_r0.orgStructureId)("canNotEdit", true);
} }
class OrgStructureDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.orgStructureId = 0;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.orgStructureId = Number(params.get("orgStructureId")) ?? 0;
        });
    }
}
OrgStructureDetailsComponent.ɵfac = function OrgStructureDetailsComponent_Factory(t) { return new (t || OrgStructureDetailsComponent)(); };
OrgStructureDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrgStructureDetailsComponent, selectors: [["app-org-structure-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "mtop-15"], ["title", "orgStructureDetails"], [3, "url", "params"], [3, "orgStructureId", "canNotEdit", 4, "ngIf"], [3, "orgStructureId", "canNotEdit"]], template: function OrgStructureDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "page-title", 3)(6, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OrgStructureDetailsComponent_app_org_structure_hierarchy_details_7_Template, 1, 2, "app-org-structure-hierarchy-details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx.moduleId, "/org-structure/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.orgStructureId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_3__.OrgStructureHierarchyDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctc3RydWN0dXJlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89210:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/org-structure-hierarchy-details/org-structure-hierarchy-details.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgStructureHierarchyDetailsComponent": () => (/* binding */ OrgStructureHierarchyDetailsComponent)
/* harmony export */ });
/* harmony import */ var app_org_management_export_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/export_chart */ 31845);
/* harmony import */ var app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/org-management/mapper/org-structure */ 5798);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-org-structure-node/add-org-structure-node.component */ 56351);
/* harmony import */ var _org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../org-details-employees/org-details-employees.component */ 77886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/org-management/services/org-structure/org-structure.service */ 56808);
/* harmony import */ var app_system_setup_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/organizations.service */ 77304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/skeletons/chart-skeleton/chart-skeleton.component */ 44132);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown/org-types-dropdown.component */ 26941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var _job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../job-title-org-chart/job-title-org-chart.component */ 45313);
/* harmony import */ var _resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources-chart/resources-chart.component */ 80241);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



























const _c0 = ["companyChart"];
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "app-org-types-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_div_6_Template_app_org_types_dropdown_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.getAllOrganizationsByOrgType()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "app-prime-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 12)(6, "div", 15)(7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_div_6_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r7.exportChart(_r2, "companyChart", "image")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_div_6_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r8.exportChart(_r2, "companyChart", "pdf")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx_r1.formCtrls.organizationTypeId)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx_r1.formCtrls.organization_ID)("List", ctx_r1.organizationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 6, "exportAsImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 8, "exportAsPdf"));
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r16.upOneLevel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("left", ctx_r10.upOneLevelBtnPositions.btnLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 6, "upOneLevel"), " ", node_r9.parent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("left", ctx_r10.upOneLevelBtnPositions.lineLeft, "px");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22); const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.onDelete(node_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "General.delete"));
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_i_1_Template, 2, 3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25); const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.openAddEditDialog(node_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", node_r9.data.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "General.add"));
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 30)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r12.msgTranslate(node_r9.data.orgType == null ? null : node_r9.data.orgType.ar_Name, node_r9.data.orgType == null ? null : node_r9.data.orgType.en_Name), " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 30)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r13.msgTranslate(node_r9.data.structure.ar_Name, node_r9.data.structure.en_Name), " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 31)(1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_9_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r31); const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r29.openOrgDetailsDialog($event.target, node_r9.data, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", node_r9.data.numEmp, " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35); const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); ctx_r33.expandNode(node_r9); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r33.changePositions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", node_r9.children.length, " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_ng_container_0_Template, 6, 8, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 18)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_5_Template, 4, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_6_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_7_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_9_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.orgStructureDetailsFiltered && (ctx_r3.orgStructureDetailsFiltered[0] == null ? null : ctx_r3.orgStructureDetailsFiltered[0].data == null ? null : ctx_r3.orgStructureDetailsFiltered[0].data.parentId) > 0 && node_r9.data.currentFirstNode == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", (tmp_1_0 = node_r9.data.org == null ? null : node_r9.data.org.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r3.msgTranslate("mleft-50", "mright-50"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", node_r9.data.structure ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 10, node_r9.label) : node_r9.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.canNotEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", node_r9.data.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", node_r9.data.structure);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", node_r9.data.numEmp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", node_r9.children.length > 0);
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_app_chart_skeleton_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-chart-skeleton");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-tab-group", 1)(1, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_div_6_Template, 11, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("scroll", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template_div_scroll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.onScroll($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p-organizationChart", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onNodeExpand", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template_p_organizationChart_onNodeExpand_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r39.changePositions()); })("onNodeCollapse", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template_p_organizationChart_onNodeCollapse_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r40.changePositions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_10_Template, 11, 12, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_app_chart_skeleton_11_Template, 1, 0, "app-chart-skeleton", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-job-title-org-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-resources-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r0.languageService.isArabic ? "rtl" : "ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 11, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 13, "companyOrgStructure")));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("ar", ctx_r0.languageService.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r0.orgStructureDetailsFiltered)("preserveSpace", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 15, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 17, "jobtitleChart")));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 19, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 21, "resources")));
} }
class OrgStructureHierarchyDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__.AppHelpers {
    constructor(orgStructureService, organizationsService, dialog) {
        super();
        this.orgStructureService = orgStructureService;
        this.organizationsService = organizationsService;
        this.dialog = dialog;
        // selected part of structure hierarchy to show
        this.orgStructureDetailsFiltered = [];
        // organization dropdown
        this.organizationList = [];
        this.loading = true;
        this.firstOnChange = true;
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
        this.upOneLevelLastPositionsBeforeScroll = {
            btnLeft: 0,
            lineLeft: 0,
        };
        // setPositionBtnUpOneLevelAfterScroll() {
        //   this.upOneLevelBtnPositions.btnLeft =
        //     this.upOneLevelLastPositionsBeforeScroll.btnLeft -
        //     document.getElementById("companyChart")?.scrollLeft;
        // }
        // setPositionUpOneLevelLineAfterScroll() {
        //   this.upOneLevelBtnPositions.lineLeft =
        //     this.upOneLevelLastPositionsBeforeScroll.lineLeft -
        //     document.getElementById("companyChart")?.scrollLeft;
        // }
        this.exportChart = app_org_management_export_chart__WEBPACK_IMPORTED_MODULE_0__.exportChart;
    }
    ngOnInit() {
        this.form = this.fb.group({
            organizationTypeId: [null],
            organization_ID: [
                {
                    value: null,
                    disabled: true,
                },
            ],
        });
        // if (this.orgStructureId > 0 && this.CheckNoBusinessOrCompany()) {
        //   this.getStructureDetails();
        // }
        this.formCtrls.organization_ID.valueChanges.subscribe((orgId) => {
            // if orgId == 0 > don't change any thing
            if (orgId == null || orgId > 0)
                this.onChangeOrg(orgId);
        });
    }
    ngOnChanges(changes) {
        // console.log(changes);
        if (changes.orgStructureId)
            this.firstOnChange
                ? (this.firstOnChange = false)
                : this.onChangeBusinessAndCompanyId();
    }
    onChangeBusinessAndCompanyId() {
        if (this.orgStructureId > 0 && this.checkNoBusinessOrCompany()) {
            this.getStructureDetails();
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    getStructureDetails() {
        // this.showLoading();
        this.loading = true;
        this.orgStructureDetails = null;
        this.orgStructureDetailsFiltered = [];
        this.orgStructureService
            .getByIdWithHierarchy(this.orgStructureId)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.orgStructureDetails = (0,app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_1__.companyChartToMap)(res.data[0], this.orgStructureId);
                this.orgStructureDetailsFiltered = this.orgStructureDetails.slice();
                this.loading = false;
            }
            else {
                this.errorList(res?.message?.messages);
                this.loading = false;
            }
            // this.hideLoading();
        });
    }
    // on select organization to start show from it
    onChangeOrg(orgId) {
        this.orgStructureDetailsFiltered = [];
        if (orgId > 0)
            this.getChartDataByOrg(orgId, this.orgStructureDetails[0]);
        else
            this.orgStructureDetailsFiltered = this.orgStructureDetails;
    }
    getChartDataByOrg(orgId, item, upOneLevel = false) {
        item.children.map((item) => {
            if (item.data.org?.id == orgId) {
                this.orgStructureDetailsFiltered = [item];
                this.orgStructureDetailsFiltered[0].data.currentFirstNode = true;
                if (upOneLevel) {
                    this.formCtrls.organizationTypeId.setValue(item.data.orgType.id);
                    this.formCtrls.organization_ID.setValue(item.data.org.id);
                }
                this.changePositions();
                return;
            }
        });
        item.children.map((childItem) => this.getChartDataByOrg(orgId, childItem, upOneLevel));
    }
    changePositions() {
        setTimeout(() => {
            this.setPositionBtnUpOneLevel();
            this.setPositionUpOneLevelLine();
        }, 50);
    }
    // up one level in chart
    upOneLevel() {
        this.orgStructureDetailsFiltered[0].data.currentFirstNode = false;
        this.formCtrls.organization_ID.setValue(0);
        let parentOrgId = this.orgStructureDetailsFiltered[0].data.parentId;
        if (parentOrgId)
            this.getChartDataByOrg(parentOrgId, this.orgStructureDetails[0], true);
        // if up from one company node to get all companies
        else
            this.orgStructureDetailsFiltered = this.orgStructureDetails;
    }
    setPositionBtnUpOneLevel() {
        let btnWidth = document
            .querySelector(".upOneLevel-btn")
            ?.getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        // let firstNodeContainerPositions = document
        //   .querySelector(".p-organizationchart")
        //   ?.getBoundingClientRect();
        // this.upOneLevelBtnPositions.btnLeft =
        //   firstNodePositions?.left -
        //     Math.abs(firstNodeContainerPositions?.left) +
        //     document.getElementById("companyChart")?.scrollLeft / 2 +
        //     firstNodePositions?.width / 2 -
        //     btnWidth / 2 ?? 0;
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.width / 2 - btnWidth / 2 ?? 0;
        // this.upOneLevelLastPositionsBeforeScroll.btnLeft =
        //   this.upOneLevelBtnPositions.btnLeft;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        // let firstNodeContainerPositions = document
        //   .querySelector(".p-organizationchart")
        //   ?.getBoundingClientRect();
        // this.upOneLevelBtnPositions.lineLeft =
        //   firstNodePositions?.left -
        //     Math.abs(firstNodeContainerPositions?.left) +
        //     document.getElementById("companyChart")?.scrollLeft / 2 +
        //     firstNodePositions?.width / 2 ?? 0;
        this.upOneLevelBtnPositions.lineLeft = firstNodePositions?.width / 2 ?? 0;
        // this.upOneLevelLastPositionsBeforeScroll.lineLeft =
        //   this.upOneLevelBtnPositions.lineLeft;
    }
    // delete node
    onDelete(node) {
        let msg = this.msgTranslate(node.data.org.ar_Name, node.data.org.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.deleteNode(node);
        });
    }
    deleteNode(node) {
        let params = {
            StructureID: this.orgStructureId,
            OrgID: node.data.org.id,
        };
        this.showLoading();
        this.orgStructureService.DeleteNode(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getStructureDetails();
                // update exist organization dropdown after delete organization
                this.getAllOrganizationsByOrgType();
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    // add, edit node dialog
    openAddEditDialog(node /* , isAdd: boolean */) {
        return this.dialog
            .open(_add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_4__.AddOrgStructureNodeComponent, {
            data: {
                org_Structure_ID: this.orgStructureId,
                parenT_ID: node.data.org?.id ?? null,
                // parenT_ID: isAdd ? node.data.org?.id ?? null : node.data.parentId,
                // orG_TYPE_ID: isAdd ? 0 : node.data.orgType.id,
                // orG_ID: isAdd ? 0 : node.data.org.id,
                // currentOrganization: isAdd ? null : node.data.org,
            },
            minWidth: "50vw",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated) {
                this.getStructureDetails();
                // update exist organization dropdown after add organization
                this.getAllOrganizationsByOrgType();
            }
        });
    }
    // node details dialog
    openOrgDetailsDialog(target, nodeData, expandedIndex) {
        let targetNode = this.getHeaderElement(target);
        let targetPositions = targetNode.getBoundingClientRect();
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width + 10 + dialogWidth <=
            window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width + 10}px`;
        // can open right
        else if (targetPositions.left - dialogWidth - 10 >= 0)
            dialogPositions.left = `${targetPositions.left - dialogWidth - 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_5__.OrgDetailsEmployeesComponent, {
            data: {
                org_Structure_ID: this.orgStructureId,
                nodeData: nodeData,
                // 0 > details // 1 >> employees
                expandedIndex: expandedIndex,
            },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "90hv",
            // disableClose: true,
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    getHeaderElement(target) {
        return target.classList.contains("p-organizationchart-node-content")
            ? target
            : this.getHeaderElement(target.parentElement);
    }
    // expand node
    expandNode(node) {
        node.expanded = !node.expanded;
    }
    // organization list
    getAllOrganizationsByOrgType() {
        let orgTypeId = this.formCtrls.organizationTypeId.value;
        this.formCtrls.organization_ID.setValue(null);
        if (orgTypeId > 0) {
            // this.showLoading();
            this.organizationsService
                .GetAllByOrgTypeAndStructure(orgTypeId, this.orgStructureId)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success)) {
                    this.organizationList = res.data;
                }
                else
                    this.errorList(res?.message?.messages);
                // this.hideLoading();
            });
            this.formCtrls.organization_ID.enable();
        }
        else
            this.formCtrls.organization_ID.disable();
    }
    // change up one level btn & line positions
    onWindowResize(event) {
        // this.dialog.closeAll();
        this.changePositions();
    }
    onScroll($event) {
        // console.log($event);
        this.changePositions();
        // this.setPositionBtnUpOneLevelAfterScroll();
        // this.setPositionUpOneLevelLineAfterScroll();
    }
}
OrgStructureHierarchyDetailsComponent.ɵfac = function OrgStructureHierarchyDetailsComponent_Factory(t) { return new (t || OrgStructureHierarchyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_6__.OrgStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_7__.OrganizationsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
OrgStructureHierarchyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: OrgStructureHierarchyDetailsComponent, selectors: [["app-org-structure-hierarchy-details"]], viewQuery: function OrgStructureHierarchyDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.companyChart = _t.first);
    } }, hostBindings: function OrgStructureHierarchyDetailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("resize", function OrgStructureHierarchyDetailsComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
    } }, inputs: { orgStructureId: "orgStructureId", canNotEdit: "canNotEdit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "col-12 w-100 view-tabs-group", 3, "dir", 4, "ngIf"], [1, "col-12", "w-100", "view-tabs-group", 3, "dir"], [3, "label"], [1, "organizationchart-container", "company-chart"], [3, "formGroup"], ["class", "row mx-0", 4, "ngIf"], ["id", "companyChart", 3, "scroll"], ["styleClass", "company", 3, "value", "preserveSpace", "onNodeExpand", "onNodeCollapse"], ["companyChart", ""], ["pTemplate", "org"], [4, "ngIf"], [1, "row", "mx-0"], [1, "col-md-4", "col-12"], [3, "control", "filter", "change"], ["label", "organization", 3, "control", "List"], [1, "float-right"], [1, "ft-image", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [1, "ft-file", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [1, "node-header", 3, "id"], ["class", "action-icons", 4, "ngIf"], ["class", "node-content main-data", 4, "ngIf"], [1, "node-content"], ["class", "employees-no-section", 4, "ngIf"], ["class", "node-footer", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], [1, "action-icons"], ["mat-icon-button", "", "class", "pi pi-trash danger", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "pi", "pi-plus", "info", 3, "matTooltip", "click"], ["mat-icon-button", "", 1, "pi", "pi-trash", "danger", 3, "matTooltip", "click"], [1, "node-content", "main-data"], [1, "employees-no-section"], [1, "pi", "pi-users", 3, "click"], [1, "node-footer", 3, "click"]], template: function OrgStructureHierarchyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "p-toast")(1, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template, 20, 23, "mat-tab-group", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.orgStructureId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_8__.ChartSkeletonComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_9__.DropdownCoreComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.OrgTypesDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.Toast, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_24__.OrganizationChart, _job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_11__.JobTitleOrgChartComponent, _resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_12__.ResourcesChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe], styles: [".mat-tab-body-content {\n  padding: 0;\n  overflow-y: auto !important;\n}\n  .view-tabs-group .mat-tab-header .mat-tab-labels {\n  justify-content: flex-start;\n}\n  .mat-dialog-content {\n  max-height: 65vh !important;\n}\n[_nghost-%COMP%]     .company-chart .node-header i {\n  font-size: 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .company-chart .p-organizationchart .node-header {\n  position: relative;\n}\n[_nghost-%COMP%]     .company-chart .p-organizationchart .node-header span {\n  display: inline-block;\n}\n[_nghost-%COMP%]     .company-chart .p-organizationchart .action-icons {\n  float: right;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\n[_nghost-%COMP%]     .company-chart .p-organizationchart .action-icons i {\n  font-size: 1rem;\n  margin-right: 10px;\n}\n.ar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%] {\n  float: left !important;\n  left: 0 !important;\n  right: auto !important;\n  right: initial !important;\n}\n.ar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 0;\n}\n.ft-image[_ngcontent-%COMP%], .ft-file[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy1zdHJ1Y3R1cmUtaGllcmFyY2h5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7QUFESjtBQUlFO0VBQ0UsMkJBQUE7QUFGSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFKSjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQU1NO0VBQ0UscUJBQUE7QUFKUjtBQU9JO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFMTjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFVQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUFBLHlCQUFBO0FBUEY7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQU5KO0FBU0E7O0VBRUUsZUFBQTtBQU5GIiwiZmlsZSI6Im9yZy1zdHJ1Y3R1cmUtaGllcmFyY2h5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnZpZXctdGFicy1ncm91cCAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogNjV2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb21wYW55LWNoYXJ0IHtcclxuICAubm9kZS1oZWFkZXIgaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5wLW9yZ2FuaXphdGlvbmNoYXJ0IHtcclxuICAgIC5ub2RlLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLWljb25zIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTJweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hciAuYWN0aW9uLWljb25zIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICByaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbi5mdC1pbWFnZSxcclxuLmZ0LWZpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 90212:
/*!**************************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/org-structure-index/org-structure-index.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgStructureIndexComponent": () => (/* binding */ OrgStructureIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/org-structure */ 5798);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/org-structure/org-structure.service */ 56808);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);













class OrgStructureIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(orgStructureService) {
        super();
        this.orgStructureService = orgStructureService;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "ar_Name",
            "froM_DATE",
            "tO_DATE",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(null);
        this.isLoaded = false;
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.orgStructureService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource((0,app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_0__.orgStructureToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(orgStructure) {
        let msg = this.msgTranslate(orgStructure.ar_Name, orgStructure.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(orgStructure);
        });
    }
    delete(orgStructure) {
        this.showLoading();
        this.orgStructureService.Delete(orgStructure.id).subscribe((res) => {
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
OrgStructureIndexComponent.ɵfac = function OrgStructureIndexComponent_Factory(t) { return new (t || OrgStructureIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_org_management_services_org_structure_org_structure_service__WEBPACK_IMPORTED_MODULE_3__.OrgStructureService)); };
OrgStructureIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OrgStructureIndexComponent, selectors: [["app-org-structure-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 12, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "orgStructure", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function OrgStructureIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function OrgStructureIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function OrgStructureIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "side-helping-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-dashboard-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.orgStructureService)("actions", ctx.rowFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_7__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctc3RydWN0dXJlLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 80241:
/*!******************************************************************************************************!*\
  !*** ./src/app/org-management/components/org-structure/resources-chart/resources-chart.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesChartComponent": () => (/* binding */ ResourcesChartComponent)
/* harmony export */ });
/* harmony import */ var app_org_management_export_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/export_chart */ 31845);
/* harmony import */ var app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/org-management/mapper/org-structure */ 5798);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../employee-card/employee-card.component */ 49963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_resources_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/org-management/services/org-structure/resources-chart.service */ 35623);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/skeletons/chart-skeleton/chart-skeleton.component */ 44132);
/* harmony import */ var _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/personnel-setup/employees/employee-dropdown/employee-dropdown.component */ 70502);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















const _c0 = ["resourceChart"];
function ResourcesChartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResourcesChartComponent_div_6_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.exportChart(_r1, "resourceChart", "image")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResourcesChartComponent_div_6_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.exportChart(_r1, "resourceChart", "pdf")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "exportAsImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, "exportAsPdf"));
} }
function ResourcesChartComponent_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResourcesChartComponent_ng_template_10_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.upOneLevel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("left", ctx_r8.upOneLevelBtnPositions.btnLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 6, "upOneLevel"), " ", node_r7.parent, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("left", ctx_r8.upOneLevelBtnPositions.lineLeft, "px");
} }
function ResourcesChartComponent_ng_template_10_p_image_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-image", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, "img"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r9.fileService.preview(node_r7.data.img));
} }
function ResourcesChartComponent_ng_template_10_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ResourcesChartComponent_ng_template_10_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResourcesChartComponent_ng_template_10_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r17.expandNode(node_r7); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.changePositions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", node_r7.children.length, " ");
} }
function ResourcesChartComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ResourcesChartComponent_ng_template_10_ng_container_0_Template, 6, 8, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15)(2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ResourcesChartComponent_ng_template_10_p_image_4_Template, 2, 4, "p-image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ResourcesChartComponent_ng_template_10_ng_template_5_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResourcesChartComponent_ng_template_10_Template_div_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const node_r7 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.openEmployeeDetailsDialog($event.target, node_r7.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ResourcesChartComponent_ng_template_10_div_18_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.resourcesChart && (ctx_r2.resourcesChart[0] == null ? null : ctx_r2.resourcesChart[0].data == null ? null : ctx_r2.resourcesChart[0].data.parentID) > 0 && node_r7.data.currentFirstNode == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", node_r7.data.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", node_r7.data.img && node_r7.data.img != "/")("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 8, ctx_r2.msgTranslate(node_r7.data.ar_Name, node_r7.data.en_Name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 10, ctx_r2.msgTranslate(node_r7.data.jobTitleNameAr, node_r7.data.jobTitleName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 12, node_r7.data.joiningDate, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", node_r7.children.length > 0);
} }
function ResourcesChartComponent_app_chart_skeleton_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-chart-skeleton");
} }
class ResourcesChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_3__.AppHelpers {
    constructor(resourcesChartService, dialog) {
        super();
        this.resourcesChartService = resourcesChartService;
        this.dialog = dialog;
        this.loading = false;
        this.lastSelectedEmpId = 0;
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
        this.exportChart = app_org_management_export_chart__WEBPACK_IMPORTED_MODULE_0__.exportChart;
    }
    ngOnInit() {
        this.form = this.fb.group({
            employeeId: [null],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getResourcesChart(this.formCtrls.employeeId.value);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getResourcesChart(employeeId) {
        // console.log(this.form.value);
        if (employeeId > 0) {
            this.lastSelectedEmpId = employeeId;
            this.resourcesChart = null;
            this.loading = true;
            this.resourcesChartService
                .getEmployeesChart(employeeId)
                .pipe(this.cancelRequest())
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                    this.resourcesChart = (0,app_org_management_mapper_org_structure__WEBPACK_IMPORTED_MODULE_1__.employeeChartToMap)(res.data, this.lastSelectedEmpId);
                    this.resourcesChart[0].data.currentFirstNode = true;
                    this.changePositions();
                    if (this.lastSelectedEmpId == employeeId)
                        this.loading = false;
                }
                else {
                    this.errorList(res?.message?.messages);
                    this.loading = false;
                }
            });
        }
    }
    changePositions() {
        setTimeout(() => {
            this.setPositionBtnUpOneLevel();
            this.setPositionUpOneLevelLine();
        }, 100);
    }
    // on select employee to start show from it
    onChangeEmployee() {
        this.getResourcesChart(this.formCtrls.employeeId.value);
    }
    // up one level in chart
    upOneLevel() {
        // get employees start from parent employee id
        // after change dropdown value > call onChangeEmployee function
        this.formCtrls.employeeId.setValue(this.resourcesChart[0].data.parentID);
        // this.getResourcesChart(this.resourcesChart[0].data.parentID);
    }
    setPositionBtnUpOneLevel() {
        let btnWidth = document
            .querySelector(".upOneLevel-btn")
            ?.getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.width / 2 - btnWidth / 2 ?? 0;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.lineLeft = firstNodePositions?.width / 2 ?? 0;
    }
    // node details dialog
    openEmployeeDetailsDialog(target, nodeData) {
        let targetNode = this.getHeaderElement(target);
        let targetPositions = targetNode.getBoundingClientRect();
        let dialogWidth = 350;
        let dialogPositions = {};
        // can open left
        if (targetPositions.left + targetPositions.width / 2 + dialogWidth <=
            window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width / 2}px`;
        // can open right
        else if (targetPositions.left - dialogWidth / 2 - targetPositions.width / 2 + 10 >=
            0)
            dialogPositions.left = `${targetPositions.left - dialogWidth / 2 - targetPositions.width / 2 + 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeCardComponent, {
            data: { employeeId: nodeData.id },
            position: dialogPositions,
            width: `${dialogWidth}px`,
            // maxWidth: "350px",
            maxHeight: "80hv",
            // disableClose: true,
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((closed) => { });
    }
    getHeaderElement(target) {
        return target.classList.contains("p-organizationchart-node-content")
            ? target
            : this.getHeaderElement(target.parentElement);
    }
    // expand node
    expandNode(node) {
        node.expanded = !node.expanded;
    }
    // change up one level btn & line positions
    onWindowResize(event) {
        // this.dialog.closeAll();
        this.setPositionBtnUpOneLevel();
        this.setPositionUpOneLevelLine();
    }
    onScroll($event) {
        // console.log($event);
        this.changePositions();
    }
}
ResourcesChartComponent.ɵfac = function ResourcesChartComponent_Factory(t) { return new (t || ResourcesChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_org_management_services_org_structure_resources_chart_service__WEBPACK_IMPORTED_MODULE_5__.ResourcesChartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
ResourcesChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ResourcesChartComponent, selectors: [["app-resources-chart"]], viewQuery: function ResourcesChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.resourceChart = _t.first);
    } }, hostBindings: function ResourcesChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function ResourcesChartComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 7, consts: [[1, "organizationchart-container", "resources-chart"], [3, "formGroup"], [1, "row", "mx-0"], [1, "col-lg-4", "col-md-6", "col-12"], [3, "control", "filter", "change"], [1, "col-lg-4", "offset-lg-4", "col-md-4", "offset-md-2", "col-12"], ["class", "float-right", 4, "ngIf"], ["id", "resourceChart", 3, "scroll"], [3, "value", "preserveSpace", "onNodeExpand", "onNodeCollapse"], ["resourceChart", ""], ["pTemplate", "resources"], [4, "ngIf"], [1, "float-right"], [1, "ft-image", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [1, "ft-file", "font-large-1", "info", "m-1", 3, "matTooltip", "click"], [1, "node-header", 3, "id"], [1, "node-content", "main-data"], [1, "img-emp-chart"], ["preview", "true", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImg", ""], [1, "p-2", "info-content", 3, "click"], [1, "info"], [1, "node-content"], ["class", "node-footer", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], ["preview", "true", 3, "src", "alt"], [1, "alt-img-preview"], [1, "pi", "pi-user"], [1, "node-footer", 3, "click"]], template: function ResourcesChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "app-employee-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ResourcesChartComponent_Template_app_employee_dropdown_change_4_listener() { return ctx.onChangeEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ResourcesChartComponent_div_6_Template, 5, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function ResourcesChartComponent_Template_div_scroll_7_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p-organizationChart", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onNodeExpand", function ResourcesChartComponent_Template_p_organizationChart_onNodeExpand_8_listener() { return ctx.changePositions(); })("onNodeCollapse", function ResourcesChartComponent_Template_p_organizationChart_onNodeCollapse_8_listener() { return ctx.changePositions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ResourcesChartComponent_ng_template_10_Template, 19, 15, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ResourcesChartComponent_app_chart_skeleton_11_Template, 1, 0, "app-chart-skeleton", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.employeeId)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.resourcesChart != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.resourcesChart)("preserveSpace", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_skeletons_chart_skeleton_chart_skeleton_component__WEBPACK_IMPORTED_MODULE_6__.ChartSkeletonComponent, _shared_components_dropdowns_personnel_setup_employees_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.EmployeeDropdownComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_15__.OrganizationChart, primeng_image__WEBPACK_IMPORTED_MODULE_16__.Image, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".resources-chart .p-organizationchart-node-content {\n  width: 150px !important;\n  border-color: #c1c3c4;\n}\n  .resources-chart .p-organizationchart-node-content.dashed-border {\n  border-style: dashed;\n}\n  .resources-chart .info-content {\n  cursor: pointer;\n  margin-top: -10px;\n}\n  .resources-chart .node-header {\n  padding: 0;\n}\n  .resources-chart .node-header p {\n  margin: 0;\n  margin-bottom: 5px;\n}\n  .resources-chart .img-emp-chart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90px;\n}\n  .resources-chart .img-emp-chart p-image,   .resources-chart .img-emp-chart .p-image-preview-container > img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n}\n  .resources-chart .img-emp-chart .p-image-preview-indicator {\n  border-radius: 50%;\n}\n  .resources-chart .img-emp-chart .alt-img-preview {\n  background-color: rgba(0, 0, 0, 0.14);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n}\n  .resources-chart .img-emp-chart .alt-img-preview i {\n  font-size: 2.5rem;\n  color: rgba(0, 0, 0, 0.677);\n}\n  .resources-chart .ft-image,   .resources-chart .ft-file {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLHVCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdFO0VBQ0Usb0JBQUE7QUFESjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFHRTtFQUdFLFVBQUE7QUFISjtBQUlJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBRk47QUFLRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUpKO0FBTUk7O0VBT0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVROO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBV0k7RUFHRSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVhOO0FBYUk7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBWE47QUFjRTtFQUNFLGVBQUE7QUFaSiIsImZpbGUiOiJyZXNvdXJjZXMtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnJlc291cmNlcy1jaGFydCB7XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IHtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2MxYzNjNDtcclxuICB9XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50LmRhc2hlZC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5pbmZvLWNvbnRlbnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5ub2RlLWhlYWRlciB7XHJcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW1nLWVtcC1jaGFydCB7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgLy8gd2lkdGg6IDE1MHB4O1xyXG4gICAgcC1pbWFnZSxcclxuICAgIC8vIC5wLWltYWdlLXByZXZpZXctY29udGFpbmVyIHtcclxuICAgIC8vICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnAtaW1hZ2UtcHJldmlldy1jb250YWluZXIgPiBpbWcge1xyXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAucC1pbWFnZS1wcmV2aWV3LWluZGljYXRvciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5hbHQtaW1nLXByZXZpZXcge1xyXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTQpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLmFsdC1pbWctcHJldmlldyBpIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjc3KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZ0LWltYWdlLC5mdC1maWxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 97775:
/*!********************************************************************************************************!*\
  !*** ./src/app/org-management/components/policy-groups/add-policy-group/add-policy-group.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPolicyGroupComponent": () => (/* binding */ AddPolicyGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_org_management_components_policy_groups_intersection_emp_dialog_intersection_emp_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/org-management/components/policy-groups/intersection-emp-dialog/intersection-emp-dialog.component */ 1951);
/* harmony import */ var app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/enums/policy-group-grouping */ 26427);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_personnel_setup_components_employees_employement_information_emp_job_info_old_emp_job_section_emp_job_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/personnel-setup/components/employees/employement-information/emp-job-info/old-emp-job-section/emp-job-section.component */ 45679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/org-management/services/policy-group.service */ 49057);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var app_personnel_setup_components_employees_employee_select_table_employee_select_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/personnel-setup/components/employees/employee-select-table/employee-select-table.component */ 86195);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_org_management_policy_group_type_dropdown_policy_group_type_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-management/policy-group-type-dropdown/policy-group-type-dropdown.component */ 29260);






















function AddPolicyGroupComponent_mat_card_17_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "app-employee-select-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onSelect", function AddPolicyGroupComponent_mat_card_17_div_7_Template_app_employee_select_table_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.getSelectedEmp($event)); })("length", function AddPolicyGroupComponent_mat_card_17_div_7_Template_app_employee_select_table_length_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r5.getEmployeesCount($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("reset", ctx_r2.resetEmployeeList);
} }
function AddPolicyGroupComponent_mat_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-card", 14)(1, "mat-card-title", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "page-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-card-content", 16)(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddPolicyGroupComponent_mat_card_17_div_7_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-card-actions", 18)(9, "submit-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClick", function AddPolicyGroupComponent_mat_card_17_Template_submit_btn_onClick_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r6.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r0.selectedCount) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", ctx_r0.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.groupingTypeCtrl.value == ctx_r0.groupingList.OPEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx_r0.formCtrls.id.value)("color", ctx_r0.btn.darkBlue)("iconPositionBefore", false);
} }
function AddPolicyGroupComponent_mat_card_18_app_material_table_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-material-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onChangePage", function AddPolicyGroupComponent_mat_card_18_app_material_table_8_Template_app_material_table_onChangePage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.getDetailsList($event.pageIndex + 1, $event.pageSize)); })("deleteRow", function AddPolicyGroupComponent_mat_card_18_app_material_table_8_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isLoaded", ctx_r8.isLoaded)("dataSource", ctx_r8.dataSource)("mandatoryColomns", ctx_r8.mandatoryColomns)("optionalColomns", ctx_r8.optionalColomns)("actions", ctx_r8.rowFunctions)("page", ctx_r8.page)("showSpaceTop", false);
} }
function AddPolicyGroupComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-card", 14)(1, "mat-card-title", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "page-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "mat-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-card-content", 16)(6, "div", 4)(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AddPolicyGroupComponent_mat_card_18_app_material_table_8_Template, 1, 7, "app-material-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r1.dataSource == null ? null : ctx_r1.dataSource.data == null ? null : ctx_r1.dataSource.data.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", ctx_r1.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.policyGroupId > 0);
} }
class AddPolicyGroupComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(policyGroupService) {
        super();
        this.policyGroupService = policyGroupService;
        this.submitted = false;
        this.radioList = app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGroupingList;
        this.groupingList = app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping;
        this.mandatoryColomns = [
            "employee",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.actionType = app_personnel_setup_components_employees_employement_information_emp_job_info_old_emp_job_section_emp_job_section_component__WEBPACK_IMPORTED_MODULE_5__.ActionType;
        this.activatedRoute.paramMap.subscribe((params) => {
            this.policyGroupId = Number(params.get("id")) ?? 0;
            if (!this.policyGroupId) {
                this.radioList.map(e => e.disabled = false);
            }
        });
    }
    orgChanged($event) {
        console.log($event);
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            en_Name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            policyGroup_Type_ID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            groupingType: [app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping.OPEN, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
            selectedEmployeesIDs: [null],
            orgTypeId: [null],
            orgId: [null],
            countryId: [null],
            selectedOrgIDs: [null],
            selectedLocationsIDs: [null],
            selectedJobsIDs: [null],
        });
        // this.intersectionEmpDialog(null);
        // validations
        // this.this.groupingTypeCtrl.valueChanges.subscribe(val => {
        //   // open validation
        //   if (val == PolicyGroupGrouping.OPEN) {
        //     // this.selectedOrgIDs = [];
        //     // this.selectedLocationsIDs = [];
        //     this.formCtrls.selectedEmployeesIDs.setValidators([Validators.required]);
        //   } else {
        //     this.formCtrls.selectedEmployeesIDs.reset();
        //     this.formCtrls.selectedEmployeesIDs.removeValidators([Validators.required]);
        //   }
        //
        //   // organization validation
        //   if (val == PolicyGroupGrouping.ORGANIZATIONS) {
        //     // this.selectedEmployeesIDs = [];
        //     // this.selectedLocationsIDs = [];
        //     this.formCtrls.selectedOrgIDs.setValidators([Validators.required]);
        //   } else {
        //     this.formCtrls.selectedOrgIDs.reset();
        //     this.formCtrls.selectedOrgIDs.removeValidators([Validators.required]);
        //   }
        //
        //   // location validation
        //   if (val == PolicyGroupGrouping.LOCATION) {
        //     // this.selectedEmployeesIDs = [];
        //     // this.selectedOrgIDs = [];
        //     this.formCtrls.selectedLocationsIDs.setValidators([Validators.required]);
        //   } else {
        //     this.formCtrls.selectedLocationsIDs.reset();
        //     this.formCtrls.selectedLocationsIDs.removeValidators([Validators.required]);
        //   }
        //
        //   // job title validation
        //   // if (val == PolicyGroupGrouping.JOB_TITLE) {
        //   //   this.formCtrls.selectedLocationsIDs.setValidators([Validators.required]);
        //   // } else {
        //   //   this.formCtrls.selectedLocationsIDs.reset();
        //   //   this.formCtrls.selectedLocationsIDs.removeValidators([Validators.required]);
        //   // }
        // });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.policyGroupId > 0) {
            this.getById();
            this.getDetailsList(this.firstPage);
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    get groupingTypeCtrl() {
        return this.form.get("groupingType");
    }
    submit() {
        this.submitted = true;
        if (this.formCtrls.id.value == 0) {
            // open validation
            if (this.form.value.groupingType == app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping.OPEN && this.form.value.selectedEmployeesIDs?.length == 0) {
                this.error("mustSelectEmployeeAtLeast", "validation");
                return;
            }
            // organization validation
            if (this.form.value.groupingType == app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping.ORGANIZATIONS && this.form.value.selectedOrgIDs?.length == 0) {
                this.error("mustSelectOrgAtLeast", "validation");
                return;
            }
            // location validation
            if (this.form.value.groupingType == app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping.LOCATION && this.form.value.selectedLocationsIDs?.length == 0) {
                this.error("mustSelectLocationAtLeast", "validation");
                return;
            }
        }
        if (this.form.valid) {
            const model = {
                core_PolicyGroup: {
                    id: this.formCtrls.id.value,
                    ar_Name: this.formCtrls.ar_Name.value,
                    en_Name: this.formCtrls.en_Name.value,
                    policyGroup_Type_ID: this.formCtrls.policyGroup_Type_ID.value,
                    groupingType: this.groupingTypeCtrl.value,
                },
                selectedEmployeesIDs: this.formCtrls.selectedEmployeesIDs.value,
                selectedOrgIDs: this.formCtrls.selectedOrgIDs.value,
                SelectedLocationsIDs: this.formCtrls.selectedLocationsIDs.value,
            };
            model.core_PolicyGroup.id > 0 ? this.update(model) : this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.policyGroupService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.policyGroupId = res.data.id;
                this.formCtrls.id.setValue(this.policyGroupId);
                this.disableRadioList();
                // this.radioList.map(e => {
                //   if (e.value != res.data[0].groupingType) e.disabled = true;
                // });
                if (res?.intersectionEmployees?.length > 0) {
                    this.intersectionEmpDialog(res);
                }
                let url = `/org-management/${this.moduleId}/policy-group/edit/${this.policyGroupId}`;
                this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getDetailsList(this.firstPage);
                this.resetEmployeeList = true;
                //this.clearForm();
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.policyGroupService.edit(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                //   this.clearForm();
                if (res?.intersectionEmployees?.length > 0) {
                    this.intersectionEmpDialog(res);
                }
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getDetailsList(this.firstPage);
                this.resetEmployeeList = true;
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    getById() {
        this.showLoading();
        this.policyGroupService.getById(this.policyGroupId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.form.patchValue(res.data[0]);
                this.disableRadioList();
                // this.radioList.map(e => {
                //   if (e.value != res.data[0].groupingType) e.disabled = true;
                // });
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    getDetailsList(page, pageSize) {
        this.showLoading();
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.pageSize = pageSize;
        }
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.showLoading();
        this.policyGroupService.getDetailsList(params, this.policyGroupId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                res.data.map(e => e.employee = (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_4__.msgTranslate)(e.itemNameAR, e.itemNameEN));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(res.data);
                this.page.length = res.meta.totalItemCount;
                this.isLoaded = true;
                // this.detailsList = res.data;
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    intersectionEmpDialog(model) {
        this.dialogsService
            .addEditDialog(app_org_management_components_policy_groups_intersection_emp_dialog_intersection_emp_dialog_component__WEBPACK_IMPORTED_MODULE_2__.IntersectionEmpDialogComponent, model)
            .afterClosed()
            .subscribe((hasUpdate) => {
            if (hasUpdate)
                this.getDetailsList(this.currentPage);
        });
    }
    onDelete(item) {
        let msg = (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_4__.msgTranslate)(item.itemNameAR, item.itemNameEN);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(item);
            }
        });
    }
    delete(item) {
        this.showLoading();
        let params = {
            PolicyGroupId: item.policyGroupId,
            itemId: item.itemId,
            gropingType: this.form.value.groupingType
        };
        this.policyGroupService
            .deleteDetails(params)
            .subscribe((res) => {
            if (res.message.messageType == 1) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    // if last item in list: get previous page
                    this.getDetailsList(this.prevPage, this.page.pageSize);
                }
                else {
                    // if not last item in list: get current page
                    this.getDetailsList(this.currentPage, this.page.pageSize);
                }
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    getSelectedEmp(persons) {
        let ids = [];
        persons.forEach(e => ids.push(e.id));
        this.formCtrls.selectedEmployeesIDs.setValue(ids);
    }
    disableRadioList() {
        this.radioList.map(e => e.disabled = true);
    }
    changeGrouping() {
        this.formCtrls.orgId.reset();
        this.formCtrls.selectedOrgIDs.reset();
    }
    getEmployeesCount(count) { this.selectedCount = count; }
    clearForm() {
        this.form.reset({
            id: 0,
            groupingType: app_shared_enums_policy_group_grouping__WEBPACK_IMPORTED_MODULE_3__.PolicyGroupGrouping.OPEN
        });
        this.submitted = false;
    }
    getTitle() {
        if (this.groupingTypeCtrl.value == this.groupingList.OPEN)
            return "selectedEmployees";
        if (this.groupingTypeCtrl.value == this.groupingList.ORGANIZATIONS)
            return "organization";
        if (this.groupingTypeCtrl.value == this.groupingList.LOCATION)
            return "location";
        if (this.groupingTypeCtrl.value == this.groupingList.JOB_TITLE)
            return "jobTitle";
    }
}
AddPolicyGroupComponent.ɵfac = function AddPolicyGroupComponent_Factory(t) { return new (t || AddPolicyGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_6__.PolicyGroupService)); };
AddPolicyGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddPolicyGroupComponent, selectors: [["app-add-policy-group"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 13, consts: [[1, "title-no-margin"], ["title", "generalInfo"], [1, "mt-2"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-12"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], [3, "control", "submitted", "disable"], [1, "col-12", "mt-1"], ["label", "groupingType", "titleClass", "col-12 col-lg-2", 3, "control", "radioList", "submitted", "change"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [3, "title"], [1, "mt-4", "px-2"], ["class", "col col-lg-6", 4, "ngIf"], ["align", "end"], ["icon", "fas fa-save", 3, "id", "color", "iconPositionBefore", "onClick"], [1, "col", "col-lg-6"], [3, "reset", "onSelect", "length"], ["class", "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "page", "showSpaceTop", "onChangePage", "deleteRow", 4, "ngIf"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "page", "showSpaceTop", "onChangePage", "deleteRow"]], template: function AddPolicyGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-card-content", 3)(5, "div", 4)(6, "div", 5)(7, "form", 6)(8, "div", 4)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "policy-group-type-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 11)(16, "app-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddPolicyGroupComponent_Template_app_radio_button_change_16_listener() { return ctx.changeGrouping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, AddPolicyGroupComponent_mat_card_17_Template, 10, 6, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, AddPolicyGroupComponent_mat_card_18_Template, 9, 3, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.policyGroup_Type_ID)("submitted", ctx.submitted)("disable", ctx.policyGroupId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.groupingType)("radioList", ctx.radioList)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.groupingTypeCtrl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.policyGroupId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_8__.RadioButtonComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_9__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, app_personnel_setup_components_employees_employee_select_table_employee_select_table_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeSelectTableComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _shared_components_dropdowns_org_management_policy_group_type_dropdown_policy_group_type_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.PolicyGroupTypeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective], styles: [".navbar[_ngcontent-%COMP%] {\n  background: #FFF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wb2xpY3ktZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1wb2xpY3ktZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1951:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/org-management/components/policy-groups/intersection-emp-dialog/intersection-emp-dialog.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionEmpDialogComponent": () => (/* binding */ IntersectionEmpDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/policy-group.service */ 49057);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















const _c0 = function () { return []; };
class IntersectionEmpDialogComponent {
    constructor(model, dialogRef, policyGroupService) {
        this.model = model;
        this.dialogRef = dialogRef;
        this.policyGroupService = policyGroupService;
        this.policyStartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("");
        this.appHelper = new app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers();
        this.selectedEmployees = [];
        this.mandatoryColomns = [
            "employee",
            "code",
            app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.selectColName,
        ];
        if (model?.intersectionEmployees) {
            model?.intersectionEmployees.map((e) => {
                e.employee = (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.msgTranslate)(e.employeeNameAR, e.employeeNameEN);
                e.code = e.employeeCode;
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(model?.intersectionEmployees);
        }
        this.policyStartDate.valueChanges.subscribe(val => {
        });
    }
    submit() {
        if (this.selectedEmployees?.length === 0) {
            this.appHelper.error("mustSelectEmployeeAtLeast", "validation");
            return;
        }
        else {
            this.appHelper.showLoading();
            this.policyGroupService
                .saveIntersectionEmployees(this.selectedEmployees)
                .subscribe((res) => {
                if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.selectedEmployees = [];
                    this.dialogRef.close(true);
                    this.appHelper.addSuccessfullyMsg(res?.message?.messageTypeName);
                }
                else {
                    this.appHelper.errorList(res?.message?.messages);
                }
                this.appHelper.hideLoading();
            });
        } // else this.toastr.error("General.formNotValid");
    }
    onSelectEmployee(model) {
        const body = [];
        this.dataSource.data.forEach(e => {
            if (e.isSelected) {
                let item = {
                    employeeId: e.employeeId,
                    policyGroupId: this.model.data.id,
                    policyGroupTypeId: this.model.data.policyGroup_Type_ID,
                    policyStartDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.transformData(this.policyStartDate?.value),
                };
                body.push(item);
            }
        });
        this.selectedEmployees = body;
    }
}
IntersectionEmpDialogComponent.ɵfac = function IntersectionEmpDialogComponent_Factory(t) { return new (t || IntersectionEmpDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_4__.PolicyGroupService)); };
IntersectionEmpDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: IntersectionEmpDialogComponent, selectors: [["app-intersection-emp-dialog"]], decls: 21, vars: 17, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "intersectionEmployee", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", "mr-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0", "mt-1"], [1, "row"], [1, "col-12"], [1, "col-md-4", "col-12"], ["label", "startDate", 3, "control"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "showSpaceTop", "showPaginator", "showFilter", "selectedItems"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", 1, "btn", "btn-light", 3, "mat-dialog-close"], ["mat-raised-button", "", 1, "btn", "btn-darkBlue", 3, "click"]], template: function IntersectionEmpDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-dialog-content", 4)(6, "div", 5)(7, "div", 6)(8, "div", 5)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6)(12, "app-material-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedItems", function IntersectionEmpDialogComponent_Template_app_material_table_selectedItems_12_listener($event) { return ctx.onSelectEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function IntersectionEmpDialogComponent_Template_button_click_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.policyStartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", true)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](16, _c0))("showSpaceTop", false)("showPaginator", false)("showFilter", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 12, "General.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 14, "save"), " ");
    } }, dependencies: [_shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcnNlY3Rpb24tZW1wLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92087:
/*!**********************************************************************************************************!*\
  !*** ./src/app/org-management/components/policy-groups/policy-group-core/policy-group-core.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyGroupCoreComponent": () => (/* binding */ PolicyGroupCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _add_policy_group_add_policy_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-policy-group/add-policy-group.component */ 97775);








const _c0 = ["stepper"];
function PolicyGroupCoreComponent_app_add_new_btn_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-add-new-btn", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx_r0.moduleId, "/policy-group/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("params", ctx_r0.parentParam);
} }
class PolicyGroupCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor() {
        super();
        this.activatedRoute.paramMap.subscribe((params) => {
            this.policyGroupId = Number(params.get("id")) ?? 0;
        });
    }
    ngOnInit() { }
    // ngAfterViewInit() {
    //   this.stepper._getIndicatorType = () => "number";
    // }
    stepChanged() {
        // prevent inputs to be invalid after next & back
        this.stepper.selected.interacted = false;
    }
}
PolicyGroupCoreComponent.ɵfac = function PolicyGroupCoreComponent_Factory(t) { return new (t || PolicyGroupCoreComponent)(); };
PolicyGroupCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PolicyGroupCoreComponent, selectors: [["app-policy-group-core"]], viewQuery: function PolicyGroupCoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "title-no-margin", "title-section", "fixed-title"], ["title", "addPolicyGroup"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "cards-no-shadow", "has-fixed-title"], [1, "ptop-85"]], template: function PolicyGroupCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PolicyGroupCoreComponent_app_add_new_btn_3_Template, 1, 2, "app-add-new-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-add-policy-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.policyGroupId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx.moduleId, "/policy-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("params", ctx.pageParams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_2__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _add_policy_group_add_policy_group_component__WEBPACK_IMPORTED_MODULE_4__.AddPolicyGroupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3ktZ3JvdXAtY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 66676:
/*!************************************************************************************************************!*\
  !*** ./src/app/org-management/components/policy-groups/policy-group-index/policy-group-index.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyGroupIndexComponent": () => (/* binding */ PolicyGroupIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_org_management_mapper_policy_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/policy-group */ 16386);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/org-management/services/policy-group.service */ 49057);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/side-helping-menu/side-helping-menu.component */ 60544);
/* harmony import */ var app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/system-setup/dashboard-setup/components/dashboard-dispaly/dashboard-display.component */ 76400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












class PolicyGroupIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(policyGroupService) {
        super();
        this.policyGroupService = policyGroupService;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "ar_Name",
            "en_Name",
            "policyGroupType",
            "noOfEmployees",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
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
        this.policyGroupService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == 1) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource((0,app_org_management_mapper_policy_group__WEBPACK_IMPORTED_MODULE_0__.policyGroupDisplay)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res?.message?.messages);
        });
    }
    onDelete(policyGroup) {
        let msg = this.msgTranslate(policyGroup.ar_Name, policyGroup.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(policyGroup);
        });
    }
    delete(policyGroup) {
        this.showLoading();
        this.policyGroupService
            .Delete(policyGroup.id)
            .subscribe((res) => {
            if (res.message.messageType == 1) {
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
PolicyGroupIndexComponent.ɵfac = function PolicyGroupIndexComponent_Factory(t) { return new (t || PolicyGroupIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_org_management_services_policy_group_service__WEBPACK_IMPORTED_MODULE_2__.PolicyGroupService)); };
PolicyGroupIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PolicyGroupIndexComponent, selectors: [["app-policy-group-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 12, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "policyGroups", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "deleteRow"], [3, "title"], [3, "serviceId"]], template: function PolicyGroupIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChangePage", function PolicyGroupIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PolicyGroupIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "side-helping-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-dashboard-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.policyGroupService);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 10, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("serviceId", ctx.getCurrentServiceId());
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_components_side_helping_menu_side_helping_menu_component__WEBPACK_IMPORTED_MODULE_5__.SideHelpingMenuComponent, app_system_setup_dashboard_setup_components_dashboard_dispaly_dashboard_display_component__WEBPACK_IMPORTED_MODULE_6__.DashboardDisplayComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3ktZ3JvdXAtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 31845:
/*!************************************************!*\
  !*** ./src/app/org-management/export_chart.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportChart": () => (/* binding */ exportChart)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 9266);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 84177);


function exportChart(chart, elementId, type) {
    const chartElement = chart.el.nativeElement;
    const element = document.getElementById(elementId);
    const fullWidth = element.offsetWidth + element.scrollWidth;
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(chartElement, {
        width: fullWidth,
        height: element.offsetWidth,
    }).then((canvas) => {
        //width,height define the dimensions of the canvas
        const file = canvas.toDataURL("image/png");
        if (type == "image") {
            const link = document.createElement("a");
            link.href = file;
            link.download = elementId + ".jpeg";
            link.click();
        }
        else if (type == "pdf") {
            var x = 1200;
            var y = elementId == "companyChart" ? x / 10 : x / 3;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("l", "mm", [x, y]); // Landscape orientation, the dimensions of the page
            const width = doc.internal.pageSize.getWidth(); //The width of the image on the PDF
            const height = doc.internal.pageSize.getHeight(); // The height of the image on the PDF
            doc.addImage(file, "PNG", 20, 20, width - 20, height - 20);
            doc.save(elementId + ".pdf");
        }
    });
}


/***/ }),

/***/ 90709:
/*!**************************************************!*\
  !*** ./src/app/org-management/mapper/org-kpi.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orgKpiDisplay": () => (/* binding */ orgKpiDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function orgKpiDisplay(data) {
    return data.map((kpi) => {
        return {
            ...kpi,
            kpi: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(kpi.core_KPI?.ar_Name, kpi.core_KPI?.en_Name),
        };
    });
}


/***/ }),

/***/ 5798:
/*!********************************************************!*\
  !*** ./src/app/org-management/mapper/org-structure.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "companyChartToMap": () => (/* binding */ companyChartToMap),
/* harmony export */   "employeeChartToMap": () => (/* binding */ employeeChartToMap),
/* harmony export */   "jobTitleChartToMap": () => (/* binding */ jobTitleChartToMap),
/* harmony export */   "orgStructureToMap": () => (/* binding */ orgStructureToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function orgStructureToMap(orgStructures) {
    return orgStructures.map((orgStructure) => {
        return {
            ...orgStructure,
            froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(orgStructure.froM_DATE),
            tO_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(orgStructure.tO_DATE),
        };
    });
}
/* /////////////////// company structure chart /////////////////// */
function companyChartToMap(StructureHierarchy, orgStructureId) {
    // sort nodes
    let selectedIds = [];
    let sortedOrgNodes = [];
    while (sortedOrgNodes.length < StructureHierarchy.core_Org_Structure_Org.length) {
        companySortDataBeforeMap(StructureHierarchy.core_Org_Structure_Org, sortedOrgNodes, selectedIds);
    }
    // console.log(selectedOrgNodes, selectedIds);
    // all structure hierarchy
    let orgStructureDetails;
    orgStructureDetails = [
        {
            label: "structure",
            type: "org",
            styleClass: "structure-node",
            expanded: true,
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
            data: {
                parentId: null,
                org: null,
                orgType: null,
                numEmp: 0,
                structure: {
                    id: null,
                    ar_Name: StructureHierarchy.ar_Name,
                    en_Name: StructureHierarchy.en_Name,
                },
            },
            children: [],
        },
    ];
    // maping data
    sortedOrgNodes.map((item) => {
        let mapedItem = {
            label: `${item.core_Org?.code} - ${(0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(item.core_Org?.ar_Name, item.core_Org?.en_Name)}`,
            type: "org",
            styleClass: "org-node",
            expanded: false,
            data: {
                parentId: item.parenT_ID,
                org: item.core_Org,
                orgType: {
                    id: item.core_Org_TYPE?.id,
                    ar_Name: item.core_Org_TYPE?.ar_Name,
                    en_Name: item.core_Org_TYPE?.en_Name,
                },
                structure: null,
                structureId: orgStructureId,
                numEmp: item.numEmp,
            },
            children: [],
        };
        // root nodes (company)
        if (!item.parenT_ID) {
            orgStructureDetails[0].children.push(mapedItem);
        }
        // other nodes
        else
            companyMapChildrenData(mapedItem, orgStructureDetails[0].children);
    });
    return orgStructureDetails;
}
// to make sure that all parent nodes come before their children
function companySortDataBeforeMap(core_Org_Structure_Org, sortedOrgNodes, selectedIds) {
    core_Org_Structure_Org.forEach((item) => {
        if ((item.parenT_ID == null || selectedIds.includes(item.parenT_ID)) &&
            !selectedIds.includes(item.orG_ID)) {
            sortedOrgNodes.push(item);
            selectedIds.push(item.orG_ID);
        }
    });
}
function companyMapChildrenData(mapedItem, chatDataParentArray) {
    chatDataParentArray.map((lastItem) => {
        if (lastItem.data.org?.id == mapedItem.data.parentId) {
            lastItem.children.push(mapedItem);
            return;
        }
    });
    // if not found search in children
    chatDataParentArray.map((childItem) => {
        companyMapChildrenData(mapedItem, childItem.children);
    });
}
/* /////////////////// job title chart /////////////////// */
function jobTitleChartToMap(jobTitles) {
    let jobTitleOrgChart = [
        {
            label: jobTitles[0].code,
            type: "job-title",
            styleClass: "job-title-node",
            expanded: false,
            data: jobTitles[0],
            children: [],
        },
    ];
    jobTitleMapChildrenData(jobTitleOrgChart[0]);
    return jobTitleOrgChart;
}
function jobTitleMapChildrenData(parentJobTitle) {
    parentJobTitle.data.chiledJobTitles?.map((item) => {
        // maping data
        let mapedItem = {
            label: item.code,
            type: "job-title",
            styleClass: "job-title-node",
            expanded: false,
            data: item,
            children: [],
        };
        parentJobTitle.children.push(mapedItem);
        jobTitleMapChildrenData(mapedItem);
    });
}
/* /////////////////// employee chart /////////////////// */
function employeeChartToMap(employees, lastSelectedEmpId) {
    let firstEmployeeIndex = employees.findIndex((emp) => emp.id == lastSelectedEmpId);
    let resourcesChart = [];
    if (firstEmployeeIndex >= 0) {
        resourcesChart = [
            {
                label: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(employees[firstEmployeeIndex]?.ar_Name, employees[firstEmployeeIndex]?.en_Name),
                type: "resources",
                styleClass: employees[firstEmployeeIndex].isSolidEmp
                    ? ""
                    : "dashed-border",
                expanded: false,
                expandedIcon: "pi pi-folder-open",
                collapsedIcon: "pi pi-folder",
                data: employees[firstEmployeeIndex],
                children: [],
            },
        ];
        // maping data
        employees
            .filter((emp) => emp.id != lastSelectedEmpId)
            .map((item) => {
            let mapedItem = {
                label: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(item.ar_Name, item.en_Name),
                type: "resources",
                styleClass: item.isSolidEmp ? "" : "dashed-border",
                expanded: false,
                expandedIcon: "pi pi-folder-open",
                collapsedIcon: "pi pi-folder",
                data: item,
                children: [],
            };
            // root node
            if (item.parentID == lastSelectedEmpId) {
                resourcesChart[0].children.push(mapedItem);
            }
            // other nodes
            else if (item.id != lastSelectedEmpId)
                employeeMapChildrenData(mapedItem, resourcesChart[0].children);
        });
    }
    return resourcesChart;
}
function employeeMapChildrenData(mapedItem, chatDataParentArray) {
    chatDataParentArray.map((lastItem) => {
        if (lastItem.data.id == mapedItem.data.parentID) {
            lastItem.children.push(mapedItem);
            return;
        }
    });
    // if not found search in children
    chatDataParentArray.map((childItem) => {
        employeeMapChildrenData(mapedItem, childItem.children);
    });
}


/***/ }),

/***/ 16386:
/*!*******************************************************!*\
  !*** ./src/app/org-management/mapper/policy-group.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "policyGroupDisplay": () => (/* binding */ policyGroupDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function policyGroupDisplay(data) {
    return data.map((ele) => {
        return {
            id: ele?.core_PolicyGroup?.id,
            ar_Name: ele?.core_PolicyGroup?.ar_Name,
            en_Name: ele?.core_PolicyGroup?.en_Name,
            policyGroupType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.msgTranslate)(ele?.core_PolicyGroup?.core_PolicyGroup_Type?.ar_Name, ele?.core_PolicyGroup?.core_PolicyGroup_Type?.en_Name),
            noOfEmployees: ele.countEmpsOnPolicy
        };
    });
}


/***/ }),

/***/ 2532:
/*!*****************************************************************!*\
  !*** ./src/app/org-management/org-management-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgManagementRoutingModule": () => (/* binding */ OrgManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/org-structure/org-structure-index/org-structure-index.component */ 90212);
/* harmony import */ var _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/org-structure/add-org-structure/add-org-structure.component */ 19892);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/org-structure/org-structure-details/org-structure-details.component */ 5771);
/* harmony import */ var _components_jobs_profile_jobs_profile_index_jobs_profile_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jobs-profile/jobs-profile-index/jobs-profile-index.component */ 27358);
/* harmony import */ var _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/jobs-profile/add-job-profile/add-job-profile.component */ 72441);
/* harmony import */ var _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/jobs-profile/assign-job-to-org/assign-job-to-org.component */ 69746);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_org_structure_org_kpis_org_kpis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/org-structure/org-kpis/org-kpis.component */ 52912);
/* harmony import */ var _components_policy_groups_policy_group_index_policy_group_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/policy-groups/policy-group-index/policy-group-index.component */ 66676);
/* harmony import */ var app_org_management_components_policy_groups_policy_group_core_policy_group_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/org-management/components/policy-groups/policy-group-core/policy-group-core.component */ 92087);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    {
        path: "org-structure",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.org_structure },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_0__.OrgStructureIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.org_structure_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__.AddOrgStructureComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_org_structure },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:orgStructureId",
                component: _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__.AddOrgStructureComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_org_structure },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "details/:orgStructureId",
                component: _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_3__.OrgStructureDetailsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.org_structure_details },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "kpis",
                component: _components_org_structure_org_kpis_org_kpis_component__WEBPACK_IMPORTED_MODULE_8__.OrgKpisComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.org_kpis },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "job-profile",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.job_profile },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_jobs_profile_jobs_profile_index_jobs_profile_index_component__WEBPACK_IMPORTED_MODULE_4__.JobsProfileIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.job_profile_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__.AddJobProfileComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_job_profile },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:jobId",
                component: _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__.AddJobProfileComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_job_profile },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "assign-job-to-org",
                component: _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_6__.AssignJobToOrgComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.assign_job_to_org },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "policy-group",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.policy_group },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_policy_groups_policy_group_index_policy_group_index_component__WEBPACK_IMPORTED_MODULE_9__.PolicyGroupIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.policy_group_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: app_org_management_components_policy_groups_policy_group_core_policy_group_core_component__WEBPACK_IMPORTED_MODULE_10__.PolicyGroupCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_policy_group },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:id",
                component: app_org_management_components_policy_groups_policy_group_core_policy_group_core_component__WEBPACK_IMPORTED_MODULE_10__.PolicyGroupCoreComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_policy_group },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_11__.CheckIsViewAllowedGuard],
            },
        ],
    },
];
class OrgManagementRoutingModule {
}
OrgManagementRoutingModule.ɵfac = function OrgManagementRoutingModule_Factory(t) { return new (t || OrgManagementRoutingModule)(); };
OrgManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: OrgManagementRoutingModule });
OrgManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](OrgManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 90446:
/*!*********************************************************!*\
  !*** ./src/app/org-management/org-management.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgManagementModule": () => (/* binding */ OrgManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _org_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org-management-routing.module */ 2532);
/* harmony import */ var _components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/org-structure/org-structure-index/org-structure-index.component */ 90212);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/org-structure/add-org-structure/add-org-structure.component */ 19892);
/* harmony import */ var _components_org_structure_org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/org-structure/org-structure-hierarchy-details/org-structure-hierarchy-details.component */ 89210);
/* harmony import */ var _components_org_structure_add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/org-structure/add-org-structure-node/add-org-structure-node.component */ 56351);
/* harmony import */ var _components_org_structure_org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/org-structure/org-details-employees/org-details-employees.component */ 77886);
/* harmony import */ var _components_org_structure_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/org-structure/employee-card/employee-card.component */ 49963);
/* harmony import */ var _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/org-structure/org-structure-details/org-structure-details.component */ 5771);
/* harmony import */ var _components_org_structure_job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/org-structure/job-title-org-chart/job-title-org-chart.component */ 45313);
/* harmony import */ var _components_org_structure_job_title_details_dialog_job_title_details_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/org-structure/job-title-details-dialog/job-title-details-dialog.component */ 5192);
/* harmony import */ var _components_jobs_profile_jobs_profile_index_jobs_profile_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jobs-profile/jobs-profile-index/jobs-profile-index.component */ 27358);
/* harmony import */ var _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/jobs-profile/add-job-profile/add-job-profile.component */ 72441);
/* harmony import */ var _components_jobs_profile_job_career_path_job_career_path_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/jobs-profile/job-career-path/job-career-path.component */ 22218);
/* harmony import */ var _components_jobs_profile_job_competences_job_competences_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/jobs-profile/job-competences/job-competences.component */ 70095);
/* harmony import */ var _components_jobs_profile_job_kpi_job_kpi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/jobs-profile/job-kpi/job-kpi.component */ 73847);
/* harmony import */ var _components_jobs_profile_job_custodies_job_custodies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/jobs-profile/job-custodies/job-custodies.component */ 99827);
/* harmony import */ var _components_jobs_profile_job_training_path_job_training_path_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/jobs-profile/job-training-path/job-training-path.component */ 27035);
/* harmony import */ var _components_jobs_profile_job_appraisal_method_job_appraisal_method_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/jobs-profile/job-appraisal-method/job-appraisal-method.component */ 89721);
/* harmony import */ var _components_jobs_profile_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/jobs-profile/job-description/job-description.component */ 25526);
/* harmony import */ var _components_jobs_profile_job_competence_level_details_dialog_job_competence_level_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/jobs-profile/job-competence-level-details-dialog/job-competence-level-details-dialog.component */ 42444);
/* harmony import */ var _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/jobs-profile/assign-job-to-org/assign-job-to-org.component */ 69746);
/* harmony import */ var _components_org_structure_resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/org-structure/resources-chart/resources-chart.component */ 80241);
/* harmony import */ var _components_policy_groups_load_policies_group_load_policies_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/policy-groups/load-policies-group/load-policies-group.component */ 29467);
/* harmony import */ var _components_org_structure_org_kpis_org_kpis_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/org-structure/org-kpis/org-kpis.component */ 52912);
/* harmony import */ var _components_policy_groups_policy_group_index_policy_group_index_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/policy-groups/policy-group-index/policy-group-index.component */ 66676);
/* harmony import */ var _components_policy_groups_add_policy_group_add_policy_group_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/policy-groups/add-policy-group/add-policy-group.component */ 97775);
/* harmony import */ var _components_policy_groups_intersection_emp_dialog_intersection_emp_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/policy-groups/intersection-emp-dialog/intersection-emp-dialog.component */ 1951);
/* harmony import */ var _components_policy_groups_policy_group_core_policy_group_core_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/policy-groups/policy-group-core/policy-group-core.component */ 92087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 22560);































class OrgManagementModule {
}
OrgManagementModule.ɵfac = function OrgManagementModule_Factory(t) { return new (t || OrgManagementModule)(); };
OrgManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: OrgManagementModule });
OrgManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _org_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](OrgManagementModule, { declarations: [_components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_1__.OrgStructureIndexComponent,
        _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_3__.AddOrgStructureComponent,
        _components_org_structure_org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_4__.OrgStructureHierarchyDetailsComponent,
        _components_org_structure_add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_5__.AddOrgStructureNodeComponent,
        _components_org_structure_org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_6__.OrgDetailsEmployeesComponent,
        _components_org_structure_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_7__.EmployeeCardComponent,
        _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_8__.OrgStructureDetailsComponent,
        _components_org_structure_job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_9__.JobTitleOrgChartComponent,
        _components_org_structure_job_title_details_dialog_job_title_details_dialog_component__WEBPACK_IMPORTED_MODULE_10__.JobTitleDetailsDialogComponent,
        _components_jobs_profile_jobs_profile_index_jobs_profile_index_component__WEBPACK_IMPORTED_MODULE_11__.JobsProfileIndexComponent,
        _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_12__.AddJobProfileComponent,
        _components_jobs_profile_job_career_path_job_career_path_component__WEBPACK_IMPORTED_MODULE_13__.JobCareerPathComponent,
        _components_jobs_profile_job_competences_job_competences_component__WEBPACK_IMPORTED_MODULE_14__.JobCompetencesComponent,
        _components_jobs_profile_job_kpi_job_kpi_component__WEBPACK_IMPORTED_MODULE_15__.JobKpiComponent,
        _components_jobs_profile_job_custodies_job_custodies_component__WEBPACK_IMPORTED_MODULE_16__.JobCustodiesComponent,
        _components_jobs_profile_job_training_path_job_training_path_component__WEBPACK_IMPORTED_MODULE_17__.JobTrainingPathComponent,
        _components_jobs_profile_job_appraisal_method_job_appraisal_method_component__WEBPACK_IMPORTED_MODULE_18__.JobAppraisalMethodComponent,
        _components_jobs_profile_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_19__.JobDescriptionComponent,
        _components_jobs_profile_job_competence_level_details_dialog_job_competence_level_details_dialog_component__WEBPACK_IMPORTED_MODULE_20__.JobCompetenceLevelDetailsDialogComponent,
        _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_21__.AssignJobToOrgComponent,
        _components_org_structure_resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_22__.ResourcesChartComponent,
        _components_org_structure_org_kpis_org_kpis_component__WEBPACK_IMPORTED_MODULE_24__.OrgKpisComponent,
        _components_policy_groups_policy_group_index_policy_group_index_component__WEBPACK_IMPORTED_MODULE_25__.PolicyGroupIndexComponent,
        _components_policy_groups_add_policy_group_add_policy_group_component__WEBPACK_IMPORTED_MODULE_26__.AddPolicyGroupComponent,
        _components_policy_groups_intersection_emp_dialog_intersection_emp_dialog_component__WEBPACK_IMPORTED_MODULE_27__.IntersectionEmpDialogComponent,
        _components_policy_groups_policy_group_core_policy_group_core_component__WEBPACK_IMPORTED_MODULE_28__.PolicyGroupCoreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule, _org_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_components_policy_groups_load_policies_group_load_policies_group_component__WEBPACK_IMPORTED_MODULE_23__.LoadPoliciesGroupComponent,
        _components_jobs_profile_job_career_path_job_career_path_component__WEBPACK_IMPORTED_MODULE_13__.JobCareerPathComponent,
        _components_jobs_profile_job_competences_job_competences_component__WEBPACK_IMPORTED_MODULE_14__.JobCompetencesComponent] }); })();


/***/ }),

/***/ 60746:
/*!**********************************************************************************!*\
  !*** ./src/app/org-management/services/org-structure/job-title-chart.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobTitleChartService": () => (/* binding */ JobTitleChartService)
/* harmony export */ });
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class JobTitleChartService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService {
    constructor() {
        super();
    }
    getJobTitleHierarchy(jobId) {
        return this.get("OrgManagement/JobTitle/GetAll_Structure", {
            params: {
                $filter: `id eq ${jobId}`,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.core_Org_Job_Title}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.core_Org},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.Core_Person_Instance_Job_Title}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.Core_Person_Instance}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.Core_Person},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_0__.db.Core_Job_Title_Family}`,
            },
        });
    }
}
JobTitleChartService.ɵfac = function JobTitleChartService_Factory(t) { return new (t || JobTitleChartService)(); };
JobTitleChartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JobTitleChartService, factory: JobTitleChartService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 27515:
/*!***************************************************************************!*\
  !*** ./src/app/org-management/services/org-structure/org-kpis.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgKpisService": () => (/* binding */ OrgKpisService)
/* harmony export */ });
/* harmony import */ var app_org_management_mapper_org_kpi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management/mapper/org-kpi */ 90709);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class OrgKpisService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_2__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("OrgStructure/Create_KpiOrg", data);
    }
    getList(params, orgId) {
        return this.get("OrgStructure/GetList_KpiOrg", {
            params: {
                ...params,
                $expand: app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_KPI,
                $filter: `orgId eq ${orgId}`,
            },
        });
    }
    getAll() {
        return this.get("OrgStructure/GetAll_KpiOrg").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            res.data = (0,app_org_management_mapper_org_kpi__WEBPACK_IMPORTED_MODULE_0__.orgKpiDisplay)(res.data);
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("OrgStructure/Delete_KpiOrg", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        // this.getAll();
    }
}
OrgKpisService.ɵfac = function OrgKpisService_Factory(t) { return new (t || OrgKpisService)(); };
OrgKpisService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OrgKpisService, factory: OrgKpisService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35623:
/*!**********************************************************************************!*\
  !*** ./src/app/org-management/services/org-structure/resources-chart.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesChartService": () => (/* binding */ ResourcesChartService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ResourcesChartService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getEmployeesChart(employeeId) {
        return this.get("personnel/Employees/GetAll_EmployeesCard_Structure", {
            params: {
                PerinsID: employeeId,
            },
        });
    }
}
ResourcesChartService.ɵfac = function ResourcesChartService_Factory(t) { return new (t || ResourcesChartService)(); };
ResourcesChartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResourcesChartService, factory: ResourcesChartService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 57993:
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/assign-as-org-manager-dialog/assign-as-org-manager-dialog.component.ts ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignAsOrgManagerDialogComponent": () => (/* binding */ AssignAsOrgManagerDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_personnel_setup_mapper_emp_employment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/personnel-setup/mapper/emp-employment */ 61757);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employement_information_employee_assign_as_org_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/personnel-setup/services/employees/employement-information/employee-assign-as-org-manager.service */ 59273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);



















class AssignAsOrgManagerDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(EmployeeAssignAsOrgManagerService, org, dialogRef) {
        super();
        this.EmployeeAssignAsOrgManagerService = EmployeeAssignAsOrgManagerService;
        this.org = org;
        this.dialogRef = dialogRef;
        this.mandatoryColomns = [
            "employee",
            "startDate",
            "endDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_4__.ViewsManager.emp_job_info_assign_manager_sec);
    }
    ngOnInit() {
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            from_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany() && this.org.person_Instance_ID > 0) {
            this.getList(this.firstPage);
        }
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.dialogSize = pageSize;
        }
        let params = {
            PageNumber: page,
            pageSize: this.page.dialogSize,
        };
        this.EmployeeAssignAsOrgManagerService.getList(
        // this.org.person_Instance_ID,
        this.org.core_Org?.id, params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource((0,app_personnel_setup_mapper_emp_employment__WEBPACK_IMPORTED_MODULE_0__.empAssignManagerDisplay)(res.data));
                this.page.length = res.meta.totalItemCount;
                this.isLoaded = true;
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
                Person_Instance_ID: this.org.person_Instance_ID,
                Person_Instance_Org_ID: this.org.id,
                From_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.form.value.from_Date),
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading("manager");
        this.EmployeeAssignAsOrgManagerService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getList(this.firstPage);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("manager");
        });
    }
    onDelete(manager) {
        let msg = `${manager.employee} (${manager.startDate} - ${manager.endDate})`;
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(manager);
            }
        });
    }
    delete(manager) {
        let deleteParams = {
            prtid: manager.person_Instance_ID,
            orgperid: manager.person_Instance_Org_ID,
            fromdate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(manager.from_Date),
        };
        this.showLoading("manager");
        this.EmployeeAssignAsOrgManagerService.Delete(deleteParams).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    // if last item in list: get previous page
                    this.getList(this.prevPage, this.page.dialogSize);
                }
                else {
                    // if not last item in list: get current page
                    this.getList(this.currentPage, this.page.dialogSize);
                }
                // this.isUpdated(true);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("manager");
        });
    }
    clearForm() {
        this.form.reset( /* { id: 0 } */);
        this.submitted = false;
    }
}
AssignAsOrgManagerDialogComponent.ɵfac = function AssignAsOrgManagerDialogComponent_Factory(t) { return new (t || AssignAsOrgManagerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employement_information_employee_assign_as_org_manager_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeAssignAsOrgManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
AssignAsOrgManagerDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AssignAsOrgManagerDialogComponent, selectors: [["app-assign-as-org-manager-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 15, consts: [[3, "name"], ["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "assignManager", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "float-right", "mb-1", "bg-light-danger", "mr-1"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-6", "col-4"], ["label", "date", 3, "control", "submitted"], [1, "col-4"], ["icon", "fas fa-save", 1, "btn-large", "mt-1", "line-height-3", 3, "color", "iconPositionBefore", "onClick"], [1, "table-in-forms", 3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "isDialogSize", "showFilter", "showSpaceTop", "onChangePage", "deleteRow"]], template: function AssignAsOrgManagerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 5)(7, "form", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 10)(12, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function AssignAsOrgManagerDialogComponent_Template_submit_btn_onClick_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChangePage", function AssignAsOrgManagerDialogComponent_Template_app_material_table_onChangePage_14_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function AssignAsOrgManagerDialogComponent_Template_app_material_table_deleteRow_14_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("name", "manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.from_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("isDialogSize", true)("showFilter", false)("showSpaceTop", false);
    } }, dependencies: [_shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__.DatepickerComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24tYXMtb3JnLW1hbmFnZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27849:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/close-job-dialog/close-job-dialog.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseJobDialogComponent": () => (/* binding */ CloseJobDialogComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employement-information/employee-job-information.service */ 89609);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














class CloseJobDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeJobInfoService, dialogRef, job) {
        super();
        this.employeeJobInfoService = employeeJobInfoService;
        this.dialogRef = dialogRef;
        this.job = job;
        this.CloseDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
        this.submitted = false;
    }
    submit() {
        this.submitted = true;
        if (this.CloseDate.valid) {
            this.showLoading("close");
            let params = {
                Employee_Job_Title_ID: this.job?.id,
                CloseDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.transformData(this.CloseDate.value)
            };
            this.employeeJobInfoService
                .close(params)
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                    this.success(res?.message?.messageTypeName);
                    this.CloseDate.reset();
                    this.submitted = false;
                    this.dialogRef.close();
                }
                else
                    this.errorList(res?.message?.messages);
                this.hideLoading("close");
            });
        }
    }
}
CloseJobDialogComponent.ɵfac = function CloseJobDialogComponent_Factory(t) { return new (t || CloseJobDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA)); };
CloseJobDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CloseJobDialogComponent, selectors: [["app-close-job-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 11, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "close_job", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", "mr-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0", "mt-3"], [1, "row"], [1, "col-md-4", "col-5"], ["label", "date", 3, "control", "submitted"], [1, "col-4"], ["label", "close_job", "icon", "fas fa-save", 1, "btn-large", "mt-1", "line-height-3", "mr-0", "ml-0", 3, "color", "iconPositionBefore", "onClick"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", 1, "btn", "btn-light", 3, "mat-dialog-close"], [3, "name"]], template: function CloseJobDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-dialog-content", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8)(11, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function CloseJobDialogComponent_Template_submit_btn_onClick_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ngx-spinner", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.job == null ? null : ctx.job.core_Job_Title == null ? null : ctx.job.core_Job_Title.ar_Name, ctx.job == null ? null : ctx.job.core_Job_Title == null ? null : ctx.job.core_Job_Title.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.CloseDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.btn.darkBlue)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 9, "General.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", "close");
    } }, dependencies: [_shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG9zZS1qb2ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50991:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/emp-job-table/emp-job-table.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "EmpJobTableComponent": () => (/* binding */ EmpJobTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/personnel-setup/services/employees/general-info/emp-general-info.service */ 22699);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_personnel_setup_components_employees_employement_information_emp_job_info_close_job_dialog_close_job_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/personnel-setup/components/employees/employement-information/emp-job-info/close-job-dialog/close-job-dialog.component */ 27849);
/* harmony import */ var app_personnel_setup_components_employees_employement_information_emp_job_info_assign_as_org_manager_dialog_assign_as_org_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/personnel-setup/components/employees/employement-information/emp-job-info/assign-as-org-manager-dialog/assign-as-org-manager-dialog.component */ 57993);
/* harmony import */ var app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/personnel-setup/services/employees/employement-information/employee-job-information.service */ 89609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_table_skeleton_table_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/skeletons/table-skeleton/table-skeleton.component */ 98814);
/* harmony import */ var _shared_components_row_functions_row_functions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/row-functions/row-functions.component */ 58313);
/* harmony import */ var _shared_components_resources_prime_paginator_prime_paginator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/resources/prime-paginator/prime-paginator.component */ 9615);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmpJobTableComponent_ng_container_0_ng_container_1_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Ser");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "status"));
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.msgTranslate(ele_r21.core_Status == null ? null : ele_r21.core_Status.ar_Name, ele_r21.core_Status == null ? null : ele_r21.core_Status.en_Name), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "from_Date"));
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ele_r22 == null ? null : ele_r22.from_Date, "dd-MM-yyyy"), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "to_Date"));
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ele_r23 == null ? null : ele_r23.to_Date, "dd-MM-yyyy"), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 18);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_thead_1_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "org actions"), "");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "thead")(1, "tr", 24)(2, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_thead_1_th_20_Template, 3, 3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 7, "organization"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 9, "from_Date"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 11, "job"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 13, "from_Date"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 15, "counted"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 17, "job actions"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r27.hideActions);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowSpan", org_r30.core_Person_Instance_Job_Title == null ? null : org_r30.core_Person_Instance_Job_Title.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r34.msgTranslate(org_r30 == null ? null : org_r30.core_Org == null ? null : org_r30.core_Org.ar_Name, org_r30 == null ? null : org_r30.core_Org == null ? null : org_r30.core_Org.en_Name), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowSpan", org_r30.core_Person_Instance_Job_Title == null ? null : org_r30.core_Person_Instance_Job_Title.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 2, org_r30 == null ? null : org_r30.from_Date, "dd-MM-yyyy"), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "yes"), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "no"), " ");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 35)(1, "app-row-functions", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_14_Template_app_row_functions_onAction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); const org_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const status_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.orgOnAction($event, status_r24, org_r30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const org_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowSpan", org_r30.core_Person_Instance_Job_Title == null ? null : org_r30.core_Person_Instance_Job_Title.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("actions", ctx_r39.orgRowFunctions);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_1_Template, 2, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_2_Template, 3, 5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_span_9_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_ng_template_10_Template, 3, 3, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td", 31)(13, "app-row-functions", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_Template_app_row_functions_editRow_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const job_r32 = restoredCtx.$implicit; const org_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const status_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); ctx_r47.currentAction.emit(null); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.toEdit(status_r24, org_r30, job_r32)); })("deleteRow", function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_Template_app_row_functions_deleteRow_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const job_r32 = restoredCtx.$implicit; const status_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r51.onDeleteJob(status_r24, job_r32)); })("onAction", function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_Template_app_row_functions_onAction_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); const job_r32 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r53.jobOnAction($event, job_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_td_14_Template, 2, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r33 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r33 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r31.msgTranslate(job_r32 == null ? null : job_r32.core_Job_Title == null ? null : job_r32.core_Job_Title.ar_Name, job_r32 == null ? null : job_r32.core_Job_Title == null ? null : job_r32.core_Job_Title.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 8, job_r32 == null ? null : job_r32.from_Date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", job_r32 == null ? null : job_r32.is_Manpower_Affected)("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("actions", ctx_r31.jobRowFunctions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r33 == 0 && !ctx_r31.hideActions);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_tr_1_Template, 15, 11, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const org_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", org_r30.core_Person_Instance_Job_Title);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_thead_1_Template, 21, 19, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_ng_container_3_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r25 = ctx_r54.index;
    const status_r24 = ctx_r54.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("nested-job-table", i_r25 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r25 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", status_r24 == null ? null : status_r24.core_Person_Instance_Org);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_table_1_Template, 4, 4, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (status_r24 == null ? null : status_r24.core_Person_Instance_Org == null ? null : status_r24.core_Person_Instance_Org.length) > 0);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "actions"));
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62); const status_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.onDeleteStatus(status_r55)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fun_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](fun_r57.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 5, fun_r57.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](fun_r57.icon);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66); const status_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r64.onAssign(status_r55)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fun_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](fun_r57.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 5, fun_r57.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](fun_r57.icon);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_1_Template, 3, 7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_a_2_Template, 3, 7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const fun_r57 = ctx.$implicit;
    const status_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r57.name.toLowerCase() == "delete" && (status_r55.core_Person_Instance_Org == null ? null : status_r55.core_Person_Instance_Org.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fun_r57.name.toLowerCase() == "assign");
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_td_21_ng_container_1_Template, 3, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r15.statusRowFunctions.basic);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 43);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 44);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_app_prime_paginator_24_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-prime-paginator", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function EmpJobTableComponent_ng_container_0_ng_container_1_app_prime_paginator_24_Template_app_prime_paginator_onChangePage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.getList($event.pageIndex + 1, $event.pageSize)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("page", ctx_r18.page)("isDialogSize", true);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_mat_paginator_25_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-paginator", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function EmpJobTableComponent_ng_container_0_ng_container_1_mat_paginator_25_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r72.getList($event.pageIndex + 1, $event.pageSize)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", ctx_r19.page.pageSizeOptions)("length", ctx_r19.page.length)("pageSize", ctx_r19.page.dialogSize)("pageIndex", ctx_r19.page.pageIndex - 1)("hidePageSize", true)("showFirstLastButtons", false);
} }
function EmpJobTableComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card-content")(2, "div", 4)(3, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EmpJobTableComponent_ng_container_0_ng_container_1_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EmpJobTableComponent_ng_container_0_ng_container_1_td_6_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EmpJobTableComponent_ng_container_0_ng_container_1_th_8_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EmpJobTableComponent_ng_container_0_ng_container_1_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](10, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EmpJobTableComponent_ng_container_0_ng_container_1_th_11_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EmpJobTableComponent_ng_container_0_ng_container_1_td_12_Template, 3, 4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](13, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EmpJobTableComponent_ng_container_0_ng_container_1_th_14_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, EmpJobTableComponent_ng_container_0_ng_container_1_td_15_Template, 3, 4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](16, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EmpJobTableComponent_ng_container_0_ng_container_1_th_17_Template, 1, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EmpJobTableComponent_ng_container_0_ng_container_1_td_18_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](19, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, EmpJobTableComponent_ng_container_0_ng_container_1_th_20_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, EmpJobTableComponent_ng_container_0_ng_container_1_td_21_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, EmpJobTableComponent_ng_container_0_ng_container_1_tr_22_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, EmpJobTableComponent_ng_container_0_ng_container_1_tr_23_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, EmpJobTableComponent_ng_container_0_ng_container_1_app_prime_paginator_24_Template, 1, 2, "app-prime-paginator", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, EmpJobTableComponent_ng_container_0_ng_container_1_mat_paginator_25_Template, 1, 6, "mat-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.hideActions && ctx_r1.page.length > ctx_r1.page.dialogSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hideActions && ctx_r1.page.length > ctx_r1.page.dialogSize);
} }
function EmpJobTableComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-table-skeleton", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayedColumns", ctx_r2.displayedColumns);
} }
function EmpJobTableComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 50)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r3.assets.empty, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "emptytable"), " ");
} }
function EmpJobTableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EmpJobTableComponent_ng_container_0_ng_container_1_Template, 26, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EmpJobTableComponent_ng_container_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EmpJobTableComponent_ng_container_0_div_3_Template, 5, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r0.dataSource == null ? null : ctx_r0.dataSource.data == null ? null : ctx_r0.dataSource.data.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.isLoaded && !(ctx_r0.dataSource == null ? null : ctx_r0.dataSource.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r0.dataSource == null ? null : ctx_r0.dataSource.data == null ? null : ctx_r0.dataSource.data.length) == 0 && ctx_r0.isLoaded || !ctx_r0.dataSource && ctx_r0.isLoaded);
} }
var ActionType;
(function (ActionType) {
    ActionType["assign"] = "assign";
    ActionType["append"] = "append";
    ActionType["edit"] = "edit";
    ActionType["delete"] = "delete";
    ActionType["close"] = "close";
    ActionType["assignManager"] = "assignManager";
})(ActionType || (ActionType = {}));
class EmpJobTableComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeJobInformationService, dialog) {
        super();
        this.employeeJobInformationService = employeeJobInformationService;
        this.dialog = dialog;
        this.hideActions = false;
        this.isMatPaginator = false;
        this.rowToEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.afterDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.currentAction = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.employeeId = 0;
        this.employeeInstanceId = 0;
        this.displayedColumns = [
            "status",
            "status_date",
            "status_end_date",
            // "reasons",
            "org",
            // "from_Date",
            // "job",
            // "from_Date",
            // "counted",
            // "job actions",
            // "org actions",
            "actions",
        ];
        this.isLoaded = false;
        this.jobRowFunctions = { basic: [], dropdown: [] };
        this.orgRowFunctions = { basic: [], dropdown: [] };
        this.statusRowFunctions = { basic: [], dropdown: [] };
        this.employeeId = app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_1__.EmpGeneralInfoService.EmployeeId;
        this.employeeInstanceId = app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_1__.EmpGeneralInfoService.EmployeeInstanceId;
        app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_1__.EmpGeneralInfoService.employeeInstanceId$.subscribe(id => this.employeeInstanceId = id);
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_2__.ViewsManager.emp_job_info_sec);
        // row functions on (job org nested table)
        this.jobRowFunctions.basic = this.rowFunctions.basic.filter(ele => {
            let fun = ele.name.toLocaleLowerCase();
            return fun.includes(ActionType.edit) || fun.includes(ActionType.delete) || fun.includes(ActionType.close);
        });
        // row functions on (org first nested table)
        this.orgRowFunctions.basic = this.rowFunctions.basic.filter((ele) => !this.jobRowFunctions.basic.map((job) => job.id).includes(ele.id));
        // row functions on (status table)
        this.statusRowFunctions.basic = this.rowFunctions.dropdown;
    }
    ngOnChanges(changes) {
        if (changes.hasUpdate && changes.hasUpdate.currentValue && this.employeeInstanceId > 0)
            this.getList(this.firstPage);
        if (this.hideActions) {
            this.statusRowFunctions.basic = this.statusRowFunctions.basic.filter(e => e.name.toLowerCase() === ActionType.delete);
            this.jobRowFunctions.basic = this.jobRowFunctions.basic.filter(e => e.name.toLowerCase() === ActionType.delete);
        }
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getList(this.firstPage);
        }
    }
    getList(page, pageSize) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        this.isLoaded = false;
        this.page.pageIndex = page;
        this.isLoaded = false;
        if (pageSize) {
            this.page.dialogSize = pageSize;
        }
        let params = {
            PageNumber: page,
            pageSize: this.page.dialogSize,
        };
        this.employeeJobInformationService
            .getList(this.employeeId, params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
                this.page.length = res.meta.totalItemCount;
                this.isLoaded = true;
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    toEdit(status, org, job) {
        this.rowToEdit.emit({ status, org, job });
    }
    //on delete job
    onDeleteJob(status, job) {
        let msg = this.msgTranslate(job.core_Job_Title.ar_Name, job.core_Job_Title.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(status, job);
            }
        });
    }
    //on delete status
    onDeleteStatus(status) {
        let msg = this.msgTranslate(status.core_Status.ar_Name, status.core_Status.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(status, null, true);
            }
        });
    }
    delete(status, job, deleteStatus = false) {
        this.showLoading("table");
        let params = {
            employeeStatusID: status.id,
            employeeJobTitleID: job?.id ?? 0,
            DeleteStatusIfOrphan: deleteStatus
        };
        this.employeeJobInformationService
            .Delete(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    // if last item in list: get previous page
                    this.getList(this.prevPage, this.page.dialogSize);
                }
                else {
                    // if not last item in list: get current page
                    this.getList(this.currentPage, this.page.dialogSize);
                    this.afterDelete.emit(status);
                }
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading("table");
        });
    }
    openCloseDialog(job) {
        //  let msg = this.msgTranslate(job.core_Job_Title.ar_Name, job.core_Job_Title.en_Name);
        this.dialog
            .open(app_personnel_setup_components_employees_employement_information_emp_job_info_close_job_dialog_close_job_dialog_component__WEBPACK_IMPORTED_MODULE_4__.CloseJobDialogComponent, {
            data: job,
            height: "auto",
            minWidth: "40%",
            autoFocus: false,
            panelClass: "dialog-emp-form",
        })
            .afterClosed()
            .subscribe((data) => { });
    }
    onAssign(status) {
        this.currentAction.emit(ActionType.assign);
        this.toEdit(status, null, null);
        // console.log("onAssign", this.currentAction);
    }
    orgOnAction(event, status, org) {
        if (event.fun.name == ActionType.assignManager)
            this.openAssignManagerDialog(org);
        if (event.fun.name == ActionType.append) {
            this.currentAction.emit(ActionType.append);
            this.toEdit(status, org, null);
            // console.log("onAppend", this.currentAction);
        }
    }
    jobOnAction(event, job) {
        if (event.fun.name == "close")
            this.openCloseDialog(job);
    }
    openAssignManagerDialog(org) {
        this.dialog
            .open(app_personnel_setup_components_employees_employement_information_emp_job_info_assign_as_org_manager_dialog_assign_as_org_manager_dialog_component__WEBPACK_IMPORTED_MODULE_5__.AssignAsOrgManagerDialogComponent, {
            data: org,
            minWidth: "50%",
            height: "auto",
            autoFocus: false,
            panelClass: "dialog-emp-form",
        })
            .afterClosed()
            .subscribe((data) => { });
    }
}
EmpJobTableComponent.ɵfac = function EmpJobTableComponent_Factory(t) { return new (t || EmpJobTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_6__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
EmpJobTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmpJobTableComponent, selectors: [["app-emp-job-table"]], inputs: { hasUpdate: "hasUpdate", hideActions: "hideActions", isMatPaginator: "isMatPaginator" }, outputs: { rowToEdit: "rowToEdit", afterDelete: "afterDelete", currentAction: "currentAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "name"], ["class", "mtop-25", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "mat-elevation-z8", "f-w", "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Ser"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "status_date"], ["matColumnDef", "status_end_date"], ["matColumnDef", "org"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "page", "isDialogSize", "onChangePage", 4, "ngIf"], [3, "pageSizeOptions", "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons", "page", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "fas", "fa-bars"], ["class", "table table-responsive-sm", 3, "nested-job-table", 4, "ngIf"], [1, "table", "table-responsive-sm"], [4, "ngFor", "ngForOf"], [1, "border-0", 2, "color", "#5a5a5a"], [1, "border-top-0", "padding-10"], ["class", "border-top-0 padding-10", 4, "ngIf"], ["style", "color: #374761", "class", "border-top-0 border-bottom-1", 4, "ngFor", "ngForOf"], [1, "border-top-0", "border-bottom-1", 2, "color", "#374761"], ["class", "padding-10 vertical-align-middle", 3, "rowSpan", 4, "ngIf"], ["class", "padding-10", 3, "rowSpan", 4, "ngIf"], [1, "padding-10"], ["class", "success", 4, "ngIf", "ngIfElse"], ["no", ""], ["iconSize", "font-small-3", 3, "actions", "editRow", "deleteRow", "onAction"], [1, "padding-10", "vertical-align-middle", 3, "rowSpan"], [1, "padding-10", 3, "rowSpan"], [1, "success"], [1, "danger"], ["iconSize", "font-small-3", 3, "actions", "onAction"], [3, "class", "matTooltip", "click", 4, "ngIf"], [3, "matTooltip", "click"], [1, "font-medium-1", "mr-2", "p-0"], ["mat-header-row", ""], ["mat-row", ""], [3, "page", "isDialogSize", "onChangePage"], [3, "pageSizeOptions", "length", "pageSize", "pageIndex", "hidePageSize", "showFirstLastButtons", "page"], [1, "mtop-25"], [3, "displayedColumns"], [1, "text-center"], [3, "src"]], template: function EmpJobTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EmpJobTableComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", "table");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_skeletons_table_skeleton_table_skeleton_component__WEBPACK_IMPORTED_MODULE_7__.TableSkeletonComponent, _shared_components_row_functions_row_functions_component__WEBPACK_IMPORTED_MODULE_8__.RowFunctionsComponent, _shared_components_resources_prime_paginator_prime_paginator_component__WEBPACK_IMPORTED_MODULE_9__.PrimePaginatorComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".table-container[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.nested-job-table[_ngcontent-%COMP%] {\n  margin: -50px 0 0;\n}\n\n.nested-job-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n  font-weight: normal;\n}\n\n.nested-job-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.table-responsive-sm[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n  .mat-paginator[ng-reflect-hide-page-size=true] .mat-paginator-range-label {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcC1qb2ItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtBQUFKOztBQUtFO0VBQ0UsU0FBQTtBQUZKOztBQVFJO0VBQ0UsYUFBQTtBQUxOIiwiZmlsZSI6ImVtcC1qb2ItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHRkLm1hdC1jZWxsLCAudGFibGUtY29udGFpbmVyIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkLCAudGFibGUtY29udGFpbmVyIHRkLm1hdC1jZWxsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5uZXN0ZWQtam9iLXRhYmxlIHtcclxuICBtYXJnaW46IC01MHB4IDAgMDtcclxuXHJcbiAgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIHRyOmZpcnN0LWNoaWxkIHRkIHtcclxuICAgIGJvcmRlcjogMFxyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUtc20ge1xyXG4gIHRyOmZpcnN0LWNoaWxkIHRkIHtcclxuICAgIGJvcmRlcjogMFxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LXBhZ2luYXRvcltuZy1yZWZsZWN0LWhpZGUtcGFnZS1zaXplPXRydWVdIHtcclxuICAgIC5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 45679:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/old-emp-job-section/emp-job-section.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "OLDEmpJobDataDialogComponent": () => (/* binding */ OLDEmpJobDataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/general-info/emp-general-info.service */ 22699);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/personnel-setup/services/employees/employement-information/employee-job-information.service */ 89609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/resources/dynamic-form-field/datepicker/datepicker.component */ 70137);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var app_org_management_components_policy_groups_load_policies_group_load_policies_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/org-management/components/policy-groups/load-policies-group/load-policies-group.component */ 29467);
/* harmony import */ var _shared_components_dropdowns_personnel_setup_employees_shared_company_employees_shared_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/personnel-setup/employees-shared-company/employees-shared-company.component */ 18183);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/components/resources/dynamic-form-field/prime-ng/dropdown-core/dropdown-core.component */ 68506);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/org-management-setup/org/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 85443);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/org-management/job-title/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 15362);
/* harmony import */ var _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/org-management-setup/org-types/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 50260);
/* harmony import */ var _shared_components_dropdowns_hr_setup_job_status_dropdown_job_status_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/hr-setup/job-status-dropdown/job-status-dropdown.component */ 99892);
/* harmony import */ var _emp_job_table_emp_job_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../emp-job-table/emp-job-table.component */ 50991);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


























function OLDEmpJobDataDialogComponent_app_prime_dropdown_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-prime-dropdown", 25);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx_r1.empStatusCtrls.StatusPropertiesId)("submitted", ctx_r1.submitted)("List", ctx_r1.reasonsList)("disable", ctx_r1.currentAction === (ctx_r1.actionType.assign || ctx_r1.actionType.append))("appendTo", _r0);
} }
function OLDEmpJobDataDialogComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "employees-shared-company", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx_r2.empStatusCtrls.NewDefaultCompany)("person_ID", ctx_r2.employeeId)("submitted", ctx_r2.submitted)("disable", ctx_r2.currentAction === (ctx_r2.actionType.assign || ctx_r2.actionType.append))("appendTo", _r0);
} }
function OLDEmpJobDataDialogComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "load-policies-group", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx_r3.corePersonJobCtrls.policy_groups)("jobControl", ctx_r3.corePersonJobCtrls.Job_Title_ID)("orgControl", ctx_r3.corePersonOrgCtrls.Org_ID)("submitted", ctx_r3.submitted)("filterByOrgAndJob", true);
} }
function OLDEmpJobDataDialogComponent_reset_form_btn_43_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "reset-form-btn", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function OLDEmpJobDataDialogComponent_reset_form_btn_43_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r5.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
var ActionType;
(function (ActionType) {
    ActionType["assign"] = "assign";
    ActionType["append"] = "append";
    ActionType["edit"] = "edit";
    ActionType["delete"] = "delete";
    ActionType["close"] = "close";
    ActionType["assignManager"] = "assignManager";
})(ActionType || (ActionType = {}));
class OLDEmpJobDataDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeJobInformationService) {
        super();
        this.employeeJobInformationService = employeeJobInformationService;
        this.changUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
        this.employeeId = 0;
        this.employeeInstanceId = 0;
        this.displayedColumns = [
            "status",
            "status_date",
            "status_end_date",
            // "reasons",
            "org",
            "actions",
        ];
        this.isLoaded = false;
        this.submitted = false;
        this.hasUpdate = false;
        this.getList = false;
        this.Constants = app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_4__.Constants;
        this.actionType = ActionType;
        this.jobRowFunctions = { basic: [], dropdown: [] };
        this.orgRowFunctions = { basic: [], dropdown: [] };
        this.statusRowFunctions = { basic: [], dropdown: [] };
        this.employeeId = app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_2__.EmpGeneralInfoService.EmployeeId;
        this.employeeInstanceId = app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_2__.EmpGeneralInfoService.EmployeeInstanceId;
        app_personnel_setup_services_employees_general_info_emp_general_info_service__WEBPACK_IMPORTED_MODULE_2__.EmpGeneralInfoService.employeeInstanceId$.subscribe(id => this.employeeInstanceId = id);
        this.rowFunctions = this.getSubRowFunctions(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.emp_job_info_sec);
        // row functions on (job org nested table)
        this.jobRowFunctions.basic = this.rowFunctions.basic.filter(ele => {
            let fun = ele.name.toLocaleLowerCase();
            return fun.includes(ActionType.edit) || fun.includes(ActionType.delete) || fun.includes(ActionType.close);
        });
        // row functions on (org first nested table)
        this.orgRowFunctions.basic = this.rowFunctions.basic.filter((ele) => !this.jobRowFunctions.basic.map((job) => job.id).includes(ele.id));
        // row functions on (status table)
        this.statusRowFunctions.basic = this.rowFunctions.dropdown;
    }
    ngOnInit() {
        this.form = this.fb.group({
            // FORM AS GROUPS
            employee_Status: this.fb.group({
                id: [0, { nonNullable: true }],
                Status_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]],
                From_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]],
                StatusPropertiesId: [],
                NewDefaultCompany: [],
            }),
            core_Person_Instance_Org: this.fb.group({
                id: [0, { nonNullable: true }],
                orgTypeId: [null],
                person_Instance_Status_ID: [null],
                Org_ID: [null],
                From_Date: [null],
            }),
            core_Person_Instance_Job_Title: this.fb.group({
                id: [0, { nonNullable: true }],
                Job_Title_ID: [null],
                person_Instance_Org_ID: [null],
                From_Date: [null],
                Is_Manpower_Affected: [false],
                policy_groups: []
            }),
        });
        // START: Dates validation
        // this.form.valueChanges.subscribe(() => {
        //
        //   if ( // Org Date Must > Status date
        //     new Date(this.empStatusCtrls.From_Date.value).getTime() >
        //     new Date(this.corePersonOrgCtrls.From_Date.value).getTime()
        //   ) {
        //     this.corePersonOrgCtrls.From_Date.setErrors({orgDateMustBigStatus: true});
        //   } else {
        //     this.corePersonOrgCtrls.From_Date.setErrors(null);
        //   }
        //
        //   if ( // Job Date Must > Org date
        //     new Date(this.corePersonOrgCtrls.From_Date.value).getTime() >
        //     new Date(this.corePersonJobCtrls.From_Date.value).getTime()
        //   ) {
        //     this.corePersonJobCtrls.From_Date.setErrors({jobDateMustBigOrg: true});
        //   } else {
        //     this.corePersonJobCtrls.From_Date.setErrors(null);
        //   }
        // });
    }
    get formCtrls() {
        return this.form.controls;
    }
    get empStatusCtrls() {
        return this.form.get("employee_Status").controls;
    }
    get corePersonOrgCtrls() {
        return this.form.get("core_Person_Instance_Org").controls;
    }
    get corePersonJobCtrls() {
        return this.form.get("core_Person_Instance_Job_Title").controls;
    }
    // override onChangeBusinessAndCompanyId(): void {
    //   if (this.dataSource?.data?.length > 0) this.dataSource = new MatTableDataSource(null);
    //   if (this.checkNoBusinessOrCompany()) {
    //     if (this.employeeId > 0) this.getList(this.firstPage);
    //   }
    // }
    // getList(page: number, pageSize?: number) {
    //   this.page.pageIndex = page;
    //   this.isLoaded = false;
    //   if (pageSize) {
    //     this.page.dialogSize = pageSize;
    //   }
    //   let params: IPageParams = {
    //     PageNumber: page,
    //     pageSize: this.page.dialogSize,
    //   };
    //   this.employeeJobInformationService
    //     .getList(this.employeeId, params)
    //     .pipe(this.cancelRequest())
    //     .subscribe((res: IResponseList<IEmpJobDataModel[]>) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.dataSource = new MatTableDataSource(res.data);
    //         this.page.length = res.meta.totalItemCount;
    //         this.isLoaded = true;
    //       }
    //       else {
    //         this.errorList(res?.message?.messages);
    //       }
    //     });
    // }
    submit() {
        this.submitted = true;
        this.getList = false;
        if (this.form.valid) {
            const model = {
                employee_Status: {
                    PersonInstanceStatus: {
                        id: this.empStatusCtrls.id.value,
                        Person_Instance_ID: this.employeeInstanceId,
                        Status_ID: this.empStatusCtrls.Status_ID.value,
                        From_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.HelpersFunctions.transformData(this.empStatusCtrls.From_Date.value),
                        StatusPropertiesId: this.empStatusCtrls.StatusPropertiesId.value
                    },
                    NewDefaultCompany: this.empStatusCtrls.NewDefaultCompany.value
                },
                core_Person_Instance_Org: {
                    id: this.corePersonOrgCtrls.id.value,
                    Person_Instance_ID: this.employeeInstanceId,
                    Org_ID: this.corePersonOrgCtrls.Org_ID.value,
                    person_Instance_Status_ID: this.corePersonOrgCtrls.person_Instance_Status_ID.value,
                    From_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.HelpersFunctions.transformData(this.corePersonOrgCtrls.From_Date.value)
                },
                core_Person_Instance_Job_Title: {
                    id: this.corePersonJobCtrls.id.value,
                    Person_Instance_ID: this.employeeInstanceId,
                    Job_Title_ID: this.corePersonJobCtrls.Job_Title_ID.value,
                    From_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.HelpersFunctions.transformData(this.corePersonJobCtrls.From_Date.value),
                    Is_Manpower_Affected: this.corePersonJobCtrls.Is_Manpower_Affected.value,
                    person_Instance_Org_ID: this.corePersonJobCtrls.person_Instance_Org_ID.value,
                },
                SelectedPolicygroup: this.corePersonJobCtrls.policy_groups.value
            };
            //  console.log("model", model);
            if (this.empStatusCtrls.Status_ID.value == app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.endOfServiceID) {
                model.core_Person_Instance_Job_Title = null;
                model.core_Person_Instance_Org = null;
            }
            // assign
            if (this.currentAction === ActionType.assign) {
                let assignBody = {
                    core_Person_Instance_Org: model.core_Person_Instance_Org,
                    core_Person_Instance_Job_Title: model.core_Person_Instance_Job_Title,
                    SelectedPolicygroup: model.SelectedPolicygroup
                };
                this.assign(assignBody);
            }
            // append
            else if (this.currentAction === ActionType.append) {
                let appendBody = {
                    core_Person_Instance_Job_Title: model.core_Person_Instance_Job_Title,
                    SelectedPolicygroup: model.SelectedPolicygroup
                };
                this.append(appendBody);
            }
            // create & edit
            else {
                model.employee_Status.PersonInstanceStatus.id == 0 ? this.create(model) : this.update(model);
            }
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeJobInformationService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                //  this.getList(this.currentPage);
                this.hasUpdate = true;
                this.getList = true;
                this.changUpdated.emit(true);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeJobInformationService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                //  this.getList(this.currentPage);
                this.hasUpdate = true;
                this.getList = true;
                this.changUpdated.emit(true);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    append(model) {
        this.showLoading();
        this.employeeJobInformationService
            .appendJob(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.success(res?.message?.messageTypeName);
                // this.getList(this.currentPage);
                this.hasUpdate = true;
                this.getList = true;
                this.changUpdated.emit(true);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    assign(model) {
        this.showLoading();
        this.employeeJobInformationService
            .assignOrgAndJob(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.success(res?.message?.messageTypeName);
                // this.getList(this.currentPage);
                this.hasUpdate = true;
                this.getList = true;
                this.changUpdated.emit(true);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    jobToEdit(data) {
        let status = data.status;
        let org = data.org;
        let job = data.job;
        // set employee Status Data
        if (status) {
            this.empStatusCtrls.id.setValue(status.id);
            this.empStatusCtrls.Status_ID.setValue(status.status_ID);
            this.empStatusCtrls.From_Date.setValue(status.from_Date);
            this.empStatusCtrls.StatusPropertiesId.setValue(status.statusPropertiesId);
            this.empStatusCtrls.NewDefaultCompany.setValue(status.statusPropertiesId);
            this.corePersonOrgCtrls.person_Instance_Status_ID.setValue(status.id);
        }
        // set core_Person_Instance_Org
        if (org) {
            let org_type_id = org.core_Org?.core_Org_Structure_Org[0]?.orG_TYPE_ID;
            this.corePersonOrgCtrls.id.setValue(org.id);
            this.corePersonOrgCtrls.orgTypeId.setValue(org_type_id);
            // this.corePersonOrgCtrls.Org_ID.setValue(org.org_ID);
            this.corePersonOrgCtrls.From_Date.setValue(org.from_Date);
            this.corePersonJobCtrls.person_Instance_Org_ID.setValue(org.id);
            setTimeout(() => {
                this.corePersonOrgCtrls.Org_ID.setValue(org.org_ID);
            }, 100);
        }
        // set job
        if (job) {
            this.corePersonJobCtrls.id.setValue(job.id);
            //   this.corePersonJobCtrls.Job_Title_ID.setValue(job.job_Title_ID);
            this.corePersonJobCtrls.From_Date.setValue(job.from_Date);
            this.corePersonJobCtrls.Is_Manpower_Affected.setValue(job.is_Manpower_Affected);
            setTimeout(() => {
                this.corePersonJobCtrls.Job_Title_ID.setValue(job.job_Title_ID);
            }, 200);
        }
        // if (this.currentAction == ActionType.assign) {
        //   console.log("###### Status 1");
        //   Object.keys(this.empStatusCtrls).forEach(e => {
        //     this.empStatusCtrls[e].disable();
        //     console.log(this.empStatusCtrls[e]);
        //   });
        // }
        if (this.currentAction == ActionType.append) {
            Object.keys(this.empStatusCtrls).forEach(e => {
                this.empStatusCtrls[e]?.disable();
            });
            //   console.log("###### org");
            //   Object.keys(this.corePersonOrgCtrls).forEach(e => {
            //     this.empStatusCtrls[e]?.disable();
            //     console.log(this.empStatusCtrls[e]);
            //   });
        }
        // this.form.patchValue(employeeJobData);
    }
    // get reasons List when change status
    onChangeStatus(item) {
        this.reasonsList = item[0]?.core_Status_Properties;
        if (item[0]?.id == app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.endOfServiceID) {
            this.empStatusCtrls.StatusPropertiesId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
        }
        else {
            this.empStatusCtrls.StatusPropertiesId.removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]);
            this.empStatusCtrls.StatusPropertiesId.reset();
        }
    }
    // //on delete job
    // onDeleteJob(StatusID: number, org: IPersonInstanceOrg, job: IEmployeeJobTitleModel): void {
    //   let msg = this.msgTranslate(job.core_Job_Title.ar_Name, job.core_Job_Title.en_Name);
    //   this.deleteDialog(msg).subscribe((confirm) => {
    //     if (confirm) {
    //       this.delete(StatusID, org, job);
    //     }
    //   });
    // }
    //
    //
    // //on delete status
    // onDeleteStatus(status: IEmpJobDataModel): void {
    //   let msg = this.msgTranslate(status.core_Status.ar_Name, status.core_Status.en_Name);
    //   this.deleteDialog(msg).subscribe((confirm) => {
    //     if (confirm) {
    //       this.delete(status.id, null, null, true);
    //     }
    //   });
    // }
    //
    // delete(StatusID: number, org: IPersonInstanceOrg, job: IEmployeeJobTitleModel, deleteStatus = false) {
    //   this.showLoading();
    //   let params: IDeleteEmpStatusModel = {
    //     employeeStatusID: StatusID,
    //     employeeJobTitleID: job?.id ?? 0,
    //     DeleteStatusIfOrphan: deleteStatus
    //   };
    //   this.employeeJobInformationService
    //     .Delete(params)
    //     .subscribe((res: IResponse) => {
    //       if (res.message.messageType == MessageTypes.Success) {
    //         this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
    //         if (this.dataSource.data.length == 1 && this.currentPage > 1) {
    //           // if last item in list: get previous page
    //           this.getList(this.prevPage, this.page.dialogSize);
    //         }
    //         else {
    //           // if not last item in list: get current page
    //           this.getList(this.currentPage, this.page.dialogSize);
    //         }
    //         this.changUpdated.emit(true);
    //         if (job.job_Title_ID == this.formCtrls.id.value) {
    //           this.clearForm();
    //         }
    //       }
    //       else {
    //         this.errorList(res?.message?.messages);
    //       }
    //       this.hideLoading();
    //     });
    // }
    //
    //
    // openCloseDialog(job: IEmployeeJobTitleModel): void {
    //   let msg = this.msgTranslate(job.core_Job_Title.ar_Name, job.core_Job_Title.en_Name);
    //   this.dialog
    //     .open(CloseJobDialogComponent, {
    //       data: job,
    //       height: "auto",
    //       minWidth: "40%",
    //       autoFocus: false,
    //       panelClass: "dialog-emp-form",
    //     })
    //     .afterClosed()
    //     .subscribe((data) => {});
    //
    // }
    // statusOnAction(event: { data; fun: IGUIModel }, org: IPersonInstanceOrg) {
    //   if (event.fun.name == "assignManager") this.openAssignManagerDialog(org);
    // }
    //
    // onAssign(status: IEmpJobDataModel) {
    //   this.currentAction = ActionType.assign;
    //   this.jobToEdit(status, null, null);
    //   // console.log("onAssign", this.currentAction);
    // }
    //
    // orgOnAction(event: { data; fun: IGUIModel }, status: IEmpJobDataModel, org: IPersonInstanceOrg) {
    //   if (event.fun.name == ActionType.assignManager) this.openAssignManagerDialog(org);
    //   if (event.fun.name == ActionType.append) {
    //     this.currentAction = ActionType.append;
    //     this.jobToEdit(status, org, null);
    //
    //     // console.log("onAppend", this.currentAction);
    //   }
    // }
    //
    // jobOnAction(event: { data; fun: IGUIModel }, job: IEmployeeJobTitleModel) {
    //   if (event.fun.name == "close") this.openCloseDialog(job);
    // }
    //
    // openAssignManagerDialog(org: IPersonInstanceOrg) {
    //   this.dialog
    //     .open(AssignAsOrgManagerDialogComponent, {
    //       data: org,
    //       minWidth: "50%",
    //       height: "auto",
    //       autoFocus: false,
    //       panelClass: "dialog-emp-form",
    //     })
    //     .afterClosed()
    //     .subscribe((data) => {});
    // }
    afterDelete(status) {
        if (status.id == this.empStatusCtrls.id.value)
            this.clearForm();
        if (status) {
            this.hasUpdate = true;
            this.changUpdated.emit(true);
        }
    }
    getCurrentAction(action) {
        this.currentAction = action;
    }
    clearForm() {
        this.form.reset({
            employee_Status: { id: 0 },
            core_Person_Instance_Org: { id: 0 },
            core_Person_Instance_Job_Title: {
                id: 0,
                Is_Manpower_Affected: false
            },
        });
        this.submitted = false;
        this.currentAction = null;
        Object.keys(this.empStatusCtrls).forEach(e => {
            this.empStatusCtrls[e]?.enable();
        });
    }
}
OLDEmpJobDataDialogComponent.ɵfac = function OLDEmpJobDataDialogComponent_Factory(t) { return new (t || OLDEmpJobDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employement_information_employee_job_information_service__WEBPACK_IMPORTED_MODULE_6__.EmployeeJobInformationService)); };
OLDEmpJobDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: OLDEmpJobDataDialogComponent, selectors: [["emp-job-section-old"]], outputs: { changUpdated: "changUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 55, consts: [[1, "p-1"], ["dialogContainer", ""], [1, "form-card"], [1, "divider-title"], [3, "formGroup"], ["formGroupName", "employee_Status", 1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "disable", "appendTo", "change"], ["label", "status_From_Date", 3, "control", "disabled", "submitted"], ["label", "reasons", 3, "control", "submitted", "List", "disable", "appendTo", 4, "ngIf"], ["class", "col-md-4 col-sm-6 col-12", 4, "ngIf"], ["formGroupName", "core_Person_Instance_Org", 1, "row", "ptop-20"], [3, "control", "submitted", "filter", "disable", "appendTo"], [3, "orgTypeControl", "control", "submitted", "filter", "disable", "appendTo"], ["label", "orgStartDate", 3, "control", "submitted", "disabled"], ["formGroupName", "core_Person_Instance_Job_Title", 1, "row", "ptop-20"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], [1, "col-md-4", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "counted", 3, "control"], ["class", "col-12", 4, "ngIf"], ["align", "end"], ["icon", "fas fa-save", 3, "color", "disabled", "iconPositionBefore", "onClick"], [3, "click", 4, "ngIf"], [3, "hasUpdate", "rowToEdit", "afterDelete", "currentAction"], ["label", "reasons", 3, "control", "submitted", "List", "disable", "appendTo"], [3, "control", "person_ID", "submitted", "disable", "appendTo"], [1, "col-12"], [3, "control", "jobControl", "orgControl", "submitted", "filterByOrgAndJob"], [3, "click"]], template: function OLDEmpJobDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0, 1)(2, "mat-card", 2)(3, "mat-card-title")(4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "mat-card-content")(9, "form", 4)(10, "div", 5)(11, "div", 6)(12, "app-job-status-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("change", function OLDEmpJobDataDialogComponent_Template_app_job_status_dropdown_change_12_listener($event) { return ctx.onChangeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, OLDEmpJobDataDialogComponent_app_prime_dropdown_16_Template, 1, 5, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, OLDEmpJobDataDialogComponent_div_17_Template, 2, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 11)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-org-types-dropdown-current-structure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-organization-by-org-type-dropdown", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-datepicker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](31, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 15)(34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-job-title-by-org-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-datepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](39, "app-check-box", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](40, OLDEmpJobDataDialogComponent_div_40_Template, 2, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "mat-card-actions", 21)(42, "submit-btn", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("onClick", function OLDEmpJobDataDialogComponent_Template_submit_btn_onClick_42_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](43, OLDEmpJobDataDialogComponent_reset_form_btn_43_Template, 1, 0, "reset-form-btn", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](44, "app-emp-job-table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("rowToEdit", function OLDEmpJobDataDialogComponent_Template_app_emp_job_table_rowToEdit_44_listener($event) { return ctx.jobToEdit($event); })("afterDelete", function OLDEmpJobDataDialogComponent_Template_app_emp_job_table_afterDelete_44_listener($event) { return ctx.afterDelete($event); })("currentAction", function OLDEmpJobDataDialogComponent_Template_app_emp_job_table_currentAction_44_listener($event) { return ctx.getCurrentAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 43, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 45, "status")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.empStatusCtrls.Status_ID)("submitted", ctx.submitted)("filter", true)("disable", ctx.currentAction === (ctx.actionType.assign || ctx.actionType.append))("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.empStatusCtrls.From_Date)("disabled", ctx.currentAction === (ctx.actionType.assign || ctx.actionType.append))("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.empStatusCtrls.Status_ID.value == ctx.Constants.endOfServiceID);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.empStatusCtrls.Status_ID.value == ctx.Constants.endOfServiceID && (ctx.empStatusCtrls == null ? null : ctx.empStatusCtrls.id.value) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 47, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 49, "organizationData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.corePersonOrgCtrls.orgTypeId)("submitted", ctx.submitted)("filter", true)("disable", ctx.currentAction === ctx.actionType.append)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("orgTypeControl", ctx.corePersonOrgCtrls.orgTypeId)("control", ctx.corePersonOrgCtrls.Org_ID)("submitted", ctx.submitted)("filter", true)("disable", ctx.currentAction === ctx.actionType.append)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.corePersonOrgCtrls.From_Date)("submitted", ctx.submitted)("disabled", ctx.currentAction === ctx.actionType.append);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](31, 51, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](32, 53, "jobData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.corePersonJobCtrls.Job_Title_ID)("organizationControl", ctx.corePersonOrgCtrls.Org_ID)("organizationControlRequired", true)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.corePersonJobCtrls.From_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("control", ctx.corePersonJobCtrls.Is_Manpower_Affected);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.corePersonJobCtrls.Job_Title_ID.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("color", ctx.btn.darkBlue)("disabled", !ctx.employeeId)("iconPositionBefore", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.empStatusCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasUpdate", ctx.getList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_resources_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__.DatepickerComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, app_org_management_components_policy_groups_load_policies_group_load_policies_group_component__WEBPACK_IMPORTED_MODULE_11__.LoadPoliciesGroupComponent, _shared_components_dropdowns_personnel_setup_employees_shared_company_employees_shared_company_component__WEBPACK_IMPORTED_MODULE_12__.EmployeesSharedCompanyComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardActions, app_shared_components_resources_dynamic_form_field_prime_ng_dropdown_core_dropdown_core_component__WEBPACK_IMPORTED_MODULE_13__.DropdownCoreComponent, _shared_components_dropdowns_org_management_setup_org_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_14__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_org_management_job_title_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_15__.JobTitleByOrgDropdownComponent, _shared_components_dropdowns_org_management_setup_org_types_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_16__.OrgTypesDropdownCurrentStructureComponent, _shared_components_dropdowns_hr_setup_job_status_dropdown_job_status_dropdown_component__WEBPACK_IMPORTED_MODULE_17__.JobStatusDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupName, _emp_job_table_emp_job_table_component__WEBPACK_IMPORTED_MODULE_18__.EmpJobTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: [".nested-tr[_ngcontent-%COMP%] {\n  border-width: 1px;\n  padding: 5px;\n  background: #f7f7f7;\n  margin: 0 0;\n}\n\n.table.table-responsive-sm[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table.table-responsive-sm[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 13px;\n}\n\n.table-container[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcC1qb2Itc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSx3QkFBQTtBQUFGIiwiZmlsZSI6ImVtcC1qb2Itc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXN0ZWQtdHIge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIG1hcmdpbjogMCAwO1xyXG59XHJcblxyXG4udGFibGUudGFibGUtcmVzcG9uc2l2ZS1zbSB0aGVhZCB0aCxcclxuLnRhYmxlLnRhYmxlLXJlc3BvbnNpdmUtc20gdGhlYWQgdGQge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB0ZC5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 61757:
/*!**********************************************************!*\
  !*** ./src/app/personnel-setup/mapper/emp-employment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empAssignManagerDisplay": () => (/* binding */ empAssignManagerDisplay),
/* harmony export */   "empContractDisplay": () => (/* binding */ empContractDisplay),
/* harmony export */   "empCustodyDisplay": () => (/* binding */ empCustodyDisplay),
/* harmony export */   "empHiringDocumentDisplay": () => (/* binding */ empHiringDocumentDisplay),
/* harmony export */   "empInsuranceOfficeDisplay": () => (/* binding */ empInsuranceOfficeDisplay),
/* harmony export */   "empLocationDisplay": () => (/* binding */ empLocationDisplay),
/* harmony export */   "empSupervisorDisplay": () => (/* binding */ empSupervisorDisplay),
/* harmony export */   "empWorkScheduleDisplay": () => (/* binding */ empWorkScheduleDisplay)
/* harmony export */ });
/* harmony import */ var app_shared_enums_emp_hire_doc_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/emp-hire-doc-type.enum */ 50046);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);


function empCustodyDisplay(data) {
    return data.map((custody) => {
        return {
            ...custody,
            custodies: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(custody.core_Covenant?.ar_Name, custody.core_Covenant?.en_Name),
            froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(custody.fromDate),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(custody.toDate),
            date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(custody?.fromDate) +
                (custody?.toDate
                    ? " - " + app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(custody?.toDate)
                    : ""),
        };
    });
}
function empWorkScheduleDisplay(data) {
    return data.map((plan) => {
        return {
            ...plan,
            plan: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(plan.att_Plan?.ar_Name, plan.att_Plan?.en_Name),
            employee: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(plan.core_Person_Instance?.core_Person?.ar_Name, plan.core_Person_Instance?.core_Person?.en_Name),
            startDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(plan.fromDate),
            toDateOriginal: plan.toDate,
            toDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(plan.toDate),
        };
    });
}
function empInsuranceOfficeDisplay(data) {
    return data.map((office) => {
        return {
            ...office,
            insuranceOffice: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(office.core_Insurance_Office?.ar_Name, office.core_Insurance_Office?.en_Name),
            fromDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(office.froM_DATE),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(office.enD_DATE),
            date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(office?.froM_DATE) +
                (office?.enD_DATE
                    ? " - " + app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(office?.enD_DATE)
                    : ""),
        };
    });
}
function empLocationDisplay(data) {
    let locations = data.map((location) => {
        return {
            ...location,
            country: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(location.comm_Country?.ar_Name, location.comm_Country?.en_NAme),
            governorate: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(location.comm_Governorate?.ar_Name, location.comm_Governorate?.en_Name),
            froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(location.from_Date),
            tO_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(location.to_Date),
        };
    });
    // to use properties from first map
    locations.map((location) => {
        location.allAddress = `${location.location ?? "-"}, ${location.governorate ?? "-"}`;
        location.date =
            location?.froM_DATE +
                (location?.to_Date ? " - " + location?.tO_DATE : "");
    });
    return locations;
}
function empHiringDocumentDisplay(data) {
    return data.map((doc) => {
        return {
            ...doc,
            documentName: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(doc.ar_Name_Type, doc.en_Name_Type),
            attachmentType: app_shared_enums_emp_hire_doc_type_enum__WEBPACK_IMPORTED_MODULE_0__.EEmpHireDocType.getValue(doc.is_Attached),
            attachment: doc.attachmentFilePath ? "/" + doc.attachmentFilePath : "",
        };
    });
}
function empContractDisplay(data) {
    return data.map((contract) => {
        return {
            ...contract,
            contractType: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(contract.core_Contract_Type?.ar_Name, contract.core_Contract_Type?.en_Name),
            start_date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(contract.starT_DATE),
            end_date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(contract.enD_DATE),
            actual_End_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(contract.actual_End_Date),
        };
    });
}
function empSupervisorDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            supervisor: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(ele.manager?.core_Person?.ar_Name, ele.manager?.core_Person?.en_Name),
            fromDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(ele.from_Date),
            toDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(ele.tO_Date),
        };
    });
}
function empAssignManagerDisplay(data) {
    return data.map((ele) => {
        return {
            ...ele,
            employee: (0,app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.msgTranslate)(ele.core_Person_Instance?.core_Person?.ar_Name, ele.core_Person_Instance?.core_Person?.en_Name),
            startDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(ele.from_Date),
            endDate: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.HelpersFunctions.mapDate(ele.to_Date),
        };
    });
}


/***/ }),

/***/ 59273:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employement-information/employee-assign-as-org-manager.service.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAssignAsOrgManagerService": () => (/* binding */ EmployeeAssignAsOrgManagerService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeAssignAsOrgManagerService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_EmployeeManger", data);
    }
    getList(
    // employeeInstanceId: number,
    orgId, params) {
        return this.get("Personnel/Employees/GetList_EmployeeManger", {
            params: {
                ...params,
                // prtid: employeeInstanceId,
                orgid: orgId,
            },
        });
    }
    getAll(employeeInstanceId, orgId) {
        return this.get("Personnel/Employees/GetAll_EmployeeManger", {
            params: {
                prtid: employeeInstanceId,
                orgid: orgId,
            },
        });
    }
    Delete(params) {
        return this.delete("Personnel/Employees/Delete_EmployeeManger", {
            params: params,
        });
    }
}
EmployeeAssignAsOrgManagerService.ɵfac = function EmployeeAssignAsOrgManagerService_Factory(t) { return new (t || EmployeeAssignAsOrgManagerService)(); };
EmployeeAssignAsOrgManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeAssignAsOrgManagerService, factory: EmployeeAssignAsOrgManagerService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 89609:
/*!****************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employement-information/employee-job-information.service.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeJobInformationService": () => (/* binding */ EmployeeJobInformationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class EmployeeJobInformationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
        this.expand = `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Person_Instance_Org}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Person_Instance_Job_Title},
    ${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Person_Instance_Org}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Org},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Person_Instance_Org}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Person_Instance_Job_Title}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Job_Title},
    ${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Status}, ${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.core_Status_Properties}`;
    }
    create(data) {
        return this.post("Personnel/Employees/Create_EmployeeStatusPosition", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_EmployeeStatusPosition", data);
    }
    appendJob(data) {
        return this.post("Personnel/Employees/AppendJob", data);
    }
    assignOrgAndJob(data) {
        return this.post("Personnel/Employees/AssignOrgAndJob", data);
    }
    getStatusPositionCard(personInstanceID) {
        return this.get("Personnel/Employees/Get_StatusPositionCard", {
            params: {
                Person_Instance_ID: personInstanceID,
            },
        });
    }
    getList(employeeInstanceId, params) {
        return this.get("Personnel/Employees/GetList_EmployeeStatusPosition", {
            params: {
                ...params,
                $filter: `Person_Instance_ID  eq ${employeeInstanceId}`,
                $expand: this.expand,
            },
        });
    }
    getAll(employeeInstanceId) {
        return this.get("Personnel/Employees/GetAll_EmployeeStatusPosition", {
            params: {
                $filter: `Person_Instance_ID  eq ${employeeInstanceId}`,
                $expand: this.expand,
            },
        });
    }
    getAllCurrentJobsByEmployeeId(employeeId) {
        return this.get("personnel/Employees/GetAll_Current_Job_Emp", {
            params: {
                PerinsID: employeeId,
            },
        });
    }
    Delete(params) {
        return this.delete("Personnel/Employees/Delete_EmployeeStatusPosition", {
            params: params
        });
    }
    close(params) {
        return this.post("Personnel/Employees/Close_EmployeeStatusPosition", null, {
            params: params
        });
    }
}
EmployeeJobInformationService.ɵfac = function EmployeeJobInformationService_Factory(t) { return new (t || EmployeeJobInformationService)(); };
EmployeeJobInformationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeJobInformationService, factory: EmployeeJobInformationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 50046:
/*!********************************************************!*\
  !*** ./src/app/shared/enums/emp-hire-doc-type.enum.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EEmpHireDocType": () => (/* binding */ EEmpHireDocType)
/* harmony export */ });
var EEmpHireDocType;
(function (EEmpHireDocType) {
    EEmpHireDocType[EEmpHireDocType["attached"] = 1] = "attached";
    EEmpHireDocType[EEmpHireDocType["handDelivery"] = 2] = "handDelivery";
    EEmpHireDocType[EEmpHireDocType["notNeed"] = 3] = "notNeed";
})(EEmpHireDocType || (EEmpHireDocType = {}));
(function (EEmpHireDocType) {
    function getValue(docType) {
        switch (docType) {
            case EEmpHireDocType.attached:
                return "attachment";
            case EEmpHireDocType.handDelivery:
                return "isHandDelivered";
            case EEmpHireDocType.notNeed:
                return "notNeed";
            default:
                return "";
        }
    }
    EEmpHireDocType.getValue = getValue;
})(EEmpHireDocType || (EEmpHireDocType = {}));


/***/ }),

/***/ 26427:
/*!*******************************************************!*\
  !*** ./src/app/shared/enums/policy-group-grouping.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyGroupGrouping": () => (/* binding */ PolicyGroupGrouping),
/* harmony export */   "PolicyGroupGroupingList": () => (/* binding */ PolicyGroupGroupingList)
/* harmony export */ });
var PolicyGroupGrouping;
(function (PolicyGroupGrouping) {
    PolicyGroupGrouping[PolicyGroupGrouping["OPEN"] = 1] = "OPEN";
    PolicyGroupGrouping[PolicyGroupGrouping["ORGANIZATIONS"] = 2] = "ORGANIZATIONS";
    PolicyGroupGrouping[PolicyGroupGrouping["JOB_TITLE"] = 3] = "JOB_TITLE";
    PolicyGroupGrouping[PolicyGroupGrouping["LOCATION"] = 4] = "LOCATION";
})(PolicyGroupGrouping || (PolicyGroupGrouping = {}));
const PolicyGroupGroupingList = [
    {
        label: "open",
        value: PolicyGroupGrouping.OPEN,
        cssClass: "col-6 col-lg-3 px-2",
    },
    {
        label: "organizations",
        value: PolicyGroupGrouping.ORGANIZATIONS,
        cssClass: "col-6 col-lg-3 px-2",
    },
    {
        label: "job",
        value: PolicyGroupGrouping.JOB_TITLE,
        cssClass: "col-6 col-lg-3 px-2",
    },
    {
        label: "location",
        value: PolicyGroupGrouping.LOCATION,
        cssClass: "col-6 col-lg-3 px-2",
    },
];


/***/ }),

/***/ 58350:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/group-by.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupByService": () => (/* binding */ GroupByService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GroupByService {
    constructor() { }
    //group response data by DayName
    static groupBy(collection, property) {
        if (!collection) {
            // return null;
        }
        const groupedCollection = collection.reduce((previous, current) => {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        return Object.keys(groupedCollection).map((key) => ({
            key,
            List: groupedCollection[key],
        }));
    }
    groupByPartOfProperty(collection, property, noOfLetters) {
        const groupedCollection = collection.reduce((previous, current) => {
            let searchKey = current[property].trim().slice(0, noOfLetters).toUpperCase();
            if (!previous[searchKey])
                previous[searchKey] = [current];
            else
                previous[searchKey].push(current);
            return previous;
        }, {});
        return Object.keys(groupedCollection).map((key) => ({
            key,
            List: groupedCollection[key],
        }));
    }
}
GroupByService.ɵfac = function GroupByService_Factory(t) { return new (t || GroupByService)(); };
GroupByService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupByService, factory: GroupByService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_org-management_org-management_module_ts.js.map