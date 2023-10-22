"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_payroll-setup_payroll-setup_module_ts"],{

/***/ 86053:
/*!****************************************************************************************!*\
  !*** ./src/app/payroll-setup/components/loan types/loan-rules/loan-rules.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanRulesComponent": () => (/* binding */ LoanRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_payroll_setup_services_loan_rules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/payroll-setup/services/loan-rules.service */ 26020);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/job-title-dropdown/job-title-dropdown.component */ 28548);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/payment-dropdown/payment-dropdown.component */ 70955);
/* harmony import */ var _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/variable-by-payment-dropdown/variable-by-payment-dropdown.component */ 35501);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);



















class LoanRulesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(loanRulesService) {
        super();
        this.loanRulesService = loanRulesService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "jobTitle", "payment", "variable", "actions"];
        this.optionalColomns = ["variablePercantage", "monthlyInterval"];
        this.isLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.loanTypeId = Number(params.get("loanTypeId")) ?? 0;
            // if (this.loanTypeId > 0 && this.CheckNoBusinessOrCompany())
            //   this.getList(this.currentPage);
        });
        this.form = this.fb.group({
            // id: [0, { nonNullable: true }],
            jobTitleId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            paymentId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            variableId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            variablePercantage: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.digits]],
            monthlyInterval: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.digits]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.loanTypeId && this.checkNoBusinessOrCompany())
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
        this.loanRulesService
            .getListByLoanTypeId(params, this.loanTypeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                res.data.map((ele) => {
                    ele.jobTitle = this.msgTranslate(ele.core_Job_Title.ar_Name, ele.core_Job_Title.en_Name);
                    ele.payment = this.msgTranslate(ele.pay_Payment.ar_Name, ele.pay_Payment.en_Name);
                    ele.variable = this.msgTranslate(ele.pay_Variable.arName, ele.pay_Variable.name);
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
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            if (!this.form.value.variablePercantage && !this.form.value.monthlyInterval) {
                this.warning("variablePercentageAndMonthlyIntervalMsg");
                return;
            }
            const model = {
                loneTypeId: this.loanTypeId,
                // id: this.form.value.id,
                // jobTitleId: this.form.value.jobTitleId,
                jobTitleIdLst: this.form.value.jobTitleId,
                paymentId: this.form.value.paymentId,
                variableId: this.form.value.variableId,
                variablePercantage: this.form.value.variablePercantage,
                monthlyInterval: this.form.value.monthlyInterval,
            };
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.loanRulesService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getList(this.lastPage, this.page.pageSize);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(loanRule) {
        let msg = this.msgTranslate(`${loanRule.jobTitle} - ${loanRule.variable}`);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(loanRule);
        });
    }
    delete(loanRule) {
        this.showLoading();
        this.loanRulesService.Delete(loanRule.id).subscribe((res) => {
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
        this.form.reset( /* { id: 0 } */);
        this.submitted = false;
    }
}
LoanRulesComponent.ɵfac = function LoanRulesComponent_Factory(t) { return new (t || LoanRulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_payroll_setup_services_loan_rules_service__WEBPACK_IMPORTED_MODULE_2__.LoanRulesService)); };
LoanRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: LoanRulesComponent, selectors: [["app-loan-rules"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 24, consts: [[1, "row"], [1, "col-12"], ["title", "loanRules"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12", "mbottom-10"], [3, "control", "submitted", "multi", "filter"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], [3, "control", "paymentControl", "submitted", "filter"], [1, "col-md-6", "col-12"], ["type", "number", "label", "variablePercantage", 3, "control", "submitted"], ["type", "number", "label", "monthlyInterval", 3, "control", "submitted"], ["align", "end"], [3, "onClick"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function LoanRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "page-title", 2)(6, "app-back-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-card-content", 4)(8, "div", 0)(9, "div", 1)(10, "form", 5)(11, "div", 0)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "app-job-title-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "app-payment-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "app-variable-by-payment-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "mat-card-actions", 14)(23, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClick", function LoanRulesComponent_Template_submit_btn_onClick_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onChangePage", function LoanRulesComponent_Template_app_material_table_onChangePage_25_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function LoanRulesComponent_Template_app_material_table_deleteRow_25_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/payroll-setup/", ctx.moduleId, "/loans/loan-types");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.jobTitleId)("submitted", ctx.submitted)("multi", true)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.paymentId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.variableId)("paymentControl", ctx.formCtrls.paymentId)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.variablePercantage)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.monthlyInterval)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_dropdowns_job_title_dropdown_job_title_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.JobTitleDropdownComponent, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__.BackBtnComponent, _shared_components_dropdowns_payment_dropdown_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.PaymentDropdownComponent, _shared_components_dropdowns_variable_by_payment_dropdown_variable_by_payment_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.VariableByPaymentDropdownComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXJ1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 72684:
/*!***********************************************************************************!*\
  !*** ./src/app/payroll-setup/components/payment-types/payment-types.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypesComponent": () => (/* binding */ PaymentTypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_payroll_setup_services_payment_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/payroll-setup/services/payment-types.service */ 73905);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function PaymentTypesComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PaymentTypesComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class PaymentTypesComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(paymentTypesService) {
        super();
        this.paymentTypesService = paymentTypesService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_NAme", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
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
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.paymentTypesService
            .getList(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
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
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_name,
                En_Name: this.form.value.en_name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.paymentTypesService.create(model).subscribe((res) => {
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
        this.paymentTypesService.update(model).subscribe((res) => {
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
    paymentTypeToEdit(paymentType) {
        this.form.patchValue(paymentType);
        this.formCtrls.ar_name.setValue(paymentType.ar_NAme);
        this.formCtrls.en_name.setValue(paymentType.en_Name);
        // console.log(this.form.value);
    }
    onDelete(paymentType) {
        let msg = this.msgTranslate(paymentType.ar_NAme, paymentType.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(paymentType);
        });
    }
    delete(paymentType) {
        this.showLoading();
        this.paymentTypesService.Delete(paymentType.id).subscribe((res) => {
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
                if (paymentType.id == this.formCtrls.id.value)
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
PaymentTypesComponent.ɵfac = function PaymentTypesComponent_Factory(t) { return new (t || PaymentTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_payroll_setup_services_payment_types_service__WEBPACK_IMPORTED_MODULE_3__.PaymentTypesService)); };
PaymentTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PaymentTypesComponent, selectors: [["app-payment-types"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 14, consts: [[1, "row"], [1, "col-12"], ["addTitle", "paymentTypes", "editTitle", "editPaymentType", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function PaymentTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-card-content", 3)(7, "div", 0)(8, "div", 1)(9, "form", 4)(10, "div", 0)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-card-actions", 8)(16, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function PaymentTypesComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, PaymentTypesComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-material-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function PaymentTypesComponent_Template_app_material_table_onChangePage_19_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function PaymentTypesComponent_Template_app_material_table_editRow_19_listener($event) { return ctx.paymentTypeToEdit($event); })("deleteRow", function PaymentTypesComponent_Template_app_material_table_deleteRow_19_listener($event) { return ctx.onDelete($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 77039:
/*!****************************************************************************************************************!*\
  !*** ./src/app/payroll-setup/components/payroll-elements/add-payroll-element/add-payroll-element.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPayrollElementComponent": () => (/* binding */ AddPayrollElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/constants */ 33975);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/payroll-setup/services/payroll-elements.service */ 14040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_dropdowns_element_groups_dropdown_element_groups_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/element-groups-dropdown/element-groups-dropdown.component */ 52748);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _payroll_element_users_payroll_element_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../payroll-element-users/payroll-element-users.component */ 87360);





















function AddPayrollElementComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-add-new-btn", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/payroll-setup/", ctx_r0.moduleId, "/payroll-elements/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx_r0.parantParam);
} }
function AddPayrollElementComponent_reset_form_btn_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddPayrollElementComponent_reset_form_btn_25_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
class AddPayrollElementComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(payrollElementsService) {
        super();
        this.payrollElementsService = payrollElementsService;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.payrollElementId = Number(params.get("payrollElementId")) ?? 0;
            // if (this.payrollElementId > 0 && this.CheckNoBusinessOrCompany())
            //   this.getById();
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            en_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            variableCode: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.noSpace,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(app_shared_resources_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.variableCode_pattern),
                ],
            ],
            element_Group_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            display_In_Result: [null],
        });
    }
    onChangeBusinessAndCompanyId() {
        // this.payrollElement = null;
        if (this.payrollElementId > 0 && this.checkNoBusinessOrCompany())
            this.getById();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getById() {
        this.showLoading();
        this.payrollElementsService
            .getById(this.payrollElementId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.payrollElement = res.data[0];
                this.payrollElementToEdit(res.data[0]);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    payrollElementToEdit(payrollElement) {
        this.form.patchValue(payrollElement);
        this.formCtrls.en_name.setValue(payrollElement.name);
        this.formCtrls.variableCode.setValue(payrollElement.paY_Element_Variable[0].pay_Variable.code);
        this.formCtrls.display_In_Result.setValue(payrollElement.paY_Element_Variable[0].pay_Variable.display_In_Result);
        // console.log(this.form.value);
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                PAY_Element: {
                    ID: this.form.value.id,
                    ar_Name: this.form.value.ar_Name,
                    name: this.form.value.en_name,
                    element_Group_ID: this.form.value.element_Group_ID,
                },
                variableCode: this.form.value.variableCode.trim(),
                display_In_Result: this.form.value.display_In_Result ?? false,
            };
            model.PAY_Element.ID == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.payrollElementsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.clearForm();
                this.payrollElementId = res.data.id;
                this.formCtrls.id.setValue(this.payrollElementId);
                let url = `/payroll-setup/${this.moduleId}/payroll-elements/edit/${this.payrollElementId}`;
                this.navigateTo(url);
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // this.payrollElement = res.data;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.payrollElementsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                // this.payrollElement = res.data;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        /* if (this.payrollElementId == 0) */
        this.form.reset({ id: 0 });
        // else this.payrollElementToEdit();
        this.submitted = false;
    }
}
AddPayrollElementComponent.ɵfac = function AddPayrollElementComponent_Factory(t) { return new (t || AddPayrollElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_4__.PayrollElementsService)); };
AddPayrollElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddPayrollElementComponent, selectors: [["app-add-payroll-element"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 17, consts: [[1, "row"], [1, "col-12"], ["addTitle", "payrollElements", "editTitle", "editPayrollElement", 3, "id"], [3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "variableCode", 3, "control", "submitted"], [1, "col-md-6", "col-12"], [3, "control", "submitted"], [1, "col-md-6", "col-12", "ptop-15", "pbottom-15"], ["label", "display_In_Result", "color", "primary", 1, "mx-2", 3, "control"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "payrollElementId"], [3, "click"]], template: function AddPayrollElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddPayrollElementComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-card-content", 5)(9, "div", 0)(10, "div", 1)(11, "form", 6)(12, "div", 0)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "app-element-groups-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "mat-card-actions", 15)(24, "submit-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClick", function AddPayrollElementComponent_Template_submit_btn_onClick_24_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, AddPayrollElementComponent_reset_form_btn_25_Template, 1, 0, "reset-form-btn", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "mat-divider")(27, "app-payroll-element-users", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("url", "/payroll-setup/", ctx.moduleId, "/payroll-elements/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.en_name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.variableCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.element_Group_ID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx.formCtrls.display_In_Result);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("payrollElementId", ctx.payrollElementId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_6__.CheckBoxComponent, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_7__.BackBtnComponent, _shared_components_dropdowns_element_groups_dropdown_element_groups_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.ElementGroupsDropdownComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_9__.AddNewBtnComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _payroll_element_users_payroll_element_users_component__WEBPACK_IMPORTED_MODULE_13__.PayrollElementUsersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGF5cm9sbC1lbGVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 87360:
/*!********************************************************************************************************************!*\
  !*** ./src/app/payroll-setup/components/payroll-elements/payroll-element-users/payroll-element-users.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollElementUsersComponent": () => (/* binding */ PayrollElementUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/payroll-setup/services/payroll-elements.service */ 14040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_users_dropdown_users_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/users-dropdown/users-dropdown.component */ 39672);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);

















function PayrollElementUsersComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-material-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("deleteRow", function PayrollElementUsersComponent_ng_container_15_Template_app_material_table_deleteRow_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r0.isLoaded)("dataSource", ctx_r0.dataSource)("mandatoryColomns", ctx_r0.mandatoryColomns)("optionalColomns", ctx_r0.optionalColomns)("actions", ctx_r0.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class PayrollElementUsersComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(payrollElementsService) {
        super();
        this.payrollElementsService = payrollElementsService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "name",
            "dateFrom",
            "dateTo",
            "actions",
        ];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.payrollElementId && this.CheckNoBusinessOrCompany()) this.getAll();
        this.form = this.fb.group({
            UserID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            DateFrom: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            DateTo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.compareDates("DateFrom", "DateTo"),
        });
    }
    ngOnChanges(changes) {
        // if (changes.payrollElementId.currentValue > 0) this.getAll();
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.payrollElementId && this.checkNoBusinessOrCompany())
            this.getAll();
    }
    get formCtrls() {
        return this.form.controls;
    }
    getAll() {
        this.payrollElementsService
            .getAllUsersByPayrollElement(this.payrollElementId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                res.data.map((user) => {
                    user.dateFrom = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(user.dateFrom);
                    user.dateTo = app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDate(user.dateTo);
                    user.name = user.uM_Users.name;
                    user.id = user.userID;
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(res.data);
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = [
                {
                    ElementID: this.payrollElementId,
                    UserID: this.form.value.UserID,
                    DateFrom: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.DateFrom),
                    DateTo: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.DateTo),
                },
            ];
            this.create(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.payrollElementsService
            .createUser(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(payrollElementUser) {
        let msg = this.msgTranslate(payrollElementUser.uM_Users.name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(payrollElementUser);
        });
    }
    delete(payrollElementUser) {
        let params = {
            elementid: this.payrollElementId,
            userid: payrollElementUser.uM_Users.id,
            from: this.resetDateFormat(payrollElementUser.dateFrom),
            to: this.resetDateFormat(payrollElementUser.dateTo),
        };
        this.showLoading();
        this.payrollElementsService.DeleteUser(params).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset();
        this.submitted = false;
    }
    resetDateFormat(date) {
        // return date as exist in backend
        return date.split("-").reverse().join("-").concat("T00:00:00");
    }
}
PayrollElementUsersComponent.ɵfac = function PayrollElementUsersComponent_Factory(t) { return new (t || PayrollElementUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_4__.PayrollElementsService)); };
PayrollElementUsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PayrollElementUsersComponent, selectors: [["app-payroll-element-users"]], inputs: { payrollElementId: "payrollElementId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 10, consts: [[1, "pt-2"], ["title", "users"], [1, "container-fluid", "mb-0"], [1, "row"], [1, "col-lg-11", "col-md-10"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "submitted", "filter"], ["label", "dateFrom", 3, "control", "submitted"], ["label", "dateTo", 3, "control", "submitted"], [1, "col-lg-1", "col-md-2", "p-0"], [1, "mtop-3", "btn-sm", "float-right", "my-0", 3, "disabled", "onClick"], [4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "deleteRow"]], template: function PayrollElementUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-card-content", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5)(6, "div", 3)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-users-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-datepicker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10)(14, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function PayrollElementUsersComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, PayrollElementUsersComponent_ng_container_15_Template, 2, 7, "ng-container", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.UserID)("submitted", ctx.submitted)("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.DateFrom)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.DateTo)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.payrollElementId);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.payrollElementId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dropdowns_users_dropdown_users_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.UsersDropdownComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLWVsZW1lbnQtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13212:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/payroll-setup/components/payroll-elements/payroll-elements-index/payroll-elements-index.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollElementsIndexComponent": () => (/* binding */ PayrollElementsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/payroll-setup/services/payroll-elements.service */ 14040);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class PayrollElementsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(payrollElementsService) {
        super();
        this.payrollElementsService = payrollElementsService;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = ["variableCode", "display_In_Result"];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.currentPage);
    }
    getList(page, pageSize) {
        this.removePageParams();
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: this.page.pageIndex,
            pageSize: this.page.pageSize,
        };
        this.payrollElementsService
            .getList(params)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((res) => {
                    res.en_Name = res.name;
                    res.variableCode = res.paY_Element_Variable[0].pay_Variable.code;
                    res.display_In_Result = res.paY_Element_Variable[0].pay_Variable.display_In_Result;
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(payrollElement) {
        let msg = this.msgTranslate(payrollElement.ar_Name, payrollElement.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(payrollElement);
        });
    }
    delete(payrollElement) {
        this.showLoading();
        this.payrollElementsService.Delete(payrollElement.id).subscribe((res) => {
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
PayrollElementsIndexComponent.ɵfac = function PayrollElementsIndexComponent_Factory(t) { return new (t || PayrollElementsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_payroll_setup_services_payroll_elements_service__WEBPACK_IMPORTED_MODULE_2__.PayrollElementsService)); };
PayrollElementsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PayrollElementsIndexComponent, selectors: [["app-payroll-elements-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 7, consts: [[1, "row"], [1, "col-12"], ["title", "payrollElements", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "onChangePage", "deleteRow"]], template: function PayrollElementsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-material-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function PayrollElementsIndexComponent_Template_app_material_table_onChangePage_7_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PayrollElementsIndexComponent_Template_app_material_table_deleteRow_7_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLWVsZW1lbnRzLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 96033:
/*!***************************************************************!*\
  !*** ./src/app/payroll-setup/payroll-setup-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollSetupRoutingModule": () => (/* binding */ PayrollSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_payroll_elements_payroll_elements_index_payroll_elements_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/payroll-elements/payroll-elements-index/payroll-elements-index.component */ 13212);
/* harmony import */ var _components_payroll_elements_add_payroll_element_add_payroll_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/payroll-elements/add-payroll-element/add-payroll-element.component */ 77039);
/* harmony import */ var _components_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/payment-types/payment-types.component */ 72684);
/* harmony import */ var _components_loan_types_loan_rules_loan_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loan types/loan-rules/loan-rules.component */ 86053);
/* harmony import */ var _components_loan_types_loan_types_loan_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loan types/loan-types/loan-types.component */ 62195);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: "payroll-elements",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.payroll_elements },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_payroll_elements_payroll_elements_index_payroll_elements_index_component__WEBPACK_IMPORTED_MODULE_0__.PayrollElementsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.payroll_elements_index },
            },
            {
                path: "add",
                component: _components_payroll_elements_add_payroll_element_add_payroll_element_component__WEBPACK_IMPORTED_MODULE_1__.AddPayrollElementComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_payroll_elements },
            },
            {
                path: "edit/:payrollElementId",
                component: _components_payroll_elements_add_payroll_element_add_payroll_element_component__WEBPACK_IMPORTED_MODULE_1__.AddPayrollElementComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.add_payroll_elements },
            },
        ],
    },
    {
        path: "payment-types",
        component: _components_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_2__.PaymentTypesComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.payment_types },
    },
    {
        path: "loans",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.loans },
        children: [
            {
                path: "",
                redirectTo: "loan-types",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_5__.pathMatch.full,
            },
            {
                path: "loan-types",
                component: _components_loan_types_loan_types_loan_types_component__WEBPACK_IMPORTED_MODULE_4__.LoanTypesComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.loan_types },
            },
            {
                path: "loan-rules/:loanTypeId",
                component: _components_loan_types_loan_rules_loan_rules_component__WEBPACK_IMPORTED_MODULE_3__.LoanRulesComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_6__.ViewsManager.loan_rules },
            },
        ],
    },
];
class PayrollSetupRoutingModule {
}
PayrollSetupRoutingModule.ɵfac = function PayrollSetupRoutingModule_Factory(t) { return new (t || PayrollSetupRoutingModule)(); };
PayrollSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PayrollSetupRoutingModule });
PayrollSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PayrollSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 71892:
/*!*******************************************************!*\
  !*** ./src/app/payroll-setup/payroll-setup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollSetupModule": () => (/* binding */ PayrollSetupModule)
/* harmony export */ });
/* harmony import */ var _components_payroll_elements_add_payroll_element_add_payroll_element_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/payroll-elements/add-payroll-element/add-payroll-element.component */ 77039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _payroll_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll-setup-routing.module */ 96033);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_payroll_elements_payroll_elements_index_payroll_elements_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/payroll-elements/payroll-elements-index/payroll-elements-index.component */ 13212);
/* harmony import */ var _components_payroll_elements_payroll_element_users_payroll_element_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/payroll-elements/payroll-element-users/payroll-element-users.component */ 87360);
/* harmony import */ var _components_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/payment-types/payment-types.component */ 72684);
/* harmony import */ var _components_loan_types_loan_types_loan_types_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loan types/loan-types/loan-types.component */ 62195);
/* harmony import */ var _components_loan_types_loan_rules_loan_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loan types/loan-rules/loan-rules.component */ 86053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);










class PayrollSetupModule {
}
PayrollSetupModule.ɵfac = function PayrollSetupModule_Factory(t) { return new (t || PayrollSetupModule)(); };
PayrollSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PayrollSetupModule });
PayrollSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _payroll_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PayrollSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PayrollSetupModule, { declarations: [_components_payroll_elements_payroll_elements_index_payroll_elements_index_component__WEBPACK_IMPORTED_MODULE_3__.PayrollElementsIndexComponent,
        _components_payroll_elements_add_payroll_element_add_payroll_element_component__WEBPACK_IMPORTED_MODULE_0__.AddPayrollElementComponent,
        _components_payroll_elements_payroll_element_users_payroll_element_users_component__WEBPACK_IMPORTED_MODULE_4__.PayrollElementUsersComponent,
        _components_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_5__.PaymentTypesComponent,
        _components_loan_types_loan_types_loan_types_component__WEBPACK_IMPORTED_MODULE_6__.LoanTypesComponent,
        _components_loan_types_loan_rules_loan_rules_component__WEBPACK_IMPORTED_MODULE_7__.LoanRulesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _payroll_setup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PayrollSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 26020:
/*!**************************************************************!*\
  !*** ./src/app/payroll-setup/services/loan-rules.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanRulesService": () => (/* binding */ LoanRulesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LoanRulesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("LoanRules/Create", data);
    }
    getListByLoanTypeId(params, loanTypeId) {
        return this.get("LoanRules/GetList", {
            params: {
                ...params,
                $filter: `loneTypeId eq ${loanTypeId}`,
            },
        });
    }
    getAll() {
        return this.get("LoanRules/GetAll");
    }
    Delete(Id) {
        return this.delete("LoanRules/Delete", {
            params: { Id: Id },
        });
    }
}
LoanRulesService.ɵfac = function LoanRulesService_Factory(t) { return new (t || LoanRulesService)(); };
LoanRulesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoanRulesService, factory: LoanRulesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 73905:
/*!*****************************************************************!*\
  !*** ./src/app/payroll-setup/services/payment-types.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypesService": () => (/* binding */ PaymentTypesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PaymentTypesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PaymentTypeSetup/Create", data);
    }
    update(data) {
        return this.post("PaymentTypeSetup/Edit", data);
    }
    getList(params) {
        return this.get("PaymentTypeSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("PaymentTypeSetup/GetAll");
    }
    Delete(Id) {
        return this.delete("PaymentTypeSetup/Delete", {
            params: { Id: Id },
        });
    }
}
PaymentTypesService.ɵfac = function PaymentTypesService_Factory(t) { return new (t || PaymentTypesService)(); };
PaymentTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentTypesService, factory: PaymentTypesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 14040:
/*!********************************************************************!*\
  !*** ./src/app/payroll-setup/services/payroll-elements.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollElementsService": () => (/* binding */ PayrollElementsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PayrollElementsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("PayrollElementSetup/Create", data);
    }
    update(data) {
        return this.post("PayrollElementSetup/Edit", data);
    }
    getList(params) {
        return this.get("PayrollElementSetup/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Element_Variable},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Element_Variable}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Variable}`,
            },
        });
    }
    getAll() {
        return this.get("PayrollElementSetup/GetAll");
    }
    getById(id) {
        return this.get("PayrollElementSetup/GetAll", {
            params: {
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Element_Variable},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Element_Variable}/${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Variable}`,
                $filter: `id eq ${id}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("PayrollElementSetup/Delete", {
            params: { Id: Id },
        });
    }
    ////////// payroll element users
    createUser(data) {
        return this.post("PayrollElementSetup/Create_Element_Users_Details", data);
    }
    getAllUsersByPayrollElement(payrollElementId) {
        return this.get("PayrollElementSetup/GetAll_Element_Users_Details", {
            params: { Element_ID: payrollElementId },
        });
    }
    DeleteUser(params) {
        return this.delete("PayrollElementSetup/Delete_Element_Users_Details", {
            params: params,
        });
    }
}
PayrollElementsService.ɵfac = function PayrollElementsService_Factory(t) { return new (t || PayrollElementsService)(); };
PayrollElementsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PayrollElementsService, factory: PayrollElementsService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_payroll-setup_payroll-setup_module_ts.js.map