"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_posts_posts_module_ts"],{

/***/ 561:
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageRoutingModule": () => (/* binding */ PostsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _post_detail_post_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post-detail/post-detail.page */ 6184);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page */ 6931);





const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_1__.PostsPage
    },
    {
        path: "['/', 'post-detail', post.id]", component: _post_detail_post_detail_page__WEBPACK_IMPORTED_MODULE_0__.PostDetailPage
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ 3067:
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageModule": () => (/* binding */ PostsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-routing.module */ 561);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page */ 6931);







let PostsPageModule = class PostsPageModule {
};
PostsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostsPageRoutingModule
        ],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_1__.PostsPage]
    })
], PostsPageModule);



/***/ }),

/***/ 6931:
/*!*************************************!*\
  !*** ./src/app/posts/posts.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": () => (/* binding */ PostsPage)
/* harmony export */ });
/* harmony import */ var _home_sayrah_BlogApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _posts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.html?ngResource */ 1892);
/* harmony import */ var _posts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.page.scss?ngResource */ 4512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_wp_ionic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/wp-ionic.service */ 5053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let PostsPage = class PostsPage {
  constructor(wpService, loadingController) {
    this.wpService = wpService;
    this.loadingController = loadingController;
    this.Posts = [];
    this.postCount = null;
    this.page = 1;
  }

  ngOnInit() {
    this.initPosts();
  }

  initPosts() {
    var _this = this;

    return (0,_home_sayrah_BlogApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let loading = yield _this.loadingController.create({
        message: 'Loading ...'
      });
      yield loading.present();

      _this.wpService.getAllPosts().subscribe(data => {
        _this.postCount = _this.wpService.allPosts;
        _this.Posts = data;
        loading.dismiss();
      });
    })();
  }

  infiniteLoad(e) {
    this.page++;
    this.wpService.getAllPosts(this.page).subscribe(data => {
      this.Posts = [...this.Posts, ...data];
      e.target.complete(); // Disable loading when reached last

      if (this.page == this.wpService.pages) {
        e.target.disabled = true;
      }
    });
  }

};

PostsPage.ctorParameters = () => [{
  type: _shared_wp_ionic_service__WEBPACK_IMPORTED_MODULE_3__.WpIonicService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-posts',
  template: _posts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_posts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PostsPage);


/***/ }),

/***/ 4512:
/*!**************************************************!*\
  !*** ./src/app/posts/posts.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1892:
/*!**************************************************!*\
  !*** ./src/app/posts/posts.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Say'rah's Blog</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label>\n      <strong>Total Posts</strong>\n    </ion-label>\n    <ion-badge color=\"success\" *ngIf=\"postCount\">{{ postCount }}</ion-badge>\n  </ion-item>\n  <ion-card *ngFor=\"let post of Posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n    <ion-button routerLink=\"['/', 'post-detail', post.id]\">Read More</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-infinite-scroll threshold=\"120px\" (ionInfinite)=\"infiniteLoad($event)\">\n    <ion-infinite-scroll-content loadingText=\"Fetching Posts\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- <ion-router-outlet></ion-router-outlet> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_posts_posts_module_ts.js.map