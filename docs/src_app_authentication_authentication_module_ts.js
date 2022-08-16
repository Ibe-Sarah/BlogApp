"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 3365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageRoutingModule": () => (/* binding */ AuthenticationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.page */ 9973);




const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPage
    }
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ 1082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPageModule": () => (/* binding */ AuthenticationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 3365);
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page */ 9973);







let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationPageRoutingModule
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_1__.AuthenticationPage]
    })
], AuthenticationPageModule);



/***/ }),

/***/ 9973:
/*!*******************************************************!*\
  !*** ./src/app/authentication/authentication.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationPage": () => (/* binding */ AuthenticationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _authentication_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.page.html?ngResource */ 5301);
/* harmony import */ var _authentication_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.page.scss?ngResource */ 9608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AuthenticationPage = class AuthenticationPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticationPage.ctorParameters = () => [];
AuthenticationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-authentication',
        template: _authentication_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_authentication_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthenticationPage);



/***/ }),

/***/ 9608:
/*!********************************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5301:
/*!********************************************************************!*\
  !*** ./src/app/authentication/authentication.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>authentication</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map