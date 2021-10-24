(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tv-shows-tv-shows-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-shows/tv-shows.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-shows/tv-shows.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"listing\">\n    <div class=\"listing__head\">\n        <h3 class=\"listing__title\">TV Shows</h3>\n    </div>\n\n    <form>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control searchdesign\" placeholder=\"Search for movies...\"\n                            [(ngModel)]=\"searchStr\" name=\"searchStr\" (keyup.enter)=\"searchMovies()\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-primary btnDesign\" type=\"button\"\n                                (click)=\"searchMovies()\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-container *ngIf=\"searchRes\">\n        <app-skeleton *ngIf=\"loader\"></app-skeleton>\n        <div class=\"row\" *ngIf=\"!loader\">\n            <div class=\"col-md-2 listing__items\" *ngFor=\"let item of searchRes | slice:0:18\">\n                <div [routerLink]=\"['/tv/', item.id]\">\n                    <div class=\"listing-item-style\">\n                        <div class=\"overlay\">\n                            <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                        </div>\n                        <img *ngIf=\"item?.poster_path\"\n                            src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{item?.poster_path}}\"\n                            [alt]=\"item.title ? item.title : item.name\">\n                        <img *ngIf=\"!item?.poster_path\" src=\"assets/images/default-movie.png\"\n                            [alt]=\"item.title ? item.title : item.name\">\n                        <h6>{{ item?.name }}</h6>\n                        <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{item?.vote_average}}</span> /10</p>\n                        <p class=\"year\"><span>{{item?.first_air_date | date: 'yyyy'}}</span>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <div class=\"row\" *ngIf=\"!loader\">\n        <div class=\"col-md-2 listing__items\" *ngFor=\"let item of topRatedTv | slice:0:18\">\n            <div [routerLink]=\"['/tv/', item.id]\">\n                <div class=\"listing-item-style\">\n                    <div class=\"overlay\">\n                        <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                    </div>\n                    <img *ngIf=\"item?.poster_path\"\n                        src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{item?.poster_path}}\"\n                        [alt]=\"item.title ? item.title : item.name\">\n                    <img *ngIf=\"!item?.poster_path\" src=\"assets/images/default-movie.png\"\n                        [alt]=\"item.title ? item.title : item.name\">\n                    <h6>{{ item?.name }}</h6>\n                    <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{item?.vote_average}}</span> /10</p>\n                    <p class=\"year\"><span>{{item?.first_air_date | date: 'yyyy'}}</span>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <mat-paginator [length]=\"totalResults\" [pageSize]=\"20\" (page)=\"changePage($event)\"></mat-paginator>\n\n</div>");

/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TvShowsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsRoutingModule", function() { return TvShowsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tv_shows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-shows.component */ "./src/app/components/tv-shows/tv-shows.component.ts");




const routes = [
    {
        path: '',
        component: _tv_shows_component__WEBPACK_IMPORTED_MODULE_3__["TvShowsComponent"]
    }
];
let TvShowsRoutingModule = class TvShowsRoutingModule {
};
TvShowsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TvShowsRoutingModule);



/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-paginator {\n  background: #212121;\n}\n\nmat-paginator {\n  color: #fff;\n}\n\n.searchdesign {\n  height: 44px;\n  background: #212121;\n  border: 1px solid #716e6e;\n  color: #fff;\n  font-size: 15px;\n}\n\n.btnDesign {\n  height: 44px;\n  border-radius: 0;\n  width: 55px;\n  background: #dc4666;\n  border: #dc4666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2NvbXBvbmVudHMvdHYtc2hvd3MvdHYtc2hvd3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHYtc2hvd3MvdHYtc2hvd3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90di1zaG93cy90di1zaG93cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYWdpbmF0b3J7XG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTtcbn1cblxubWF0LXBhZ2luYXRvcntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4uc2VhcmNoZGVzaWdue1xuICAgIGhlaWdodDogNDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTZlNmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnRuRGVzaWdue1xuICAgIGhlaWdodDogNDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGJhY2tncm91bmQ6ICNkYzQ2NjY7XG4gICAgYm9yZGVyOiAjZGM0NjY2O1xufSIsIm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2hkZXNpZ24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MTZlNmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG5EZXNpZ24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiA1NXB4O1xuICBiYWNrZ3JvdW5kOiAjZGM0NjY2O1xuICBib3JkZXI6ICNkYzQ2NjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.component.ts ***!
  \***********************************************************/
/*! exports provided: TvShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsComponent", function() { return TvShowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/tv.service */ "./src/app/service/tv.service.ts");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__);




let TvShowsComponent = class TvShowsComponent {
    constructor(tvService) {
        this.tvService = tvService;
        this.loader = true;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    ngOnInit() {
        this.TopRatedTVShows(1);
    }
    TopRatedTVShows(page) {
        this.tvService.getTopRatedTVShows(page).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000)).subscribe((res) => {
            this.topRatedTv = res.results;
            this.totalResults = res.total_results;
            this.loader = false;
        }, error => console.log(error));
    }
    changePage(event) {
        this.TopRatedTVShows(event.pageIndex + 1);
        this.loader = false;
    }
    searchMovies() {
        this.tvService.searchtv(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
        });
    }
};
TvShowsComponent.ctorParameters = () => [
    { type: src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"] }
];
TvShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv-shows',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tv-shows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-shows/tv-shows.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tv-shows.component.scss */ "./src/app/components/tv-shows/tv-shows.component.scss")).default]
    })
], TvShowsComponent);



/***/ }),

/***/ "./src/app/components/tv-shows/tv-shows.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/tv-shows/tv-shows.module.ts ***!
  \********************************************************/
/*! exports provided: TvShowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowsModule", function() { return TvShowsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tv_shows_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-shows-routing.module */ "./src/app/components/tv-shows/tv-shows-routing.module.ts");
/* harmony import */ var _tv_shows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-shows.component */ "./src/app/components/tv-shows/tv-shows.component.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/skeleton/skeleton.module */ "./src/app/shared/skeleton/skeleton.module.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let TvShowsModule = class TvShowsModule {
};
TvShowsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tv_shows_routing_module__WEBPACK_IMPORTED_MODULE_3__["TvShowsRoutingModule"],
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        declarations: [
            _tv_shows_component__WEBPACK_IMPORTED_MODULE_4__["TvShowsComponent"],
        ]
    })
], TvShowsModule);



/***/ })

}]);
//# sourceMappingURL=components-tv-shows-tv-shows-module-es2015.js.map