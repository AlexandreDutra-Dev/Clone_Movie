(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tv-genre-tv-genre-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-genre/tv-genre.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-genre/tv-genre.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"listing\">\n        <div class=\"listing__head\">\n            <h2 class=\"listing__title\">TV Genre: {{ title }}</h2>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2 listing__items\" *ngFor=\"let tv of _tv; let i = index;\">\n                <div [routerLink]=\"['/tv/', tv.id]\">\n                    <div class=\"movie-item-style\">\n                        <div class=\"overlay\">\n                            <div class=\"hover-inner\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                        </div>\n                        <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{tv?.poster_path}}\">\n                        <h6>{{ tv?.title }}</h6>\n                        <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{tv?.vote_average}}</span> /10</p>\n                        <p class=\"year\"><span>{{tv?.release_date | date: 'yyyy'}}</span>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./src/app/components/tv-genre/tv-genre-routing.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/tv-genre/tv-genre-routing.module.ts ***!
          \****************************************************************/
        /*! exports provided: TvGenreRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvGenreRoutingModule", function () { return TvGenreRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _tv_genre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-genre.component */ "./src/app/components/tv-genre/tv-genre.component.ts");
            var routes = [{ path: '', component: _tv_genre_component__WEBPACK_IMPORTED_MODULE_3__["TvGenreComponent"] }];
            var TvGenreRoutingModule = /** @class */ (function () {
                function TvGenreRoutingModule() {
                }
                return TvGenreRoutingModule;
            }());
            TvGenreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TvGenreRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/tv-genre/tv-genre.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/components/tv-genre/tv-genre.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHYtZ2VucmUvdHYtZ2VucmUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/tv-genre/tv-genre.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/tv-genre/tv-genre.component.ts ***!
          \***********************************************************/
        /*! exports provided: TvGenreComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvGenreComponent", function () { return TvGenreComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tv.service */ "./src/app/service/tv.service.ts");
            var TvGenreComponent = /** @class */ (function () {
                function TvGenreComponent(tvService, router) {
                    this.tvService = tvService;
                    this.router = router;
                }
                TvGenreComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.params.subscribe(function (params) {
                        _this.id = params['id'];
                        _this.title = params['name'];
                        _this.getTvByGenre(_this.id);
                    });
                };
                TvGenreComponent.prototype.getTvByGenre = function (id) {
                    var _this = this;
                    this.tvService.getTVShowByGenre(id).subscribe(function (res) {
                        _this._tv = res.results;
                    });
                };
                return TvGenreComponent;
            }());
            TvGenreComponent.ctorParameters = function () { return [
                { type: src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            TvGenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tv-genre',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tv-genre.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-genre/tv-genre.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tv-genre.component.scss */ "./src/app/components/tv-genre/tv-genre.component.scss")).default]
                })
            ], TvGenreComponent);
            /***/ 
        }),
        /***/ "./src/app/components/tv-genre/tv-genre.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/components/tv-genre/tv-genre.module.ts ***!
          \********************************************************/
        /*! exports provided: TvGenreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvGenreModule", function () { return TvGenreModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _tv_genre_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-genre-routing.module */ "./src/app/components/tv-genre/tv-genre-routing.module.ts");
            /* harmony import */ var _tv_genre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-genre.component */ "./src/app/components/tv-genre/tv-genre.component.ts");
            /* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
            var TvGenreModule = /** @class */ (function () {
                function TvGenreModule() {
                }
                return TvGenreModule;
            }());
            TvGenreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_tv_genre_component__WEBPACK_IMPORTED_MODULE_4__["TvGenreComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _tv_genre_routing_module__WEBPACK_IMPORTED_MODULE_3__["TvGenreRoutingModule"],
                        src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
                    ]
                })
            ], TvGenreModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-tv-genre-tv-genre-module-es2015.js.map
//# sourceMappingURL=components-tv-genre-tv-genre-module-es5.js.map
//# sourceMappingURL=components-tv-genre-tv-genre-module-es5.js.map