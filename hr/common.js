"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["common"],{

/***/ 7368:
/*!*****************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/mapper/violations.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "violationToMap": () => (/* binding */ violationToMap)
/* harmony export */ });
function violationToMap(violations) {
    return violations.map((violation) => {
        return {
            ...violation.att_Violation,
            variableCode: violation.paY_Variable?.code,
            violationType: violation.att_Violation?.att_Violation_Type?.name,
            typeName: violation.att_Violation?.att_Type?.en_Name,
            display_In_Result: violation.paY_Variable?.display_In_Result,
        };
    });
}


/***/ }),

/***/ 78304:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/penalty-regulations-setup/services/violation-types.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViolationTypesService": () => (/* binding */ ViolationTypesService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class ViolationTypesService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("ViolationTypeSetup/Create", data);
    }
    update(data) {
        return this.post("ViolationTypeSetup/Edit", data);
    }
    getList(params) {
        return this.get("ViolationTypeSetup/GetList", {
            params: params,
        });
    }
    getAll() {
        return this.get("ViolationTypeSetup/GetAll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            res.data.map((item) => {
                item.ar_Name = item.name;
                item.en_Name = item.name;
            });
            return res;
        }));
    }
    Delete(Id) {
        return this.delete("ViolationTypeSetup/Delete", {
            params: { Id: Id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
ViolationTypesService.ɵfac = function ViolationTypesService_Factory(t) { return new (t || ViolationTypesService)(); };
ViolationTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ViolationTypesService, factory: ViolationTypesService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common.js.map