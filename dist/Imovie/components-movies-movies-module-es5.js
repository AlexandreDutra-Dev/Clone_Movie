(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-movies-movies-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"listing\">\n    <div class=\"listing__head\">\n        <h3 class=\"listing__title\" *ngIf=\"!searchRes\">Movies</h3>\n        <h3 class=\"listing__title\" *ngIf=\"searchRes\">Search Movies</h3>\n    </div>\n    <form>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control searchdesign\" placeholder=\"Search for movies...\" [(ngModel)]=\"searchStr\"\n                            name=\"searchStr\" (keyup.enter)=\"searchMovies()\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-primary btnDesign\" type=\"button\" (click)=\"searchMovies()\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>    \n    </form>\n\n    <ng-container *ngIf=\"searchRes\">\n        <app-skeleton *ngIf=\"loader\"></app-skeleton>\n        <div class=\"row\" *ngIf=\"!loader\">\n            <div class=\"col-md-2 listing__items\" *ngFor=\"let movie of searchRes | slice:0:18\">\n                <div [routerLink]=\"['/movies/', movie.id]\">\n                    <div class=\"listing-item-style\">\n                        <div class=\"overlay\">\n                            <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                        </div>\n                        <img *ngIf=\"movie?.poster_path\" src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{movie?.poster_path}}\"\n                            [alt]=\"movie.title ? movie.title : movie.name\">\n                        <img *ngIf=\"!movie?.poster_path\" src=\"assets/images/default-movie.png\"\n                            [alt]=\"movie.title ? movie.title : movie.name\">\n                        <h6>{{ movie?.title }}</h6>\n                        <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{movie?.vote_average}}</span> /10</p>\n                        <p class=\"year\"><span>{{movie?.release_date | date: 'yyyy'}}</span>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <div class=\"row\" *ngIf=\"!loader\">\n        <div class=\"col-md-2 listing__items\" *ngFor=\"let movie of topRated | slice:0:18\">\n            <div [routerLink]=\"['/movies/', movie.id]\">\n                <div class=\"listing-item-style\">\n                    <div class=\"overlay\">\n                        <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                    </div>\n                    <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{movie?.poster_path}}\"\n                        [alt]=\"movie.title ? movie.title : movie.name\">\n                    <img *ngIf=\"!movie?.poster_path\" src=\"assets/images/default-movie.png\"\n                        [alt]=\"movie.title ? movie.title : movie.name\">\n                    <h6>{{ movie?.title }}</h6>\n                    <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{movie?.vote_average}}</span> /10</p>\n                    <p class=\"year\"><span>{{movie?.release_date | date: 'yyyy'}}</span>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <mat-paginator [length]=\"totalResults\" [pageSize]=\"20\" (page)=\"changePage($event)\"></mat-paginator>\n    \n</div>");
            /***/ 
        }),
        /***/ "./src/app/components/movies/movies-routing.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/movies/movies-routing.module.ts ***!
          \************************************************************/
        /*! exports provided: MoviesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function () { return MoviesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.component */ "./src/app/components/movies/movies.component.ts");
            var routes = [
                {
                    path: '',
                    component: _movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]
                }
            ];
            var MoviesRoutingModule = /** @class */ (function () {
                function MoviesRoutingModule() {
                }
                return MoviesRoutingModule;
            }());
            MoviesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], MoviesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/movies/movies.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/movies/movies.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-paginator {\n  background: #212121;\n}\n\nmat-paginator {\n  color: #fff;\n}\n\n.searchdesign {\n  height: 44px;\n  background: #212121;\n  border: 1px solid #716e6e;\n  color: #fff;\n  font-size: 15px;\n}\n\n.btnDesign {\n  height: 44px;\n  border-radius: 0;\n  width: 55px;\n  background: #dc4666;\n  border: #dc4666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYWdpbmF0b3J7XG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTtcbn1cblxubWF0LXBhZ2luYXRvcntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaGRlc2lnbntcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzE2ZTZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0bkRlc2lnbntcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogNTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGM0NjY2O1xuICAgIGJvcmRlcjogI2RjNDY2Njtcbn0iLCJtYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoZGVzaWduIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE2ZTZlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnRuRGVzaWduIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogNTVweDtcbiAgYmFja2dyb3VuZDogI2RjNDY2NjtcbiAgYm9yZGVyOiAjZGM0NjY2O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/movies/movies.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/movies/movies.component.ts ***!
          \*******************************************************/
        /*! exports provided: MoviesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function () { return MoviesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
            /* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
            /* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__);
            var MoviesComponent = /** @class */ (function () {
                function MoviesComponent(movieService) {
                    this.movieService = movieService;
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
                MoviesComponent.prototype.ngOnInit = function () {
                    this.getTopRatedMovies(1);
                };
                MoviesComponent.prototype.getTopRatedMovies = function (page) {
                    var _this = this;
                    this.movieService.getTopRatedMovies(page).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000)).subscribe(function (res) {
                        _this.topRated = res.results;
                        _this.totalResults = res.total_results;
                        _this.loader = false;
                    }, function (error) { return console.log(error); });
                };
                MoviesComponent.prototype.changePage = function (event) {
                    this.loader = true;
                    this.getTopRatedMovies(event.pageIndex + 1);
                };
                MoviesComponent.prototype.searchMovies = function () {
                    var _this = this;
                    this.movieService.searchMovies(this.searchStr).subscribe(function (res) {
                        _this.searchRes = res.results;
                    });
                };
                return MoviesComponent;
            }());
            MoviesComponent.ctorParameters = function () { return [
                { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
            ]; };
            MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movies',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.scss */ "./src/app/components/movies/movies.component.scss")).default]
                })
            ], MoviesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/movies/movies.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/components/movies/movies.module.ts ***!
          \****************************************************/
        /*! exports provided: MoviesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function () { return MoviesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/components/movies/movies-routing.module.ts");
            /* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.component */ "./src/app/components/movies/movies.component.ts");
            /* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
            /* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
            /* harmony import */ var src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/skeleton/skeleton.module */ "./src/app/shared/skeleton/skeleton.module.ts");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            var MoviesModule = /** @class */ (function () {
                function MoviesModule() {
                }
                return MoviesModule;
            }());
            MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesRoutingModule"],
                        src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                        primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                        src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_7__["SkeletonModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"]
                    ],
                    declarations: [
                        _movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
                    ]
                })
            ], MoviesModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-movies-movies-module-es2015.js.map
//# sourceMappingURL=components-movies-movies-module-es5.js.map
//# sourceMappingURL=components-movies-movies-module-es5.js.map