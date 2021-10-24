(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-movie-details-movie-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-movie\">\n    <div class=\"movie-details-modal\">\n        <a href=\"javascipt:void(0)\" class=\"float-right\"> \n            <mat-icon class=\"cross-icon\" (click)=\"closeDialog()\">close</mat-icon>\n        </a>\n    </div>\n    <div *ngIf=\"data.video\" class=\"video-movie-main\">\n        <iframe [src]=\"data.video.url\" width=\"100%\" height=\"478px\" frameborder=\"0\" \n        allow=\"autoplay; encrypted-media\"\n        allowfullscreen></iframe>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/movie-details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/movie-details.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero\">\n    <div class=\"backdrop\">\n        <div class=\"lazyloaded\">\n            <button class=\"play\" type=\"button\" (click)=\"openDialogMovie(this.video)\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"55\" height=\"55\" viewBox=\"0 0 55 55\">\n                    <circle cx=\"27.5\" cy=\"27.5\" r=\"26.75\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" stroke-width=\"1.5\" />\n                    <path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"\n                        d=\"M20.97 40.81L40.64 27.5 20.97 14.19v26.62z\" /></svg>\n            </button>\n            <img class=\"lazyload image\" src=\"https://image.tmdb.org/t/p/original/{{ movie?.backdrop_path }}\">\n        </div>\n    </div>\n    <div class=\"pane\">\n        <div>\n            <div class=\"name\">{{ movie?.title }}</div>\n            <div class=\"meta\">\n\n                <div class=\"info\">\n                    <span class=\"rate\">\n                        <i class=\"material-icons\">star</i><span>{{ movie?.vote_average }}</span> /10\n                    </span>\n                    <span> {{movie?.vote_count | numberWithCommas }} Reviews</span>\n                    <span>{{movie?.release_date | date: 'yyyy' }}</span>\n                    <span>{{movie?.runtime | time  }}</span>\n                </div>\n            </div>\n            <div class=\"desc\">{{ movie?.overview }}</div>\n            <button type=\"button\" class=\"button button--icon trailer\" (click)=\"openDialogMovie(this.video)\">\n                <span class=\"mr-2\"><img src=\"assets/images/play.svg\"></span>\n                <span class=\"txt\">Watch Trailer</span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-tab-group class=\"mt-5 mb-5\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n                <mat-tab label=\"Overview\">\n                    <div class=\"listing-space info__movies\">\n                        <div class=\"left\">\n                            <div class=\"poster\">\n                                <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{ movie?.poster_path }}\">\n                            </div>\n                        </div>\n                        <div class=\"right\">\n                            <div class=\"overview\">\n                                <h2 class=\"title\">Storyline</h2>\n                                <div>{{movie?.overview}}</div>\n                            </div>\n                            <div class=\"stats\">\n                                <ul class=\"nolist\">\n                                    <li>\n                                        <div class=\"label\">\n                                            Released\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ movie?.release_date | fullDate }}\n                                        </div>\n                                    </li>\n                                    <li>\n                                        <div class=\"label\">\n                                            Runtime\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ movie?.runtime | time  }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"movie?.budget\">\n                                        <div class=\"label\">\n                                            Budget\n                                        </div>\n                                        <div class=\"value\">\n                                            ${{ movie?.budget | numberWithCommas }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"movie?.revenue\">\n                                        <div class=\"label\">\n                                            Revenue\n                                        </div>\n                                        <div class=\"value\">\n                                            ${{ movie?.revenue | numberWithCommas }}\n                                        </div>\n                                    </li>\n\n                                    <li *ngIf=\"movie?.genres.length\">\n                                        <div class=\"label\">\n                                            Genre\n                                        </div>\n                                        <div class=\"comma_\" *ngFor=\"let genre of movie?.genres\">\n                                            <a routerLink=\"/genres/{{genre.id}}/{{genre.name}}\">{{ genre?.name }}</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"movie?.status\">\n                                        <div class=\"label\">\n                                            Status\n                                        </div>\n                                        <div class=\"value\">\n                                            {{movie?.status}}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"movie?.spoken_languages?.length\">\n                                        <div class=\"label\">\n                                            Language\n                                        </div>\n                                        <div class=\"comma_\" *ngFor=\"let language of movie?.spoken_languages\">\n                                            <a>{{ language?.name }}</a>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"listing-space\">\n                        <div class=\"listing__head\">\n                            <h2 class=\"listing__title\">Cast</h2>\n                        </div>\n                        <p-carousel [value]=\"casts\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n                            <ng-template let-cast pTemplate=\"item\">\n                                <div class=\"listing-item-style\" [routerLink]=\"['/person/', cast.id]\">\n                                    <div class=\"overlay\">\n                                        <div class=\"hover\">Details</div>\n                                    </div>\n                                    <img *ngIf=\"cast.profile_path\"\n                                        src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{cast?.profile_path}}\">\n                                    <img *ngIf=\"!cast?.profile_path\" src=\"assets/images/default-movie.png\">\n                                    <h6>{{ cast?.name }}</h6>\n                                </div>\n                            </ng-template>\n                        </p-carousel>\n                    </div>\n\n                </mat-tab>\n                <mat-tab label=\"Videos\">\n                    <div class=\"listing-space videos__status\">\n                        <div class=\"items\">\n                            <div class=\"item\" *ngFor=\"let list of relatedvideo\">\n                                <div (click)=\"openDialogMovie(list)\" class=\"link\">\n                                    <div class=\"image lazyloaded\">\n                                        <img class=\"lazyload\"\n                                            src=\"https://img.youtube.com/vi/{{list?.key}}/mqdefault.jpg\">\n                                        <div class=\"play__icon\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\"\n                                                viewBox=\"0 0 55 55\">\n                                                <circle cx=\"27.5\" cy=\"27.5\" r=\"26.75\" fill=\"none\" stroke=\"#fff\"\n                                                    stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" />\n                                                <path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\"\n                                                    stroke-linejoin=\"round\" stroke-width=\"1.5\"\n                                                    d=\"M20.97 40.81L40.64 27.5 20.97 14.19v26.62z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                    <div class=\"name\">\n                                        {{list?.name}}\n                                    </div>\n                                    <div class=\"type\">\n                                        {{list?.type}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Photos\">\n                    <div class=\"listing-space backdrop_\">\n                        <div class=\"head\">\n                            <h2 class=\"title\">Backdrops</h2>\n                        </div>\n                        <div class=\"items\">\n                            <div class=\"item backdrop_\" *ngFor=\"let backdrop of backdrops | slice: 1:17\">\n                                <div class=\"image\">\n                                    <img class=\"lazyload\" src=\"https://image.tmdb.org/t/p/w533_and_h300_bestv2/{{ backdrop?.file_path }}\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n\n\n            <div class=\"listing-space mt-20 mb-5\">\n                <div class=\"listing__head\">\n                    <h2 class=\"listing__title\">Recommended Movies</h2>\n                </div>\n                <p-carousel [value]=\"recomendMovies\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n                    <ng-template let-recomend pTemplate=\"item\">\n                        <div class=\"listing-item-style\" [routerLink]=\"['/movies/', recomend.id]\">\n                            <div class=\"overlay\">\n                                <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                            </div>\n                            <img *ngIf=\"recomend?.poster_path\"\n                                src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{recomend?.poster_path}}\">\n                            <img *ngIf=\"!recomend?.poster_path\" src=\"assets/images/default-movie.png\">\n                            <h6>{{ recomend?.title }}</h6>\n                            <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{recomend?.vote_average}}</span>\n                                /10</p>\n                            <div class=\"year\"><span>{{recomend?.release_date | date: 'yyyy'}}</span></div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9hcHAtbW92aWUtZGlhbG9nL2FwcC1tb3ZpZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppMovieDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMovieDialogComponent", function() { return AppMovieDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AppMovieDialogComponent = class AppMovieDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    closeDialog() {
        this.dialogRef.close('movie');
    }
    ngOnInit() {
    }
};
AppMovieDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AppMovieDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-movie-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-movie-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-movie-dialog.component.scss */ "./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AppMovieDialogComponent);



/***/ }),

/***/ "./src/app/components/movie-details/movie-details-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MovieDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsRoutingModule", function() { return MovieDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-details.component */ "./src/app/components/movie-details/movie-details.component.ts");




const routes = [
    { path: '', component: _movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"] }
];
let MovieDetailsRoutingModule = class MovieDetailsRoutingModule {
};
MovieDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MovieDetailsRoutingModule);



/***/ }),

/***/ "./src/app/components/movie-details/movie-details.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/movie-details/movie-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/movies.service */ "./src/app/service/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _movie_details_app_movie_dialog_app_movie_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-details/app-movie-dialog/app-movie-dialog.component */ "./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.ts");







let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(movieService, router, sanitizer, dialog) {
        this.movieService = movieService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.autoplay = '?rel=0;&autoplay=1&mute=0';
        this.casts = [];
        this.backdrops = [];
        this.recomendMovies = [];
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
        this.router.params.subscribe((params) => {
            this.id = params['id'];
            this.getSingleMoviesVideos(this.id);
            this.getSingleMoviesDetails(this.id);
            this.getCast(this.id);
            this.getBackropsImages(this.id);
            this.getRecomendMovie(this.id);
        });
    }
    getSingleMoviesDetails(id) {
        this.movieService.getMovie(id).subscribe((res) => {
            this.movie = res;
        });
    }
    getSingleMoviesVideos(id) {
        this.movieService.getMovieVideos(id).subscribe((res) => {
            if (res.results.length) {
                this.video = res.results[0];
                this.relatedvideo = res.results;
            }
        });
    }
    openDialogMovie(video) {
        this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay);
        this.dialog.open(_movie_details_app_movie_dialog_app_movie_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppMovieDialogComponent"], {
            height: '600px',
            width: '900px',
            data: { video: this.video }
        });
    }
    getCast(id) {
        this.movieService.getMovieCredits(id).subscribe((res) => {
            this.casts = res.cast;
        });
    }
    getBackropsImages(id) {
        this.movieService.getBackdropsImages(id).subscribe((res) => {
            this.backdrops = res.backdrops;
        });
    }
    getRecomendMovie(id) {
        this.movieService.getRecomendMovies(id).subscribe((res) => {
            this.recomendMovies = res.results;
        });
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: src_app_service_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-details/movie-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/components/movie-details/movie-details.component.scss")).default]
    })
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/components/movie-details/movie-details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.module.ts ***!
  \******************************************************************/
/*! exports provided: MovieDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsModule", function() { return MovieDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-details-routing.module */ "./src/app/components/movie-details/movie-details-routing.module.ts");
/* harmony import */ var _movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details.component */ "./src/app/components/movie-details/movie-details.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_movie_dialog_app_movie_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-movie-dialog/app-movie-dialog.component */ "./src/app/components/movie-details/app-movie-dialog/app-movie-dialog.component.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");










let MovieDetailsModule = class MovieDetailsModule {
};
MovieDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"],
            _app_movie_dialog_app_movie_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AppMovieDialogComponent"]
        ],
        entryComponents: [
            _app_movie_dialog_app_movie_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AppMovieDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsRoutingModule"],
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"]
        ],
    })
], MovieDetailsModule);



/***/ })

}]);
//# sourceMappingURL=components-movie-details-movie-details-module-es2015.js.map