"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["default-src_app_org-management-setup_components_organizations_organizations_component_ts"],{

/***/ 498:
/*!******************************************************************************************!*\
  !*** ./src/app/org-management-setup/components/organizations/organizations.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationsComponent": () => (/* binding */ OrganizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/org-management-setup/services/organizations.service */ 43851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dynamic-form-field/prime-ng/file-upload/file-upload.component */ 22193);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/buttons/close-dialog-btn/close-dialog-btn.component */ 47037);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);





















function OrganizationsComponent_close_dialog_btn_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "close-dialog-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrganizationsComponent_close_dialog_btn_6_Template_close_dialog_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.onCloseDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function OrganizationsComponent_reset_form_btn_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrganizationsComponent_reset_form_btn_22_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function OrganizationsComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "app-material-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChangePage", function OrganizationsComponent_ng_container_23_Template_app_material_table_onChangePage_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.getList($event.pageIndex + 1, $event.pageSize)); })("editRow", function OrganizationsComponent_ng_container_23_Template_app_material_table_editRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.organizationToEdit($event)); })("deleteRow", function OrganizationsComponent_ng_container_23_Template_app_material_table_deleteRow_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("page", ctx_r2.page)("isHexImg", true)("actions", ctx_r2.rowFunctions);
} }
class OrganizationsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(organizationsService, data, dialogRef) {
        super();
        this.organizationsService = organizationsService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "ar_Name",
            "code",
            "actions",
        ];
        this.optionalColomns = ["logo"];
        this.removeFiles = false;
        this.isLoaded = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            logo: [null /* , [Validators.required] */],
        });
        if (this.data.value) {
            this.formCtrls.ar_name.setValue(this.data.value);
            this.formCtrls.en_name.setValue(this.data.value);
        }
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
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.organizationsService
            .getList(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        this.submitted = true;
        this.removeFiles = false;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
                code: this.form.value.code,
                logo: this.form.value.logo,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.organizationsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.lastPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.organizationsService
            .update(model)
            .subscribe((res) => {
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
    organizationToEdit(organization) {
        this.form.patchValue(organization);
        this.formCtrls.ar_name.setValue(organization.ar_Name);
        this.formCtrls.en_name.setValue(organization.en_Name);
        // console.log(this.form.value);
    }
    onDelete(organization) {
        let msg = this.msgTranslate(organization.ar_Name, organization.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(organization);
        });
    }
    delete(organization) {
        this.showLoading();
        this.organizationsService
            .Delete(organization.id)
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
                if (organization.id == this.formCtrls.id.value)
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
        this.removeFiles = true;
    }
    onCloseDialog() {
        this.dialogRef.close();
    }
}
OrganizationsComponent.ɵfac = function OrganizationsComponent_Factory(t) { return new (t || OrganizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_org_management_setup_services_organizations_service__WEBPACK_IMPORTED_MODULE_3__.OrganizationsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
OrganizationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: OrganizationsComponent, selectors: [["app-organizations"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 17, consts: [[1, "row"], [1, "col-12"], ["addTitle", "organizations", "editTitle", "editOrganization", 3, "id"], [3, "click", 4, "ngIf"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "code", 3, "control", "submitted"], ["label", "logo", "accept", "image/*", 3, "control", "multiple", "isHexImg", "removeFiles", "isEdit"], ["align", "end"], [3, "id", "onClick"], [4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "isHexImg", "actions", "onChangePage", "editRow", "deleteRow"]], template: function OrganizationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, OrganizationsComponent_close_dialog_btn_6_Template, 1, 0, "close-dialog-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-card-content", 4)(8, "div", 0)(9, "div", 1)(10, "form", 5)(11, "div", 0)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-file-upload", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "mat-card-actions", 11)(21, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function OrganizationsComponent_Template_submit_btn_onClick_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, OrganizationsComponent_reset_form_btn_22_Template, 1, 0, "reset-form-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, OrganizationsComponent_ng_container_23_Template, 3, 7, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.data.isDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.ar_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.code)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.logo)("multiple", false)("isHexImg", true)("removeFiles", ctx.removeFiles)("isEdit", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.data.isDialog);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__.FileUploadComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _shared_components_buttons_close_dialog_btn_close_dialog_btn_component__WEBPACK_IMPORTED_MODULE_10__.CloseDialogBtnComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmdhbml6YXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_org-management-setup_components_organizations_organizations_component_ts.js.map