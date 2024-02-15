"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_hr-setup_hr-setup_module_ts"],{

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

/***/ 11475:
/*!******************************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/components/bank/bank-index/bank-index.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankIndexComponent": () => (/* binding */ BankIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_hr_setup_services_bank_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/hr-setup/services/bank/bank.service */ 30630);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);









class BankIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(bankService) {
        super();
        this.bankService = bankService;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
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
        this.bankService.getList(params)
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
    // navigateToEdit(bank: IBankModel | any) {
    //   this.router.navigate([`hr-setup/${this.moduleId}/edit-bank/${bank.id}`], {
    //     queryParams: {
    //       parentView: this.getViewName,
    //       ...this.pageParams,
    //       // parentId: bank.function.id,
    //     },
    //   });
    // }
    onDelete(bank) {
        let msg = this.msgTranslate(bank.ar_Name, bank.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(bank);
        });
    }
    delete(bank) {
        this.showLoading();
        this.bankService.Delete(bank.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else
                    this.getList(this.currentPage, this.page.pageSize);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
BankIndexComponent.ɵfac = function BankIndexComponent_Factory(t) { return new (t || BankIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_hr_setup_services_bank_bank_service__WEBPACK_IMPORTED_MODULE_2__.BankService)); };
BankIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BankIndexComponent, selectors: [["app-bank-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "bank", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function BankIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function BankIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function BankIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.bankService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6390:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/components/documents/assign-attachment-to-job/assign-attachment-to-job.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignAttachmentToJobComponent": () => (/* binding */ AssignAttachmentToJobComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_hr_setup_mapper_hire_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/hr-setup/mapper/hire-document */ 77131);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_hr_setup_services_hire_documents_assign_doc_to_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/hr-setup/services/hire-documents/assign-doc-to-job.service */ 27136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _shared_components_dropdowns_org_management_job_title_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/org-management/job-title/job-title-dropdown/job-title-dropdown.component */ 62160);
/* harmony import */ var _shared_components_dropdowns_general_setup_service_dropdown_service_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/general-setup/service-dropdown/service-dropdown.component */ 10803);
/* harmony import */ var _shared_components_dropdowns_hr_setup_hiring_document_by_service_dropdown_hiring_document_by_service_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dropdowns/hr-setup/hiring-document-by-service-dropdown/hiring-document-by-service-dropdown.component */ 80088);




















function AssignAttachmentToJobComponent_reset_form_btn_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AssignAttachmentToJobComponent_reset_form_btn_18_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class AssignAttachmentToJobComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(jobTitleService) {
        super();
        this.jobTitleService = jobTitleService;
        this.submitted = false;
        this.attachmentList = [];
        this.mandatoryColomns = ["Ser", "jobTitleName", "attachment", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0],
            serviceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            Attachments_IDs: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            SelecetedJobTitle: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        });
        // this.formCtrls.serviceId.valueChanges.subscribe((serviceId) => {
        //   if (serviceId > 0) {
        //     this.getAttachmentByServiceId();
        //   } else {
        //     this.attachmentList = [];
        //     this.formCtrls.Attachments_IDs.disable();
        //   }
        // });
        this.formCtrls.Attachments_IDs.disable();
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getList(this.firstPage);
        }
    }
    getList(page, pageSize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.pageSize = pageSize;
        }
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.jobTitleService.getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                //#region start join data with jobId
                // let result = [];
                // const jobIds = this.getMatched(res.data, "job_Title_ID");
                // jobIds.map((jobId) => {
                //   let obj = {} as IDocJobTitleMap;
                //   obj.id = jobId;
                //   obj.attachmentsList = [];
                //   obj.attachments = [];
                //   res.data.map((e: IDocJobTitleMap) => {
                //     if (e.job_Title_ID == jobId) {
                //       obj.jobTitleName = this.msgTranslate(
                //         e.core_Job_Title.ar_Name,
                //         e.core_Job_Title.en_Name
                //       );
                //       obj.attachments.push(
                //         `  ${this.msgTranslate(
                //           e.comm_Attachment_Type_Services.comm_Attachment_Type
                //             .ar_Name,
                //           e.comm_Attachment_Type_Services.comm_Attachment_Type.en_Name
                //         )}  `
                //       );
                //     }
                //   });
                //   result.push(obj);
                // });
                //#endregion
                console.log((0,app_system_setup_hr_setup_mapper_hire_document__WEBPACK_IMPORTED_MODULE_0__.documentJobTitleToMap)(res.data));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource((0,app_system_setup_hr_setup_mapper_hire_document__WEBPACK_IMPORTED_MODULE_0__.documentJobTitleToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else {
                this.errorList(res.message.messages);
            }
        });
    }
    create() {
        let model = {
            Attachments_IDs: this.form.value.Attachments_IDs,
            SelecetedJobTitle: this.form.value.SelecetedJobTitle,
        };
        console.log("model", model);
        this.submitted = true;
        this.showLoading();
        this.jobTitleService
            .create(model)
            .subscribe((res) => {
            if (this.form.valid) {
                if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                    // this.getAttachmentByServiceId();
                    this.clearForm();
                    this.getList(this.lastPage, this.page.pageSize);
                    this.addSuccessfullyMsg(res?.message?.messageTypeName);
                }
                else {
                    this.errorList(res.message?.messages ?? [res.message.messageTypeName]);
                    this.hideLoading();
                }
            }
        });
    }
    onDelete(jobTitle) {
        this.deleteDialog(jobTitle.jobTitleName).subscribe((confirm) => {
            if (confirm) {
                this.delete(jobTitle);
            }
        });
    }
    delete(jobTitle) {
        let params = {
            Job_Title_ID: jobTitle.job_Title_ID,
            AttachmentTypeService_ID: jobTitle.attachmentTypeService_ID,
        };
        this.showLoading();
        this.jobTitleService.Delete(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (jobTitle.job_Title_ID == this.formCtrls.ID.value) {
                    this.clearForm();
                }
            }
            else {
                this.errorList(res.message.messages);
            }
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.formCtrls.serviceId.enable();
        this.submitted = false;
    }
}
AssignAttachmentToJobComponent.ɵfac = function AssignAttachmentToJobComponent_Factory(t) { return new (t || AssignAttachmentToJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_hr_setup_services_hire_documents_assign_doc_to_job_service__WEBPACK_IMPORTED_MODULE_3__.AssignDocToJobtitleService)); };
AssignAttachmentToJobComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AssignAttachmentToJobComponent, selectors: [["app-assign-attachment-to-job"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 25, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "jobTitleHireDocuments", "editTitle", "editJobTitleHireDocuments", 3, "id"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-4"], [3, "control", "submitted", "filterId"], ["label", "attachments", 3, "control", "serviceControl", "submitted", "multiple", "filter"], [3, "control", "submitted", "multi", "filter"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "deleteRow"], [3, "click"]], template: function AssignAttachmentToJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "page-title", 3)(6, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-card-content", 5)(8, "form", 6)(9, "div", 0)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-service-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-hiring-document-by-service-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-job-title-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-card-actions", 11)(17, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function AssignAttachmentToJobComponent_Template_submit_btn_onClick_17_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AssignAttachmentToJobComponent_reset_form_btn_18_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("deleteRow", function AssignAttachmentToJobComponent_Template_app_material_table_deleteRow_20_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/hr-setup/", ctx.moduleId, "/hire-documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.serviceId)("submitted", false)("filterId", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.Attachments_IDs)("serviceControl", ctx.formCtrls.serviceId)("submitted", ctx.submitted)("multiple", true)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.SelecetedJobTitle)("submitted", ctx.submitted)("multi", true)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.jobTitleService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _shared_components_dropdowns_org_management_job_title_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.JobTitleDropdownComponent, _shared_components_dropdowns_general_setup_service_dropdown_service_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.ServiceDropdownComponent, _shared_components_dropdowns_hr_setup_hiring_document_by_service_dropdown_hiring_document_by_service_dropdown_component__WEBPACK_IMPORTED_MODULE_11__.HiringDocumentByServiceDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24tYXR0YWNobWVudC10by1qb2IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6215:
/*!*************************************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/components/education-degree/education-degree.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationDegreeComponent": () => (/* binding */ EducationDegreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_hr_setup_services_education_degree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/hr-setup/services/education-degree.service */ 97991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function EducationDegreeComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EducationDegreeComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class EducationDegreeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(educationDegreeService) {
        super();
        this.educationDegreeService = educationDegreeService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.educationDegreeService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.successPrime(res.message.messageTypeName);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_Name,
                En_Name: this.form.value.en_Name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.educationDegreeService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.educationDegreeService.update(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize); // current page after update
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    educationDegreeToEdit(educationDegree) {
        this.form.patchValue(educationDegree);
    }
    onDelete(educationDegree) {
        let msg = this.msgTranslate(educationDegree.ar_Name, educationDegree.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(educationDegree);
        });
    }
    delete(educationDegree) {
        this.showLoading();
        this.educationDegreeService.Delete(educationDegree.id).subscribe((res) => {
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
                if (educationDegree.id == this.formCtrls.id.value)
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
EducationDegreeComponent.ɵfac = function EducationDegreeComponent_Factory(t) { return new (t || EducationDegreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_hr_setup_services_education_degree_service__WEBPACK_IMPORTED_MODULE_3__.EducationDegreeService)); };
EducationDegreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EducationDegreeComponent, selectors: [["app-education-degree"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "educationDegree", "editTitle", "editEducationDegree", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function EducationDegreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-card-actions", 9)(16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function EducationDegreeComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, EducationDegreeComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function EducationDegreeComponent_Template_app_material_table_onChangePage_19_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function EducationDegreeComponent_Template_app_material_table_editRow_19_listener($event) { return ctx.educationDegreeToEdit($event); })("deleteRow", function EducationDegreeComponent_Template_app_material_table_deleteRow_19_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.educationDegreeService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tZGVncmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65186:
/*!***************************************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/components/finincial-company/financial-company.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialCompanyComponent": () => (/* binding */ FinancialCompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_hr_setup_services_financial_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/hr-setup/services/financial-company.service */ 83089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function FinancialCompanyComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FinancialCompanyComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class FinancialCompanyComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(financialService) {
        super();
        this.financialService = financialService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "ar_Name", "en_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
    getList(page, pagesize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pagesize)
            this.page.pageSize = pagesize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.financialService
            .getList(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res?.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_Name,
                En_Name: this.form.value.en_Name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.financialService
            .create(model)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res.message.messages);
                this.hideLoading();
            }
        });
    }
    update(model) {
        this.showLoading();
        this.financialService
            .update(model)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    FinancialCompanyToEdit(FinancialCompany) {
        this.form.patchValue(FinancialCompany);
    }
    onDelete(FinancialCompany) {
        let msg = this.msgTranslate(FinancialCompany.ar_Name, FinancialCompany.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.Delete(FinancialCompany);
        });
    }
    Delete(FinancialCompany) {
        this.showLoading();
        this.financialService
            .Delete(FinancialCompany.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (FinancialCompany.id == this.formCtrls.id.value)
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
FinancialCompanyComponent.ɵfac = function FinancialCompanyComponent_Factory(t) { return new (t || FinancialCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_hr_setup_services_financial_company_service__WEBPACK_IMPORTED_MODULE_3__.FinancialCompanyService)); };
FinancialCompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: FinancialCompanyComponent, selectors: [["app-FinancialCompany"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "financialCompany", "editTitle", "editFinancialCompany", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function FinancialCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-card-actions", 9)(14, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function FinancialCompanyComponent_Template_submit_btn_onClick_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, FinancialCompanyComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function FinancialCompanyComponent_Template_app_material_table_onChangePage_17_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function FinancialCompanyComponent_Template_app_material_table_editRow_17_listener($event) { return ctx.FinancialCompanyToEdit($event); })("deleteRow", function FinancialCompanyComponent_Template_app_material_table_deleteRow_17_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.financialService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5hbmNpYWwtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 91080:
/*!******************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/hr-setup-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrSetupRoutingModule": () => (/* binding */ HrSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nationality/nationality.component */ 8374);
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/country/country.component */ 2438);
/* harmony import */ var _components_education_degree_education_degree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/education-degree/education-degree.component */ 6215);
/* harmony import */ var _components_contract_type_contract_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contract-type/contract-type.component */ 14244);
/* harmony import */ var _components_religion_religion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/religion/religion.component */ 148);
/* harmony import */ var _components_insurance_office_insurance_office_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/insurance-office/insurance-office.component */ 54771);
/* harmony import */ var _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/institution/institution.component */ 28061);
/* harmony import */ var _components_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/kpi/kpi.component */ 52045);
/* harmony import */ var _components_bank_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bank/add-bank/add-bank.component */ 76422);
/* harmony import */ var _components_bank_bank_index_bank_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bank/bank-index/bank-index.component */ 11475);
/* harmony import */ var _components_identity_type_identity_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/identity-type/identity-type.component */ 28976);
/* harmony import */ var _components_documents_hire_documents_hire_documents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/documents/hire-documents/hire-documents.component */ 97958);
/* harmony import */ var _components_documents_assign_attachment_to_job_assign_attachment_to_job_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/documents/assign-attachment-to-job/assign-attachment-to-job.component */ 6390);
/* harmony import */ var _components_governorate_governorate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/governorate/governorate.component */ 22854);
/* harmony import */ var _components_finincial_company_financial_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/finincial-company/financial-company.component */ 65186);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var _components_contact_type_contact_type_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact-type/contact-type.component */ 39757);
/* harmony import */ var _components_contact_category_contact_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact-category/contact-category.component */ 10873);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);























const routes = [
    {
        path: "nationality",
        component: _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_0__.NationalityComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.nationality },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "country",
        component: _components_country_country_component__WEBPACK_IMPORTED_MODULE_1__.CountryComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.country },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "education-degree",
        component: _components_education_degree_education_degree_component__WEBPACK_IMPORTED_MODULE_2__.EducationDegreeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.education_degree },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "contract-type",
        component: _components_contract_type_contract_type_component__WEBPACK_IMPORTED_MODULE_3__.ContractTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.contract_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "contact-type",
        component: _components_contact_type_contact_type_component__WEBPACK_IMPORTED_MODULE_17__.ContactTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.contact_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "contact-category",
        component: _components_contact_category_contact_category_component__WEBPACK_IMPORTED_MODULE_18__.ContactCategoryComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.contact_category },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "religion",
        component: _components_religion_religion_component__WEBPACK_IMPORTED_MODULE_4__.ReligionComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.religion },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "finincial-company",
        component: _components_finincial_company_financial_company_component__WEBPACK_IMPORTED_MODULE_14__.FinancialCompanyComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.finincial_company },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "insurance-office",
        component: _components_insurance_office_insurance_office_component__WEBPACK_IMPORTED_MODULE_5__.InsuranceOfficeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.insurance_office },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "institution",
        component: _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_6__.InstitutionComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.institution },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "bank",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_16__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_bank_bank_index_bank_index_component__WEBPACK_IMPORTED_MODULE_9__.BankIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.bank_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_bank_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_8__.AddBankComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.add_bank },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:bankid",
                component: _components_bank_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_8__.AddBankComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.add_bank },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "hire-documents",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_16__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_documents_hire_documents_hire_documents_component__WEBPACK_IMPORTED_MODULE_11__.HireDocumentsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.hire_documents },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
            },
            {
                path: "assign-to-job",
                component: _components_documents_assign_attachment_to_job_assign_attachment_to_job_component__WEBPACK_IMPORTED_MODULE_12__.AssignAttachmentToJobComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.assign_to_job },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "governorate",
        component: _components_governorate_governorate_component__WEBPACK_IMPORTED_MODULE_13__.GovernorateComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.governorate },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "kpi",
        component: _components_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_7__.KpiComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.kpi },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
    {
        path: "identity-type",
        component: _components_identity_type_identity_type_component__WEBPACK_IMPORTED_MODULE_10__.IdentityTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_15__.ViewsManager.identity_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_19__.CheckIsViewAllowedGuard],
    },
];
class HrSetupRoutingModule {
}
HrSetupRoutingModule.ɵfac = function HrSetupRoutingModule_Factory(t) { return new (t || HrSetupRoutingModule)(); };
HrSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: HrSetupRoutingModule });
HrSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](HrSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule] }); })();


/***/ }),

/***/ 21328:
/*!**********************************************************!*\
  !*** ./src/app/system-setup/hr-setup/hr-setup.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrSetupModule": () => (/* binding */ HrSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_bank_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bank/add-bank/add-bank.component */ 76422);
/* harmony import */ var _components_bank_bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bank/bank-branch/bank-branch.component */ 34380);
/* harmony import */ var _components_bank_bank_index_bank_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bank/bank-index/bank-index.component */ 11475);
/* harmony import */ var _components_contract_type_contract_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contract-type/contract-type.component */ 14244);
/* harmony import */ var _components_country_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/country/country.component */ 2438);
/* harmony import */ var _components_documents_assign_attachment_to_job_assign_attachment_to_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/documents/assign-attachment-to-job/assign-attachment-to-job.component */ 6390);
/* harmony import */ var _components_documents_hire_documents_hire_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/documents/hire-documents/hire-documents.component */ 97958);
/* harmony import */ var _components_education_degree_education_degree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/education-degree/education-degree.component */ 6215);
/* harmony import */ var _components_finincial_company_financial_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/finincial-company/financial-company.component */ 65186);
/* harmony import */ var _components_governorate_governorate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/governorate/governorate.component */ 22854);
/* harmony import */ var _components_identity_type_identity_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/identity-type/identity-type.component */ 28976);
/* harmony import */ var _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/institution/institution.component */ 28061);
/* harmony import */ var _components_insurance_office_insurance_office_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/insurance-office/insurance-office.component */ 54771);
/* harmony import */ var _components_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/kpi/kpi.component */ 52045);
/* harmony import */ var _components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nationality/nationality.component */ 8374);
/* harmony import */ var _components_religion_religion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/religion/religion.component */ 148);
/* harmony import */ var _hr_setup_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hr-setup-routing.module */ 91080);
/* harmony import */ var _components_contact_type_contact_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact-type/contact-type.component */ 39757);
/* harmony import */ var _components_contact_category_contact_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contact-category/contact-category.component */ 10873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);






















class HrSetupModule {
}
HrSetupModule.ɵfac = function HrSetupModule_Factory(t) { return new (t || HrSetupModule)(); };
HrSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: HrSetupModule });
HrSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _hr_setup_routing_module__WEBPACK_IMPORTED_MODULE_17__.HrSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](HrSetupModule, { declarations: [_components_nationality_nationality_component__WEBPACK_IMPORTED_MODULE_15__.NationalityComponent,
        _components_country_country_component__WEBPACK_IMPORTED_MODULE_5__.CountryComponent,
        _components_education_degree_education_degree_component__WEBPACK_IMPORTED_MODULE_8__.EducationDegreeComponent,
        _components_contract_type_contract_type_component__WEBPACK_IMPORTED_MODULE_4__.ContractTypeComponent,
        _components_religion_religion_component__WEBPACK_IMPORTED_MODULE_16__.ReligionComponent,
        _components_insurance_office_insurance_office_component__WEBPACK_IMPORTED_MODULE_13__.InsuranceOfficeComponent,
        _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_12__.InstitutionComponent,
        _components_bank_bank_index_bank_index_component__WEBPACK_IMPORTED_MODULE_3__.BankIndexComponent,
        _components_bank_bank_branch_bank_branch_component__WEBPACK_IMPORTED_MODULE_2__.BankBranchComponent,
        _components_bank_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_1__.AddBankComponent,
        _components_kpi_kpi_component__WEBPACK_IMPORTED_MODULE_14__.KpiComponent,
        _components_identity_type_identity_type_component__WEBPACK_IMPORTED_MODULE_11__.IdentityTypeComponent,
        _components_documents_hire_documents_hire_documents_component__WEBPACK_IMPORTED_MODULE_7__.HireDocumentsComponent,
        _components_documents_assign_attachment_to_job_assign_attachment_to_job_component__WEBPACK_IMPORTED_MODULE_6__.AssignAttachmentToJobComponent,
        _components_governorate_governorate_component__WEBPACK_IMPORTED_MODULE_10__.GovernorateComponent,
        _components_finincial_company_financial_company_component__WEBPACK_IMPORTED_MODULE_9__.FinancialCompanyComponent,
        _components_contact_type_contact_type_component__WEBPACK_IMPORTED_MODULE_18__.ContactTypeComponent,
        _components_contact_category_contact_category_component__WEBPACK_IMPORTED_MODULE_19__.ContactCategoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _hr_setup_routing_module__WEBPACK_IMPORTED_MODULE_17__.HrSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 83089:
/*!*****************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/services/financial-company.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialCompanyService": () => (/* binding */ FinancialCompanyService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FinancialCompanyService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("HRSetup/FinancialCompany/Create", body);
    }
    update(body) {
        return this.post("HRSetup/FinancialCompany/Edit", body);
    }
    getList(params) {
        return this.get("HRSetup/FinancialCompany/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("HRSetup/FinancialCompany/GetAll");
    }
    Delete(id) {
        return this.delete(`HRSetup/FinancialCompany/Delete`, {
            params: { id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
FinancialCompanyService.ɵfac = function FinancialCompanyService_Factory(t) { return new (t || FinancialCompanyService)(); };
FinancialCompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FinancialCompanyService, factory: FinancialCompanyService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 27136:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/hr-setup/services/hire-documents/assign-doc-to-job.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignDocToJobtitleService": () => (/* binding */ AssignDocToJobtitleService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class AssignDocToJobtitleService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("HRSetup/JobTitleHireDocument/Create", body);
    }
    getList(params) {
        return this.get("HRSetup/JobTitleHireDocument/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Comm_Attachment_Type_Services}.${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Comm_Attachment_Type},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Core_Job_Title}`,
            },
        });
    }
    getAll() {
        return this.get("HRSetup/JobTitleHireDocument/GetAll");
    }
    Delete(param) {
        return this.delete("HRSetup/JobTitleHireDocument/Delete", {
            params: param
        });
    }
    exportExcel() {
        this.getAll();
    }
}
AssignDocToJobtitleService.ɵfac = function AssignDocToJobtitleService_Factory(t) { return new (t || AssignDocToJobtitleService)(); };
AssignDocToJobtitleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AssignDocToJobtitleService, factory: AssignDocToJobtitleService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_hr-setup_hr-setup_module_ts.js.map