(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-person-person-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"spacing info\">\n                <div class=\"left\">\n                    <div class=\"poster lazyloaded\">\n                        <img class=\"lazyload\"\n                            src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{ person?.profile_path }}\">\n                    </div>\n                </div>\n                <div class=\"right\">\n                    <div class=\"overview\">\n                        <h2 class=\"title\">{{person?.name}}</h2>\n                        <div *ngIf=\"person.biography\">{{person?.biography}}</div>\n                    </div>\n                    <div class=\"stats\">\n                        <ul class=\"nolist\">\n                            <li *ngIf=\"person.known_for_department\">\n                                <div class=\"label\">\n                                    Known For\n                                </div>\n                                <div class=\"value\">\n                                    {{ person?.known_for_department }}\n                                </div>\n                            </li>\n                            <li *ngIf=\"person.birthday\">\n                                <div class=\"label\">\n                                    Born\n                                </div>\n                                <div class=\"value\">\n                                    {{ person?.birthday | fullDate }}\n                                </div>\n                            </li>\n                            <li *ngIf=\"person?.deathday\">\n                                <div class=\"label\">\n                                    Death\n                                </div>\n                                <div class=\"value\">\n                                    {{ person?.deathday | fullDate }}\n                                </div>\n                            </li>\n                            <li *ngIf=\"person.place_of_birth\">\n                                <div class=\"label\">\n                                    Place of Birth\n                                </div>\n                                <div class=\"value\">\n                                    {{ person?.place_of_birth }}\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"listing-space mb-20\" *ngIf=\"!person_cast\">\n                <div class=\"listing__head\">\n                    <h2 class=\"listing__title\">Similar Movies</h2>\n                </div>\n                <p-carousel [value]=\"person_cast\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\">\n                    <ng-template let-similar_movies pTemplate=\"item\">\n                        <div class=\"listing-item-style\" [routerLink]=\"['/movies/', similar_movies.id]\">\n                            <div class=\"overlay\">\n                                <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW\n                                </div>\n                            </div>\n                            <img *ngIf=\"similar_movies?.poster_path\"\n                                src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{similar_movies?.poster_path}}\">\n                            <img *ngIf=\"!similar_movies?.poster_path\" src=\"assets/images/default-movie.png\">\n                            <h6>{{ similar_movies?.title }}</h6>\n                            <p class=\"rate\"><i\n                                    class=\"material-icons\">star</i><span>{{similar_movies?.vote_average}}</span>\n                                /10</p>\n                            <div class=\"year\"><span>{{similar_movies?.release_date | date: 'yyyy'}}</span>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/components/person/person-routing.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/person/person-routing.module.ts ***!
          \************************************************************/
        /*! exports provided: PersonRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function () { return PersonRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.component */ "./src/app/components/person/person.component.ts");
            var routes = [{ path: '', component: _person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"] }];
            var PersonRoutingModule = /** @class */ (function () {
                function PersonRoutingModule() {
                }
                return PersonRoutingModule;
            }());
            PersonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PersonRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/person/person.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/person/person.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1024px) {\n  .info {\n    display: flex;\n  }\n}\n\n.info__movies {\n  display: flex;\n  align-items: initial;\n}\n\n.left {\n  display: none;\n}\n\n@media (min-width: 1024px) {\n  .left {\n    display: block;\n    width: 25%;\n    max-width: 400px;\n    padding-right: 3rem;\n  }\n}\n\n@media (min-width: 1200px) {\n  .left {\n    padding-right: 5rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .right {\n    flex: 1;\n  }\n}\n\n.poster {\n  position: relative;\n  height: 0;\n  padding-top: 150.27%;\n  overflow: hidden;\n  background-color: #dc4666;\n}\n\n.poster img,\n.poster span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.poster span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.overview {\n  max-width: 1000px;\n  margin-bottom: 3rem;\n  font-size: 1.5rem;\n  color: #fafafa;\n}\n\n@media (min-width: 1200px) {\n  .overview {\n    font-size: 1.6rem;\n  }\n}\n\n.title {\n  margin-bottom: 1rem;\n  font-size: 1.8rem;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\n\n@media (min-width: 1200px) {\n  .title {\n    font-size: 2.4rem;\n  }\n}\n\n.stats {\n  margin-bottom: 3rem;\n  font-size: 1.5rem;\n  color: #fafafa;\n}\n\n@media (min-width: 1200px) {\n  .stats {\n    font-size: 1.6rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .stats ul {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n\n.stats li {\n  display: flex;\n  padding: 0.2rem 0;\n}\n\n@media (min-width: 1024px) {\n  .stats li {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1400px) {\n  .stats li {\n    width: 100%;\n  }\n}\n\n.stats a {\n  color: #2196f3;\n  text-decoration: underline;\n}\n\n.label {\n  flex: 1;\n  max-width: 90px;\n  margin-right: 1.5rem;\n  color: #fff;\n}\n\n@media (min-width: 640px) {\n  .label {\n    max-width: 110px;\n  }\n}\n\n.value {\n  flex: 2;\n}\n\n.external ul {\n  display: flex;\n  margin-left: -0.5rem;\n}\n\n.external a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.4rem;\n  height: 4.4rem;\n}\n\n.external a svg {\n  transition: all 0.3s ease-in-out;\n}\n\n.external a:hover svg, .external a:focus svg {\n  fill: #2196f3;\n}\n\n.comma_ {\n  margin-right: 9px;\n}\n\n.comma_:not(:last-child):after {\n  content: \",\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXNzZXRzL3Njc3MvX292ZXJ2aWV3LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBREY7SUFFSSxhQUFBO0VDREY7QUFDRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBRElFO0VBSEY7SUFJSSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNERjtBQUNGOztBREdFO0VBVkY7SUFXSSxtQkFBQTtFQ0FGO0FBQ0Y7O0FESUU7RUFERjtJQUVJLE9BQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRXZCZ0I7QUR1QmxCOztBREVFOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNFNUNXO0FEMENiOztBRElFO0VBTkY7SUFPSSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCRTdEZTtBRDREakI7O0FER0U7RUFORjtJQU9JLGlCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRWpFVztBRGlFYjs7QURFRTtFQUxGO0lBTUksaUJBQUE7RUNDRjtBQUNGOztBREVJO0VBREY7SUFFSSxhQUFBO0lBQ0EsZUFBQTtFQ0NKO0FBQ0Y7O0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFSTtFQUpGO0lBS0ksVUFBQTtFQ0NKO0FBQ0Y7O0FEQ0k7RUFSRjtJQVNJLFdBQUE7RUNFSjtBQUNGOztBRENFO0VBQ0UsY0UvRlk7RUZnR1osMEJBQUE7QUNDSjs7QURHQTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUU7RUFORjtJQU9JLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLE9BQUE7QUNDRjs7QURHRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0UsZ0NBQUE7QUNETjs7QURNTTtFQUNFLGFFdklRO0FEbUloQjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEU0U7RUFDRSxZQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc2Nzcy92YXJpYWJsZXNcIjtcblxuLmluZm8ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWVkaXVtKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5cbi5pbmZvX19tb3ZpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbn1cblxuLmxlZnQge1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZWRpdW0pIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjUlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sYXJnZSkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG4gIH1cbn1cblxuLnJpZ2h0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1lZGl1bSkge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLnBvc3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMTUwLjI3JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuICBpbWcsXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLm92ZXJ2aWV3IHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxhcmdlKSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sYXJnZSkge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG59XG5cbi5zdGF0cyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxhcmdlKSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cblxuICB1bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1lZGl1bSkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gIH1cblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZWRpdW0pIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXhsYXJnZSkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5sYWJlbCB7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogOTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC14c21hbGwpIHtcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xuICB9XG59XG5cbi52YWx1ZSB7XG4gIGZsZXg6IDI7XG59XG5cbi5leHRlcm5hbCB7XG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICB9XG5cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0LjRyZW07XG4gICAgaGVpZ2h0OiA0LjRyZW07XG5cbiAgICBzdmcge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29tbWFfIHtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICBjb250ZW50OiAnLCc7XG4gIH1cbn1cbiIsIkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmluZm9fX21vdmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xufVxuXG4ubGVmdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5sZWZ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjUlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubGVmdCB7XG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5yaWdodCB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4ucG9zdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxNTAuMjclO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM0NjY2O1xufVxuLnBvc3RlciBpbWcsXG4ucG9zdGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wb3N0ZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub3ZlcnZpZXcge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAub3ZlcnZpZXcge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG59XG5cbi5zdGF0cyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN0YXRzIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuc3RhdHMgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4uc3RhdHMgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnN0YXRzIGxpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5zdGF0cyBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zdGF0cyBhIHtcbiAgY29sb3I6ICMyMTk2ZjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGFiZWwge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAubGFiZWwge1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gIH1cbn1cblxuLnZhbHVlIHtcbiAgZmxleDogMjtcbn1cblxuLmV4dGVybmFsIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG59XG4uZXh0ZXJuYWwgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbn1cbi5leHRlcm5hbCBhIHN2ZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmV4dGVybmFsIGE6aG92ZXIgc3ZnLCAuZXh0ZXJuYWwgYTpmb2N1cyBzdmcge1xuICBmaWxsOiAjMjE5NmYzO1xufVxuXG4uY29tbWFfIHtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG59XG4uY29tbWFfOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIixcIjtcbn0iLCIkZm9udC1mYW1pbHktLXNhbnMtc2VyaWY6ICBOdW5pdG8sIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2VyaWYtZG9zaXM6IERvc2lzLCBzYW5zLXNlcmlmO1xuXG5cbiRiYXNlLWZvbnQtc2l6ZTogNjIuNSU7XG4kYmFzZS1saW5lLWhlaWdodDogMS42O1xuJGJhc2UtYmc6ICMxNDE0MTQ7XG4kYmFzZS1mb250LWNvbG9yOiAjZmZmO1xuJGFuY2hvci1mb250LWNvbG9yOiAjZGM0NjY2O1xuJGJhc2UtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS0tc2Fucy1zZXJpZjtcbiRiYXNlLWZvbnQtd2VpZ2h0OiA0MDA7XG5cbiRsZXR0ZXItc3BhY2luZzogMC40cHg7XG4kdGV4dC1jb2xvci1ncmV5OiAjYWJiN2M0O1xuXG4kcHJpbWFyeS1jb2xvcjogIzIxOTZmMztcbi8vICRzZWNvbmRhcnktY29sb3I6ICMyMDIxMjQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZGM0NjY2O1xuJHRleHQtY29sb3I6ICNmYWZhZmE7XG5cbiRicmVha3BvaW50LXhzbWFsbDogNjQwcHg7XG4kYnJlYWtwb2ludC1zbWFsbDogNzY4cHg7XG4kYnJlYWtwb2ludC1tZWRpdW06IDEwMjRweDtcbiRicmVha3BvaW50LWxhcmdlOiAxMjAwcHg7XG4kYnJlYWtwb2ludC14bGFyZ2U6IDE0MDBweDtcblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/person/person.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/person/person.component.ts ***!
          \*******************************************************/
        /*! exports provided: PersonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function () { return PersonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PersonComponent = /** @class */ (function () {
                function PersonComponent(movieServices, router) {
                    this.movieServices = movieServices;
                    this.router = router;
                    // tslint:disable-next-line: variable-name
                    this.person_cast = [];
                }
                PersonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.params.subscribe(function (params) {
                        _this.id = params['id'];
                        _this.gerPersonDetails(_this.id);
                        _this.getPersonCastMovie(_this.id);
                    });
                };
                PersonComponent.prototype.gerPersonDetails = function (id) {
                    var _this = this;
                    this.movieServices.getPersonDetail(id).subscribe(function (result) {
                        _this.person = result;
                    });
                };
                PersonComponent.prototype.getPersonCastMovie = function (id) {
                    var _this = this;
                    this.movieServices.getPersonCast(id).subscribe(function (res) {
                        _this.person_cast = res.cast;
                    });
                };
                return PersonComponent;
            }());
            PersonComponent.ctorParameters = function () { return [
                { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-person',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person.component.scss */ "./src/app/components/person/person.component.scss")).default]
                })
            ], PersonComponent);
            /***/ 
        }),
        /***/ "./src/app/components/person/person.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/components/person/person.module.ts ***!
          \****************************************************/
        /*! exports provided: PersonModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function () { return PersonModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/components/person/person-routing.module.ts");
            /* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person.component */ "./src/app/components/person/person.component.ts");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
            /* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
            var PersonModule = /** @class */ (function () {
                function PersonModule() {
                }
                return PersonModule;
            }());
            PersonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _person_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonRoutingModule"],
                        src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                        primeng_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]
                    ]
                })
            ], PersonModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-person-person-module-es2015.js.map
//# sourceMappingURL=components-person-person-module-es5.js.map
//# sourceMappingURL=components-person-person-module-es5.js.map