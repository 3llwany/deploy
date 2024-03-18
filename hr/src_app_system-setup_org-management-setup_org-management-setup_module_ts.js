"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_org-management-setup_org-management-setup_module_ts"],{

/***/ 83607:
/*!*************************************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/competence-level/competence-level.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenceLevelComponent": () => (/* binding */ CompetenceLevelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_org_management_setup_services_competence_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/competence-level.service */ 18859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/textarea/textarea.component */ 71510);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);


















function CompetenceLevelComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CompetenceLevelComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class CompetenceLevelComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(competenceLevelService) {
        super();
        this.competenceLevelService = competenceLevelService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = ["en_Desc", "ar_Desc"];
        this.isLoaded = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            Ar_Desc: [null],
            En_Desc: [null],
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
        this.competenceLevelService
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
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
                Ar_Desc: this.form.value.Ar_Desc,
                En_Desc: this.form.value.En_Desc,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.competenceLevelService.create(model).subscribe((res) => {
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
        this.competenceLevelService.update(model).subscribe((res) => {
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
    competenceLevelToEdit(competenceLevel) {
        this.form.patchValue(competenceLevel);
        this.formCtrls.ar_name.setValue(competenceLevel.ar_Name);
        this.formCtrls.en_name.setValue(competenceLevel.en_Name);
        this.formCtrls.Ar_Desc.setValue(competenceLevel.ar_Desc);
        this.formCtrls.En_Desc.setValue(competenceLevel.en_Desc);
        // console.log(this.form.value);
    }
    onDelete(competenceLevel) {
        let msg = this.msgTranslate(competenceLevel.ar_Name, competenceLevel.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(competenceLevel);
        });
    }
    delete(competenceLevel) {
        this.showLoading();
        this.competenceLevelService.Delete(competenceLevel.id).subscribe((res) => {
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
                if (competenceLevel.id == this.formCtrls.id.value)
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
CompetenceLevelComponent.ɵfac = function CompetenceLevelComponent_Factory(t) { return new (t || CompetenceLevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_competence_level_service__WEBPACK_IMPORTED_MODULE_3__.CompetenceLevelService)); };
CompetenceLevelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CompetenceLevelComponent, selectors: [["app-competence-level"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 19, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "competenceLevel", "editTitle", "editCompetenceLevel", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Desc", 3, "control", "submitted"], ["label", "ar_Desc", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function CompetenceLevelComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "app-textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-card-actions", 11)(20, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function CompetenceLevelComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CompetenceLevelComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChangePage", function CompetenceLevelComponent_Template_app_material_table_onChangePage_23_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function CompetenceLevelComponent_Template_app_material_table_editRow_23_listener($event) { return ctx.competenceLevelToEdit($event); })("deleteRow", function CompetenceLevelComponent_Template_app_material_table_deleteRow_23_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.ar_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.En_Desc)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.Ar_Desc)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.competenceLevelService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_dynamic_form_field_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_5__.TextareaComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRlbmNlLWxldmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 21393:
/*!***********************************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/competence-type/competence-type.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenceTypeComponent": () => (/* binding */ CompetenceTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_org_management_setup_services_competence_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/competence-type.service */ 69808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function CompetenceTypeComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CompetenceTypeComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class CompetenceTypeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(competenceTypeService) {
        super();
        this.competenceTypeService = competenceTypeService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_NAme", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.competenceTypeService
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
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.competenceTypeService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.firstPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.competenceTypeService.update(model).subscribe((res) => {
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
    competenceTypeToEdit(competenceType) {
        this.form.patchValue(competenceType);
        this.formCtrls.ar_name.setValue(competenceType.ar_NAme);
        this.formCtrls.en_name.setValue(competenceType.en_Name);
        // console.log(this.form.value);
    }
    onDelete(competenceType) {
        let msg = this.msgTranslate(competenceType.ar_NAme, competenceType.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(competenceType);
        });
    }
    delete(competenceType) {
        this.showLoading();
        this.competenceTypeService.Delete(competenceType.id).subscribe((res) => {
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
                if (competenceType.id == this.formCtrls.id.value)
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
CompetenceTypeComponent.ɵfac = function CompetenceTypeComponent_Factory(t) { return new (t || CompetenceTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_competence_type_service__WEBPACK_IMPORTED_MODULE_3__.CompetenceTypeService)); };
CompetenceTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CompetenceTypeComponent, selectors: [["app-competence-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "competenceType", "editTitle", "editCompetenceType", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function CompetenceTypeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function CompetenceTypeComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CompetenceTypeComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function CompetenceTypeComponent_Template_app_material_table_onChangePage_19_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function CompetenceTypeComponent_Template_app_material_table_editRow_19_listener($event) { return ctx.competenceTypeToEdit($event); })("deleteRow", function CompetenceTypeComponent_Template_app_material_table_deleteRow_19_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.competenceTypeService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRlbmNlLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 25421:
/*!*************************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/disclaimer/disclaimer.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisclaimerComponent": () => (/* binding */ DisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_org_management_setup_services_disclaimer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/disclaimer.service */ 88593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function DisclaimerComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DisclaimerComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class DisclaimerComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(disclaimerService) {
        super();
        this.disclaimerService = disclaimerService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.disclaimerService.getList(params)
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
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.disclaimerService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.disclaimerService.update(model).subscribe((res) => {
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
    disclaimerToEdit(disclaimer) {
        this.form.patchValue(disclaimer);
        this.formCtrls.ar_name.setValue(disclaimer.ar_Name);
        this.formCtrls.en_name.setValue(disclaimer.en_Name);
        // console.log(this.form.value);
    }
    onDelete(disclaimer) {
        let msg = this.msgTranslate(disclaimer.ar_Name, disclaimer.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(disclaimer);
        });
    }
    delete(disclaimer) {
        this.showLoading();
        this.disclaimerService.Delete(disclaimer.id).subscribe((res) => {
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
                if (disclaimer.id == this.formCtrls.id.value)
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
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_disclaimer_service__WEBPACK_IMPORTED_MODULE_3__.DisclaimerService)); };
DisclaimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["app-disclaimer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "disclaimer", "editTitle", "editDisclaimer", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function DisclaimerComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, DisclaimerComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function DisclaimerComponent_Template_app_material_table_onChangePage_19_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function DisclaimerComponent_Template_app_material_table_editRow_19_listener($event) { return ctx.disclaimerToEdit($event); })("deleteRow", function DisclaimerComponent_Template_app_material_table_deleteRow_19_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.disclaimerService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjbGFpbWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65618:
/*!*****************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/grades/grades.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradesComponent": () => (/* binding */ GradesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_org_management_setup_services_grades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/org-management-setup/services/grades.service */ 77074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);


















function GradesComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function GradesComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class GradesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(gradesService) {
        super();
        this.gradesService = gradesService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "ar_Name",
            "miN_SALARY",
            "middel_Salary",
            "maX_SALARY",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            miN_SALARY: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gt(0), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.digits]],
            middel_Salary: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gt(0), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.digits]],
            maX_SALARY: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gt(0), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.digits]],
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
        this.gradesService.getList(params)
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
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
                Min_Salary: this.form.value.miN_SALARY,
                Middel_Salary: this.form.value.middel_Salary,
                Max_Salary: this.form.value.maX_SALARY,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.gradesService.create(model).subscribe((res) => {
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
        this.gradesService.update(model).subscribe((res) => {
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
    gradeToEdit(grade) {
        this.form.patchValue(grade);
        this.formCtrls.ar_name.setValue(grade.ar_Name);
        this.formCtrls.en_name.setValue(grade.en_Name);
    }
    onDelete(grade) {
        let msg = this.msgTranslate(grade.ar_Name, grade.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(grade);
        });
    }
    delete(grade) {
        this.showLoading();
        this.gradesService.Delete(grade.id).subscribe((res) => {
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
                if (grade.id == this.formCtrls.id.value)
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
    updateSalariesValidation(value) {
        this.checkRequiredValidator("miN_SALARY", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gt(0), this.formCtrls.maX_SALARY.value || this.formCtrls.middel_Salary.value ? true : false);
        this.checkRequiredValidator("maX_SALARY", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gt(this.formCtrls.miN_SALARY.value ?? 0), this.formCtrls.middel_Salary.value ? true : false);
        this.updateMiddleSalaryRange();
    }
    checkRequiredValidator(fieldName, validatorsArray, isRequired) {
        let validators = [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.digits, validatorsArray];
        if (isRequired)
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        this.formCtrls[fieldName].setValidators(validators);
        this.formCtrls[fieldName].updateValueAndValidity();
    }
    updateMiddleSalaryRange() {
        if (this.formCtrls.miN_SALARY.value && this.formCtrls.maX_SALARY.value)
            this.checkRequiredValidator("middel_Salary", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.range([this.form.value.miN_SALARY, this.form.value.maX_SALARY]), false);
        else if (this.formCtrls.maX_SALARY.value)
            this.checkRequiredValidator("middel_Salary", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.lte(this.form.value.maX_SALARY), false);
        else
            this.checkRequiredValidator("middel_Salary", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.gte(this.form.value.miN_SALARY ?? 1), false);
    }
}
GradesComponent.ɵfac = function GradesComponent_Factory(t) { return new (t || GradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_org_management_setup_services_grades_service__WEBPACK_IMPORTED_MODULE_3__.GradesService)); };
GradesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: GradesComponent, selectors: [["app-grades"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 21, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "grades", "editTitle", "editGrade", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], [1, "col-md-4", "col-12"], ["label", "miN_SALARY", "type", "number", 3, "control", "submitted", "keyUp"], ["label", "maX_SALARY", "type", "number", 3, "control", "submitted", "keyUp"], ["label", "middel_Salary", "type", "number", 3, "control", "submitted", "keyUp"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function GradesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "div", 0)(8, "div", 1)(9, "form", 5)(10, "div", 0)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 9)(16, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyUp", function GradesComponent_Template_app_input_keyUp_16_listener($event) { return ctx.updateSalariesValidation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 9)(18, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyUp", function GradesComponent_Template_app_input_keyUp_18_listener($event) { return ctx.updateSalariesValidation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 9)(20, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyUp", function GradesComponent_Template_app_input_keyUp_20_listener($event) { return ctx.updateSalariesValidation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-card-actions", 13)(22, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function GradesComponent_Template_submit_btn_onClick_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, GradesComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function GradesComponent_Template_app_material_table_onChangePage_25_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function GradesComponent_Template_app_material_table_editRow_25_listener($event) { return ctx.gradeToEdit($event); })("deleteRow", function GradesComponent_Template_app_material_table_deleteRow_25_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.miN_SALARY)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.maX_SALARY)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.middel_Salary)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.gradesService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 70697:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/organization-chart/add-edit-organization-chart/add-edit-organization-chart.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditOrganizationChartComponent": () => (/* binding */ AddEditOrganizationChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _shared_components_resources_dynamic_form_field_button_file_input_button_file_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/button-file-input/button-file-input.component */ 72189);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











class AddEditOrganizationChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.submitted = false;
        this.employee = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        console.log("data", this.data.data);
        this.form = this.fb.group({
            label: [""],
            type: [""],
            data: this.fb.group({
                id: [""],
                name: [""],
                img: [null],
            }),
            children: [null],
        });
        if (this.data != null) {
            this.form.patchValue(this.data);
        }
    }
    get formCtrls() {
        return this.form.controls;
    }
    get nestedformCtrls() {
        return this.form.get("data").controls;
    }
    submit() {
        let model = {};
        model.label = this.formCtrls.label.value;
        model.type = this.formCtrls.type.value;
        model.styleClass = "p-person";
        (model.expanded = true),
            (model.data = {
                id: this.nestedformCtrls.id.value,
                name: this.nestedformCtrls.name.value,
                img: this.nestedformCtrls.img.value,
            });
        model.children = this.formCtrls.children.value;
        this.dialogRef.close(model);
        this.employee.emit(model);
        console.log("data model", model);
    }
    openDeleteDialog() {
        let msg = "item";
        this.deleteDialog(msg).subscribe((confirm) => {
            // if (confirm) this.deleteNode(data);
        });
    }
}
AddEditOrganizationChartComponent.ɵfac = function AddEditOrganizationChartComponent_Factory(t) { return new (t || AddEditOrganizationChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
AddEditOrganizationChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddEditOrganizationChartComponent, selectors: [["app-add-edit-organization-chart"]], outputs: { employee: "employee" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 13, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "label", 3, "control", "submitted"], ["label", "type", 3, "control", "submitted"], ["label", "name", 3, "control", "submitted"], ["accept", "image/*", "htmlId", "cover-photo", 3, "control", "submitted", "showIcon"], [1, "ft-users", 3, "click"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", 3, "click"]], template: function AddEditOrganizationChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " add edit employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 0)(7, "div", 1)(8, "form", 4)(9, "div", 0)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 0)(15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-button-file-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditOrganizationChartComponent_Template_i_click_19_listener() { return ctx.openDeleteDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-card-actions", 11)(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditOrganizationChartComponent_Template_button_click_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.formCtrls.label)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.formCtrls.type)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.nestedformCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("control", ctx.nestedformCtrls.img)("submitted", ctx.submitted)("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 11, "General.save"), " ");
    } }, dependencies: [_shared_components_resources_dynamic_form_field_button_file_input_button_file_input_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFileInputComponent, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1vcmdhbml6YXRpb24tY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 83555:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/components/organization-chart/organization-chart-component/organization-chart.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationChartComponent": () => (/* binding */ OrganizationChartComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ 9266);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var _organization_chart_add_edit_organization_chart_add_edit_organization_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organization-chart/add-edit-organization-chart/add-edit-organization-chart.component */ 70697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/organizationchart */ 95918);













const _c0 = ["chart"];
const _c1 = function (a0, a1) { return { "dashed-line": a0, "solid-line": a1 }; };
function OrganizationChartComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10)(6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const node_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.openAddEditDialog(node_r2, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const node_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.openAddEditDialog(node_r2, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_a_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const node_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.openDeleteDialog(node_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 17)(21, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.handleLeftClick()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_i_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const node_r2 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.openAddEditDialog(node_r2, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_ng_template_11_Template_div_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const node_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.expandNode(node_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", node_r2.data.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c1, node_r2.data.isDashed, !node_r2.data.isDashed));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", node_r2.label, " ", node_r2.data.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", node_r2.data.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](node_r2.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", node_r2.children.length, " ");
} }
class OrganizationChartComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        setTimeout(() => {
            this.chartData();
        }, 1000);
    }
    ngOnChanges() {
        //this.chartData();
    }
    onNodeSelect(event) {
        this.selectedNode = event.node;
        console.log("event", event);
        //this.showSuccess("welcom", event.node.data.id);
    }
    openAddEditDialog(data, isAdd) {
        return this.dialog
            .open(_organization_chart_add_edit_organization_chart_add_edit_organization_chart_component__WEBPACK_IMPORTED_MODULE_3__.AddEditOrganizationChartComponent, {
            data: {
                label: isAdd == false ? data?.label : "",
                type: isAdd == false ? data?.type : "",
                data: {
                    id: isAdd == false ? data?.data.id : "",
                    name: isAdd == false ? data?.data.name : "",
                    img: isAdd == false ? data?.data.img : "",
                },
                children: isAdd == false ? data?.children : "",
            },
            minWidth: "60vw",
            disableClose: true,
        })
            .afterClosed()
            .subscribe((item) => {
            if (isAdd == false) {
                // let index =this.selectedNode.children.findIndex(
                //   (node: TreeNode) => node.data.id == item.data.id
                // );
                let index = this.data[0].children.findIndex((node) => node.data.id == item.data.id);
                data = item;
                this.data[0].children[index] = item;
                //console.log("selectedNode before ",  this.selectedNode);
                //this.selectedNode = item;
                //console.log("selectedNode after ",  this.selectedNode);
                console.log("data ", data);
            }
            else {
                // this.data[0].children.push(item);
                data.children.push(item);
                // this.selectedNode?.children.push(item);
                console.log("item ", item);
                console.log("selectedNode", this.selectedNode);
            }
            //this.chartData();
            // this.cdr.detectChanges();
        });
    }
    openDeleteDialog(data) {
        let msg = "item";
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.deleteNode(data);
        });
    }
    exportAsImage() {
        const chartElement = this.chart.el.nativeElement;
        const element = document.getElementById("org");
        const elementWidthWithScroll = element.scrollWidth;
        const elementWidth = element.offsetWidth;
        const fullWidth = elementWidth + elementWidthWithScroll;
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(chartElement, { width: fullWidth, height: element.offsetHeight }).then((canvas) => {
            const imageData = canvas.toDataURL("image/jpeg");
            const link = document.createElement("a");
            link.href = imageData;
            link.download = "organization_chart.jpeg";
            link.click();
        });
    }
    exportAsPDF() {
        const chartElement = this.chart.el.nativeElement;
        const element = document.getElementById("org");
        const elementWidthWithScroll = element.scrollWidth;
        const elementWidth = element.offsetWidth;
        const fullWidth = elementWidth + elementWidthWithScroll;
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(chartElement, { width: fullWidth, height: element.offsetHeight }).then((canvas) => {
            const imageData = canvas.toDataURL("image/png");
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("l", "mm", [1200, 350]);
            const width = doc.internal.pageSize.getWidth();
            const height = doc.internal.pageSize.getHeight();
            doc.addImage(imageData, "PNG", 10, 10, width - 20, height - 20);
            doc.save("organization_chart.pdf");
        });
    }
    deleteNode(item) {
        //item=null
        // console.log(this.data[0].children.length);
        let index = this.data[0].children.findIndex((node) => node.data.id == item.data.id);
        this.data[0].children.splice(index, 1);
        // console.log(this.data[0].children.length);
        // this.data = this.data.slice();
        // this.cdr.detectChanges();
        //  this.selectedNode =null;
    }
    chartData() {
        // this.data = [
        //   {
        //     label: "CFO",
        //     type: "person",
        //     styleClass: "department-coo",
        //     expanded: true,
        //     data: {
        //       id: 1,
        //       name: "SaulGoodman1",
        //       img: "assets/img/banner/banner-2.jpg",
        //       isDashed: true,
        //     },
        //     children: [
        //       {
        //         label: "Tax",
        //         styleClass: "p-person",
        //         type: "person",
        //         expanded: true,
        //         data: {
        //           id: 2,
        //           name: "SaulGoodman2",
        //           img: "assets/img/banner/banner-12.jpg",
        //           isDashed: false,
        //         },
        //         children: [],
        //       },
        //       {
        //         label: "Legal",
        //         styleClass: "p-person",
        //         type: "person",
        //         expanded: true,
        //         data: {
        //           id: 3,
        //           name: "SaulGoodman3",
        //           img: "assets/img/banner/banner-13.jpg",
        //           isDashed: true,
        //         },
        //         children: [],
        //       },
        //     ],
        //   },
        // ];
        this.expandToLevelOne();
        setTimeout(() => {
            this.applyDashedLineClass(this.data);
        }, 1000);
    }
    // @ViewChild("container") container: ElementRef;
    applyDashedLineClass(nodes) {
        // // all children same
        // let trElement;
        // nodes.forEach((node) => {
        //   trElement = document.getElementById(node.data.name)?.parentNode.parentNode
        //     .parentNode.parentNode;
        //   let firstTrLines = trElement.nextSibling;
        //   let seconedTrLines = trElement.nextSibling.nextSibling;
        //   if (node.data.isDashed) {
        //     firstTrLines.classList.add("dashed-line");
        //     seconedTrLines.classList.add("dashed-line");
        //     console.log(trElement);
        //   }
        //   // console.log(trElement);
        //   this.applyDashedLineClass(node.children);
        // });
        // all children not same
        let tdElement;
        let trElement;
        nodes.forEach((node, index) => {
            tdElement = document.getElementById(node.data.name)?.parentNode.parentNode.parentNode;
            trElement = tdElement.parentNode.parentNode.parentNode.parentNode.parentNode;
            // console.log(tdElement, index, trElement);
            let firstTrLines = trElement?.previousSibling?.previousSibling;
            let seconedTrLines = trElement?.previousSibling;
            // console.log(firstTrLines, seconedTrLines, tdElement);
            if (node.data.isDashed && firstTrLines && seconedTrLines) {
                let childNodes = seconedTrLines.childNodes;
                let child1 = childNodes[index * 2 + 1];
                let child2 = childNodes[index * 2 + 2];
                console.log(child1, child2, tdElement);
                child1?.classList?.add("dashed-line");
                child2?.classList?.add("dashed-line");
            }
            this.applyDashedLineClass(node.children);
        });
    }
    handleLeftClick() {
        console.log("left");
    }
    expandNode(node) {
        console.log("footer");
        node.expanded = !node.expanded;
    }
    expandToLevelOne() {
        this.data = [
            {
                label: "CEO",
                type: "person",
                styleClass: "department-coo",
                expanded: true,
                expandedIcon: "pi pi-folder-open",
                collapsedIcon: "pi pi-folder",
                data: {
                    id: 11,
                    name: "WalterWhite1",
                    img: "assets/img/banner/banner-1.jpg",
                    isDashed: true,
                },
                children: [
                    {
                        label: "CFO",
                        type: "person",
                        styleClass: "department-coo",
                        expanded: true,
                        data: {
                            id: 1,
                            name: "SaulGoodman1",
                            img: "assets/img/banner/banner-2.jpg",
                            isDashed: true,
                        },
                        children: [
                            {
                                label: "Tax",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 2,
                                    name: "SaulGoodman2",
                                    img: "assets/img/banner/banner-12.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                            {
                                label: "Legal",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 3,
                                    name: "SaulGoodman3",
                                    img: "assets/img/banner/banner-13.jpg",
                                    isDashed: false,
                                },
                                children: [],
                            },
                            {
                                label: "Legal",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 3,
                                    name: "SaulGoodman4",
                                    img: "assets/img/banner/banner-13.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                            {
                                label: "Legal",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 3,
                                    name: "SaulGoodman5",
                                    img: "assets/img/banner/banner-13.jpg",
                                    isDashed: false,
                                },
                                children: [],
                            },
                            {
                                label: "Legal",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 3,
                                    name: "SaulGoodman6",
                                    img: "assets/img/banner/banner-13.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        label: "COO",
                        type: "person",
                        styleClass: "department-coo",
                        expanded: true,
                        data: {
                            name: "MikeE2",
                            img: "assets/img/banner/banner-3.jpg",
                            id: 4,
                            isDashed: true,
                        },
                        children: [
                            {
                                type: "person",
                                expanded: true,
                                label: "Operations",
                                styleClass: "p-person",
                                data: {
                                    id: 5,
                                    name: "MikeE3",
                                    img: "assets/img/banner/banner-30.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        label: "CTO",
                        type: "person",
                        styleClass: "department-coo",
                        expanded: true,
                        data: {
                            id: 6,
                            name: "JessePinkman1",
                            img: "assets/img/banner/banner-4.jpg",
                            isDashed: true,
                        },
                        children: [
                            {
                                type: "person",
                                label: "Development",
                                styleClass: "department-coo",
                                expanded: true,
                                data: {
                                    id: 7,
                                    name: "MikeE1",
                                    img: "assets/img/banner/banner-19.jpg",
                                    isDashed: true,
                                },
                                children: [
                                    {
                                        label: "Analysis",
                                        styleClass: "p-person",
                                        type: "person",
                                        expanded: true,
                                        data: {
                                            id: 8,
                                            name: "JessePinkman2",
                                            img: "assets/img/banner/banner-4.jpg",
                                            isDashed: true,
                                        },
                                        children: [],
                                    },
                                    {
                                        type: "person",
                                        label: "Front End",
                                        styleClass: "p-person",
                                        expanded: true,
                                        data: {
                                            id: 9,
                                            name: "JessePinkman3",
                                            img: "assets/img/banner/banner-24.jpg",
                                            isDashed: true,
                                        },
                                        children: [],
                                    },
                                    {
                                        type: "person",
                                        expanded: true,
                                        label: "Back End",
                                        styleClass: "p-person",
                                        data: {
                                            id: 10,
                                            name: "JessePinkman4",
                                            img: "assets/img/banner/banner-22.jpg",
                                            isDashed: true,
                                        },
                                        children: [],
                                    },
                                ],
                            },
                            {
                                type: "person",
                                expanded: true,
                                label: "QA",
                                styleClass: "p-person",
                                data: {
                                    id: 11,
                                    name: "JessePinkman5",
                                    img: "assets/img/banner/banner-20.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                            {
                                label: "R&D",
                                styleClass: "p-person",
                                type: "person",
                                expanded: true,
                                data: {
                                    id: 12,
                                    name: "JessePinkman6",
                                    img: "assets/img/banner/banner-7.jpg",
                                    isDashed: true,
                                },
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
OrganizationChartComponent.ɵfac = function OrganizationChartComponent_Factory(t) { return new (t || OrganizationChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
OrganizationChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrganizationChartComponent, selectors: [["app-organization-chart"]], viewQuery: function OrganizationChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 2, consts: [["mat-button", "", 1, "btn", "bg-light-info", 3, "click"], ["mat-button", "", 1, "btn", "bg-light-info", "m-2", 3, "click"], [2, "height", "20px"], ["id", "org"], ["styleClass", "company", "selectionMode", "single", 3, "value", "selection", "selectionChange", "onNodeSelect"], ["chart", ""], ["pTemplate", "person"], [1, "node-header", 3, "id", "ngClass"], ["ngbDropdown", "", 1, "d-inline-block", "float-right"], ["id", "dropdown1", "ngbDropdownToggle", "", 1, "pi", "pi-cog", 2, "font-size", "1.3rem"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown1"], ["ngbDropdownItem", "", 3, "click"], [1, "pi", "pi-plus", "mr-2"], [1, "pi", "pi-pencil", "mr-2"], [1, "pi", "pi-trash", "mr-2"], [1, "node-content"], [1, "node-content", "p-3"], ["alt", "org", 3, "src"], [1, "part", 3, "click"], [1, "ft-users", 3, "click"], [1, "footer", "px-2", 3, "click"]], template: function OrganizationChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_Template_button_click_1_listener() { return ctx.expandToLevelOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Expand top one level\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_Template_button_click_3_listener() { return ctx.exportAsImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " export as image\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrganizationChartComponent_Template_button_click_5_listener() { return ctx.exportAsPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " export as pdf\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "p-organizationChart", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function OrganizationChartComponent_Template_p_organizationChart_selectionChange_9_listener($event) { return ctx.selectedNode = $event; })("onNodeSelect", function OrganizationChartComponent_Template_p_organizationChart_onNodeSelect_9_listener($event) { return ctx.onNodeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OrganizationChartComponent_ng_template_11_Template, 28, 10, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.data)("selection", ctx.selectedNode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_12__.OrganizationChart], styles: [".node-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n}\n\n.node-header[_ngcontent-%COMP%] {\n  color: brown;\n  font: 20px bold;\n}\n\n.node-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: cadetblue;\n  font-weight: 18px;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .p-person {\n  background-color: rgb(221, 195, 195);\n}\n\n[_nghost-%COMP%]     .p-organizationchart .department-coo {\n  background-color: rgb(238, 201, 227);\n}\n\n[_nghost-%COMP%]     .p-organizationchart .part {\n  background-color: rgb(178, 177, 245);\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .part:hover {\n  background-color: rgb(121, 118, 118);\n}\n\n[_nghost-%COMP%]     .p-organizationchart .footer {\n  background-color: aquamarine;\n  text-align: left;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .p-organizationchart-node-content {\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line .p-organizationchart-line-top {\n  border-top-style: dashed;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line .p-organizationchart-line-left {\n  border-right-style: dashed;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line .p-organizationchart-line-down {\n  background: none;\n  border: 0.5px dashed #dee2e6 !important;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line.p-organizationchart-line-top {\n  border-top-style: dashed;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line.p-organizationchart-line-left {\n  border-right-style: dashed;\n}\n\n[_nghost-%COMP%]     .p-organizationchart .dashed-line.p-organizationchart-line-down {\n  background: none;\n  border: 0.5px dashed #dee2e6 !important;\n}\n\n#org[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbi1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUNFO0VBQ0Usb0NBQUE7QUFFSjs7QUFBRTtFQUNFLG9DQUFBO0FBRUo7O0FBSUU7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFGSjs7QUFJRTtFQUNFLG9DQUFBO0FBRko7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBSUU7RUFDRSxVQUFBO0FBRko7O0FBS0k7RUFDRSx3QkFBQTtBQUhOOztBQUtJO0VBQ0UsMEJBQUE7QUFITjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsdUNBQUE7QUFITjs7QUFTRTtFQUNFLHdCQUFBO0FBUEo7O0FBU0U7RUFDRSwwQkFBQTtBQVBKOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtBQVBKOztBQWFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFWRiIsImZpbGUiOiJvcmdhbml6YXRpb24tY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZS1jb250ZW50IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4ubm9kZS1oZWFkZXIge1xyXG4gIGNvbG9yOiBicm93bjtcclxuICBmb250OiAyMHB4IGJvbGQ7XHJcbn1cclxuLm5vZGUtY29udGVudCBkaXYge1xyXG4gIGNvbG9yOiBjYWRldGJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1vcmdhbml6YXRpb25jaGFydCB7XHJcbiAgLnAtcGVyc29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE5NSwgMTk1KTtcclxuICB9XHJcbiAgLmRlcGFydG1lbnQtY29vIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIwMSwgMjI3KTtcclxuICB9XHJcbiAgLy8gLmRlcGFydG1lbnQtY29vLFxyXG4gIC8vIC5wLXBlcnNvbiB7XHJcbiAgLy8gICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIC8vIH1cclxuICAucGFydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCAxNzcsIDI0NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhcnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTE4LCAxMTgpO1xyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAucC1vcmdhbml6YXRpb25jaGFydC1ub2RlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmRhc2hlZC1saW5lIHtcclxuICAgIC5wLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtdG9wIHtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xyXG4gICAgfVxyXG4gICAgLnAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1sZWZ0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkYXNoZWQ7XHJcbiAgICB9XHJcbiAgICAucC1vcmdhbml6YXRpb25jaGFydC1saW5lLWRvd24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvLyAucC1vcmdhbml6YXRpb25jaGFydC1saW5lLXJpZ2h0IHtcclxuICAgIC8vICAgYm9yZGVyLWxlZnQtc3R5bGU6IGRhc2hlZDtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgLmRhc2hlZC1saW5lLnAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS10b3Age1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xyXG4gIH1cclxuICAuZGFzaGVkLWxpbmUucC1vcmdhbml6YXRpb25jaGFydC1saW5lLWxlZnQge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkYXNoZWQ7XHJcbiAgfVxyXG4gIC5kYXNoZWQtbGluZS5wLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtZG93biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgI2RlZTJlNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvLyAucC1vcmdhbml6YXRpb25jaGFydC1saW5lLXJpZ2h0IHtcclxuICAvLyAgIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7XHJcbiAgLy8gfVxyXG59XHJcbiNvcmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 79889:
/*!******************************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/org-management-setup-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgManagementSetupRoutingModule": () => (/* binding */ OrgManagementSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_job_families_job_families_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/job-families/job-families.component */ 9999);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/grades/grades.component */ 65618);
/* harmony import */ var _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/organizations/organizations.component */ 8675);
/* harmony import */ var _components_competence_level_competence_level_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/competence-level/competence-level.component */ 83607);
/* harmony import */ var _components_competence_type_competence_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/competence-type/competence-type.component */ 21393);
/* harmony import */ var _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/disclaimer/disclaimer.component */ 25421);
/* harmony import */ var _components_custodies_custodies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custodies/custodies.component */ 51074);
/* harmony import */ var _components_organization_chart_organization_chart_component_organization_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/organization-chart/organization-chart-component/organization-chart.component */ 83555);
/* harmony import */ var _components_organization_types_organization_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/organization-types/organization-types.component */ 51566);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);














const routes = [
    {
        path: "grades",
        component: _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_1__.GradesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.grades },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "job-families",
        component: _components_job_families_job_families_component__WEBPACK_IMPORTED_MODULE_0__.JobFamiliesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.job_families },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "organization-types",
        component: _components_organization_types_organization_types_component__WEBPACK_IMPORTED_MODULE_8__.OrganizationTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.organization_types },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "organizations",
        component: _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_2__.OrganizationsComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.organizations },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "competence-level",
        component: _components_competence_level_competence_level_component__WEBPACK_IMPORTED_MODULE_3__.CompetenceLevelComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.competence_level },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "competence-type",
        component: _components_competence_type_competence_type_component__WEBPACK_IMPORTED_MODULE_4__.CompetenceTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.competence_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "disclaimer-template",
        component: _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__.DisclaimerComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.disclaimer_template },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "custodies",
        component: _components_custodies_custodies_component__WEBPACK_IMPORTED_MODULE_6__.CustodiesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.custodies },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
    {
        path: "OrganizationChart",
        component: _components_organization_chart_organization_chart_component_organization_chart_component__WEBPACK_IMPORTED_MODULE_7__.OrganizationChartComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_9__.ViewsManager.OrganizationChart },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_10__.CheckIsViewAllowedGuard],
    },
];
class OrgManagementSetupRoutingModule {
}
OrgManagementSetupRoutingModule.ɵfac = function OrgManagementSetupRoutingModule_Factory(t) { return new (t || OrgManagementSetupRoutingModule)(); };
OrgManagementSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: OrgManagementSetupRoutingModule });
OrgManagementSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](OrgManagementSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 9397:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/org-management-setup.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgManagementSetupModule": () => (/* binding */ OrgManagementSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _org_management_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org-management-setup-routing.module */ 79889);
/* harmony import */ var _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/grades/grades.component */ 65618);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_job_families_job_families_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/job-families/job-families.component */ 9999);
/* harmony import */ var _components_organization_types_organization_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/organization-types/organization-types.component */ 51566);
/* harmony import */ var _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/organizations/organizations.component */ 8675);
/* harmony import */ var _components_competence_level_competence_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/competence-level/competence-level.component */ 83607);
/* harmony import */ var _components_competence_type_competence_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/competence-type/competence-type.component */ 21393);
/* harmony import */ var _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/disclaimer/disclaimer.component */ 25421);
/* harmony import */ var _components_custodies_custodies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custodies/custodies.component */ 51074);
/* harmony import */ var _components_organization_chart_organization_chart_component_organization_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/organization-chart/organization-chart-component/organization-chart.component */ 83555);
/* harmony import */ var _components_organization_chart_add_edit_organization_chart_add_edit_organization_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/organization-chart/add-edit-organization-chart/add-edit-organization-chart.component */ 70697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);














class OrgManagementSetupModule {
}
OrgManagementSetupModule.ɵfac = function OrgManagementSetupModule_Factory(t) { return new (t || OrgManagementSetupModule)(); };
OrgManagementSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: OrgManagementSetupModule });
OrgManagementSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _org_management_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](OrgManagementSetupModule, { declarations: [_components_grades_grades_component__WEBPACK_IMPORTED_MODULE_1__.GradesComponent,
        _components_job_families_job_families_component__WEBPACK_IMPORTED_MODULE_3__.JobFamiliesComponent,
        _components_organization_types_organization_types_component__WEBPACK_IMPORTED_MODULE_4__.OrganizationTypesComponent,
        _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__.OrganizationsComponent,
        _components_competence_level_competence_level_component__WEBPACK_IMPORTED_MODULE_6__.CompetenceLevelComponent,
        _components_competence_type_competence_type_component__WEBPACK_IMPORTED_MODULE_7__.CompetenceTypeComponent,
        _components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_8__.DisclaimerComponent,
        _components_custodies_custodies_component__WEBPACK_IMPORTED_MODULE_9__.CustodiesComponent,
        _components_organization_chart_organization_chart_component_organization_chart_component__WEBPACK_IMPORTED_MODULE_10__.OrganizationChartComponent,
        _components_organization_chart_add_edit_organization_chart_add_edit_organization_chart_component__WEBPACK_IMPORTED_MODULE_11__.AddEditOrganizationChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _org_management_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrgManagementSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 88593:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/org-management-setup/services/disclaimer.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisclaimerService": () => (/* binding */ DisclaimerService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class DisclaimerService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Disclaimer/Create", data);
    }
    update(data) {
        return this.post("Disclaimer/Edit", data);
    }
    getList(params) {
        return this.get("Disclaimer/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("DIsclaimer/GetAll");
    }
    Delete(Id) {
        return this.delete("Disclaimer/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
DisclaimerService.ɵfac = function DisclaimerService_Factory(t) { return new (t || DisclaimerService)(); };
DisclaimerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DisclaimerService, factory: DisclaimerService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_org-management-setup_org-management-setup_module_ts.js.map