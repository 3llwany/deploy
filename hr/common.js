"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["common"],{

/***/ 5420:
/*!**********************************************************************!*\
  !*** ./src/app/attendance-setup/services/attendance-plan.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePlanService": () => (/* binding */ AttendancePlanService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AttendancePlanService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("AttendanceSetup/Plan/Create", body);
    }
    update(data) {
        return this.post("AttendanceSetup/Plan/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/Plan/GetList", {
            params: params,
        });
    }
    getById(id) {
        return this.get("AttendanceSetup/Plan/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    getDetailsById(id) {
        return this.get("AttendanceSetup/Plan/Details", {
            params: {
                planId: `${id}`,
            },
        });
    }
    getAll() {
        return this.get("AttendanceSetup/Plan/GetAll");
    }
    Delete(id) {
        return this.delete("AttendanceSetup/Plan/Delete", {
            params: { Id: id },
        });
    }
    createExtendWithoutChange(data) {
        return this.post("AttendanceSetup/Plan/ExtendWithoutChange", data);
    }
    createExtendWithChange(data) {
        return this.post("AttendanceSetup/Plan/ExtendWithChange", data);
    }
    createShrink(data) {
        return this.post("AttendanceSetup/Plan/Shrink", data);
    }
}
AttendancePlanService.ɵfac = function AttendancePlanService_Factory(t) { return new (t || AttendancePlanService)(); };
AttendancePlanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttendancePlanService, factory: AttendancePlanService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 60927:
/*!******************************************************************!*\
  !*** ./src/app/attendance-setup/services/permissions.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionTypeService": () => (/* binding */ PermissionTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PermissionTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("AttendanceSetup/PermissionSetup/Create", data);
    }
    update(data) {
        return this.post("AttendanceSetup/PermissionSetup/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/PermissionSetup/GetList", {
            params: params,
        });
    }
    getById(id) {
        return this.get("AttendanceSetup/PermissionSetup/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    getAll() {
        return this.get("AttendanceSetup/PermissionSetup/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(id) {
        return this.delete("AttendanceSetup/PermissionSetup/Delete", {
            params: { Id: id },
        });
    }
}
PermissionTypeService.ɵfac = function PermissionTypeService_Factory(t) { return new (t || PermissionTypeService)(); };
PermissionTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PermissionTypeService, factory: PermissionTypeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 24373:
/*!************************************************************!*\
  !*** ./src/app/hr-setup/services/contract-type.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractTypeService": () => (/* binding */ ContractTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ContractTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("HRSetup/contracttype/Create", data);
    }
    update(data) {
        return this.post("HRSetup/contracttype/Edit", data);
    }
    getList(params) {
        return this.get("HRSetup/ContractType/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("HRSetup/ContractType/GetAll");
    }
    Delete(id) {
        return this.delete("HRSetup/ContractType/Delete", {
            params: { Id: id },
        });
    }
}
ContractTypeService.ɵfac = function ContractTypeService_Factory(t) { return new (t || ContractTypeService)(); };
ContractTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContractTypeService, factory: ContractTypeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 63733:
/*!**********************************************************!*\
  !*** ./src/app/hr-setup/services/governorate.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GovernorateService": () => (/* binding */ GovernorateService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class GovernorateService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("HRSetup/Governorate/Create", body);
    }
    update(body) {
        return this.post("HRSetup/Governorate/Edit", body);
    }
    getList(params) {
        return this.get("HRSetup/Governorate/GetList", {
            params: {
                ...params,
                $expand: app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.comm_Country,
            },
        });
    }
    getAll() {
        return this.get("HRSetup/Governorate/GetAll");
    }
    getAllByCountryId(countryId) {
        return this.get("HRSetup/Governorate/GetAll", {
            params: {
                $filter: `countrY_ID eq ${countryId}`,
            },
        });
    }
    Delete(id) {
        return this.delete("HRSetup/Governorate/Delete", {
            params: { Id: id },
        });
    }
}
GovernorateService.ɵfac = function GovernorateService_Factory(t) { return new (t || GovernorateService)(); };
GovernorateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GovernorateService, factory: GovernorateService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 36540:
/*!************************************************************!*\
  !*** ./src/app/hr-setup/services/identity-type.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityTypeService": () => (/* binding */ IdentityTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class IdentityTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("HRSetup/IdentityType/Create", data);
    }
    update(data) {
        return this.post("HRSetup/IdentityType/Edit", data);
    }
    getList(params) {
        return this.get("HRSetup/IdentityType/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("HRSetup/IdentityType/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.id = item.identity_TypeID;
                item.ar_Name = item.identity_TypeTital;
                item.en_Name = item.identity_TypeTital;
            });
            return res;
        }));
    }
    Delete(id) {
        return this.delete("HRSetup/IdentityType/Delete", {
            params: { Id: id },
        });
    }
}
IdentityTypeService.ɵfac = function IdentityTypeService_Factory(t) { return new (t || IdentityTypeService)(); };
IdentityTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IdentityTypeService, factory: IdentityTypeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 583:
/*!**********************************************************!*\
  !*** ./src/app/hr-setup/services/institution.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionService": () => (/* binding */ InstitutionService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class InstitutionService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("HRSetup/Institution/Create", body);
    }
    update(body) {
        return this.post("HRSetup/Institution/Edit", body);
    }
    getList(params) {
        return this.get("HRSetup/Institution/GetList", {
            params: params,
        });
    }
    getALL() {
        return this.get("HRSetup/Institution/GetAll");
    }
    Delete(id) {
        return this.delete("HRSetup/Institution/Delete", {
            params: { Id: id },
        });
    }
}
InstitutionService.ɵfac = function InstitutionService_Factory(t) { return new (t || InstitutionService)(); };
InstitutionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InstitutionService, factory: InstitutionService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 81774:
/*!****************************************************************************************!*\
  !*** ./src/app/personnel-setup/services/employees/employee-job-information.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeJobInformationService": () => (/* binding */ EmployeeJobInformationService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class EmployeeJobInformationService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
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
EmployeeJobInformationService.ɵfac = function EmployeeJobInformationService_Factory(t) { return new (t || EmployeeJobInformationService)(); };
EmployeeJobInformationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmployeeJobInformationService, factory: EmployeeJobInformationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 58446:
/*!************************************************!*\
  !*** ./src/app/shared/interfaces/responces.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=common.js.map