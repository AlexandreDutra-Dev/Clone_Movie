(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-genre-list-genre-list-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre-list/genre-list.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre-list/genre-list.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid mt-20 mb-20\">\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\" *ngIf=\"!loader\">\n            <h2 class=\"mb-5 mt-5\">Movies Genres</h2>\n            <a *ngFor=\"let genre of genreslist\" routerLink=\"/genres/{{genre.id}}/{{genre.name}}\">\n                <button mat-raised-button color=\"primary\" class=\"genre-card blue-theme\" aria-label=\"Genres\">\n                    {{genre.name}}\n                </button>\n            </a>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid mt-20 mb-20\">\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\" *ngIf=\"!loader\">\n            <h2 class=\"mt-5 mb-5\">TV GENRES</h2>\n            <a *ngFor=\"let genre of genreslist\" routerLink=\"/genres-tv/{{genre.id}}/{{genre.name}}\">\n                <button mat-raised-button color=\"primary\" class=\"genre-card blue-theme\" aria-label=\"Genres\">\n                    {{genre.name}}\n                </button>\n            </a>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/components/genre-list/genre-list-routing.module.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/genre-list/genre-list-routing.module.ts ***!
          \********************************************************************/
        /*! exports provided: GenreListRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreListRoutingModule", function () { return GenreListRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _genre_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genre-list.component */ "./src/app/components/genre-list/genre-list.component.ts");
            var routes = [{ path: '', component: _genre_list_component__WEBPACK_IMPORTED_MODULE_3__["GenreListComponent"] }];
            var GenreListRoutingModule = /** @class */ (function () {
                function GenreListRoutingModule() {
                }
                return GenreListRoutingModule;
            }());
            GenreListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], GenreListRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/genre-list/genre-list.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/genre-list/genre-list.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".genre-card {\n  display: inline-block;\n  margin: 14px 10px;\n  padding: 12px 0px;\n  vertical-align: top;\n  color: white !important;\n  font-size: 2rem;\n}\n\n.mt_ {\n  margin: 10rem 5rem 10rem;\n}\n\n@media (min-width: 1200px) {\n  .genre-card {\n    width: 20%;\n  }\n}\n\n.blue-theme {\n  background-color: #dc4666;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2NvbXBvbmVudHMvZ2VucmUtbGlzdC9nZW5yZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dlbnJlLWxpc3QvZ2VucmUtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLHdCQUFBO0FDREY7O0FES0E7RUFDRTtJQUNFLFVBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0UseUJFTmdCO0VGT2hCLGtCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbnJlLWxpc3QvZ2VucmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbi5nZW5yZS1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE0cHggMTBweDtcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tdF97XG4gIG1hcmdpbjogMTByZW0gNXJlbSAxMHJlbTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGFyZ2UpIHtcbiAgLmdlbnJlLWNhcmQge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cblxuLmJsdWUtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4iLCIuZ2VucmUtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNHB4IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubXRfIHtcbiAgbWFyZ2luOiAxMHJlbSA1cmVtIDEwcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5nZW5yZS1jYXJkIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG4uYmx1ZS10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzQ2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn0iLCIkZm9udC1mYW1pbHktLXNhbnMtc2VyaWY6ICBOdW5pdG8sIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2VyaWYtZG9zaXM6IERvc2lzLCBzYW5zLXNlcmlmO1xuXG5cbiRiYXNlLWZvbnQtc2l6ZTogNjIuNSU7XG4kYmFzZS1saW5lLWhlaWdodDogMS42O1xuJGJhc2UtYmc6ICMxNDE0MTQ7XG4kYmFzZS1mb250LWNvbG9yOiAjZmZmO1xuJGFuY2hvci1mb250LWNvbG9yOiAjZGM0NjY2O1xuJGJhc2UtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS0tc2Fucy1zZXJpZjtcbiRiYXNlLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbiRsZXR0ZXItc3BhY2luZzogMC40cHg7XG4kdGV4dC1jb2xvci1ncmV5OiAjYWJiN2M0O1xuXG4kcHJpbWFyeS1jb2xvcjogIzIxOTZmMztcbi8vICRzZWNvbmRhcnktY29sb3I6ICMyMDIxMjQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZGM0NjY2O1xuJHRleHQtY29sb3I6ICNmYWZhZmE7XG5cbiRicmVha3BvaW50LXhzbWFsbDogNjQwcHg7XG4kYnJlYWtwb2ludC1zbWFsbDogNzY4cHg7XG4kYnJlYWtwb2ludC1tZWRpdW06IDEwMjRweDtcbiRicmVha3BvaW50LWxhcmdlOiAxMjAwcHg7XG4kYnJlYWtwb2ludC14bGFyZ2U6IDE0MDBweDtcblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/genre-list/genre-list.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/genre-list/genre-list.component.ts ***!
          \***************************************************************/
        /*! exports provided: GenreListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreListComponent", function () { return GenreListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
            /* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
            /* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__);
            var GenreListComponent = /** @class */ (function () {
                function GenreListComponent(_movie) {
                    this._movie = _movie;
                    this.loader = true;
                }
                GenreListComponent.prototype.ngOnInit = function () {
                    this.MovieGenre();
                };
                GenreListComponent.prototype.MovieGenre = function () {
                    var _this = this;
                    this._movie.getGenres().pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000)).subscribe(function (res) {
                        _this.genreslist = res.genres;
                        _this.loader = false;
                    });
                };
                return GenreListComponent;
            }());
            GenreListComponent.ctorParameters = function () { return [
                { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
            ]; };
            GenreListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-genre-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./genre-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/genre-list/genre-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./genre-list.component.scss */ "./src/app/components/genre-list/genre-list.component.scss")).default]
                })
            ], GenreListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/genre-list/genre-list.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/genre-list/genre-list.module.ts ***!
          \************************************************************/
        /*! exports provided: GenreListModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreListModule", function () { return GenreListModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _genre_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genre-list-routing.module */ "./src/app/components/genre-list/genre-list-routing.module.ts");
            /* harmony import */ var _genre_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genre-list.component */ "./src/app/components/genre-list/genre-list.component.ts");
            /* harmony import */ var src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/skeleton/skeleton.module */ "./src/app/shared/skeleton/skeleton.module.ts");
            var GenreListModule = /** @class */ (function () {
                function GenreListModule() {
                }
                return GenreListModule;
            }());
            GenreListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_genre_list_component__WEBPACK_IMPORTED_MODULE_5__["GenreListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _genre_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["GenreListRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        src_app_shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_6__["SkeletonModule"]
                    ]
                })
            ], GenreListModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-genre-list-genre-list-module-es2015.js.map
//# sourceMappingURL=components-genre-list-genre-list-module-es5.js.map
//# sourceMappingURL=components-genre-list-genre-list-module-es5.js.map