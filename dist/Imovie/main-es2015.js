(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"loading\" *ngIf=\"loading\">\n    <mat-progress-bar [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-progress-bar>\n</div>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n    <app-slider></app-slider>\n</ng-container>\n\n<div class=\"listing\">\n    <div class=\"listing__head\">\n        <h3 class=\"listing__title\">Trending Movies</h3>\n        <a [routerLink]=\"['/movies']\" routerLinkActive=\"router-link-active\" class=\"listing__explore\">\n            <strong>Explore All</strong>\n        </a>\n    </div>\n    \n    <app-skeleton *ngIf=\"loader\" ></app-skeleton>\n    <p-carousel [value]=\"nowPlaying\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\" *ngIf=\"!loader\"\n        [responsiveOptions]=\"responsiveOptions\">\n        <ng-template let-movie pTemplate=\"item\">\n            <div class=\"listing-item-style\" [routerLink]=\"['/movies/', movie.id]\">\n                <div class=\"overlay\">\n                    <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                </div>\n                <img *ngIf=\"movie?.poster_path\"\n                    src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{movie?.poster_path}}\">\n                <img *ngIf=\"!movie?.poster_path\" src=\"assets/images/default-movie.png\">\n                <h6>{{ movie?.title }}</h6>\n                <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{movie?.vote_average}}</span> /10</p>\n                <p class=\"year\"><span>{{movie?.release_date | date: 'yyyy'}}</span>\n                </p>\n            </div>\n        </ng-template>\n    </p-carousel>\n</div>\n\n<div class=\"listing\">\n    <div class=\"listing__head\">\n        <h3 class=\"listing__title\">Trending TV Shows</h3>\n        <a [routerLink]=\"['/tv']\" routerLinkActive=\"router-link-active\" class=\"listing__explore\">\n            <strong>Explore All</strong>\n        </a>\n    </div>\n    <app-skeleton *ngIf=\"loader\"></app-skeleton>\n    <p-carousel [value]=\"tvShows\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\" *ngIf=\"!loader\"\n        [responsiveOptions]=\"responsiveOptions\">\n        <ng-template let-tv pTemplate=\"item\">\n            <div class=\"listing-item-style\" [routerLink]=\"['/tv/', tv.id]\">\n                <div class=\"overlay\">\n                    <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                </div>\n                <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{tv?.poster_path}}\">\n                <h6>{{ tv?.original_name }}</h6>\n                <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{tv?.vote_average}}</span>/10</p>\n                <p class=\"year\"><span>{{tv?.first_air_date | date: 'yyyy'}}</span>\n            </div>\n        </ng-template>\n    </p-carousel>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/footer/footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/footer/footer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                \n                <ul class=\"list-inline\">\n                        <li class=\"list-inline-item\">\n                            <a href=\"\" target=\"_blank\" aria-label=\"Link to Twitter account\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"#585858\"><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\"></path></svg>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a href=\"\" target=\"_blank\" aria-label=\"Link to GitHub account\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"#585858\"><path d=\"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z\"></path></svg>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a href=\"\" target=\"_blank\" aria-label=\"Link to LinkedIn account\">\n                                    <svg xmlns=\"\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"#585858\"><path d=\"M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z\"></path></svg>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a href=\"\" aria-label=\"Link to Email\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"#585858\"><path d=\"M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z\"></path></svg>\n                            </a>\n                        </li>\n                    </ul>\n                    \n                <p> data provided by <a target=\"_blank\" href=\"https://www.themoviedb.org/\">TMDb</a></p>\n            </div>\n            \n        </div>\n    </div>\n</footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/header/header.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/header/header.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">IMovies</a>\n    <ul class=\"navbar-nav ml-auto listMenu\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home\n                <span class=\"sr-only\">(current)</span>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/movies']\" routerLinkActive=\"router-link-active\">Movies</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/tv']\" routerLinkActive=\"router-link-active\">TV Shows</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/genres']\" routerLinkActive=\"router-link-active\">Genres</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Login</a>\n        </li>\n    </ul>\n    <span class=\"sidebar-nav-btn\"  pButton icon=\"pi pi-plus\" label=\"Show\" (click)=\"leftSidebar = true\"><img src=\"assets/images/menu.svg\"></span>\n</nav>\n\n<p-sidebar [(visible)]=\"leftSidebar\" position=\"left\" [baseZIndex]=\"10000\">\n    <div class=\"sidebarNav\">\n        <div class=\"menu-container\">\n            <div class=\"sidebarMenu\">\n                <img src=\"assets/images/home.svg\">\n                <a class=\"sidebar-nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </div>\n            <div class=\"sidebarMenu\">\n                <img src=\"assets/images/videos.svg\">\n                <a class=\"sidebar-nav-link\" [routerLink]=\"['/movies']\" routerLinkActive=\"router-link-active\">Movies</a>\n            </div>\n            <div class=\"sidebarMenu\">\n                <img src=\"assets/images/tv.svg\">\n                <a class=\"sidebar-nav-link\" [routerLink]=\"['/tv']\" routerLinkActive=\"router-link-active\">TV Shows</a>\n            </div>\n            <div class=\"sidebarMenu genre_\">\n                <img src=\"assets/images/tripod.svg\">\n                <a class=\"sidebar-nav-link\" [routerLink]=\"['/genres']\" routerLinkActive=\"router-link-active\">Genres</a>\n            </div>\n        </div>\n    </div>\n</p-sidebar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                <div class=\"form-group\">\n                    <label for=\"email\" class='fa fa-envelope'></label>\n                    <input type=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.touched\"><br>Invalid Email Address</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"fa fa-lock\"></label>\n                    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls.password.errors && loginForm.controls.password.touched\"><br>Invalid Password</span>\n                </div>\n\n                <div class=\"text-center\">\n                    <button id=\"submitButton\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n                </div>\n                <div class=\"text-center text-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\n\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero\">\n    <ng-container *ngFor=\"let slider of movies_data; let i = index\">\n        <div class=\"slider\" *ngIf=\"current == i\" @fade>\n            <div class=\"backdrop\">\n                <div class=\"lazyloaded\">\n                    <img alt=\"{{slider?.title}}\" class=\"lazyload image\" src=\"https://image.tmdb.org/t/p/original/{{slider?.backdrop_path}}\">\n                </div>\n            </div>\n            <div class=\"pane\">\n                <div>\n                    <h1 class=\"name\" [routerLink]=\"['/movies/', slider.id]\">\n                        {{slider?.title}}\n                    </h1>\n                    <div class=\"meta\">\n                        <div class=\"info\">\n                            <span class=\"rate\"><i class=\"material-icons\">star</i><span>{{slider?.vote_average}}</span>/10</span>\n                            <span> {{slider?.vote_count | numberWithCommas }} Reviews</span>\n                            <span>{{slider?.release_date | date: 'yyyy' }}</span>\n                        </div>\n                    </div>\n                    <div class=\"desc\">\n                        {{slider?.overview }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/skeleton/skeleton.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/skeleton/skeleton.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-with-background\">\n  <ngx-skeleton-loader count=\"5\"\n    [theme]=\"{\n      'border-radius': '5px',\n      height: '20px',\n      'background-color': '#323232',\n      border: '1px solid #323232',\n      'animation-duration': '2s'\n    }\"\n  >\n  </ngx-skeleton-loader>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");





const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'movies',
        loadChildren: () => Promise.all(/*! import() | components-movies-movies-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5"), __webpack_require__.e("components-movies-movies-module")]).then(__webpack_require__.bind(null, /*! ./components/movies/movies.module */ "./src/app/components/movies/movies.module.ts")).then(mod => mod.MoviesModule)
    },
    {
        path: 'movies/:id', loadChildren: () => Promise.all(/*! import() | components-movie-details-movie-details-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~08bc50d6"), __webpack_require__.e("components-movie-details-movie-details-module")]).then(__webpack_require__.bind(null, /*! ./components/movie-details/movie-details.module */ "./src/app/components/movie-details/movie-details.module.ts")).then(mod => mod.MovieDetailsModule)
    },
    {
        path: 'tv',
        loadChildren: () => Promise.all(/*! import() | components-tv-shows-tv-shows-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("components-tv-shows-tv-shows-module")]).then(__webpack_require__.bind(null, /*! ./components/tv-shows/tv-shows.module */ "./src/app/components/tv-shows/tv-shows.module.ts")).then(mod => mod.TvShowsModule)
    },
    {
        path: 'tv/:id',
        loadChildren: () => Promise.all(/*! import() | components-tv-show-details-tv-show-details-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~08bc50d6"), __webpack_require__.e("components-tv-show-details-tv-show-details-module")]).then(__webpack_require__.bind(null, /*! ./components/tv-show-details/tv-show-details.module */ "./src/app/components/tv-show-details/tv-show-details.module.ts")).then(mod => mod.TvShowDetailsModule)
    },
    {
        path: 'genres/:id/:name',
        loadChildren: () => Promise.all(/*! import() | components-genre-genre-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("components-genre-genre-module")]).then(__webpack_require__.bind(null, /*! ./components/genre/genre.module */ "./src/app/components/genre/genre.module.ts")).then(mod => mod.GenreModule)
    },
    {
        path: 'genres',
        loadChildren: () => Promise.all(/*! import() | components-genre-list-genre-list-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~08bc50d6"), __webpack_require__.e("components-genre-list-genre-list-module")]).then(__webpack_require__.bind(null, /*! ./components/genre-list/genre-list.module */ "./src/app/components/genre-list/genre-list.module.ts")).then(mod => mod.GenreListModule)
    },
    {
        path: 'person/:id',
        loadChildren: () => Promise.all(/*! import() | components-person-person-module */[__webpack_require__.e("default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~43746966"), __webpack_require__.e("default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d"), __webpack_require__.e("components-person-person-module")]).then(__webpack_require__.bind(null, /*! ./components/person/person.module */ "./src/app/components/person/person.module.ts")).then(mod => mod.PersonModule)
    },
    {
        path: 'genres-tv/:id/:name',
        loadChildren: () => __webpack_require__.e(/*! import() | components-tv-genre-tv-genre-module */ "components-tv-genre-tv-genre-module").then(__webpack_require__.bind(null, /*! ./components/tv-genre/tv-genre.module */ "./src/app/components/tv-genre/tv-genre.module.ts")).then(m => m.TvGenreModule)
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.loading .mat-spinner {\n  color: white;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAubG9hZGluZyAubWF0LXNwaW5uZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiIsIi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZGluZyAubWF0LXNwaW5uZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'IMovies';
        this.loading = false;
        this.color = 'warn';
        this.mode = 'indeterminate';
        this.value = 50;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/fesm2015/primeng-sidebar.js");
/* harmony import */ var _components_includes_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/includes/header/header.component */ "./src/app/components/includes/header/header.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/includes/footer/footer.component */ "./src/app/components/includes/footer/footer.component.ts");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/skeleton/skeleton.module */ "./src/app/shared/skeleton/skeleton.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_includes_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_11__["SliderComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__["PipeModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
            _shared_skeleton_skeleton_module__WEBPACK_IMPORTED_MODULE_17__["SkeletonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
/* harmony import */ var src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tv.service */ "./src/app/service/tv.service.ts");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__);





let HomeComponent = class HomeComponent {
    constructor(movies, tv) {
        this.movies = movies;
        this.tv = tv;
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
        this.trendingMovies(1);
        this.tvShow(1);
    }
    trendingMovies(page) {
        this.movies.getNowPlaying(page).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000)).subscribe((res) => {
            this.nowPlaying = res.results;
            this.loader = false;
        });
    }
    tvShow(page) {
        this.tv.getTvOnTheAir(page).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000)).subscribe((res) => {
            this.tvShows = res.results;
            this.loader = false;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
    { type: src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/includes/footer/footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/includes/footer/footer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #212121;\n  padding: 1rem 0rem 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.footer p {\n  margin-bottom: 5px;\n  font-size: 15px;\n  line-height: 1;\n}\n.footer .list-inline li a {\n  width: 4rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .list-inline li a svg {\n  transition: all 0.3s ease-in-out;\n}\n.footer .list-inline li a svg:hover {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2NvbXBvbmVudHMvaW5jbHVkZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNsdWRlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFSjtBREdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RSO0FER1E7RUFDRSxnQ0FBQTtBQ0RWO0FER1U7RUFDRSxVQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luY2x1ZGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICAubGlzdC1pbmxpbmUge1xuICAgIGxpIHtcbiAgICAgIGEge1xuICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgcGFkZGluZzogMXJlbSAwcmVtIDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4uZm9vdGVyIHAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9vdGVyIC5saXN0LWlubGluZSBsaSBhIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyIC5saXN0LWlubGluZSBsaSBhIHN2ZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmZvb3RlciAubGlzdC1pbmxpbmUgbGkgYSBzdmc6aG92ZXIge1xuICBmaWxsOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/includes/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/includes/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/includes/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/includes/header/header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/includes/header/header.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  height: 65px;\n  background-color: #212121;\n  padding: 0 47px;\n  margin: 0 auto;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.navbar .navbar-brand {\n  color: #fff !important;\n  margin-right: 2rem;\n  font-size: 24px;\n}\n.navbar .navbar-nav .nav-item {\n  margin-right: 10px;\n}\n.navbar .navbar-nav .nav-link {\n  color: #fff !important;\n  font-size: 17px;\n  font-weight: 700;\n}\n@media (max-width: 640px) {\n  .navbar .listMenu {\n    display: none;\n  }\n}\n.navbar .search-icon {\n  background-image: url('Search.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 25px;\n  height: 25px;\n  display: inline-block;\n  vertical-align: middle;\n}\n@media (max-width: 640px) {\n  .navbar {\n    height: auto;\n    padding: 0 15px;\n  }\n}\n.sidebar-nav-btn {\n  display: none;\n}\n@media (max-width: 640px) {\n  .sidebar-nav-btn {\n    display: block;\n    width: 35px;\n    height: 35px;\n    margin-left: 10px;\n  }\n}\n.sidebarNav {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.sidebarNav .menu-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100% - 60px);\n  width: 100%;\n}\n.sidebarNav .sidebarMenu {\n  margin: 10px 0;\n  position: relative;\n}\n.sidebarNav .sidebarMenu a {\n  font-size: 2rem;\n  letter-spacing: 0.4px;\n  color: #fff !important;\n  margin-left: 40px;\n}\n.sidebarNav .sidebarMenu img {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n}\n.form {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n}\n.form input[type=text] {\n  flex: 1;\n  height: 6rem;\n  padding: 2.1rem 1.5rem;\n  font-size: 1.6rem;\n  color: #fff;\n  background: none;\n  border: 0;\n  outline: 0;\n}\n@media (min-width: 1200px) {\n  .form input[type=text] {\n    height: 8rem;\n    padding: 3.1rem 5rem;\n  }\n}\n.form button {\n  display: flex;\n  align-items: center;\n  padding: 0 1.5rem;\n  background: none;\n}\n@media (min-width: 1200px) {\n  .form button {\n    padding: 0 5rem;\n  }\n}\n.field {\n  display: flex;\n  background-color: #202124;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL2NvbXBvbmVudHMvaW5jbHVkZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmNsdWRlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtBQ0RGO0FES0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FET0k7RUFDRSxrQkFBQTtBQ0xOO0FEUUk7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05OO0FEVUU7RUFDRTtJQUNFLGFBQUE7RUNSSjtBQUNGO0FEV0U7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRGFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQ1ZGO0FBQ0Y7QURjQTtFQUNFLGFBQUE7QUNaRjtBRGVBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ1pGO0FBQ0Y7QURlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNiRjtBRGVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNiSjtBRGlCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ2ZKO0FEZ0JJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2ROO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2ROO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNqQkY7QURtQkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pCSjtBRG1CSTtFQVZGO0lBV0ksWUFBQTtJQUNBLG9CQUFBO0VDaEJKO0FBQ0Y7QURtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDakJKO0FEbUJJO0VBTkY7SUFPSSxlQUFBO0VDaEJKO0FBQ0Y7QURvQkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luY2x1ZGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBwYWRkaW5nOiAwIDQ3cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXG5cblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJGJhc2UtZm9udC1jb2xvciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgLm5hdi1pdGVtIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgY29sb3I6ICRiYXNlLWZvbnQtY29sb3IgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXhzbWFsbCkge1xuICAgIC5saXN0TWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvU2VhcmNoLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC14c21hbGwpIHtcbiAgLm5hdmJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICB9XG59XG5cbi5zaWRlYmFyLW5hdi1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQteHNtYWxsKSB7XG4gIC5zaWRlYmFyLW5hdi1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuXG4uc2lkZWJhck5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcblxuICAubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG5cbiAgLnNpZGViYXJNZW51IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH0gICAgXG4gIH1cbn1cblxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG5cbiAgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nOiAyLjFyZW0gMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGFyZ2UpIHtcbiAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgIHBhZGRpbmc6IDMuMXJlbSA1cmVtO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGFyZ2UpIHtcbiAgICAgIHBhZGRpbmc6IDAgNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNDtcbn0iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBwYWRkaW5nOiAwIDQ3cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXZiYXIgLmxpc3RNZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubmF2YmFyIC5zZWFyY2gtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1NlYXJjaC5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbn1cbi5zaWRlYmFyLW5hdi1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnNpZGViYXItbmF2LWJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uc2lkZWJhck5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlYmFyTmF2IC5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2lkZWJhck5hdiAuc2lkZWJhck1lbnUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZGViYXJOYXYgLnNpZGViYXJNZW51IGEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4uc2lkZWJhck5hdiAuc2lkZWJhck1lbnUgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG4uZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBwYWRkaW5nOiAyLjFyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIHBhZGRpbmc6IDMuMXJlbSA1cmVtO1xuICB9XG59XG4uZm9ybSBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZvcm0gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwIDVyZW07XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/includes/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/includes/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/includes/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/includes/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\n    border:none;\n    background-color: rgba(255,255,255,0);\n    border-bottom:solid black;\n    size:3px;\n    margin-left: 10px;\n    width: 85%;\n}\n\nlabel{\n    color: grey;\n}\n\n.form-group{\n    margin-top:100px;\n}\n\nform{\n    padding:12px;\n}\n\n#submitButton{\n    margin: 50px;\n    width: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCBibGFjaztcbiAgICBzaXplOjNweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogODUlO1xufVxuXG5sYWJlbHtcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi10b3A6MTAwcHg7XG59XG5mb3Jte1xuICAgIHBhZGRpbmc6MTJweDtcbn1cblxuI3N1Ym1pdEJ1dHRvbntcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoginComponent = class LoginComponent {
    constructor(fb) {
        this.fb = fb;
        this.successMessage = "";
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9]*@gmail.com")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9@!_]{6,}")]]
        });
    }
    login() {
        this.successMessage = "Successfully Loggined In...";
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/slider/slider.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 35rem;\n  color: #999;\n  background-color: #000;\n  position: relative;\n}\n@media (min-width: 640px) {\n  .hero {\n    height: 50rem;\n    position: relative;\n  }\n}\n@media (min-width: 1024px) {\n  .hero {\n    position: relative;\n    display: block;\n    height: 0;\n    padding-bottom: 40%;\n  }\n}\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 640px) {\n  .slider .slider {\n    position: relative !important;\n  }\n}\n.backdrop {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n@media (min-width: 1024px) {\n  .backdrop {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 71.1%;\n    height: 100%;\n  }\n}\n.backdrop::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  content: \"\";\n  background-image: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 100%);\n}\n@media (min-width: 1024px) {\n  .backdrop::after {\n    background-image: linear-gradient(to right, #000 0, transparent 50%, transparent 100%);\n  }\n}\n.backdrop > div {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n  .backdrop > div {\n    display: inline;\n  }\n}\n.play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n  background: none;\n  transform: translate(-50%, -50%);\n}\n@media (min-width: 1024px) {\n  .play {\n    display: none;\n  }\n}\n.image {\n  display: inline-block;\n  max-width: none;\n  height: 100%;\n}\n@media (max-width: 1023px) {\n  .image {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n.pane {\n  padding: 0 1.5rem 1.5rem;\n}\n@media (min-width: 768px) {\n  .pane {\n    padding: 0 4rem 4rem;\n  }\n}\n@media (min-width: 1024px) {\n  .pane {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    width: 55%;\n    height: 100%;\n  }\n}\n@media (min-width: 1200px) {\n  .pane {\n    padding-right: 5rem;\n    padding-left: 5rem;\n  }\n}\n@media (min-width: 1400px) {\n  .pane {\n    width: 45%;\n  }\n}\n.name {\n  margin: 0 0 1.4rem;\n  font-size: 2.8rem;\n  line-height: 1.1;\n  color: #fff;\n  letter-spacing: 0.4px;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .name {\n    margin-bottom: 1.8rem;\n  }\n}\n@media (min-width: 1200px) {\n  .name {\n    font-size: 2.4vw;\n  }\n}\n.name:focus {\n  outline: none;\n}\n.meta {\n  font-size: 1.4rem;\n}\n@media (min-width: 768px) {\n  .meta {\n    display: flex;\n  }\n}\n@media (min-width: 1650px) {\n  .meta {\n    font-size: 0.9vw;\n  }\n}\n.rating {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.3rem;\n}\n@media (min-width: 768px) {\n  .rating {\n    margin: 0 1.2rem 0 0;\n  }\n}\n.info {\n  display: flex;\n  align-items: center;\n}\n.info span {\n  margin-right: 0.4rem;\n}\n.info span:not(:last-child):after {\n  content: \"|\";\n  margin-right: 9px;\n  margin-left: 9px;\n}\n.desc {\n  display: block;\n  margin-top: 2.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 400;\n  color: #fff;\n  font-family: Dosis, sans-serif;\n}\n@media (max-width: 767px) {\n  .desc {\n    display: none;\n  }\n}\n@media (min-width: 1650px) {\n  .desc {\n    font-size: 0.9vw;\n  }\n}\n.trailer {\n  margin-top: 3rem;\n}\n@media (max-width: 1023px) {\n  .trailer {\n    display: none;\n  }\n}\n@media (min-width: 1650px) {\n  .trailer {\n    font-size: 0.9vw;\n  }\n}\n.rate {\n  font-size: 12px;\n}\n.rate i {\n  font-size: 16px;\n  margin-right: 5px;\n}\n.rate .material-icons {\n  color: #dcf836;\n}\n.rate span {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXNzZXRzL3Njc3MvX2hlcm8uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYWxleGFuZHJlL0RvY3VtZW50b3MvR2l0SHViL0Nsb25lX01vdmllL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFURjtJQVVJLGFBQUE7SUFDQSxrQkFBQTtFQ0FGO0FBQ0Y7QURFRTtFQWRGO0lBZUksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0VDQ0Y7QUFDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUY7QURBRTtFQUNFO0lBQ0UsNkJBQUE7RUNFSjtBQUNGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0FGO0FERUU7RUFORjtJQU9JLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9HQUFBO0FDQ0o7QURNSTtFQWZGO0lBZ0JJLHNGQUFBO0VDSEo7QUFDRjtBRFdFO0VBQ0UsV0FBQTtBQ1RKO0FEV0k7RUFIRjtJQUlJLGVBQUE7RUNSSjtBQUNGO0FEWUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ1RGO0FEV0U7RUFWRjtJQVdJLGFBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDUkY7QURVRTtFQUxGO0lBTUksV0FBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRSx3QkFBQTtBQ1BGO0FEU0U7RUFIRjtJQUlJLG9CQUFBO0VDTkY7QUFDRjtBRFFFO0VBUEY7SUFRSSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ0xGO0FBQ0Y7QURPRTtFQW5CRjtJQW9CSSxtQkFBQTtJQUNBLGtCQUFBO0VDSkY7QUFDRjtBRE1FO0VBeEJGO0lBeUJJLFVBQUE7RUNIRjtBQUNGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJFdkllO0VGd0lmLGVBQUE7QUNIRjtBREtFO0VBUkY7SUFTSSxxQkFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQVpGO0lBYUksZ0JBQUE7RUNERjtBQUNGO0FERUU7RUFDRSxhQUFBO0FDQUo7QURJQTtFQUNFLGlCQUFBO0FDREY7QURHRTtFQUhGO0lBSUksYUFBQTtFQ0FGO0FBQ0Y7QURFRTtFQVBGO0lBUUksZ0JBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFMRjtJQU1JLG9CQUFBO0VDRUY7QUFDRjtBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRUY7QURBRTtFQUNFLG9CQUFBO0FDRUo7QURBSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRU47QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCRWxNaUI7RUZtTWpCLFdFdE1nQjtFRnVNaEIsOEJFN013QjtBRDZNMUI7QURFRTtFQVRGO0lBVUksYUFBQTtFQ0NGO0FBQ0Y7QURDRTtFQWJGO0lBY0ksZ0JBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxnQkFBQTtBQ0VGO0FEQUU7RUFIRjtJQUlJLGFBQUE7RUNHRjtBQUNGO0FEREU7RUFQRjtJQVFJLGdCQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0UsZUFBQTtBQ0lGO0FERkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJSjtBRERFO0VBQ0UsY0FBQTtBQ0dKO0FEQUU7RUFDRSxXRTNPYztFRjRPZCxlQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4uaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAzNXJlbTtcbiAgY29sb3I6ICM5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQteHNtYWxsKSB7XG4gICAgaGVpZ2h0OiA1MHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWVkaXVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICB9XG59XG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXhzbWFsbCkge1xuICAgIC5zbGlkZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWVkaXVtKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzEuMSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byB0b3AsXG4gICAgICByZ2JhKDAsIDAsIDAsIDEpIDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjEpIDUwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAxMDAlXG4gICAgKTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZWRpdW0pIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICMwMDAgMCxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxuICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZWRpdW0pIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gIH1cbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1lZGl1bSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWVkaXVtIC0gMSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbi5wYW5lIHtcbiAgcGFkZGluZzogMCAxLjVyZW0gMS41cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xuICAgIHBhZGRpbmc6IDAgNHJlbSA0cmVtO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1lZGl1bSkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGFyZ2UpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC14bGFyZ2UpIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG5cbi5uYW1lIHtcbiAgbWFyZ2luOiAwIDAgMS40cmVtO1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmc7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGFyZ2UpIHtcbiAgICBmb250LXNpemU6IDIuNHZ3O1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuLm1ldGEge1xuICBmb250LXNpemU6IDEuNHJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2NTBweCkge1xuICAgIGZvbnQtc2l6ZTogMC45dnc7XG4gIH1cbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcbiAgICBtYXJnaW46IDAgMS4ycmVtIDAgMDtcbiAgfVxufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJ8XCI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogJGJhc2UtZm9udC13ZWlnaHQ7XG4gIGNvbG9yOiAkYmFzZS1mb250LWNvbG9yO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlcmlmLWRvc2lzO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCAtIDEpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2NTBweCkge1xuICAgIGZvbnQtc2l6ZTogMC45dnc7XG4gIH1cbn1cblxuLnRyYWlsZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tZWRpdW0gLSAxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjUwcHgpIHtcbiAgICBmb250LXNpemU6IDAuOXZ3O1xuICB9XG59XG5cbi5yYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgY29sb3I6ICNkY2Y4MzY7XG4gIH1cblxuICBzcGFuIHtcbiAgICBjb2xvcjogJGJhc2UtZm9udC1jb2xvcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxufVxuIiwiLmhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMzVyZW07XG4gIGNvbG9yOiAjOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogNTByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5oZXJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MCU7XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5zbGlkZXIgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3MS4xJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5iYWNrZHJvcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrIDAlLCByZ2JhKDAsIDAsIDAsIDAuMSkgNTAlLCByZ2JhKDAsIDAsIDAsIDAuMSkgMTAwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5iYWNrZHJvcDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMCAwLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICB9XG59XG4uYmFja2Ryb3AgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJhY2tkcm9wID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cblxuLnBsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5wbGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLnBhbmUge1xuICBwYWRkaW5nOiAwIDEuNXJlbSAxLjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnBhbmUge1xuICAgIHBhZGRpbmc6IDAgNHJlbSA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5wYW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5wYW5lIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAucGFuZSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuXG4ubmFtZSB7XG4gIG1hcmdpbjogMCAwIDEuNHJlbTtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDIuNHZ3O1xuICB9XG59XG4ubmFtZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZXRhIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjUwcHgpIHtcbiAgLm1ldGEge1xuICAgIGZvbnQtc2l6ZTogMC45dnc7XG4gIH1cbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucmF0aW5nIHtcbiAgICBtYXJnaW46IDAgMS4ycmVtIDAgMDtcbiAgfVxufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5mbyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XG59XG4uaW5mbyBzcGFuOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcInxcIjtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IERvc2lzLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kZXNjIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTY1MHB4KSB7XG4gIC5kZXNjIHtcbiAgICBmb250LXNpemU6IDAuOXZ3O1xuICB9XG59XG5cbi50cmFpbGVyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLnRyYWlsZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjUwcHgpIHtcbiAgLnRyYWlsZXIge1xuICAgIGZvbnQtc2l6ZTogMC45dnc7XG4gIH1cbn1cblxuLnJhdGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucmF0ZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yYXRlIC5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjZGNmODM2O1xufVxuLnJhdGUgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59IiwiJGZvbnQtZmFtaWx5LS1zYW5zLXNlcmlmOiAgTnVuaXRvLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlcmlmLWRvc2lzOiBEb3Npcywgc2Fucy1zZXJpZjtcblxuXG4kYmFzZS1mb250LXNpemU6IDYyLjUlO1xuJGJhc2UtbGluZS1oZWlnaHQ6IDEuNjtcbiRiYXNlLWJnOiAjMTQxNDE0O1xuJGJhc2UtZm9udC1jb2xvcjogI2ZmZjtcbiRhbmNob3ItZm9udC1jb2xvcjogI2RjNDY2NjtcbiRiYXNlLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktLXNhbnMtc2VyaWY7XG4kYmFzZS1mb250LXdlaWdodDogNDAwO1xuXG4kbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuJHRleHQtY29sb3ItZ3JleTogI2FiYjdjNDtcblxuJHByaW1hcnktY29sb3I6ICMyMTk2ZjM7XG4vLyAkc2Vjb25kYXJ5LWNvbG9yOiAjMjAyMTI0O1xuJHNlY29uZGFyeS1jb2xvcjogI2RjNDY2NjtcbiR0ZXh0LWNvbG9yOiAjZmFmYWZhO1xuXG4kYnJlYWtwb2ludC14c21hbGw6IDY0MHB4O1xuJGJyZWFrcG9pbnQtc21hbGw6IDc2OHB4O1xuJGJyZWFrcG9pbnQtbWVkaXVtOiAxMDI0cHg7XG4kYnJlYWtwb2ludC1sYXJnZTogMTIwMHB4O1xuJGJyZWFrcG9pbnQteGxhcmdlOiAxNDAwcHg7XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/delay */ "./node_modules/rxjs/internal/operators/delay.js");
/* harmony import */ var rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__);





let SliderComponent = class SliderComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.current = 0;
    }
    ngOnInit() {
        this.getnowPlayingMovies(1);
        this.sliderTimer();
    }
    getnowPlayingMovies(page) {
        this.movieService.getNowPlaying(page).pipe(Object(rxjs_internal_operators_delay__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000)).subscribe((res) => {
            this.movies_data = res.results;
        });
    }
    sliderTimer() {
        setInterval(() => {
            this.current = ++this.current % this.movies_data.length;
        }, 5000);
    }
};
SliderComponent.ctorParameters = () => [
    { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
];
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider/slider.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))]),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/components/slider/slider.component.scss")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/pipe/character-with-commas.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipe/character-with-commas.pipe.ts ***!
  \****************************************************/
/*! exports provided: CharacterWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterWithCommasPipe", function() { return CharacterWithCommasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterWithCommasPipe = class CharacterWithCommasPipe {
    transform(array) {
        if (array) {
            return array.map(item => item.name).join(', ');
        }
    }
};
CharacterWithCommasPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'characterWithCommas'
    })
], CharacterWithCommasPipe);



/***/ }),

/***/ "./src/app/pipe/date.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/date.pipe.ts ***!
  \***********************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatePipe = class DatePipe {
    transform(value) {
        if (value) {
            const dateArray = value.split('-');
            const date = dateArray[2].substr(0, 1) === '0' ? dateArray[2].substr(1, 1) : dateArray[2];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return `${date} ${months[dateArray[1] - 1]} ${dateArray[0]}`;
        }
    }
};
DatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fullDate'
    })
], DatePipe);



/***/ }),

/***/ "./src/app/pipe/elipsis.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/elipsis.pipe.ts ***!
  \**************************************/
/*! exports provided: ElipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElipsisPipe", function() { return ElipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElipsisPipe = class ElipsisPipe {
    transform(text, length, clamp) {
        text = text || '';
        clamp = clamp || '...';
        length = length || 30;
        if (text.length <= length)
            return text;
        let tcText = text.slice(0, length - clamp.length);
        let last = tcText.length - 1;
        while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0])
            last -= 1;
        // Fix for case when text dont have any `space`
        last = last || length - clamp.length;
        tcText = tcText.slice(0, last);
        return tcText + clamp;
    }
};
ElipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'elipsis'
    })
], ElipsisPipe);



/***/ }),

/***/ "./src/app/pipe/full-language.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipe/full-language.pipe.ts ***!
  \********************************************/
/*! exports provided: FullLanguagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLanguagePipe", function() { return FullLanguagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/language */ "./src/app/service/language.ts");



let FullLanguagePipe = class FullLanguagePipe {
    transform(iso) {
        const fullLang = _service_language__WEBPACK_IMPORTED_MODULE_2__["languages"].find(lang => lang.iso_639_1 === iso);
        if (fullLang) {
            return fullLang.english_name;
        }
        return iso;
    }
};
FullLanguagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fullLanguage'
    })
], FullLanguagePipe);



/***/ }),

/***/ "./src/app/pipe/number-with-commas.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipe/number-with-commas.pipe.ts ***!
  \*************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberWithCommasPipe = class NumberWithCommasPipe {
    transform(number) {
        if (number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
};
NumberWithCommasPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberWithCommas'
    })
], NumberWithCommasPipe);



/***/ }),

/***/ "./src/app/pipe/number-with-double-digits.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipe/number-with-double-digits.pipe.ts ***!
  \********************************************************/
/*! exports provided: NumberWithDoubleDigitsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithDoubleDigitsPipe", function() { return NumberWithDoubleDigitsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberWithDoubleDigitsPipe = class NumberWithDoubleDigitsPipe {
    transform(number) {
        if (number < 10) {
            return `0${number}`;
        }
        return number;
    }
};
NumberWithDoubleDigitsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberWithDoubleDigits'
    })
], NumberWithDoubleDigitsPipe);



/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _elipsis_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elipsis.pipe */ "./src/app/pipe/elipsis.pipe.ts");
/* harmony import */ var _time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time.pipe */ "./src/app/pipe/time.pipe.ts");
/* harmony import */ var _date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.pipe */ "./src/app/pipe/date.pipe.ts");
/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number-with-commas.pipe */ "./src/app/pipe/number-with-commas.pipe.ts");
/* harmony import */ var _character_with_commas_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character-with-commas.pipe */ "./src/app/pipe/character-with-commas.pipe.ts");
/* harmony import */ var _number_with_double_digits_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number-with-double-digits.pipe */ "./src/app/pipe/number-with-double-digits.pipe.ts");
/* harmony import */ var _full_language_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./full-language.pipe */ "./src/app/pipe/full-language.pipe.ts");










let PipeModule = class PipeModule {
};
PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _elipsis_pipe__WEBPACK_IMPORTED_MODULE_3__["ElipsisPipe"],
            _time_pipe__WEBPACK_IMPORTED_MODULE_4__["TimePipe"],
            _date_pipe__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberWithCommasPipe"],
            _character_with_commas_pipe__WEBPACK_IMPORTED_MODULE_7__["CharacterWithCommasPipe"],
            _number_with_double_digits_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithDoubleDigitsPipe"],
            _full_language_pipe__WEBPACK_IMPORTED_MODULE_9__["FullLanguagePipe"]
        ],
        exports: [
            _elipsis_pipe__WEBPACK_IMPORTED_MODULE_3__["ElipsisPipe"],
            _time_pipe__WEBPACK_IMPORTED_MODULE_4__["TimePipe"],
            _date_pipe__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberWithCommasPipe"],
            _character_with_commas_pipe__WEBPACK_IMPORTED_MODULE_7__["CharacterWithCommasPipe"],
            _number_with_double_digits_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithDoubleDigitsPipe"],
            _full_language_pipe__WEBPACK_IMPORTED_MODULE_9__["FullLanguagePipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipeModule);



/***/ }),

/***/ "./src/app/pipe/time.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/time.pipe.ts ***!
  \***********************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimePipe = class TimePipe {
    transform(minutes) {
        // seconds
        const seconds = minutes * 60;
        let secondsLeft = seconds;
        // hours
        const hours = Math.floor(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;
        // mins
        const mins = Math.floor(secondsLeft / 60);
        secondsLeft = secondsLeft % 60;
        return `${hours ? hours + 'h' : ''} ${mins}min`;
    }
};
TimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'time'
    })
], TimePipe);



/***/ }),

/***/ "./src/app/service/language.ts":
/*!*************************************!*\
  !*** ./src/app/service/language.ts ***!
  \*************************************/
/*! exports provided: languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const languages = [
    { 'iso_639_1': 'xx', 'english_name': 'No Language' },
    { 'iso_639_1': 'aa', 'english_name': 'Afar' },
    { 'iso_639_1': 'af', 'english_name': 'Afrikaans' },
    { 'iso_639_1': 'ak', 'english_name': 'Akan' },
    { 'iso_639_1': 'an', 'english_name': 'Aragonese' },
    { 'iso_639_1': 'as', 'english_name': 'Assamese' },
    { 'iso_639_1': 'av', 'english_name': 'Avaric' },
    { 'iso_639_1': 'ae', 'english_name': 'Avestan' },
    { 'iso_639_1': 'ay', 'english_name': 'Aymara' },
    { 'iso_639_1': 'az', 'english_name': 'Azerbaijani' },
    { 'iso_639_1': 'ba', 'english_name': 'Bashkir' },
    { 'iso_639_1': 'bm', 'english_name': 'Bambara' },
    { 'iso_639_1': 'bi', 'english_name': 'Bislama' },
    { 'iso_639_1': 'bo', 'english_name': 'Tibetan' },
    { 'iso_639_1': 'br', 'english_name': 'Breton' },
    { 'iso_639_1': 'ca', 'english_name': 'Catalan' },
    { 'iso_639_1': 'cs', 'english_name': 'Czech' },
    { 'iso_639_1': 'ce', 'english_name': 'Chechen' },
    { 'iso_639_1': 'cu', 'english_name': 'Slavic' },
    { 'iso_639_1': 'cv', 'english_name': 'Chuvash' },
    { 'iso_639_1': 'kw', 'english_name': 'Cornish' },
    { 'iso_639_1': 'co', 'english_name': 'Corsican' },
    { 'iso_639_1': 'cr', 'english_name': 'Cree' },
    { 'iso_639_1': 'cy', 'english_name': 'Welsh' },
    { 'iso_639_1': 'da', 'english_name': 'Danish' },
    { 'iso_639_1': 'de', 'english_name': 'German' },
    { 'iso_639_1': 'dv', 'english_name': 'Divehi' },
    { 'iso_639_1': 'dz', 'english_name': 'Dzongkha' },
    { 'iso_639_1': 'eo', 'english_name': 'Esperanto' },
    { 'iso_639_1': 'et', 'english_name': 'Estonian' },
    { 'iso_639_1': 'eu', 'english_name': 'Basque' },
    { 'iso_639_1': 'fo', 'english_name': 'Faroese' },
    { 'iso_639_1': 'fj', 'english_name': 'Fijian' },
    { 'iso_639_1': 'fi', 'english_name': 'Finnish' },
    { 'iso_639_1': 'fr', 'english_name': 'French' },
    { 'iso_639_1': 'fy', 'english_name': 'Frisian' },
    { 'iso_639_1': 'ff', 'english_name': 'Fulah' },
    { 'iso_639_1': 'gd', 'english_name': 'Gaelic' },
    { 'iso_639_1': 'ga', 'english_name': 'Irish' },
    { 'iso_639_1': 'gl', 'english_name': 'Galician' },
    { 'iso_639_1': 'gv', 'english_name': 'Manx' },
    { 'iso_639_1': 'gn', 'english_name': 'Guarani' },
    { 'iso_639_1': 'gu', 'english_name': 'Gujarati' },
    { 'iso_639_1': 'ht', 'english_name': 'Haitian; Haitian Creole' },
    { 'iso_639_1': 'ha', 'english_name': 'Hausa' },
    { 'iso_639_1': 'sh', 'english_name': 'Serbo-Croatian' },
    { 'iso_639_1': 'hz', 'english_name': 'Herero' },
    { 'iso_639_1': 'ho', 'english_name': 'Hiri Motu' },
    { 'iso_639_1': 'hr', 'english_name': 'Croatian' },
    { 'iso_639_1': 'hu', 'english_name': 'Hungarian' },
    { 'iso_639_1': 'ig', 'english_name': 'Igbo' },
    { 'iso_639_1': 'io', 'english_name': 'Ido' },
    { 'iso_639_1': 'ii', 'english_name': 'Yi' },
    { 'iso_639_1': 'iu', 'english_name': 'Inuktitut' },
    { 'iso_639_1': 'ie', 'english_name': 'Interlingue' },
    { 'iso_639_1': 'ia', 'english_name': 'Interlingua' },
    { 'iso_639_1': 'id', 'english_name': 'Indonesian' },
    { 'iso_639_1': 'ik', 'english_name': 'Inupiaq' },
    { 'iso_639_1': 'is', 'english_name': 'Icelandic' },
    { 'iso_639_1': 'it', 'english_name': 'Italian' },
    { 'iso_639_1': 'jv', 'english_name': 'Javanese' },
    { 'iso_639_1': 'ja', 'english_name': 'Japanese' },
    { 'iso_639_1': 'kl', 'english_name': 'Kalaallisut' },
    { 'iso_639_1': 'kn', 'english_name': 'Kannada' },
    { 'iso_639_1': 'ks', 'english_name': 'Kashmiri' },
    { 'iso_639_1': 'kr', 'english_name': 'Kanuri' },
    { 'iso_639_1': 'kk', 'english_name': 'Kazakh' },
    { 'iso_639_1': 'km', 'english_name': 'Khmer' },
    { 'iso_639_1': 'ki', 'english_name': 'Kikuyu' },
    { 'iso_639_1': 'rw', 'english_name': 'Kinyarwanda' },
    { 'iso_639_1': 'ky', 'english_name': 'Kirghiz' },
    { 'iso_639_1': 'kv', 'english_name': 'Komi' },
    { 'iso_639_1': 'kg', 'english_name': 'Kongo' },
    { 'iso_639_1': 'ko', 'english_name': 'Korean' },
    { 'iso_639_1': 'kj', 'english_name': 'Kuanyama' },
    { 'iso_639_1': 'ku', 'english_name': 'Kurdish' },
    { 'iso_639_1': 'lo', 'english_name': 'Lao' },
    { 'iso_639_1': 'la', 'english_name': 'Latin' },
    { 'iso_639_1': 'lv', 'english_name': 'Latvian' },
    { 'iso_639_1': 'li', 'english_name': 'Limburgish' },
    { 'iso_639_1': 'ln', 'english_name': 'Lingala' },
    { 'iso_639_1': 'lt', 'english_name': 'Lithuanian' },
    { 'iso_639_1': 'lb', 'english_name': 'Letzeburgesch' },
    { 'iso_639_1': 'lu', 'english_name': 'Luba-Katanga' },
    { 'iso_639_1': 'lg', 'english_name': 'Ganda' },
    { 'iso_639_1': 'mh', 'english_name': 'Marshall' },
    { 'iso_639_1': 'ml', 'english_name': 'Malayalam' },
    { 'iso_639_1': 'mr', 'english_name': 'Marathi' },
    { 'iso_639_1': 'mg', 'english_name': 'Malagasy' },
    { 'iso_639_1': 'mt', 'english_name': 'Maltese' },
    { 'iso_639_1': 'mo', 'english_name': 'Moldavian' },
    { 'iso_639_1': 'mn', 'english_name': 'Mongolian' },
    { 'iso_639_1': 'mi', 'english_name': 'Maori' },
    { 'iso_639_1': 'ms', 'english_name': 'Malay' },
    { 'iso_639_1': 'my', 'english_name': 'Burmese' },
    { 'iso_639_1': 'na', 'english_name': 'Nauru' },
    { 'iso_639_1': 'nv', 'english_name': 'Navajo' },
    { 'iso_639_1': 'nr', 'english_name': 'Ndebele' },
    { 'iso_639_1': 'nd', 'english_name': 'Ndebele' },
    { 'iso_639_1': 'ng', 'english_name': 'Ndonga' },
    { 'iso_639_1': 'ne', 'english_name': 'Nepali' },
    { 'iso_639_1': 'nl', 'english_name': 'Dutch' },
    { 'iso_639_1': 'nn', 'english_name': 'Norwegian Nynorsk' },
    { 'iso_639_1': 'nb', 'english_name': 'Norwegian Bokmål' },
    { 'iso_639_1': 'no', 'english_name': 'Norwegian' },
    { 'iso_639_1': 'ny', 'english_name': 'Chichewa; Nyanja' },
    { 'iso_639_1': 'oc', 'english_name': 'Occitan' },
    { 'iso_639_1': 'oj', 'english_name': 'Ojibwa' },
    { 'iso_639_1': 'or', 'english_name': 'Oriya' },
    { 'iso_639_1': 'om', 'english_name': 'Oromo' },
    { 'iso_639_1': 'os', 'english_name': 'Ossetian; Ossetic' },
    { 'iso_639_1': 'pi', 'english_name': 'Pali' },
    { 'iso_639_1': 'pl', 'english_name': 'Polish' },
    { 'iso_639_1': 'pt', 'english_name': 'Portuguese' },
    { 'iso_639_1': 'qu', 'english_name': 'Quechua' },
    { 'iso_639_1': 'rm', 'english_name': 'Raeto-Romance' },
    { 'iso_639_1': 'ro', 'english_name': 'Romanian' },
    { 'iso_639_1': 'rn', 'english_name': 'Rundi' },
    { 'iso_639_1': 'ru', 'english_name': 'Russian' },
    { 'iso_639_1': 'sg', 'english_name': 'Sango' },
    { 'iso_639_1': 'sa', 'english_name': 'Sanskrit' },
    { 'iso_639_1': 'si', 'english_name': 'Sinhalese' },
    { 'iso_639_1': 'sk', 'english_name': 'Slovak' },
    { 'iso_639_1': 'sl', 'english_name': 'Slovenian' },
    { 'iso_639_1': 'se', 'english_name': 'Northern Sami' },
    { 'iso_639_1': 'sm', 'english_name': 'Samoan' },
    { 'iso_639_1': 'sn', 'english_name': 'Shona' },
    { 'iso_639_1': 'sd', 'english_name': 'Sindhi' },
    { 'iso_639_1': 'so', 'english_name': 'Somali' },
    { 'iso_639_1': 'st', 'english_name': 'Sotho' },
    { 'iso_639_1': 'es', 'english_name': 'Spanish' },
    { 'iso_639_1': 'sq', 'english_name': 'Albanian' },
    { 'iso_639_1': 'sc', 'english_name': 'Sardinian' },
    { 'iso_639_1': 'sr', 'english_name': 'Serbian' },
    { 'iso_639_1': 'ss', 'english_name': 'Swati' },
    { 'iso_639_1': 'su', 'english_name': 'Sundanese' },
    { 'iso_639_1': 'sw', 'english_name': 'Swahili' },
    { 'iso_639_1': 'sv', 'english_name': 'Swedish' },
    { 'iso_639_1': 'ty', 'english_name': 'Tahitian' },
    { 'iso_639_1': 'ta', 'english_name': 'Tamil' },
    { 'iso_639_1': 'tt', 'english_name': 'Tatar' },
    { 'iso_639_1': 'te', 'english_name': 'Telugu' },
    { 'iso_639_1': 'tg', 'english_name': 'Tajik' },
    { 'iso_639_1': 'tl', 'english_name': 'Tagalog' },
    { 'iso_639_1': 'th', 'english_name': 'Thai' },
    { 'iso_639_1': 'ti', 'english_name': 'Tigrinya' },
    { 'iso_639_1': 'to', 'english_name': 'Tonga' },
    { 'iso_639_1': 'tn', 'english_name': 'Tswana' },
    { 'iso_639_1': 'ts', 'english_name': 'Tsonga' },
    { 'iso_639_1': 'tk', 'english_name': 'Turkmen' },
    { 'iso_639_1': 'tr', 'english_name': 'Turkish' },
    { 'iso_639_1': 'tw', 'english_name': 'Twi' },
    { 'iso_639_1': 'ug', 'english_name': 'Uighur' },
    { 'iso_639_1': 'uk', 'english_name': 'Ukrainian' },
    { 'iso_639_1': 'ur', 'english_name': 'Urdu' },
    { 'iso_639_1': 'uz', 'english_name': 'Uzbek' },
    { 'iso_639_1': 've', 'english_name': 'Venda' },
    { 'iso_639_1': 'vi', 'english_name': 'Vietnamese' },
    { 'iso_639_1': 'vo', 'english_name': 'Volapük' },
    { 'iso_639_1': 'wa', 'english_name': 'Walloon' },
    { 'iso_639_1': 'wo', 'english_name': 'Wolof' },
    { 'iso_639_1': 'xh', 'english_name': 'Xhosa' },
    { 'iso_639_1': 'yi', 'english_name': 'Yiddish' },
    { 'iso_639_1': 'za', 'english_name': 'Zhuang' },
    { 'iso_639_1': 'zu', 'english_name': 'Zulu' },
    { 'iso_639_1': 'ab', 'english_name': 'Abkhazian' },
    { 'iso_639_1': 'zh', 'english_name': 'Mandarin' },
    { 'iso_639_1': 'ps', 'english_name': 'Pushto' },
    { 'iso_639_1': 'am', 'english_name': 'Amharic' },
    { 'iso_639_1': 'ar', 'english_name': 'Arabic' },
    { 'iso_639_1': 'bg', 'english_name': 'Bulgarian' },
    { 'iso_639_1': 'cn', 'english_name': 'Cantonese' },
    { 'iso_639_1': 'mk', 'english_name': 'Macedonian' },
    { 'iso_639_1': 'el', 'english_name': 'Greek' },
    { 'iso_639_1': 'fa', 'english_name': 'Persian' },
    { 'iso_639_1': 'he', 'english_name': 'Hebrew' },
    { 'iso_639_1': 'hi', 'english_name': 'Hindi' },
    { 'iso_639_1': 'hy', 'english_name': 'Armenian' },
    { 'iso_639_1': 'en', 'english_name': 'English' },
    { 'iso_639_1': 'ee', 'english_name': 'Ewe' },
    { 'iso_639_1': 'ka', 'english_name': 'Georgian' },
    { 'iso_639_1': 'pa', 'english_name': 'Punjabi' },
    { 'iso_639_1': 'bn', 'english_name': 'Bengali' },
    { 'iso_639_1': 'bs', 'english_name': 'Bosnian' },
    { 'iso_639_1': 'ch', 'english_name': 'Chamorro' },
    { 'iso_639_1': 'be', 'english_name': 'Belarusian' },
    { 'iso_639_1': 'yo', 'english_name': 'Yoruba' },
];


/***/ }),

/***/ "./src/app/service/movies.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/movies.service.ts ***!
  \*******************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/';
        this.apiKey = 'dd4d819639705d332d531217b4f7c6b6';
        this.language = 'en-US';
        this.region = 'US';
    }
    getNowPlaying(page) {
        // tslint:disable-next-line: max-line-length
        return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
    searchMovies(searchStr) {
        return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
    }
    getPopular(page) {
        // tslint:disable-next-line: max-line-length
        return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
    getUpComingMovies(page) {
        // tslint:disable-next-line: max-line-length
        return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
    getTopRatedMovies(page) {
        // tslint:disable-next-line: max-line-length
        return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
    getDiscoverMovies() {
        return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}`);
    }
    getGenres() {
        return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
    }
    getMoviesByGenre(id) {
        return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
    }
    getMovie(id) {
        return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
    }
    getMovieReviews(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`);
    }
    getMovieCredits(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
    }
    getBackdropsImages(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
    }
    getMovieVideos(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`);
    }
    getRecomendMovies(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`);
    }
    getPersonDetail(id) {
        return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
    }
    getPersonExternalData(id) {
        return this.http.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`);
    }
    getPersonCast(id) {
        return this.http.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`);
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MoviesService);



/***/ }),

/***/ "./src/app/service/tv.service.ts":
/*!***************************************!*\
  !*** ./src/app/service/tv.service.ts ***!
  \***************************************/
/*! exports provided: TvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvService", function() { return TvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TvService = class TvService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/';
        this.apiKey = 'dd4d819639705d332d531217b4f7c6b6';
        this.language = 'en-US';
        this.region = 'US';
    }
    getTvOnTheAir(page) {
        return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
    }
    getTVAiringToday(page) {
        return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
    }
    getPopularTVShow(page) {
        return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
    }
    getTopRatedTVShows(page) {
        return this.http.get(`${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
    }
    getTVShow(id) {
        return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`);
    }
    getTvVideos(id) {
        return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
    }
    getTvBackdropsImages(id) {
        return this.http.get(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
    }
    getMovieCredits(id) {
        return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}&language=${this.language}`);
    }
    getGenres() {
        return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
    }
    getTVShowByGenre(id) {
        return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
    }
    getRecomendTv(id) {
        return this.http.get(`${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}&language=${this.language}`);
    }
    searchtv(searchStr) {
        return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`);
    }
};
TvService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TvService);



/***/ }),

/***/ "./src/app/shared/skeleton/skeleton.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/skeleton/skeleton.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-with-background {\n  background: #121212;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhhbmRyZS9Eb2N1bWVudG9zL0dpdEh1Yi9DbG9uZV9Nb3ZpZS9zcmMvYXBwL3NoYXJlZC9za2VsZXRvbi9za2VsZXRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NrZWxldG9uL3NrZWxldG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS13aXRoLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICMxMjEyMTI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfSIsIi5pdGVtLXdpdGgtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMxMjEyMTI7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/skeleton/skeleton.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/skeleton/skeleton.component.ts ***!
  \*******************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkeletonComponent = class SkeletonComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkeletonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skeleton',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skeleton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/skeleton/skeleton.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skeleton.component.scss */ "./src/app/shared/skeleton/skeleton.component.scss")).default]
    })
], SkeletonComponent);



/***/ }),

/***/ "./src/app/shared/skeleton/skeleton.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/skeleton/skeleton.module.ts ***!
  \****************************************************/
/*! exports provided: SkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonModule", function() { return SkeletonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skeleton.component */ "./src/app/shared/skeleton/skeleton.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");





let SkeletonModule = class SkeletonModule {
};
SkeletonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"]
        ],
        declarations: [_skeleton_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonComponent"]],
        exports: [_skeleton_component__WEBPACK_IMPORTED_MODULE_3__["SkeletonComponent"]]
    })
], SkeletonModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexandre/Documentos/GitHub/Clone_Movie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map