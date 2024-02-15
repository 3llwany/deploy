"use strict";
(self["webpackChunkhr"] = self["webpackChunkhr"] || []).push([["src_app_system-setup_attendance-setup_attendance-setup_module_ts"],{

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

/***/ 62886:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/attendance-setup-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceSetupRoutingModule": () => (/* binding */ AttendanceSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_official_holidays_official_holidays_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/official-holidays/official-holidays.component */ 65997);
/* harmony import */ var _components_attandance_device_attendance_device_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/attandance-device/attendance-device.component */ 95455);
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/location/location.component */ 37734);
/* harmony import */ var _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/permissions/add-permission/add-permission.component */ 39709);
/* harmony import */ var _components_permissions_permission_index_permission_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/permissions/permission-index/permission-index.component */ 22019);
/* harmony import */ var _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vacation/vacation-type/vacation-type.component */ 15403);
/* harmony import */ var _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vacation/vacation-index/vacation-index.component */ 29268);
/* harmony import */ var _components_attendance_element_attendance_element_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/attendance-element/attendance-element.component */ 11503);
/* harmony import */ var _components_over_time_type_over_time_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/over-time-type/over-time-type.component */ 5411);
/* harmony import */ var _components_shifts_add_shifts_add_shifts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shifts/add-shifts/add-shifts.component */ 51160);
/* harmony import */ var _components_shifts_shifts_index_shifts_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shifts/shifts-index/shifts-index.component */ 83039);
/* harmony import */ var _components_plan_plan_index_plan_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/plan/plan-index/plan-index.component */ 72079);
/* harmony import */ var _components_plan_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/plan/add-plan/add-plan.component */ 32521);
/* harmony import */ var _components_attendance_period_attendance_period_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/attendance-period/attendance-period.component */ 29751);
/* harmony import */ var _components_attendance_penalty_setup_attendance_penalty_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/attendance-penalty-setup/attendance-penalty-setup.component */ 61905);
/* harmony import */ var _components_plan_shrink_shrink_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/plan/shrink/shrink.component */ 40823);
/* harmony import */ var _components_plan_extend_without_change_extend_without_change_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/plan/extend-without-change/extend-without-change.component */ 68216);
/* harmony import */ var _components_plan_extend_with_change_extend_with_change_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/plan/extend-with-change/extend-with-change.component */ 594);
/* harmony import */ var _components_plan_plan_details_plan_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/plan/plan-details/plan-details.component */ 48286);
/* harmony import */ var app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/enums/route-path-match.enum */ 36162);
/* harmony import */ var app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/shared/resources/views-manager */ 74513);
/* harmony import */ var app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/shared/Guards/check-is-allowd.guard */ 3710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);

























const routes = [
    {
        path: "attendance-devices",
        component: _components_attandance_device_attendance_device_component__WEBPACK_IMPORTED_MODULE_1__.AttendanceDeviceComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.attendance_devices },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "official-holidays",
        component: _components_official_holidays_official_holidays_component__WEBPACK_IMPORTED_MODULE_0__.OfficialHolidaysComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.official_holidays },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "holidays-calendar/:holidayid",
        component: _components_official_holidays_official_holidays_component__WEBPACK_IMPORTED_MODULE_0__.OfficialHolidaysComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.holidays_calendar },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "location",
        component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_2__.LocationComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.location },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "attendance-element",
        component: _components_attendance_element_attendance_element_component__WEBPACK_IMPORTED_MODULE_7__.AttendanceElementComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.attendance_element },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "over-time-type",
        component: _components_over_time_type_over_time_type_component__WEBPACK_IMPORTED_MODULE_8__.OverTimeTypeComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.over_time_type },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "permissions",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_19__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_permissions_permission_index_permission_index_component__WEBPACK_IMPORTED_MODULE_4__.PermissionIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.permission_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_3__.AddPermissionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_permission },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:permissionId",
                component: _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_3__.AddPermissionComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.edit_permission },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "vacations",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_19__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_6__.VacationIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.vacation_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_5__.VacationTypeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_vacation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:vacationId",
                component: _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_5__.VacationTypeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_vacation },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "shifts",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_19__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_shifts_shifts_index_shifts_index_component__WEBPACK_IMPORTED_MODULE_10__.ShiftsIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.shifts_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_shifts_add_shifts_add_shifts_component__WEBPACK_IMPORTED_MODULE_9__.ShiftsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_shift },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:shiftId",
                component: _components_shifts_add_shifts_add_shifts_component__WEBPACK_IMPORTED_MODULE_9__.ShiftsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_shift },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "plan",
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: app_shared_enums_route_path_match_enum__WEBPACK_IMPORTED_MODULE_19__.pathMatch.full,
            },
            {
                path: "index",
                component: _components_plan_plan_index_plan_index_component__WEBPACK_IMPORTED_MODULE_11__.PlanIndexComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.plan_index },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "add",
                component: _components_plan_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_12__.AddPlanComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_plan },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "edit/:planId",
                component: _components_plan_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_12__.AddPlanComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.add_plan },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "shrink/:planId",
                component: _components_plan_shrink_shrink_component__WEBPACK_IMPORTED_MODULE_15__.ShrinkComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.shrink },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "extend-without-change/:planId",
                component: _components_plan_extend_without_change_extend_without_change_component__WEBPACK_IMPORTED_MODULE_16__.ExtendWithoutChangeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.extend_without_change },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "extend-with-change/:planId",
                component: _components_plan_extend_with_change_extend_with_change_component__WEBPACK_IMPORTED_MODULE_17__.ExtendWithChangeComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.extend_with_change },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
            {
                path: "details/:planId",
                component: _components_plan_plan_details_plan_details_component__WEBPACK_IMPORTED_MODULE_18__.PlanDetailsComponent,
                data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.plan_details },
                canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
            },
        ],
    },
    {
        path: "attendance-period",
        component: _components_attendance_period_attendance_period_component__WEBPACK_IMPORTED_MODULE_13__.AttendancePeriodComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.attendance_period },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
    {
        path: "attendance-penalty-setup",
        component: _components_attendance_penalty_setup_attendance_penalty_setup_component__WEBPACK_IMPORTED_MODULE_14__.AttendancePenaltySetupComponent,
        data: { view: app_shared_resources_views_manager__WEBPACK_IMPORTED_MODULE_20__.ViewsManager.attendance_penalty_setup },
        canActivate: [app_shared_Guards_check_is_allowd_guard__WEBPACK_IMPORTED_MODULE_21__.CheckIsViewAllowedGuard],
    },
];
class AttendanceSetupRoutingModule {
}
AttendanceSetupRoutingModule.ɵfac = function AttendanceSetupRoutingModule_Factory(t) { return new (t || AttendanceSetupRoutingModule)(); };
AttendanceSetupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AttendanceSetupRoutingModule });
AttendanceSetupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AttendanceSetupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule] }); })();


/***/ }),

/***/ 10543:
/*!**************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/attendance-setup.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceSetupModule": () => (/* binding */ AttendanceSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _attendance_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-setup-routing.module */ 62886);
/* harmony import */ var _components_attandance_device_attendance_device_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/attandance-device/attendance-device.component */ 95455);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_official_holidays_official_holidays_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/official-holidays/official-holidays.component */ 65997);
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/location/location.component */ 37734);
/* harmony import */ var _components_attendance_element_attendance_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/attendance-element/attendance-element.component */ 11503);
/* harmony import */ var _components_over_time_type_over_time_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/over-time-type/over-time-type.component */ 5411);
/* harmony import */ var _components_shifts_add_shifts_add_shifts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shifts/add-shifts/add-shifts.component */ 51160);
/* harmony import */ var _components_shifts_shifts_index_shifts_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shifts/shifts-index/shifts-index.component */ 83039);
/* harmony import */ var _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/permissions/add-permission/add-permission.component */ 39709);
/* harmony import */ var _components_permissions_permission_index_permission_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/permissions/permission-index/permission-index.component */ 22019);
/* harmony import */ var _components_vacation_vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vacation/vacation-insurance/vacation-insurance.component */ 84983);
/* harmony import */ var _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/vacation/vacation-type/vacation-type.component */ 15403);
/* harmony import */ var _components_vacation_vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/vacation/vacation-age/vacation-age.component */ 32267);
/* harmony import */ var _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/vacation/vacation-index/vacation-index.component */ 29268);
/* harmony import */ var _components_plan_plan_index_plan_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/plan/plan-index/plan-index.component */ 72079);
/* harmony import */ var _components_plan_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/plan/add-plan/add-plan.component */ 32521);
/* harmony import */ var _components_plan_shrink_shrink_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/plan/shrink/shrink.component */ 40823);
/* harmony import */ var _components_attendance_period_attendance_period_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/attendance-period/attendance-period.component */ 29751);
/* harmony import */ var _components_attendance_penalty_setup_attendance_penalty_setup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/attendance-penalty-setup/attendance-penalty-setup.component */ 61905);
/* harmony import */ var _components_plan_extend_with_change_extend_with_change_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/plan/extend-with-change/extend-with-change.component */ 594);
/* harmony import */ var _components_plan_extend_without_change_extend_without_change_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/plan/extend-without-change/extend-without-change.component */ 68216);
/* harmony import */ var _components_plan_plan_details_plan_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/plan/plan-details/plan-details.component */ 48286);
/* harmony import */ var _components_plan_plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/plan/plan-form/plan-form.component */ 7090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);


























class AttendanceSetupModule {
}
AttendanceSetupModule.ɵfac = function AttendanceSetupModule_Factory(t) { return new (t || AttendanceSetupModule)(); };
AttendanceSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AttendanceSetupModule });
AttendanceSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _attendance_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AttendanceSetupModule, { declarations: [_components_official_holidays_official_holidays_component__WEBPACK_IMPORTED_MODULE_3__.OfficialHolidaysComponent,
        _components_attandance_device_attendance_device_component__WEBPACK_IMPORTED_MODULE_1__.AttendanceDeviceComponent,
        _components_location_location_component__WEBPACK_IMPORTED_MODULE_4__.LocationComponent,
        _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_9__.AddPermissionComponent,
        _components_attendance_element_attendance_element_component__WEBPACK_IMPORTED_MODULE_5__.AttendanceElementComponent,
        _components_over_time_type_over_time_type_component__WEBPACK_IMPORTED_MODULE_6__.OverTimeTypeComponent,
        _components_shifts_add_shifts_add_shifts_component__WEBPACK_IMPORTED_MODULE_7__.ShiftsComponent,
        _components_shifts_shifts_index_shifts_index_component__WEBPACK_IMPORTED_MODULE_8__.ShiftsIndexComponent,
        _components_permissions_permission_index_permission_index_component__WEBPACK_IMPORTED_MODULE_10__.PermissionIndexComponent,
        _components_vacation_vacation_type_vacation_type_component__WEBPACK_IMPORTED_MODULE_12__.VacationTypeComponent,
        _components_permissions_add_permission_add_permission_component__WEBPACK_IMPORTED_MODULE_9__.AddPermissionComponent,
        _components_vacation_vacation_index_vacation_index_component__WEBPACK_IMPORTED_MODULE_14__.VacationIndexComponent,
        _components_vacation_vacation_age_vacation_age_component__WEBPACK_IMPORTED_MODULE_13__.VacationAgeComponent,
        _components_vacation_vacation_insurance_vacation_insurance_component__WEBPACK_IMPORTED_MODULE_11__.VacationInsuranceComponent,
        _components_plan_plan_index_plan_index_component__WEBPACK_IMPORTED_MODULE_15__.PlanIndexComponent,
        _components_plan_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_16__.AddPlanComponent,
        _components_plan_shrink_shrink_component__WEBPACK_IMPORTED_MODULE_17__.ShrinkComponent,
        _components_attendance_period_attendance_period_component__WEBPACK_IMPORTED_MODULE_18__.AttendancePeriodComponent,
        _components_attendance_penalty_setup_attendance_penalty_setup_component__WEBPACK_IMPORTED_MODULE_19__.AttendancePenaltySetupComponent,
        _components_plan_extend_with_change_extend_with_change_component__WEBPACK_IMPORTED_MODULE_20__.ExtendWithChangeComponent,
        _components_plan_extend_without_change_extend_without_change_component__WEBPACK_IMPORTED_MODULE_21__.ExtendWithoutChangeComponent,
        _components_plan_plan_details_plan_details_component__WEBPACK_IMPORTED_MODULE_22__.PlanDetailsComponent,
        _components_plan_plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_23__.PlanFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _attendance_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceSetupRoutingModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 95455:
/*!***********************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/attandance-device/attendance-device.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceDeviceComponent": () => (/* binding */ AttendanceDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-device.service */ 40872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function AttendanceDeviceComponent_reset_form_btn_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AttendanceDeviceComponent_reset_form_btn_17_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class AttendanceDeviceComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    //private destroy$ = new Subject<void>();
    constructor(attendanceDeviceService) {
        super();
        this.attendanceDeviceService = attendanceDeviceService;
        this.submitted = false;
        this.mandatoryColomns = ["id", "name", "machineIP", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0)
        //   this.getList(this.currentPage);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            machineIP: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.attendanceDeviceService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
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
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Name: this.form.value.name,
                MachineIP: this.form.value.machineIP,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.attendanceDeviceService
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
        this.attendanceDeviceService
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
    onDelete(device) {
        this.deleteDialog(device.name).subscribe((confirm) => {
            if (confirm)
                this.delete(device);
        });
    }
    delete(device) {
        this.showLoading();
        this.attendanceDeviceService.Delete(device.id).subscribe((res) => {
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
                if (device.id == this.formCtrls.id.value)
                    this.clearForm();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    attendanceDeviceTOEdit(attendanceDevice) {
        this.form.patchValue(attendanceDevice);
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
AttendanceDeviceComponent.ɵfac = function AttendanceDeviceComponent_Factory(t) { return new (t || AttendanceDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_device_service__WEBPACK_IMPORTED_MODULE_3__.AttendanceDeviceService)); };
AttendanceDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AttendanceDeviceComponent, selectors: [["app-attendance-device"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "attendanceDevices", "editTitle", "attendanceDeviceEdit", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["label", "machineIP", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function AttendanceDeviceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function AttendanceDeviceComponent_Template_submit_btn_onClick_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, AttendanceDeviceComponent_reset_form_btn_17_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function AttendanceDeviceComponent_Template_app_material_table_onChangePage_19_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function AttendanceDeviceComponent_Template_app_material_table_editRow_19_listener($event) { return ctx.attendanceDeviceTOEdit($event); })("deleteRow", function AttendanceDeviceComponent_Template_app_material_table_deleteRow_19_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.machineIP)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.attendanceDeviceService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLWRldmljZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 11503:
/*!*************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/attendance-element/attendance-element.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceElementComponent": () => (/* binding */ AttendanceElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_attendance_setup_mapper_attendance_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/attendance-element */ 57074);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_element_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-element.service */ 28778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 88035);



















function AttendanceElementComponent_reset_form_btn_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "reset-form-btn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AttendanceElementComponent_reset_form_btn_20_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class AttendanceElementComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(attendanceElementService) {
        super();
        this.attendanceElementService = attendanceElementService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "arName",
            "name",
            "code",
            "actions",
        ];
        this.optionalColomns = ["display_In_Result"];
        this.isLoaded = false;
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0)
        //   this.getList(this.page.pageIndex);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            arName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__.CustomValidator.whiteSpace]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            display_In_Result: [false],
        });
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
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.attendanceElementService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource((0,app_system_setup_attendance_setup_mapper_attendance_element__WEBPACK_IMPORTED_MODULE_0__.attendanceElementToMap)(res.data));
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
                element: {
                    id: this.form.value.id,
                    en_Name: this.form.value.name,
                    ar_Name: this.form.value.arName,
                    code: this.form.value.code,
                },
                display_In_Result: this.form.value.display_In_Result,
            };
            model.element.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.attendanceElementService
            .create(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
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
        this.attendanceElementService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    attendanceElementToEdit(attendanceElement) {
        // this.formCtrls.id.setValue(attendanceElement.paY_Variable.id);
        this.form.patchValue(attendanceElement);
    }
    onDelete(element) {
        let msg = this.msgTranslate(element.arName, element.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(element);
        });
    }
    delete(element) {
        this.showLoading();
        this.attendanceElementService
            .Delete(element.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (element.attendance_Element_ID == this.formCtrls.id.value)
                    this.clearForm();
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    clearForm() {
        this.form.reset({ id: 0, display_In_Result: false });
        this.submitted = false;
    }
}
AttendanceElementComponent.ɵfac = function AttendanceElementComponent_Factory(t) { return new (t || AttendanceElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_element_service__WEBPACK_IMPORTED_MODULE_4__.AttendanceElementService)); };
AttendanceElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AttendanceElementComponent, selectors: [["app-attendance-element"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 18, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "attendance_Element", "editTitle", "edit_Attendance_Element", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en name", 3, "control", "submitted"], ["label", "code", 3, "control", "submitted"], [1, "col-md-4", "col-12", "p-2", "align-text-center"], ["label", "display_In_Result", 3, "control"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow", "editRow"], [3, "click"]], template: function AttendanceElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 0)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "app-check-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-card-actions", 12)(19, "submit-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClick", function AttendanceElementComponent_Template_submit_btn_onClick_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, AttendanceElementComponent_reset_form_btn_20_Template, 1, 0, "reset-form-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "app-material-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onChangePage", function AttendanceElementComponent_Template_app_material_table_onChangePage_22_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function AttendanceElementComponent_Template_app_material_table_deleteRow_22_listener($event) { return ctx.onDelete($event); })("editRow", function AttendanceElementComponent_Template_app_material_table_editRow_22_listener($event) { return ctx.attendanceElementToEdit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.arName)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.code)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx.formCtrls.display_In_Result);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.attendanceElementService)("actions", ctx.rowFunctions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_6__.MaterialTableComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_7__.CheckBoxComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_8__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_9__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_10__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLWVsZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61905:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/attendance-penalty-setup/attendance-penalty-setup.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePenaltySetupComponent": () => (/* binding */ AttendancePenaltySetupComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_penalty_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-penalty-setup.service */ 52673);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











class AttendancePenaltySetupComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(penaltySetupServ) {
        super();
        this.penaltySetupServ = penaltySetupServ;
        this.submitted = false;
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0) this.getObject();
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            maxDeductionLimitDays: [null, [ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__.CustomValidators.gt(0)]],
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getObject();
    }
    getObject() {
        this.showLoading();
        this.penaltySetupServ
            .getObject()
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.form.patchValue(res.data);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    submit() {
        if (this.form.valid) {
            const model = {
                id: this.form.value.id,
                maxDeductionLimitDays: this.form.value.maxDeductionLimitDays,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.penaltySetupServ
            .create(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.penaltySetupServ
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
AttendancePenaltySetupComponent.ɵfac = function AttendancePenaltySetupComponent_Factory(t) { return new (t || AttendancePenaltySetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_penalty_setup_service__WEBPACK_IMPORTED_MODULE_2__.AttendancePenaltySetupService)); };
AttendancePenaltySetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AttendancePenaltySetupComponent, selectors: [["app-attendance-penalty-setup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "attendancePenaltySetup", "editTitle", "editattendancePenaltySetup", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["type", "number", "label", "maxDeductionLimitDays", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"]], template: function AttendancePenaltySetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-card-actions", 8)(12, "submit-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function AttendancePenaltySetupComponent_Template_submit_btn_onClick_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.formCtrls.maxDeductionLimitDays)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
    } }, dependencies: [_shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLXBlbmFsdHktc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29751:
/*!***********************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/attendance-period/attendance-period.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePeriodComponent": () => (/* binding */ AttendancePeriodComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-period.service */ 88338);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);












class AttendancePeriodComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(periodSetupServ) {
        super();
        this.periodSetupServ = periodSetupServ;
        this.submitted = false;
    }
    ngOnInit() {
        // if(this.CheckNoBusinessOrCompany())
        // this.getObject()
        this.form = this.fb.group({
            id: [0, { nonNallable: true }],
            startDay: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomValidators.lte(31), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomValidators.gt(0)],
            ],
            startMonth: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomValidators.lte(12), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomValidators.gt(0)],
            ],
        });
    }
    onChangeBusinessAndCompanyId() {
        if (this.checkNoBusinessOrCompany())
            this.getObject();
    }
    get formCtrls() {
        return this.form.controls;
    }
    create(model) {
        this.showLoading();
        this.periodSetupServ
            .create(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    submit() {
        if (this.form.valid) {
            const model = {
                month_setup: {
                    id: this.form.value.id,
                    startDay: this.form.value.startDay,
                    startMonth: this.form.value.startMonth,
                },
            };
            model.month_setup.id == 0 ? this.create(model) : this.update(model);
        }
    }
    update(model) {
        this.showLoading();
        this.periodSetupServ
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.updateSuccessfullyMsg(res.message.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    getObject() {
        this.showLoading();
        this.periodSetupServ
            .getObject()
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.form.patchValue(res.data.month_setup);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
}
AttendancePeriodComponent.ɵfac = function AttendancePeriodComponent_Factory(t) { return new (t || AttendancePeriodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_period_service__WEBPACK_IMPORTED_MODULE_2__.AttendancePeriodService)); };
AttendancePeriodComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AttendancePeriodComponent, selectors: [["app-attendance-period"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "attendancePeriod", "editTitle", "editattendancePeriod", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-4", "col-12"], ["type", "number", "label", "startDay", 3, "control", "submitted"], ["type", "number", "label", "startMonth", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"]], template: function AttendancePeriodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "form", 5)(8, "div", 0)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-card-actions", 9)(14, "submit-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClick", function AttendancePeriodComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.startDay)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.formCtrls.startMonth)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
    } }, dependencies: [_shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_4__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLXBlcmlvZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 65997:
/*!***********************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/official-holidays/official-holidays.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficialHolidaysComponent": () => (/* binding */ OfficialHolidaysComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_official_holidays_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/official-holidays.service */ 62680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function OfficialHolidaysComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OfficialHolidaysComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class OfficialHolidaysComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(holidayService) {
        super();
        this.holidayService = holidayService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "en_Name", "ar_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0)
        //   this.getList(this.currentPage);
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
        this.holidayService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
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
        this.holidayService
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
        this.holidayService
            .update(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else {
                this.errorList(res?.message?.messages);
            }
            this.hideLoading();
        });
    }
    holidayToEdit(holiday) {
        this.form.patchValue(holiday);
    }
    onDelete(holiday) {
        let msg = this.msgTranslate(holiday.ar_Name, holiday.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm) {
                this.delete(holiday);
            }
        });
    }
    navigateToCalendar(holiday) {
        this.router.navigate([
            `attendance-setup/${this.moduleId}/holidays-calendar/${holiday.id}`,
        ]);
    }
    delete(model) {
        this.showLoading();
        this.holidayService.Delete(model.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (model.id == this.formCtrls.id.value)
                    this.clearForm();
            }
            else {
                this.errorList(res?.message?.messages);
            }
        });
    }
    clearForm() {
        this.form.reset({ id: 0 });
        this.submitted = false;
    }
}
OfficialHolidaysComponent.ɵfac = function OfficialHolidaysComponent_Factory(t) { return new (t || OfficialHolidaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_official_holidays_service__WEBPACK_IMPORTED_MODULE_3__.OfficialHolidaysService)); };
OfficialHolidaysComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OfficialHolidaysComponent, selectors: [["app-official-holidays"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "officialHolidays", "editTitle", "editHoliday", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "en_Name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function OfficialHolidaysComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function OfficialHolidaysComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, OfficialHolidaysComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function OfficialHolidaysComponent_Template_app_material_table_onChangePage_17_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function OfficialHolidaysComponent_Template_app_material_table_editRow_17_listener($event) { return ctx.holidayToEdit($event); })("deleteRow", function OfficialHolidaysComponent_Template_app_material_table_deleteRow_17_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.holidayService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZpY2lhbC1ob2xpZGF5cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5411:
/*!*****************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/over-time-type/over-time-type.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverTimeTypeComponent": () => (/* binding */ OverTimeTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_over_time_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/over-time-type.service */ 80733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 88035);

















function OverTimeTypeComponent_reset_form_btn_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "reset-form-btn", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverTimeTypeComponent_reset_form_btn_15_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class OverTimeTypeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(overTimeTypeService) {
        super();
        this.overTimeTypeService = overTimeTypeService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "name", "ar_Name", "actions"];
        this.isLoaded = false;
        this.optionalColomns = [];
    }
    ngOnInit() {
        // if (this.businessId > 0 && this.companyId > 0)
        //   this.getList(this.page.pageIndex);
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
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
        this.overTimeTypeService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
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
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                ID: this.form.value.id,
                Ar_Name: this.form.value.ar_Name,
                Name: this.form.value.name,
            };
            model.ID == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.overTimeTypeService.create(model).subscribe((res) => {
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
        this.overTimeTypeService
            .update(model)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.clearForm();
                this.getList(this.currentPage, this.page.pageSize);
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    attendanceElementToEdit(overTimeType) {
        this.form.patchValue(overTimeType);
    }
    onDelete(overTimeType) {
        this.deleteDialog(overTimeType.name).subscribe((confirm) => {
            if (confirm)
                this.delete(overTimeType);
        });
    }
    delete(overTimeType) {
        this.showLoading();
        this.overTimeTypeService
            .Delete(overTimeType.id)
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res?.message?.messageTypeName);
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    this.getList(this.currentPage, this.page.pageSize);
                }
                if (overTimeType.id == this.formCtrls.id.value)
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
OverTimeTypeComponent.ɵfac = function OverTimeTypeComponent_Factory(t) { return new (t || OverTimeTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_over_time_type_service__WEBPACK_IMPORTED_MODULE_3__.OverTimeTypeService)); };
OverTimeTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: OverTimeTypeComponent, selectors: [["app-over-time-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "form-card"], ["addTitle", "overtimetype", "editTitle", "editOverTimeType", 3, "id"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "name", 3, "control", "submitted"], ["label", "ar_Name", 3, "control", "submitted"], ["align", "end"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "actions", "exportService", "onChangePage", "editRow", "deleteRow"], [3, "click"]], template: function OverTimeTypeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClick", function OverTimeTypeComponent_Template_submit_btn_onClick_14_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, OverTimeTypeComponent_reset_form_btn_15_Template, 1, 0, "reset-form-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "app-material-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChangePage", function OverTimeTypeComponent_Template_app_material_table_onChangePage_17_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("editRow", function OverTimeTypeComponent_Template_app_material_table_editRow_17_listener($event) { return ctx.attendanceElementToEdit($event); })("deleteRow", function OverTimeTypeComponent_Template_app_material_table_deleteRow_17_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("actions", ctx.rowFunctions)("exportService", ctx.overTimeTypeService);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_6__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_7__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVyLXRpbWUtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 22019:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/permissions/permission-index/permission-index.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionIndexComponent": () => (/* binding */ PermissionIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/permissions.service */ 96391);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 88035);









class PermissionIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(permissionService) {
        super();
        this.permissionService = permissionService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "name",
            "num_Permission_Per_Month",
            "num_Permission_Per_Year",
            "enable_Validation",
            "actions",
        ];
        this.optionalColomns = [
            "warningInsertAction",
            "stopInsertAction",
            "total_Hour_Per_Permission",
            "total_Hour_Per_Month",
        ];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) {
        //   this.getList(this.page.pageIndex);
        // }
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.permissionService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(page - 1);
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
    // navigateToEdit(permission: IPermissionTypeModel) {
    //   this.router.navigate(
    //     [`attendance-setup/${this.moduleId}/edit-permission/${permission.id}`],
    //     {
    //       queryParams: {
    //         parentView: this.getViewName,
    //         ...this.pageParams,
    //       },
    //     }
    //   );
    // }
    onDelete(permission) {
        let msg = this.msgTranslate(permission.name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(permission);
        });
    }
    delete(permission) {
        this.showLoading();
        this.permissionService.Delete(permission.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
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
PermissionIndexComponent.ɵfac = function PermissionIndexComponent_Factory(t) { return new (t || PermissionIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_permissions_service__WEBPACK_IMPORTED_MODULE_2__.PermissionTypeService)); };
PermissionIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PermissionIndexComponent, selectors: [["app-permission-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "permissionType", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function PermissionIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChangePage", function PermissionIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PermissionIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.permissionService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzaW9uLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 594:
/*!******************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/plan/extend-with-change/extend-with-change.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendWithChangeComponent": () => (/* binding */ ExtendWithChangeComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-plan.service */ 86280);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plan-form/plan-form.component */ 7090);






class ExtendWithChangeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(planService) {
        super();
        this.planService = planService;
    }
    ngOnInit() { }
    submit(model) {
        if (model?.plan?.id >= 0)
            this.create(model);
    }
    create(model) {
        this.showLoading();
        this.planService
            .createExtendWithChange(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
ExtendWithChangeComponent.ɵfac = function ExtendWithChangeComponent_Factory(t) { return new (t || ExtendWithChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__.AttendancePlanService)); };
ExtendWithChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExtendWithChangeComponent, selectors: [["app-extendwithchange"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["pageTitle", "extendWithChange", 3, "disabelControls", "isExtendWithChange", "onSubmit"]], template: function ExtendWithChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-plan-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSubmit", function ExtendWithChangeComponent_Template_app_plan_form_onSubmit_0_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabelControls", true)("isExtendWithChange", true);
    } }, dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRlbmQtd2l0aC1jaGFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68216:
/*!************************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/plan/extend-without-change/extend-without-change.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendWithoutChangeComponent": () => (/* binding */ ExtendWithoutChangeComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-plan.service */ 86280);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plan-form/plan-form.component */ 7090);






class ExtendWithoutChangeComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(planService) {
        super();
        this.planService = planService;
    }
    ngOnInit() { }
    submit(model) {
        delete model.plan.description;
        delete model.plan.group_Days;
        delete model.Att_Plan_ShiftList;
        if (model.plan.id)
            this.create(model);
    }
    create(model) {
        this.showLoading();
        this.planService
            .createExtendWithoutChange(model)
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
ExtendWithoutChangeComponent.ɵfac = function ExtendWithoutChangeComponent_Factory(t) { return new (t || ExtendWithoutChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__.AttendancePlanService)); };
ExtendWithoutChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExtendWithoutChangeComponent, selectors: [["app-extendwithoutchange"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["pageTitle", "extendWithoutChange", 3, "showDaysTable", "disabelControls", "onSubmit"]], template: function ExtendWithoutChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-plan-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSubmit", function ExtendWithoutChangeComponent_Template_app_plan_form_onSubmit_0_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showDaysTable", false)("disabelControls", true);
    } }, dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRlbmQtd2l0aG91dC1jaGFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 48286:
/*!******************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/plan/plan-details/plan-details.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDetailsComponent": () => (/* binding */ PlanDetailsComponent)
/* harmony export */ });
/* harmony import */ var app_system_setup_attendance_setup_mapper_attendance_plan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/attendance-plan */ 3371);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-plan.service */ 86280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 89461);















function PlanDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-material-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 11, "iteration")), " ", plan_r1.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx_r0.isLoaded)("mandatoryColomns", ctx_r0.mandatoryColomns)("optionalColomns", ctx_r0.optionalColomns)("showPaginator", false)("showFilter", false)("showLoader", false)("dataSource", plan_r1.value);
} }
class PlanDetailsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(planServ) {
        super();
        this.planServ = planServ;
        this.groupedPlans = {};
        this.mandatoryColomns = ["date", "dayName", "is_Basic", "is_WeekEnd"];
        this.isLoaded = false;
        this.optionalColomns = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.planId = params.planId;
        });
        this.getPlansDetailsById(1);
    }
    getPlansDetailsById(page, pageSize) {
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.showLoading();
        this.planServ
            .getDetailsById(this.planId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.groupedPlans = this.groupPlansByIterationNumber((0,app_system_setup_attendance_setup_mapper_attendance_plan__WEBPACK_IMPORTED_MODULE_0__.planDetailsToMap)(res.data));
            }
            else {
                this.errorList(res.message.messages);
            }
            this.hideLoading();
        });
    }
    iterationNumberAscending(a, b) {
        return a.key - b.key;
    }
    groupPlansByIterationNumber(plans) {
        let grouped = {};
        for (let plan of plans) {
            let iterationNumber = plan.iterationNumber;
            if (!grouped[iterationNumber]) {
                grouped[iterationNumber] = [];
            }
            grouped[iterationNumber].push(plan);
        }
        return grouped;
    }
    ngOnDestroy() {
        // Unsubscribe from all observables to prevent memory leaks
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PlanDetailsComponent.ɵfac = function PlanDetailsComponent_Factory(t) { return new (t || PlanDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__.AttendancePlanService)); };
PlanDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PlanDetailsComponent, selectors: [["app-plan-details"]], inputs: { planId: "planId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[1, "row"], [1, "col-12"], [1, "mb-2"], ["title", "attendancePlansDetails"], [3, "url", "params"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "showPaginator", "showFilter", "showLoader", "dataSource"]], template: function PlanDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title")(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "page-title", 3)(7, "app-back-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, PlanDetailsComponent_div_8_Template, 8, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("url", "/attendance-setup/", ctx.moduleId, "/plan/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 3, ctx.groupedPlans, ctx.iterationNumberAscending));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_5__.BackBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 72079:
/*!**************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/plan/plan-index/plan-index.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanIndexComponent": () => (/* binding */ PlanIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_attendance_setup_mapper_attendance_plan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/attendance-plan */ 3371);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-plan.service */ 86280);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class PlanIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(planService) {
        super();
        this.planService = planService;
        this.submitted = false;
        this.mandatoryColomns = ["Ser", "id", "ar_Name", "en_Name", "actions"];
        this.optionalColomns = [
            "start_Date",
            "end_Date",
            "group_Days",
            "description",
        ];
        this.isLoaded = false;
    }
    ngOnInit() { }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.planService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_attendance_setup_mapper_attendance_plan__WEBPACK_IMPORTED_MODULE_0__.attendancePlanToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    onDelete(plan) {
        let msg = this.msgTranslate(plan.ar_Name, plan.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(plan);
        });
    }
    delete(plan) {
        this.showLoading();
        this.planService.Delete(plan.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (this.dataSource.data.length == 1 && this.currentPage > 1) {
                    this.getList(this.prevPage, this.page.pageSize);
                }
                else {
                    // if not last item in list: get current page
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
PlanIndexComponent.ɵfac = function PlanIndexComponent_Factory(t) { return new (t || PlanIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_3__.AttendancePlanService)); };
PlanIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PlanIndexComponent, selectors: [["app-plan-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "attendance_Plans", 3, "globalFunctions"], [3, "isLoaded", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "dataSource", "onChangePage", "deleteRow"]], template: function PlanIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function PlanIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function PlanIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.planService)("actions", ctx.rowFunctions)("dataSource", ctx.dataSource);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 40823:
/*!******************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/plan/shrink/shrink.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShrinkComponent": () => (/* binding */ ShrinkComponent)
/* harmony export */ });
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/attendance-plan.service */ 86280);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plan-form/plan-form.component */ 7090);






class ShrinkComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(planService) {
        super();
        this.planService = planService;
    }
    ngOnInit() { }
    submit(model) {
        delete model.plan.description;
        delete model.plan.group_Days;
        delete model.Att_Plan_ShiftList;
        if (model.plan.id)
            this.create(model);
    }
    create(model) {
        this.showLoading();
        this.planService.createShrink(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
}
ShrinkComponent.ɵfac = function ShrinkComponent_Factory(t) { return new (t || ShrinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_attendance_plan_service__WEBPACK_IMPORTED_MODULE_2__.AttendancePlanService)); };
ShrinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ShrinkComponent, selectors: [["app-shrink"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["pageTitle", "shrink", 3, "showDaysTable", "disabelControls", "onSubmit"]], template: function ShrinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-plan-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSubmit", function ShrinkComponent_Template_app_plan_form_onSubmit_0_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ngx-spinner");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showDaysTable", false)("disabelControls", true);
    } }, dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _plan_form_plan_form_component__WEBPACK_IMPORTED_MODULE_3__.PlanFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaHJpbmsuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51160:
/*!****************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/shifts/add-shifts/add-shifts.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftsComponent": () => (/* binding */ ShiftsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/validators/custom.validator */ 78937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_shifts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/shifts.service */ 25470);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/input/input.component */ 25273);
/* harmony import */ var _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/check-box/check-box.component */ 12613);
/* harmony import */ var _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/back-btn/back-btn.component */ 61064);
/* harmony import */ var _shared_components_resources_dynamic_form_field_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/resources/dynamic-form-field/timepicker/timepicker.component */ 47383);
/* harmony import */ var _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/add-new-btn/add-new-btn.component */ 52682);
/* harmony import */ var _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/reset-form-btn/reset-form-btn.component */ 56500);
/* harmony import */ var _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/resources/buttons/submit-btn/submit-btn.component */ 57566);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 88035);


















function ShiftsComponent_app_add_new_btn_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-add-new-btn", 40);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/attendance-setup/", ctx_r0.moduleId, "/shifts/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx_r0.pageParams);
} }
function ShiftsComponent_reset_form_btn_58_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "reset-form-btn", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ShiftsComponent_reset_form_btn_58_Template_reset_form_btn_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.clearForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class ShiftsComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_1__.AppHelpers {
    constructor(shiftsService) {
        super();
        this.shiftsService = shiftsService;
        this.shiftId = 0;
        this.submitted = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.shiftId = Number(params.get("shiftId")) ?? 0;
            // if (this.CheckNoBusinessOrCompany() && this.companyId > 0)
            //   this.getShiftsById();
        });
        this.form = this.fb.group({
            id: [0, { nonNullable: true }],
            ar_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            en_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.whiteSpace]],
            is_Just_Attend: [false],
            is_Target: [false],
            hour_Number: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0)]],
            ovt_Target_Factor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0)],
            ovt_Target_Max_Limit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0)],
            delay_Tolerance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.min(0)],
            across_Mid_Night: [false],
            isNight: [false],
            is_DefaultAttend: [false],
            calc_Delay_From: [null],
            calc_Departure_From: [null],
            start_Time_Lower_Limit: [null],
            start_Time_Upper_Limit: [null],
            end_Time_Lower_Limit: [null, { disable: true }],
            end_Time_Upper_Limit: [null],
            start_Time: [null],
            end_Time: [null],
        }, {
            validator: [
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("end_Time", "start_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeBefore("start_Time_Lower_Limit", "start_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeBefore("start_Time_Lower_Limit", "end_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("calc_Departure_From", "calc_Delay_From"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("calc_Delay_From", "start_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeBefore("calc_Departure_From", "end_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("start_Time_Upper_Limit", "start_Time_Lower_Limit"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("end_Time_Upper_Limit", "end_Time_Lower_Limit"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("end_Time_Upper_Limit", "end_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeAfter("start_Time_Upper_Limit", "start_Time"),
                app_shared_validators_custom_validator__WEBPACK_IMPORTED_MODULE_2__.CustomValidator.timeBefore("start_Time_Upper_Limit", "end_Time"),
            ],
        });
        this.formCtrls.start_Time.valueChanges.subscribe((val) => {
            this.calcHourNumber();
        });
        this.formCtrls.end_Time.valueChanges.subscribe((val) => {
            this.calcHourNumber();
        });
    }
    get formCtrls() {
        return this.form.controls;
    }
    onChangeBusinessAndCompanyId() {
        // this.Shift = null;
        if (this.checkNoBusinessOrCompany())
            this.getShiftsById();
    }
    onchangeJustAttend(value) {
        let JUSTAttendDisabled = [
            "hour_Number",
            "ovt_Target_Factor",
            "ovt_Target_Max_Limit",
            "across_Mid_Night",
            "delay_Tolerance",
            "isNight",
            "is_DefaultAttend",
            "end_Time",
            "calc_Delay_From",
            "calc_Departure_From",
            "start_Time",
        ];
        JUSTAttendDisabled.forEach((control) => {
            if (value) {
                this.formCtrls.is_Target.setValue(false);
                this.form.get(control).disable();
                this.form.get(control).reset();
            }
            else
                this.form.get(control).enable();
        });
    }
    onchangeTarget(value) {
        let changeTarget = [
            "start_Time",
            "end_Time",
            "calc_Delay_From",
            "calc_Departure_From",
            "isNight",
            "is_DefaultAttend",
        ];
        changeTarget.forEach((control) => {
            if (value) {
                this.formCtrls.is_Just_Attend.setValue(false);
                this.form.get(control).disable();
                this.form.get(control).reset();
                // enable
                this.formCtrls.hour_Number.enable();
                this.formCtrls.ovt_Target_Max_Limit.enable();
                this.formCtrls.ovt_Target_Factor.enable();
                this.formCtrls.across_Mid_Night.enable();
                this.formCtrls.delay_Tolerance.enable();
            }
            else {
                this.form.get(control).enable();
            }
        });
    }
    calcHourNumber() {
        this.formCtrls?.hour_Number?.disable();
        let start = new Date("01/01/2000 " + this.formCtrls.start_Time.value);
        let end = new Date("01/01/2000 " + this.formCtrls.end_Time.value);
        var start_Hours = start.getHours();
        var end_Hours = end.getHours();
        var start_Minu = start.getMinutes();
        var end_Minu = end.getMinutes();
        let newTime = end_Hours - start_Hours + (end_Minu - start_Minu) / 60;
        if (newTime)
            this.formCtrls.hour_Number.setValue(newTime);
        else
            this.formCtrls.hour_Number.setValue(null);
    }
    changeStartTimeUpperLimit() {
        this.formCtrls.end_Time_Lower_Limit.disable();
        let time = new Date("01/01/2000 " + this.formCtrls.start_Time_Upper_Limit.value);
        time.setSeconds(time.getSeconds() + 1);
        var newTime = time.toTimeString().split(" ")[0];
        this.formCtrls.end_Time_Lower_Limit.setValue(newTime);
        this.formCtrls.end_Time_Lower_Limit.disable();
    }
    submit() {
        this.submitted = true;
        if (this.form.valid) {
            const model = {
                id: this.form.value.id,
                ar_Name: this.form.value.ar_Name,
                en_Name: this.form.value.en_Name,
                start_Time: this.form.value.start_Time,
                end_Time: this.form.value.end_Time,
                across_Mid_Night: this.form.value.across_Mid_Night,
                is_Target: this.form.value.is_Target,
                ovt_Target_Factor: this.form.value.ovt_Target_Factor,
                delay_Tolerance: this.form.value.delay_Tolerance,
                calc_Delay_From: this.form.value.calc_Delay_From,
                calc_Departure_From: this.form.value.calc_Departure_From,
                is_Just_Attend: this.form.value.is_Just_Attend,
                is_DefaultAttend: this.form.value.is_DefaultAttend,
                hour_Number: this.form.value.hour_Number,
                isNight: this.form.value.isNight,
                ovt_Target_Max_Limit: this.form.value.ovt_Target_Max_Limit,
                start_Time_Lower_Limit: this.form.value.start_Time_Lower_Limit,
                start_Time_Upper_Limit: this.form.value.start_Time_Upper_Limit,
                end_Time_Lower_Limit: this.form.value.end_Time_Lower_Limit,
                end_Time_Upper_Limit: this.form.value.end_Time_Upper_Limit,
            };
            model.id == 0 ? this.create(model) : this.update(model);
        }
    }
    create(model) {
        this.showLoading();
        this.shiftsService.create(model).subscribe((res) => {
            if (res?.message?.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.addSuccessfullyMsg(res?.message?.messageTypeName);
                this.shiftId = res.data.id;
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    update(model) {
        this.showLoading();
        this.shiftsService.update(model).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.Success) {
                this.shiftId = res.data.id;
                this.updateSuccessfullyMsg(res?.message?.messageTypeName);
            }
            else
                this.errorList(res?.message?.messages);
            this.hideLoading();
        });
    }
    getShiftsById() {
        this.shiftsService.getById(this.shiftId).subscribe((res) => {
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
ShiftsComponent.ɵfac = function ShiftsComponent_Factory(t) { return new (t || ShiftsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_shifts_service__WEBPACK_IMPORTED_MODULE_3__.ShiftsService)); };
ShiftsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ShiftsComponent, selectors: [["app-shifts"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 40, consts: [[1, "row"], [1, "col-12"], [1, "p-2", "form-card"], ["addTitle", "shifts", "editTitle", "editShifts", 3, "id"], ["label", "addshifts", 3, "url", "params", 4, "ngIf"], [3, "url", "params"], [1, "container-fluid"], [3, "formGroup"], [1, "col-md-6", "col-12"], ["label", "ar_Name", 3, "control", "submitted"], ["label", "en_Name", 3, "control", "submitted"], [1, "row", "mb-2"], [1, "col-md-6", "col-6"], ["label", "is_Just_Attend", 3, "control", "onChange"], ["label", "is_Target", 3, "control", "onChange"], [1, "row", "mt-3"], [1, "col-md-3", "col-12"], ["label", "hour_Number", "type", "number", 3, "control", "submitted"], ["type", "number", "label", "ovtTargetFactor", 3, "control", "submitted"], ["type", "number", "label", "ovtTargetMaxLimit", 3, "control", "submitted"], [1, "col-md-3", "col-6"], ["label", "delay_Tolerance", "type", "number", 3, "control", "submitted"], [1, "row", "mt-2"], [1, "col-md-4", "col-6"], ["label", "acrossMidNight", 3, "control"], [1, "col-md-4", "col-12"], ["label", "isNight", 3, "control"], [1, "col-md-4"], ["label", "is_DefaultAttend", 3, "control"], ["label", "start_Time", 3, "control", "submitted"], ["label", "end_Time", 3, "control", "submitted"], ["label", "calc_Delay_From", 3, "control", "submitted"], ["label", "calc_Departure_From", 3, "control", "submitted"], ["label", "start_Time_Lower_Limit", 3, "control", "submitted"], ["label", "start_Time_Upper_Limit", 3, "control", "submitted", "change"], ["label", " end_Time_Lower_Limit", 3, "control", "submitted"], ["label", "end_Time_Upper_Limit", 3, "control", "submitted"], ["align", "end", 1, "m-2"], [3, "id", "onClick"], [3, "click", 4, "ngIf"], ["label", "addshifts", 3, "url", "params"], [3, "click"]], template: function ShiftsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ShiftsComponent_app_add_new_btn_6_Template, 1, 2, "app-add-new-btn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "app-back-btn", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "form", 7)(10, "div", 0)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "app-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "app-check-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChange", function ShiftsComponent_Template_app_check_box_onChange_17_listener($event) { return ctx.onchangeJustAttend($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 12)(19, "app-check-box", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onChange", function ShiftsComponent_Template_app_check_box_onChange_19_listener($event) { return ctx.onchangeTarget($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "app-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "app-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "app-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "app-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 22)(30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "app-check-box", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "app-check-box", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "app-check-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 22)(37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "app-timepicker", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "app-timepicker", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 22)(42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "app-timepicker", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "app-timepicker", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 0)(47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "app-timepicker", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 8)(50, "app-timepicker", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ShiftsComponent_Template_app_timepicker_change_50_listener() { return ctx.changeStartTimeUpperLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 0)(52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "app-timepicker", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](55, "app-timepicker", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "mat-card-actions", 37)(57, "submit-btn", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClick", function ShiftsComponent_Template_submit_btn_onClick_57_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](58, ShiftsComponent_reset_form_btn_58_Template, 1, 0, "reset-form-btn", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.shiftId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("url", "/attendance-setup/", ctx.moduleId, "/shifts/index");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", ctx.pageParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.ar_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.en_Name)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.is_Just_Attend);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.is_Target);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.hour_Number)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.ovt_Target_Factor)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.ovt_Target_Max_Limit)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.delay_Tolerance)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.across_Mid_Night);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.isNight);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.is_DefaultAttend);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.start_Time)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.end_Time)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.calc_Delay_From)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.calc_Departure_From)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.start_Time_Lower_Limit)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.start_Time_Upper_Limit)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.end_Time_Lower_Limit)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("control", ctx.formCtrls.end_Time_Upper_Limit)("submitted", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", ctx.formCtrls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formCtrls.id.value > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_resources_dynamic_form_field_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_resources_dynamic_form_field_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_5__.CheckBoxComponent, _shared_components_resources_buttons_back_btn_back_btn_component__WEBPACK_IMPORTED_MODULE_6__.BackBtnComponent, _shared_components_resources_dynamic_form_field_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_7__.TimepickerComponent, _shared_components_resources_buttons_add_new_btn_add_new_btn_component__WEBPACK_IMPORTED_MODULE_8__.AddNewBtnComponent, _shared_components_resources_buttons_reset_form_btn_reset_form_btn_component__WEBPACK_IMPORTED_MODULE_9__.ResetFormBtnComponent, _shared_components_resources_buttons_submit_btn_submit_btn_component__WEBPACK_IMPORTED_MODULE_10__.SubmitBtnComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2hpZnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 83039:
/*!********************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/shifts/shifts-index/shifts-index.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftsIndexComponent": () => (/* binding */ ShiftsIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_attendance_setup_mapper_shifts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/shifts */ 82539);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_shifts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/shifts.service */ 25470);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class ShiftsIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    // private destroy$ = new Subject<void>();
    constructor(shiftsService) {
        super();
        this.shiftsService = shiftsService;
        this.submitted = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "ar_Name",
            "en_Name",
            "start_Time",
            "end_Time",
            "isNight",
            "is_Just_Attend",
            "actions",
        ];
        this.optionalColomns = [
            "end_Time_Lower_Limit",
            "end_Time_Upper_Limit",
            "calc_Delay_From",
            "calc_Departure_From",
            "is_Target",
            "ovt_Target_Factor",
            "ovt_Target_Max_Limit",
            "start_Time_Lower_Limit",
            "start_Time_Upper_Limit",
            "delay_Tolerance",
            "hour_Number",
            "is_DefaultAttend",
            "shift_Type_ID",
        ];
        this.isLoaded = false;
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
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize)
            this.page.pageSize = pageSize;
        this.removePageParams();
        let params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.shiftsService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                if (res.data.length == 0 && page > 1) {
                    this.getList(this.prevPage);
                    return;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_attendance_setup_mapper_shifts__WEBPACK_IMPORTED_MODULE_0__.shiftToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else
                this.errorList(res.message.messages);
            this.hideLoading();
        });
    }
    // toEditShifts(shift: IShiftsModel) {
    //   this.router.navigate([`attendance-setup/${this.moduleId}/edit-shift/${shifts.id}`], {
    //     queryParams: {
    //       parentView: this.getViewName,
    //       ...this.pageParams,
    //     },
    //   });
    //   }
    onDelete(shifts) {
        let msg = this.msgTranslate(shifts.ar_Name, shifts.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(shifts);
        });
    }
    delete(shifts) {
        this.showLoading();
        this.shiftsService.Delete(shifts.id).subscribe((res) => {
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
ShiftsIndexComponent.ɵfac = function ShiftsIndexComponent_Factory(t) { return new (t || ShiftsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_shifts_service__WEBPACK_IMPORTED_MODULE_3__.ShiftsService)); };
ShiftsIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ShiftsIndexComponent, selectors: [["app-shifts-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "shifts", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function ShiftsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function ShiftsIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function ShiftsIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.shiftsService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdHMtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29268:
/*!**************************************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/components/vacation/vacation-index/vacation-index.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationIndexComponent": () => (/* binding */ VacationIndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var app_system_setup_attendance_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/system-setup/attendance-setup/mapper/vacation */ 97986);
/* harmony import */ var app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/enums/message-types.enum */ 15602);
/* harmony import */ var app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/resources/app-helpers */ 95751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_system_setup_attendance_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/system-setup/attendance-setup/services/vacation/vacation.service */ 37343);
/* harmony import */ var _shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/resources/material-table/material-table.component */ 93410);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 88035);










class VacationIndexComponent extends app_shared_resources_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppHelpers {
    constructor(vacationService) {
        super();
        this.vacationService = vacationService;
        this.isLoaded = false;
        this.mandatoryColomns = [
            "Ser",
            "id",
            "en_Name",
            "allow_Post",
            "max_Post_Days",
            "offecial_Vaction_Included",
            "actions",
        ];
        this.optionalColomns = [
            "display_In_Result",
            "variableCode",
            "defaultBalance",
            "day_Off_Included",
            "isRenew",
            "renew_Day",
            "renew_Month",
            "renew_Period",
            "number_of_Earning",
            "isDefault",
            "is_Paid",
            "canBeRequestedToday",
            "maxRelatedBal",
            "deductible_Value",
            "relatedVacationId",
            "relatedVacationPriority",
            "hasAttashment",
            "calculate_Balance",
            "calculate_Balance_By_Contract",
            "number_Days_month",
            "reportOrder",
            "gender",
        ];
    }
    ngOnInit() {
        // if (this.CheckNoBusinessOrCompany()) {
        //   this.getList(this.currentPage);
        // }
    }
    onChangeBusinessAndCompanyId() {
        if (this.dataSource?.data?.length > 0)
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(null);
        if (this.checkNoBusinessOrCompany())
            this.getList(this.pageFromUrl > 0 ? this.pageFromUrl : this.firstPage);
    }
    getList(page, pageSize) {
        this.isLoaded = false;
        this.page.pageIndex = page;
        if (pageSize) {
            this.page.pageSize = pageSize;
        }
        this.removePageParams();
        const params = {
            PageNumber: page,
            pageSize: this.page.pageSize,
        };
        this.vacationService
            .getList(params)
            // .pipe(takeUntil(this.destroy$))
            .pipe(this.cancelRequest())
            .subscribe((res) => {
            if (res.message.messageType === app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource((0,app_system_setup_attendance_setup_mapper_vacation__WEBPACK_IMPORTED_MODULE_0__.vacationToMap)(res.data));
                this.isLoaded = true;
                this.page.length = res.meta.totalItemCount;
            }
            else {
                this.errorList(res.message.messages);
            }
        });
    }
    // navigateToEdit(vacation: IVacationModel) {
    //   this.router.navigate(
    //     [`attendance-setup/${this.moduleId}/edit/${vacation.att_Vacation.id}`],
    //     {
    //       queryParams: {
    //         parentView: this.getViewName,
    //         ...this.pageParams,
    //       },
    //     }
    //   );
    // }
    onDelete(vacation) {
        let msg = this.msgTranslate(vacation.ar_Name, vacation.en_Name);
        this.deleteDialog(msg).subscribe((confirm) => {
            if (confirm)
                this.delete(vacation);
        });
    }
    delete(vacation) {
        this.showLoading();
        this.vacationService.Delete(vacation.id).subscribe((res) => {
            if (res.message.messageType == app_shared_enums_message_types_enum__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.Success) {
                this.deleteSuccessfullyMsg(res.message.messageTypeName);
                if (this.dataSource.data.length == 1 && this.page.pageIndex > 1) {
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
VacationIndexComponent.ɵfac = function VacationIndexComponent_Factory(t) { return new (t || VacationIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_system_setup_attendance_setup_services_vacation_vacation_service__WEBPACK_IMPORTED_MODULE_3__.VacationService)); };
VacationIndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VacationIndexComponent, selectors: [["app-vacation-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "index-card"], ["title", "vacationType", 3, "globalFunctions"], [3, "isLoaded", "dataSource", "mandatoryColomns", "optionalColomns", "page", "exportService", "actions", "onChangePage", "deleteRow"]], template: function VacationIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "page-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-material-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChangePage", function VacationIndexComponent_Template_app_material_table_onChangePage_6_listener($event) { return ctx.getList($event.pageIndex + 1, $event.pageSize); })("deleteRow", function VacationIndexComponent_Template_app_material_table_deleteRow_6_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("globalFunctions", ctx.globalFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoaded", ctx.isLoaded)("dataSource", ctx.dataSource)("mandatoryColomns", ctx.mandatoryColomns)("optionalColomns", ctx.optionalColomns)("page", ctx.page)("exportService", ctx.vacationService)("actions", ctx.rowFunctions);
    } }, dependencies: [_shared_components_resources_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__.MaterialTableComponent, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNhdGlvbi1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 57074:
/*!****************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/mapper/attendance-element.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attendanceElementToMap": () => (/* binding */ attendanceElementToMap)
/* harmony export */ });
function attendanceElementToMap(attendanceElements) {
    return attendanceElements.map((item) => {
        return {
            ...item,
            arName: item.att_Attendance_Element?.ar_Name,
            name: item.att_Attendance_Element?.en_Name,
            code: item.att_Attendance_Element?.code,
            id: item.att_Attendance_Element?.id,
            display_In_Result: item.paY_Variable?.display_In_Result,
        };
    });
}


/***/ }),

/***/ 3371:
/*!*************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/mapper/attendance-plan.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attendancePlanToMap": () => (/* binding */ attendancePlanToMap),
/* harmony export */   "planDetailsToMap": () => (/* binding */ planDetailsToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function attendancePlanToMap(attendancePlans) {
    return attendancePlans.map((plan) => {
        return {
            ...plan,
            start_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(plan.start_Date),
            end_Date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(plan.end_Date),
        };
    });
}
function planDetailsToMap(planDetails) {
    return planDetails.map((day) => {
        return {
            ...day,
            dayName: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.getDayName(new Date(day.date)),
            date: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapDate(day.date),
        };
    });
}


/***/ }),

/***/ 82539:
/*!****************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/mapper/shifts.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shiftToMap": () => (/* binding */ shiftToMap)
/* harmony export */ });
/* harmony import */ var app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/resources/helpers-functions */ 35478);

function shiftToMap(shifts) {
    return shifts.map((shift) => {
        return {
            ...shift,
            start_Time: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.start_Time),
            end_Time: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.end_Time),
            start_Time_Lower_Limit: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.start_Time_Lower_Limit),
            start_Time_Upper_Limit: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.start_Time_Upper_Limit),
            end_Time_Lower_Limit: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.end_Time_Lower_Limit),
            end_Time_Upper_Limit: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.end_Time_Upper_Limit),
            calc_Departure_From: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.calc_Departure_From),
            calc_Delay_From: app_shared_resources_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.HelpersFunctions.mapTime(shift.calc_Delay_From),
        };
    });
}


/***/ }),

/***/ 40872:
/*!*************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/attendance-device.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceDeviceService": () => (/* binding */ AttendanceDeviceService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AttendanceDeviceService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("AttendanceSetup/AttDevice/Create", body);
    }
    update(data) {
        return this.post("AttendanceSetup/AttDevice/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/AttDevice/GetList", { params: params });
    }
    getAll() {
        return this.get("AttendanceSetup/AttDevice/GetAll");
    }
    Delete(id) {
        return this.delete("AttendanceSetup/AttDevice/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
AttendanceDeviceService.ɵfac = function AttendanceDeviceService_Factory(t) { return new (t || AttendanceDeviceService)(); };
AttendanceDeviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttendanceDeviceService, factory: AttendanceDeviceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 28778:
/*!**************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/attendance-element.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceElementService": () => (/* binding */ AttendanceElementService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/resources/database-tabels */ 26315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class AttendanceElementService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("AttendanceSetup/Element/Create", body);
    }
    update(data) {
        return this.post("AttendanceSetup/Element/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/Element/GetList", {
            params: {
                ...params,
                $expand: `${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.Att_Attendance_Element},${app_shared_resources_database_tabels__WEBPACK_IMPORTED_MODULE_1__.db.PAY_Variable}`,
            },
        });
    }
    getAll() {
        return this.get("AttendanceSetup/Element/GetAll");
    }
    Delete(id) {
        return this.delete("AttendanceSetup/Element/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
AttendanceElementService.ɵfac = function AttendanceElementService_Factory(t) { return new (t || AttendanceElementService)(); };
AttendanceElementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AttendanceElementService, factory: AttendanceElementService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 52673:
/*!********************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/attendance-penalty-setup.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePenaltySetupService": () => (/* binding */ AttendancePenaltySetupService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AttendancePenaltySetupService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("AttendanceSetup/AttendancePenaltyDeductionSetup/Create", data);
    }
    update(data) {
        return this.post("AttendanceSetup/AttendancePenaltyDeductionSetup/Edit", data);
    }
    getObject() {
        return this.get("AttendanceSetup/AttendancePenaltyDeductionSetup/GetObject");
    }
}
AttendancePenaltySetupService.ɵfac = function AttendancePenaltySetupService_Factory(t) { return new (t || AttendancePenaltySetupService)(); };
AttendancePenaltySetupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttendancePenaltySetupService, factory: AttendancePenaltySetupService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 88338:
/*!*************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/attendance-period.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePeriodService": () => (/* binding */ AttendancePeriodService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AttendancePeriodService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("AttendanceSetup/AttendancePeriodSetup/Create", data);
    }
    update(data) {
        return this.post("AttendanceSetup/AttendancePeriodSetup/Edit", data);
    }
    getObject() {
        return this.get("AttendanceSetup/AttendancePeriodSetup/GetObject");
    }
}
AttendancePeriodService.ɵfac = function AttendancePeriodService_Factory(t) { return new (t || AttendancePeriodService)(); };
AttendancePeriodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttendancePeriodService, factory: AttendancePeriodService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 62680:
/*!*************************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/official-holidays.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficialHolidaysService": () => (/* binding */ OfficialHolidaysService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class OfficialHolidaysService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(data) {
        return this.post("AttendanceSetup/OfficialHoliday/Create", data);
    }
    update(data) {
        return this.post("AttendanceSetup/OfficialHoliday/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/OfficialHoliday/GetList", {
            params: params,
        });
    }
    getById(id) {
        return this.get("AttendanceSetup/OfficialHoliday/GetAll", {
            params: {
                $filter: `id eq ${id}`,
            },
        });
    }
    getAll() {
        return this.get("AttendanceSetup/OfficialHoliday/GetAll");
    }
    Delete(id) {
        return this.delete("AttendanceSetup/OfficialHoliday/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
OfficialHolidaysService.ɵfac = function OfficialHolidaysService_Factory(t) { return new (t || OfficialHolidaysService)(); };
OfficialHolidaysService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfficialHolidaysService, factory: OfficialHolidaysService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 80733:
/*!**********************************************************************************!*\
  !*** ./src/app/system-setup/attendance-setup/services/over-time-type.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverTimeTypeService": () => (/* binding */ OverTimeTypeService)
/* harmony export */ });
/* harmony import */ var app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/app-client.service */ 18521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class OverTimeTypeService extends app_shared_services_app_client_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService {
    constructor() {
        super();
    }
    create(body) {
        return this.post("AttendanceSetup/OverTimeType/Create", body);
    }
    update(data) {
        return this.post("AttendanceSetup/OverTimeType/Edit", data);
    }
    getList(params) {
        return this.get("AttendanceSetup/OverTimeType/GetList", { params: params });
    }
    getAll() {
        return this.get("AttendanceSetup/OverTimeType/GetAll");
    }
    Delete(id) {
        return this.delete("AttendanceSetup/OverTimeType/Delete", {
            params: { Id: id },
        });
    }
    exportExcel() {
        this.getAll();
    }
}
OverTimeTypeService.ɵfac = function OverTimeTypeService_Factory(t) { return new (t || OverTimeTypeService)(); };
OverTimeTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OverTimeTypeService, factory: OverTimeTypeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_system-setup_attendance-setup_attendance-setup_module_ts.js.map