"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["common"],{

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
    exportExcel() {
        this.getAll();
    }
}
ContractTypeService.ɵfac = function ContractTypeService_Factory(t) { return new (t || ContractTypeService)(); };
ContractTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContractTypeService, factory: ContractTypeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common.js.map