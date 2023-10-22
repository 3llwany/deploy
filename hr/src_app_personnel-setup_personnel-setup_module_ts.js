"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_personnel-setup_personnel-setup_module_ts"],{

/***/ 55595:
/*!*********************************************************!*\
  !*** ./src/app/hr-setup/services/blood-type.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodTypeService": () => (/* binding */ BloodTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class BloodTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getAll() {
        return this.get("BloodType/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.en_Name = item.en_NAme;
            });
            return res;
        }));
    }
}
BloodTypeService.ɵfac = function BloodTypeService_Factory(t) { return new (t || BloodTypeService)(); };
BloodTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BloodTypeService, factory: BloodTypeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 99547:
/*!******************************************************!*\
  !*** ./src/app/hr-setup/services/contact.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ContactService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getAllTypes() {
        return this.get("HRSetup/contactType/GetAll");
    }
    getAllCategoriesByTypeId(typeId) {
        return this.get("HRSetup/contactCategories/GetAll", {
            params: {
                $filter: `type_ID eq ${typeId}`,
            },
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35977:
/*!*************************************************************!*\
  !*** ./src/app/hr-setup/services/emp-job-status.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpJobStatusService": () => (/* binding */ EmpJobStatusService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmpJobStatusService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getAllStatus() {
        return this.get("HRSetup/Status/GetAll");
    }
    getAllStatusEvents(statusId) {
        return this.get("HRSetup/Status/GetAll_StatusProperty", {
            params: { $filter: `statusID eq ${statusId}` },
        });
    }
}
EmpJobStatusService.ɵfac = function EmpJobStatusService_Factory(t) { return new (t || EmpJobStatusService)(); };
EmpJobStatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmpJobStatusService, factory: EmpJobStatusService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 76311:
/*!*************************************************************!*\
  !*** ./src/app/hr-setup/services/marital-status.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaritalStatusService": () => (/* binding */ MaritalStatusService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class MaritalStatusService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getAll() {
        return this.get("HRSetup/MaritalStatus/GetAll");
    }
}
MaritalStatusService.ɵfac = function MaritalStatusService_Factory(t) { return new (t || MaritalStatusService)(); };
MaritalStatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MaritalStatusService, factory: MaritalStatusService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 97555:
/*!******************************************************!*\
  !*** ./src/app/hr-setup/services/militry.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MilitryService": () => (/* binding */ MilitryService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class MilitryService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    getAllMilitryStatus() {
        return this.get("HRSetup/MilitryStatus/GetAll");
    }
    getAllMilitryGrades() {
        return this.get("HRSetup/MilitryGrade/GetAll");
    }
}
MilitryService.ɵfac = function MilitryService_Factory(t) { return new (t || MilitryService)(); };
MilitryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MilitryService, factory: MilitryService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 29222:
/*!*********************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/add-employee/add-employee.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEmployeeComponent": () => (/* binding */ AddEmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/buttons/back-btn/back-btn.component */ 65959);
/* harmony import */ var _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/buttons/add-new-btn/add-new-btn.component */ 18825);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _personal_information_emp_personal_info_core_empl_personal_info_core_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../personal-information/emp-personal-info-core/empl-personal-info-core.component */ 59897);
/* harmony import */ var _employee_career_emp_career_core_emp_career_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../employee-career/emp-career-core/emp-career-core.component */ 70923);
/* harmony import */ var _employee_general_info_emp_general_info_core_emp_general_info_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employee-general-info/emp-general-info-core/emp-general-info-core.component */ 78392);
/* harmony import */ var _employement_information_employement_info_core_employement_info_core_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../employement-information/employement-info-core/employement-info-core.component */ 20001);
/* harmony import */ var _employee_balances_employee_balances_core_employee_balances_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../employee-balances/employee-balances-core/employee-balances-core.component */ 21918);
/* harmony import */ var _sap_integration_emp_sap_integration_core_emp_sap_integration_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sap-integration/emp-sap-integration-core/emp-sap-integration-core.component */ 56333);
/* harmony import */ var _payments_information_emp_payments_info_core_emp_payments_info_core_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../payments-information/emp-payments-info-core/emp-payments-info-core.component */ 61198);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















const _c0 = ["tabs"];
function AddEmployeeComponent_ng_container_26_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddEmployeeComponent_ng_container_26_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12); const i_r10 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r11.activeTab = i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddEmployeeComponent_ng_container_26_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12); const tab_r9 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r13.scrollToSection($event, tab_r9.viewName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "page-title", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r8.activeTab === i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", tab_r9.name)("icon", tab_r9.icon);
} }
function AddEmployeeComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddEmployeeComponent_ng_container_26_li_1_Template, 4, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.customViews);
} }
function AddEmployeeComponent_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "p-skeleton", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
const _c1 = function () { return [1, 2, 3, 4, 5, 6, 7]; };
function AddEmployeeComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, AddEmployeeComponent_ng_template_27_div_0_Template, 2, 0, "div", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c1));
} }
function AddEmployeeComponent_app_add_new_btn_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-add-new-btn", 31);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("url", "/personnel-setup/", ctx_r4.moduleId, "/employees/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("params", ctx_r4.parantParam);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "emp-general-info-core", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("changeEmployeeId", function AddEmployeeComponent_ng_container_32_ng_container_1_div_1_Template_emp_general_info_core_changeEmployeeId_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r25.changeEmployeeId($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r18.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "emp-personal-info-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r19.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "emp-career-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r20.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "employement-information-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r21.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "employee-balances-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r22.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "emp-sap-integration-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r23.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "emp-payments-info-core", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", tab_r17.viewName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("employeeId", ctx_r24.employeeId)("icon", tab_r17.icon);
} }
function AddEmployeeComponent_ng_container_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddEmployeeComponent_ng_container_32_ng_container_1_div_1_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddEmployeeComponent_ng_container_32_ng_container_1_div_2_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddEmployeeComponent_ng_container_32_ng_container_1_div_3_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, AddEmployeeComponent_ng_container_32_ng_container_1_div_4_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, AddEmployeeComponent_ng_container_32_ng_container_1_div_5_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, AddEmployeeComponent_ng_container_32_ng_container_1_div_6_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, AddEmployeeComponent_ng_container_32_ng_container_1_div_7_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_general_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_personal_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_career_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.employment_info_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_balances_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_sap_integration_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", tab_r17.viewName == ctx_r16.viewsManager.emp_payments_info_tab);
} }
function AddEmployeeComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddEmployeeComponent_ng_container_32_ng_container_1_Template, 8, 7, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r5.customViews);
} }
function AddEmployeeComponent_ng_template_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-employee-profile-card-skeleton", 39)(2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("rowNo", 5);
} }
const _c2 = function () { return [1, 2, 3, 4, 5, 6]; };
function AddEmployeeComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddEmployeeComponent_ng_template_33_div_1_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c2));
} }
class AddEmployeeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.activeTab = 0;
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.employeeId = Number(params.get("employeeId")) ?? 0;
        });
    }
    scrollToSection(event, sectionId) {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    changeEmployeeId(employeeId) {
        this.employeeId = employeeId;
    }
    onScroll($event) {
        let scrollTop = window.pageYOffset;
        const element = document.getElementById("top-tools");
        // add nav-fixed to tabs
        if (scrollTop >= this.tabs.nativeElement.parentElement.offsetTop + 23) {
            this.tabs.nativeElement.classList.add("nav-fixed");
            element.classList.add("mt-2");
        }
        else {
            this.tabs.nativeElement.classList.remove("nav-fixed");
            element.classList.remove("mt-2");
        }
        // change active tab
        this.customViews?.forEach((sec, index) => {
            const element = document.getElementById(sec.viewName);
            if (scrollTop >= element.offsetTop) {
                this.activeTab = index;
            }
        });
    }
}
AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) { return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
AddEmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: AddEmployeeComponent, selectors: [["app-add-employee"]], viewQuery: function AddEmployeeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
    } }, hostBindings: function AddEmployeeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("scroll", function AddEmployeeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 12, consts: [[1, "add-employee-container"], [1, "row"], [1, "col-12"], [1, "page-user-profile"], [1, "user-profile-images"], [1, "title-overlay"], ["alt", "User Timeline Image", 1, "img-fluid", "rounded-top", "user-timeline-image", 3, "src"], ["alt", "User Profile Image", "height", "140", "width", "140", 1, "user-profile-image", "rounded", 3, "src"], [1, "user-profile-text"], [1, "profile-text-color", "mb-0"], [1, "card-content"], [1, "card-body"], [1, "user-profile-buttons", "d-flex", "justify-content-center", "justify-content-sm-start"], [1, "btn", "btn-primary", "mr-3"], [1, "btn", "bg-light-primary"], [1, "nav", "nav-tabs", "my-1", "spynav"], ["tabs", ""], [4, "ngIf", "ngIfElse"], ["tabsLoading", ""], ["id", "top-tools", 1, "pb-4", "pl-4", "pr-4", "pt-2"], [3, "url", "params", 4, "ngIf"], [1, "mb-2", 3, "url", "params"], ["loading", ""], ["class", "nav-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [1, "nav-link", 3, "click"], [1, "d-none", "d-sm-inline-block"], [3, "title", "icon"], ["class", "m-1", 4, "ngFor", "ngForOf"], [1, "m-1"], ["width", "8rem", "height", "2rem"], [3, "url", "params"], [4, "ngFor", "ngForOf"], ["class", "mb-2", 3, "id", 4, "ngIf"], [1, "mb-2", 3, "id"], [3, "employeeId", "icon", "changeEmployeeId"], [3, "employeeId", "icon"], ["class", "col-md-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-2"], [3, "rowNo"]], template: function AddEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 6)(9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 8)(11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Martina Ash");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Devloper");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "ul", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, AddEmployeeComponent_ng_container_26_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, AddEmployeeComponent_ng_template_27_Template, 1, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, AddEmployeeComponent_app_add_new_btn_30_Template, 1, 2, "app-add-new-btn", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "app-back-btn", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, AddEmployeeComponent_ng_container_32_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, AddEmployeeComponent_ng_template_33_Template, 2, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](28);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 10, "Good evening!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx.assets.emp_profile_banner, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx.assets.user_avatar, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.customViews)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("url", "/personnel-setup/", ctx.moduleId, "/employees/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.customViews)("ngIfElse", _r6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_2__.BackBtnComponent, _shared_components_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_3__.AddNewBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeProfileCardSkeletonComponent, primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__.Skeleton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _personal_information_emp_personal_info_core_empl_personal_info_core_component__WEBPACK_IMPORTED_MODULE_6__.EmployeePersonalInfoCoreComponent, _employee_career_emp_career_core_emp_career_core_component__WEBPACK_IMPORTED_MODULE_7__.EmployeeCareerCoreComponent, _employee_general_info_emp_general_info_core_emp_general_info_core_component__WEBPACK_IMPORTED_MODULE_8__.EmpGeneralInfoCoreComponent, _employement_information_employement_info_core_employement_info_core_component__WEBPACK_IMPORTED_MODULE_9__.EmployementInformationComponent, _employee_balances_employee_balances_core_employee_balances_core_component__WEBPACK_IMPORTED_MODULE_10__.EmployeeBalancesCoreComponent, _sap_integration_emp_sap_integration_core_emp_sap_integration_core_component__WEBPACK_IMPORTED_MODULE_11__.EmpSapIntegrationCoreComponent, _payments_information_emp_payments_info_core_emp_payments_info_core_component__WEBPACK_IMPORTED_MODULE_12__.EmpPaymentsInfoCoreComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".add-employee-container[_ngcontent-%COMP%] {\n  margin: 0 -30px;\n}\n\n.nav-tabs.spynav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #2f8be6 !important;\n}\n\n.divider[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #4e4e4e !important;\n}\n\n.active[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #25a184;\n}\n\n.active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%]:hover    > .nav-link[_ngcontent-%COMP%] {\n  color: #25a184 !important;\n}\n\n.nav-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -6px;\n  z-index: 996;\n  height: 38px;\n  background: #f7f7f8;\n  width: 100%;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.page-user-profile[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLDJDQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBOztFQUVDLGdDQUFBO0FBQ0Q7O0FBRUE7O0VBRUMseUJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5SEFBQTtBQUNEOztBQUdBO0VBQ0MsNkJBQUE7QUFBRCIsImZpbGUiOiJhZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWVtcGxveWVlLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAwIC0zMHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYnMuc3B5bmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmY4YmU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuXHRtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuXHRjb2xvcjogIzRlNGU0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlLFxyXG4ubmF2LWl0ZW06aG92ZXIge1xyXG5cdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjVhMTg0O1xyXG59XHJcblxyXG4uYWN0aXZlID4gLm5hdi1saW5rLFxyXG4ubmF2LWl0ZW06aG92ZXIgPiAubmF2LWxpbmsge1xyXG5cdGNvbG9yOiAjMjVhMTg0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtZml4ZWQge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IC02cHg7XHJcblx0ei1pbmRleDogOTk2O1xyXG5cdGhlaWdodDogMzhweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjdmN2Y4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuXHRcdDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ucGFnZS11c2VyLXByb2ZpbGUge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 43536:
/*!******************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/card-shared-components/card-header/card-header.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeaderComponent": () => (/* binding */ CardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





function CardHeaderComponent_a_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function CardHeaderComponent_a_5_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function CardHeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardHeaderComponent_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.click($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardHeaderComponent_a_5_i_2_Template, 1, 0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardHeaderComponent_a_5_i_3_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disable-link", !ctx_r0.canMadeAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r0.cardId == 0 ? "add" : "edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardId == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardId > 0);
} }
class CardHeaderComponent {
    constructor() {
        this.canMadeAction = false;
        this.cardId = 0;
        this.isLoaded = false;
        this.onClickIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        // console.log(this.cardId, this.cardTitle, this.isLoaded);
    }
    click($event) {
        this.onClickIcon.emit($event);
    }
}
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) { return new (t || CardHeaderComponent)(); };
CardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardHeaderComponent, selectors: [["card-header"]], inputs: { canMadeAction: "canMadeAction", cardId: "cardId", cardTitle: "cardTitle", isLoaded: "isLoaded" }, outputs: { onClickIcon: "onClickIcon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 6, consts: [[1, "cardSectionTitle"], [1, "mb-0"], ["matTooltipPosition", "above", 3, "matTooltip", "disable-link", "click", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "click"], ["class", "ft-plus-square", 4, "ngIf"], ["class", "ft-edit", 4, "ngIf"], [1, "ft-plus-square"], [1, "ft-edit"]], template: function CardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardHeaderComponent_a_5_Template, 4, 7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.cardTitle)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 58588:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/card-shared-components/card-row-item/card-row-item.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardRowItemComponent": () => (/* binding */ CardRowItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



function CardRowItemComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r0.value) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "---", " ");
} }
function CardRowItemComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.value, "dd/MM/yyyy")) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "---", " ");
} }
class CardRowItemComponent {
    // @Output() onClick? = new EventEmitter<any>();
    constructor() {
        this.label = "";
        this.labelClass = "col-6";
        this.valueClass = "col-6";
        this.isDate = false;
    }
    ngOnInit() { }
}
CardRowItemComponent.ɵfac = function CardRowItemComponent_Factory(t) { return new (t || CardRowItemComponent)(); };
CardRowItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardRowItemComponent, selectors: [["card-row-item"]], inputs: { label: "label", labelClass: "labelClass", value: "value", valueClass: "valueClass", isDate: "isDate" }, decls: 10, vars: 11, consts: [[1, "rowItem"], [1, "row"], [4, "ngIf"]], template: function CardRowItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardRowItemComponent_p_8_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardRowItemComponent_p_9_Template, 3, 4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.labelClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.label)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.valueClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDate);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXJvdy1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 43996:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-balances/emp-permission/emp-permission-card/emp-permission-card.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpPermissionCardComponent": () => (/* binding */ EmpPermissionCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _emp_permission_dialog_emp_permission_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-permission-dialog/emp-permission-dialog.component */ 68837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-permission.service */ 55672);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function EmpPermissionCardComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11)(9, "div")(10, "table", 12)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permission_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 11, permission_r7.permission)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", permission_r7.balance, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 13, "hr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", permission_r7.used, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 15, "hr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", permission_r7.remaining, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 17, "hr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", permission_r7.startDate, " - ", permission_r7.endDate, " ");
} }
function EmpPermissionCardComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpPermissionCardComponent_div_0_ng_container_3_ng_container_1_Template, 32, 19, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.employeePermissionInfo);
} }
function EmpPermissionCardComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
} }
function EmpPermissionCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpPermissionCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EmpPermissionCardComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EmpPermissionCardComponent_div_0_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeePermissionInfo == null ? null : ctx_r0.employeePermissionInfo.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.employeePermissionInfo == null ? null : ctx_r0.employeePermissionInfo.length) > 0)("ngIfElse", _r4);
} }
function EmpPermissionCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpPermissionCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeePermissionService, dialog) {
        super();
        this.employeePermissionService = employeePermissionService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeePermissionInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeePermissionInfo = null;
        this.employeePermissionService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.employeePermissionInfo = res.data;
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_permission_dialog_emp_permission_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpPermissionDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpPermissionCardComponent.ɵfac = function EmpPermissionCardComponent_Factory(t) { return new (t || EmpPermissionCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_permission_service__WEBPACK_IMPORTED_MODULE_3__.EmployeePermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpPermissionCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpPermissionCardComponent, selectors: [["emp-permission-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "permission", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], [4, "ngIf", "ngIfElse"], ["noData", ""], [4, "ngFor", "ngForOf"], [1, "rowItem"], [1, "row"], [1, "col-6"], [1, "col-6", "text-center", "mb-2"], [1, "table", "m-0", "smalltable", 2, "margin-top", "0 !important"], [1, "text-muted"], ["label", "permission", 3, "value"], [3, "rowNo"]], template: function EmpPermissionCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpPermissionCardComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpPermissionCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGVybWlzc2lvbi1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 68837:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-balances/emp-permission/emp-permission-dialog/emp-permission-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpPermissionDialogComponent": () => (/* binding */ EmpPermissionDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-permission.service */ 55672);
/* harmony import */ var app_attendance_setup_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/attendance-setup/services/permissions.service */ 60927);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmpPermissionDialogComponent_reset_form_btn_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpPermissionDialogComponent_reset_form_btn_29_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function EmpPermissionDialogComponent_app_material_table_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function EmpPermissionDialogComponent_app_material_table_30_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.employeePermissionToEdit($event)); })("deleteRow", function EmpPermissionDialogComponent_app_material_table_30_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpPermissionDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeePermissionService, permissionTypeService, data, dialogRef) {
        super();
        this.employeePermissionService = employeePermissionService;
        this.permissionTypeService = permissionTypeService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "permission",
            "startDate",
            "endDate",
            "balance",
            "used",
            "remaining",
            "actions",
        ];
        this.optionalColomns = [
            "permissionTaken",
            "newHireBalance",
            "newHireCloseDateBalance",
        ];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            permissionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            endDate: [null],
            balance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            used: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            remaining: [null],
            permissionTaken: [null],
            newHireBalance: [null],
            newHireCloseDateBalance: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("startDate", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllPermissionTypes();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeePermissionService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                permissionId: this.form.value.permissionId,
                startDate: this.form.value.startDate,
                endDate: this.form.value.endDate,
                balance: this.form.value.balance,
                used: this.form.value.used,
                permissionTaken: this.form.value.permissionTaken,
                newHireBalance: this.form.value.newHireBalance,
                newHireCloseDateBalance: this.form.value.newHireCloseDateBalance,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeePermissionService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeePermissionService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeePermissionToEdit(employeePermissionInfo) {
        this.form.patchValue(employeePermissionInfo);
        // console.log(this.form.value);
    }
    onDelete(employeePermissionInfo) {
        let msg = this.msgTranslate(employeePermissionInfo.permission);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeePermissionInfo);
        });
    }
    delete(employeePermissionInfo) {
        this.showLoading();
        this.employeePermissionService
            .Delete(employeePermissionInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeePermissionInfo.id == this.formCtrls.id.value)
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
    getAllPermissionTypes() {
        this.permissionTypeService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.permissionTypeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmpPermissionDialogComponent.ɵfac = function EmpPermissionDialogComponent_Factory(t) { return new (t || EmpPermissionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_permission_service__WEBPACK_IMPORTED_MODULE_3__.EmployeePermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_attendance_setup_services_permissions_service__WEBPACK_IMPORTED_MODULE_4__.PermissionTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef)); };
EmpPermissionDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EmpPermissionDialogComponent, selectors: [["emp-permission-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 30, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "permission", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "permissionType", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], ["label", "balance", "type", "number", 3, "control", "submitted"], ["label", "used", "type", "number", 3, "control", "submitted"], ["label", "remaining", "type", "number", 3, "control", "submitted", "disabled"], ["label", "permissionTaken", "type", "number", 3, "control", "submitted"], ["label", "newHireBalance", "type", "number", 3, "control", "submitted"], ["label", "newHireCloseDateBalance", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpPermissionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpPermissionDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "app-datepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "submit-btn", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function EmpPermissionDialogComponent_Template_submit_btn_onClick_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, EmpPermissionDialogComponent_reset_form_btn_29_Template, 1, 0, "reset-form-btn", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, EmpPermissionDialogComponent_app_material_table_30_Template, 1, 7, "app-material-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "mat-dialog-actions", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpPermissionDialogComponent_Template_button_click_32_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.permissionId)("submitted", ctx.submitted)("List", ctx.permissionTypeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.balance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.used)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.remaining)("submitted", ctx.submitted)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.permissionTaken)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.newHireBalance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.newHireCloseDateBalance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](34, 28, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGVybWlzc2lvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76816:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-balances/emp-vacation/emp-vacation-card/emp-vacation-card.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpVacationCardComponent": () => (/* binding */ EmpVacationCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _emp_vacation_dialog_emp_vacation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-vacation-dialog/emp-vacation-dialog.component */ 92915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_vacation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-vacation.service */ 40875);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function EmpVacationCardComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 11)(9, "div")(10, "table", 12)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vacation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, vacation_r7.vacation)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vacation_r7.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vacation_r7.used);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](vacation_r7.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", vacation_r7.startDate, " - ", vacation_r7.endDate, " ");
} }
function EmpVacationCardComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpVacationCardComponent_div_0_ng_container_3_ng_container_1_Template, 29, 10, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.employeeVacationInfo);
} }
function EmpVacationCardComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
} }
function EmpVacationCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpVacationCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EmpVacationCardComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EmpVacationCardComponent_div_0_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeVacationInfo == null ? null : ctx_r0.employeeVacationInfo.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.employeeVacationInfo == null ? null : ctx_r0.employeeVacationInfo.length) > 0)("ngIfElse", _r4);
} }
function EmpVacationCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpVacationCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeVacationService, dialog) {
        super();
        this.employeeVacationService = employeeVacationService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeVacationInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeVacationInfo = null;
        this.employeeVacationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.employeeVacationInfo = res.data;
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_vacation_dialog_emp_vacation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpVacationDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpVacationCardComponent.ɵfac = function EmpVacationCardComponent_Factory(t) { return new (t || EmpVacationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_vacation_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeVacationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpVacationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpVacationCardComponent, selectors: [["emp-vacation-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "vacation", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], [4, "ngIf", "ngIfElse"], ["noData", ""], [4, "ngFor", "ngForOf"], [1, "rowItem"], [1, "row"], [1, "col-6"], [1, "col-6", "text-center", "mb-2"], [1, "table", "m-0", "smalltable", 2, "margin-top", "0 !important"], [1, "text-muted"], ["label", "vacation", 3, "value"], [3, "rowNo"]], template: function EmpVacationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpVacationCardComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpVacationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtdmFjYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92915:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-balances/emp-vacation/emp-vacation-dialog/emp-vacation-dialog.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpVacationDialogComponent": () => (/* binding */ EmpVacationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_vacation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-vacation.service */ 40875);
/* harmony import */ var app_attendance_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/attendance-setup/services/vacation/vacation.service */ 78292);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmpVacationDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpVacationDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function EmpVacationDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function EmpVacationDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.employeeVacationToEdit($event)); })("deleteRow", function EmpVacationDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpVacationDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeVacationService, vacationService, data, dialogRef) {
        super();
        this.employeeVacationService = employeeVacationService;
        this.vacationService = vacationService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "vacation",
            "startDate",
            "endDate",
            "balance",
            "used",
            "remaining",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            vacationId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            endDate: [null],
            balance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            used: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("startDate", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllVacationTypes();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeVacationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                vacationId: this.form.value.vacationId,
                startDate: this.form.value.startDate,
                endDate: this.form.value.endDate,
                balance: this.form.value.balance,
                used: this.form.value.used,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeVacationService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeVacationService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeVacationToEdit(employeeVacationInfo) {
        this.form.patchValue(employeeVacationInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeVacationInfo) {
        let msg = this.msgTranslate(employeeVacationInfo.vacation);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeVacationInfo);
        });
    }
    delete(employeeVacationInfo) {
        this.showLoading();
        this.employeeVacationService
            .Delete(employeeVacationInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeVacationInfo.id == this.formCtrls.id.value)
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
    getAllVacationTypes() {
        this.vacationService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.vacationTypeList = res.data.map((item) => item.att_Vacation);
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmpVacationDialogComponent.ɵfac = function EmpVacationDialogComponent_Factory(t) { return new (t || EmpVacationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_vacation_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeVacationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_attendance_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_4__.VacationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef)); };
EmpVacationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EmpVacationDialogComponent, selectors: [["emp-vacation-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 21, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "vacation", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "vacationType", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], ["label", "balance", "type", "number", 3, "control", "submitted"], ["label", "used", "type", "number", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpVacationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpVacationDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function EmpVacationDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, EmpVacationDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, EmpVacationDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-dialog-actions", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpVacationDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.vacationId)("submitted", ctx.submitted)("List", ctx.vacationTypeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.balance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.used)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 19, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtdmFjYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 21918:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-balances/employee-balances-core/employee-balances-core.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeBalancesCoreComponent": () => (/* binding */ EmployeeBalancesCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_vacation_emp_vacation_card_emp_vacation_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-vacation/emp-vacation-card/emp-vacation-card.component */ 76816);
/* harmony import */ var _emp_permission_emp_permission_card_emp_permission_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-permission/emp-permission-card/emp-permission-card.component */ 43996);








function EmployeeBalancesCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "emp-vacation-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmployeeBalancesCoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "emp-permission-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
class EmployeeBalancesCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_balances_tab);
        console.log("balances_info", this.allowedSections);
    }
}
EmployeeBalancesCoreComponent.ɵfac = function EmployeeBalancesCoreComponent_Factory(t) { return new (t || EmployeeBalancesCoreComponent)(); };
EmployeeBalancesCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmployeeBalancesCoreComponent, selectors: [["employee-balances-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 5, consts: [[1, "row"], [1, "col-12"], ["title", "employeeBalances", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmployeeBalancesCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EmployeeBalancesCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmployeeBalancesCoreComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_vacation_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_permission_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _emp_vacation_emp_vacation_card_emp_vacation_card_component__WEBPACK_IMPORTED_MODULE_3__.EmpVacationCardComponent, _emp_permission_emp_permission_card_emp_permission_card_component__WEBPACK_IMPORTED_MODULE_4__.EmpPermissionCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1iYWxhbmNlcy1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 70923:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-career/emp-career-core/emp-career-core.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeCareerCoreComponent": () => (/* binding */ EmployeeCareerCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_education_emp_education_card_emp_education_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-education/emp-education-card/emp-education-card.component */ 36355);
/* harmony import */ var _emp_work_experience_emp_work_experience_card_emp_work_experience_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-work-experience/emp-work-experience-card/emp-work-experience-card.component */ 5760);








function EmployeeCareerCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "emp-education-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmployeeCareerCoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "emp-work-experience-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
class EmployeeCareerCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_career_tab);
    }
}
EmployeeCareerCoreComponent.ɵfac = function EmployeeCareerCoreComponent_Factory(t) { return new (t || EmployeeCareerCoreComponent)(); };
EmployeeCareerCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmployeeCareerCoreComponent, selectors: [["emp-career-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 5, consts: [[1, "row"], [1, "col-12"], ["title", "career", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmployeeCareerCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EmployeeCareerCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmployeeCareerCoreComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_education_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_work_experience_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _emp_education_emp_education_card_emp_education_card_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeEducationCardComponent, _emp_work_experience_emp_work_experience_card_emp_work_experience_card_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeWorkExperienceCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY2FyZWVyLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36355:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-career/emp-education/emp-education-card/emp-education-card.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeEducationCardComponent": () => (/* binding */ EmployeeEducationCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_education_dialog_emp_education_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-education-dialog/emp-education-dialog.component */ 41864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_education_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-education.service */ 42501);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmployeeEducationCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeeEducationCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9)(8, "card-row-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.major);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.startDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.endDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeEducationInfo == null ? null : ctx_r0.employeeEducationInfo.grade);
} }
function EmployeeEducationCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 6);
} }
class EmployeeEducationCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeEducationService, dialog) {
        super();
        this.employeeEducationService = employeeEducationService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeEducationInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeEducationInfo = null;
        this.employeeEducationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeEducationInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_education_dialog_emp_education_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeEducationDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmployeeEducationCardComponent.ɵfac = function EmployeeEducationCardComponent_Factory(t) { return new (t || EmployeeEducationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_education_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeEducationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeeEducationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeeEducationCardComponent, selectors: [["emp-education-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "education", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "institution", 3, "value"], ["label", "major", 3, "value"], ["label", "degree", 3, "value"], ["label", "startDate", 3, "value", "isDate"], ["label", "endDate", 3, "value", "isDate"], ["label", "gpa/grade", 3, "value"], [3, "rowNo"]], template: function EmployeeEducationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeeEducationCardComponent_div_0_Template, 9, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeeEducationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZWR1Y2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 41864:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-career/emp-education/emp-education-dialog/emp-education-dialog.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeEducationDialogComponent": () => (/* binding */ EmployeeEducationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_education_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-education.service */ 42501);
/* harmony import */ var app_hr_setup_services_institution_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/institution.service */ 583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmployeeEducationDialogComponent_reset_form_btn_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeEducationDialogComponent_reset_form_btn_23_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmployeeEducationDialogComponent_app_material_table_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmployeeEducationDialogComponent_app_material_table_24_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.employeeEducationToEdit($event)); })("deleteRow", function EmployeeEducationDialogComponent_app_material_table_24_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeEducationDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeEducationService, institutionService, data, dialogRef) {
        super();
        this.employeeEducationService = employeeEducationService;
        this.institutionService = institutionService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "institution",
            "major",
            "degree",
            "startDate",
            "endDate",
            "grade",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            institutionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            majorId: [null],
            degreeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            startDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.date]],
            endDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.date]],
            gradeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("startDate", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllInstitutions();
            this.getAllMajors();
            this.getAllDegrees();
            this.getAllGrades();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeEducationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                institutionId: this.form.value.institutionId,
                majorId: this.form.value.majorId,
                degreeId: this.form.value.degreeId,
                startDate: this.form.value.startDate,
                endData: this.form.value.endData,
                gradeId: this.form.value.gradeId,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeEducationService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeEducationService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeEducationToEdit(employeeEducationInfo) {
        this.form.patchValue(employeeEducationInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeEducationInfo) {
        let msg = this.msgTranslate(employeeEducationInfo.institution);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeEducationInfo);
        });
    }
    delete(employeeEducationInfo) {
        this.showLoading();
        this.employeeEducationService
            .Delete(employeeEducationInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeEducationInfo.id == this.formCtrls.id.value)
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
    getAllInstitutions() {
        this.institutionService
            .getALL()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.institutionList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getAllMajors() {
        this.employeeEducationService
            .getAllMajors()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.majorList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getAllDegrees() {
        this.employeeEducationService
            .getAllDegrees()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.degreeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getAllGrades() {
        this.employeeEducationService
            .getAllGrades()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.gradeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmployeeEducationDialogComponent.ɵfac = function EmployeeEducationDialogComponent_Factory(t) { return new (t || EmployeeEducationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_education_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeEducationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_hr_setup_services_institution_service__WEBPACK_IMPORTED_MODULE_4__.InstitutionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef)); };
EmployeeEducationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmployeeEducationDialogComponent, selectors: [["app-employee-education-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 32, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "education", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "institution", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "major", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "degree", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], ["label", "grade", 3, "control", "submitted", "List", "filter", "appendTo"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeEducationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeEducationDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-prime-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-prime-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "app-prime-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmployeeEducationDialogComponent_Template_submit_btn_onClick_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, EmployeeEducationDialogComponent_reset_form_btn_23_Template, 1, 0, "reset-form-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, EmployeeEducationDialogComponent_app_material_table_24_Template, 1, 7, "app-material-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "mat-dialog-actions", 18)(26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeEducationDialogComponent_Template_button_click_26_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.institutionId)("submitted", ctx.submitted)("List", ctx.institutionList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.majorId)("submitted", ctx.submitted)("List", ctx.majorList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.degreeId)("submitted", ctx.submitted)("List", ctx.degreeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.gradeId)("submitted", ctx.submitted)("List", ctx.gradeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 30, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZWR1Y2F0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5760:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-career/emp-work-experience/emp-work-experience-card/emp-work-experience-card.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeWorkExperienceCardComponent": () => (/* binding */ EmployeeWorkExperienceCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_work_experience_dialog_employee_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-work-experience-dialog/employee-work-experience-dialog.component */ 13619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_work_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-work-experience.service */ 80194);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmployeeWorkExperienceCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeeWorkExperienceCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.startDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkExperienceInfo == null ? null : ctx_r0.employeeWorkExperienceInfo.endDate)("isDate", true);
} }
function EmployeeWorkExperienceCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 5);
} }
class EmployeeWorkExperienceCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeWorkExperienceService, dialog) {
        super();
        this.employeeWorkExperienceService = employeeWorkExperienceService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeWorkExperienceInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeWorkExperienceInfo = null;
        this.employeeWorkExperienceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeWorkExperienceInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_work_experience_dialog_employee_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeWorkExperienceDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmployeeWorkExperienceCardComponent.ɵfac = function EmployeeWorkExperienceCardComponent_Factory(t) { return new (t || EmployeeWorkExperienceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_work_experience_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeWorkExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeeWorkExperienceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeeWorkExperienceCardComponent, selectors: [["emp-work-experience-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "workExperience", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "companyName", 3, "value"], ["label", "department", 3, "value"], ["label", "position", 3, "value"], ["label", "startDate", 3, "value", "isDate"], ["label", "endDate", 3, "value", "isDate"], [3, "rowNo"]], template: function EmployeeWorkExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeeWorkExperienceCardComponent_div_0_Template, 8, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeeWorkExperienceCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtd29yay1leHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13619:
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-career/emp-work-experience/emp-work-experience-dialog/employee-work-experience-dialog.component.ts ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeWorkExperienceDialogComponent": () => (/* binding */ EmployeeWorkExperienceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_work_experience_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-work-experience.service */ 80194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function EmployeeWorkExperienceDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmployeeWorkExperienceDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmployeeWorkExperienceDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmployeeWorkExperienceDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.employeeWorkExperienceToEdit($event)); })("deleteRow", function EmployeeWorkExperienceDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeWorkExperienceDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeWorkExperienceService, data, dialogRef) {
        super();
        this.employeeWorkExperienceService = employeeWorkExperienceService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "companyName",
            "department",
            "position",
            "startDate",
            "endDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            companyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            department: [null],
            position: [null],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.date]],
            endDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.date]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("startDate", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeWorkExperienceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                companyName: this.form.value.companyName,
                department: this.form.value.department,
                position: this.form.value.position,
                startDate: this.form.value.startDate,
                endData: this.form.value.endData,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeWorkExperienceService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeWorkExperienceService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeWorkExperienceToEdit(employeeWorkExperienceInfo) {
        this.form.patchValue(employeeWorkExperienceInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeWorkExperienceInfo) {
        let msg = this.msgTranslate(employeeWorkExperienceInfo.companyName);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeWorkExperienceInfo);
        });
    }
    delete(employeeWorkExperienceInfo) {
        this.showLoading();
        this.employeeWorkExperienceService
            .Delete(employeeWorkExperienceInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeWorkExperienceInfo.id == this.formCtrls.id.value)
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
EmployeeWorkExperienceDialogComponent.ɵfac = function EmployeeWorkExperienceDialogComponent_Factory(t) { return new (t || EmployeeWorkExperienceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_work_experience_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeWorkExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
EmployeeWorkExperienceDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmployeeWorkExperienceDialogComponent, selectors: [["app-employee-work-experience-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 18, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "workExperience", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "companyName", 3, "control", "submitted"], ["label", "department", 3, "control", "submitted"], ["label", "position", 3, "control", "submitted"], ["label", "startDate", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeWorkExperienceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmployeeWorkExperienceDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function EmployeeWorkExperienceDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, EmployeeWorkExperienceDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, EmployeeWorkExperienceDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-dialog-actions", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmployeeWorkExperienceDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.companyName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.department)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.position)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 16, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS13b3JrLWV4cGVyaWVuY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 59330:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-general-info/emp-general-info-card/emp-general-info-card.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeGeneralInfoCardComponent": () => (/* binding */ EmployeeGeneralInfoCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_general_info_dialog_emp_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-general-info-dialog/emp-general-info-dialog.component */ 71125);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/personnel-setup/services/employees/employees.service */ 20408);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../card-shared-components/card-row-item/card-row-item.component */ 58588);












function EmployeeGeneralInfoCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function EmployeeGeneralInfoCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9)(8, "card-row-item", 10)(9, "card-row-item", 11)(10, "card-row-item", 12)(11, "card-row-item", 13)(12, "card-row-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canMadeAction", true)("cardId", ctx_r0.employeeId)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.companyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.ar_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.en_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.hireDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.msgTranslate(ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.core_Gender == null ? null : ctx_r0.employeeInfo.core_Gender.ar_Name, ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.core_Gender == null ? null : ctx_r0.employeeInfo.core_Gender.en_NAme));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.msgTranslate(ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.core_Religion == null ? null : ctx_r0.employeeInfo.core_Religion.ar_Name, ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.core_Religion == null ? null : ctx_r0.employeeInfo.core_Religion.en_Name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.nationalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeInfo == null ? null : ctx_r0.employeeInfo.companies);
} }
function EmployeeGeneralInfoCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 8);
} }
class EmployeeGeneralInfoCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeesService, dialog) {
        super();
        this.employeesService = employeesService;
        this.dialog = dialog;
        this.changeEmployeeId = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.isLoaded = false;
        this.isCanMadeAction = false;
    }
    ngOnInit() {
        // this.authService.BusinessList$.subscribe((val) => {
        // 	this.businessAndCompanyList = val;
        // });
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (
    //     changes.employeeId.currentValue > 0 &&
    //     this.businessId > 0 &&
    //     this.companyId > 0
    //   )
    //     this.getEmployeeById();
    // }
    onChangeBusinessAndCompanyId() {
        this.employeeInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getEmployeeById();
        else
            this.isLoaded = true;
    }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_3__.ViewsManager.emp_general_info_tab);
    }
    getEmployeeById() {
        this.employeeInfo = null;
        this.employeesService.getById(this.employeeId).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        if (!this.businessCompanyParams.CompanyID) {
            this.warning("chooseCompanyId");
            return;
        }
        let dialogRef = this.dialog.open(_emp_general_info_dialog_emp_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeGeneralInfoDialogComponent, {
            data: {
                employee: this.employeeInfo,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        });
        // after add employee
        dialogRef.componentInstance.afterAdd.subscribe((employeeInfo) => {
            this.changeEmployeeId.emit(employeeInfo.id);
            let url = `/personnel-setup/${this.moduleId}/employees/edit/${employeeInfo.id}`;
            this.navigateTo(url);
            this.employeeInfo = employeeInfo;
        });
        // after close dialog
        dialogRef.afterClosed().subscribe((updated) => {
            if (updated)
                this.getEmployeeById();
        });
    }
}
EmployeeGeneralInfoCardComponent.ɵfac = function EmployeeGeneralInfoCardComponent_Factory(t) { return new (t || EmployeeGeneralInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_4__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
EmployeeGeneralInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EmployeeGeneralInfoCardComponent, selectors: [["employee-general-info-card"]], inputs: { employeeId: "employeeId" }, outputs: { changeEmployeeId: "changeEmployeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "generalInfo", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "employeeCode", 3, "value"], ["label", "CompanyCode", 3, "value"], ["label", "ar_Name", 3, "value"], ["label", "en_Name", 3, "value"], ["label", "hireDate", 3, "value", "isDate"], ["label", "gender", 3, "value"], ["label", "religion", 3, "value"], ["label", "nationality", 3, "value"], ["label", "nationalid", 3, "value"], ["label", "SharedCompanies", 3, "value"], [3, "rowNo"]], template: function EmployeeGeneralInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, EmployeeGeneralInfoCardComponent_div_0_Template, 13, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmployeeGeneralInfoCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZ2VuZXJhbC1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 78392:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employee-general-info/emp-general-info-core/emp-general-info-core.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpGeneralInfoCoreComponent": () => (/* binding */ EmpGeneralInfoCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_general_info_card_emp_general_info_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-general-info-card/emp-general-info-card.component */ 59330);







function EmpGeneralInfoCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "employee-general-info-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
class EmpGeneralInfoCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_general_info_tab);
    }
}
EmpGeneralInfoCoreComponent.ɵfac = function EmpGeneralInfoCoreComponent_Factory(t) { return new (t || EmpGeneralInfoCoreComponent)(); };
EmpGeneralInfoCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmpGeneralInfoCoreComponent, selectors: [["emp-general-info-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [[1, "row"], [1, "col-12"], ["title", "generalInfo", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmpGeneralInfoCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EmpGeneralInfoCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_general_info_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _emp_general_info_card_emp_general_info_card_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeGeneralInfoCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZ2VuZXJhbC1pbmZvLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89535:
/*!***************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employees-index/employees-index.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesIndexComponent": () => (/* binding */ EmployeesIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/personnel-setup/services/employees/employees.service */ 20408);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/dropdowns/employee-dropdown/employee-dropdown.component */ 99629);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function EmployeesIndexComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 6)(1, "div", 0)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-employee-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.simpleSearchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r0.simpleSearchFormCtrls.employeeId)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r0.simpleSearchFormCtrls.orgTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r0.simpleSearchFormCtrls.orgId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, "clear"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 9, "General.search"), " ");
} }
function EmployeesIndexComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class EmployeesIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeesService) {
        super();
        this.employeesService = employeesService;
        this.mandatoryColomns = ["Ser", "id", "code", "en_Name", "ar_Name", "actions"];
        this.optionalColomns = [
            "jobTitleName",
            "organization",
            "email",
            "status",
            "statusProperty",
            "address",
            "contact",
            "isActive",
        ];
        this.isLoaded = false;
        // collapsed --> true >> closed & false >> opened
        this.isSimpleExpanded = true;
        this.isAdvancedExpanded = true;
        this.mergingTableColumn = {
            isMerge: true,
            columnImgName: "img",
            columnTextName: "en_Name",
        };
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) this.getList(this.currentPage);
        this.simpleSearchForm = this.fb.group({
            employeeId: [null],
            orgTypeId: [null],
            orgId: [null],
        });
        this.advancedSearchForm = this.fb.group({
            name: [null],
            operator: [null],
            value: [null],
        });
    }
    get simpleSearchFormCtrls() {
        return this.simpleSearchForm.controls;
    }
    get advancedSearchFormCtrls() {
        return this.advancedSearchForm.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(null);
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
        this.employeesService
            .getListCard(params)
            .subscribe((res) => {
            if (res.message.messageType == 1) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                res.data.map((employee) => {
                    employee.jobTitleName = this.msgTranslate(employee.jobTitleNameAr, employee.jobTitleName);
                    employee.organization = this.msgTranslate(employee.organizationAr, employee.organization);
                    employee.status = this.msgTranslate(employee.statusAr, employee.status);
                    employee.statusProperty = this.msgTranslate(employee.statusPropertyAr, employee.statusProperty);
                    employee.contact = employee.contacts.map((contact) => contact.value).join(", ");
                    employee.address = employee.addresses.join(", ");
                    employee.img = employee.img == "/" ? "" : employee.img;
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(res.data);
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onDelete(employee) {
        let msg = this.msgTranslate(employee.ar_Name, employee.en_Name);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employee);
        });
    }
    delete(employee) {
        this.showLoading();
        this.employeesService.Delete(employee.id).subscribe((res) => {
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
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    //////////// search
    onAction(selectedAction) {
        // console.log(selectedAction);
        if (selectedAction?.name == "simpleSearch")
            this.toggleSimpleSearchPanel();
        if (selectedAction?.name == "advancedSearch")
            this.toggleAdvancedSearchPanel();
    }
    toggleSimpleSearchPanel() {
        this.isAdvancedExpanded = true;
        this.isSimpleExpanded = !this.isSimpleExpanded;
    }
    toggleAdvancedSearchPanel() {
        this.isSimpleExpanded = true;
        this.isAdvancedExpanded = !this.isAdvancedExpanded;
    }
}
EmployeesIndexComponent.ɵfac = function EmployeesIndexComponent_Factory(t) { return new (t || EmployeesIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employees_service__WEBPACK_IMPORTED_MODULE_1__.EmployeesService)); };
EmployeesIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EmployeesIndexComponent, selectors: [["app-employees-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 16, consts: [[1, "row"], [1, "col-12"], ["title", "employees", 3, "globalFunctions", "action"], [3, "toggleable", "collapsed", "showHeader"], ["pTemplate", "content"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "mergeImgWithName", "onChangePage", "deleteRow"], [3, "formGroup"], [1, "col-md-4", "col-12"], [3, "control", "filter"], ["label", "org", 3, "control"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", "float-right", "btn-sm"], ["mat-raised-button", "", 1, "btn", "btn-info", "bg-light-info", "float-right", "mx-2", "btn-sm"], [1, "clearfix"]], template: function EmployeesIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card")(4, "mat-card-title")(5, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function EmployeesIndexComponent_Template_page_title_action_5_listener($event) { return ctx.onAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EmployeesIndexComponent_ng_template_7_Template, 15, 11, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EmployeesIndexComponent_ng_template_9_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-material-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function EmployeesIndexComponent_Template_app_material_table_onChangePage_10_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function EmployeesIndexComponent_Template_app_material_table_deleteRow_10_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("toggleable", true)("collapsed", true)("showHeader", false)("collapsed", ctx.isSimpleExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("toggleable", true)("collapsed", true)("showHeader", false)("collapsed", ctx.isAdvancedExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("mergeImgWithName", ctx.mergingTableColumn);
    } }, dependencies: [_shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeDropdownComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".p-panel .p-panel-content {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlcy1pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJlbXBsb3llZXMtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5wLXBhbmVsIC5wLXBhbmVsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 63042:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-custodies/emp-custodies-card/emp-custodies-card.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpCustodiesCardComponent": () => (/* binding */ EmpCustodiesCardComponent)
/* harmony export */ });
/* harmony import */ var _emp_custodies_dialog_emp_custodies_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emp-custodies-dialog/emp-custodies-dialog.component */ 9228);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_custodies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-custodies.service */ 29741);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpCustodiesCardComponent_div_0_ng_container_3_card_row_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 8);
} if (rf & 2) {
    const custody_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", custody_r7.country)("value", custody_r7.custodies);
} }
function EmpCustodiesCardComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpCustodiesCardComponent_div_0_ng_container_3_card_row_item_1_Template, 1, 2, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.employeeCustodyInfo);
} }
function EmpCustodiesCardComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
} }
function EmpCustodiesCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpCustodiesCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EmpCustodiesCardComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EmpCustodiesCardComponent_div_0_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeCustodyInfo == null ? null : ctx_r0.employeeCustodyInfo.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.employeeCustodyInfo == null ? null : ctx_r0.employeeCustodyInfo.length) > 0)("ngIfElse", _r4);
} }
function EmpCustodiesCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpCustodiesCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeCustodiesService, dialog) {
        super();
        this.employeeCustodiesService = employeeCustodiesService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeCustodyInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeCustodyInfo = null;
        this.employeeCustodiesService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.employeeCustodyInfo = res.data;
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_custodies_dialog_emp_custodies_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EmpCustodiesDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpCustodiesCardComponent.ɵfac = function EmpCustodiesCardComponent_Factory(t) { return new (t || EmpCustodiesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_custodies_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeCustodiesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpCustodiesCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpCustodiesCardComponent, selectors: [["app-emp-custodies-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "custodies", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "label", "value", 4, "ngFor", "ngForOf"], [3, "label", "value"], ["label", "custodies", 3, "value"], [3, "rowNo"]], template: function EmpCustodiesCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpCustodiesCardComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpCustodiesCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY3VzdG9kaWVzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9228:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-custodies/emp-custodies-dialog/emp-custodies-dialog.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpCustodiesDialogComponent": () => (/* binding */ EmpCustodiesDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_custodies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-custodies.service */ 29741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_dropdowns_custodies_dropdown_custodies_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/custodies-dropdown/custodies-dropdown.component */ 5750);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function EmpCustodiesDialogComponent_reset_form_btn_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpCustodiesDialogComponent_reset_form_btn_19_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmpCustodiesDialogComponent_app_material_table_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmpCustodiesDialogComponent_app_material_table_20_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.employeeCustodyToEdit($event)); })("deleteRow", function EmpCustodiesDialogComponent_app_material_table_20_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpCustodiesDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeCustodiesService, data, dialogRef) {
        super();
        this.employeeCustodiesService = employeeCustodiesService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "custodies",
            "froM_DATE",
            "endDate",
            "note",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            custodyId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            froM_DATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            endDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            note: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("froM_DATE", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeCustodiesService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                custodyId: this.form.value.custodyId,
                froM_DATE: this.form.value.froM_DATE,
                endDate: this.form.value.endDate,
                note: this.form.value.note,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeCustodiesService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeCustodiesService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeCustodyToEdit(employeeCustodyInfo) {
        this.form.patchValue(employeeCustodyInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeCustodyInfo) {
        let msg = this.msgTranslate(employeeCustodyInfo.custodies);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeCustodyInfo);
        });
    }
    delete(employeeCustodyInfo) {
        this.showLoading();
        this.employeeCustodiesService
            .Delete(employeeCustodyInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeCustodyInfo.id == this.formCtrls.id.value)
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
EmpCustodiesDialogComponent.ɵfac = function EmpCustodiesDialogComponent_Factory(t) { return new (t || EmpCustodiesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_custodies_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeCustodiesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
EmpCustodiesDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmpCustodiesDialogComponent, selectors: [["app-emp-custodies-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 18, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "custodies", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "appendTo"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], ["label", "note", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpCustodiesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpCustodiesDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-custodies-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmpCustodiesDialogComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, EmpCustodiesDialogComponent_reset_form_btn_19_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, EmpCustodiesDialogComponent_app_material_table_20_Template, 1, 7, "app-material-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "mat-dialog-actions", 16)(22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpCustodiesDialogComponent_Template_button_click_22_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.custodyId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.froM_DATE)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.note)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 16, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _shared_components_dropdowns_custodies_dropdown_custodies_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.CustodiesDropdownComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY3VzdG9kaWVzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 78471:
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-hiring-documents/emp-hiring-documents-card/emp-hiring-documents-card.component.ts ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpHiringDocumentsCardComponent": () => (/* binding */ EmpHiringDocumentsCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _emp_hiring_documents_dialog_emp_hiring_documents_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-hiring-documents-dialog/emp-hiring-documents-dialog.component */ 10205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_hiring_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-hiring-document.service */ 38088);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " --- ");
} }
function EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_p_7_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_ng_template_8_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const hiringDocument_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, hiringDocument_r7 == null ? null : hiringDocument_r7.documentName));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", hiringDocument_r7 == null ? null : hiringDocument_r7.file)("ngIfElse", _r9);
} }
function EmpHiringDocumentsCardComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EmpHiringDocumentsCardComponent_div_0_ng_container_3_div_2_Template, 10, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r3.hiringDocument.documentName)("value", ctx_r3.hiringDocument.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.employeeHiringDocumentInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.hiringDocument[0].documentsCompletionPercentage);
} }
function EmpHiringDocumentsCardComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 15)(1, "card-row-item", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
} }
function EmpHiringDocumentsCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpHiringDocumentsCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EmpHiringDocumentsCardComponent_div_0_ng_container_3_Template, 4, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EmpHiringDocumentsCardComponent_div_0_ng_template_4_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeHiringDocumentInfo == null ? null : ctx_r0.employeeHiringDocumentInfo.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.employeeHiringDocumentInfo == null ? null : ctx_r0.employeeHiringDocumentInfo.length) > 0)("ngIfElse", _r4);
} }
function EmpHiringDocumentsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpHiringDocumentsCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeHiringDocumentService, dialog) {
        super();
        this.employeeHiringDocumentService = employeeHiringDocumentService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeHiringDocumentInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeHiringDocumentInfo = null;
        this.employeeHiringDocumentService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.employeeHiringDocumentInfo = res.data;
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_hiring_documents_dialog_emp_hiring_documents_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpHiringDocumentsDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpHiringDocumentsCardComponent.ɵfac = function EmpHiringDocumentsCardComponent_Factory(t) { return new (t || EmpHiringDocumentsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_hiring_document_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeHiringDocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpHiringDocumentsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpHiringDocumentsCardComponent, selectors: [["emp-hiring-documents-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "hiringDocuments", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "label", "value"], ["class", "rowItem", 4, "ngFor", "ngForOf"], ["label", "documentsCompletionPercentage", 3, "value"], [1, "rowItem"], [1, "row"], [1, "col-6"], ["noAttach", ""], [1, "fal", "fa-file-alt"], ["label", "hiringDocuments", 3, "value"], [3, "rowNo"]], template: function EmpHiringDocumentsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpHiringDocumentsCardComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpHiringDocumentsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtaGlyaW5nLWRvY3VtZW50cy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 10205:
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-hiring-documents/emp-hiring-documents-dialog/emp-hiring-documents-dialog.component.ts ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpHiringDocumentsDialogComponent": () => (/* binding */ EmpHiringDocumentsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_hiring_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-hiring-document.service */ 38088);
/* harmony import */ var app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hr-setup/services/governorate.service */ 63733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/file-input/file-input.component */ 82158);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function EmpHiringDocumentsDialogComponent_reset_form_btn_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpHiringDocumentsDialogComponent_reset_form_btn_19_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmpHiringDocumentsDialogComponent_app_material_table_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmpHiringDocumentsDialogComponent_app_material_table_20_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.employeeHiringDocumentToEdit($event)); })("deleteRow", function EmpHiringDocumentsDialogComponent_app_material_table_20_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpHiringDocumentsDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeHiringDocumentService, governorateService, data, dialogRef) {
        super();
        this.employeeHiringDocumentService = employeeHiringDocumentService;
        this.governorateService = governorateService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "country",
            "governorate",
            "address",
            "froM_DATE",
            "tO_DATE",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            documentName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            file: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            isHandDelivered: [null],
            notCounted: [null],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany()) {
            this.getAll();
        }
    }
    getAll() {
        this.employeeHiringDocumentService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                documentName: this.form.value.documentName,
                file: this.form.value.file,
                isHandDelivered: this.form.value.isHandDelivered ?? false,
                notCounted: this.form.value.notCounted ?? false,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeHiringDocumentService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeHiringDocumentService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeHiringDocumentToEdit(employeeHiringDocument) {
        this.form.patchValue(employeeHiringDocument);
        // console.log(this.form.value);
    }
    onDelete(employeeHiringDocument) {
        let msg = this.msgTranslate(employeeHiringDocument.documentName);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeHiringDocument);
        });
    }
    delete(employeeHiringDocument) {
        this.showLoading();
        this.employeeHiringDocumentService
            .Delete(employeeHiringDocument.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeHiringDocument.id == this.formCtrls.id.value)
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
EmpHiringDocumentsDialogComponent.ɵfac = function EmpHiringDocumentsDialogComponent_Factory(t) { return new (t || EmpHiringDocumentsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_hiring_document_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeHiringDocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_3__.GovernorateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
EmpHiringDocumentsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmpHiringDocumentsDialogComponent, selectors: [["emp-hiring-documents-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 14, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "hiringDocuments", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-6", "col-sm-6", "col-12"], ["label", "documentName", 3, "control", "submitted"], [1, "col-md-6", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], [3, "control", "submitted"], [1, "col-md-6", "col-12", "mbottom-20", "mtop-14"], ["label", "isHandDelivered", 3, "control"], ["label", "notCounted", 3, "control"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpHiringDocumentsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpHiringDocumentsDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-file-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-check-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmpHiringDocumentsDialogComponent_Template_submit_btn_onClick_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, EmpHiringDocumentsDialogComponent_reset_form_btn_19_Template, 1, 0, "reset-form-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, EmpHiringDocumentsDialogComponent_app_material_table_20_Template, 1, 7, "app-material-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "mat-dialog-actions", 18)(22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpHiringDocumentsDialogComponent_Template_button_click_22_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.documentName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.file)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.isHandDelivered);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.notCounted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 12, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_4__.FileInputComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtaGlyaW5nLWRvY3VtZW50cy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 79079:
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/emp-contract-details-dialog/emp-contract-details-dialog.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpContractDetailsDialogComponent": () => (/* binding */ EmpContractDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var app_personnel_setup_services_employees_employee_contract_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-contract-details.service */ 36983);
/* harmony import */ var app_hr_setup_services_contract_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/contract-type.service */ 24373);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/file-input/file-input.component */ 82158);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function EmpContractDetailsDialogComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmpContractDetailsDialogComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmpContractDetailsDialogComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmpContractDetailsDialogComponent_app_material_table_18_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.employeeContractDetailsToEdit($event)); })("deleteRow", function EmpContractDetailsDialogComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpContractDetailsDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeContractDetailsService, contractTypeService) {
        super();
        this.employeeContractDetailsService = employeeContractDetailsService;
        this.contractTypeService = contractTypeService;
        this.employeeId = 0;
        this.changUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "contractType",
            "start_date",
            "end_date",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            CONTRACT_TYPE_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            start_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            end_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            attachment: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("start_date", "end_date"),
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllContractTypes();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeContractDetailsService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                CONTRACT_TYPE_ID: this.form.value.CONTRACT_TYPE_ID,
                start_date: this.form.value.start_date,
                end_date: this.form.value.end_date,
                attachment: this.form.value.attachment,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeContractDetailsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeContractDetailsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeContractDetailsToEdit(employeeContractDetails) {
        this.form.patchValue(employeeContractDetails);
        // console.log(this.form.value);
    }
    onDelete(employeeContractDetails) {
        let msg = this.msgTranslate(employeeContractDetails.contract);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeContractDetails);
        });
    }
    delete(employeeContractDetails) {
        this.showLoading();
        this.employeeContractDetailsService
            .Delete(employeeContractDetails.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeContractDetails.id == this.formCtrls.id.value)
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
    getAllContractTypes() {
        this.contractTypeService
            .getAll()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.contractTypeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmpContractDetailsDialogComponent.ɵfac = function EmpContractDetailsDialogComponent_Factory(t) { return new (t || EmpContractDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_contract_details_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeContractDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_hr_setup_services_contract_type_service__WEBPACK_IMPORTED_MODULE_4__.ContractTypeService)); };
EmpContractDetailsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmpContractDetailsDialogComponent, selectors: [["app-emp-contract-details-dialog"]], inputs: { employeeId: "employeeId" }, outputs: { changUpdated: "changUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 21, consts: [["dialogContainer", ""], [1, "divider-title"], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "contractType", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "start_date", 3, "control", "submitted"], ["label", "end_date", 3, "control", "submitted"], [1, "col-md-8", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "attachment", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpContractDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", null, 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "form", 2)(7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "app-prime-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-datepicker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-file-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmpContractDetailsDialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, EmpContractDetailsDialogComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, EmpContractDetailsDialogComponent_app_material_table_18_Template, 1, 7, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 19, "contractDetails")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.CONTRACT_TYPE_ID)("submitted", ctx.submitted)("List", ctx.contractTypeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.start_date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.end_date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.attachment)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__.FileInputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY29udHJhY3QtZGV0YWlscy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1018:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/emp-job-data-dialog/emp-job-data-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpJobDataDialogComponent": () => (/* binding */ EmpJobDataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-job-information.service */ 81774);
/* harmony import */ var app_hr_setup_services_emp_job_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hr-setup/services/emp-job-status.service */ 35977);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/organization-by-org-type-dropdown/organization-by-org-type-dropdown.component */ 26511);
/* harmony import */ var _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/job-title-by-org-dropdown/job-title-by-org-dropdown.component */ 28973);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/employee-dropdown/employee-dropdown.component */ 99629);
/* harmony import */ var _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/org-types-dropdown-current-structure/org-types-dropdown-current-structure.component */ 15549);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmpJobDataDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-prime-dropdown", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r1.formCtrls.statusEventID)("submitted", ctx_r1.submitted)("List", ctx_r1.statusEventList)("filter", true)("appendTo", _r0);
} }
function EmpJobDataDialogComponent_reset_form_btn_42_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "reset-form-btn", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function EmpJobDataDialogComponent_reset_form_btn_42_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r4.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function EmpJobDataDialogComponent_app_material_table_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-material-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("editRow", function EmpJobDataDialogComponent_app_material_table_43_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r6.employeeJobDataToEdit($event)); })("deleteRow", function EmpJobDataDialogComponent_app_material_table_43_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isLoaded", ctx_r3.isLoaded)("dataSource", ctx_r3.dataSource)("mandatoryColomns", ctx_r3.mandatoryColomns)("optionalColomns", ctx_r3.optionalColomns)("actions", ctx_r3.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpJobDataDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeJobInformationService, empJobStatusService) {
        super();
        this.employeeJobInformationService = employeeJobInformationService;
        this.empJobStatusService = empJobStatusService;
        this.employeeId = 0;
        this.changUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "contractType",
            "start_date",
            "end_date",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            status_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            statusEventID: [null],
            status_From_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            reasons: [null],
            orgTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            orgId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            orgStartDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            jobId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            counted: [null],
            supervisorId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllStatus();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeJobInformationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                status_ID: this.form.value.status_ID,
                statusEventID: this.form.value.statusEventID,
                status_From_Date: this.form.value.status_From_Date,
                reasons: this.form.value.reasons,
                orgId: this.form.value.orgId,
                orgStartDate: this.form.value.orgStartDate,
                jobId: this.form.value.jobId,
                startDate: this.form.value.startDate,
                counted: this.form.value.counted ?? false,
                supervisorId: this.form.value.supervisorId,
                date: this.form.value.date,
            };
            model.id == 0 ? this.create(model) : this.update(model);
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
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
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
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeJobDataToEdit(employeeJobData) {
        this.form.patchValue(employeeJobData);
        // console.log(this.form.value);
    }
    onDelete(employeeJobData) {
        let msg = this.msgTranslate(employeeJobData.job);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeJobData);
        });
    }
    delete(employeeJobData) {
        this.showLoading();
        this.employeeJobInformationService
            .Delete(employeeJobData.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeJobData.id == this.formCtrls.id.value)
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
    getAllStatus() {
        this.empJobStatusService
            .getAllStatus()
            .subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.statusList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getAllStatusEventByStatusId(values) {
        this.formCtrls.statusEventID.setValue(null);
        let statusId = values.length > 0 ? values[0].id : 0;
        if (statusId > 0) {
            this.showLoading();
            this.empJobStatusService
                .getAllStatusEvents(statusId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                    this.statusEventList = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
            this.formCtrls.statusEventID.enable();
        }
        else
            this.formCtrls.statusEventID.disable();
    }
}
EmpJobDataDialogComponent.ɵfac = function EmpJobDataDialogComponent_Factory(t) { return new (t || EmpJobDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_hr_setup_services_emp_job_status_service__WEBPACK_IMPORTED_MODULE_3__.EmpJobStatusService)); };
EmpJobDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: EmpJobDataDialogComponent, selectors: [["app-emp-job-data-dialog"]], inputs: { employeeId: "employeeId" }, outputs: { changUpdated: "changUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 56, consts: [["dialogContainer", ""], [3, "formGroup"], [1, "divider-title"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "status", 3, "control", "submitted", "List", "filter", "appendTo", "change"], ["class", "col-md-4 col-sm-6 col-12", 4, "ngIf"], ["label", "status_From_Date", 3, "control", "submitted"], ["label", "reasons", 3, "control", "submitted"], [3, "control", "submitted", "filter", "appendTo", "change"], [3, "control", "orgTypeControl", "submitted", "filter", "appendTo"], ["label", "orgStartDate", 3, "control", "submitted"], [3, "control", "organizationControl", "organizationControlRequired", "submitted", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], [1, "col-md-4", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "counted", 3, "control"], ["label", "supervisor", 3, "control", "submitted", "filter", "appendTo"], ["label", "date", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["label", "statusEvent", 3, "control", "submitted", "List", "filter", "appendTo"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpJobDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", null, 0)(2, "form", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "app-prime-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function EmpJobDataDialogComponent_Template_app_prime_dropdown_change_9_listener($event) { return ctx.getAllStatusEventByStatusId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, EmpJobDataDialogComponent_div_10_Template, 2, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "app-datepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "app-org-types-dropdown-current-structure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function EmpJobDataDialogComponent_Template_app_org_types_dropdown_current_structure_change_21_listener($event) { return ctx.getAllStatusEventByStatusId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "app-organization-by-org-type-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](28, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 3)(31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "app-job-title-by-org-dropdown", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](34, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "app-check-box", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](38, "app-employee-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](40, "app-datepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "submit-btn", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClick", function EmpJobDataDialogComponent_Template_submit_btn_onClick_41_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, EmpJobDataDialogComponent_reset_form_btn_42_Template, 1, 0, "reset-form-btn", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, EmpJobDataDialogComponent_app_material_table_43_Template, 1, 7, "app-material-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 44, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 46, "status")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.status_ID)("submitted", ctx.submitted)("List", ctx.statusList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx.statusEventList == null ? null : ctx.statusEventList.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.status_From_Date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.reasons)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 48, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](18, 50, "organizationData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.orgTypeId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.orgId)("orgTypeControl", ctx.formCtrls.orgTypeId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.orgStartDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](28, 52, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](29, 54, "jobData")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.jobId)("organizationControl", ctx.formCtrls.orgId)("organizationControlRequired", true)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.counted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.supervisorId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx.formCtrls.date)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_dropdowns_organization_by_org_type_dropdown_organization_by_org_type_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.OrganizationByOrgTypeDropdownComponent, _shared_components_dropdowns_job_title_by_org_dropdown_job_title_by_org_dropdown_component__WEBPACK_IMPORTED_MODULE_10__.JobTitleByOrgDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_11__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_12__.SubmitBtnComponent, _shared_components_dropdowns_employee_dropdown_employee_dropdown_component__WEBPACK_IMPORTED_MODULE_13__.EmployeeDropdownComponent, _shared_components_dropdowns_org_types_dropdown_current_structure_org_types_dropdown_current_structure_component__WEBPACK_IMPORTED_MODULE_14__.OrgTypesDropdownCurrentStructureComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtam9iLWRhdGEtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 55813:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/emp-job-info-card/emp-job-info-card.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpJobInfoCardComponent": () => (/* binding */ EmpJobInfoCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_job_info_dialog_emp_job_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../emp-job-info-dialog/emp-job-info-dialog.component */ 73610);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-job-information.service */ 81774);
/* harmony import */ var app_personnel_setup_services_employees_employee_contract_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-contract-details.service */ 36983);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);












function EmpJobInfoCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function EmpJobInfoCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9)(8, "card-row-item", 10)(9, "card-row-item", 11)(10, "card-row-item", 12)(11, "card-row-item", 13)(12, "card-row-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canMadeAction", true)("cardId", 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.status_From_Date)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.reasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.orgStartDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.job);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.timeInPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeJobInfo == null ? null : ctx_r0.employeeJobInfo.timeInCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContractDetailsInfo == null ? null : ctx_r0.employeeContractDetailsInfo.contract);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContractDetailsInfo == null ? null : ctx_r0.employeeContractDetailsInfo.contractDuration);
} }
function EmpJobInfoCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 9);
} }
class EmpJobInfoCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeJobInformationService, employeeContractDetailsService, dialog) {
        super();
        this.employeeJobInformationService = employeeJobInformationService;
        this.employeeContractDetailsService = employeeContractDetailsService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeJobInfo = null;
        this.employeeContractDetailsInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany()) {
            this.getAllData();
        }
        else
            this.isLoaded = true;
    }
    getEmployeeJobInfoByEmpIdApi() {
        return this.employeeJobInformationService.getAllByEmployeeId(this.employeeId);
    }
    getEmployeeContractDetailsInfoByEmpIdApi() {
        return this.employeeContractDetailsService.getAllByEmployeeId(this.employeeId);
    }
    getAllData() {
        this.employeeJobInfo = null;
        this.employeeContractDetailsInfo = null;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([
            this.getEmployeeJobInfoByEmpIdApi(),
            this.getEmployeeContractDetailsInfoByEmpIdApi(),
        ]).subscribe(([response1, response2]) => {
            if (response1.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // to select one to display
                this.employeeJobInfo = response1.data[0];
            }
            else
                this.errorList(response1.message.messages);
            if (response2.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                // to select one to display
                this.employeeContractDetailsInfo = response2.data[0];
            }
            else
                this.errorList(response2.message.messages);
            this.isLoaded = true;
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_job_info_dialog_emp_job_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpJobInfoDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated) {
                this.isLoaded = false;
                this.getAllData();
            }
        });
    }
}
EmpJobInfoCardComponent.ɵfac = function EmpJobInfoCardComponent_Factory(t) { return new (t || EmpJobInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_job_information_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeJobInformationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_contract_details_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeContractDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
EmpJobInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EmpJobInfoCardComponent, selectors: [["emp-job-info-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "jobInfo", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "status", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value", "isDate"], ["label", "reasons", 3, "value"], ["label", "organization", 3, "value"], ["label", "orgStartDate", 3, "value", "isDate"], ["label", "job", 3, "value"], ["label", "timeInPosition", 3, "value"], ["label", "timeInCompany", 3, "value"], ["label", "contract", 3, "value"], ["label", "contractDuration", 3, "value"], [3, "rowNo"]], template: function EmpJobInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, EmpJobInfoCardComponent_div_0_Template, 13, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmpJobInfoCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtam9iLWluZm8tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 73610:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-job-info/emp-job-info-dialog/emp-job-info-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpJobInfoDialogComponent": () => (/* binding */ EmpJobInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _emp_job_data_dialog_emp_job_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-job-data-dialog/emp-job-data-dialog.component */ 1018);
/* harmony import */ var _emp_contract_details_dialog_emp_contract_details_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-contract-details-dialog/emp-contract-details-dialog.component */ 79079);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










class EmpJobInfoDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    changUpdated(value) {
        this.updated = value;
    }
}
EmpJobInfoDialogComponent.ɵfac = function EmpJobInfoDialogComponent_Factory(t) { return new (t || EmpJobInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
EmpJobInfoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmpJobInfoDialogComponent, selectors: [["emp-job-info-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "jobInfo", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], [3, "employeeId", "changUpdated"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"]], template: function EmpJobInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmpJobInfoDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-dialog-content", 4)(7, "app-emp-job-data-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changUpdated", function EmpJobInfoDialogComponent_Template_app_emp_job_data_dialog_changUpdated_7_listener($event) { return ctx.changUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-emp-contract-details-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changUpdated", function EmpJobInfoDialogComponent_Template_app_emp_contract_details_dialog_changUpdated_8_listener($event) { return ctx.changUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-dialog-actions", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmpJobInfoDialogComponent_Template_button_click_10_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employeeId", ctx.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employeeId", ctx.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 3, "General.close"), " ");
    } }, dependencies: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _emp_job_data_dialog_emp_job_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpJobDataDialogComponent, _emp_contract_details_dialog_emp_contract_details_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EmpContractDetailsDialogComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtam9iLWluZm8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6208:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-location/emp-location-card/emp-location-card.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpLocationCardComponent": () => (/* binding */ EmpLocationCardComponent)
/* harmony export */ });
/* harmony import */ var _emp_location_dialog_emp_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emp-location-dialog/emp-location-dialog.component */ 50677);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-location.service */ 97166);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpLocationCardComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "card-row-item", 8)(2, "card-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", location_r7.country)("value", location_r7.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", location_r7.date);
} }
function EmpLocationCardComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpLocationCardComponent_div_0_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.employeeLocationInfo);
} }
function EmpLocationCardComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
} }
function EmpLocationCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpLocationCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EmpLocationCardComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EmpLocationCardComponent_div_0_ng_template_4_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeLocationInfo == null ? null : ctx_r0.employeeLocationInfo.length) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.employeeLocationInfo == null ? null : ctx_r0.employeeLocationInfo.length) > 0)("ngIfElse", _r4);
} }
function EmpLocationCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpLocationCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeLocationService, dialog) {
        super();
        this.employeeLocationService = employeeLocationService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeLocationInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeLocationInfo = null;
        this.employeeLocationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                this.employeeLocationInfo = res.data;
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_location_dialog_emp_location_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EmpLocationDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpLocationCardComponent.ɵfac = function EmpLocationCardComponent_Factory(t) { return new (t || EmpLocationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_location_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpLocationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpLocationCardComponent, selectors: [["app-emp-location-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "location", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], [4, "ngIf", "ngIfElse"], ["noData", ""], [4, "ngFor", "ngForOf"], [3, "label", "value"], ["valueClass", "col-6 text-muted", 3, "value"], ["label", "location", 3, "value"], [3, "rowNo"]], template: function EmpLocationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpLocationCardComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpLocationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbG9jYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 50677:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-location/emp-location-dialog/emp-location-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpLocationDialogComponent": () => (/* binding */ EmpLocationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-location.service */ 97166);
/* harmony import */ var app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/governorate.service */ 63733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dropdowns_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/country-dropdown/country-dropdown.component */ 10506);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function EmpLocationDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmpLocationDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function EmpLocationDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("editRow", function EmpLocationDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.employeeLocationToEdit($event)); })("deleteRow", function EmpLocationDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpLocationDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeLocationService, governorateService, data, dialogRef) {
        super();
        this.employeeLocationService = employeeLocationService;
        this.governorateService = governorateService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "country",
            "governorate",
            "address",
            "froM_DATE",
            "tO_DATE",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            countryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            Governorate_ID: [
                { value: null, disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            ],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            froM_DATE: [null],
            tO_DATE: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("froM_DATE", "tO_DATE"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany()) {
            this.getAll();
        }
    }
    getAll() {
        this.employeeLocationService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                countryId: this.form.value.countryId,
                Governorate_ID: this.form.value.Governorate_ID,
                address: this.form.value.address,
                froM_DATE: this.form.value.froM_DATE,
                tO_DATE: this.form.value.tO_DATE,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeLocationService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeLocationService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeLocationToEdit(employeeLocationInfo) {
        this.form.patchValue(employeeLocationInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeLocationInfo) {
        let msg = this.msgTranslate(employeeLocationInfo.country, employeeLocationInfo.country);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeLocationInfo);
        });
    }
    delete(employeeLocationInfo) {
        this.showLoading();
        this.employeeLocationService
            .Delete(employeeLocationInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeLocationInfo.id == this.formCtrls.id.value)
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
    getAllGovernorateByCountryId(values) {
        this.formCtrls.Governorate_ID.setValue(null);
        let countryId = values.length > 0 ? values[0].id : 0;
        if (countryId > 0) {
            this.showLoading();
            this.governorateService
                .getAllByCountryId(countryId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.governorateList = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
            this.formCtrls.Governorate_ID.enable();
        }
        else
            this.formCtrls.Governorate_ID.disable();
    }
}
EmpLocationDialogComponent.ɵfac = function EmpLocationDialogComponent_Factory(t) { return new (t || EmpLocationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_location_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_4__.GovernorateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef)); };
EmpLocationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: EmpLocationDialogComponent, selectors: [["app-emp-location-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 23, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "location", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "appendTo", "change"], ["label", "governorate", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "address", 3, "control", "submitted"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "tO_DATE", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpLocationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmpLocationDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "app-country-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function EmpLocationDialogComponent_Template_app_country_dropdown_change_11_listener($event) { return ctx.getAllGovernorateByCountryId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-prime-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function EmpLocationDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, EmpLocationDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EmpLocationDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-dialog-actions", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmpLocationDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.countryId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.Governorate_ID)("submitted", ctx.submitted)("List", ctx.governorateList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.address)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.froM_DATE)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.tO_DATE)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 21, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownComponent, _shared_components_dropdowns_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.GovernorateDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbG9jYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 13881:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-medical-insurance/emp-medical-insurance-card/emp-medical-insurance-card.component.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpMedicalInsuranceCardComponent": () => (/* binding */ EmpMedicalInsuranceCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _emp_medical_insurance_dialog_emp_medical_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emp-medical-insurance-dialog/emp-medical-insurance-dialog.component */ 92545);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_medical_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-medical-insurance.service */ 80171);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpMedicalInsuranceCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpMedicalInsuranceCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9)(8, "card-row-item", 10)(9, "card-row-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.medicalInsuranceCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.medicalID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.bloodType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.medicalSubscription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.companyShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.employeeShare);
} }
function EmpMedicalInsuranceCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 7);
} }
class EmpMedicalInsuranceCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(employeeMedicalInsuranceService, dialog) {
        super();
        this.employeeMedicalInsuranceService = employeeMedicalInsuranceService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeMedicalInsuranceInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeMedicalInsuranceInfo = null;
        this.employeeMedicalInsuranceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeMedicalInsuranceInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_medical_insurance_dialog_emp_medical_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EmpMedicalInsuranceDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpMedicalInsuranceCardComponent.ɵfac = function EmpMedicalInsuranceCardComponent_Factory(t) { return new (t || EmpMedicalInsuranceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_medical_insurance_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeMedicalInsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpMedicalInsuranceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpMedicalInsuranceCardComponent, selectors: [["app-emp-medical-insurance-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "socialInsurance", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "medicalInsuranceCompany", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value"], ["label", "medicalID", 3, "value"], ["label", "bloodType", 3, "value"], ["label", "medicalSubscription", 3, "value"], ["label", "companyShare", 3, "value"], ["label", "employeeShare", 3, "value"], [3, "rowNo"]], template: function EmpMedicalInsuranceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpMedicalInsuranceCardComponent_div_0_Template, 10, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpMedicalInsuranceCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbWVkaWNhbC1pbnN1cmFuY2UtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92545:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-medical-insurance/emp-medical-insurance-dialog/emp-medical-insurance-dialog.component.ts ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpMedicalInsuranceDialogComponent": () => (/* binding */ EmpMedicalInsuranceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_medical_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-medical-insurance.service */ 80171);
/* harmony import */ var app_hr_setup_services_blood_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/blood-type.service */ 55595);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmpMedicalInsuranceDialogComponent_reset_form_btn_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpMedicalInsuranceDialogComponent_reset_form_btn_27_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function EmpMedicalInsuranceDialogComponent_app_material_table_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function EmpMedicalInsuranceDialogComponent_app_material_table_28_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.employeeMedicalInsuranceToEdit($event)); })("deleteRow", function EmpMedicalInsuranceDialogComponent_app_material_table_28_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpMedicalInsuranceDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeMedicalInsuranceService, bloodTypeService, data, dialogRef) {
        super();
        this.employeeMedicalInsuranceService = employeeMedicalInsuranceService;
        this.bloodTypeService = bloodTypeService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "medicalInsuranceCompany",
            "medicalID",
            "bloodType",
            "from",
            "to",
            "medicalSubscription",
            "companyShare",
            "employeeShare",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            medicalInsuranceCompany: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            medicalID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            bloodTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            from: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            to: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            medicalSubscription: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            companyShare: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            employeeShare: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("from", "to"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllBloodTypeList();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeMedicalInsuranceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                medicalInsuranceCompany: this.form.value.medicalInsuranceCompany,
                medicalID: this.form.value.medicalID,
                bloodTypeId: this.form.value.bloodTypeId,
                from: this.form.value.from,
                to: this.form.value.to,
                medicalSubscription: this.form.value.medicalSubscription,
                companyShare: this.form.value.companyShare,
                employeeShare: this.form.value.employeeShare,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeMedicalInsuranceService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeMedicalInsuranceService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeMedicalInsuranceToEdit(employeeMedicalInsuranceInfo) {
        this.form.patchValue(employeeMedicalInsuranceInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeMedicalInsuranceInfo) {
        let msg = this.msgTranslate(employeeMedicalInsuranceInfo.medicalID);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeMedicalInsuranceInfo);
        });
    }
    delete(employeeMedicalInsuranceInfo) {
        this.showLoading();
        this.employeeMedicalInsuranceService
            .Delete(employeeMedicalInsuranceInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeMedicalInsuranceInfo.id == this.formCtrls.id.value)
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
    getAllBloodTypeList() {
        this.bloodTypeService
            .getAll()
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.bloodTypeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmpMedicalInsuranceDialogComponent.ɵfac = function EmpMedicalInsuranceDialogComponent_Factory(t) { return new (t || EmpMedicalInsuranceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_medical_insurance_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeMedicalInsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_hr_setup_services_blood_type_service__WEBPACK_IMPORTED_MODULE_4__.BloodTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef)); };
EmpMedicalInsuranceDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EmpMedicalInsuranceDialogComponent, selectors: [["app-emp-medical-insurance-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 26, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "medicalInsurance", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "medicalInsuranceCompany", 3, "control", "submitted"], ["label", "medicalID", 3, "control", "submitted"], ["label", "bloodType", 3, "control", "submitted", "List", "appendTo"], ["label", "from", 3, "control", "submitted"], ["label", "to", 3, "control", "submitted"], ["label", "medicalSubscription", 3, "control", "submitted"], ["label", "companyShare", 3, "control", "submitted"], ["label", "employeeShare", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpMedicalInsuranceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpMedicalInsuranceDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-prime-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "app-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "submit-btn", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function EmpMedicalInsuranceDialogComponent_Template_submit_btn_onClick_26_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, EmpMedicalInsuranceDialogComponent_reset_form_btn_27_Template, 1, 0, "reset-form-btn", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, EmpMedicalInsuranceDialogComponent_app_material_table_28_Template, 1, 7, "app-material-table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "mat-dialog-actions", 20)(30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmpMedicalInsuranceDialogComponent_Template_button_click_30_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.medicalInsuranceCompany)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.medicalID)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.bloodTypeId)("submitted", ctx.submitted)("List", ctx.bloodTypeList)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.from)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.to)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.medicalSubscription)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.companyShare)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.employeeShare)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 24, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbWVkaWNhbC1pbnN1cmFuY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 81988:
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-social-insurance/emp-social-insurance-card/emp-social-insurance-card.component.ts ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpSocialInsuranceCardComponent": () => (/* binding */ EmpSocialInsuranceCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _emp_social_insurance_dialog_emp_social_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emp-social-insurance-dialog/emp-social-insurance-dialog.component */ 74506);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_social_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-social-insurance.service */ 97226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpSocialInsuranceCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpSocialInsuranceCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeSocialInsuranceInfo == null ? null : ctx_r0.employeeSocialInsuranceInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSocialInsuranceInfo == null ? null : ctx_r0.employeeSocialInsuranceInfo.insurance_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSocialInsuranceInfo == null ? null : ctx_r0.employeeSocialInsuranceInfo.insurance_Years);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSocialInsuranceInfo == null ? null : ctx_r0.employeeSocialInsuranceInfo.insuranceOffice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSocialInsuranceInfo == null ? null : ctx_r0.employeeSocialInsuranceInfo.date);
} }
function EmpSocialInsuranceCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 4);
} }
class EmpSocialInsuranceCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(employeeSocialInsuranceService, dialog) {
        super();
        this.employeeSocialInsuranceService = employeeSocialInsuranceService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeSocialInsuranceInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeSocialInsuranceInfo = null;
        this.employeeSocialInsuranceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeSocialInsuranceInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_social_insurance_dialog_emp_social_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EmpSocialInsuranceDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpSocialInsuranceCardComponent.ɵfac = function EmpSocialInsuranceCardComponent_Factory(t) { return new (t || EmpSocialInsuranceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_social_insurance_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeSocialInsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpSocialInsuranceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpSocialInsuranceCardComponent, selectors: [["app-emp-social-insurance-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "socialInsurance", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "insurance_No", 3, "value"], ["label", "insurance_Years", 3, "value"], ["label", "insuranceOffice", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value"], [3, "rowNo"]], template: function EmpSocialInsuranceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpSocialInsuranceCardComponent_div_0_Template, 7, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpSocialInsuranceCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtc29jaWFsLWluc3VyYW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 74506:
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-social-insurance/emp-social-insurance-dialog/emp-social-insurance-dialog.component.ts ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpSocialInsuranceDialogComponent": () => (/* binding */ EmpSocialInsuranceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_social_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-social-insurance.service */ 97226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 89461);





















function EmpSocialInsuranceDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpSocialInsuranceDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmpSocialInsuranceDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmpSocialInsuranceDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.employeeSocialInsuranceToEdit($event)); })("deleteRow", function EmpSocialInsuranceDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpSocialInsuranceDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeSocialInsuranceService, data, dialogRef) {
        super();
        this.employeeSocialInsuranceService = employeeSocialInsuranceService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "insurance_No",
            "insurance_Years",
            "insuranceOffice",
            "froM_DATE",
            "endDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            insurance_No: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.number]],
            insurance_Years: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_12__.CustomValidators.digits]],
            insuranceOffice: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            froM_DATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            endDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("froM_DATE", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeSocialInsuranceService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                insurance_No: this.form.value.insurance_No,
                insurance_Years: this.form.value.insurance_Years,
                insuranceOffice: this.form.value.insuranceOffice,
                froM_DATE: this.form.value.froM_DATE,
                endDate: this.form.value.endDate,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeSocialInsuranceService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeSocialInsuranceService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeSocialInsuranceToEdit(employeeSocialInsuranceInfo) {
        this.form.patchValue(employeeSocialInsuranceInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeSocialInsuranceInfo) {
        let msg = this.msgTranslate(employeeSocialInsuranceInfo.insurance_No);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeSocialInsuranceInfo);
        });
    }
    delete(employeeSocialInsuranceInfo) {
        this.showLoading();
        this.employeeSocialInsuranceService
            .Delete(employeeSocialInsuranceInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeSocialInsuranceInfo.id == this.formCtrls.id.value)
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
EmpSocialInsuranceDialogComponent.ɵfac = function EmpSocialInsuranceDialogComponent_Factory(t) { return new (t || EmpSocialInsuranceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_social_insurance_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeSocialInsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef)); };
EmpSocialInsuranceDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmpSocialInsuranceDialogComponent, selectors: [["app-emp-social-insurance-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 18, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "socialInsurance", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "insurance_No", 3, "control", "submitted"], ["label", "insurance_Years", "type", "number", 3, "control", "submitted"], ["label", "insuranceOffice", 3, "control", "submitted"], ["label", "froM_DATE", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpSocialInsuranceDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpSocialInsuranceDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "app-datepicker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function EmpSocialInsuranceDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, EmpSocialInsuranceDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, EmpSocialInsuranceDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-dialog-actions", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpSocialInsuranceDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.insurance_No)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.insurance_Years)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.insuranceOffice)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.froM_DATE)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.endDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 16, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtc29jaWFsLWluc3VyYW5jZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1250:
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-work-schedule/emp-work-schedule-card/emp-work-schedule-card.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpWorkScheduleCardComponent": () => (/* binding */ EmpWorkScheduleCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_work_schedule_dialog_emp_work_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-work-schedule-dialog/emp-work-schedule-dialog.component */ 47437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_work_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-work-schedule.service */ 33664);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpWorkScheduleCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpWorkScheduleCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeWorkScheduleInfo == null ? null : ctx_r0.employeeWorkScheduleInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkScheduleInfo == null ? null : ctx_r0.employeeWorkScheduleInfo.plan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeWorkScheduleInfo == null ? null : ctx_r0.employeeWorkScheduleInfo.startDate);
} }
function EmpWorkScheduleCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpWorkScheduleCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeWorkScheduleService, dialog) {
        super();
        this.employeeWorkScheduleService = employeeWorkScheduleService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeWorkScheduleInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeWorkScheduleInfo = null;
        this.employeeWorkScheduleService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeWorkScheduleInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_work_schedule_dialog_emp_work_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpWorkScheduleDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpWorkScheduleCardComponent.ɵfac = function EmpWorkScheduleCardComponent_Factory(t) { return new (t || EmpWorkScheduleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_work_schedule_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeWorkScheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpWorkScheduleCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpWorkScheduleCardComponent, selectors: [["emp-work-schedule-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "workSchedule", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "plan", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value"], [3, "rowNo"]], template: function EmpWorkScheduleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpWorkScheduleCardComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpWorkScheduleCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtd29yay1zY2hlZHVsZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 47437:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/emp-work-schedule/emp-work-schedule-dialog/emp-work-schedule-dialog.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpWorkScheduleDialogComponent": () => (/* binding */ EmpWorkScheduleDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_work_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-work-schedule.service */ 33664);
/* harmony import */ var app_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/attendance-setup/services/attendance-plan.service */ 5420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function EmpWorkScheduleDialogComponent_reset_form_btn_79_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpWorkScheduleDialogComponent_reset_form_btn_79_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmpWorkScheduleDialogComponent_app_material_table_80_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmpWorkScheduleDialogComponent_app_material_table_80_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.employeeWorkScheduleToEdit($event)); })("deleteRow", function EmpWorkScheduleDialogComponent_app_material_table_80_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpWorkScheduleDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeWorkScheduleService, attendancePlanService, data, dialogRef) {
        super();
        this.employeeWorkScheduleService = employeeWorkScheduleService;
        this.attendancePlanService = attendancePlanService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "plan",
            "startDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            planId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllPlans();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeWorkScheduleService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                planId: this.form.value.planId,
                startDate: this.form.value.startDate,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeWorkScheduleService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeWorkScheduleService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeWorkScheduleToEdit(employeeWorkScheduleInfo) {
        this.form.patchValue(employeeWorkScheduleInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeWorkScheduleInfo) {
        let msg = this.msgTranslate(employeeWorkScheduleInfo.plan);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeWorkScheduleInfo);
        });
    }
    delete(employeeWorkScheduleInfo) {
        this.showLoading();
        this.employeeWorkScheduleService
            .Delete(employeeWorkScheduleInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeWorkScheduleInfo.id == this.formCtrls.id.value)
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
    getAllPlans() {
        this.attendancePlanService
            .getAll()
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.planList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmpWorkScheduleDialogComponent.ɵfac = function EmpWorkScheduleDialogComponent_Factory(t) { return new (t || EmpWorkScheduleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_work_schedule_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeWorkScheduleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__.AttendancePlanService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
EmpWorkScheduleDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmpWorkScheduleDialogComponent, selectors: [["emp-work-schedule-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 85, vars: 48, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "workSchedule", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [1, "row"], [1, "col-md-4"], [1, "card", "card-vacations-custom", "card-inverse"], [1, "card-content"], [1, "card-body"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [1, "ca-title"], [1, "pspan"], [1, "media-right", "align-self-center"], [1, "ft-umbrella", "font-large-2", "float-right"], [1, "ft-thermometer", "font-large-2", "float-right"], [1, "ft-clock", "font-large-2", "float-right"], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-6", "col-12"], ["label", "plan", 3, "control", "submitted", "filter", "List", "appendTo"], ["label", "startDate", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpWorkScheduleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpWorkScheduleDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "156");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 7)(31, "div", 8)(32, "div", 9)(33, "div", 10)(34, "div", 11)(35, "div", 12)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 7)(52, "div", 8)(53, "div", 9)(54, "div", 10)(55, "div", 11)(56, "div", 12)(57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](64, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "form", 20)(73, "div", 21)(74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "app-prime-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "app-datepicker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "submit-btn", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function EmpWorkScheduleDialogComponent_Template_submit_btn_onClick_78_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, EmpWorkScheduleDialogComponent_reset_form_btn_79_Template, 1, 0, "reset-form-btn", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, EmpWorkScheduleDialogComponent_app_material_table_80_Template, 1, 7, "app-material-table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "mat-dialog-actions", 28)(82, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpWorkScheduleDialogComponent_Template_button_click_82_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 22, "vacation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 24, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 26, "daysUsed")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" 48 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 28, "daysScheduled"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 30, "sick"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 32, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](44, 34, "daysUsed")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" 8 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 36, "daysScheduled"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](59, 38, "workingHours"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](64, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](65, 42, "hoursAchieved")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" 0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 44, "hoursScheduled"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.planId)("submitted", ctx.submitted)("filter", true)("List", ctx.planList)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](84, 46, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtd29yay1zY2hlZHVsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 20001:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/employement-information/employement-info-core/employement-info-core.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployementInformationComponent": () => (/* binding */ EmployementInformationComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_job_info_emp_job_info_card_emp_job_info_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-job-info/emp-job-info-card/emp-job-info-card.component */ 55813);
/* harmony import */ var _emp_work_schedule_emp_work_schedule_card_emp_work_schedule_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-work-schedule/emp-work-schedule-card/emp-work-schedule-card.component */ 1250);
/* harmony import */ var _emp_hiring_documents_emp_hiring_documents_card_emp_hiring_documents_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emp-hiring-documents/emp-hiring-documents-card/emp-hiring-documents-card.component */ 78471);
/* harmony import */ var _emp_location_emp_location_card_emp_location_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emp-location/emp-location-card/emp-location-card.component */ 6208);
/* harmony import */ var _emp_custodies_emp_custodies_card_emp_custodies_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../emp-custodies/emp-custodies-card/emp-custodies-card.component */ 63042);
/* harmony import */ var _emp_social_insurance_emp_social_insurance_card_emp_social_insurance_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../emp-social-insurance/emp-social-insurance-card/emp-social-insurance-card.component */ 81988);
/* harmony import */ var _emp_medical_insurance_emp_medical_insurance_card_emp_medical_insurance_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../emp-medical-insurance/emp-medical-insurance-card/emp-medical-insurance-card.component */ 13881);













function EmployementInformationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "emp-job-info-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmployementInformationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "emp-work-schedule-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
function EmployementInformationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "emp-hiring-documents-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r2.employeeId);
} }
function EmployementInformationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-emp-location-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r3.employeeId);
} }
function EmployementInformationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-emp-custodies-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r4.employeeId);
} }
function EmployementInformationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-emp-social-insurance-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r5.employeeId);
} }
function EmployementInformationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-emp-medical-insurance-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("employeeId", ctx_r6.employeeId);
} }
class EmployementInformationComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.employment_info_tab);
        console.log("employment_info", this.allowedSections);
    }
}
EmployementInformationComponent.ɵfac = function EmployementInformationComponent_Factory(t) { return new (t || EmployementInformationComponent)(); };
EmployementInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmployementInformationComponent, selectors: [["employement-information-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 10, consts: [[1, "row"], [1, "col-12"], ["title", "employmentInfo", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmployementInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EmployementInformationComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EmployementInformationComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EmployementInformationComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EmployementInformationComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EmployementInformationComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EmployementInformationComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, EmployementInformationComponent_div_13_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_job_info_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_work_schedule_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_hiring_documents_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_location_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_custodies_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_social_insurance_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_medical_insurance_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _emp_job_info_emp_job_info_card_emp_job_info_card_component__WEBPACK_IMPORTED_MODULE_3__.EmpJobInfoCardComponent, _emp_work_schedule_emp_work_schedule_card_emp_work_schedule_card_component__WEBPACK_IMPORTED_MODULE_4__.EmpWorkScheduleCardComponent, _emp_hiring_documents_emp_hiring_documents_card_emp_hiring_documents_card_component__WEBPACK_IMPORTED_MODULE_5__.EmpHiringDocumentsCardComponent, _emp_location_emp_location_card_emp_location_card_component__WEBPACK_IMPORTED_MODULE_6__.EmpLocationCardComponent, _emp_custodies_emp_custodies_card_emp_custodies_card_component__WEBPACK_IMPORTED_MODULE_7__.EmpCustodiesCardComponent, _emp_social_insurance_emp_social_insurance_card_emp_social_insurance_card_component__WEBPACK_IMPORTED_MODULE_8__.EmpSocialInsuranceCardComponent, _emp_medical_insurance_emp_medical_insurance_card_emp_medical_insurance_card_component__WEBPACK_IMPORTED_MODULE_9__.EmpMedicalInsuranceCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llbWVudC1pbmZvLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56275:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/payments-information/emp-banking-account-data/emp-banking-account-data-card/emp-banking-account-data-card.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpBankingAccountDataCardComponent": () => (/* binding */ EmpBankingAccountDataCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_banking_account_data_dialog_emp_banking_account_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-banking-account-data-dialog/emp-banking-account-data-dialog.component */ 19434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_banking_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-banking-account.service */ 26932);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpBankingAccountDataCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpBankingAccountDataCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeBankingAccountInfo == null ? null : ctx_r0.employeeBankingAccountInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeBankingAccountInfo == null ? null : ctx_r0.employeeBankingAccountInfo.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeBankingAccountInfo == null ? null : ctx_r0.employeeBankingAccountInfo.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.startDate);
} }
function EmpBankingAccountDataCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 3);
} }
class EmpBankingAccountDataCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeBankingAccountService, dialog) {
        super();
        this.employeeBankingAccountService = employeeBankingAccountService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeBankingAccountInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeBankingAccountInfo = null;
        this.employeeBankingAccountService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeBankingAccountInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_banking_account_data_dialog_emp_banking_account_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpBankingAccountDataDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpBankingAccountDataCardComponent.ɵfac = function EmpBankingAccountDataCardComponent_Factory(t) { return new (t || EmpBankingAccountDataCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_banking_account_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeBankingAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpBankingAccountDataCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpBankingAccountDataCardComponent, selectors: [["app-emp-banking-account-data-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "bankingAccountData", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "bank", 3, "value"], ["label", "accountNumber", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value"], [3, "rowNo"]], template: function EmpBankingAccountDataCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpBankingAccountDataCardComponent_div_0_Template, 6, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpBankingAccountDataCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtYmFua2luZy1hY2NvdW50LWRhdGEtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 19434:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/payments-information/emp-banking-account-data/emp-banking-account-data-dialog/emp-banking-account-data-dialog.component.ts ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpBankingAccountDataDialogComponent": () => (/* binding */ EmpBankingAccountDataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_banking_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-banking-account.service */ 26932);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/bank-dropdown/bank-dropdown.component */ 75968);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 89461);




















function EmpBankingAccountDataDialogComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpBankingAccountDataDialogComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmpBankingAccountDataDialogComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmpBankingAccountDataDialogComponent_app_material_table_18_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.employeeBankingAccountToEdit($event)); })("deleteRow", function EmpBankingAccountDataDialogComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpBankingAccountDataDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeBankingAccountService, data, dialogRef) {
        super();
        this.employeeBankingAccountService = employeeBankingAccountService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "bank",
            "accountNumber",
            "startDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            accountNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeBankingAccountService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                bankId: this.form.value.bankId,
                accountNumber: this.form.value.accountNumber,
                startDate: this.form.value.startDate,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeBankingAccountService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeBankingAccountService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeBankingAccountToEdit(employeeBankingAccountInfo) {
        this.form.patchValue(employeeBankingAccountInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeBankingAccountInfo) {
        let msg = this.msgTranslate(employeeBankingAccountInfo.bank);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeBankingAccountInfo);
        });
    }
    delete(employeeBankingAccountInfo) {
        this.showLoading();
        this.employeeBankingAccountService
            .Delete(employeeBankingAccountInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeBankingAccountInfo.id == this.formCtrls.id.value)
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
EmpBankingAccountDataDialogComponent.ɵfac = function EmpBankingAccountDataDialogComponent_Factory(t) { return new (t || EmpBankingAccountDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_banking_account_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeBankingAccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
EmpBankingAccountDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmpBankingAccountDataDialogComponent, selectors: [["app-emp-banking-account-data-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 16, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "bankingAccountData", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "appendTo"], ["label", "accountNumber", 3, "control", "submitted"], ["label", "startDate", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpBankingAccountDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpBankingAccountDataDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-bank-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function EmpBankingAccountDataDialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EmpBankingAccountDataDialogComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EmpBankingAccountDataDialogComponent_app_material_table_18_Template, 1, 7, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-dialog-actions", 15)(20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmpBankingAccountDataDialogComponent_Template_button_click_20_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.bankId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.accountNumber)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.startDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 14, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_dropdowns_bank_dropdown_bank_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.BankDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_7__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtYmFua2luZy1hY2NvdW50LWRhdGEtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 61198:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/payments-information/emp-payments-info-core/emp-payments-info-core.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpPaymentsInfoCoreComponent": () => (/* binding */ EmpPaymentsInfoCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_payroll_data_emp_payroll_data_card_emp_payroll_data_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-payroll-data/emp-payroll-data-card/emp-payroll-data-card.component */ 80151);
/* harmony import */ var _emp_banking_account_data_emp_banking_account_data_card_emp_banking_account_data_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-banking-account-data/emp-banking-account-data-card/emp-banking-account-data-card.component */ 56275);








function EmpPaymentsInfoCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-emp-payroll-data-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmpPaymentsInfoCoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-emp-banking-account-data-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
class EmpPaymentsInfoCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_payments_info_tab);
        console.log("payments_info", this.allowedSections);
    }
}
EmpPaymentsInfoCoreComponent.ɵfac = function EmpPaymentsInfoCoreComponent_Factory(t) { return new (t || EmpPaymentsInfoCoreComponent)(); };
EmpPaymentsInfoCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmpPaymentsInfoCoreComponent, selectors: [["emp-payments-info-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 5, consts: [[1, "row"], [1, "col-12"], ["title", "paymentsInfo", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmpPaymentsInfoCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EmpPaymentsInfoCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmpPaymentsInfoCoreComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_payroll_data_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_banking_account_data_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _emp_payroll_data_emp_payroll_data_card_emp_payroll_data_card_component__WEBPACK_IMPORTED_MODULE_3__.EmpPayrollDataCardComponent, _emp_banking_account_data_emp_banking_account_data_card_emp_banking_account_data_card_component__WEBPACK_IMPORTED_MODULE_4__.EmpBankingAccountDataCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGF5bWVudHMtaW5mby1jb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 80151:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/payments-information/emp-payroll-data/emp-payroll-data-card/emp-payroll-data-card.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpPayrollDataCardComponent": () => (/* binding */ EmpPayrollDataCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_payroll_data_dialog_emp_payroll_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-payroll-data-dialog/emp-payroll-data-dialog.component */ 85303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_payroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-payroll.service */ 84899);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpPayrollDataCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpPayrollDataCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeePayrollInfo == null ? null : ctx_r0.employeePayrollInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeePayrollInfo == null ? null : ctx_r0.employeePayrollInfo.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeePayrollInfo == null ? null : ctx_r0.employeePayrollInfo.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMedicalInsuranceInfo == null ? null : ctx_r0.employeeMedicalInsuranceInfo.netSalary);
} }
function EmpPayrollDataCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 3);
} }
class EmpPayrollDataCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeePayrollService, dialog) {
        super();
        this.employeePayrollService = employeePayrollService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeePayrollInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeePayrollInfo = null;
        this.employeePayrollService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeePayrollInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_payroll_data_dialog_emp_payroll_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpPayrollDataDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpPayrollDataCardComponent.ɵfac = function EmpPayrollDataCardComponent_Factory(t) { return new (t || EmpPayrollDataCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_payroll_service__WEBPACK_IMPORTED_MODULE_3__.EmployeePayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpPayrollDataCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpPayrollDataCardComponent, selectors: [["app-emp-payroll-data-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "payrollData", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "paymentMethod", 3, "value"], ["label", "lastCalculatedMonth", 3, "value"], ["valueClass", "col-6 text-muted", 3, "value"], ["label", "netSalary", 3, "value"], [3, "rowNo"]], template: function EmpPayrollDataCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpPayrollDataCardComponent_div_0_Template, 7, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpPayrollDataCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGF5cm9sbC1kYXRhLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85303:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/payments-information/emp-payroll-data/emp-payroll-data-dialog/emp-payroll-data-dialog.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpPayrollDataDialogComponent": () => (/* binding */ EmpPayrollDataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_payroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-payroll.service */ 84899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function EmpPayrollDataDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpPayrollDataDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function EmpPayrollDataDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-material-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function EmpPayrollDataDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.employeePayrollToEdit($event)); })("deleteRow", function EmpPayrollDataDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpPayrollDataDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeePayrollService, data, dialogRef) {
        super();
        this.employeePayrollService = employeePayrollService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "bank",
            "accountNumber",
            "startDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            paymentMethodId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            basicSalary: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            insuranceEmployee: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            netSalary: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            allowance: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllPaymentMethods();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeePayrollService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                paymentMethodId: this.form.value.paymentMethodId,
                basicSalary: this.form.value.basicSalary,
                insuranceEmployee: this.form.value.insuranceEmployee,
                netSalary: this.form.value.netSalary,
                allowance: this.form.value.allowance,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeePayrollService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeePayrollService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeePayrollToEdit(employeePayrollInfo) {
        this.form.patchValue(employeePayrollInfo);
        // console.log(this.form.value);
    }
    onDelete(employeePayrollInfo) {
        let msg = this.msgTranslate(employeePayrollInfo.paymentMethod);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeePayrollInfo);
        });
    }
    delete(employeePayrollInfo) {
        this.showLoading();
        this.employeePayrollService
            .Delete(employeePayrollInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeePayrollInfo.id == this.formCtrls.id.value)
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
    getAllPaymentMethods() {
        // this.militryService
        //   .getAllMilitryStatus()
        //   .subscribe((res: IResponse<Idropdown[]>) => {
        //     if ((res.message.messageType = MessageTypes.Success)) {
        //       this.paymentMethodList = res.data;
        //     } else this.errorList(res.message.messages);
        //   });
    }
}
EmpPayrollDataDialogComponent.ɵfac = function EmpPayrollDataDialogComponent_Factory(t) { return new (t || EmpPayrollDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_payroll_service__WEBPACK_IMPORTED_MODULE_2__.EmployeePayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef)); };
EmpPayrollDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EmpPayrollDataDialogComponent, selectors: [["app-emp-payroll-data-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 21, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "payrollData", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "paymentMethod", 3, "control", "submitted", "filter", "List", "appendTo"], ["label", "basicSalary", "type", "number", 3, "control", "submitted"], ["label", "insuranceEmployee", 3, "control", "submitted"], ["label", "netSalary", "type", "number", 3, "control", "submitted"], ["label", "allowance", "type", "number", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpPayrollDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpPayrollDataDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "submit-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function EmpPayrollDataDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, EmpPayrollDataDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, EmpPayrollDataDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "mat-dialog-actions", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpPayrollDataDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.paymentMethodId)("submitted", ctx.submitted)("filter", true)("List", ctx.paymentMethodList)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.basicSalary)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.insuranceEmployee)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.netSalary)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.allowance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 19, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGF5cm9sbC1kYXRhLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9833:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-contact-and-address/emp-address-dialog/emp-address-dialog.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAddressDialogComponent": () => (/* binding */ EmployeeAddressDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_personnel_setup_services_employees_employee_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-address.service */ 64111);
/* harmony import */ var app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hr-setup/services/governorate.service */ 63733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_dropdowns_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/country-dropdown/country-dropdown.component */ 10506);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 89461);


















function EmployeeAddressDialogComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeAddressDialogComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmployeeAddressDialogComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmployeeAddressDialogComponent_app_material_table_18_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.employeeAddressToEdit($event)); })("deleteRow", function EmployeeAddressDialogComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeAddressDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeAddressService, governorateService) {
        super();
        this.employeeAddressService = employeeAddressService;
        this.governorateService = governorateService;
        this.employeeId = 0;
        this.changUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "country",
            "governorate",
            "address",
            "primary",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            countryId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            Governorate_ID: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            IsPrimary: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(null);
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany()) {
            this.getAll();
        }
    }
    getAll() {
        this.employeeAddressService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                countryId: this.form.value.countryId,
                Governorate_ID: this.form.value.Governorate_ID,
                address: this.form.value.address,
                IsPrimary: this.form.value.IsPrimary ?? false,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeAddressService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeAddressService.update(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeAddressToEdit(employeeAddressInfo) {
        this.form.patchValue(employeeAddressInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeAddressInfo) {
        let msg = this.msgTranslate(employeeAddressInfo.country, employeeAddressInfo.country);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeAddressInfo);
        });
    }
    delete(employeeAddressInfo) {
        this.showLoading();
        this.employeeAddressService.Delete(employeeAddressInfo.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeAddressInfo.id == this.formCtrls.id.value)
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
    getAllGovernorateByCountryId(values) {
        this.formCtrls.Governorate_ID.setValue(null);
        let countryId = values.length > 0 ? values[0].id : 0;
        if (countryId > 0) {
            this.showLoading();
            this.governorateService
                .getAllByCountryId(countryId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.governorateList = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
            this.formCtrls.Governorate_ID.enable();
        }
        else
            this.formCtrls.Governorate_ID.disable();
    }
}
EmployeeAddressDialogComponent.ɵfac = function EmployeeAddressDialogComponent_Factory(t) { return new (t || EmployeeAddressDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_address_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_hr_setup_services_governorate_service__WEBPACK_IMPORTED_MODULE_3__.GovernorateService)); };
EmployeeAddressDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmployeeAddressDialogComponent, selectors: [["app-employee-address-dialog"]], inputs: { employeeId: "employeeId" }, outputs: { changUpdated: "changUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 22, consts: [["dialogContainer", ""], [1, "divider-title"], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "appendTo", "change"], ["label", "governorate", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "address", 3, "control", "submitted"], [1, "col-md-4", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "primary", 3, "control"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeAddressDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", null, 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "form", 2)(7, "div", 3)(8, "div", 4)(9, "app-country-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function EmployeeAddressDialogComponent_Template_app_country_dropdown_change_9_listener($event) { return ctx.getAllGovernorateByCountryId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-prime-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-check-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmployeeAddressDialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, EmployeeAddressDialogComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, EmployeeAddressDialogComponent_app_material_table_18_Template, 1, 7, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 18, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 20, "address")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.countryId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.Governorate_ID)("submitted", ctx.submitted)("List", ctx.governorateList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.address)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.IsPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_dropdowns_country_dropdown_country_dropdown_component__WEBPACK_IMPORTED_MODULE_8__.GovernorateDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtYWRkcmVzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 46329:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-contact-and-address/emp-contact-and-address-card/emp-contact-and-address-card.component.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeContactAndAddressCardComponent": () => (/* binding */ EmployeeContactAndAddressCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_contact_and_address_dialog_emp_contact_and_address_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emp-contact-and-address-dialog/emp-contact-and-address-dialog.component */ 10097);
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/observable/forkJoin */ 7040);
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-contact.service */ 60141);
/* harmony import */ var app_personnel_setup_services_employees_employee_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-address.service */ 64111);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);












function EmployeeContactAndAddressCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickIcon", function EmployeeContactAndAddressCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7)(6, "card-row-item", 8)(7, "card-row-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canMadeAction", true)("cardId", 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContactInfo == null ? null : ctx_r0.employeeContactInfo.email)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContactInfo == null ? null : ctx_r0.employeeContactInfo.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContactInfo == null ? null : ctx_r0.employeeContactInfo.socialAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeContactInfo == null ? null : ctx_r0.employeeContactInfo.contactCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.employeeAddressInfo == null ? null : ctx_r0.employeeAddressInfo.address);
} }
function EmployeeContactAndAddressCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowNo", 5);
} }
class EmployeeContactAndAddressCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeContactService, employeeAddressService, dialog) {
        super();
        this.employeeContactService = employeeContactService;
        this.employeeAddressService = employeeAddressService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeContactInfo = null;
        this.employeeAddressInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany()) {
            this.getAllData();
        }
        else
            this.isLoaded = true;
    }
    getEmployeeContactInfoByEmpIdApi() {
        return this.employeeContactService.getAllByEmployeeId(this.employeeId);
    }
    getEmployeeAddressInfoByEmpIdApi() {
        return this.employeeAddressService.getAllByEmployeeId(this.employeeId);
    }
    getAllData() {
        this.employeeContactInfo = null;
        this.employeeAddressInfo = null;
        (0,rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([
            this.getEmployeeAddressInfoByEmpIdApi(),
            this.getEmployeeContactInfoByEmpIdApi(),
        ]).subscribe(([response1, response2]) => {
            if (response1.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                // to select one to display
                this.employeeAddressInfo = response1.data[0];
            }
            else
                this.errorList(response1.message.messages);
            if (response2.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_2__.MessageTypes.Success) {
                // to select one to display
                this.employeeContactInfo = response2.data[0];
            }
            else
                this.errorList(response2.message.messages);
            this.isLoaded = true;
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_contact_and_address_dialog_emp_contact_and_address_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeContactAndAddressDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated) {
                this.isLoaded = false;
                this.getAllData();
            }
        });
    }
}
EmployeeContactAndAddressCardComponent.ɵfac = function EmployeeContactAndAddressCardComponent_Factory(t) { return new (t || EmployeeContactAndAddressCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_contact_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeContactService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_address_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeAddressService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
EmployeeContactAndAddressCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EmployeeContactAndAddressCardComponent, selectors: [["emp-contact-and-address-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "contact_Address", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "email", 3, "value", "isDate"], ["label", "phone", 3, "value"], ["label", "socialAccounts", 3, "value"], ["label", "contactCategory", 3, "value"], ["label", "address", 3, "value"], [3, "rowNo"]], template: function EmployeeContactAndAddressCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, EmployeeContactAndAddressCardComponent_div_0_Template, 8, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmployeeContactAndAddressCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY29udGFjdC1hbmQtYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 10097:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-contact-and-address/emp-contact-and-address-dialog/emp-contact-and-address-dialog.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeContactAndAddressDialogComponent": () => (/* binding */ EmployeeContactAndAddressDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _emp_contact_dialog_emp_contact_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-contact-dialog/emp-contact-dialog.component */ 58751);
/* harmony import */ var _emp_address_dialog_emp_address_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-address-dialog/emp-address-dialog.component */ 9833);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 89461);










class EmployeeContactAndAddressDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    changUpdated(value) {
        this.updated = value;
    }
}
EmployeeContactAndAddressDialogComponent.ɵfac = function EmployeeContactAndAddressDialogComponent_Factory(t) { return new (t || EmployeeContactAndAddressDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
EmployeeContactAndAddressDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmployeeContactAndAddressDialogComponent, selectors: [["app-employee-contact-and-address-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "contact_Address", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], [3, "employeeId", "changUpdated"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"]], template: function EmployeeContactAndAddressDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeContactAndAddressDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-dialog-content", 4)(7, "app-employee-contact-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changUpdated", function EmployeeContactAndAddressDialogComponent_Template_app_employee_contact_dialog_changUpdated_7_listener($event) { return ctx.changUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-employee-address-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changUpdated", function EmployeeContactAndAddressDialogComponent_Template_app_employee_address_dialog_changUpdated_8_listener($event) { return ctx.changUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-dialog-actions", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeContactAndAddressDialogComponent_Template_button_click_10_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employeeId", ctx.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("employeeId", ctx.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 3, "General.close"), " ");
    } }, dependencies: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, _emp_contact_dialog_emp_contact_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeContactDialogComponent, _emp_address_dialog_emp_address_dialog_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeAddressDialogComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY29udGFjdC1hbmQtYWRkcmVzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 58751:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-contact-and-address/emp-contact-dialog/emp-contact-dialog.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeContactDialogComponent": () => (/* binding */ EmployeeContactDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_personnel_setup_services_employees_employee_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-contact.service */ 60141);
/* harmony import */ var app_hr_setup_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hr-setup/services/contact.service */ 99547);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);

















function EmployeeContactDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-prime-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx_r1.formCtrls.CONTACT_Category_ID)("submitted", ctx_r1.submitted)("List", ctx_r1.contactTypesList)("filter", true)("appendTo", _r0);
} }
function EmployeeContactDialogComponent_reset_form_btn_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "reset-form-btn", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EmployeeContactDialogComponent_reset_form_btn_16_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EmployeeContactDialogComponent_app_material_table_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-material-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("editRow", function EmployeeContactDialogComponent_app_material_table_17_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.employeeContactToEdit($event)); })("deleteRow", function EmployeeContactDialogComponent_app_material_table_17_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isLoaded", ctx_r3.isLoaded)("dataSource", ctx_r3.dataSource)("mandatoryColomns", ctx_r3.mandatoryColomns)("optionalColomns", ctx_r3.optionalColomns)("actions", ctx_r3.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeContactDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeContactService, contactService) {
        super();
        this.employeeContactService = employeeContactService;
        this.contactService = contactService;
        this.employeeId = 0;
        this.changUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "contactType",
            "contact",
            "contactCategory",
            "primary",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            CONTACT_TYPE_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            CONTACT_Category_ID: [null],
            Value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            IsPrimary: [null],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllContactTypes();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeContactService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                CONTACT_TYPE_ID: this.form.value.CONTACT_TYPE_ID,
                CONTACT_Category_ID: this.form.value.CONTACT_Category_ID,
                Value: this.form.value.Value,
                IsPrimary: this.form.value.IsPrimary ?? false,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeContactService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeContactService.update(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.changUpdated.emit(true);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeContactToEdit(employeeContactInfo) {
        this.form.patchValue(employeeContactInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeContactInfo) {
        let msg = this.msgTranslate(employeeContactInfo.contactType, employeeContactInfo.contactType);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeContactInfo);
        });
    }
    delete(employeeContactInfo) {
        this.showLoading();
        this.employeeContactService.Delete(employeeContactInfo.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeContactInfo.id == this.formCtrls.id.value)
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
    getAllContactTypes() {
        this.showLoading();
        this.contactService.getAllTypes().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.contactTypesList = res.data;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    showCategories() {
        // show if select type (category or social accounts)
        return false;
    }
    getAllCategoriesByTypeId(values) {
        this.formCtrls.CONTACT_Category_ID.setValue(null);
        let typeId = values.length > 0 ? Number(values[0].id) : 0;
        if (typeId > 0) {
            this.showLoading();
            this.contactService
                .getAllCategoriesByTypeId(typeId)
                .subscribe((res) => {
                if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                    this.contactCategoryList = res.data;
                }
                else
                    this.errorList(res.message.messages);
                this.hideLoading();
            });
            this.formCtrls.CONTACT_Category_ID.enable();
        }
        else
            this.formCtrls.CONTACT_Category_ID.disable();
    }
}
EmployeeContactDialogComponent.ɵfac = function EmployeeContactDialogComponent_Factory(t) { return new (t || EmployeeContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_contact_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeContactService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](app_hr_setup_services_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService)); };
EmployeeContactDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EmployeeContactDialogComponent, selectors: [["app-employee-contact-dialog"]], inputs: { employeeId: "employeeId" }, outputs: { changUpdated: "changUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 19, consts: [["dialogContainer", ""], [1, "divider-title"], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "contactType", 3, "control", "submitted", "List", "filter", "appendTo", "change"], ["class", "col-md-4 col-sm-6 col-12", 4, "ngIf"], ["label", "contact", 3, "control", "submitted"], [1, "col-md-4", "col-sm-6", "col-12", "mbottom-14", "mtop-14"], ["label", "primary", 3, "control"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["label", "contactCategory", 3, "control", "submitted", "List", "filter", "appendTo"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", null, 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 2)(7, "div", 3)(8, "div", 4)(9, "app-prime-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EmployeeContactDialogComponent_Template_app_prime_dropdown_change_9_listener($event) { return ctx.getAllCategoriesByTypeId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EmployeeContactDialogComponent_div_10_Template, 2, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-check-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function EmployeeContactDialogComponent_Template_submit_btn_onClick_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, EmployeeContactDialogComponent_reset_form_btn_16_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EmployeeContactDialogComponent_app_material_table_17_Template, 1, 7, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 15, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 17, "contact")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.CONTACT_TYPE_ID)("submitted", ctx.submitted)("List", ctx.contactTypesList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.Value)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.formCtrls.IsPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtY29udGFjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 43097:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-dependants/emp-dependants-card/emp-dependants-card.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDependantsCardComponent": () => (/* binding */ EmployeeDependantsCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_dependants_dialog_emp_dependants_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-dependants-dialog/emp-dependants-dialog.component */ 62483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_dependant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-dependant.service */ 18449);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function EmployeeDependantsCardComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \uD83D\uDEA8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EmployeeDependantsCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeeDependantsCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, EmployeeDependantsCardComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.dependantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.relationship);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.dob)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 12, "phoneNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.phoneNumber) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.employeeDependantInfo == null ? null : ctx_r0.employeeDependantInfo.emergencyContact);
} }
function EmployeeDependantsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 4);
} }
class EmployeeDependantsCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeDependantService, dialog) {
        super();
        this.employeeDependantService = employeeDependantService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeDependantInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeDependantInfo = null;
        this.employeeDependantService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeDependantInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_dependants_dialog_emp_dependants_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDependantsDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmployeeDependantsCardComponent.ɵfac = function EmployeeDependantsCardComponent_Factory(t) { return new (t || EmployeeDependantsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_dependant_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeDependantService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeeDependantsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeeDependantsCardComponent, selectors: [["emp-dependants-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "dependants", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "name", 3, "value"], ["label", "relationship", 3, "value"], ["label", "dob", 3, "value", "isDate"], [1, "rowItem"], [1, "row"], [1, "col-6"], [4, "ngIf"], [3, "rowNo"]], template: function EmployeeDependantsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeeDependantsCardComponent_div_0_Template, 17, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeeDependantsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZGVwZW5kYW50cy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 62483:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-dependants/emp-dependants-dialog/emp-dependants-dialog.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDependantsDialogComponent": () => (/* binding */ EmployeeDependantsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_dependant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-dependant.service */ 18449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/check-box/check-box.component */ 37167);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 89461);























function EmployeeDependantsDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmployeeDependantsDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function EmployeeDependantsDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-material-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("editRow", function EmployeeDependantsDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.employeeDependantToEdit($event)); })("deleteRow", function EmployeeDependantsDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeDependantsDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeDependantService, data, dialogRef) {
        super();
        this.employeeDependantService = employeeDependantService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "country",
            "governorate",
            "address",
            "primary",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            relationshipId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            dob: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_14__.CustomValidators.date]],
            phone: [
                null,
                [
                    // Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_ \-\(\)\S*$]*$/),
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.MobileStartsWith,
                    app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.mobileLength,
                ],
            ],
            emergencyContact: [null],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllRelationships();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeDependantService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                name: this.form.value.name,
                relationshipId: this.form.value.relationshipId,
                dob: this.form.value.dob,
                phone: this.form.value.phone,
                emergencyContact: this.form.value.emergencyContact ?? false,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeDependantService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeDependantService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeDependantToEdit(employeeDependantInfo) {
        this.form.patchValue(employeeDependantInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeDependantInfo) {
        let msg = this.msgTranslate(employeeDependantInfo.dependantName);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeDependantInfo);
        });
    }
    delete(employeeDependantInfo) {
        this.showLoading();
        this.employeeDependantService.Delete(employeeDependantInfo.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeDependantInfo.id == this.formCtrls.id.value)
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
    getAllRelationships() {
        this.employeeDependantService.getAllRelationships().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.relationshipList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmployeeDependantsDialogComponent.ɵfac = function EmployeeDependantsDialogComponent_Factory(t) { return new (t || EmployeeDependantsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_dependant_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeDependantService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef)); };
EmployeeDependantsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EmployeeDependantsDialogComponent, selectors: [["app-employee-dependants-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 20, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "dependants", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["label", "relationship", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "dob", 3, "control", "submitted"], ["label", "phone", 3, "control", "submitted"], [1, "col-md-4", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "emergencyContact", 3, "control"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeDependantsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmployeeDependantsDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-prime-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function EmployeeDependantsDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, EmployeeDependantsDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, EmployeeDependantsDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-dialog-actions", 18)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmployeeDependantsDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.relationshipId)("submitted", ctx.submitted)("List", ctx.relationshipList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.dob)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.phone)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.emergencyContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 18, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZGVwZW5kYW50cy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84353:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-documents/emp-documents-card/emp-documents-card.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDocumentsCardComponent": () => (/* binding */ EmployeeDocumentsCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_documents_dialog_emp_documents_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-documents-dialog/emp-documents-dialog.component */ 53477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_documents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-documents.service */ 85897);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 89461);











function EmployeeDocumentsCardComponent_div_0_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EmployeeDocumentsCardComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " --- ");
} }
function EmployeeDocumentsCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeeDocumentsCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, EmployeeDocumentsCardComponent_div_0_p_14_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, EmployeeDocumentsCardComponent_div_0_ng_template_15_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeDocumentInfo == null ? null : ctx_r0.employeeDocumentInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDocumentInfo == null ? null : ctx_r0.employeeDocumentInfo.document);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDocumentInfo == null ? null : ctx_r0.employeeDocumentInfo.issuingDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeDocumentInfo == null ? null : ctx_r0.employeeDocumentInfo.expirationDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 13, "attachment")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.employeeDocumentInfo == null ? null : ctx_r0.employeeDocumentInfo.attachment)("ngIfElse", _r4);
} }
function EmployeeDocumentsCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 4);
} }
class EmployeeDocumentsCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeDocumentsService, dialog) {
        super();
        this.employeeDocumentsService = employeeDocumentsService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeDocumentInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeDocumentInfo = null;
        this.employeeDocumentsService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeDocumentInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_documents_dialog_emp_documents_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDocumentsDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmployeeDocumentsCardComponent.ɵfac = function EmployeeDocumentsCardComponent_Factory(t) { return new (t || EmployeeDocumentsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_documents_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeDocumentsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeeDocumentsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeeDocumentsCardComponent, selectors: [["emp-documents-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "employeeDocuments", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "name", 3, "value"], ["label", "issuingDate", 3, "value", "isDate"], ["label", "expirationDate", 3, "value", "isDate"], [1, "rowItem"], [1, "row"], [1, "col-6"], [4, "ngIf", "ngIfElse"], ["noAttach", ""], [1, "fal", "fa-file-alt"], [3, "rowNo"]], template: function EmployeeDocumentsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeeDocumentsCardComponent_div_0_Template, 17, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeeDocumentsCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZG9jdW1lbnRzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 53477:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-documents/emp-documents-dialog/emp-documents-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDocumentsDialogComponent": () => (/* binding */ EmployeeDocumentsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_documents_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-documents.service */ 85897);
/* harmony import */ var app_hr_setup_services_identity_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/identity-type.service */ 36540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/file-input/file-input.component */ 82158);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 89461);
























function EmployeeDocumentsDialogComponent_reset_form_btn_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "reset-form-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmployeeDocumentsDialogComponent_reset_form_btn_21_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function EmployeeDocumentsDialogComponent_app_material_table_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-material-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("editRow", function EmployeeDocumentsDialogComponent_app_material_table_22_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.employeeDocumentToEdit($event)); })("deleteRow", function EmployeeDocumentsDialogComponent_app_material_table_22_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeDocumentsDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_0__.AppHelpers {
    constructor(employeeDocumentsService, identityTypeService, data, dialogRef) {
        super();
        this.employeeDocumentsService = employeeDocumentsService;
        this.identityTypeService = identityTypeService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "document",
            "issuingDate",
            "expirationDate",
            "documentNumber",
            "attachment",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            documentId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            issuingDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            expirationDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_15__.CustomValidators.date]],
            documentNumber: [null],
            attachment: [null],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("issuingDate", "expirationDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllDocumentTypes();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeDocumentsService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                documentId: this.form.value.documentId,
                issuingDate: this.form.value.issuingDate,
                expirationDate: this.form.value.expirationDate,
                documentNumber: this.form.value.documentNumber,
                attachment: this.form.value.attachment,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeDocumentsService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeDocumentsService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeDocumentToEdit(employeeDocumentInfo) {
        this.form.patchValue(employeeDocumentInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeDocumentInfo) {
        let msg = this.msgTranslate(employeeDocumentInfo.document);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeDocumentInfo);
        });
    }
    delete(employeeDocumentInfo) {
        this.showLoading();
        this.employeeDocumentsService.Delete(employeeDocumentInfo.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeDocumentInfo.id == this.formCtrls.id.value)
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
    getAllDocumentTypes() {
        this.identityTypeService.getAll().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success)) {
                this.documentTypeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmployeeDocumentsDialogComponent.ɵfac = function EmployeeDocumentsDialogComponent_Factory(t) { return new (t || EmployeeDocumentsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_documents_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeDocumentsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_hr_setup_services_identity_type_service__WEBPACK_IMPORTED_MODULE_4__.IdentityTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef)); };
EmployeeDocumentsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: EmployeeDocumentsDialogComponent, selectors: [["app-employee-documents-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 21, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "employeeDocuments", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "documentName", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "issuingDate", 3, "control", "submitted"], ["label", "expirationDate", 3, "control", "submitted"], ["label", "documentNumber", 3, "control", "submitted"], [1, "col-md-8", "col-sm-6", "col-12", "mbottom-20", "mtop-14"], ["label", "attachment", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeDocumentsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmployeeDocumentsDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "app-datepicker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "app-datepicker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-file-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "submit-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClick", function EmployeeDocumentsDialogComponent_Template_submit_btn_onClick_20_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, EmployeeDocumentsDialogComponent_reset_form_btn_21_Template, 1, 0, "reset-form-btn", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EmployeeDocumentsDialogComponent_app_material_table_22_Template, 1, 7, "app-material-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-dialog-actions", 18)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmployeeDocumentsDialogComponent_Template_button_click_24_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.documentId)("submitted", ctx.submitted)("List", ctx.documentTypeList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.issuingDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.expirationDate)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.documentNumber)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.formCtrls.attachment)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 19, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_file_input_file_input_component__WEBPACK_IMPORTED_MODULE_6__.FileInputComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_8__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_10__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_11__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_12__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtZG9jdW1lbnRzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 83223:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-military-data/emp-military-data-card/emp-military-data-card.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMilitaryDataCardComponent": () => (/* binding */ EmployeeMilitaryDataCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_military_data_dialog_emp_military_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-military-data-dialog/emp-military-data-dialog.component */ 22839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_military_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-military-data.service */ 16705);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmployeeMilitaryDataCardComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "card-row-item", 9)(2, "card-row-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.employeeMilitaryInfo == null ? null : ctx_r3.employeeMilitaryInfo.startDate)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.employeeMilitaryInfo == null ? null : ctx_r3.employeeMilitaryInfo.endDate)("isDate", true);
} }
function EmployeeMilitaryDataCardComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "card-row-item", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r5.employeeMilitaryInfo == null ? null : ctx_r5.employeeMilitaryInfo.date)("isDate", true);
} }
function EmployeeMilitaryDataCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeeMilitaryDataCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, EmployeeMilitaryDataCardComponent_div_0_ng_container_5_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, EmployeeMilitaryDataCardComponent_div_0_ng_template_6_Template, 1, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeMilitaryInfo == null ? null : ctx_r0.employeeMilitaryInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMilitaryInfo == null ? null : ctx_r0.employeeMilitaryInfo.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeMilitaryInfo == null ? null : ctx_r0.employeeMilitaryInfo.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showTwoDates)("ngIfElse", _r4);
} }
function EmployeeMilitaryDataCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 4);
} }
class EmployeeMilitaryDataCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeMilitaryDataService, dialog) {
        super();
        this.employeeMilitaryDataService = employeeMilitaryDataService;
        this.dialog = dialog;
        this.isLoaded = false;
        this.showTwoDates = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeMilitaryInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeMilitaryInfo = null;
        this.employeeMilitaryDataService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeMilitaryInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_military_data_dialog_emp_military_data_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeMilitaryDataDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmployeeMilitaryDataCardComponent.ɵfac = function EmployeeMilitaryDataCardComponent_Factory(t) { return new (t || EmployeeMilitaryDataCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_military_data_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeMilitaryDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeeMilitaryDataCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeeMilitaryDataCardComponent, selectors: [["emp-military-data-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "militaryData", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "status", 3, "value"], ["label", "grade", 3, "value"], [4, "ngIf", "ngIfElse"], ["oneDate", ""], ["label", "startDate", 3, "value", "isDate"], ["label", "endDate", 3, "value", "isDate"], ["label", "date", 3, "value", "isDate"], [3, "rowNo"]], template: function EmployeeMilitaryDataCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeeMilitaryDataCardComponent_div_0_Template, 8, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeeMilitaryDataCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbWlsaXRhcnktZGF0YS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 22839:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-military-data/emp-military-data-dialog/emp-military-data-dialog.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMilitaryDataDialogComponent": () => (/* binding */ EmployeeMilitaryDataDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_military_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-military-data.service */ 16705);
/* harmony import */ var app_hr_setup_services_militry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/militry.service */ 97555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 89461);






















function EmployeeMilitaryDataDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-prime-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx_r1.formCtrls.gradeId)("submitted", ctx_r1.submitted)("List", ctx_r1.militryGradeList)("filter", true)("appendTo", _r0);
} }
function EmployeeMilitaryDataDialogComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-datepicker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-datepicker", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx_r2.formCtrls.startDate)("submitted", ctx_r2.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx_r2.formCtrls.endDate)("submitted", ctx_r2.submitted);
} }
function EmployeeMilitaryDataDialogComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-datepicker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx_r4.formCtrls.date)("submitted", ctx_r4.submitted);
} }
function EmployeeMilitaryDataDialogComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeMilitaryDataDialogComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function EmployeeMilitaryDataDialogComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-material-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editRow", function EmployeeMilitaryDataDialogComponent_app_material_table_18_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.employeeDependantToEdit($event)); })("deleteRow", function EmployeeMilitaryDataDialogComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx_r6.isLoaded)("dataSource", ctx_r6.dataSource)("mandatoryColomns", ctx_r6.mandatoryColomns)("optionalColomns", ctx_r6.optionalColomns)("actions", ctx_r6.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmployeeMilitaryDataDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeMilitaryDataService, militryService, data, dialogRef) {
        super();
        this.employeeMilitaryDataService = employeeMilitaryDataService;
        this.militryService = militryService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "status",
            "grade",
            "startDate",
            "endDate",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            militaryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            gradeId: [null],
            startDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.date]],
            endDate: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.date]],
            date: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__.CustomValidators.date]],
        }, {
            validator: app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.compareDates("startDate", "endDate"),
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            this.getAllMilitryStatusList();
            this.getAllMilitryGradeList();
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeMilitaryDataService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                militaryID: this.form.value.militaryID,
                gradeId: this.form.value.gradeId,
            };
            if (this.showTwoDates) {
                model.startDate = this.form.value.startDate;
                model.endDate = this.form.value.endDate;
            }
            else
                model.date = this.form.value.date;
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeMilitaryDataService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeMilitaryDataService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeMilitaryToEdit(employeeMilitaryInfo) {
        this.form.patchValue(employeeMilitaryInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeMilitaryInfo) {
        let msg = this.msgTranslate(employeeMilitaryInfo.status);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeMilitaryInfo);
        });
    }
    delete(employeeMilitaryInfo) {
        this.showLoading();
        this.employeeMilitaryDataService.Delete(employeeMilitaryInfo.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeMilitaryInfo.id == this.formCtrls.id.value)
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
    getAllMilitryStatusList() {
        this.militryService.getAllMilitryStatus().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.militryStatusList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    getAllMilitryGradeList() {
        this.militryService.getAllMilitryGrades().subscribe((res) => {
            if ((res.message.messageType = app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success)) {
                this.militryGradeList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    onChangeStatus(values) {
        this.selectedStatus = values?.length > 0 ? values[0] : null;
        if (this.selectedStatus?.showGrade)
            this.formCtrls.gradeId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
        else
            this.formCtrls.gradeId.clearValidators();
        this.formCtrls.gradeId.updateValueAndValidity();
    }
    get showTwoDates() {
        // check if selected status has two dates or one
        return true;
    }
}
EmployeeMilitaryDataDialogComponent.ɵfac = function EmployeeMilitaryDataDialogComponent_Factory(t) { return new (t || EmployeeMilitaryDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_military_data_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeMilitaryDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_hr_setup_services_militry_service__WEBPACK_IMPORTED_MODULE_4__.MilitryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef)); };
EmployeeMilitaryDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: EmployeeMilitaryDataDialogComponent, selectors: [["app-employee-military-data-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 16, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "militaryData", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "status", 3, "control", "submitted", "List", "filter", "appendTo", "change"], ["class", "col-md-4 col-sm-6 col-12", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["oneDate", ""], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], ["label", "grade", 3, "control", "submitted", "List", "filter", "appendTo"], ["label", "startDate", 3, "control", "submitted"], ["label", "endDate", 3, "control", "submitted"], ["label", "date", 3, "control", "submitted"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmployeeMilitaryDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeMilitaryDataDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "app-prime-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function EmployeeMilitaryDataDialogComponent_Template_app_prime_dropdown_change_11_listener($event) { return ctx.onChangeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, EmployeeMilitaryDataDialogComponent_div_12_Template, 2, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, EmployeeMilitaryDataDialogComponent_ng_container_13_Template, 5, 4, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, EmployeeMilitaryDataDialogComponent_ng_template_14_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function EmployeeMilitaryDataDialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, EmployeeMilitaryDataDialogComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, EmployeeMilitaryDataDialogComponent_app_material_table_18_Template, 1, 7, "app-material-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "mat-dialog-actions", 16)(20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function EmployeeMilitaryDataDialogComponent_Template_button_click_20_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](7);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.militaryID)("submitted", ctx.submitted)("List", ctx.militryStatusList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedStatus == null ? null : ctx.selectedStatus.showGrade);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showTwoDates)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 14, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtbWlsaXRhcnktZGF0YS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 59897:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-personal-info-core/empl-personal-info-core.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePersonalInfoCoreComponent": () => (/* binding */ EmployeePersonalInfoCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_personal_info_emp_personal_info_card_emp_personal_info_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-personal-info/emp-personal-info-card/emp-personal-info-card.component */ 60930);
/* harmony import */ var _emp_contact_and_address_emp_contact_and_address_card_emp_contact_and_address_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-contact-and-address/emp-contact-and-address-card/emp-contact-and-address-card.component */ 46329);
/* harmony import */ var _emp_dependants_emp_dependants_card_emp_dependants_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emp-dependants/emp-dependants-card/emp-dependants-card.component */ 43097);
/* harmony import */ var _emp_military_data_emp_military_data_card_emp_military_data_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emp-military-data/emp-military-data-card/emp-military-data-card.component */ 83223);
/* harmony import */ var _emp_documents_emp_documents_card_emp_documents_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../emp-documents/emp-documents-card/emp-documents-card.component */ 84353);











function EmployeePersonalInfoCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "emp-personal-info-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmployeePersonalInfoCoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "emp-contact-and-address-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
function EmployeePersonalInfoCoreComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "emp-dependants-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r2.employeeId);
} }
function EmployeePersonalInfoCoreComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "emp-military-data-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r3.employeeId);
} }
function EmployeePersonalInfoCoreComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "emp-documents-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("employeeId", ctx_r4.employeeId);
} }
class EmployeePersonalInfoCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_personal_info_tab);
        console.log("personal-info", this.allowedSections);
    }
}
EmployeePersonalInfoCoreComponent.ɵfac = function EmployeePersonalInfoCoreComponent_Factory(t) { return new (t || EmployeePersonalInfoCoreComponent)(); };
EmployeePersonalInfoCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EmployeePersonalInfoCoreComponent, selectors: [["emp-personal-info-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 8, consts: [[1, "row"], [1, "col-12"], ["title", "personalInfo", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmployeePersonalInfoCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, EmployeePersonalInfoCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, EmployeePersonalInfoCoreComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, EmployeePersonalInfoCoreComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, EmployeePersonalInfoCoreComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, EmployeePersonalInfoCoreComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_personal_info_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_contact_address_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_dependants_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_military_data_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_documents_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _emp_personal_info_emp_personal_info_card_emp_personal_info_card_component__WEBPACK_IMPORTED_MODULE_3__.EmployeePersonalInfoCardComponent, _emp_contact_and_address_emp_contact_and_address_card_emp_contact_and_address_card_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeContactAndAddressCardComponent, _emp_dependants_emp_dependants_card_emp_dependants_card_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeDependantsCardComponent, _emp_military_data_emp_military_data_card_emp_military_data_card_component__WEBPACK_IMPORTED_MODULE_6__.EmployeeMilitaryDataCardComponent, _emp_documents_emp_documents_card_emp_documents_card_component__WEBPACK_IMPORTED_MODULE_7__.EmployeeDocumentsCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsLXBlcnNvbmFsLWluZm8tY29yZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 60930:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-personal-info/emp-personal-info-card/emp-personal-info-card.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePersonalInfoCardComponent": () => (/* binding */ EmployeePersonalInfoCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_personal_info_dialog_emp_personal_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-personal-info-dialog/emp-personal-info-dialog.component */ 17588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_personal_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-personal-info.service */ 27975);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmployeePersonalInfoCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmployeePersonalInfoCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6)(5, "card-row-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.dob)("isDate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.placeOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeePersonalInfo == null ? null : ctx_r0.employeePersonalInfo.maritalStatus);
} }
function EmployeePersonalInfoCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 5);
} }
class EmployeePersonalInfoCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeePersonalInfoService, dialog) {
        super();
        this.employeePersonalInfoService = employeePersonalInfoService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeePersonalInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getEmployeePersonalInfoByEmpId();
        else
            this.isLoaded = true;
    }
    getEmployeePersonalInfoByEmpId() {
        this.employeePersonalInfo = null;
        this.employeePersonalInfoService
            .getByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeePersonalInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_personal_info_dialog_emp_personal_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmployeePersonalInfoDialogComponent, {
            data: {
                employeeId: this.employeeId,
                employee: this.employeePersonalInfo,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getEmployeePersonalInfoByEmpId();
        });
    }
}
EmployeePersonalInfoCardComponent.ɵfac = function EmployeePersonalInfoCardComponent_Factory(t) { return new (t || EmployeePersonalInfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_personal_info_service__WEBPACK_IMPORTED_MODULE_3__.EmployeePersonalInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmployeePersonalInfoCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmployeePersonalInfoCardComponent, selectors: [["emp-personal-info-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "personalInfo", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "dob", 3, "value", "isDate"], ["label", "placeOfBirth", 3, "value"], ["label", "maritalStatus", 3, "value"], [3, "rowNo"]], template: function EmployeePersonalInfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmployeePersonalInfoCardComponent_div_0_Template, 6, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmployeePersonalInfoCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGVyc29uYWwtaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 17588:
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/personal-information/emp-personal-info/emp-personal-info-dialog/emp-personal-info-dialog.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePersonalInfoDialogComponent": () => (/* binding */ EmployeePersonalInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_personal_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-personal-info.service */ 27975);
/* harmony import */ var app_hr_setup_services_marital_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hr-setup/services/marital-status.service */ 76311);
/* harmony import */ var _shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/datepicker/datepicker.component */ 32222);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















class EmployeePersonalInfoDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeePersonalInfoService, maritalStatusService, data, dialogRef) {
        super();
        this.employeePersonalInfoService = employeePersonalInfoService;
        this.maritalStatusService = maritalStatusService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.submitted = false;
        this.updated = false;
        if (data.employeePersonalData) {
            this.employeeId = data.employeePersonalData.employeeId;
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            dob: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_11__.CustomValidators.date]],
            placeOfBirth: [null],
            maritalID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
        if (this.data.employeePersonalData?.id > 0 && this.checkNoBusinessOrCompany())
            this.employeeToEdit(this.data.employeePersonalData);
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany()) {
            this.getAllMaritalStatus();
        }
    }
    submit() {
        // console.log(this.form.value);
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                PersonID: this.employeeId,
                id: this.form.value.id,
                dob: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.dob),
                placeOfBirth: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.HelpersFunctions.mapDateReverse(this.form.value.placeOfBirth),
                nationality: this.form.value.nationality,
                maritalID: this.form.value.maritalID,
                nationalid: this.form.value.nationalid,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeePersonalInfoService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                // this.employeeToEdit();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeePersonalInfoService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                // this.employeeToEdit();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeToEdit(employeePersonalInfo) {
        this.form.patchValue(employeePersonalInfo);
        // console.log(this.form.value);
    }
    getAllMaritalStatus() {
        this.maritalStatusService.getAll().subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.maritalStatusList = res.data;
            }
            else
                this.errorList(res.message.messages);
        });
    }
}
EmployeePersonalInfoDialogComponent.ɵfac = function EmployeePersonalInfoDialogComponent_Factory(t) { return new (t || EmployeePersonalInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_personal_info_service__WEBPACK_IMPORTED_MODULE_3__.EmployeePersonalInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_hr_setup_services_marital_status_service__WEBPACK_IMPORTED_MODULE_4__.MaritalStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
EmployeePersonalInfoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EmployeePersonalInfoDialogComponent, selectors: [["app-employee-personal-info-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 15, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "personalInfo", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], ["label", "dob", 3, "control", "submitted"], ["label", "placeOfBirth", 3, "control", "submitted"], ["label", "maritalStatus", 3, "control", "submitted", "List", "filter", "appendTo"], [3, "id", "isEmp", "onClick"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"]], template: function EmployeePersonalInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmployeePersonalInfoDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-datepicker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-prime-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function EmployeePersonalInfoDialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "mat-dialog-actions", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EmployeePersonalInfoDialogComponent_Template_button_click_18_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.dob)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.placeOfBirth)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.maritalID)("submitted", ctx.submitted)("List", ctx.maritalStatusList)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 13, "General.close"), " ");
    } }, dependencies: [_shared_components_dynamic_form_field_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__.DatepickerComponent, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__.DropdownComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_8__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_9__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcGVyc29uYWwtaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 22718:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/sap-integration/emp-s4-hana/emp-s4-hana-card/emp-s4-hana-card.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpS4HanaCardComponent": () => (/* binding */ EmpS4HanaCardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_s4_hana_dialog_emp_s4_hana_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-s4-hana-dialog/emp-s4-hana-dialog.component */ 22331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_s4_hana_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-s4-hana.service */ 98352);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpS4HanaCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpS4HanaCardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeS4HanaInfo == null ? null : ctx_r0.employeeS4HanaInfo.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeS4HanaInfo == null ? null : ctx_r0.employeeS4HanaInfo.sapCostCenter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeS4HanaInfo == null ? null : ctx_r0.employeeS4HanaInfo.systemInstance);
} }
function EmpS4HanaCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 2);
} }
class EmpS4HanaCardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeS4HanaService, dialog) {
        super();
        this.employeeS4HanaService = employeeS4HanaService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeS4HanaInfo = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeS4HanaInfo = null;
        this.employeeS4HanaService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeS4HanaInfo = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_s4_hana_dialog_emp_s4_hana_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpS4HanaDialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpS4HanaCardComponent.ɵfac = function EmpS4HanaCardComponent_Factory(t) { return new (t || EmpS4HanaCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_s4_hana_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeS4HanaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpS4HanaCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpS4HanaCardComponent, selectors: [["app-emp-s4-hana-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "s4Hana", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "costCentres", 3, "value"], [3, "value"], [3, "rowNo"]], template: function EmpS4HanaCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpS4HanaCardComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpS4HanaCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtczQtaGFuYS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 22331:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/sap-integration/emp-s4-hana/emp-s4-hana-dialog/emp-s4-hana-dialog.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpS4HanaDialogComponent": () => (/* binding */ EmpS4HanaDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_s4_hana_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-s4-hana.service */ 98352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/prime-ng/dropdown/dropdown.component */ 7384);
/* harmony import */ var _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/s4-system-instance-dropdown/s4-system-instance-dropdown.component */ 92363);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function EmpS4HanaDialogComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpS4HanaDialogComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function EmpS4HanaDialogComponent_app_material_table_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-material-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function EmpS4HanaDialogComponent_app_material_table_16_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.employeeS4HanaToEdit($event)); })("deleteRow", function EmpS4HanaDialogComponent_app_material_table_16_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpS4HanaDialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeS4HanaService, data, dialogRef) {
        super();
        this.employeeS4HanaService = employeeS4HanaService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "systemInstance",
            "sapCostCenter",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            systemInstanceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            sapCostCenter: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeS4HanaService
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                systemInstanceId: this.form.value.systemInstanceId,
                sapCostCenter: this.form.value.sapCostCenter,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeS4HanaService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeS4HanaService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeS4HanaToEdit(employeeS4HanaInfo) {
        this.form.patchValue(employeeS4HanaInfo);
        // console.log(this.form.value);
    }
    onDelete(employeeS4HanaInfo) {
        let msg = this.msgTranslate(employeeS4HanaInfo.systemInstance);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeS4HanaInfo);
        });
    }
    delete(employeeS4HanaInfo) {
        this.showLoading();
        this.employeeS4HanaService
            .Delete(employeeS4HanaInfo.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeS4HanaInfo.id == this.formCtrls.id.value)
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
    getAllSapCostCenterListBySystemInstanceId(values) {
        // this.formCtrls.sapCostCenter.setValue(null);
        // let s4SystemInstanceId: number = values.length > 0 ? values[0].id : 0;
        // if (s4SystemInstanceId > 0) {
        //   this.showLoading();
        //   this.governorateService
        //     .getAllByCountryId(s4SystemInstanceId)
        //     .subscribe((res: IResponse<Idropdown[]>) => {
        //       if ((res.message.messageType = MessageTypes.Success)) {
        //         this.sapCostCenterList = res.data;
        //       } else this.errorList(res.message.messages);
        //       this.hideLoading();
        //     });
        //   this.formCtrls.sapCostCenter.enable();
        // } else this.formCtrls.sapCostCenter.disable();
    }
}
EmpS4HanaDialogComponent.ɵfac = function EmpS4HanaDialogComponent_Factory(t) { return new (t || EmpS4HanaDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_s4_hana_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeS4HanaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef)); };
EmpS4HanaDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EmpS4HanaDialogComponent, selectors: [["app-emp-s4-hana-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 16, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "s4Hana", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-6", "col-12"], [3, "control", "submitted", "filter", "appendTo", "change"], ["label", "sapCostCenter", 3, "control", "submitted", "List", "appendTo"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpS4HanaDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpS4HanaDialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "app-s4-system-instance-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function EmpS4HanaDialogComponent_Template_app_s4_system_instance_dropdown_change_11_listener($event) { return ctx.getAllSapCostCenterListBySystemInstanceId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-prime-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "submit-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function EmpS4HanaDialogComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, EmpS4HanaDialogComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, EmpS4HanaDialogComponent_app_material_table_16_Template, 1, 7, "app-material-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-dialog-actions", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpS4HanaDialogComponent_Template_button_click_18_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.systemInstanceId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.sapCostCenter)("submitted", ctx.submitted)("List", ctx.sapCostCenterList)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 14, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_dynamic_form_field_prime_ng_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, _shared_components_dropdowns_s4_system_instance_dropdown_s4_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.S4SystemInstanceDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtczQtaGFuYS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14393:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/sap-integration/emp-sap-b1/emp-sap-b1-card/emp-sap-b1-card.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpSapB1CardComponent": () => (/* binding */ EmpSapB1CardComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _emp_sap_b1_dialog_emp_sap_b1_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emp-sap-b1-dialog/emp-sap-b1-dialog.component */ 93035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_sap_b1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-sap-b1.service */ 75872);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/skeletons/employee-profile-card-skeleton/employee-profile-card-skeleton.component */ 79213);
/* harmony import */ var _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../card-shared-components/card-row-item/card-row-item.component */ 58588);










function EmpSapB1CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickIcon", function EmpSapB1CardComponent_div_0_Template_card_header_onClickIcon_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAddEditDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "card-row-item", 5)(4, "card-row-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("canMadeAction", true)("cardId", (tmp_1_0 = ctx_r0.employeeSapB1Info == null ? null : ctx_r0.employeeSapB1Info.id) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0)("isLoaded", ctx_r0.isLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSapB1Info == null ? null : ctx_r0.employeeSapB1Info.projectCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.employeeSapB1Info == null ? null : ctx_r0.employeeSapB1Info.systemInstance);
} }
function EmpSapB1CardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-employee-profile-card-skeleton", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowNo", 3);
} }
class EmpSapB1CardComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeSapB1Service, dialog) {
        super();
        this.employeeSapB1Service = employeeSapB1Service;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        this.employeeSapB1Info = null;
        if (this.employeeId > 0 && this.checkNoBusinessOrCompany())
            this.getAllByEmployeeId();
        else
            this.isLoaded = true;
    }
    getAllByEmployeeId() {
        this.employeeSapB1Info = null;
        this.employeeSapB1Service
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.employeeSapB1Info = res.data[0];
                this.isLoaded = true;
            }
            else
                this.errorList(res.message.messages);
        });
    }
    openAddEditDialog() {
        this.dialog
            .open(_emp_sap_b1_dialog_emp_sap_b1_dialog_component__WEBPACK_IMPORTED_MODULE_2__.EmpSapB1DialogComponent, {
            data: {
                employeeId: this.employeeId,
            },
            position: {
                top: "40px",
            },
            minWidth: "600px",
            panelClass: "dialog-emp-form",
            autoFocus: false,
        })
            .afterClosed()
            .subscribe((updated) => {
            if (updated)
                this.getAllByEmployeeId();
        });
    }
}
EmpSapB1CardComponent.ɵfac = function EmpSapB1CardComponent_Factory(t) { return new (t || EmpSapB1CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_sap_b1_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeSapB1Service), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
EmpSapB1CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EmpSapB1CardComponent, selectors: [["app-emp-sap-b1-card"]], inputs: { employeeId: "employeeId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["class", "cardSection", 4, "ngIf", "ngIfElse"], ["notLoaded", ""], [1, "cardSection"], ["cardTitle", "sapB1", 3, "canMadeAction", "cardId", "isLoaded", "onClickIcon"], [1, "cardSectionBody"], ["label", "costCentres", 3, "value"], [3, "value"], [3, "rowNo"]], template: function EmpSapB1CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmpSapB1CardComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EmpSapB1CardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoaded)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_skeletons_employee_profile_card_skeleton_employee_profile_card_skeleton_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeProfileCardSkeletonComponent, _card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_5__.CardHeaderComponent, _card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_6__.CardRowItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtc2FwLWIxLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 93035:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/sap-integration/emp-sap-b1/emp-sap-b1-dialog/emp-sap-b1-dialog.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpSapB1DialogComponent": () => (/* binding */ EmpSapB1DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_personnel_setup_services_employees_employee_sap_b1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/personnel-setup/services/employees/employee-sap-b1.service */ 75872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/dynamic-form-field/input/input.component */ 45471);
/* harmony import */ var _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/material-table/material-table.component */ 56184);
/* harmony import */ var _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/components/dropdowns/sap-system-instance-dropdown/sap-system-instance-dropdown.component */ 74137);
/* harmony import */ var _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/reset-form-btn/reset-form-btn.component */ 22289);
/* harmony import */ var _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/buttons/submit-btn/submit-btn.component */ 53026);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 89461);



















function EmpSapB1DialogComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpSapB1DialogComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function EmpSapB1DialogComponent_app_material_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-material-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editRow", function EmpSapB1DialogComponent_app_material_table_18_Template_app_material_table_editRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.employeeSapB1ToEdit($event)); })("deleteRow", function EmpSapB1DialogComponent_app_material_table_18_Template_app_material_table_deleteRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.onDelete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx_r2.isLoaded)("dataSource", ctx_r2.dataSource)("mandatoryColomns", ctx_r2.mandatoryColomns)("optionalColomns", ctx_r2.optionalColomns)("actions", ctx_r2.rowFunctions)("showPaginator", false)("showFilter", false);
} }
class EmpSapB1DialogComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(employeeSapB1Service, data, dialogRef) {
        super();
        this.employeeSapB1Service = employeeSapB1Service;
        this.data = data;
        this.dialogRef = dialogRef;
        this.employeeId = 0;
        this.updated = false;
        this.mandatoryColomns = [
            "Ser",
            // "id",
            "systemInstance",
            "projectCode",
            "dimintion",
            "actions",
        ];
        this.optionalColomns = [];
        this.isLoaded = false;
        this.submitted = false;
        this.employeeId = data.employeeId;
    }
    ngOnInit() {
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            systemInstanceId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            projectCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            dimintion: [null],
        });
        this.dialogRef.backdropClick().subscribe((ele) => {
            this.onCloseDialog();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onCloseDialog() {
        this.dialogRef.close(this.updated);
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany()) {
            if (this.employeeId > 0)
                this.getAll();
        }
    }
    getAll() {
        this.employeeSapB1Service
            .getAllByEmployeeId(this.employeeId)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(res.data);
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
            const model = {
                Person_ID: this.employeeId,
                id: this.form.value.id,
                systemInstanceId: this.form.value.systemInstanceId,
                projectCode: this.form.value.projectCode,
                dimintion: this.form.value.dimintion,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        } // else this.toastr.error("General.formNotValid");
    }
    create(model) {
        this.showLoading();
        this.employeeSapB1Service
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.employeeSapB1Service
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                this.updated = true;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    employeeSapB1ToEdit(employeeSapB1Info) {
        this.form.patchValue(employeeSapB1Info);
        // console.log(this.form.value);
    }
    onDelete(employeeSapB1Info) {
        let msg = this.msgTranslate(employeeSapB1Info.systemInstance);
        this.deleateDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(employeeSapB1Info);
        });
    }
    delete(employeeSapB1Info) {
        this.showLoading();
        this.employeeSapB1Service
            .Delete(employeeSapB1Info.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                this.getAll();
                if (employeeSapB1Info.id == this.formCtrls.id.value)
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
EmpSapB1DialogComponent.ɵfac = function EmpSapB1DialogComponent_Factory(t) { return new (t || EmpSapB1DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_personnel_setup_services_employees_employee_sap_b1_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeSapB1Service), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef)); };
EmpSapB1DialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EmpSapB1DialogComponent, selectors: [["app-emp-sap-b1-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 16, consts: [["mat-dialog-title", "", 1, "primary-color", "font-size-20", "m-0"], ["title", "sapB1", 1, "d-inline-block", "mtop-5"], ["mat-icon-button", "", 1, "float-right", "mb-1", 3, "click"], [1, "pi", "pi-times"], [1, "container-fluid", "mx-0"], ["dialogContainer", ""], [3, "formGroup"], [1, "row", "ptop-20"], [1, "col-md-4", "col-sm-6", "col-12"], [3, "control", "submitted", "filter", "appendTo"], ["label", "projectCode", 3, "control", "submitted"], ["label", "dimintion", 3, "control", "submitted"], [3, "id", "isEmp", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", 1, "btn", "bg-light-secondary", 3, "click"], [3, "click"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "actions", "showPaginator", "showFilter", "editRow", "deleteRow"]], template: function EmpSapB1DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpSapB1DialogComponent_Template_button_click_4_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-dialog-content", 4, 5)(8, "form", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "app-sap-system-instance-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "submit-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function EmpSapB1DialogComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, EmpSapB1DialogComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, EmpSapB1DialogComponent_app_material_table_18_Template, 1, 7, "app-material-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-dialog-actions", 15)(20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmpSapB1DialogComponent_Template_button_click_20_listener() { return ctx.onCloseDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.systemInstanceId)("submitted", ctx.submitted)("filter", true)("appendTo", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.projectCode)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.dimintion)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value)("isEmp", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.employeeId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 14, "General.close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_dropdowns_sap_system_instance_dropdown_sap_system_instance_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.SapSystemInstanceDropdownComponent, _shared_components_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtc2FwLWIxLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 56333:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/personnel-setup/components/employees/sap-integration/emp-sap-integration-core/emp-sap-integration-core.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpSapIntegrationCoreComponent": () => (/* binding */ EmpSapIntegrationCoreComponent)
/* harmony export */ });
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _emp_sap_b1_emp_sap_b1_card_emp_sap_b1_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp-sap-b1/emp-sap-b1-card/emp-sap-b1-card.component */ 14393);
/* harmony import */ var _emp_s4_hana_emp_s4_hana_card_emp_s4_hana_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emp-s4-hana/emp-s4-hana-card/emp-s4-hana-card.component */ 22718);








function EmpSapIntegrationCoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-emp-sap-b1-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r0.employeeId);
} }
function EmpSapIntegrationCoreComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-emp-s4-hana-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("employeeId", ctx_r1.employeeId);
} }
class EmpSapIntegrationCoreComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor() {
        super();
        this.viewsManager = app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager;
    }
    ngOnInit() { }
    onModulesChanged() {
        this.allowedSections = this.getCustomViewChildren(this.getParentViewName, app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_0__.ViewsManager.emp_sap_integration_tab);
        console.log("sap_integration", this.allowedSections);
    }
}
EmpSapIntegrationCoreComponent.ɵfac = function EmpSapIntegrationCoreComponent_Factory(t) { return new (t || EmpSapIntegrationCoreComponent)(); };
EmpSapIntegrationCoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmpSapIntegrationCoreComponent, selectors: [["emp-sap-integration-core"]], inputs: { employeeId: "employeeId", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 5, consts: [[1, "row"], [1, "col-12"], ["title", "sapIntegration", "color", "info", 3, "icon"], [1, "container-fluid", "p-0"], [1, "row", "mx-md-n2"], ["class", "col-md-4 col-12 p-0 px-md-2", 4, "ngIf"], [1, "col-md-4", "col-12", "p-0", "px-md-2"], [3, "employeeId"]], template: function EmpSapIntegrationCoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "page-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-content", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EmpSapIntegrationCoreComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmpSapIntegrationCoreComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ar", ctx.languageService.isArabic);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_SAPB1_sec));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isViewAllowed(ctx.viewsManager.emp_S4Hana_sec));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _emp_sap_b1_emp_sap_b1_card_emp_sap_b1_card_component__WEBPACK_IMPORTED_MODULE_3__.EmpSapB1CardComponent, _emp_s4_hana_emp_s4_hana_card_emp_s4_hana_card_component__WEBPACK_IMPORTED_MODULE_4__.EmpS4HanaCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtc2FwLWludGVncmF0aW9uLWNvcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 74127:
/*!*******************************************************************!*\
  !*** ./src/app/personnel-setup/personnel-setup-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonnelSetupRoutingModule": () => (/* binding */ PersonnelSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/employees/add-employee/add-employee.component */ 29222);
/* harmony import */ var _components_employees_employees_index_employees_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employees/employees-index/employees-index.component */ 89535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    {
        path: "employees",
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.employees },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_0__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_employees_employees_index_employees_index_component__WEBPACK_IMPORTED_MODULE_3__.EmployeesIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.employees_index },
            },
            {
                path: "add",
                component: _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__.AddEmployeeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.employee_profile },
            },
            {
                path: "edit/:employeeId",
                component: _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_2__.AddEmployeeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_1__.ViewsManager.employee_profile },
            },
        ],
    },
];
class PersonnelSetupRoutingModule {
}
PersonnelSetupRoutingModule.ɵfac = function PersonnelSetupRoutingModule_Factory(t) { return new (t || PersonnelSetupRoutingModule)(); };
PersonnelSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PersonnelSetupRoutingModule });
PersonnelSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PersonnelSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 43578:
/*!***********************************************************!*\
  !*** ./src/app/personnel-setup/personnel-setup.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonnelSetupModule": () => (/* binding */ PersonnelSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _personnel_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personnel-setup-routing.module */ 74127);
/* harmony import */ var _components_employees_employees_index_employees_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/employees/employees-index/employees-index.component */ 89535);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employees/add-employee/add-employee.component */ 29222);
/* harmony import */ var _components_employees_employee_general_info_emp_general_info_dialog_emp_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employees/employee-general-info/emp-general-info-dialog/emp-general-info-dialog.component */ 71125);
/* harmony import */ var _components_employees_employee_general_info_emp_general_info_card_emp_general_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employees/employee-general-info/emp-general-info-card/emp-general-info-card.component */ 59330);
/* harmony import */ var _components_employees_card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employees/card-shared-components/card-header/card-header.component */ 43536);
/* harmony import */ var _components_employees_card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employees/card-shared-components/card-row-item/card-row-item.component */ 58588);
/* harmony import */ var _components_employees_employee_career_emp_career_core_emp_career_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employees/employee-career/emp-career-core/emp-career-core.component */ 70923);
/* harmony import */ var _components_employees_employee_career_emp_work_experience_emp_work_experience_dialog_employee_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employees/employee-career/emp-work-experience/emp-work-experience-dialog/employee-work-experience-dialog.component */ 13619);
/* harmony import */ var _components_employees_employee_general_info_emp_general_info_core_emp_general_info_core_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/employees/employee-general-info/emp-general-info-core/emp-general-info-core.component */ 78392);
/* harmony import */ var _components_employees_personal_information_emp_personal_info_core_empl_personal_info_core_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/employees/personal-information/emp-personal-info-core/empl-personal-info-core.component */ 59897);
/* harmony import */ var _components_employees_personal_information_emp_contact_and_address_emp_address_dialog_emp_address_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/employees/personal-information/emp-contact-and-address/emp-address-dialog/emp-address-dialog.component */ 9833);
/* harmony import */ var _components_employees_personal_information_emp_contact_and_address_emp_contact_and_address_card_emp_contact_and_address_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/employees/personal-information/emp-contact-and-address/emp-contact-and-address-card/emp-contact-and-address-card.component */ 46329);
/* harmony import */ var _components_employees_personal_information_emp_contact_and_address_emp_contact_and_address_dialog_emp_contact_and_address_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employees/personal-information/emp-contact-and-address/emp-contact-and-address-dialog/emp-contact-and-address-dialog.component */ 10097);
/* harmony import */ var _components_employees_personal_information_emp_contact_and_address_emp_contact_dialog_emp_contact_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employees/personal-information/emp-contact-and-address/emp-contact-dialog/emp-contact-dialog.component */ 58751);
/* harmony import */ var _components_employees_personal_information_emp_dependants_emp_dependants_card_emp_dependants_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employees/personal-information/emp-dependants/emp-dependants-card/emp-dependants-card.component */ 43097);
/* harmony import */ var _components_employees_personal_information_emp_dependants_emp_dependants_dialog_emp_dependants_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employees/personal-information/emp-dependants/emp-dependants-dialog/emp-dependants-dialog.component */ 62483);
/* harmony import */ var _components_employees_personal_information_emp_documents_emp_documents_card_emp_documents_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employees/personal-information/emp-documents/emp-documents-card/emp-documents-card.component */ 84353);
/* harmony import */ var _components_employees_personal_information_emp_documents_emp_documents_dialog_emp_documents_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/employees/personal-information/emp-documents/emp-documents-dialog/emp-documents-dialog.component */ 53477);
/* harmony import */ var _components_employees_personal_information_emp_military_data_emp_military_data_card_emp_military_data_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/employees/personal-information/emp-military-data/emp-military-data-card/emp-military-data-card.component */ 83223);
/* harmony import */ var _components_employees_personal_information_emp_military_data_emp_military_data_dialog_emp_military_data_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/employees/personal-information/emp-military-data/emp-military-data-dialog/emp-military-data-dialog.component */ 22839);
/* harmony import */ var _components_employees_personal_information_emp_personal_info_emp_personal_info_card_emp_personal_info_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/employees/personal-information/emp-personal-info/emp-personal-info-card/emp-personal-info-card.component */ 60930);
/* harmony import */ var _components_employees_personal_information_emp_personal_info_emp_personal_info_dialog_emp_personal_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/employees/personal-information/emp-personal-info/emp-personal-info-dialog/emp-personal-info-dialog.component */ 17588);
/* harmony import */ var _components_employees_employee_career_emp_education_emp_education_card_emp_education_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/employees/employee-career/emp-education/emp-education-card/emp-education-card.component */ 36355);
/* harmony import */ var _components_employees_employee_career_emp_education_emp_education_dialog_emp_education_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/employees/employee-career/emp-education/emp-education-dialog/emp-education-dialog.component */ 41864);
/* harmony import */ var _components_employees_employee_career_emp_work_experience_emp_work_experience_card_emp_work_experience_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/employees/employee-career/emp-work-experience/emp-work-experience-card/emp-work-experience-card.component */ 5760);
/* harmony import */ var _components_employees_employement_information_employement_info_core_employement_info_core_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/employees/employement-information/employement-info-core/employement-info-core.component */ 20001);
/* harmony import */ var _components_employees_employement_information_emp_job_info_emp_job_info_card_emp_job_info_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/employees/employement-information/emp-job-info/emp-job-info-card/emp-job-info-card.component */ 55813);
/* harmony import */ var _components_employees_employement_information_emp_job_info_emp_job_info_dialog_emp_job_info_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/employees/employement-information/emp-job-info/emp-job-info-dialog/emp-job-info-dialog.component */ 73610);
/* harmony import */ var _components_employees_employement_information_emp_work_schedule_emp_work_schedule_card_emp_work_schedule_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/employees/employement-information/emp-work-schedule/emp-work-schedule-card/emp-work-schedule-card.component */ 1250);
/* harmony import */ var _components_employees_employement_information_emp_work_schedule_emp_work_schedule_dialog_emp_work_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/employees/employement-information/emp-work-schedule/emp-work-schedule-dialog/emp-work-schedule-dialog.component */ 47437);
/* harmony import */ var _components_employees_employement_information_emp_hiring_documents_emp_hiring_documents_card_emp_hiring_documents_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/employees/employement-information/emp-hiring-documents/emp-hiring-documents-card/emp-hiring-documents-card.component */ 78471);
/* harmony import */ var _components_employees_employement_information_emp_hiring_documents_emp_hiring_documents_dialog_emp_hiring_documents_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/employees/employement-information/emp-hiring-documents/emp-hiring-documents-dialog/emp-hiring-documents-dialog.component */ 10205);
/* harmony import */ var _components_employees_employement_information_emp_location_emp_location_card_emp_location_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/employees/employement-information/emp-location/emp-location-card/emp-location-card.component */ 6208);
/* harmony import */ var _components_employees_employement_information_emp_location_emp_location_dialog_emp_location_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/employees/employement-information/emp-location/emp-location-dialog/emp-location-dialog.component */ 50677);
/* harmony import */ var _components_employees_employement_information_emp_custodies_emp_custodies_card_emp_custodies_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/employees/employement-information/emp-custodies/emp-custodies-card/emp-custodies-card.component */ 63042);
/* harmony import */ var _components_employees_employement_information_emp_custodies_emp_custodies_dialog_emp_custodies_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/employees/employement-information/emp-custodies/emp-custodies-dialog/emp-custodies-dialog.component */ 9228);
/* harmony import */ var _components_employees_employement_information_emp_social_insurance_emp_social_insurance_card_emp_social_insurance_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/employees/employement-information/emp-social-insurance/emp-social-insurance-card/emp-social-insurance-card.component */ 81988);
/* harmony import */ var _components_employees_employement_information_emp_social_insurance_emp_social_insurance_dialog_emp_social_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/employees/employement-information/emp-social-insurance/emp-social-insurance-dialog/emp-social-insurance-dialog.component */ 74506);
/* harmony import */ var _components_employees_employement_information_emp_medical_insurance_emp_medical_insurance_card_emp_medical_insurance_card_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/employees/employement-information/emp-medical-insurance/emp-medical-insurance-card/emp-medical-insurance-card.component */ 13881);
/* harmony import */ var _components_employees_employement_information_emp_medical_insurance_emp_medical_insurance_dialog_emp_medical_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/employees/employement-information/emp-medical-insurance/emp-medical-insurance-dialog/emp-medical-insurance-dialog.component */ 92545);
/* harmony import */ var _components_employees_employement_information_emp_job_info_emp_job_data_dialog_emp_job_data_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/employees/employement-information/emp-job-info/emp-job-data-dialog/emp-job-data-dialog.component */ 1018);
/* harmony import */ var _components_employees_employement_information_emp_job_info_emp_contract_details_dialog_emp_contract_details_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/employees/employement-information/emp-job-info/emp-contract-details-dialog/emp-contract-details-dialog.component */ 79079);
/* harmony import */ var _components_employees_employee_balances_emp_vacation_emp_vacation_card_emp_vacation_card_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/employees/employee-balances/emp-vacation/emp-vacation-card/emp-vacation-card.component */ 76816);
/* harmony import */ var _components_employees_employee_balances_emp_vacation_emp_vacation_dialog_emp_vacation_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/employees/employee-balances/emp-vacation/emp-vacation-dialog/emp-vacation-dialog.component */ 92915);
/* harmony import */ var _components_employees_employee_balances_emp_permission_emp_permission_card_emp_permission_card_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/employees/employee-balances/emp-permission/emp-permission-card/emp-permission-card.component */ 43996);
/* harmony import */ var _components_employees_employee_balances_employee_balances_core_employee_balances_core_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/employees/employee-balances/employee-balances-core/employee-balances-core.component */ 21918);
/* harmony import */ var _components_employees_employee_balances_emp_permission_emp_permission_dialog_emp_permission_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/employees/employee-balances/emp-permission/emp-permission-dialog/emp-permission-dialog.component */ 68837);
/* harmony import */ var _components_employees_sap_integration_emp_sap_integration_core_emp_sap_integration_core_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/employees/sap-integration/emp-sap-integration-core/emp-sap-integration-core.component */ 56333);
/* harmony import */ var _components_employees_payments_information_emp_payments_info_core_emp_payments_info_core_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/employees/payments-information/emp-payments-info-core/emp-payments-info-core.component */ 61198);
/* harmony import */ var _components_employees_sap_integration_emp_sap_b1_emp_sap_b1_card_emp_sap_b1_card_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/employees/sap-integration/emp-sap-b1/emp-sap-b1-card/emp-sap-b1-card.component */ 14393);
/* harmony import */ var _components_employees_sap_integration_emp_sap_b1_emp_sap_b1_dialog_emp_sap_b1_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/employees/sap-integration/emp-sap-b1/emp-sap-b1-dialog/emp-sap-b1-dialog.component */ 93035);
/* harmony import */ var _components_employees_sap_integration_emp_s4_hana_emp_s4_hana_card_emp_s4_hana_card_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/employees/sap-integration/emp-s4-hana/emp-s4-hana-card/emp-s4-hana-card.component */ 22718);
/* harmony import */ var _components_employees_sap_integration_emp_s4_hana_emp_s4_hana_dialog_emp_s4_hana_dialog_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/employees/sap-integration/emp-s4-hana/emp-s4-hana-dialog/emp-s4-hana-dialog.component */ 22331);
/* harmony import */ var _components_employees_payments_information_emp_payroll_data_emp_payroll_data_card_emp_payroll_data_card_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/employees/payments-information/emp-payroll-data/emp-payroll-data-card/emp-payroll-data-card.component */ 80151);
/* harmony import */ var _components_employees_payments_information_emp_payroll_data_emp_payroll_data_dialog_emp_payroll_data_dialog_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/employees/payments-information/emp-payroll-data/emp-payroll-data-dialog/emp-payroll-data-dialog.component */ 85303);
/* harmony import */ var _components_employees_payments_information_emp_banking_account_data_emp_banking_account_data_card_emp_banking_account_data_card_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/employees/payments-information/emp-banking-account-data/emp-banking-account-data-card/emp-banking-account-data-card.component */ 56275);
/* harmony import */ var _components_employees_payments_information_emp_banking_account_data_emp_banking_account_data_dialog_emp_banking_account_data_dialog_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/employees/payments-information/emp-banking-account-data/emp-banking-account-data-dialog/emp-banking-account-data-dialog.component */ 19434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/core */ 22560);





























































class PersonnelSetupModule {
}
PersonnelSetupModule.ɵfac = function PersonnelSetupModule_Factory(t) { return new (t || PersonnelSetupModule)(); };
PersonnelSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineNgModule"]({ type: PersonnelSetupModule });
PersonnelSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_60__.CommonModule, _personnel_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonnelSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵsetNgModuleScope"](PersonnelSetupModule, { declarations: [_components_employees_employees_index_employees_index_component__WEBPACK_IMPORTED_MODULE_1__.EmployeesIndexComponent,
        _components_employees_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_3__.AddEmployeeComponent,
        _components_employees_employee_general_info_emp_general_info_dialog_emp_general_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeGeneralInfoDialogComponent,
        _components_employees_employee_general_info_emp_general_info_card_emp_general_info_card_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeGeneralInfoCardComponent,
        _components_employees_card_shared_components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_6__.CardHeaderComponent,
        _components_employees_card_shared_components_card_row_item_card_row_item_component__WEBPACK_IMPORTED_MODULE_7__.CardRowItemComponent,
        _components_employees_personal_information_emp_personal_info_core_empl_personal_info_core_component__WEBPACK_IMPORTED_MODULE_11__.EmployeePersonalInfoCoreComponent,
        _components_employees_personal_information_emp_personal_info_emp_personal_info_card_emp_personal_info_card_component__WEBPACK_IMPORTED_MODULE_22__.EmployeePersonalInfoCardComponent,
        _components_employees_personal_information_emp_personal_info_emp_personal_info_dialog_emp_personal_info_dialog_component__WEBPACK_IMPORTED_MODULE_23__.EmployeePersonalInfoDialogComponent,
        _components_employees_personal_information_emp_contact_and_address_emp_contact_and_address_card_emp_contact_and_address_card_component__WEBPACK_IMPORTED_MODULE_13__.EmployeeContactAndAddressCardComponent,
        _components_employees_personal_information_emp_contact_and_address_emp_contact_and_address_dialog_emp_contact_and_address_dialog_component__WEBPACK_IMPORTED_MODULE_14__.EmployeeContactAndAddressDialogComponent,
        _components_employees_personal_information_emp_contact_and_address_emp_contact_dialog_emp_contact_dialog_component__WEBPACK_IMPORTED_MODULE_15__.EmployeeContactDialogComponent,
        _components_employees_personal_information_emp_contact_and_address_emp_address_dialog_emp_address_dialog_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeAddressDialogComponent,
        _components_employees_personal_information_emp_dependants_emp_dependants_card_emp_dependants_card_component__WEBPACK_IMPORTED_MODULE_16__.EmployeeDependantsCardComponent,
        _components_employees_personal_information_emp_dependants_emp_dependants_dialog_emp_dependants_dialog_component__WEBPACK_IMPORTED_MODULE_17__.EmployeeDependantsDialogComponent,
        _components_employees_personal_information_emp_military_data_emp_military_data_card_emp_military_data_card_component__WEBPACK_IMPORTED_MODULE_20__.EmployeeMilitaryDataCardComponent,
        _components_employees_personal_information_emp_military_data_emp_military_data_dialog_emp_military_data_dialog_component__WEBPACK_IMPORTED_MODULE_21__.EmployeeMilitaryDataDialogComponent,
        _components_employees_personal_information_emp_documents_emp_documents_card_emp_documents_card_component__WEBPACK_IMPORTED_MODULE_18__.EmployeeDocumentsCardComponent,
        _components_employees_personal_information_emp_documents_emp_documents_dialog_emp_documents_dialog_component__WEBPACK_IMPORTED_MODULE_19__.EmployeeDocumentsDialogComponent,
        _components_employees_employee_career_emp_career_core_emp_career_core_component__WEBPACK_IMPORTED_MODULE_8__.EmployeeCareerCoreComponent,
        _components_employees_employee_career_emp_education_emp_education_card_emp_education_card_component__WEBPACK_IMPORTED_MODULE_24__.EmployeeEducationCardComponent,
        _components_employees_employee_career_emp_education_emp_education_dialog_emp_education_dialog_component__WEBPACK_IMPORTED_MODULE_25__.EmployeeEducationDialogComponent,
        _components_employees_employee_career_emp_work_experience_emp_work_experience_card_emp_work_experience_card_component__WEBPACK_IMPORTED_MODULE_26__.EmployeeWorkExperienceCardComponent,
        _components_employees_employee_career_emp_work_experience_emp_work_experience_dialog_employee_work_experience_dialog_component__WEBPACK_IMPORTED_MODULE_9__.EmployeeWorkExperienceDialogComponent,
        _components_employees_employee_general_info_emp_general_info_core_emp_general_info_core_component__WEBPACK_IMPORTED_MODULE_10__.EmpGeneralInfoCoreComponent,
        _components_employees_employement_information_employement_info_core_employement_info_core_component__WEBPACK_IMPORTED_MODULE_27__.EmployementInformationComponent,
        _components_employees_employement_information_emp_job_info_emp_job_info_card_emp_job_info_card_component__WEBPACK_IMPORTED_MODULE_28__.EmpJobInfoCardComponent,
        _components_employees_employement_information_emp_job_info_emp_job_info_dialog_emp_job_info_dialog_component__WEBPACK_IMPORTED_MODULE_29__.EmpJobInfoDialogComponent,
        _components_employees_employement_information_emp_work_schedule_emp_work_schedule_card_emp_work_schedule_card_component__WEBPACK_IMPORTED_MODULE_30__.EmpWorkScheduleCardComponent,
        _components_employees_employement_information_emp_work_schedule_emp_work_schedule_dialog_emp_work_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_31__.EmpWorkScheduleDialogComponent,
        _components_employees_employement_information_emp_hiring_documents_emp_hiring_documents_card_emp_hiring_documents_card_component__WEBPACK_IMPORTED_MODULE_32__.EmpHiringDocumentsCardComponent,
        _components_employees_employement_information_emp_hiring_documents_emp_hiring_documents_dialog_emp_hiring_documents_dialog_component__WEBPACK_IMPORTED_MODULE_33__.EmpHiringDocumentsDialogComponent,
        _components_employees_employement_information_emp_location_emp_location_card_emp_location_card_component__WEBPACK_IMPORTED_MODULE_34__.EmpLocationCardComponent,
        _components_employees_employement_information_emp_location_emp_location_dialog_emp_location_dialog_component__WEBPACK_IMPORTED_MODULE_35__.EmpLocationDialogComponent,
        _components_employees_employement_information_emp_custodies_emp_custodies_card_emp_custodies_card_component__WEBPACK_IMPORTED_MODULE_36__.EmpCustodiesCardComponent,
        _components_employees_employement_information_emp_custodies_emp_custodies_dialog_emp_custodies_dialog_component__WEBPACK_IMPORTED_MODULE_37__.EmpCustodiesDialogComponent,
        _components_employees_employement_information_emp_social_insurance_emp_social_insurance_card_emp_social_insurance_card_component__WEBPACK_IMPORTED_MODULE_38__.EmpSocialInsuranceCardComponent,
        _components_employees_employement_information_emp_social_insurance_emp_social_insurance_dialog_emp_social_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_39__.EmpSocialInsuranceDialogComponent,
        _components_employees_employement_information_emp_medical_insurance_emp_medical_insurance_card_emp_medical_insurance_card_component__WEBPACK_IMPORTED_MODULE_40__.EmpMedicalInsuranceCardComponent,
        _components_employees_employement_information_emp_medical_insurance_emp_medical_insurance_dialog_emp_medical_insurance_dialog_component__WEBPACK_IMPORTED_MODULE_41__.EmpMedicalInsuranceDialogComponent,
        _components_employees_employement_information_emp_job_info_emp_job_data_dialog_emp_job_data_dialog_component__WEBPACK_IMPORTED_MODULE_42__.EmpJobDataDialogComponent,
        _components_employees_employement_information_emp_job_info_emp_contract_details_dialog_emp_contract_details_dialog_component__WEBPACK_IMPORTED_MODULE_43__.EmpContractDetailsDialogComponent,
        _components_employees_employee_balances_employee_balances_core_employee_balances_core_component__WEBPACK_IMPORTED_MODULE_47__.EmployeeBalancesCoreComponent,
        _components_employees_employee_balances_emp_vacation_emp_vacation_card_emp_vacation_card_component__WEBPACK_IMPORTED_MODULE_44__.EmpVacationCardComponent,
        _components_employees_employee_balances_emp_vacation_emp_vacation_dialog_emp_vacation_dialog_component__WEBPACK_IMPORTED_MODULE_45__.EmpVacationDialogComponent,
        _components_employees_employee_balances_emp_permission_emp_permission_card_emp_permission_card_component__WEBPACK_IMPORTED_MODULE_46__.EmpPermissionCardComponent,
        _components_employees_employee_balances_emp_permission_emp_permission_dialog_emp_permission_dialog_component__WEBPACK_IMPORTED_MODULE_48__.EmpPermissionDialogComponent,
        _components_employees_sap_integration_emp_sap_integration_core_emp_sap_integration_core_component__WEBPACK_IMPORTED_MODULE_49__.EmpSapIntegrationCoreComponent,
        _components_employees_payments_information_emp_payments_info_core_emp_payments_info_core_component__WEBPACK_IMPORTED_MODULE_50__.EmpPaymentsInfoCoreComponent,
        _components_employees_sap_integration_emp_sap_b1_emp_sap_b1_card_emp_sap_b1_card_component__WEBPACK_IMPORTED_MODULE_51__.EmpSapB1CardComponent,
        _components_employees_sap_integration_emp_sap_b1_emp_sap_b1_dialog_emp_sap_b1_dialog_component__WEBPACK_IMPORTED_MODULE_52__.EmpSapB1DialogComponent,
        _components_employees_sap_integration_emp_s4_hana_emp_s4_hana_card_emp_s4_hana_card_component__WEBPACK_IMPORTED_MODULE_53__.EmpS4HanaCardComponent,
        _components_employees_sap_integration_emp_s4_hana_emp_s4_hana_dialog_emp_s4_hana_dialog_component__WEBPACK_IMPORTED_MODULE_54__.EmpS4HanaDialogComponent,
        _components_employees_payments_information_emp_payroll_data_emp_payroll_data_card_emp_payroll_data_card_component__WEBPACK_IMPORTED_MODULE_55__.EmpPayrollDataCardComponent,
        _components_employees_payments_information_emp_payroll_data_emp_payroll_data_dialog_emp_payroll_data_dialog_component__WEBPACK_IMPORTED_MODULE_56__.EmpPayrollDataDialogComponent,
        _components_employees_payments_information_emp_banking_account_data_emp_banking_account_data_card_emp_banking_account_data_card_component__WEBPACK_IMPORTED_MODULE_57__.EmpBankingAccountDataCardComponent,
        _components_employees_payments_information_emp_banking_account_data_emp_banking_account_data_dialog_emp_banking_account_data_dialog_component__WEBPACK_IMPORTED_MODULE_58__.EmpBankingAccountDataDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_60__.CommonModule, _personnel_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonnelSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 64111:
/*!********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-address.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAddressService": () => (/* binding */ EmployeeAddressService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeAddressService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_address", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_address", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_address", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_address", {
            params: { Id: Id },
        });
    }
}
EmployeeAddressService.ɵfac = function EmployeeAddressService_Factory(t) { return new (t || EmployeeAddressService)(); };
EmployeeAddressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeAddressService, factory: EmployeeAddressService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 26932:
/*!****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-banking-account.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeBankingAccountService": () => (/* binding */ EmployeeBankingAccountService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeBankingAccountService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_address", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_address", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_address", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_address", {
            params: { Id: Id },
        });
    }
}
EmployeeBankingAccountService.ɵfac = function EmployeeBankingAccountService_Factory(t) { return new (t || EmployeeBankingAccountService)(); };
EmployeeBankingAccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeBankingAccountService, factory: EmployeeBankingAccountService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 60141:
/*!********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-contact.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeContactService": () => (/* binding */ EmployeeContactService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeContactService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_contact", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_contact", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_contact", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_contact", {
            params: { Id: Id },
        });
    }
}
EmployeeContactService.ɵfac = function EmployeeContactService_Factory(t) { return new (t || EmployeeContactService)(); };
EmployeeContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeContactService, factory: EmployeeContactService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 36983:
/*!*****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-contract-details.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeContractDetailsService": () => (/* binding */ EmployeeContractDetailsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeContractDetailsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_ContractDetails", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_ContractDetails", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_ContractDetails", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_ContractDetails", {
            params: { Id: Id },
        });
    }
}
EmployeeContractDetailsService.ɵfac = function EmployeeContractDetailsService_Factory(t) { return new (t || EmployeeContractDetailsService)(); };
EmployeeContractDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeContractDetailsService, factory: EmployeeContractDetailsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 29741:
/*!**********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-custodies.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeCustodiesService": () => (/* binding */ EmployeeCustodiesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeCustodiesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Custody", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Custody", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Custody", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Custody", {
            params: { Id: Id },
        });
    }
}
EmployeeCustodiesService.ɵfac = function EmployeeCustodiesService_Factory(t) { return new (t || EmployeeCustodiesService)(); };
EmployeeCustodiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeCustodiesService, factory: EmployeeCustodiesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 18449:
/*!**********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-dependant.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDependantService": () => (/* binding */ EmployeeDependantService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeDependantService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_dependant", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_dependant", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_dependant", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_dependant", {
            params: { Id: Id },
        });
    }
    getAllRelationships() {
        return this.get("Personnel/Employees/GetAll_Relationship");
    }
}
EmployeeDependantService.ɵfac = function EmployeeDependantService_Factory(t) { return new (t || EmployeeDependantService)(); };
EmployeeDependantService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeDependantService, factory: EmployeeDependantService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 85897:
/*!**********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-documents.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDocumentsService": () => (/* binding */ EmployeeDocumentsService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeDocumentsService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_document", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_document", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_document", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_document", {
            params: { Id: Id },
        });
    }
}
EmployeeDocumentsService.ɵfac = function EmployeeDocumentsService_Factory(t) { return new (t || EmployeeDocumentsService)(); };
EmployeeDocumentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeDocumentsService, factory: EmployeeDocumentsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 42501:
/*!**********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-education.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeEducationService": () => (/* binding */ EmployeeEducationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeEducationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Education", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Education", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Education", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Education", {
            params: { Id: Id },
        });
    }
    getAllMajors() {
        return this.get("Personnel/Employees/major");
    }
    getAllDegrees() {
        return this.get("Personnel/Employees/degree");
    }
    getAllGrades() {
        return this.get("Personnel/Employees/grade");
    }
}
EmployeeEducationService.ɵfac = function EmployeeEducationService_Factory(t) { return new (t || EmployeeEducationService)(); };
EmployeeEducationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeEducationService, factory: EmployeeEducationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 38088:
/*!****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-hiring-document.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeHiringDocumentService": () => (/* binding */ EmployeeHiringDocumentService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeHiringDocumentService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_JobInfo", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_JobInfo", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_JobInfo", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_JobInfo", {
            params: { Id: Id },
        });
    }
}
EmployeeHiringDocumentService.ɵfac = function EmployeeHiringDocumentService_Factory(t) { return new (t || EmployeeHiringDocumentService)(); };
EmployeeHiringDocumentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeHiringDocumentService, factory: EmployeeHiringDocumentService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 97166:
/*!*********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-location.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeLocationService": () => (/* binding */ EmployeeLocationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeLocationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_location", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_location", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_location", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_location", {
            params: { Id: Id },
        });
    }
}
EmployeeLocationService.ɵfac = function EmployeeLocationService_Factory(t) { return new (t || EmployeeLocationService)(); };
EmployeeLocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeLocationService, factory: EmployeeLocationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 80171:
/*!******************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-medical-insurance.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMedicalInsuranceService": () => (/* binding */ EmployeeMedicalInsuranceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeMedicalInsuranceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_dependant", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_dependant", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_dependant", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_dependant", {
            params: { Id: Id },
        });
    }
}
EmployeeMedicalInsuranceService.ɵfac = function EmployeeMedicalInsuranceService_Factory(t) { return new (t || EmployeeMedicalInsuranceService)(); };
EmployeeMedicalInsuranceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeMedicalInsuranceService, factory: EmployeeMedicalInsuranceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 16705:
/*!**************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-military-data.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeMilitaryDataService": () => (/* binding */ EmployeeMilitaryDataService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeMilitaryDataService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Military", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Military", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Military", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Military", {
            params: { Id: Id },
        });
    }
}
EmployeeMilitaryDataService.ɵfac = function EmployeeMilitaryDataService_Factory(t) { return new (t || EmployeeMilitaryDataService)(); };
EmployeeMilitaryDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeMilitaryDataService, factory: EmployeeMilitaryDataService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 84899:
/*!********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-payroll.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePayrollService": () => (/* binding */ EmployeePayrollService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeePayrollService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_address", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_address", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_address", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_address", {
            params: { Id: Id },
        });
    }
}
EmployeePayrollService.ɵfac = function EmployeePayrollService_Factory(t) { return new (t || EmployeePayrollService)(); };
EmployeePayrollService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeePayrollService, factory: EmployeePayrollService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 55672:
/*!***********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-permission.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePermissionService": () => (/* binding */ EmployeePermissionService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeePermissionService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Permission", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Permission", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Permission", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Permission", {
            params: { Id: Id },
        });
    }
}
EmployeePermissionService.ɵfac = function EmployeePermissionService_Factory(t) { return new (t || EmployeePermissionService)(); };
EmployeePermissionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeePermissionService, factory: EmployeePermissionService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 27975:
/*!**************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-personal-info.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePersonalInfoService": () => (/* binding */ EmployeePersonalInfoService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeePersonalInfoService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_PersonalData", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_PersonalData", data);
    }
    getByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_PersonalData", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
}
EmployeePersonalInfoService.ɵfac = function EmployeePersonalInfoService_Factory(t) { return new (t || EmployeePersonalInfoService)(); };
EmployeePersonalInfoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeePersonalInfoService, factory: EmployeePersonalInfoService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 98352:
/*!********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-s4-hana.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeS4HanaService": () => (/* binding */ EmployeeS4HanaService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeS4HanaService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_address", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_address", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_address", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_address", {
            params: { Id: Id },
        });
    }
}
EmployeeS4HanaService.ɵfac = function EmployeeS4HanaService_Factory(t) { return new (t || EmployeeS4HanaService)(); };
EmployeeS4HanaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeS4HanaService, factory: EmployeeS4HanaService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 75872:
/*!*******************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-sap-b1.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeSapB1Service": () => (/* binding */ EmployeeSapB1Service)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeSapB1Service extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_address", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_address", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_address", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_address", {
            params: { Id: Id },
        });
    }
}
EmployeeSapB1Service.ɵfac = function EmployeeSapB1Service_Factory(t) { return new (t || EmployeeSapB1Service)(); };
EmployeeSapB1Service.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeSapB1Service, factory: EmployeeSapB1Service.ɵfac, providedIn: "root" });


/***/ }),

/***/ 97226:
/*!*****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-social-insurance.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeSocialInsuranceService": () => (/* binding */ EmployeeSocialInsuranceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeSocialInsuranceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_dependant", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_dependant", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_dependant", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_dependant", {
            params: { Id: Id },
        });
    }
}
EmployeeSocialInsuranceService.ɵfac = function EmployeeSocialInsuranceService_Factory(t) { return new (t || EmployeeSocialInsuranceService)(); };
EmployeeSocialInsuranceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeSocialInsuranceService, factory: EmployeeSocialInsuranceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40875:
/*!*********************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-vacation.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeVacationService": () => (/* binding */ EmployeeVacationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeVacationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Vacation", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Vacation", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Vacation", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Vacation", {
            params: { Id: Id },
        });
    }
}
EmployeeVacationService.ɵfac = function EmployeeVacationService_Factory(t) { return new (t || EmployeeVacationService)(); };
EmployeeVacationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeVacationService, factory: EmployeeVacationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 80194:
/*!****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-work-experience.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeWorkExperienceService": () => (/* binding */ EmployeeWorkExperienceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeWorkExperienceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_WorkExperience", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_WorkExperience", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_WorkExperience", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_WorkExperience", {
            params: { Id: Id },
        });
    }
}
EmployeeWorkExperienceService.ɵfac = function EmployeeWorkExperienceService_Factory(t) { return new (t || EmployeeWorkExperienceService)(); };
EmployeeWorkExperienceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeWorkExperienceService, factory: EmployeeWorkExperienceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 33664:
/*!**************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-work-schedule.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeWorkScheduleService": () => (/* binding */ EmployeeWorkScheduleService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeWorkScheduleService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("Personnel/Employees/Create_Vacation", data);
    }
    update(data) {
        return this.post("Personnel/Employees/Edit_Vacation", data);
    }
    getAllByEmployeeId(employeeId) {
        return this.get("Personnel/Employees/GetAll_Vacation", {
            params: {
                $filter: `id eq ${employeeId}`,
            },
        });
    }
    Delete(Id) {
        return this.delete("Personnel/Employees/Delete_Vacation", {
            params: { Id: Id },
        });
    }
}
EmployeeWorkScheduleService.ɵfac = function EmployeeWorkScheduleService_Factory(t) { return new (t || EmployeeWorkScheduleService)(); };
EmployeeWorkScheduleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeWorkScheduleService, factory: EmployeeWorkScheduleService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 81504:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/observable/forkJoin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var rxjs_1 = __webpack_require__(/*! rxjs */ 25906);

exports.forkJoin = rxjs_1.forkJoin;

/***/ }),

/***/ 7040:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/observable/forkJoin.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__export(__webpack_require__(/*! rxjs-compat/observable/forkJoin */ 81504));

/***/ })

}]);
//# sourceMappingURL=src_app_personnel-setup_personnel-setup_module_ts.js.map