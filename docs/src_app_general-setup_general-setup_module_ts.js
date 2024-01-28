"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_general-setup_general-setup_module_ts"],{

/***/ 32521:
/*!*****************************************************************************************!*\
  !*** ./src/app/general-setup/components/activation-setup/activation-setup.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivationSetupComponent": () => (/* binding */ ActivationSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_activation_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/general-setup/services/activation-setup.service */ 27803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);


















function ActivationSetupComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActivationSetupComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class ActivationSetupComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(activationService) {
        super();
        this.activationService = activationService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "object_Name",
            "require_Activation",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            object_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            require_Activation: [false],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
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
        this.activationService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.data);
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
                id: this.formCtrls.id.value,
                object_Name: this.formCtrls.object_Name.value,
                require_Activation: this.formCtrls.require_Activation.value,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.activationService
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
        this.activationService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(activationSetup) {
        let msg = this.msgTranslate(activationSetup.object_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.Delete(activationSetup);
        });
    }
    Delete(activationSetup) {
        this.showLoading();
        this.activationService
            .Delete(activationSetup.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (activationSetup.id == this.formCtrls.id.value)
                    this.clearForm();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    activationSetupToEdit(activationSetup) {
        this.form.patchValue(activationSetup);
    }
    clearForm() {
        this.form.reset({ id: 0, require_Activation: false });
        this.submitted = false;
    }
}
ActivationSetupComponent.ɵfac = function ActivationSetupComponent_Factory(t) { return new (t || ActivationSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_general_setup_services_activation_setup_service__WEBPACK_IMPORTED_MODULE_3__.ActivationSetupService)); };
ActivationSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ActivationSetupComponent, selectors: [["app-activation-setup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 14, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "activation_setup", "editTitle", "editActivation_setup", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "object_Name", 3, "control", "submitted"], [1, "col-md-6", "col-12", "mt-3"], ["color", "primary", "label", "require_Activation", 3, "control"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function ActivationSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-check-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-card-actions", 10)(14, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function ActivationSetupComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ActivationSetupComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "app-material-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function ActivationSetupComponent_Template_app_material_table_onChangePage_17_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function ActivationSetupComponent_Template_app_material_table_editRow_17_listener($event) { return ctx.activationSetupToEdit($event); })("deleteRow", function ActivationSetupComponent_Template_app_material_table_deleteRow_17_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.object_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.require_Activation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.activationService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmF0aW9uLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65904:
/*!*****************************************************************************************!*\
  !*** ./src/app/general-setup/components/attachment-types/attachment-types.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypesComponent": () => (/* binding */ AttachmentTypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/gender.enum */ 68095);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_attachment_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/general-setup/services/attachment-types.service */ 71538);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/radio-button/radio-button.component */ 92393);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);



















function AttachmentTypesComponent_reset_form_btn_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AttachmentTypesComponent_reset_form_btn_18_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class AttachmentTypesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(attachmentTypsService) {
        super();
        this.attachmentTypsService = attachmentTypsService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "ar_Name",
            "en_Name",
            "genderName",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
        this.genderList = [
            {
                value: app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_0__.EGender.male,
                label: "male",
                cssClass: "col-md-4 col-12",
            },
            {
                value: app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_0__.EGender.female,
                label: "female",
                cssClass: "col-md-4 col-12",
            },
            {
                value: app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_0__.EGender.allofThem,
                label: "allofThem",
                cssClass: "col-md-4 col-12",
            },
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            gender: [3],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getList(this.firstPage);
    }
    get formCtrls() {
        return this.form.controls;
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.attachmentTypsService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                res.data.map((item) => {
                    item.genderName = this.translate(app_shared_enums_gender_enum__WEBPACK_IMPORTED_MODULE_0__.EGender.getValue(item.gender));
                });
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
        if (this.form.valid) {
            const model = {
                Id: this.formCtrls.id.value,
                ar_Name: this.formCtrls.ar_Name.value,
                en_Name: this.formCtrls.en_Name.value,
                gender: this.formCtrls.gender.value,
            };
            model.Id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.attachmentTypsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
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
        this.attachmentTypsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    onDelete(attachmentTyps) {
        let msg = this.msgTranslate(attachmentTyps.ar_Name, attachmentTyps.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.Delete(attachmentTyps);
        });
    }
    Delete(attachmentTyps) {
        this.showLoading();
        this.attachmentTypsService
            .Delete(attachmentTyps.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (attachmentTyps.id == this.formCtrls.id.value)
                    this.clearForm();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    attachmentTypsToEdit(attachmentTyps) {
        this.form.patchValue(attachmentTyps);
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
AttachmentTypesComponent.ɵfac = function AttachmentTypesComponent_Factory(t) { return new (t || AttachmentTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_general_setup_services_attachment_types_service__WEBPACK_IMPORTED_MODULE_4__.AttachmentTypesService)); };
AttachmentTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AttachmentTypesComponent, selectors: [["app-attachment-types"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 18, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "attachment_types", "editTitle", "edit_attachment_types", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], [3, "control", "submitted", "radioList"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function AttachmentTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 0)(14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-card-actions", 10)(17, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AttachmentTypesComponent_Template_submit_btn_onClick_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, AttachmentTypesComponent_reset_form_btn_18_Template, 1, 0, "reset-form-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "app-material-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChangePage", function AttachmentTypesComponent_Template_app_material_table_onChangePage_20_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function AttachmentTypesComponent_Template_app_material_table_editRow_20_listener($event) { return ctx.attachmentTypsToEdit($event); })("deleteRow", function AttachmentTypesComponent_Template_app_material_table_deleteRow_20_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.gender)("submitted", ctx.submitted)("radioList", ctx.genderList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.attachmentTypsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_dynamic_form_field_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__.RadioButtonComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRhY2htZW50LXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 33609:
/*!*********************************************************************************!*\
  !*** ./src/app/general-setup/components/company-code/company-code.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCodeComponent": () => (/* binding */ CompanyCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_company_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/company-code.service */ 32961);
/* harmony import */ var _shared_components_dropdowns_company_by_businessId_dropdown_company_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dropdowns/company-by-businessId-dropdown/company-dropdown.component */ 13714);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);












class CompanyCodeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(_companyCodeService) {
        super();
        this._companyCodeService = _companyCodeService;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            isHasCode: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            company_ID: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.formCtrls.company_ID.valueChanges.subscribe((val) => {
            if (val > 0) {
                this.getCodeStatus();
            }
        });
    }
    get formCtrls() {
        return this.form?.controls;
    }
    getCodeStatus() {
        this.showLoading();
        this._companyCodeService
            .getCodeStatus(this.formCtrls.company_ID.value)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data == null) {
                    this.formCtrls.id.setValue(0);
                    this.formCtrls.isHasCode.setValue(false);
                }
                else {
                    this.formCtrls.id.setValue(res.data.id);
                    this.formCtrls.isHasCode.setValue(res.data.isHasCode);
                }
            }
            else {
            }
        });
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                id: this.formCtrls.id.value,
                isHasCode: this.formCtrls.isHasCode.value,
                company_ID: this.formCtrls.company_ID.value,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this._companyCodeService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this._companyCodeService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
CompanyCodeComponent.ɵfac = function CompanyCodeComponent_Factory(t) { return new (t || CompanyCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_general_setup_services_company_code_service__WEBPACK_IMPORTED_MODULE_2__.CompanyCodeService)); };
CompanyCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CompanyCodeComponent, selectors: [["app-company-code"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 6, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "companyCode", "editTitle", "editcompanyCode", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], [3, "control", "submitted"], [1, "col-md-6", "col-12", "p-2"], ["label", "isHasCode", 3, "control"], ["align", "end"], [3, "id", "click"]], template: function CompanyCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "company-by-businessId-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-check-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-card-actions", 10)(16, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyCodeComponent_Template_submit_btn_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.company_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.isHasCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
    } }, dependencies: [_shared_components_dropdowns_company_by_businessId_dropdown_company_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.CompanyDropdownComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_4__.CheckBoxComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 49243:
/*!**********************************************************************************!*\
  !*** ./src/app/general-setup/components/groups/add-group/add-group.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGroupComponent": () => (/* binding */ AddGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/groups.service */ 96914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function AddGroupComponent_app_add_new_btn_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-add-new-btn", 18);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/general-setup/", ctx_r0.moduleId, "/groups/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx_r0.pageParams);
} }
function AddGroupComponent_reset_form_btn_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddGroupComponent_reset_form_btn_29_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class AddGroupComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(_groupsService) {
        super();
        this._groupsService = _groupsService;
        this.groupId = 0;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.groupId = params.groupId ?? 0;
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            engName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            arbName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            engDescription: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            arbDescription: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.groupId > 0) {
            this.getGroupById();
        }
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                id: this.form.value.id,
                engName: this.form.value.engName,
                arbName: this.form.value.arbName,
                engDescription: this.form.value.engDescription,
                arbDescription: this.form.value.arbDescription
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this._groupsService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.groupId = res.data.id;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this._groupsService.update(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    getGroupById() {
        this._groupsService
            .getGroupById(this.groupId)
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.form.patchValue(res.data[0]);
            }
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
AddGroupComponent.ɵfac = function AddGroupComponent_Factory(t) { return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_general_setup_services_groups_service__WEBPACK_IMPORTED_MODULE_2__.GroupsService)); };
AddGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AddGroupComponent, selectors: [["app-add-group"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 25, consts: [[1, "col-12", "w-100"], ["title", "groups"], ["label", "addgroup", 3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "col-12", "w-100", 3, "dir"], [1, "w-100", 3, "label"], [1, "container-fluid", "mt-3"], [1, "row"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "engDescription", 3, "control", "submitted"], ["label", "arbDescription", 3, "control", "submitted"], [1, "m-2"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], ["label", "addgroup", 3, "url", "params"], [3, "click"]], template: function AddGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div")(2, "div", 0)(3, "mat-card")(4, "mat-card-title")(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, AddGroupComponent_app_add_new_btn_7_Template, 1, 2, "app-add-new-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-tab-group", 4)(10, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-card-content", 6)(14, "div", 7)(15, "div", 0)(16, "form", 8)(17, "div", 7)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 14)(27, "mat-card-actions", 15)(28, "submit-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function AddGroupComponent_Template_submit_btn_onClick_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AddGroupComponent_reset_form_btn_29_Template, 1, 0, "reset-form-btn", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.groupId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("url", "/general-setup/", ctx.moduleId, "/groups/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 17, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 19, "userGroups")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.engName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.arbName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.engDescription)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.arbDescription)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 21, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 23, "privileges")));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_4__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_5__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36342:
/*!****************************************************************************************!*\
  !*** ./src/app/general-setup/components/groups/groups-index/groups-index.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsIndexComponent": () => (/* binding */ GroupsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_general_setup_mapper_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/general-setup/mapper/groups */ 65866);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/general-setup/services/groups.service */ 96914);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);











class GroupsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(_groupsService) {
        super();
        this._groupsService = _groupsService;
        this.mandatoryColomns = ["Ser", "id", "ar_Name", "en_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this._groupsService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_general_setup_mapper_groups__WEBPACK_IMPORTED_MODULE_0__.groupToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(group) {
        let msg = this.msgTranslate(group.engName, group.arbName);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(group);
        });
    }
    delete(group) {
        this.showLoading();
        this._groupsService.Delete(group.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1)
                    this.getList(this.prevPage, this.page.pageSize);
                else
                    this.getList(this.currentPage, this.page.pageSize);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
GroupsIndexComponent.ɵfac = function GroupsIndexComponent_Factory(t) { return new (t || GroupsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_general_setup_services_groups_service__WEBPACK_IMPORTED_MODULE_3__.GroupsService)); };
GroupsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GroupsIndexComponent, selectors: [["app-groups-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 8, consts: [[1, "row"], [1, "col-12"], ["title", "groups", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function GroupsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function GroupsIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function GroupsIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx._groupsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cHMtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 37572:
/*!*************************************************************************!*\
  !*** ./src/app/general-setup/components/iso-code/iso-code.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsoCodeComponent": () => (/* binding */ IsoCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_iso_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/iso-code.service */ 84941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_reports_dropdown_reports_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dropdowns/reports-dropdown/reports-dropdown.component */ 90745);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);














function IsoCodeComponent_reset_form_btn_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "reset-form-btn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IsoCodeComponent_reset_form_btn_13_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class IsoCodeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(isoCodeService) {
        super();
        this.isoCodeService = isoCodeService;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            reportId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            iso: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                id: this.formCtrls.reportId.value,
                iso: this.formCtrls.iso.value,
            };
            this.update(model);
        }
    }
    onSelectReport(report) {
        if (report)
            this.formCtrls.iso.setValue(report.iso);
        else
            this.formCtrls.iso.setValue(null);
    }
    update(model) {
        this.showLoading();
        this.isoCodeService.Edit(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.isoChanged = true;
                this.clearForm();
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
}
IsoCodeComponent.ɵfac = function IsoCodeComponent_Factory(t) { return new (t || IsoCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_general_setup_services_iso_code_service__WEBPACK_IMPORTED_MODULE_2__.IsoCodeService)); };
IsoCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: IsoCodeComponent, selectors: [["app-iso-code"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 7, consts: [["title", "isoCode"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "isoChanged", "select"], ["label", "isoCode", 3, "control", "submitted"], ["align", "end"], [3, "onClick"], [3, "click", 4, "ngIf"], [3, "click"]], template: function IsoCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card-content")(5, "form", 1)(6, "div", 2)(7, "div", 3)(8, "reports-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("select", function IsoCodeComponent_Template_reports_dropdown_select_8_listener($event) { return ctx.onSelectReport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-card-actions", 6)(12, "submit-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function IsoCodeComponent_Template_submit_btn_onClick_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, IsoCodeComponent_reset_form_btn_13_Template, 1, 0, "reset-form-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.reportId)("submitted", ctx.submitted)("isoChanged", ctx.isoChanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.iso)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formCtrls.reportId.value || ctx.formCtrls.iso.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_4__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _shared_components_dropdowns_reports_dropdown_reports_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.ReportsDrpdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc28tY29kZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 59132:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/general-setup/components/personal-notification/add-personal-notification/add-personal-notification.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPersonalNotificationComponent": () => (/* binding */ AddPersonalNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/personal-notification.service */ 90091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 57229);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _notification_details_notification_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notification-details/notification-details.component */ 57346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function AddPersonalNotificationComponent_app_add_new_btn_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-add-new-btn", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("url", "/attendance-setup/", ctx_r0.moduleId, "/personal_notification/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("params", ctx_r0.pageParams);
} }
class AddPersonalNotificationComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(personalNotificationService) {
        super();
        this.personalNotificationService = personalNotificationService;
        this.PersonalId = 0;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.PersonalId = Number(params.get("PersonalId")) ?? 0;
            if (this.checkNoBusinessOrCompany() && this.PersonalId > 0) {
                this.getPersonById();
            }
        });
        this.form = this.fb.group({
            Personid: [null],
            id: [0, { nonNallable: true }],
            Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            PassWord: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            Is_Active: [false],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.PersonalId > 0)
            this.getPersonById();
    }
    submit() {
        this.submitted = true;
        // if (this.form.valid) {
        // 	const model: IPersonalNotificationRequest = {};
        // 	// model.User.Id == 0 ? this.create(model) : this.update(model);
        // }
    }
    create(model) {
        this.showLoading();
        this.personalNotificationService
            .createPersonalNotification(model, this.businessCompanyParams)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
        });
    }
    update(model) {
        this.showLoading();
        this.personalNotificationService
            .updatePersonalNotificationy(model, this.businessCompanyParams)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)
                this.updateSuccessfullyMsg(res.message.messageTypeName);
            else
                this.errorList(res.message.messages);
        });
    }
    getPersonById() { }
}
AddPersonalNotificationComponent.ɵfac = function AddPersonalNotificationComponent_Factory(t) { return new (t || AddPersonalNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__.PersonalNotificationService)); };
AddPersonalNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AddPersonalNotificationComponent, selectors: [["app-add-personal-notification"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 26, consts: [["title", "personal_Notification"], ["label", "addPersonal_Notification", 3, "url", "params", 4, "ngIf"], [3, "url", "params"], [3, "dir"], [3, "label"], ["addTitle", "addPersonal_notification", "editTitle", "editPersonal_notification", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-12"], ["label", "arName", 3, "submitted", "control"], ["label", "enName", 3, "submitted", "control"], [3, "submitted", "control"], ["align", "end"], [3, "id", "onClick"], [3, "PersonalId"], ["label", "addPersonal_Notification", 3, "url", "params"]], template: function AddPersonalNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-card")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AddPersonalNotificationComponent_app_add_new_btn_4_Template, 1, 2, "app-add-new-btn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-back-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-tab-group", 3)(7, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "page-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-card-content", 6)(13, "form", 7)(14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 8)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "app-prime-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "app-prime-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-card-actions", 13)(25, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function AddPersonalNotificationComponent_Template_submit_btn_onClick_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "app-notification-details", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.PersonalId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("url", "/general-setup/", ctx.moduleId, "/personal_notification/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dir", ctx.languageService.isArabic ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 20, "personal_notification")));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.formCtrls.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.formCtrls.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.formCtrls.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.formCtrls.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 24, "Notification Details")));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("PersonalId", ctx.PersonalId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_resources_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_6__.AddNewBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Dir, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _notification_details_notification_details_component__WEBPACK_IMPORTED_MODULE_9__.NotificationDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGVyc29uYWwtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 57346:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/general-setup/components/personal-notification/notification-details/notification-details.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailsComponent": () => (/* binding */ NotificationDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/personal-notification.service */ 90091);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 57229);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 88035);













class NotificationDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(personalNotificationService) {
        super();
        this.personalNotificationService = personalNotificationService;
        this.PersonalId = 0;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "NotificationType", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        if (this.checkNoBusinessOrCompany() && this.PersonalId > 0) {
            this.getList(1);
        }
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            notificationType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany() && this.PersonalId > 0)
            this.getList(1);
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.personalNotificationService
            .getNotificationDetails(params)
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res.data);
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
            //	const model: INotificationDetailsRequest = {};
            // model.User.Id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.personalNotificationService
            .createPersonalNotification(model, this.businessCompanyParams)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
NotificationDetailsComponent.ɵfac = function NotificationDetailsComponent_Factory(t) { return new (t || NotificationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__.PersonalNotificationService)); };
NotificationDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: NotificationDetailsComponent, selectors: [["app-notification-details"]], inputs: { PersonalId: "PersonalId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 11, consts: [[1, "row"], [1, "col-12"], ["addTitle", "addNotificationDetails", "editTitle", "editNotificationDetails", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-12", "col-md-6"], [3, "submitted", "control"], ["align", "end"], [3, "id", "onClick"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "onChangePage"]], template: function NotificationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "form", 4)(7, "div", 0)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-prime-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 0)(11, "div", 1)(12, "mat-card-actions", 7)(13, "submit-btn", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function NotificationDetailsComponent_Template_submit_btn_onClick_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "app-material-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function NotificationDetailsComponent_Template_app_material_table_onChangePage_14_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("submitted", ctx.submitted)("control", ctx.formCtrls.notificationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_5__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99939:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/general-setup/components/personal-notification/personal-notification-index/personal-notification-index.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalNotificationComponent": () => (/* binding */ PersonalNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/general-setup/services/personal-notification.service */ 90091);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class PersonalNotificationComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(personalNotificationService) {
        super();
        this.personalNotificationService = personalNotificationService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "English Name", "Group", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.personalNotificationService
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
                this.errorList(res.message.messages);
        });
    }
    onDelete(personalNotification) {
        let msg = this.msgTranslate(personalNotification.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(personalNotification);
        });
    }
    delete(personalNotification) {
        let params = {
            ...this.businessCompanyParams,
            id: personalNotification.id,
        };
        this.showLoading();
        this.personalNotificationService
            .Delete(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
PersonalNotificationComponent.ɵfac = function PersonalNotificationComponent_Factory(t) { return new (t || PersonalNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_general_setup_services_personal_notification_service__WEBPACK_IMPORTED_MODULE_2__.PersonalNotificationService)); };
PersonalNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PersonalNotificationComponent, selectors: [["app-personal-notification"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 8, consts: [[1, "row"], [1, "col-12"], ["title", "personal_Notification", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "dataSource", "onChangePage", "deleteRow"]], template: function PersonalNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function PersonalNotificationComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PersonalNotificationComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.personalNotificationService)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1ub3RpZmljYXRpb24taW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 10707:
/*!***********************************************************************************!*\
  !*** ./src/app/general-setup/components/users/user-index/user-index.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserIndexComponent": () => (/* binding */ UserIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_general_setup_mapper_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/general-setup/mapper/users */ 74268);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_general_setup_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/general-setup/services/users/users.service */ 7053);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);











class UserIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(userService) {
        super();
        this.userService = userService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.userService.getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_general_setup_mapper_users__WEBPACK_IMPORTED_MODULE_0__.userToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(user) {
        let msg = this.msgTranslate(user.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(user);
        });
    }
    delete(user) {
        this.showLoading();
        this.userService.Delete(user.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    ngOnDestroy() {
        // Unsubscribe from all observables to prevent memory leaks
        // this.destroy$.next();
        // this.destroy$.complete();
    }
}
UserIndexComponent.ɵfac = function UserIndexComponent_Factory(t) { return new (t || UserIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_general_setup_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService)); };
UserIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserIndexComponent, selectors: [["app-user-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 8, consts: [[1, "row"], [1, "col-12"], ["title", "users", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "actions", "dataSource", "exportService", "onChangePage", "deleteRow"]], template: function UserIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function UserIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function UserIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource)("exportService", ctx.userService);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 82039:
/*!***************************************************************!*\
  !*** ./src/app/general-setup/general-setup-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSetupRoutingModule": () => (/* binding */ GeneralSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_activation_setup_activation_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/activation-setup/activation-setup.component */ 32521);
/* harmony import */ var _components_attachment_types_attachment_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attachment-types/attachment-types.component */ 65904);
/* harmony import */ var _components_company_code_company_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/company-code/company-code.component */ 33609);
/* harmony import */ var _components_groups_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/groups/add-group/add-group.component */ 49243);
/* harmony import */ var _components_groups_groups_index_groups_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/groups/groups-index/groups-index.component */ 36342);
/* harmony import */ var _components_iso_code_iso_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/iso-code/iso-code.component */ 37572);
/* harmony import */ var _components_personal_notification_add_personal_notification_add_personal_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/personal-notification/add-personal-notification/add-personal-notification.component */ 59132);
/* harmony import */ var _components_personal_notification_personal_notification_index_personal_notification_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/personal-notification/personal-notification-index/personal-notification-index.component */ 99939);
/* harmony import */ var _components_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/add-user/add-user.component */ 64655);
/* harmony import */ var _components_users_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/user-index/user-index.component */ 10707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    {
        path: "activation-setup",
        component: _components_activation_setup_activation_setup_component__WEBPACK_IMPORTED_MODULE_2__.ActivationSetupComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.activation_setup },
    },
    {
        path: "attachment-types",
        component: _components_attachment_types_attachment_types_component__WEBPACK_IMPORTED_MODULE_3__.AttachmentTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.attachment_types },
    },
    {
        path: "users",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_users_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_11__.UserIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.users_index },
            },
            {
                path: "add",
                component: _components_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__.AddUserComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_user },
            },
            {
                path: "edit/:userId",
                component: _components_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__.AddUserComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_user },
            },
        ],
    },
    {
        path: "personal-notification",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_personal_notification_personal_notification_index_personal_notification_index_component__WEBPACK_IMPORTED_MODULE_9__.PersonalNotificationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.personal_notification_index },
            },
            {
                path: "add",
                component: _components_personal_notification_add_personal_notification_add_personal_notification_component__WEBPACK_IMPORTED_MODULE_8__.AddPersonalNotificationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_personal_notification },
            },
            {
                path: "edit/:PersonalId",
                component: _components_personal_notification_add_personal_notification_add_personal_notification_component__WEBPACK_IMPORTED_MODULE_8__.AddPersonalNotificationComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_personal_notification },
            },
        ],
    },
    {
        path: "iso-code",
        component: _components_iso_code_iso_code_component__WEBPACK_IMPORTED_MODULE_7__.IsoCodeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.iso_code },
    },
    {
        path: "company-code",
        component: _components_company_code_company_code_component__WEBPACK_IMPORTED_MODULE_4__.CompanyCodeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.company_code },
    },
    {
        path: "groups",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_groups_groups_index_groups_index_component__WEBPACK_IMPORTED_MODULE_6__.GroupsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.groups_index },
            },
            {
                path: "add",
                component: _components_groups_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_5__.AddGroupComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_group },
            },
            {
                path: "edit/:groupId",
                component: _components_groups_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_5__.AddGroupComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.add_group },
            },
        ],
    },
];
class GeneralSetupRoutingModule {
}
GeneralSetupRoutingModule.ɵfac = function GeneralSetupRoutingModule_Factory(t) { return new (t || GeneralSetupRoutingModule)(); };
GeneralSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: GeneralSetupRoutingModule });
GeneralSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](GeneralSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 31363:
/*!*******************************************************!*\
  !*** ./src/app/general-setup/general-setup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSetupModule": () => (/* binding */ GeneralSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _general_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-setup-routing.module */ 82039);
/* harmony import */ var _components_activation_setup_activation_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/activation-setup/activation-setup.component */ 32521);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_attachment_types_attachment_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attachment-types/attachment-types.component */ 65904);
/* harmony import */ var _components_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/add-user/add-user.component */ 64655);
/* harmony import */ var _components_users_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/user-index/user-index.component */ 10707);
/* harmony import */ var _components_users_user_companies_user_companies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/user-companies/user-companies.component */ 21661);
/* harmony import */ var _components_users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/user-group/user-group.component */ 47049);
/* harmony import */ var _components_users_user_policy_groups_user_policy_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/user-policy-groups/user-policy-groups.component */ 45962);
/* harmony import */ var _components_iso_code_iso_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/iso-code/iso-code.component */ 37572);
/* harmony import */ var _components_company_code_company_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/company-code/company-code.component */ 33609);
/* harmony import */ var _components_groups_groups_index_groups_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/groups/groups-index/groups-index.component */ 36342);
/* harmony import */ var _components_groups_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/groups/add-group/add-group.component */ 49243);
/* harmony import */ var _components_personal_notification_add_personal_notification_add_personal_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/personal-notification/add-personal-notification/add-personal-notification.component */ 59132);
/* harmony import */ var _components_personal_notification_notification_details_notification_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/personal-notification/notification-details/notification-details.component */ 57346);
/* harmony import */ var _components_personal_notification_personal_notification_index_personal_notification_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/personal-notification/personal-notification-index/personal-notification-index.component */ 99939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);


















class GeneralSetupModule {
}
GeneralSetupModule.ɵfac = function GeneralSetupModule_Factory(t) { return new (t || GeneralSetupModule)(); };
GeneralSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: GeneralSetupModule });
GeneralSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _general_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](GeneralSetupModule, { declarations: [_components_activation_setup_activation_setup_component__WEBPACK_IMPORTED_MODULE_1__.ActivationSetupComponent,
        _components_attachment_types_attachment_types_component__WEBPACK_IMPORTED_MODULE_3__.AttachmentTypesComponent,
        _components_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent,
        _components_users_user_companies_user_companies_component__WEBPACK_IMPORTED_MODULE_6__.UserCompaniesComponent,
        _components_users_user_group_user_group_component__WEBPACK_IMPORTED_MODULE_7__.UserGroupComponent,
        _components_users_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_5__.UserIndexComponent,
        _components_users_user_policy_groups_user_policy_groups_component__WEBPACK_IMPORTED_MODULE_8__.UserPolicyGroupsComponent,
        _components_iso_code_iso_code_component__WEBPACK_IMPORTED_MODULE_9__.IsoCodeComponent,
        _components_personal_notification_add_personal_notification_add_personal_notification_component__WEBPACK_IMPORTED_MODULE_13__.AddPersonalNotificationComponent,
        _components_personal_notification_notification_details_notification_details_component__WEBPACK_IMPORTED_MODULE_14__.NotificationDetailsComponent,
        _components_personal_notification_personal_notification_index_personal_notification_index_component__WEBPACK_IMPORTED_MODULE_15__.PersonalNotificationComponent,
        _components_company_code_company_code_component__WEBPACK_IMPORTED_MODULE_10__.CompanyCodeComponent,
        _components_groups_groups_index_groups_index_component__WEBPACK_IMPORTED_MODULE_11__.GroupsIndexComponent,
        _components_groups_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_12__.AddGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _general_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 65866:
/*!************************************************!*\
  !*** ./src/app/general-setup/mapper/groups.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupToMap": () => (/* binding */ groupToMap)
/* harmony export */ });
function groupToMap(users) {
    return users.map((group) => {
        return {
            ...group,
            ar_Name: group.arbName,
            en_Name: group.engName,
        };
    });
}


/***/ }),

/***/ 27803:
/*!********************************************************************!*\
  !*** ./src/app/general-setup/services/activation-setup.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivationSetupService": () => (/* binding */ ActivationSetupService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ActivationSetupService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("GeneralSetup/ActivationSetup/Create", body);
    }
    update(data) {
        return this.post("GeneralSetup/ActivationSetup/Edit", data);
    }
    getList(params) {
        return this.get("GeneralSetup/ActivationSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("GeneralSetup/ActivationSetup/GetAll");
    }
    Delete(id) {
        return this.delete("GeneralSetup/ActivationSetup/Delete", {
            params: {
                id: id,
            },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
ActivationSetupService.ɵfac = function ActivationSetupService_Factory(t) { return new (t || ActivationSetupService)(); };
ActivationSetupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActivationSetupService, factory: ActivationSetupService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 71538:
/*!********************************************************************!*\
  !*** ./src/app/general-setup/services/attachment-types.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypesService": () => (/* binding */ AttachmentTypesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AttachmentTypesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("GeneralSetup/AttachmentType/Create", body);
    }
    update(data) {
        return this.post("GeneralSetup/AttachmentType/Edit", data);
    }
    getList(params) {
        return this.get("GeneralSetup/AttachmentType/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("GeneralSetup/AttachmentType/GetAll");
    }
    Delete(id) {
        return this.delete("GeneralSetup/AttachmentType/Delete", {
            params: {
                id: id,
            },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
AttachmentTypesService.ɵfac = function AttachmentTypesService_Factory(t) { return new (t || AttachmentTypesService)(); };
AttachmentTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttachmentTypesService, factory: AttachmentTypesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 32961:
/*!****************************************************************!*\
  !*** ./src/app/general-setup/services/company-code.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCodeService": () => (/* binding */ CompanyCodeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CompanyCodeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("GeneralSetup/CompanyCode/Create", data);
    }
    update(data) {
        return this.post("GeneralSetup/CompanyCode/Edit", data);
    }
    getCodeStatus(compId) {
        return this.get("GeneralSetup/CompanyCode/GetCodeStatus", {
            params: {
                compId: `${compId}`,
            },
        });
    }
}
CompanyCodeService.ɵfac = function CompanyCodeService_Factory(t) { return new (t || CompanyCodeService)(); };
CompanyCodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyCodeService, factory: CompanyCodeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 90091:
/*!*************************************************************************!*\
  !*** ./src/app/general-setup/services/personal-notification.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalNotificationService": () => (/* binding */ PersonalNotificationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PersonalNotificationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getList(params) {
        return this.get("GeneralSetup/PersonalNotification/GetList", {
            params: params,
        });
    }
    Delete(params) {
        return this.delete("", {
            params: params,
        });
    }
    //////////////////
    createPersonalNotification(data, params) {
        return this.post("", data, {
            params: params,
        });
    }
    updatePersonalNotificationy(data, params) {
        return this.post("", data, {
            params: params,
        });
    }
    // ///
    getNotificationDetails(params) {
        return this.get("", {
            params: params,
        });
    }
    createNotificationDetails(data, params) {
        return this.post("", data, {
            params: params,
        });
    }
    getAll() {
        return this.get("GeneralSetup/PersonalNotification/GetAll");
    }
    exportExcel() {
        this.getAll();
    }
}
PersonalNotificationService.ɵfac = function PersonalNotificationService_Factory(t) { return new (t || PersonalNotificationService)(); };
PersonalNotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PersonalNotificationService, factory: PersonalNotificationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 68095:
/*!*********************************************!*\
  !*** ./src/app/shared/enums/gender.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EGender": () => (/* binding */ EGender)
/* harmony export */ });
var EGender;
(function (EGender) {
    EGender[EGender["male"] = 1] = "male";
    EGender[EGender["female"] = 2] = "female";
    EGender[EGender["allofThem"] = 3] = "allofThem";
})(EGender || (EGender = {}));
(function (EGender) {
    function getValue(gender) {
        switch (gender) {
            case EGender.male:
                return "male";
            case EGender.female:
                return "female";
            case EGender.allofThem:
                return "allofThem";
            default:
                return "";
        }
    }
    EGender.getValue = getValue;
})(EGender || (EGender = {}));


/***/ })

}]);
//# sourceMappingURL=src_app_general-setup_general-setup_module_ts.js.map