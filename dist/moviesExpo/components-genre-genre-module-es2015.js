(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-genre-genre-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre/genre.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre/genre.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"listing\">\n    <div class=\"listing__head\">\n        <h2 class=\"listing__title\">Movie Genre: {{ title }}</h2>\n    </div>\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <div class=\"row\" *ngIf=\"!loader\">\n        <div class=\"col-md-2 listing__items\" *ngFor=\"let movie of moviesGenre | slice:0:18\">\n            <div [routerLink]=\"['/movies/', movie.id]\">\n                <div class=\"listing-item-style\">\n                    <div class=\"overlay\">\n                        <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                    </div>\n                    <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{movie?.poster_path}}\">\n\n                    <h6>{{ movie?.title }}</h6>\n                    <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{movie?.vote_average}}</span> /10</p>\n                    <p class=\"year\"><span>{{movie?.release_date | date: 'yyyy'}}</span>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>");

/***/ }),

/***/ "./src/app/components/genre/genre-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/genre/genre-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: GenreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreRoutingModule", function() { return GenreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _genre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genre.component */ "./src/app/components/genre/genre.component.ts");




const routes = [{ path: '', component: _genre_component__WEBPACK_IMPORTED_MODULE_3__["GenreComponent"] }];
let GenreRoutingModule = class GenreRoutingModule {
};
GenreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GenreRoutingModule);



/***/ }),

/***/ "./src/app/components/genre/genre.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/genre/genre.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VucmUvZ2VucmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/genre/genre.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/genre/genre.component.ts ***!
  \*****************************************************/
/*! exports provided: GenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreComponent", function() { return GenreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__);





let GenreComponent = class GenreComponent {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.loader = true;
    }
    ngOnInit() {
        this.router.params.subscribe((params) => {
            this.id = params['id'];
            this.title = params['name'];
            this.getMoviesGenre(this.id);
        });
    }
    getMoviesGenre(id) {
        this.movieService.getMoviesByGenre(id).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000)).subscribe((res) => {
            this.moviesGenre = res.results;
            this.loader = false;
        });
    }
};
GenreComponent.ctorParameters = () => [
    { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
GenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genre',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./genre.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre/genre.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./genre.component.scss */ "./src/app/components/genre/genre.component.scss")).default]
    })
], GenreComponent);



/***/ }),

/***/ "./src/app/components/genre/genre.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/genre/genre.module.ts ***!
  \**************************************************/
/*! exports provided: GenreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreModule", function() { return GenreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _genre_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genre-routing.module */ "./src/app/components/genre/genre-routing.module.ts");
/* harmony import */ var _genre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genre.component */ "./src/app/components/genre/genre.component.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/skeleton/skeleton.module */ "./src/app/shared/skeleton/skeleton.module.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");








let GenreModule = class GenreModule {
};
GenreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_genre_component__WEBPACK_IMPORTED_MODULE_4__["GenreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _genre_routing_module__WEBPACK_IMPORTED_MODULE_3__["GenreRoutingModule"],
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"],
            src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__["SkeletonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
        ]
    })
], GenreModule);



/***/ })

}]);
//# sourceMappingURL=components-genre-genre-module-es2015.js.map