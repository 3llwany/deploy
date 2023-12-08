"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_org-management_org-management_module_ts"],{

/***/ 27358:
/*!***********************************************************************************************************!*\
  !*** ./src/app/org-management/components/jobs-profile/jobs-profile-index/jobs-profile-index.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsProfileIndexComponent": () => (/* binding */ JobsProfileIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/org-management/services/job-profile/job-title.service */ 92972);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class JobsProfileIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
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
        this.jobTitleService.getList(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((item) => {
                    item.jobFamily = this.msgTranslate(item.core_Job_Title_Family?.ar_Name, item.core_Job_Title_Family?.en_Name);
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(jobProfile) {
        let msg = this.msgTranslate(jobProfile.ar_Name, jobProfile.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(jobProfile);
        });
    }
    delete(jobProfile) {
        this.showLoading();
        this.jobTitleService.Delete(jobProfile.id).subscribe((res) => {
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
JobsProfileIndexComponent.ɵfac = function JobsProfileIndexComponent_Factory(t) { return new (t || JobsProfileIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_org_management_services_job_profile_job_title_service__WEBPACK_IMPORTED_MODULE_2__.JobTitleService)); };
JobsProfileIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: JobsProfileIndexComponent, selectors: [["app-jobs-profile-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 7, consts: [[1, "row"], [1, "col-12"], ["title", "jobsProfile", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function JobsProfileIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function JobsProfileIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function JobsProfileIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions == null ? null : ctx.globalFunctions.reverse());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLXByb2ZpbGUtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var app_org_management_setup_components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/org-management-setup/components/organizations/organizations.component */ 498);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/org-structure.service */ 66949);
/* harmony import */ var app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/org-management-setup/services/organizations.service */ 43851);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dropdowns_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-types-dropdown/org-types-dropdown.component */ 44479);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















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
                this.errorList(res.message.messages);
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
    //       } else this.errorList(res.message.messages);
    //       this.hideLoading();
    //     });
    // }
    // organization list
    getAllUnAssignedOrganizationsByStructureId() {
        this.showLoading();
        this.organizationsService
            .GetAllUnAssignedByStructureId(this.formCtrls.org_Structure_ID.value)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.organizationList = res.data;
                // if (this.formCtrls.oldId.value > 0)
                //   this.organizationList.unshift(this.data.currentOrganization);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    createDialog(value) {
        this.dialogsService
            .addFromDropdownDialog(app_org_management_setup_components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_0__.OrganizationsComponent, value)
            .afterClosed()
            .subscribe((res) => {
            this.getAllUnAssignedOrganizationsByStructureId();
        });
    }
}
AddOrgStructureNodeComponent.ɵfac = function AddOrgStructureNodeComponent_Factory(t) { return new (t || AddOrgStructureNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__.OrgStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA)); };
AddOrgStructureNodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AddOrgStructureNodeComponent, selectors: [["app-add-org-structure-node"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 17, consts: [[1, "row"], ["dialogContainer", ""], [1, "col-12"], ["mat-dialog-title", ""], ["title", "orgStructureNode"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "optionDisabled", "appendTo", "filter"], ["label", "organization", "optionDisabled", "assignStr", 3, "control", "submitted", "List", "appendTo", "filter", "viewName", "createNewDialog"], ["align", "end"], [3, "id", "onClick"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "btn", "btn-warning", "mr-1", "ml-1", 3, "mat-dialog-close"]], template: function AddOrgStructureNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0, 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content")(7, "div", 0)(8, "div", 2)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-org-types-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 6)(14, "app-prime-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("createNewDialog", function AddOrgStructureNodeComponent_Template_app_prime_dropdown_createNewDialog_14_listener($event) { return ctx.createDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-dialog-actions", 9)(16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AddOrgStructureNodeComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.orG_TYPE_ID)("submitted", ctx.submitted)("optionDisabled", ctx.formCtrls.parenT_ID.value ? "isCompany" : null)("appendTo", _r0)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.orG_ID)("submitted", ctx.submitted)("List", ctx.organizationList)("appendTo", _r0)("filter", true)("viewName", ctx.viewName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 15, "General.close"), " ");
    } }, dependencies: [_shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_dropdowns_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.OrgTypesDropdownComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3JnLXN0cnVjdHVyZS1ub2RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/org-structure.service */ 66949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../org-structure-hierarchy-details/org-structure-hierarchy-details.component */ 89210);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function AddOrgStructureComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-add-new-btn", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx_r0.moduleId, "/org-structure/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx_r0.parantParam);
} }
function AddOrgStructureComponent_app_prime_dropdown_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-prime-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddOrgStructureComponent_app_prime_dropdown_20_Template_app_prime_dropdown_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.onChangeOldStructure()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx_r1.formCtrls.CopyStructureID)("submitted", ctx_r1.submitted)("List", ctx_r1.structureList);
} }
function AddOrgStructureComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "reset-form-btn", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddOrgStructureComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r6.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddOrgStructureComponent_p_messages_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "canNotEditOrgStructure"), " ");
} }
const _c0 = function (a0) { return { "ar-msg": a0 }; };
function AddOrgStructureComponent_p_messages_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p-messages", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddOrgStructureComponent_p_messages_24_ng_template_1_Template, 4, 3, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](1, _c0, ctx_r3.languageService.isArabic));
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
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.orgStructureService.getById(this.orgStructureId).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.orgStructure = res.data[0];
                this.orgStructureToEdit();
            }
            else
                this.errorList(res.message.messages);
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
                froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.form.value.froM_DATE ?? this.orgStructure?.froM_DATE),
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
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update() {
        const model = {
            id: this.form.value.id,
            en_Name: this.form.value.en_Name,
            ar_Name: this.form.value.ar_Name,
            froM_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.form.value.froM_DATE ?? this.orgStructure?.froM_DATE),
            to_DATE: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.HelpersFunctions.mapDateReverse(this.orgStructure.tO_DATE),
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
                this.errorList(res.message.messages);
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
    onChangeOldStructure() { }
    // organization list
    getAllStructures() {
        this.showLoading();
        this.orgStructureService.getAll().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.structureList = [
                    {
                        id: null,
                        ar_Name: "انشاء جديد",
                        en_Name: "Create new",
                    },
                    ...res.data,
                ];
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
AddOrgStructureComponent.ɵfac = function AddOrgStructureComponent_Factory(t) { return new (t || AddOrgStructureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__.OrgStructureService)); };
AddOrgStructureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddOrgStructureComponent, selectors: [["app-add-org-structure"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 19, consts: [[1, "row"], [1, "col-12"], ["addTitle", "orgStructure", "editTitle", "editOrgStructure", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "froM_DATE", 3, "control", "submitted", "minDate", "disabled"], ["label", "copyFromPreviousStructure", 3, "control", "submitted", "List", "change", 4, "ngIf"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], ["severity", "warn", 3, "ngClass", 4, "ngIf"], [3, "orgStructureId", "canNotEdit"], ["label", "copyFromPreviousStructure", 3, "control", "submitted", "List", "change"], [3, "click"], ["severity", "warn", 3, "ngClass"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function AddOrgStructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddOrgStructureComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "div", 0)(10, "div", 1)(11, "form", 6)(12, "div", 0)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, AddOrgStructureComponent_app_prime_dropdown_20_Template, 1, 3, "app-prime-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "mat-card-actions", 12)(22, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClick", function AddOrgStructureComponent_Template_submit_btn_onClick_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, AddOrgStructureComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, AddOrgStructureComponent_p_messages_24_Template, 2, 3, "p-messages", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "app-org-structure-hierarchy-details", 16);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.canNotEdit());
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("orgStructureId", ctx.orgStructureId || ctx.formCtrls.CopyStructureID.value)("canNotEdit", ctx.orgStructureId == 0 ? true : ctx.canNotEdit());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_8__.BackBtnComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_18__.Messages, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_13__.OrgStructureHierarchyDetailsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3JnLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employees.service */ 20408);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_structure_employee_card_skeleton_structure_employee_card_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/skeletons/structure-employee-card-skeleton/structure-employee-card-skeleton.component */ 91365);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);












function EmployeeCardComponent_ng_container_9_p_image_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "img"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.fileService.preview(ctx_r2.employeeData.img));
} }
function EmployeeCardComponent_ng_container_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeCardComponent_ng_container_9_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.employeeData.contact);
} }
function EmployeeCardComponent_ng_container_9_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.employeeData.email);
} }
function EmployeeCardComponent_ng_container_9_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "active"), " ");
} }
function EmployeeCardComponent_ng_container_9_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "notActive"), " ");
} }
function EmployeeCardComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EmployeeCardComponent_ng_container_9_p_image_3_Template, 2, 4, "p-image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EmployeeCardComponent_ng_container_9_ng_template_4_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 10)(7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EmployeeCardComponent_ng_container_9_p_9_Template, 4, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EmployeeCardComponent_ng_container_9_p_10_Template, 4, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 12)(12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, EmployeeCardComponent_ng_container_9_span_23_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, EmployeeCardComponent_ng_container_9_ng_template_24_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 17)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 17)(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_12_0;
    let tmp_14_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.img && ctx_r0.employeeData.img != "/")("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.msgTranslate(ctx_r0.employeeData.ar_Name, ctx_r0.employeeData.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 17, "employment")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 19, ctx_r0.msgTranslate(ctx_r0.employeeData.jobTitleNameAr, ctx_r0.employeeData.jobTitleName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 21, ctx_r0.msgTranslate(ctx_r0.employeeData.organizationAr, ctx_r0.employeeData.organization)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.employeeData.isActive)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 23, "noOfEmployeeReporting"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 25, "asSolidManager"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_12_0 = ctx_r0.employeeData == null ? null : ctx_r0.employeeData.solidEmp == null ? null : ctx_r0.employeeData.solidEmp.length) !== null && tmp_12_0 !== undefined ? tmp_12_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 27, "asDottedManager"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_14_0 = ctx_r0.employeeData == null ? null : ctx_r0.employeeData.dotesEmp == null ? null : ctx_r0.employeeData.dotesEmp.length) !== null && tmp_14_0 !== undefined ? tmp_14_0 : 0, "");
} }
function EmployeeCardComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-structure-employee-card-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
class EmployeeCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeesService, dialogRef, data) {
        super();
        this.employeesService = employeesService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loaded = false;
        this.employeeId = data.employeeId;
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
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length > 0) {
                    res.data[0].contact = res.data[0]?.contacts
                        .map((contact) => contact.value)
                        .join(", ");
                    this.employeeData = res.data[0];
                }
                this.loaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    // close dilog on resize screen
    onWindowResize(event) {
        this.dialogRef.close();
    }
}
EmployeeCardComponent.ɵfac = function EmployeeCardComponent_Factory(t) { return new (t || EmployeeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_2__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
EmployeeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmployeeCardComponent, selectors: [["app-employee-card"]], hostBindings: function EmployeeCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function EmployeeCardComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 10, consts: [[1, "title"], [1, "type-name", "info"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "employee-card"], [4, "ngIf"], [1, "row"], [1, "col-md-4", "col-12", "img-container"], ["preview", "true", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImg", ""], [1, "col-md-8", "col-12"], [1, "mtop-5"], [1, "mtop-20"], [1, "mbottom-14", 2, "font-weight", "bold"], ["class", "badge bg-light-success", 4, "ngIf", "ngIfElse"], ["no", ""], [1, "mbottom-14", "mtop-14", 2, "font-weight", "bold"], [1, "font-size-14"], ["preview", "true", 3, "src", "alt"], [1, "alt-img-preview"], [1, "pi", "pi-user"], [1, "pi", "pi-phone"], [1, "mx-1"], [1, "fa", "fa-envelope"], [1, "badge", "bg-light-success"], [1, "badge", "bg-light-danger"]], template: function EmployeeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EmployeeCardComponent_ng_container_9_Template, 41, 29, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EmployeeCardComponent_ng_container_10_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, "employeeDetails")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.employeeData && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.employeeData && !ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_skeletons_structure_employee_card_skeleton_structure_employee_card_skeleton_component__WEBPACK_IMPORTED_MODULE_3__.StructureEmployeeCardSkeletonComponent, primeng_image__WEBPACK_IMPORTED_MODULE_7__.Image, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n  margin: -24px;\n  padding: 24px 18px;\n}\n.title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-right: -15px;\n}\n.title[_ngcontent-%COMP%]   button.ar[_ngcontent-%COMP%] {\n  margin-left: -15px !important;\n}\n  .mat-dialog-content.employee-card {\n  margin-top: 40px;\n}\n  .mat-dialog-content.employee-card p {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0UsNkJBQUE7QUFFSjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7QUFFSiIsImZpbGUiOiJlbXBsb3llZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIG1hcmdpbjogLTI0cHg7XHJcbiAgcGFkZGluZzogMjRweCAxOHB4O1xyXG4gIGg2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5hciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250ZW50LmVtcGxveWVlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_org_management_model_job_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/org-management/model/job-title */ 83186);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee-card/employee-card.component */ 49963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/group-by.service */ 58350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/skeletons/org-details-employees-list-skeleton/org-details-employees-list-skeleton.component */ 31534);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
















function JobTitleDetailsDialogComponent_div_41_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgJob_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", ctx_r4.msgTranslate(orgJob_r5.core_Org == null ? null : orgJob_r5.core_Org.ar_Name, orgJob_r5.core_Org == null ? null : orgJob_r5.core_Org.en_Name), " ( ", (tmp_0_0 = orgJob_r5.currentEmployeeNumber) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "of"), " ", orgJob_r5.max_Employee == 0 ? ctx_r4.translate("unlimited") : orgJob_r5.max_Employee, " FTE ) ");
} }
function JobTitleDetailsDialogComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, JobTitleDetailsDialogComponent_div_41_p_1_Template, 3, 6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.nodeData.core_Org_Job_Title);
} }
function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template_p_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const employee_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.openEmployeeCardDialog($event.target, employee_r9.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const employee_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r8.msgTranslate("mleft-10", "mright-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.msgTranslate(employee_r9.ar_Name, employee_r9.en_Name), " ");
} }
function JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_p_4_Template, 5, 3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](group_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", group_r7.List);
} }
function JobTitleDetailsDialogComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function JobTitleDetailsDialogComponent_ng_container_48_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.searchEmployees($event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, JobTitleDetailsDialogComponent_ng_container_48_ng_container_3_Template, 5, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.employeesGroupsFiltered);
} }
function JobTitleDetailsDialogComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-org-details-employees-list-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function JobTitleDetailsDialogComponent_ng_container_50_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "noEmployeeInJob"), " ");
} }
const _c0 = function (a0) { return { "ar-msg": a0 }; };
function JobTitleDetailsDialogComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-messages", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, JobTitleDetailsDialogComponent_ng_container_50_ng_template_2_Template, 4, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, ctx_r3.languageService.isArabic));
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
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeCardComponent, {
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
JobTitleDetailsDialogComponent.ɵfac = function JobTitleDetailsDialogComponent_Factory(t) { return new (t || JobTitleDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_group_by_service__WEBPACK_IMPORTED_MODULE_3__.GroupByService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
JobTitleDetailsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: JobTitleDetailsDialogComponent, selectors: [["app-job-title-details-dialog"]], hostBindings: function JobTitleDetailsDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function JobTitleDetailsDialogComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 34, consts: [[1, "details-dialog-title"], [1, "mb-2"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "type-name", "info"], [1, "clearfix"], [1, "details-dialog", "jobtitle"], ["multi", ""], [3, "expanded"], [1, "expantion-body"], [1, "table-container"], ["class", "no-employees", 4, "ngIf"], [1, "expantion-body", "employee-body"], [4, "ngIf"], [1, "no-employees"], [4, "ngFor", "ngForOf"], [1, "form-control", "mbottom-15", 3, "placeholder", "keyup"], [1, "key-emp"], ["role", "button"], ["class", "name-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "name-container", 3, "click"], [1, "img-small-icon"], [1, "pi", "pi-user"], [1, "emp-name"], ["severity", "warn", 3, "ngClass"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function JobTitleDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 6)(9, "mat-accordion", 7)(10, "mat-expansion-panel", 8)(11, "mat-expansion-panel-header")(12, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "table")(18, "tbody")(19, "tr")(20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tr")(34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, JobTitleDetailsDialogComponent_div_41_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-expansion-panel", 8)(43, "mat-expansion-panel-header")(44, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, JobTitleDetailsDialogComponent_ng_container_48_Template, 4, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, JobTitleDetailsDialogComponent_ng_container_49_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, JobTitleDetailsDialogComponent_ng_container_50_Template, 3, 3, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.ar_Name, ctx.nodeData.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx.expandedIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 18, "details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 22, "code")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.nodeData.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 26, "jobTitle")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.ar_Name, ctx.nodeData.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 30, "jobFamily")));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.msgTranslate(ctx.nodeData.core_Job_Title_Family == null ? null : ctx.nodeData.core_Job_Title_Family.ar_Name, ctx.nodeData.core_Job_Title_Family == null ? null : ctx.nodeData.core_Job_Title_Family.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nodeData.core_Org_Job_Title.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx.expandedIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 32, "employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.employees.length > 0 && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.OrgDetailsEmployeesListSkeletonComponent, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_9__.Messages, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".mat-dialog-content.details-dialog.jobtitle .mat-expansion-panel-body {\n  padding: 0;\n}\n  .mat-dialog-content.details-dialog.jobtitle .table-container {\n  padding: 0 24px 16px;\n}\n  .mat-dialog-content.details-dialog.jobtitle .no-employees,   .mat-dialog-content.details-dialog.jobtitle .employee-body {\n  padding: 16px 24px 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi10aXRsZS1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUFBSjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUVFOztFQUVFLHlCQUFBO0FBQUoiLCJmaWxlIjoiam9iLXRpdGxlLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRlbnQuZGV0YWlscy1kaWFsb2cuam9idGl0bGUge1xyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHggMTZweDtcclxuICB9XHJcbiAgLm5vLWVtcGxveWVlcyxcclxuICAuZW1wbG95ZWUtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMCAyNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_job_title_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/job-title-chart.service */ 51633);
/* harmony import */ var app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-job-information.service */ 81774);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dropdowns_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-title-dropdown/job-title-dropdown.component */ 28548);
/* harmony import */ var _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/employee-dropdown/employee-dropdown.component */ 99629);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function JobTitleOrgChartComponent_app_job_title_dropdown_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-job-title-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_app_job_title_dropdown_6_Template_app_job_title_dropdown_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.onChangeSearchValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r0.formCtrls.jobTitleId)("filter", true);
} }
function JobTitleOrgChartComponent_app_employee_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-employee-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_app_employee_dropdown_7_Template_app_employee_dropdown_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.getAllEmployeeJobTitles()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r1.formCtrls.employeeId)("filter", true);
} }
function JobTitleOrgChartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "app-prime-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_div_8_Template_app_prime_dropdown_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.onChangeSearchValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r2.formCtrls.jobTitleId)("filter", true)("list", ctx_r2.employeeJobTitles);
} }
function JobTitleOrgChartComponent_ng_template_16_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_16_div_7_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.openJobTitleDetailsDialog($event.target, node_r10.data, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", node_r10.data.core_Person_Instance_Job_Title.length, " ");
} }
function JobTitleOrgChartComponent_ng_template_16_div_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgJob_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" ", ctx_r18.msgTranslate(orgJob_r19.core_Org == null ? null : orgJob_r19.core_Org.ar_Name, orgJob_r19.core_Org == null ? null : orgJob_r19.core_Org.en_Name), " ( ", (tmp_0_0 = orgJob_r19.currentEmployeeNumber) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " / ", orgJob_r19.max_Employee == 0 ? ctx_r18.translate("unlimited") : orgJob_r19.max_Employee, " FTE ) ");
} }
function JobTitleOrgChartComponent_ng_template_16_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, JobTitleOrgChartComponent_ng_template_16_div_8_p_1_Template, 2, 3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", node_r10.data.core_Org_Job_Title);
} }
function JobTitleOrgChartComponent_ng_template_16_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_16_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23); const node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.expandNode(node_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", node_r10.children.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, node_r10.children.length == 1 ? "jobTitleBelow" : "jobTitlesBelow"), " ");
} }
function JobTitleOrgChartComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_ng_template_16_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const node_r10 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.openJobTitleDetailsDialog($event.target, node_r10.data, 0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 15)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, JobTitleOrgChartComponent_ng_template_16_div_7_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, JobTitleOrgChartComponent_ng_template_16_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, JobTitleOrgChartComponent_ng_template_16_div_9_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", node_r10.data.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r3.msgTranslate("mleft-10", "mright-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", node_r10.data.code, " - ", ctx_r3.msgTranslate(node_r10.data.ar_Name, node_r10.data.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.msgTranslate(node_r10.data.core_Job_Title_Family == null ? null : node_r10.data.core_Job_Title_Family.ar_Name, node_r10.data.core_Job_Title_Family == null ? null : node_r10.data.core_Job_Title_Family.en_Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (node_r10.data.core_Person_Instance_Job_Title == null ? null : node_r10.data.core_Person_Instance_Job_Title.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (node_r10.data.core_Org_Job_Title == null ? null : node_r10.data.core_Org_Job_Title.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", node_r10.children.length > 0);
} }
class JobTitleOrgChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(jobTitleChartService, employeeJobInformationService, dialog) {
        super();
        this.jobTitleChartService = jobTitleChartService;
        this.employeeJobInformationService = employeeJobInformationService;
        this.dialog = dialog;
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
        this.employeeJobTitles = [];
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            searchTypeId: [null],
            jobTitleId: [null],
            employeeId: [null],
        });
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
        // console.log(this.form.value);
        if (jobTitleId > 0) {
            this.showLoading();
            this.jobTitleChartService
                .getJobTitleHierarchy(jobTitleId)
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                    this.mapDataForChart(res.data);
                    setTimeout(() => {
                        this.setPositionBtnUpOneLevel();
                        this.setPositionUpOneLevelLine();
                    }, 100);
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
    // maping data for chart
    mapDataForChart(jobTitles) {
        this.jobTitleOrgChart = [
            {
                label: jobTitles[0].code,
                type: "job-title",
                styleClass: "job-title-node",
                expanded: true,
                data: jobTitles[0],
                children: [],
            },
        ];
        this.mapChildrenData(this.jobTitleOrgChart[0]);
        // console.log(jobTitles[0].chiledJobTitles);
    }
    mapChildrenData(parentJobTitle) {
        parentJobTitle.data.chiledJobTitles?.map((item) => {
            // maping data
            let mapedItem = {
                label: item.code,
                type: "job-title",
                styleClass: "job-title-node",
                expanded: true,
                data: item,
                children: [],
            };
            parentJobTitle.children.push(mapedItem);
            this.mapChildrenData(mapedItem);
        });
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
        this.onChangeSearchType();
        // get job titles start from parent job title id
        this.formCtrls.jobTitleId.setValue(this.jobTitleOrgChart[0].data.parentJobTitleID);
        // this.getJobTitleOrgChart(this.jobTitleOrgChart[0].data.parentJobTitleID);
    }
    setPositionBtnUpOneLevel() {
        let btnWidth = document
            .querySelector(".upOneLevel-btn")
            .getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 -
                btnWidth / 2 ?? 0;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.lineLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 ?? 0;
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
                .getAllByEmployeeId(employeeId)
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_3__.MessageTypes.Success) {
                    this.employeeJobTitles = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
}
JobTitleOrgChartComponent.ɵfac = function JobTitleOrgChartComponent_Factory(t) { return new (t || JobTitleOrgChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_org_management_services_job_title_chart_service__WEBPACK_IMPORTED_MODULE_4__.JobTitleChartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
JobTitleOrgChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: JobTitleOrgChartComponent, selectors: [["app-job-title-org-chart"]], hostBindings: function JobTitleOrgChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("resize", function JobTitleOrgChartComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 19, consts: [[1, "organizationchart-container", "job-title-chart"], [3, "formGroup"], [1, "row", "mx-0"], [1, "col-md-4", "col-12"], ["label", "searchBy", 3, "control", "List", "change"], [3, "control", "filter", "change", 4, "ngIf"], ["class", "col-md-4 col-12", 4, "ngIf"], [1, "upOneLevel-btn-container"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], [3, "value", "preserveSpace"], ["pTemplate", "job-title"], [3, "control", "filter", "change"], ["label", "jobTitle", 3, "control", "filter", "list", "change"], [1, "node-header", 3, "id", "click"], [1, "node-content", "main-data"], [1, "node-content"], ["class", "employees-no-section", 4, "ngIf"], ["class", "fte-content", 4, "ngIf"], ["class", "node-footer info", 3, "click", 4, "ngIf"], [1, "employees-no-section"], [1, "pi", "pi-users", 3, "click"], [1, "fte-content"], [4, "ngFor", "ngForOf"], [1, "node-footer", "info", 3, "click"]], template: function JobTitleOrgChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "app-prime-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function JobTitleOrgChartComponent_Template_app_prime_dropdown_change_4_listener() { return ctx.onChangeSearchType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, JobTitleOrgChartComponent_app_job_title_dropdown_6_Template, 1, 2, "app-job-title-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, JobTitleOrgChartComponent_app_employee_dropdown_7_Template, 1, 2, "app-employee-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, JobTitleOrgChartComponent_div_8_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function JobTitleOrgChartComponent_Template_button_click_10_listener() { return ctx.upOneLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p-organizationChart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, JobTitleOrgChartComponent_ng_template_16_Template, 10, 9, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.searchTypeId)("List", ctx.searchTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.searchTypeId.value == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.searchTypeId.value == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.employeeId.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("hidden", !(ctx.jobTitleOrgChart && (ctx.jobTitleOrgChart[0] == null ? null : ctx.jobTitleOrgChart[0].data.parentJobTitleID) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("left", ctx.upOneLevelBtnPositions.btnLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 17, "upOneLevel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("left", ctx.upOneLevelBtnPositions.lineLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.jobTitleOrgChart)("preserveSpace", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_dropdowns_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.JobTitleDropdownComponent, _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.EmployeeDropdownComponent, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_13__.OrganizationChart, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".job-title-chart {\n  \n}\n  .job-title-chart .p-organizationchart-node-content {\n  border-radius: 10px;\n  width: 280px !important;\n}\n  .job-title-chart .main-data p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n  .job-title-chart .node-header {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  cursor: pointer;\n}\n  .job-title-chart .node-footer {\n  background-color: inherit;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n  .job-title-chart .node-footer:hover {\n  background-color: #e8f3f8;\n  color: #525050 !important;\n}\n  .job-title-chart .p-organizationchart-node-content .node-header:hover {\n  background: #e8f3f8 !important;\n}\n  .job-title-chart .no-employees {\n  margin-top: 1.8rem;\n  text-align: start;\n  color: #525050;\n  padding-bottom: 0.3rem;\n}\n  .job-title-chart .employees-no-section {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n  .job-title-chart .fte-content {\n  padding: 15px 0.7rem 0 0.7rem;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi10aXRsZS1vcmctY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUEwQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FBUEY7QUFsQkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFvQko7QUFsQkU7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBb0JKO0FBbEJFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQW9CSjtBQU9FO0VBQ0UsOEJBQUE7QUFMSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUxKO0FBT0U7RUFDRSwyQ0FBQTtBQUxKO0FBT0U7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FBTEoiLCJmaWxlIjoiam9iLXRpdGxlLW9yZy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ub2RlLWNvbnRlbnQgaW1nIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgd2lkdGg6IDgwcHg7XHJcbi8vICAgaGVpZ2h0OiA4MHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLmpvYi10aXRsZS1jaGFydCB7XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMjgwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1haW4tZGF0YSBwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5ub2RlLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5ub2RlLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgLm5vZGUtZm9vdGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYzZjg7XHJcbiAgICBjb2xvcjogIzUyNTA1MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiAuZW1wbG95ZWVzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNXB4IDAuN3JlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1zZWN0aW9uIC5pY29uIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICAuZW1wbG95ZWVzLXNlY3Rpb24gaSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyBwIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLmVtcGxveWVlcy1uYW1lcyBwOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcclxuICB9ICovXHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IC5ub2RlLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThmM2Y4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uby1lbXBsb3llZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBjb2xvcjogIzUyNTA1MDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgfVxyXG4gIC5lbXBsb3llZXMtbm8tc2VjdGlvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZnRlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTVweCAwLjdyZW0gMCAwLjdyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
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
const _c0 = function (a0) { return { "ar-msg": a0 }; };
function OrgDetailsEmployeesComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-messages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrgDetailsEmployeesComponent_ng_container_19_ng_template_2_Template, 4, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r2.languageService.isArabic));
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
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.employees = res.data;
                if (this.employees.length > 0)
                    this.sortAndGroupEmployees();
                else
                    this.loaded = true;
            }
            else
                this.errorList(res.message.messages);
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
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 13, consts: [[1, "details-dialog-title"], [1, "mb-2"], [1, "type-name", "info"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "mat-dialog-close"], [1, "pi", "pi-times"], [1, "org-name"], [1, "details-dialog", "company"], ["multi", ""], [3, "expanded"], [1, "expantion-body"], [4, "ngIf"], [1, "form-control", "mbottom-15", 3, "placeholder", "keyup"], [4, "ngFor", "ngForOf"], [1, "key-emp"], ["role", "button"], ["class", "name-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "name-container", 3, "click"], [1, "img-small-icon"], [1, "pi", "pi-user"], [1, "emp-name"], ["severity", "warn", 3, "ngClass"], ["pTemplate", ""], [1, "p-message-icon", "pi", "pi-exclamation-triangle"], [1, "p-message-detail"]], template: function OrgDetailsEmployeesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrgDetailsEmployeesComponent_ng_container_19_Template, 3, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.nodeData.org.code, " - ", ctx.msgTranslate(ctx.nodeData.org.ar_Name, ctx.nodeData.org.en_Name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx.msgTranslate(ctx.nodeData.orgType.ar_Name, ctx.nodeData.orgType.en_Name)) !== null && tmp_3_0 !== undefined ? tmp_3_0 : ctx.translate("orgTypeDeleted"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", ctx.expandedIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 11, "employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length > 0 && ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.employees.length == 0 && ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_skeletons_org_details_employees_list_skeleton_org_details_employees_list_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.OrgDetailsEmployeesListSkeletonComponent, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_messages__WEBPACK_IMPORTED_MODULE_10__.Messages, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctZGV0YWlscy1lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../org-structure-hierarchy-details/org-structure-hierarchy-details.component */ 89210);








function OrgStructureDetailsComponent_app_org_structure_hierarchy_details_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-org-structure-hierarchy-details", 5);
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
OrgStructureDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrgStructureDetailsComponent, selectors: [["app-org-structure-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "row"], [1, "col-12"], ["title", "orgStructureDetails"], [3, "url", "params"], [3, "orgStructureId", "canNotEdit", 4, "ngIf"], [3, "orgStructureId", "canNotEdit"]], template: function OrgStructureDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "page-title", 2)(6, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OrgStructureDetailsComponent_app_org_structure_hierarchy_details_7_Template, 1, 2, "app-org-structure-hierarchy-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("url", "/org-management/", ctx.moduleId, "/org-structure/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.orgStructureId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_1__.BackBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _org_structure_hierarchy_details_org_structure_hierarchy_details_component__WEBPACK_IMPORTED_MODULE_3__.OrgStructureHierarchyDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctc3RydWN0dXJlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-org-structure-node/add-org-structure-node.component */ 56351);
/* harmony import */ var _org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../org-details-employees/org-details-employees.component */ 77886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/org-management/services/org-structure.service */ 66949);
/* harmony import */ var app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/org-management-setup/services/organizations.service */ 43851);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dropdowns_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/org-types-dropdown/org-types-dropdown.component */ 44479);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../job-title-org-chart/job-title-org-chart.component */ 45313);
/* harmony import */ var _resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources-chart/resources-chart.component */ 80241);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.onDelete(node_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "General.delete"));
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r4.msgTranslate(node_r2.data.orgType == null ? null : node_r2.data.orgType.ar_Name, node_r2.data.orgType == null ? null : node_r2.data.orgType.en_Name)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ctx_r4.translate("orgTypeDeleted"), " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r5.msgTranslate(node_r2.data.structure.ar_Name, node_r2.data.structure.en_Name), " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_10_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15); const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.openOrgDetailsDialog($event.target, node_r2.data, 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", node_r2.data.numEmp, " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19); const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.expandNode(node_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", node_r2.children.length, " ");
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_i_4_Template, 2, 3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const node_r2 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.openAddEditDialog(node_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_7_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_8_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_10_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_div_11_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", (tmp_0_0 = node_r2.data.org == null ? null : node_r2.data.org.id) !== null && tmp_0_0 !== undefined ? tmp_0_0 : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r1.msgTranslate("mleft-50", "mright-50"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", node_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r2.data.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 10, "General.add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r2.data.org);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r2.data.structure);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r2.data.numEmp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", node_r2.children.length > 0);
} }
function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-tab-group", 1)(1, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "app-org-types-dropdown", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template_app_org_types_dropdown_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.getAllOrganizationsByOrgType()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-prime-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.upOneLevel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p-organizationChart", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_ng_template_18_Template, 12, 12, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "app-job-title-org-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "app-resources-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 21, "companyOrgStructure")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("ar", ctx_r0.languageService.isArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r0.formCtrls.organizationTypeId)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r0.formCtrls.organization_ID)("List", ctx_r0.organizationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hidden", ctx_r0.orgStructureDetailsFiltered && !(ctx_r0.orgStructureDetailsFiltered[0] == null ? null : ctx_r0.orgStructureDetailsFiltered[0].data.org));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("left", ctx_r0.upOneLevelBtnPositions.btnLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 23, "upOneLevel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("left", ctx_r0.upOneLevelBtnPositions.lineLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r0.orgStructureDetailsFiltered)("preserveSpace", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 25, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 27, "jobtitleChart")));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 29, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 31, "resources")));
} }
class OrgStructureHierarchyDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(orgStructureService, organizationsService, dialog) {
        super();
        this.orgStructureService = orgStructureService;
        this.organizationsService = organizationsService;
        this.dialog = dialog;
        // selected part of structure hierarchy to show
        this.orgStructureDetailsFiltered = [];
        // organization dropdown
        this.organizationList = [];
        this.firstOnChange = true;
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
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
            this.firstOnChange ? (this.firstOnChange = false) : this.onChangeBusinessAndCompanyId();
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
        this.showLoading();
        this.orgStructureService
            .getByIdWithHierarchy(this.orgStructureId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.mapDataForChart(res.data[0]);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    // to make sure that all parent nodes come before their children
    sortDataBeforeMap(core_Org_Structure_Org, sortedOrgNodes, selectedIds) {
        core_Org_Structure_Org.forEach((item) => {
            if ((item.parenT_ID == null || selectedIds.includes(item.parenT_ID)) &&
                !selectedIds.includes(item.orG_ID)) {
                sortedOrgNodes.push(item);
                selectedIds.push(item.orG_ID);
            }
        });
    }
    // maping data for chart
    mapDataForChart(StructureHierarchy) {
        // sort nodes
        let selectedIds = [];
        let sortedOrgNodes = [];
        while (sortedOrgNodes.length < StructureHierarchy.core_Org_Structure_Org.length) {
            this.sortDataBeforeMap(StructureHierarchy.core_Org_Structure_Org, sortedOrgNodes, selectedIds);
        }
        // console.log(selectedOrgNodes, selectedIds);
        this.orgStructureDetails = [
            {
                label: this.translate("structure"),
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
                label: `${item.core_Org?.code} - ${this.msgTranslate(item.core_Org?.ar_Name, item.core_Org?.en_Name)}`,
                type: "org",
                styleClass: "org-node",
                expanded: true,
                data: {
                    parentId: item.parenT_ID,
                    org: item.core_Org,
                    orgType: {
                        id: item.core_Org_TYPE?.id,
                        ar_Name: item.core_Org_TYPE?.ar_Name,
                        en_Name: item.core_Org_TYPE?.en_Name,
                    },
                    structure: null,
                    structureId: this.orgStructureId,
                    numEmp: item.numEmp,
                },
                children: [],
            };
            // root nodes (company)
            if (!item.parenT_ID) {
                this.orgStructureDetails[0].children.push(mapedItem);
            }
            // other nodes
            else
                this.mapChildrenData(mapedItem, this.orgStructureDetails[0].children);
        });
        this.orgStructureDetailsFiltered = this.orgStructureDetails.slice();
        // console.log(this.orgStructureDetails);
    }
    mapChildrenData(mapedItem, chatDataParentArray) {
        chatDataParentArray.map((lastItem) => {
            if (lastItem.data.org.id == mapedItem.data.parentId) {
                lastItem.children.push(mapedItem);
                return;
            }
        });
        // if not found search in children
        chatDataParentArray.map((childItem) => {
            this.mapChildrenData(mapedItem, childItem.children);
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
    getChartDataByOrg(orgId, item) {
        item.children.map((item) => {
            if (item.data.org.id == orgId) {
                this.orgStructureDetailsFiltered = [item];
                setTimeout(() => {
                    this.setPositionBtnUpOneLevel();
                    this.setPositionUpOneLevelLine();
                }, 50);
                return;
            }
        });
        item.children.map((childItem) => this.getChartDataByOrg(orgId, childItem));
    }
    // up one level in chart
    upOneLevel() {
        this.formCtrls.organization_ID.setValue(0);
        let parentOrgId = this.orgStructureDetailsFiltered[0].data.parentId;
        if (parentOrgId)
            this.getChartDataByOrg(parentOrgId, this.orgStructureDetails[0]);
        // if up from one company node to get all companies
        else
            this.orgStructureDetailsFiltered = this.orgStructureDetails;
    }
    setPositionBtnUpOneLevel() {
        let btnWidth = document.querySelector(".upOneLevel-btn").getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 -
                btnWidth / 2 ?? 0;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.lineLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 ?? 0;
    }
    // delete node
    onDelete(node) {
        let msg = this.msgTranslate(node.data.org.ar_Name, node.data.org.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
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
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getStructureDetails();
                // update exist organization dropdown after delete organization
                this.getAllOrganizationsByOrgType();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    // add, edit node dialog
    openAddEditDialog(node /* , isAdd: boolean */) {
        return this.dialog
            .open(_add_org_structure_node_add_org_structure_node_component__WEBPACK_IMPORTED_MODULE_2__.AddOrgStructureNodeComponent, {
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
        if (targetPositions.left + targetPositions.width + 10 + dialogWidth <= window.innerWidth)
            dialogPositions.left = `${targetPositions.left + targetPositions.width + 10}px`;
        // can open right
        else if (targetPositions.left - dialogWidth - 10 >= 0)
            dialogPositions.left = `${targetPositions.left - dialogWidth - 10}px`;
        // no left and no right
        else
            dialogPositions.left = null;
        return this.dialog
            .open(_org_details_employees_org_details_employees_component__WEBPACK_IMPORTED_MODULE_3__.OrgDetailsEmployeesComponent, {
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
            this.showLoading();
            this.organizationsService
                .GetAllByOrgTypeAndStructure(orgTypeId, this.orgStructureId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.organizationList = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
            this.formCtrls.organization_ID.enable();
        }
        else
            this.formCtrls.organization_ID.disable();
    }
    // change up one level btn & line positions
    onWindowResize(event) {
        // this.dialog.closeAll();
        this.setPositionBtnUpOneLevel();
        this.setPositionUpOneLevelLine();
    }
}
OrgStructureHierarchyDetailsComponent.ɵfac = function OrgStructureHierarchyDetailsComponent_Factory(t) { return new (t || OrgStructureHierarchyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_4__.OrgStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
OrgStructureHierarchyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: OrgStructureHierarchyDetailsComponent, selectors: [["app-org-structure-hierarchy-details"]], hostBindings: function OrgStructureHierarchyDetailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function OrgStructureHierarchyDetailsComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, inputs: { orgStructureId: "orgStructureId", canNotEdit: "canNotEdit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "col-12 w-100", 4, "ngIf"], [1, "col-12", "w-100"], [3, "label"], [1, "organizationchart-container", "company-chart"], [3, "formGroup"], [1, "row", "mx-0"], [1, "col-md-4", "col-12"], [3, "control", "filter", "change"], ["label", "organization", 3, "control", "List"], [1, "upOneLevel-btn-container"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], ["styleClass", "company", 3, "value", "preserveSpace"], ["pTemplate", "org"], [1, "node-header", 3, "id"], [1, "action-icons"], ["mat-icon-button", "", "class", "pi pi-trash danger", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "pi", "pi-plus", "info", 3, "matTooltip", "click"], ["class", "node-content main-data", 4, "ngIf"], [1, "node-content"], ["class", "employees-no-section", 4, "ngIf"], ["class", "node-footer", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "pi", "pi-trash", "danger", 3, "matTooltip", "click"], [1, "node-content", "main-data"], [1, "employees-no-section"], [1, "pi", "pi-users", 3, "click"], [1, "node-footer", 3, "click"]], template: function OrgStructureHierarchyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-toast")(1, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, OrgStructureHierarchyDetailsComponent_mat_tab_group_2_Template, 27, 33, "mat-tab-group", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.orgStructureId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_dropdowns_org_types_dropdown_org_types_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.OrgTypesDropdownComponent, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_toast__WEBPACK_IMPORTED_MODULE_14__.Toast, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_15__.OrganizationChart, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _job_title_org_chart_job_title_org_chart_component__WEBPACK_IMPORTED_MODULE_8__.JobTitleOrgChartComponent, _resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_9__.ResourcesChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: [".mat-tab-body-content {\n  padding: 0;\n  overflow-y: auto !important;\n}\n\n[_nghost-%COMP%]     .company-chart .node-header i {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     .company-chart .p-organizationchart .node-header {\n  position: relative;\n}\n\n[_nghost-%COMP%]     .company-chart .p-organizationchart .node-header span {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .company-chart .p-organizationchart .action-icons {\n  float: right;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\n\n[_nghost-%COMP%]     .company-chart .p-organizationchart .action-icons i {\n  font-size: 1rem;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy1zdHJ1Y3R1cmUtaGllcmFyY2h5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdJO0VBQ0Usa0JBQUE7QUFETjs7QUFFTTtFQUNFLHFCQUFBO0FBQVI7O0FBR0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUROOztBQUVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQVIiLCJmaWxlIjoib3JnLXN0cnVjdHVyZS1oaWVyYXJjaHktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbXBhbnktY2hhcnQge1xyXG4gIC5ub2RlLWhlYWRlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucC1vcmdhbml6YXRpb25jaGFydCB7XHJcbiAgICAubm9kZS1oZWFkZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1pY29ucyB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEycHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/org-structure.service */ 66949);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);











class OrgStructureIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
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
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
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
        this.orgStructureService
            .getList(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((item) => {
                    item.froM_DATE = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(item.froM_DATE);
                    item.tO_DATE = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(item.tO_DATE);
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(orgStructure) {
        let msg = this.msgTranslate(orgStructure.ar_Name, orgStructure.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(orgStructure);
        });
    }
    delete(orgStructure) {
        this.showLoading();
        this.orgStructureService.Delete(orgStructure.id).subscribe((res) => {
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
OrgStructureIndexComponent.ɵfac = function OrgStructureIndexComponent_Factory(t) { return new (t || OrgStructureIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_org_management_services_org_structure_service__WEBPACK_IMPORTED_MODULE_3__.OrgStructureService)); };
OrgStructureIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: OrgStructureIndexComponent, selectors: [["app-org-structure-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 7, consts: [[1, "row"], [1, "col-12"], ["title", "orgStructure", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function OrgStructureIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function OrgStructureIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function OrgStructureIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmctc3RydWN0dXJlLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee-card/employee-card.component */ 49963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_services_resources_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management/services/resources-chart.service */ 65950);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/employee-dropdown/employee-dropdown.component */ 99629);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 89461);














function ResourcesChartComponent_ng_template_12_p_image_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-image", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "img"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.fileService.preview(node_r1.data.img));
} }
function ResourcesChartComponent_ng_template_12_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ResourcesChartComponent_ng_template_12_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourcesChartComponent_ng_template_12_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.expandNode(node_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", node_r1.children.length, " ");
} }
function ResourcesChartComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ResourcesChartComponent_ng_template_12_p_image_3_Template, 2, 4, "p-image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ResourcesChartComponent_ng_template_12_ng_template_4_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourcesChartComponent_ng_template_12_Template_div_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const node_r1 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.openEmployeeDetailsDialog($event.target, node_r1.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ResourcesChartComponent_ng_template_12_div_17_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", node_r1.data.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", node_r1.data.img && node_r1.data.img != "/")("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 7, ctx_r0.msgTranslate(node_r1.data.ar_Name, node_r1.data.en_Name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 9, ctx_r0.msgTranslate(node_r1.data.jobTitleNameAr, node_r1.data.jobTitleName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 11, node_r1.data.joiningDate, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", node_r1.children.length > 0);
} }
class ResourcesChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(resourcesChartService, dialog) {
        super();
        this.resourcesChartService = resourcesChartService;
        this.dialog = dialog;
        this.upOneLevelBtnPositions = {
            btnLeft: 0,
            lineLeft: 0,
        };
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
            this.showLoading();
            this.resourcesChartService
                .getEmployeesChart(employeeId)
                .subscribe((res) => {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                    this.mapDataForChart(res.data);
                    setTimeout(() => {
                        this.setPositionBtnUpOneLevel();
                        this.setPositionUpOneLevelLine();
                    }, 100);
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
        }
    }
    // maping data for chart
    mapDataForChart(employees) {
        let selectedEmpId = this.formCtrls.employeeId.value;
        let firstEmployeeIndex = employees.findIndex((emp) => emp.id == selectedEmpId);
        if (firstEmployeeIndex >= 0) {
            this.resourcesChart = [
                {
                    label: this.msgTranslate(employees[firstEmployeeIndex]?.ar_Name, employees[firstEmployeeIndex]?.en_Name),
                    type: "resources",
                    styleClass: employees[firstEmployeeIndex].isSolidEmp
                        ? ""
                        : "dashed-border",
                    expanded: true,
                    expandedIcon: "pi pi-folder-open",
                    collapsedIcon: "pi pi-folder",
                    data: employees[firstEmployeeIndex],
                    children: [],
                },
            ];
            // maping data
            employees
                .filter((emp) => emp.id != selectedEmpId)
                .map((item) => {
                let mapedItem = {
                    label: this.msgTranslate(item.ar_Name, item.en_Name),
                    type: "resources",
                    styleClass: item.isSolidEmp ? "" : "dashed-border",
                    expanded: true,
                    expandedIcon: "pi pi-folder-open",
                    collapsedIcon: "pi pi-folder",
                    data: item,
                    children: [],
                };
                // root nodes (company)
                if (item.parentID == selectedEmpId) {
                    this.resourcesChart[0].children.push(mapedItem);
                }
                // other nodes
                else if (item.id != selectedEmpId)
                    this.mapChildrenData(mapedItem, this.resourcesChart[0].children);
            });
        }
    }
    mapChildrenData(mapedItem, chatDataParentArray) {
        chatDataParentArray.map((lastItem) => {
            if (lastItem.data.id == mapedItem.data.parentID) {
                lastItem.children.push(mapedItem);
                return;
            }
        });
        // if not found search in children
        chatDataParentArray.map((childItem) => {
            this.mapChildrenData(mapedItem, childItem.children);
        });
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
            .getBoundingClientRect().width;
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.btnLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 -
                btnWidth / 2 ?? 0;
    }
    setPositionUpOneLevelLine() {
        let firstNodePositions = document
            .querySelector(".p-organizationchart-node-content")
            ?.getBoundingClientRect();
        let firstNodeContainerPositions = document
            .querySelector(".p-organizationchart")
            ?.getBoundingClientRect();
        this.upOneLevelBtnPositions.lineLeft =
            firstNodePositions?.left -
                firstNodeContainerPositions?.left +
                firstNodePositions?.width / 2 ?? 0;
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
            .open(_employee_card_employee_card_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeCardComponent, {
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
}
ResourcesChartComponent.ɵfac = function ResourcesChartComponent_Factory(t) { return new (t || ResourcesChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_org_management_services_resources_chart_service__WEBPACK_IMPORTED_MODULE_3__.ResourcesChartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
ResourcesChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ResourcesChartComponent, selectors: [["app-resources-chart"]], hostBindings: function ResourcesChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function ResourcesChartComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 16, consts: [[1, "organizationchart-container", "resources-chart"], [3, "formGroup"], [1, "row", "mx-0"], [1, "col-md-4", "col-12"], [3, "control", "filter", "change"], [1, "upOneLevel-btn-container"], ["mat-button", "", 1, "btn", "bg-light-info", "upOneLevel-btn", 3, "click"], [1, "pi", "pi-angle-up"], [3, "value", "preserveSpace"], ["pTemplate", "resources"], [1, "node-header", 3, "id"], [1, "node-content", "main-data"], [1, "img-emp-chart"], ["preview", "true", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImg", ""], [1, "p-2", "info-content", 3, "click"], [1, "info"], [1, "node-content"], ["class", "node-footer", 3, "click", 4, "ngIf"], ["preview", "true", 3, "src", "alt"], [1, "alt-img-preview"], [1, "pi", "pi-user"], [1, "node-footer", 3, "click"]], template: function ResourcesChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "app-employee-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ResourcesChartComponent_Template_app_employee_dropdown_change_4_listener() { return ctx.onChangeEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourcesChartComponent_Template_button_click_6_listener() { return ctx.upOneLevel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p-organizationChart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ResourcesChartComponent_ng_template_12_Template, 18, 14, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.formCtrls.employeeId)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hidden", !(ctx.resourcesChart && (ctx.resourcesChart[0] == null ? null : ctx.resourcesChart[0].data.parentID) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", ctx.upOneLevelBtnPositions.btnLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 14, "upOneLevel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("left", ctx.upOneLevelBtnPositions.lineLeft, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.resourcesChart)("preserveSpace", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeDropdownComponent, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_9__.OrganizationChart, primeng_image__WEBPACK_IMPORTED_MODULE_10__.Image, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".resources-chart .p-organizationchart-node-content {\n  width: 150px !important;\n  border-color: #c1c3c4;\n}\n  .resources-chart .p-organizationchart-node-content.dashed-border {\n  border-style: dashed;\n}\n  .resources-chart .info-content {\n  cursor: pointer;\n}\n  .resources-chart .node-header {\n  padding: 0;\n}\n  .resources-chart .node-header p {\n  margin: 0;\n  margin-bottom: 5px;\n}\n  .resources-chart .img-emp-chart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 150px;\n}\n  .resources-chart .img-emp-chart p-image,   .resources-chart .img-emp-chart .p-image-preview-container {\n  height: 100%;\n}\n  .resources-chart .img-emp-chart .p-image-preview-container > img {\n  height: 100%;\n  width: 100%;\n}\n  .resources-chart .img-emp-chart .alt-img-preview {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.14);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .resources-chart .img-emp-chart .alt-img-preview i {\n  font-size: 2.5rem;\n  color: rgba(0, 0, 0, 0.677);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLHVCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdFO0VBQ0Usb0JBQUE7QUFESjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0U7RUFHRSxVQUFBO0FBSEo7QUFJSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0U7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFKSjtBQU1JOztFQUVFLFlBQUE7QUFKTjtBQU1JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFKTjtBQU1JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSk47QUFNSTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFKTiIsImZpbGUiOiJyZXNvdXJjZXMtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnJlc291cmNlcy1jaGFydCB7XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IHtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2MxYzNjNDtcclxuICB9XHJcbiAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50LmRhc2hlZC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5pbmZvLWNvbnRlbnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubm9kZS1oZWFkZXIge1xyXG4gICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmltZy1lbXAtY2hhcnQge1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAvLyB3aWR0aDogMTUwcHg7XHJcbiAgICBwLWltYWdlLFxyXG4gICAgLnAtaW1hZ2UtcHJldmlldy1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucC1pbWFnZS1wcmV2aWV3LWNvbnRhaW5lciA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWx0LWltZy1wcmV2aWV3IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWx0LWltZy1wcmV2aWV3IGkge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 83186:
/*!***************************************************!*\
  !*** ./src/app/org-management/model/job-title.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/org-structure/org-structure-index/org-structure-index.component */ 90212);
/* harmony import */ var _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/org-structure/add-org-structure/add-org-structure.component */ 19892);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/org-structure/org-structure-details/org-structure-details.component */ 5771);
/* harmony import */ var _components_jobs_profile_jobs_profile_index_jobs_profile_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jobs-profile/jobs-profile-index/jobs-profile-index.component */ 27358);
/* harmony import */ var _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/jobs-profile/add-job-profile/add-job-profile.component */ 72441);
/* harmony import */ var _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/jobs-profile/assign-job-to-org/assign-job-to-org.component */ 69746);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











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
            },
            {
                path: "add",
                component: _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__.AddOrgStructureComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_org_structure },
            },
            {
                path: "edit/:orgStructureId",
                component: _components_org_structure_add_org_structure_add_org_structure_component__WEBPACK_IMPORTED_MODULE_1__.AddOrgStructureComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_org_structure },
            },
            {
                path: "details/:orgStructureId",
                component: _components_org_structure_org_structure_details_org_structure_details_component__WEBPACK_IMPORTED_MODULE_3__.OrgStructureDetailsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.org_structure_details },
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
            },
            {
                path: "add",
                component: _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__.AddJobProfileComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_job_profile },
            },
            {
                path: "edit/:jobId",
                component: _components_jobs_profile_add_job_profile_add_job_profile_component__WEBPACK_IMPORTED_MODULE_5__.AddJobProfileComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.add_job_profile },
            },
            {
                path: "assign-job-to-org",
                component: _components_jobs_profile_assign_job_to_org_assign_job_to_org_component__WEBPACK_IMPORTED_MODULE_6__.AssignJobToOrgComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_7__.ViewsManager.assign_job_to_org },
            },
        ],
    },
];
class OrgManagementRoutingModule {
}
OrgManagementRoutingModule.ɵfac = function OrgManagementRoutingModule_Factory(t) { return new (t || OrgManagementRoutingModule)(); };
OrgManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: OrgManagementRoutingModule });
OrgManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OrgManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);

























class OrgManagementModule {
}
OrgManagementModule.ɵfac = function OrgManagementModule_Factory(t) { return new (t || OrgManagementModule)(); };
OrgManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: OrgManagementModule });
OrgManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _org_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](OrgManagementModule, { declarations: [_components_org_structure_org_structure_index_org_structure_index_component__WEBPACK_IMPORTED_MODULE_1__.OrgStructureIndexComponent,
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
        _components_org_structure_resources_chart_resources_chart_component__WEBPACK_IMPORTED_MODULE_22__.ResourcesChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _org_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 51633:
/*!********************************************************************!*\
  !*** ./src/app/org-management/services/job-title-chart.service.ts ***!
  \********************************************************************/
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

/***/ 65950:
/*!********************************************************************!*\
  !*** ./src/app/org-management/services/resources-chart.service.ts ***!
  \********************************************************************/
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
    groupBy(collection, property) {
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
            let searchKey = current[property]
                .trim()
                .slice(0, noOfLetters)
                .toUpperCase();
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
//# sourceMappingURL=src_app_org-management_org-management_module_ts.js.map