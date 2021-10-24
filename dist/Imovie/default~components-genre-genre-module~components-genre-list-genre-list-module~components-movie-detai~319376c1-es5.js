var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1"], {
        /***/ "./node_modules/@angular/cdk/esm2015/layout.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/layout.js ***!
          \*****************************************************/
        /*! exports provided: LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function () { return LayoutModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () { return BreakpointObserver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function () { return Breakpoints; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () { return MediaMatcher; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var LayoutModule = /** @class */ (function () {
                function LayoutModule() {
                }
                return LayoutModule;
            }());
            LayoutModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Global registry for all dynamically-created, injected media queries.
             * @type {?}
             */
            var mediaQueriesForWebkitCompatibility = new Set();
            /**
             * Style tag that holds all of the dynamically-created media queries.
             * @type {?}
             */
            var mediaQueryStyleNode;
            /**
             * A utility for calling matchMedia queries.
             */
            var MediaMatcher = /** @class */ (function () {
                /**
                 * @param {?} _platform
                 */
                function MediaMatcher(_platform) {
                    this._platform = _platform;
                    this._matchMedia = this._platform.isBrowser && window.matchMedia ?
                        // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
                        // call it from a different scope.
                        window.matchMedia.bind(window) :
                        noopMatchMedia;
                }
                /**
                 * Evaluates the given media query and returns the native MediaQueryList from which results
                 * can be retrieved.
                 * Confirms the layout engine will trigger for the selector query provided and returns the
                 * MediaQueryList for the query provided.
                 * @param {?} query
                 * @return {?}
                 */
                MediaMatcher.prototype.matchMedia = function (query) {
                    if (this._platform.WEBKIT) {
                        createEmptyStyleRule(query);
                    }
                    return this._matchMedia(query);
                };
                return MediaMatcher;
            }());
            MediaMatcher.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            MediaMatcher.ctorParameters = function () { return [
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
            ]; };
            /** @nocollapse */ MediaMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
            /**
             * For Webkit engines that only trigger the MediaQueryListListener when
             * there is at least one CSS selector for the respective media query.
             * @param {?} query
             * @return {?}
             */
            function createEmptyStyleRule(query) {
                if (mediaQueriesForWebkitCompatibility.has(query)) {
                    return;
                }
                try {
                    if (!mediaQueryStyleNode) {
                        mediaQueryStyleNode = document.createElement('style');
                        mediaQueryStyleNode.setAttribute('type', 'text/css');
                        ( /** @type {?} */(document.head)).appendChild(mediaQueryStyleNode);
                    }
                    if (mediaQueryStyleNode.sheet) {
                        (( /** @type {?} */(mediaQueryStyleNode.sheet)))
                            .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
                        mediaQueriesForWebkitCompatibility.add(query);
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
            /**
             * No-op matchMedia replacement for non-browser platforms.
             * @param {?} query
             * @return {?}
             */
            function noopMatchMedia(query) {
                // Use `as any` here to avoid adding additional necessary properties for
                // the noop matcher.
                return ( /** @type {?} */({
                    matches: query === 'all' || query === '',
                    media: query,
                    addListener: ( /**
                     * @return {?}
                     */function () { }),
                    removeListener: ( /**
                     * @return {?}
                     */function () { })
                }));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Utility for checking the matching state of \@media queries.
             */
            var BreakpointObserver = /** @class */ (function () {
                /**
                 * @param {?} _mediaMatcher
                 * @param {?} _zone
                 */
                function BreakpointObserver(_mediaMatcher, _zone) {
                    this._mediaMatcher = _mediaMatcher;
                    this._zone = _zone;
                    /**
                     * A map of all media queries currently being listened for.
                     */
                    this._queries = new Map();
                    /**
                     * A subject for all other observables to takeUntil based on.
                     */
                    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                /**
                 * Completes the active subject, signalling to all other observables to complete.
                 * @return {?}
                 */
                BreakpointObserver.prototype.ngOnDestroy = function () {
                    this._destroySubject.next();
                    this._destroySubject.complete();
                };
                /**
                 * Whether one or more media queries match the current viewport size.
                 * @param {?} value One or more media queries to check.
                 * @return {?} Whether any of the media queries match.
                 */
                BreakpointObserver.prototype.isMatched = function (value) {
                    var _this = this;
                    /** @type {?} */
                    var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
                    return queries.some(( /**
                     * @param {?} mediaQuery
                     * @return {?}
                     */function (/**
                     * @param {?} mediaQuery
                     * @return {?}
                     */ mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; }));
                };
                /**
                 * Gets an observable of results for the given queries that will emit new results for any changes
                 * in matching of the given queries.
                 * @param {?} value One or more media queries to check.
                 * @return {?} A stream of matches for the given queries.
                 */
                BreakpointObserver.prototype.observe = function (value) {
                    var _this = this;
                    /** @type {?} */
                    var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
                    /** @type {?} */
                    var observables = queries.map(( /**
                     * @param {?} query
                     * @return {?}
                     */function (/**
                     * @param {?} query
                     * @return {?}
                     */ query) { return _this._registerQuery(query).observable; }));
                    /** @type {?} */
                    var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
                    // Emit the first state immediately, and then debounce the subsequent emissions.
                    stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
                    return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(( /**
                     * @param {?} breakpointStates
                     * @return {?}
                     */function (breakpointStates) {
                        /** @type {?} */
                        var response = {
                            matches: false,
                            breakpoints: {},
                        };
                        breakpointStates.forEach(( /**
                         * @param {?} state
                         * @return {?}
                         */function (state) {
                            response.matches = response.matches || state.matches;
                            response.breakpoints[state.query] = state.matches;
                        }));
                        return response;
                    })));
                };
                /**
                 * Registers a specific query to be listened for.
                 * @private
                 * @param {?} query
                 * @return {?}
                 */
                BreakpointObserver.prototype._registerQuery = function (query) {
                    var _this = this;
                    // Only set up a new MediaQueryList if it is not already being listened for.
                    if (this._queries.has(query)) {
                        return ( /** @type {?} */(this._queries.get(query)));
                    }
                    /** @type {?} */
                    var mql = this._mediaMatcher.matchMedia(query);
                    // Create callback for match changes and add it is as a listener.
                    /** @type {?} */
                    var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
                        // back into the zone because matchMedia is only included in Zone.js by loading the
                        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
                        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
                        // patches it.
                        /** @type {?} */
                        var handler = ( /**
                         * @param {?} e
                         * @return {?}
                         */function (e) { return _this._zone.run(( /**
                         * @return {?}
                         */function () { return observer.next(e); })); });
                        mql.addListener(handler);
                        return ( /**
                         * @return {?}
                         */function () {
                            mql.removeListener(handler);
                        });
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(( /**
                     * @param {?} nextMql
                     * @return {?}
                     */function (nextMql) { return ({ query: query, matches: nextMql.matches }); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
                    // Add the MediaQueryList to the set of queries.
                    /** @type {?} */
                    var output = { observable: queryObservable, mql: mql };
                    this._queries.set(query, output);
                    return output;
                };
                return BreakpointObserver;
            }());
            BreakpointObserver.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            BreakpointObserver.ctorParameters = function () { return [
                { type: MediaMatcher },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            /** @nocollapse */ BreakpointObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
            /**
             * Split each query string into separate query strings if two queries are provided as comma
             * separated.
             * @param {?} queries
             * @return {?}
             */
            function splitQueries(queries) {
                return queries.map(( /**
                 * @param {?} query
                 * @return {?}
                 */function (query) { return query.split(','); }))
                    .reduce(( /**
             * @param {?} a1
             * @param {?} a2
             * @return {?}
             */function (a1, a2) { return a1.concat(a2); }))
                    .map(( /**
             * @param {?} query
             * @return {?}
             */function (/**
             * @param {?} query
             * @return {?}
             */ query) { return query.trim(); }));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // PascalCase is being used as Breakpoints is used like an enum.
            // tslint:disable-next-line:variable-name
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             * @type {?}
             */
            var Breakpoints = {
                XSmall: '(max-width: 599.99px)',
                Small: '(min-width: 600px) and (max-width: 959.99px)',
                Medium: '(min-width: 960px) and (max-width: 1279.99px)',
                Large: '(min-width: 1280px) and (max-width: 1919.99px)',
                XLarge: '(min-width: 1920px)',
                Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
                    '(max-width: 959.99px) and (orientation: landscape)',
                Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
                    '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
                Web: '(min-width: 840px) and (orientation: portrait), ' +
                    '(min-width: 1280px) and (orientation: landscape)',
                HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
                TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
                WebPortrait: '(min-width: 840px) and (orientation: portrait)',
                HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
                TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
                WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=layout.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/cdk/esm2015/overlay.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/overlay.js ***!
          \******************************************************/
        /*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function () { return Overlay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () { return OverlayContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () { return CdkOverlayOrigin; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () { return CdkConnectedOverlay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () { return FullscreenOverlayContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function () { return OverlayRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () { return OverlayKeyboardDispatcher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () { return OverlayPositionBuilder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () { return GlobalPositionStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () { return ConnectedPositionStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () { return FlexibleConnectedPositionStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () { return OverlayConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () { return validateVerticalPosition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () { return validateHorizontalPosition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () { return ConnectionPositionPair; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () { return ScrollingVisibility; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () { return ConnectedOverlayPositionChange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () { return ScrollStrategyOptions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () { return RepositionScrollStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () { return CloseScrollStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () { return NoopScrollStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () { return BlockScrollStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function () { return OverlayModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () { return OVERLAY_PROVIDERS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function () { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function () { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return OVERLAY_CONTAINER_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function () { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]; });
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Strategy that will prevent the user from scrolling while the overlay is visible.
             */
            var BlockScrollStrategy = /** @class */ (function () {
                /**
                 * @param {?} _viewportRuler
                 * @param {?} document
                 */
                function BlockScrollStrategy(_viewportRuler, document) {
                    this._viewportRuler = _viewportRuler;
                    this._previousHTMLStyles = { top: '', left: '' };
                    this._isEnabled = false;
                    this._document = document;
                }
                /**
                 * Attaches this scroll strategy to an overlay.
                 * @return {?}
                 */
                BlockScrollStrategy.prototype.attach = function () { };
                /**
                 * Blocks page-level scroll while the attached overlay is open.
                 * @return {?}
                 */
                BlockScrollStrategy.prototype.enable = function () {
                    if (this._canBeEnabled()) {
                        /** @type {?} */
                        var root = ( /** @type {?} */(this._document.documentElement));
                        this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
                        // Cache the previous inline styles in case the user had set them.
                        this._previousHTMLStyles.left = root.style.left || '';
                        this._previousHTMLStyles.top = root.style.top || '';
                        // Note: we're using the `html` node, instead of the `body`, because the `body` may
                        // have the user agent margin, whereas the `html` is guaranteed not to have one.
                        root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
                        root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
                        root.classList.add('cdk-global-scrollblock');
                        this._isEnabled = true;
                    }
                };
                /**
                 * Unblocks page-level scroll while the attached overlay is open.
                 * @return {?}
                 */
                BlockScrollStrategy.prototype.disable = function () {
                    if (this._isEnabled) {
                        /** @type {?} */
                        var html = ( /** @type {?} */(this._document.documentElement));
                        /** @type {?} */
                        var body = ( /** @type {?} */(this._document.body));
                        /** @type {?} */
                        var htmlStyle = ( /** @type {?} */(html.style));
                        /** @type {?} */
                        var bodyStyle = ( /** @type {?} */(body.style));
                        /** @type {?} */
                        var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
                        /** @type {?} */
                        var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
                        this._isEnabled = false;
                        htmlStyle.left = this._previousHTMLStyles.left;
                        htmlStyle.top = this._previousHTMLStyles.top;
                        html.classList.remove('cdk-global-scrollblock');
                        // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
                        // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
                        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
                        window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
                        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
                        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                BlockScrollStrategy.prototype._canBeEnabled = function () {
                    // Since the scroll strategies can't be singletons, we have to use a global CSS class
                    // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
                    // scrolling multiple times.
                    /** @type {?} */
                    var html = ( /** @type {?} */(this._document.documentElement));
                    if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
                        return false;
                    }
                    /** @type {?} */
                    var body = this._document.body;
                    /** @type {?} */
                    var viewport = this._viewportRuler.getViewportSize();
                    return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
                };
                return BlockScrollStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
             * @return {?}
             */
            function getMatScrollStrategyAlreadyAttachedError() {
                return Error("Scroll strategy has already been attached.");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Strategy that will close the overlay as soon as the user starts scrolling.
             */
            var CloseScrollStrategy = /** @class */ (function () {
                /**
                 * @param {?} _scrollDispatcher
                 * @param {?} _ngZone
                 * @param {?} _viewportRuler
                 * @param {?=} _config
                 */
                function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
                    var _this = this;
                    this._scrollDispatcher = _scrollDispatcher;
                    this._ngZone = _ngZone;
                    this._viewportRuler = _viewportRuler;
                    this._config = _config;
                    this._scrollSubscription = null;
                    /**
                     * Detaches the overlay ref and disables the scroll strategy.
                     */
                    this._detach = ( /**
                     * @return {?}
                     */function () {
                        _this.disable();
                        if (_this._overlayRef.hasAttached()) {
                            _this._ngZone.run(( /**
                             * @return {?}
                             */function () { return _this._overlayRef.detach(); }));
                        }
                    });
                }
                /**
                 * Attaches this scroll strategy to an overlay.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                CloseScrollStrategy.prototype.attach = function (overlayRef) {
                    if (this._overlayRef) {
                        throw getMatScrollStrategyAlreadyAttachedError();
                    }
                    this._overlayRef = overlayRef;
                };
                /**
                 * Enables the closing of the attached overlay on scroll.
                 * @return {?}
                 */
                CloseScrollStrategy.prototype.enable = function () {
                    var _this = this;
                    if (this._scrollSubscription) {
                        return;
                    }
                    /** @type {?} */
                    var stream = this._scrollDispatcher.scrolled(0);
                    if (this._config && this._config.threshold && this._config.threshold > 1) {
                        this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                        this._scrollSubscription = stream.subscribe(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                            if (Math.abs(scrollPosition - _this._initialScrollPosition) > ( /** @type {?} */(( /** @type {?} */(_this._config)).threshold))) {
                                _this._detach();
                            }
                            else {
                                _this._overlayRef.updatePosition();
                            }
                        }));
                    }
                    else {
                        this._scrollSubscription = stream.subscribe(this._detach);
                    }
                };
                /**
                 * Disables the closing the attached overlay on scroll.
                 * @return {?}
                 */
                CloseScrollStrategy.prototype.disable = function () {
                    if (this._scrollSubscription) {
                        this._scrollSubscription.unsubscribe();
                        this._scrollSubscription = null;
                    }
                };
                /**
                 * @return {?}
                 */
                CloseScrollStrategy.prototype.detach = function () {
                    this.disable();
                    this._overlayRef = ( /** @type {?} */(null));
                };
                return CloseScrollStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Scroll strategy that doesn't do anything.
             */
            var NoopScrollStrategy = /** @class */ (function () {
                function NoopScrollStrategy() {
                }
                /**
                 * Does nothing, as this scroll strategy is a no-op.
                 * @return {?}
                 */
                NoopScrollStrategy.prototype.enable = function () { };
                /**
                 * Does nothing, as this scroll strategy is a no-op.
                 * @return {?}
                 */
                NoopScrollStrategy.prototype.disable = function () { };
                /**
                 * Does nothing, as this scroll strategy is a no-op.
                 * @return {?}
                 */
                NoopScrollStrategy.prototype.attach = function () { };
                return NoopScrollStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // TODO(jelbourn): move this to live with the rest of the scrolling code
            // TODO(jelbourn): someday replace this with IntersectionObservers
            /**
             * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
             * \@docs-private
             * @param {?} element Dimensions of the element (from getBoundingClientRect)
             * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
             * @return {?} Whether the element is scrolled out of view
             */
            function isElementScrolledOutsideView(element, scrollContainers) {
                return scrollContainers.some(( /**
                 * @param {?} containerBounds
                 * @return {?}
                 */function (/**
                 * @param {?} containerBounds
                 * @return {?}
                 */ containerBounds) {
                    /** @type {?} */
                    var outsideAbove = element.bottom < containerBounds.top;
                    /** @type {?} */
                    var outsideBelow = element.top > containerBounds.bottom;
                    /** @type {?} */
                    var outsideLeft = element.right < containerBounds.left;
                    /** @type {?} */
                    var outsideRight = element.left > containerBounds.right;
                    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
                }));
            }
            /**
             * Gets whether an element is clipped by any of its scrolling containers.
             * \@docs-private
             * @param {?} element Dimensions of the element (from getBoundingClientRect)
             * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
             * @return {?} Whether the element is clipped
             */
            function isElementClippedByScrolling(element, scrollContainers) {
                return scrollContainers.some(( /**
                 * @param {?} scrollContainerRect
                 * @return {?}
                 */function (/**
                 * @param {?} scrollContainerRect
                 * @return {?}
                 */ scrollContainerRect) {
                    /** @type {?} */
                    var clippedAbove = element.top < scrollContainerRect.top;
                    /** @type {?} */
                    var clippedBelow = element.bottom > scrollContainerRect.bottom;
                    /** @type {?} */
                    var clippedLeft = element.left < scrollContainerRect.left;
                    /** @type {?} */
                    var clippedRight = element.right > scrollContainerRect.right;
                    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
                }));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Strategy that will update the element position as the user is scrolling.
             */
            var RepositionScrollStrategy = /** @class */ (function () {
                /**
                 * @param {?} _scrollDispatcher
                 * @param {?} _viewportRuler
                 * @param {?} _ngZone
                 * @param {?=} _config
                 */
                function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
                    this._scrollDispatcher = _scrollDispatcher;
                    this._viewportRuler = _viewportRuler;
                    this._ngZone = _ngZone;
                    this._config = _config;
                    this._scrollSubscription = null;
                }
                /**
                 * Attaches this scroll strategy to an overlay.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                RepositionScrollStrategy.prototype.attach = function (overlayRef) {
                    if (this._overlayRef) {
                        throw getMatScrollStrategyAlreadyAttachedError();
                    }
                    this._overlayRef = overlayRef;
                };
                /**
                 * Enables repositioning of the attached overlay on scroll.
                 * @return {?}
                 */
                RepositionScrollStrategy.prototype.enable = function () {
                    var _this = this;
                    if (!this._scrollSubscription) {
                        /** @type {?} */
                        var throttle = this._config ? this._config.scrollThrottle : 0;
                        this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this._overlayRef.updatePosition();
                            // TODO(crisbeto): make `close` on by default once all components can handle it.
                            if (_this._config && _this._config.autoClose) {
                                /** @type {?} */
                                var overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                                var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                                // TODO(crisbeto): include all ancestor scroll containers here once
                                // we have a way of exposing the trigger element to the scroll strategy.
                                /** @type {?} */
                                var parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                                    _this.disable();
                                    _this._ngZone.run(( /**
                                     * @return {?}
                                     */function () { return _this._overlayRef.detach(); }));
                                }
                            }
                        }));
                    }
                };
                /**
                 * Disables repositioning of the attached overlay on scroll.
                 * @return {?}
                 */
                RepositionScrollStrategy.prototype.disable = function () {
                    if (this._scrollSubscription) {
                        this._scrollSubscription.unsubscribe();
                        this._scrollSubscription = null;
                    }
                };
                /**
                 * @return {?}
                 */
                RepositionScrollStrategy.prototype.detach = function () {
                    this.disable();
                    this._overlayRef = ( /** @type {?} */(null));
                };
                return RepositionScrollStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Options for how an overlay will handle scrolling.
             *
             * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
             * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
             */
            var ScrollStrategyOptions = /** @class */ (function () {
                /**
                 * @param {?} _scrollDispatcher
                 * @param {?} _viewportRuler
                 * @param {?} _ngZone
                 * @param {?} document
                 */
                function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
                    var _this = this;
                    this._scrollDispatcher = _scrollDispatcher;
                    this._viewportRuler = _viewportRuler;
                    this._ngZone = _ngZone;
                    /**
                     * Do nothing on scroll.
                     */
                    this.noop = ( /**
                     * @return {?}
                     */function () { return new NoopScrollStrategy(); });
                    /**
                     * Close the overlay as soon as the user scrolls.
                     * @param config Configuration to be used inside the scroll strategy.
                     */
                    this.close = ( /**
                     * @param {?=} config
                     * @return {?}
                     */function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); });
                    /**
                     * Block scrolling.
                     */
                    this.block = ( /**
                     * @return {?}
                     */function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); });
                    /**
                     * Update the overlay's position on scroll.
                     * @param config Configuration to be used inside the scroll strategy.
                     * Allows debouncing the reposition calls.
                     */
                    this.reposition = ( /**
                     * @param {?=} config
                     * @return {?}
                     */function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); });
                    this._document = document;
                }
                return ScrollStrategyOptions;
            }());
            ScrollStrategyOptions.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            ScrollStrategyOptions.ctorParameters = function () { return [
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Initial configuration used when creating an overlay.
             */
            var OverlayConfig = /** @class */ (function () {
                /**
                 * @param {?=} config
                 */
                function OverlayConfig(config) {
                    var e_1, _a;
                    /**
                     * Strategy to be used when handling scroll events while the overlay is open.
                     */
                    this.scrollStrategy = new NoopScrollStrategy();
                    /**
                     * Custom class to add to the overlay pane.
                     */
                    this.panelClass = '';
                    /**
                     * Whether the overlay has a backdrop.
                     */
                    this.hasBackdrop = false;
                    /**
                     * Custom class to add to the backdrop
                     */
                    this.backdropClass = 'cdk-overlay-dark-backdrop';
                    /**
                     * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
                     * Note that this usually doesn't include clicking on links (unless the user is using
                     * the `HashLocationStrategy`).
                     */
                    this.disposeOnNavigation = false;
                    if (config) {
                        /** @type {?} */
                        var configKeys = ( /** @type {?} */(Object.keys(config)));
                        try {
                            for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
                                var key = configKeys_1_1.value;
                                if (config[key] !== undefined) {
                                    // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                                    // as "I don't know *which* key this is, so the only valid value is the intersection
                                    // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                                    // is not smart enough to see that the right-hand-side is actually an access of the same
                                    // exact type with the same exact key, meaning that the value type must be identical.
                                    // So we use `any` to work around this.
                                    this[key] = ( /** @type {?} */(config[key]));
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                }
                return OverlayConfig;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The points of the origin element and the overlay element to connect.
             */
            var ConnectionPositionPair = /** @class */ (function () {
                /**
                 * @param {?} origin
                 * @param {?} overlay
                 * @param {?=} offsetX
                 * @param {?=} offsetY
                 * @param {?=} panelClass
                 */
                function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
                    this.offsetX = offsetX;
                    this.offsetY = offsetY;
                    this.panelClass = panelClass;
                    this.originX = origin.originX;
                    this.originY = origin.originY;
                    this.overlayX = overlay.overlayX;
                    this.overlayY = overlay.overlayY;
                }
                return ConnectionPositionPair;
            }());
            /**
             * Set of properties regarding the position of the origin and overlay relative to the viewport
             * with respect to the containing Scrollable elements.
             *
             * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
             * bounds of any one of the strategy's Scrollable's bounding client rectangle.
             *
             * The overlay and origin are outside view if there is no overlap between their bounding client
             * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
             *
             *       -----------                    -----------
             *       | outside |                    | clipped |
             *       |  view   |              --------------------------
             *       |         |              |     |         |        |
             *       ----------               |     -----------        |
             *  --------------------------    |                        |
             *  |                        |    |      Scrollable        |
             *  |                        |    |                        |
             *  |                        |     --------------------------
             *  |      Scrollable        |
             *  |                        |
             *  --------------------------
             *
             * \@docs-private
             */
            var ScrollingVisibility = /** @class */ (function () {
                function ScrollingVisibility() {
                }
                return ScrollingVisibility;
            }());
            /**
             * The change event emitted by the strategy when a fallback position is used.
             */
            var ConnectedOverlayPositionChange = /** @class */ (function () {
                /**
                 * @param {?} connectionPair
                 * @param {?} scrollableViewProperties
                 */
                function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
                    this.connectionPair = connectionPair;
                    this.scrollableViewProperties = scrollableViewProperties;
                }
                return ConnectedOverlayPositionChange;
            }());
            /** @nocollapse */
            ConnectedOverlayPositionChange.ctorParameters = function () { return [
                { type: ConnectionPositionPair },
                { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
            ]; };
            /**
             * Validates whether a vertical position property matches the expected values.
             * \@docs-private
             * @param {?} property Name of the property being validated.
             * @param {?} value Value of the property being validated.
             * @return {?}
             */
            function validateVerticalPosition(property, value) {
                if (value !== 'top' && value !== 'bottom' && value !== 'center') {
                    throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
                        "Expected \"top\", \"bottom\" or \"center\".");
                }
            }
            /**
             * Validates whether a horizontal position property matches the expected values.
             * \@docs-private
             * @param {?} property Name of the property being validated.
             * @param {?} value Value of the property being validated.
             * @return {?}
             */
            function validateHorizontalPosition(property, value) {
                if (value !== 'start' && value !== 'end' && value !== 'center') {
                    throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
                        "Expected \"start\", \"end\" or \"center\".");
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
             * if any. It maintains a list of attached overlays to determine best suited overlay based
             * on event target and order of overlay opens.
             */
            var OverlayKeyboardDispatcher = /** @class */ (function () {
                /**
                 * @param {?} document
                 */
                function OverlayKeyboardDispatcher(document) {
                    var _this = this;
                    /**
                     * Currently attached overlays in the order they were attached.
                     */
                    this._attachedOverlays = [];
                    /**
                     * Keyboard event listener that will be attached to the body.
                     */
                    this._keydownListener = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        /** @type {?} */
                        var overlays = _this._attachedOverlays;
                        for (var i = overlays.length - 1; i > -1; i--) {
                            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                            // We want to target the most recent overlay, rather than trying to match where the event came
                            // from, because some components might open an overlay, but keep focus on a trigger element
                            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                            // because we don't want overlays that don't handle keyboard events to block the ones below
                            // them that do.
                            if (overlays[i]._keydownEventSubscriptions > 0) {
                                overlays[i]._keydownEvents.next(event);
                                break;
                            }
                        }
                    });
                    this._document = document;
                }
                /**
                 * @return {?}
                 */
                OverlayKeyboardDispatcher.prototype.ngOnDestroy = function () {
                    this._detach();
                };
                /**
                 * Add a new overlay to the list of attached overlay refs.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                OverlayKeyboardDispatcher.prototype.add = function (overlayRef) {
                    // Ensure that we don't get the same overlay multiple times.
                    this.remove(overlayRef);
                    // Lazily start dispatcher once first overlay is added
                    if (!this._isAttached) {
                        this._document.body.addEventListener('keydown', this._keydownListener);
                        this._isAttached = true;
                    }
                    this._attachedOverlays.push(overlayRef);
                };
                /**
                 * Remove an overlay from the list of attached overlay refs.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                OverlayKeyboardDispatcher.prototype.remove = function (overlayRef) {
                    /** @type {?} */
                    var index = this._attachedOverlays.indexOf(overlayRef);
                    if (index > -1) {
                        this._attachedOverlays.splice(index, 1);
                    }
                    // Remove the global listener once there are no more overlays.
                    if (this._attachedOverlays.length === 0) {
                        this._detach();
                    }
                };
                /**
                 * Detaches the global keyboard event listener.
                 * @private
                 * @return {?}
                 */
                OverlayKeyboardDispatcher.prototype._detach = function () {
                    if (this._isAttached) {
                        this._document.body.removeEventListener('keydown', this._keydownListener);
                        this._isAttached = false;
                    }
                };
                return OverlayKeyboardDispatcher;
            }());
            OverlayKeyboardDispatcher.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            OverlayKeyboardDispatcher.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @param {?} dispatcher
             * @param {?} _document
             * @return {?}
             */
            function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
                return dispatcher || new OverlayKeyboardDispatcher(_document);
            }
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @type {?}
             */
            var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
                // If there is already an OverlayKeyboardDispatcher available, use that.
                // Otherwise, provide a new one.
                provide: OverlayKeyboardDispatcher,
                deps: [
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
                    ( /** @type {?} */(
                    // Coerce to `InjectionToken` so that the `deps` match the "shape"
                    // of the type expected by Angular
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
                ],
                useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Container inside which all overlays will render.
             */
            var OverlayContainer = /** @class */ (function () {
                /**
                 * @param {?} document
                 */
                function OverlayContainer(document) {
                    this._document = document;
                }
                /**
                 * @return {?}
                 */
                OverlayContainer.prototype.ngOnDestroy = function () {
                    if (this._containerElement && this._containerElement.parentNode) {
                        this._containerElement.parentNode.removeChild(this._containerElement);
                    }
                };
                /**
                 * This method returns the overlay container element. It will lazily
                 * create the element the first time  it is called to facilitate using
                 * the container in non-browser environments.
                 * @return {?} the container element
                 */
                OverlayContainer.prototype.getContainerElement = function () {
                    if (!this._containerElement) {
                        this._createContainer();
                    }
                    return this._containerElement;
                };
                /**
                 * Create the overlay container element, which is simply a div
                 * with the 'cdk-overlay-container' class on the document body.
                 * @protected
                 * @return {?}
                 */
                OverlayContainer.prototype._createContainer = function () {
                    /** @type {?} */
                    var containerClass = 'cdk-overlay-container';
                    /** @type {?} */
                    var previousContainers = this._document.getElementsByClassName(containerClass);
                    // Remove any old containers. This can happen when transitioning from the server to the client.
                    for (var i = 0; i < previousContainers.length; i++) {
                        ( /** @type {?} */(previousContainers[i].parentNode)).removeChild(previousContainers[i]);
                    }
                    /** @type {?} */
                    var container = this._document.createElement('div');
                    container.classList.add(containerClass);
                    this._document.body.appendChild(container);
                    this._containerElement = container;
                };
                return OverlayContainer;
            }());
            OverlayContainer.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            OverlayContainer.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @param {?} parentContainer
             * @param {?} _document
             * @return {?}
             */
            function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
                return parentContainer || new OverlayContainer(_document);
            }
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @type {?}
             */
            var OVERLAY_CONTAINER_PROVIDER = {
                // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
                provide: OverlayContainer,
                deps: [
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
                    ( /** @type {?} */(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
                ],
                useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Reference to an overlay that has been created with the Overlay service.
             * Used to manipulate or dispose of said overlay.
             */
            var OverlayRef = /** @class */ (function () {
                /**
                 * @param {?} _portalOutlet
                 * @param {?} _host
                 * @param {?} _pane
                 * @param {?} _config
                 * @param {?} _ngZone
                 * @param {?} _keyboardDispatcher
                 * @param {?} _document
                 * @param {?=} _location
                 */
                function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
                    var _this = this;
                    this._portalOutlet = _portalOutlet;
                    this._host = _host;
                    this._pane = _pane;
                    this._config = _config;
                    this._ngZone = _ngZone;
                    this._keyboardDispatcher = _keyboardDispatcher;
                    this._document = _document;
                    this._location = _location;
                    this._backdropElement = null;
                    this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    this._backdropClickHandler = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return _this._backdropClick.next(event); });
                    this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        /** @type {?} */
                        var subscription = _this._keydownEvents.subscribe(observer);
                        _this._keydownEventSubscriptions++;
                        return ( /**
                         * @return {?}
                         */function () {
                            subscription.unsubscribe();
                            _this._keydownEventSubscriptions--;
                        });
                    }));
                    /**
                     * Stream of keydown events dispatched to this overlay.
                     */
                    this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    /**
                     * Amount of subscriptions to the keydown events.
                     */
                    this._keydownEventSubscriptions = 0;
                    if (_config.scrollStrategy) {
                        this._scrollStrategy = _config.scrollStrategy;
                        this._scrollStrategy.attach(this);
                    }
                    this._positionStrategy = _config.positionStrategy;
                }
                Object.defineProperty(OverlayRef.prototype, "overlayElement", {
                    /**
                     * The overlay's HTML element
                     * @return {?}
                     */
                    get: function () {
                        return this._pane;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OverlayRef.prototype, "backdropElement", {
                    /**
                     * The overlay's backdrop HTML element.
                     * @return {?}
                     */
                    get: function () {
                        return this._backdropElement;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OverlayRef.prototype, "hostElement", {
                    /**
                     * Wrapper around the panel element. Can be used for advanced
                     * positioning where a wrapper with specific styling is
                     * required around the overlay pane.
                     * @return {?}
                     */
                    get: function () {
                        return this._host;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Attaches content, given via a Portal, to the overlay.
                 * If the overlay is configured to have a backdrop, it will be created.
                 *
                 * @param {?} portal Portal instance to which to attach the overlay.
                 * @return {?} The portal attachment result.
                 */
                OverlayRef.prototype.attach = function (portal) {
                    var _this = this;
                    /** @type {?} */
                    var attachResult = this._portalOutlet.attach(portal);
                    if (this._positionStrategy) {
                        this._positionStrategy.attach(this);
                    }
                    // Update the pane element with the given configuration.
                    if (!this._host.parentElement && this._previousHostParent) {
                        this._previousHostParent.appendChild(this._host);
                    }
                    this._updateStackingOrder();
                    this._updateElementSize();
                    this._updateElementDirection();
                    if (this._scrollStrategy) {
                        this._scrollStrategy.enable();
                    }
                    // Update the position once the zone is stable so that the overlay will be fully rendered
                    // before attempting to position it, as the position may depend on the size of the rendered
                    // content.
                    this._ngZone.onStable
                        .asObservable()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        // The overlay could've been detached before the zone has stabilized.
                        if (_this.hasAttached()) {
                            _this.updatePosition();
                        }
                    }));
                    // Enable pointer events for the overlay pane element.
                    this._togglePointerEvents(true);
                    if (this._config.hasBackdrop) {
                        this._attachBackdrop();
                    }
                    if (this._config.panelClass) {
                        this._toggleClasses(this._pane, this._config.panelClass, true);
                    }
                    // Only emit the `attachments` event once all other setup is done.
                    this._attachments.next();
                    // Track this overlay by the keyboard dispatcher
                    this._keyboardDispatcher.add(this);
                    // @breaking-change 8.0.0 remove the null check for `_location`
                    // once the constructor parameter is made required.
                    if (this._config.disposeOnNavigation && this._location) {
                        this._locationChanges = this._location.subscribe(( /**
                         * @return {?}
                         */function () { return _this.dispose(); }));
                    }
                    return attachResult;
                };
                /**
                 * Detaches an overlay from a portal.
                 * @return {?} The portal detachment result.
                 */
                OverlayRef.prototype.detach = function () {
                    if (!this.hasAttached()) {
                        return;
                    }
                    this.detachBackdrop();
                    // When the overlay is detached, the pane element should disable pointer events.
                    // This is necessary because otherwise the pane element will cover the page and disable
                    // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
                    this._togglePointerEvents(false);
                    if (this._positionStrategy && this._positionStrategy.detach) {
                        this._positionStrategy.detach();
                    }
                    if (this._scrollStrategy) {
                        this._scrollStrategy.disable();
                    }
                    /** @type {?} */
                    var detachmentResult = this._portalOutlet.detach();
                    // Only emit after everything is detached.
                    this._detachments.next();
                    // Remove this overlay from keyboard dispatcher tracking.
                    this._keyboardDispatcher.remove(this);
                    // Keeping the host element in DOM the can cause scroll jank, because it still gets
                    // rendered, even though it's transparent and unclickable which is why we remove it.
                    this._detachContentWhenStable();
                    // Stop listening for location changes.
                    this._locationChanges.unsubscribe();
                    return detachmentResult;
                };
                /**
                 * Cleans up the overlay from the DOM.
                 * @return {?}
                 */
                OverlayRef.prototype.dispose = function () {
                    /** @type {?} */
                    var isAttached = this.hasAttached();
                    if (this._positionStrategy) {
                        this._positionStrategy.dispose();
                    }
                    this._disposeScrollStrategy();
                    this.detachBackdrop();
                    this._locationChanges.unsubscribe();
                    this._keyboardDispatcher.remove(this);
                    this._portalOutlet.dispose();
                    this._attachments.complete();
                    this._backdropClick.complete();
                    this._keydownEvents.complete();
                    if (this._host && this._host.parentNode) {
                        this._host.parentNode.removeChild(this._host);
                        this._host = ( /** @type {?} */(null));
                    }
                    this._previousHostParent = this._pane = ( /** @type {?} */(null));
                    if (isAttached) {
                        this._detachments.next();
                    }
                    this._detachments.complete();
                };
                /**
                 * Whether the overlay has attached content.
                 * @return {?}
                 */
                OverlayRef.prototype.hasAttached = function () {
                    return this._portalOutlet.hasAttached();
                };
                /**
                 * Gets an observable that emits when the backdrop has been clicked.
                 * @return {?}
                 */
                OverlayRef.prototype.backdropClick = function () {
                    return this._backdropClick.asObservable();
                };
                /**
                 * Gets an observable that emits when the overlay has been attached.
                 * @return {?}
                 */
                OverlayRef.prototype.attachments = function () {
                    return this._attachments.asObservable();
                };
                /**
                 * Gets an observable that emits when the overlay has been detached.
                 * @return {?}
                 */
                OverlayRef.prototype.detachments = function () {
                    return this._detachments.asObservable();
                };
                /**
                 * Gets an observable of keydown events targeted to this overlay.
                 * @return {?}
                 */
                OverlayRef.prototype.keydownEvents = function () {
                    return this._keydownEventsObservable;
                };
                /**
                 * Gets the current overlay configuration, which is immutable.
                 * @return {?}
                 */
                OverlayRef.prototype.getConfig = function () {
                    return this._config;
                };
                /**
                 * Updates the position of the overlay based on the position strategy.
                 * @return {?}
                 */
                OverlayRef.prototype.updatePosition = function () {
                    if (this._positionStrategy) {
                        this._positionStrategy.apply();
                    }
                };
                /**
                 * Switches to a new position strategy and updates the overlay position.
                 * @param {?} strategy
                 * @return {?}
                 */
                OverlayRef.prototype.updatePositionStrategy = function (strategy) {
                    if (strategy === this._positionStrategy) {
                        return;
                    }
                    if (this._positionStrategy) {
                        this._positionStrategy.dispose();
                    }
                    this._positionStrategy = strategy;
                    if (this.hasAttached()) {
                        strategy.attach(this);
                        this.updatePosition();
                    }
                };
                /**
                 * Update the size properties of the overlay.
                 * @param {?} sizeConfig
                 * @return {?}
                 */
                OverlayRef.prototype.updateSize = function (sizeConfig) {
                    this._config = Object.assign({}, this._config, sizeConfig);
                    this._updateElementSize();
                };
                /**
                 * Sets the LTR/RTL direction for the overlay.
                 * @param {?} dir
                 * @return {?}
                 */
                OverlayRef.prototype.setDirection = function (dir) {
                    this._config = Object.assign({}, this._config, { direction: dir });
                    this._updateElementDirection();
                };
                /**
                 * Add a CSS class or an array of classes to the overlay pane.
                 * @param {?} classes
                 * @return {?}
                 */
                OverlayRef.prototype.addPanelClass = function (classes) {
                    if (this._pane) {
                        this._toggleClasses(this._pane, classes, true);
                    }
                };
                /**
                 * Remove a CSS class or an array of classes from the overlay pane.
                 * @param {?} classes
                 * @return {?}
                 */
                OverlayRef.prototype.removePanelClass = function (classes) {
                    if (this._pane) {
                        this._toggleClasses(this._pane, classes, false);
                    }
                };
                /**
                 * Returns the layout direction of the overlay panel.
                 * @return {?}
                 */
                OverlayRef.prototype.getDirection = function () {
                    /** @type {?} */
                    var direction = this._config.direction;
                    if (!direction) {
                        return 'ltr';
                    }
                    return typeof direction === 'string' ? direction : direction.value;
                };
                /**
                 * Switches to a new scroll strategy.
                 * @param {?} strategy
                 * @return {?}
                 */
                OverlayRef.prototype.updateScrollStrategy = function (strategy) {
                    if (strategy === this._scrollStrategy) {
                        return;
                    }
                    this._disposeScrollStrategy();
                    this._scrollStrategy = strategy;
                    if (this.hasAttached()) {
                        strategy.attach(this);
                        strategy.enable();
                    }
                };
                /**
                 * Updates the text direction of the overlay panel.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._updateElementDirection = function () {
                    this._host.setAttribute('dir', this.getDirection());
                };
                /**
                 * Updates the size of the overlay element based on the overlay config.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._updateElementSize = function () {
                    if (!this._pane) {
                        return;
                    }
                    /** @type {?} */
                    var style = this._pane.style;
                    style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
                    style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
                    style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
                    style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
                    style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
                    style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
                };
                /**
                 * Toggles the pointer events for the overlay pane element.
                 * @private
                 * @param {?} enablePointer
                 * @return {?}
                 */
                OverlayRef.prototype._togglePointerEvents = function (enablePointer) {
                    this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
                };
                /**
                 * Attaches a backdrop for this overlay.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._attachBackdrop = function () {
                    var _this = this;
                    /** @type {?} */
                    var showingClass = 'cdk-overlay-backdrop-showing';
                    this._backdropElement = this._document.createElement('div');
                    this._backdropElement.classList.add('cdk-overlay-backdrop');
                    if (this._config.backdropClass) {
                        this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
                    }
                    // Insert the backdrop before the pane in the DOM order,
                    // in order to handle stacked overlays properly.
                    ( /** @type {?} */(this._host.parentElement)).insertBefore(this._backdropElement, this._host);
                    // Forward backdrop clicks such that the consumer of the overlay can perform whatever
                    // action desired when such a click occurs (usually closing the overlay).
                    this._backdropElement.addEventListener('click', this._backdropClickHandler);
                    // Add class to fade-in the backdrop after one frame.
                    if (typeof requestAnimationFrame !== 'undefined') {
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            requestAnimationFrame(( /**
                             * @return {?}
                             */function () {
                                if (_this._backdropElement) {
                                    _this._backdropElement.classList.add(showingClass);
                                }
                            }));
                        }));
                    }
                    else {
                        this._backdropElement.classList.add(showingClass);
                    }
                };
                /**
                 * Updates the stacking order of the element, moving it to the top if necessary.
                 * This is required in cases where one overlay was detached, while another one,
                 * that should be behind it, was destroyed. The next time both of them are opened,
                 * the stacking will be wrong, because the detached element's pane will still be
                 * in its original DOM position.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._updateStackingOrder = function () {
                    if (this._host.nextSibling) {
                        ( /** @type {?} */(this._host.parentNode)).appendChild(this._host);
                    }
                };
                /**
                 * Detaches the backdrop (if any) associated with the overlay.
                 * @return {?}
                 */
                OverlayRef.prototype.detachBackdrop = function () {
                    var _this = this;
                    /** @type {?} */
                    var backdropToDetach = this._backdropElement;
                    if (!backdropToDetach) {
                        return;
                    }
                    /** @type {?} */
                    var timeoutId;
                    /** @type {?} */
                    var finishDetach = ( /**
                     * @return {?}
                     */function () {
                        // It may not be attached to anything in certain cases (e.g. unit tests).
                        if (backdropToDetach) {
                            backdropToDetach.removeEventListener('click', _this._backdropClickHandler);
                            backdropToDetach.removeEventListener('transitionend', finishDetach);
                            if (backdropToDetach.parentNode) {
                                backdropToDetach.parentNode.removeChild(backdropToDetach);
                            }
                        }
                        // It is possible that a new portal has been attached to this overlay since we started
                        // removing the backdrop. If that is the case, only clear the backdrop reference if it
                        // is still the same instance that we started to remove.
                        if (_this._backdropElement == backdropToDetach) {
                            _this._backdropElement = null;
                        }
                        if (_this._config.backdropClass) {
                            _this._toggleClasses(( /** @type {?} */(backdropToDetach)), _this._config.backdropClass, false);
                        }
                        clearTimeout(timeoutId);
                    });
                    backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        ( /** @type {?} */(backdropToDetach)).addEventListener('transitionend', finishDetach);
                    }));
                    // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
                    // In this case we make it unclickable and we try to remove it after a delay.
                    backdropToDetach.style.pointerEvents = 'none';
                    // Run this outside the Angular zone because there's nothing that Angular cares about.
                    // If it were to run inside the Angular zone, every test that used Overlay would have to be
                    // either async or fakeAsync.
                    timeoutId = this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () { return setTimeout(finishDetach, 500); }));
                };
                /**
                 * Toggles a single CSS class or an array of classes on an element.
                 * @private
                 * @param {?} element
                 * @param {?} cssClasses
                 * @param {?} isAdd
                 * @return {?}
                 */
                OverlayRef.prototype._toggleClasses = function (element, cssClasses, isAdd) {
                    /** @type {?} */
                    var classList = element.classList;
                    Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(( /**
                     * @param {?} cssClass
                     * @return {?}
                     */function (/**
                     * @param {?} cssClass
                     * @return {?}
                     */ cssClass) {
                        // We can't do a spread here, because IE doesn't support setting multiple classes.
                        // Also trying to add an empty string to a DOMTokenList will throw.
                        if (cssClass) {
                            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
                        }
                    }));
                };
                /**
                 * Detaches the overlay content next time the zone stabilizes.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._detachContentWhenStable = function () {
                    var _this = this;
                    // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
                    // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
                    // be patched to run inside the zone, which will throw us into an infinite loop.
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        // We can't remove the host here immediately, because the overlay pane's content
                        // might still be animating. This stream helps us avoid interrupting the animation
                        // by waiting for the pane to become empty.
                        /** @type {?} */
                        var subscription = _this._ngZone.onStable
                            .asObservable()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this._attachments, _this._detachments)))
                            .subscribe(( /**
                     * @return {?}
                     */function () {
                            // Needs a couple of checks for the pane and host, because
                            // they may have been removed by the time the zone stabilizes.
                            if (!_this._pane || !_this._host || _this._pane.children.length === 0) {
                                if (_this._pane && _this._config.panelClass) {
                                    _this._toggleClasses(_this._pane, _this._config.panelClass, false);
                                }
                                if (_this._host && _this._host.parentElement) {
                                    _this._previousHostParent = _this._host.parentElement;
                                    _this._previousHostParent.removeChild(_this._host);
                                }
                                subscription.unsubscribe();
                            }
                        }));
                    }));
                };
                /**
                 * Disposes of a scroll strategy.
                 * @private
                 * @return {?}
                 */
                OverlayRef.prototype._disposeScrollStrategy = function () {
                    /** @type {?} */
                    var scrollStrategy = this._scrollStrategy;
                    if (scrollStrategy) {
                        scrollStrategy.disable();
                        if (scrollStrategy.detach) {
                            scrollStrategy.detach();
                        }
                    }
                };
                return OverlayRef;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // TODO: refactor clipping detection into a separate thing (part of scrolling module)
            // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
            /**
             * Class to be added to the overlay bounding box.
             * @type {?}
             */
            var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
            /**
             * A strategy for positioning overlays. Using this strategy, an overlay is given an
             * implicit position relative some origin element. The relative position is defined in terms of
             * a point on the origin element that is connected to a point on the overlay element. For example,
             * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
             * of the overlay.
             */
            var FlexibleConnectedPositionStrategy = /** @class */ (function () {
                /**
                 * @param {?} connectedTo
                 * @param {?} _viewportRuler
                 * @param {?} _document
                 * @param {?} _platform
                 * @param {?} _overlayContainer
                 */
                function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
                    this._viewportRuler = _viewportRuler;
                    this._document = _document;
                    this._platform = _platform;
                    this._overlayContainer = _overlayContainer;
                    /**
                     * Last size used for the bounding box. Used to avoid resizing the overlay after open.
                     */
                    this._lastBoundingBoxSize = { width: 0, height: 0 };
                    /**
                     * Whether the overlay was pushed in a previous positioning.
                     */
                    this._isPushed = false;
                    /**
                     * Whether the overlay can be pushed on-screen on the initial open.
                     */
                    this._canPush = true;
                    /**
                     * Whether the overlay can grow via flexible width/height after the initial open.
                     */
                    this._growAfterOpen = false;
                    /**
                     * Whether the overlay's width and height can be constrained to fit within the viewport.
                     */
                    this._hasFlexibleDimensions = true;
                    /**
                     * Whether the overlay position is locked.
                     */
                    this._positionLocked = false;
                    /**
                     * Amount of space that must be maintained between the overlay and the edge of the viewport.
                     */
                    this._viewportMargin = 0;
                    /**
                     * The Scrollable containers used to check scrollable view properties on position change.
                     */
                    this._scrollables = [];
                    /**
                     * Ordered list of preferred positions, from most to least desirable.
                     */
                    this._preferredPositions = [];
                    /**
                     * Subject that emits whenever the position changes.
                     */
                    this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    /**
                     * Subscription to viewport size changes.
                     */
                    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    /**
                     * Default offset for the overlay along the x axis.
                     */
                    this._offsetX = 0;
                    /**
                     * Default offset for the overlay along the y axis.
                     */
                    this._offsetY = 0;
                    /**
                     * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
                     */
                    this._appliedPanelClasses = [];
                    /**
                     * Observable sequence of position changes.
                     */
                    this.positionChanges = this._positionChanges.asObservable();
                    this.setOrigin(connectedTo);
                }
                Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
                    /**
                     * Ordered list of preferred positions, from most to least desirable.
                     * @return {?}
                     */
                    get: function () {
                        return this._preferredPositions;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Attaches this position strategy to an overlay.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype.attach = function (overlayRef) {
                    var _this = this;
                    if (this._overlayRef && overlayRef !== this._overlayRef) {
                        throw Error('This position strategy is already attached to an overlay');
                    }
                    this._validatePositions();
                    overlayRef.hostElement.classList.add(boundingBoxClass);
                    this._overlayRef = overlayRef;
                    this._boundingBox = overlayRef.hostElement;
                    this._pane = overlayRef.overlayElement;
                    this._isDisposed = false;
                    this._isInitialRender = true;
                    this._lastPosition = null;
                    this._resizeSubscription.unsubscribe();
                    this._resizeSubscription = this._viewportRuler.change().subscribe(( /**
                     * @return {?}
                     */function () {
                        // When the window is resized, we want to trigger the next reposition as if it
                        // was an initial render, in order for the strategy to pick a new optimal position,
                        // otherwise position locking will cause it to stay at the old one.
                        _this._isInitialRender = true;
                        _this.apply();
                    }));
                };
                /**
                 * Updates the position of the overlay element, using whichever preferred position relative
                 * to the origin best fits on-screen.
                 *
                 * The selection of a position goes as follows:
                 *  - If any positions fit completely within the viewport as-is,
                 *      choose the first position that does so.
                 *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
                 *      choose the position with the greatest available size modified by the positions' weight.
                 *  - If pushing is enabled, take the position that went off-screen the least and push it
                 *      on-screen.
                 *  - If none of the previous criteria were met, use the position that goes off-screen the least.
                 * \@docs-private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype.apply = function () {
                    var e_2, _a, e_3, _b;
                    // We shouldn't do anything if the strategy was disposed or we're on the server.
                    if (this._isDisposed || !this._platform.isBrowser) {
                        return;
                    }
                    // If the position has been applied already (e.g. when the overlay was opened) and the
                    // consumer opted into locking in the position, re-use the old position, in order to
                    // prevent the overlay from jumping around.
                    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
                        this.reapplyLastPosition();
                        return;
                    }
                    this._clearPanelClasses();
                    this._resetOverlayElementStyles();
                    this._resetBoundingBoxStyles();
                    // We need the bounding rects for the origin and the overlay to determine how to position
                    // the overlay relative to the origin.
                    // We use the viewport rect to determine whether a position would go off-screen.
                    this._viewportRect = this._getNarrowedViewportRect();
                    this._originRect = this._getOriginRect();
                    this._overlayRect = this._pane.getBoundingClientRect();
                    /** @type {?} */
                    var originRect = this._originRect;
                    /** @type {?} */
                    var overlayRect = this._overlayRect;
                    /** @type {?} */
                    var viewportRect = this._viewportRect;
                    // Positions where the overlay will fit with flexible dimensions.
                    /** @type {?} */
                    var flexibleFits = [];
                    // Fallback if none of the preferred positions fit within the viewport.
                    /** @type {?} */
                    var fallback;
                    try {
                        // Go through each of the preferred positions looking for a good fit.
                        // If a good fit is found, it will be applied immediately.
                        for (var _c = __values(this._preferredPositions), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var pos = _d.value;
                            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                            /** @type {?} */
                            var originPoint = this._getOriginPoint(originRect, pos);
                            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                            // overlay in this position. We use the top-left corner for calculations and later translate
                            // this into an appropriate (top, left, bottom, right) style.
                            /** @type {?} */
                            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
                            // Calculate how well the overlay would fit into the viewport with this point.
                            /** @type {?} */
                            var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
                            // If the overlay, without any further work, fits into the viewport, use this position.
                            if (overlayFit.isCompletelyWithinViewport) {
                                this._isPushed = false;
                                this._applyPosition(pos, originPoint);
                                return;
                            }
                            // If the overlay has flexible dimensions, we can use this position
                            // so long as there's enough space for the minimum dimensions.
                            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                                // Save positions where the overlay will fit with flexible dimensions. We will use these
                                // if none of the positions fit *without* flexible dimensions.
                                flexibleFits.push({
                                    position: pos,
                                    origin: originPoint,
                                    overlayRect: overlayRect,
                                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                                });
                                continue;
                            }
                            // If the current preferred position does not fit on the screen, remember the position
                            // if it has more visible area on-screen than we've seen and move onto the next preferred
                            // position.
                            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                                fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    // If there are any positions where the overlay would fit with flexible dimensions, choose the
                    // one that has the greatest area available modified by the position's weight
                    if (flexibleFits.length) {
                        /** @type {?} */
                        var bestFit = null;
                        /** @type {?} */
                        var bestScore = -1;
                        try {
                            for (var flexibleFits_1 = __values(flexibleFits), flexibleFits_1_1 = flexibleFits_1.next(); !flexibleFits_1_1.done; flexibleFits_1_1 = flexibleFits_1.next()) {
                                var fit = flexibleFits_1_1.value;
                                /** @type {?} */
                                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                                if (score > bestScore) {
                                    bestScore = score;
                                    bestFit = fit;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (flexibleFits_1_1 && !flexibleFits_1_1.done && (_b = flexibleFits_1.return)) _b.call(flexibleFits_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        this._isPushed = false;
                        this._applyPosition(( /** @type {?} */(bestFit)).position, ( /** @type {?} */(bestFit)).origin);
                        return;
                    }
                    // When none of the preferred positions fit within the viewport, take the position
                    // that went off-screen the least and attempt to push it on-screen.
                    if (this._canPush) {
                        // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
                        this._isPushed = true;
                        this._applyPosition(( /** @type {?} */(fallback)).position, ( /** @type {?} */(fallback)).originPoint);
                        return;
                    }
                    // All options for getting the overlay within the viewport have been exhausted, so go with the
                    // position that went off-screen the least.
                    this._applyPosition(( /** @type {?} */(fallback)).position, ( /** @type {?} */(fallback)).originPoint);
                };
                /**
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype.detach = function () {
                    this._clearPanelClasses();
                    this._lastPosition = null;
                    this._previousPushAmount = null;
                    this._resizeSubscription.unsubscribe();
                };
                /**
                 * Cleanup after the element gets destroyed.
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype.dispose = function () {
                    if (this._isDisposed) {
                        return;
                    }
                    // We can't use `_resetBoundingBoxStyles` here, because it resets
                    // some properties to zero, rather than removing them.
                    if (this._boundingBox) {
                        extendStyles(this._boundingBox.style, ( /** @type {?} */({
                            top: '',
                            left: '',
                            right: '',
                            bottom: '',
                            height: '',
                            width: '',
                            alignItems: '',
                            justifyContent: '',
                        })));
                    }
                    if (this._pane) {
                        this._resetOverlayElementStyles();
                    }
                    if (this._overlayRef) {
                        this._overlayRef.hostElement.classList.remove(boundingBoxClass);
                    }
                    this.detach();
                    this._positionChanges.complete();
                    this._overlayRef = this._boundingBox = ( /** @type {?} */(null));
                    this._isDisposed = true;
                };
                /**
                 * This re-aligns the overlay element with the trigger in its last calculated position,
                 * even if a position higher in the "preferred positions" list would now fit. This
                 * allows one to re-align the panel without changing the orientation of the panel.
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = function () {
                    if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
                        this._originRect = this._getOriginRect();
                        this._overlayRect = this._pane.getBoundingClientRect();
                        this._viewportRect = this._getNarrowedViewportRect();
                        /** @type {?} */
                        var lastPosition = this._lastPosition || this._preferredPositions[0];
                        /** @type {?} */
                        var originPoint = this._getOriginPoint(this._originRect, lastPosition);
                        this._applyPosition(lastPosition, originPoint);
                    }
                };
                /**
                 * Sets the list of Scrollable containers that host the origin element so that
                 * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
                 * Scrollable must be an ancestor element of the strategy's origin element.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} scrollables
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
                    ( /** @type {?} */(this))._scrollables = scrollables;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Adds new preferred positions.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} positions List of positions options for this overlay.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withPositions = function (positions) {
                    ( /** @type {?} */(this))._preferredPositions = positions;
                    // If the last calculated position object isn't part of the positions anymore, clear
                    // it in order to avoid it being picked up if the consumer tries to re-apply.
                    if (positions.indexOf(( /** @type {?} */(( /** @type {?} */(this))._lastPosition))) === -1) {
                        ( /** @type {?} */(this))._lastPosition = null;
                    }
                    ( /** @type {?} */(this))._validatePositions();
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withViewportMargin = function (margin) {
                    ( /** @type {?} */(this))._viewportMargin = margin;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets whether the overlay's width and height can be constrained to fit within the viewport.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} flexibleDimensions
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = function (flexibleDimensions) {
                    if (flexibleDimensions === void 0) { flexibleDimensions = true; }
                    ( /** @type {?} */(this))._hasFlexibleDimensions = flexibleDimensions;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets whether the overlay can grow after the initial open via flexible width/height.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} growAfterOpen
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = function (growAfterOpen) {
                    if (growAfterOpen === void 0) { growAfterOpen = true; }
                    ( /** @type {?} */(this))._growAfterOpen = growAfterOpen;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} canPush
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withPush = function (canPush) {
                    if (canPush === void 0) { canPush = true; }
                    ( /** @type {?} */(this))._canPush = canPush;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets whether the overlay's position should be locked in after it is positioned
                 * initially. When an overlay is locked in, it won't attempt to reposition itself
                 * when the position is re-applied (e.g. when the user scrolls away).
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} isLocked Whether the overlay should locked in.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withLockedPosition = function (isLocked) {
                    if (isLocked === void 0) { isLocked = true; }
                    ( /** @type {?} */(this))._positionLocked = isLocked;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the origin, relative to which to position the overlay.
                 * Using an element origin is useful for building components that need to be positioned
                 * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
                 * used for cases like contextual menus which open relative to the user's pointer.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} origin Reference to the new origin.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.setOrigin = function (origin) {
                    ( /** @type {?} */(this))._origin = origin;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the default offset for the overlay's connection point on the x-axis.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} offset New offset in the X axis.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = function (offset) {
                    ( /** @type {?} */(this))._offsetX = offset;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the default offset for the overlay's connection point on the y-axis.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} offset New offset in the Y axis.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = function (offset) {
                    ( /** @type {?} */(this))._offsetY = offset;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Configures that the position strategy should set a `transform-origin` on some elements
                 * inside the overlay, depending on the current position that is being applied. This is
                 * useful for the cases where the origin of an animation can change depending on the
                 * alignment of the overlay.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} selector CSS selector that will be used to find the target
                 *    elements onto which to set the transform origin.
                 * @return {THIS}
                 */
                FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = function (selector) {
                    ( /** @type {?} */(this))._transformOriginSelector = selector;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
                 * @private
                 * @param {?} originRect
                 * @param {?} pos
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getOriginPoint = function (originRect, pos) {
                    /** @type {?} */
                    var x;
                    if (pos.originX == 'center') {
                        // Note: when centering we should always use the `left`
                        // offset, otherwise the position will be wrong in RTL.
                        x = originRect.left + (originRect.width / 2);
                    }
                    else {
                        /** @type {?} */
                        var startX = this._isRtl() ? originRect.right : originRect.left;
                        /** @type {?} */
                        var endX = this._isRtl() ? originRect.left : originRect.right;
                        x = pos.originX == 'start' ? startX : endX;
                    }
                    /** @type {?} */
                    var y;
                    if (pos.originY == 'center') {
                        y = originRect.top + (originRect.height / 2);
                    }
                    else {
                        y = pos.originY == 'top' ? originRect.top : originRect.bottom;
                    }
                    return { x: x, y: y };
                };
                /**
                 * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
                 * origin point to which the overlay should be connected.
                 * @private
                 * @param {?} originPoint
                 * @param {?} overlayRect
                 * @param {?} pos
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, pos) {
                    // Calculate the (overlayStartX, overlayStartY), the start of the
                    // potential overlay position relative to the origin point.
                    /** @type {?} */
                    var overlayStartX;
                    if (pos.overlayX == 'center') {
                        overlayStartX = -overlayRect.width / 2;
                    }
                    else if (pos.overlayX === 'start') {
                        overlayStartX = this._isRtl() ? -overlayRect.width : 0;
                    }
                    else {
                        overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
                    }
                    /** @type {?} */
                    var overlayStartY;
                    if (pos.overlayY == 'center') {
                        overlayStartY = -overlayRect.height / 2;
                    }
                    else {
                        overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
                    }
                    // The (x, y) coordinates of the overlay.
                    return {
                        x: originPoint.x + overlayStartX,
                        y: originPoint.y + overlayStartY,
                    };
                };
                /**
                 * Gets how well an overlay at the given point will fit within the viewport.
                 * @private
                 * @param {?} point
                 * @param {?} overlay
                 * @param {?} viewport
                 * @param {?} position
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getOverlayFit = function (point, overlay, viewport, position) {
                    var x = point.x, y = point.y;
                    /** @type {?} */
                    var offsetX = this._getOffset(position, 'x');
                    /** @type {?} */
                    var offsetY = this._getOffset(position, 'y');
                    // Account for the offsets since they could push the overlay out of the viewport.
                    if (offsetX) {
                        x += offsetX;
                    }
                    if (offsetY) {
                        y += offsetY;
                    }
                    // How much the overlay would overflow at this position, on each side.
                    /** @type {?} */
                    var leftOverflow = 0 - x;
                    /** @type {?} */
                    var rightOverflow = (x + overlay.width) - viewport.width;
                    /** @type {?} */
                    var topOverflow = 0 - y;
                    /** @type {?} */
                    var bottomOverflow = (y + overlay.height) - viewport.height;
                    // Visible parts of the element on each axis.
                    /** @type {?} */
                    var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
                    /** @type {?} */
                    var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
                    /** @type {?} */
                    var visibleArea = visibleWidth * visibleHeight;
                    return {
                        visibleArea: visibleArea,
                        isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
                        fitsInViewportVertically: visibleHeight === overlay.height,
                        fitsInViewportHorizontally: visibleWidth == overlay.width,
                    };
                };
                /**
                 * Whether the overlay can fit within the viewport when it may resize either its width or height.
                 * @private
                 * @param {?} fit How well the overlay fits in the viewport at some position.
                 * @param {?} point The (x, y) coordinates of the overlat at some position.
                 * @param {?} viewport The geometry of the viewport.
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = function (fit, point, viewport) {
                    if (this._hasFlexibleDimensions) {
                        /** @type {?} */
                        var availableHeight = viewport.bottom - point.y;
                        /** @type {?} */
                        var availableWidth = viewport.right - point.x;
                        /** @type {?} */
                        var minHeight = this._overlayRef.getConfig().minHeight;
                        /** @type {?} */
                        var minWidth = this._overlayRef.getConfig().minWidth;
                        /** @type {?} */
                        var verticalFit = fit.fitsInViewportVertically ||
                            (minHeight != null && minHeight <= availableHeight);
                        /** @type {?} */
                        var horizontalFit = fit.fitsInViewportHorizontally ||
                            (minWidth != null && minWidth <= availableWidth);
                        return verticalFit && horizontalFit;
                    }
                    return false;
                };
                /**
                 * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
                 * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
                 * right and bottom).
                 *
                 * @private
                 * @param {?} start Starting point from which the overlay is pushed.
                 * @param {?} overlay Dimensions of the overlay.
                 * @param {?} scrollPosition Current viewport scroll position.
                 * @return {?} The point at which to position the overlay after pushing. This is effectively a new
                 *     originPoint.
                 */
                FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = function (start, overlay, scrollPosition) {
                    // If the position is locked and we've pushed the overlay already, reuse the previous push
                    // amount, rather than pushing it again. If we were to continue pushing, the element would
                    // remain in the viewport, which goes against the expectations when position locking is enabled.
                    if (this._previousPushAmount && this._positionLocked) {
                        return {
                            x: start.x + this._previousPushAmount.x,
                            y: start.y + this._previousPushAmount.y
                        };
                    }
                    /** @type {?} */
                    var viewport = this._viewportRect;
                    // Determine how much the overlay goes outside the viewport on each
                    // side, which we'll use to decide which direction to push it.
                    /** @type {?} */
                    var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
                    /** @type {?} */
                    var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
                    /** @type {?} */
                    var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
                    /** @type {?} */
                    var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
                    // Amount by which to push the overlay in each axis such that it remains on-screen.
                    /** @type {?} */
                    var pushX = 0;
                    /** @type {?} */
                    var pushY = 0;
                    // If the overlay fits completely within the bounds of the viewport, push it from whichever
                    // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
                    // viewport and allow for the trailing end of the overlay to go out of bounds.
                    if (overlay.width <= viewport.width) {
                        pushX = overflowLeft || -overflowRight;
                    }
                    else {
                        pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
                    }
                    if (overlay.height <= viewport.height) {
                        pushY = overflowTop || -overflowBottom;
                    }
                    else {
                        pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
                    }
                    this._previousPushAmount = { x: pushX, y: pushY };
                    return {
                        x: start.x + pushX,
                        y: start.y + pushY,
                    };
                };
                /**
                 * Applies a computed position to the overlay and emits a position change.
                 * @private
                 * @param {?} position The position preference
                 * @param {?} originPoint The point on the origin element where the overlay is connected.
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._applyPosition = function (position, originPoint) {
                    this._setTransformOrigin(position);
                    this._setOverlayElementStyles(originPoint, position);
                    this._setBoundingBoxStyles(originPoint, position);
                    if (position.panelClass) {
                        this._addPanelClasses(position.panelClass);
                    }
                    // Save the last connected position in case the position needs to be re-calculated.
                    this._lastPosition = position;
                    // Notify that the position has been changed along with its change properties.
                    // We only emit if we've got any subscriptions, because the scroll visibility
                    // calculcations can be somewhat expensive.
                    if (this._positionChanges.observers.length) {
                        /** @type {?} */
                        var scrollableViewProperties = this._getScrollVisibility();
                        /** @type {?} */
                        var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
                        this._positionChanges.next(changeEvent);
                    }
                    this._isInitialRender = false;
                };
                /**
                 * Sets the transform origin based on the configured selector and the passed-in position.
                 * @private
                 * @param {?} position
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = function (position) {
                    if (!this._transformOriginSelector) {
                        return;
                    }
                    /** @type {?} */
                    var elements = ( /** @type {?} */(this._boundingBox)).querySelectorAll(this._transformOriginSelector);
                    /** @type {?} */
                    var xOrigin;
                    /** @type {?} */
                    var yOrigin = position.overlayY;
                    if (position.overlayX === 'center') {
                        xOrigin = 'center';
                    }
                    else if (this._isRtl()) {
                        xOrigin = position.overlayX === 'start' ? 'right' : 'left';
                    }
                    else {
                        xOrigin = position.overlayX === 'start' ? 'left' : 'right';
                    }
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
                    }
                };
                /**
                 * Gets the position and size of the overlay's sizing container.
                 *
                 * This method does no measuring and applies no styles so that we can cheaply compute the
                 * bounds for all positions and choose the best fit based on these results.
                 * @private
                 * @param {?} origin
                 * @param {?} position
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = function (origin, position) {
                    /** @type {?} */
                    var viewport = this._viewportRect;
                    /** @type {?} */
                    var isRtl = this._isRtl();
                    /** @type {?} */
                    var height;
                    /** @type {?} */
                    var top;
                    /** @type {?} */
                    var bottom;
                    if (position.overlayY === 'top') {
                        // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
                        top = origin.y;
                        height = viewport.height - top + this._viewportMargin;
                    }
                    else if (position.overlayY === 'bottom') {
                        // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
                        // the viewport margin back in, because the viewport rect is narrowed down to remove the
                        // margin, whereas the `origin` position is calculated based on its `ClientRect`.
                        bottom = viewport.height - origin.y + this._viewportMargin * 2;
                        height = viewport.height - bottom + this._viewportMargin;
                    }
                    else {
                        // If neither top nor bottom, it means that the overlay is vertically centered on the
                        // origin point. Note that we want the position relative to the viewport, rather than
                        // the page, which is why we don't use something like `viewport.bottom - origin.y` and
                        // `origin.y - viewport.top`.
                        /** @type {?} */
                        var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
                        /** @type {?} */
                        var previousHeight = this._lastBoundingBoxSize.height;
                        height = smallestDistanceToViewportEdge * 2;
                        top = origin.y - smallestDistanceToViewportEdge;
                        if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                            top = origin.y - (previousHeight / 2);
                        }
                    }
                    // The overlay is opening 'right-ward' (the content flows to the right).
                    /** @type {?} */
                    var isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
                        (position.overlayX === 'end' && isRtl);
                    // The overlay is opening 'left-ward' (the content flows to the left).
                    /** @type {?} */
                    var isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
                        (position.overlayX === 'start' && isRtl);
                    /** @type {?} */
                    var width;
                    /** @type {?} */
                    var left;
                    /** @type {?} */
                    var right;
                    if (isBoundedByLeftViewportEdge) {
                        right = viewport.width - origin.x + this._viewportMargin;
                        width = origin.x - this._viewportMargin;
                    }
                    else if (isBoundedByRightViewportEdge) {
                        left = origin.x;
                        width = viewport.right - origin.x;
                    }
                    else {
                        // If neither start nor end, it means that the overlay is horizontally centered on the
                        // origin point. Note that we want the position relative to the viewport, rather than
                        // the page, which is why we don't use something like `viewport.right - origin.x` and
                        // `origin.x - viewport.left`.
                        /** @type {?} */
                        var smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
                        /** @type {?} */
                        var previousWidth = this._lastBoundingBoxSize.width;
                        width = smallestDistanceToViewportEdge * 2;
                        left = origin.x - smallestDistanceToViewportEdge;
                        if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                            left = origin.x - (previousWidth / 2);
                        }
                    }
                    return { top: ( /** @type {?} */(top)), left: ( /** @type {?} */(left)), bottom: ( /** @type {?} */(bottom)), right: ( /** @type {?} */(right)), width: width, height: height };
                };
                /**
                 * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
                 * origin's connection point and stetches to the bounds of the viewport.
                 *
                 * @private
                 * @param {?} origin The point on the origin element where the overlay is connected.
                 * @param {?} position The position preference
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = function (origin, position) {
                    /** @type {?} */
                    var boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
                    // It's weird if the overlay *grows* while scrolling, so we take the last size into account
                    // when applying a new size.
                    if (!this._isInitialRender && !this._growAfterOpen) {
                        boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
                        boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
                    }
                    /** @type {?} */
                    var styles = ( /** @type {?} */({}));
                    if (this._hasExactPosition()) {
                        styles.top = styles.left = '0';
                        styles.bottom = styles.right = '';
                        styles.width = styles.height = '100%';
                    }
                    else {
                        /** @type {?} */
                        var maxHeight = this._overlayRef.getConfig().maxHeight;
                        /** @type {?} */
                        var maxWidth = this._overlayRef.getConfig().maxWidth;
                        styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
                        styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
                        styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
                        styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
                        styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
                        styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right);
                        // Push the pane content towards the proper direction.
                        if (position.overlayX === 'center') {
                            styles.alignItems = 'center';
                        }
                        else {
                            styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
                        }
                        if (position.overlayY === 'center') {
                            styles.justifyContent = 'center';
                        }
                        else {
                            styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
                        }
                        if (maxHeight) {
                            styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
                        }
                        if (maxWidth) {
                            styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
                        }
                    }
                    this._lastBoundingBoxSize = boundingBoxRect;
                    extendStyles(( /** @type {?} */(this._boundingBox)).style, styles);
                };
                /**
                 * Resets the styles for the bounding box so that a new positioning can be computed.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = function () {
                    extendStyles(( /** @type {?} */(this._boundingBox)).style, ( /** @type {?} */({
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        height: '',
                        width: '',
                        alignItems: '',
                        justifyContent: '',
                    })));
                };
                /**
                 * Resets the styles for the overlay pane so that a new positioning can be computed.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = function () {
                    extendStyles(this._pane.style, ( /** @type {?} */({
                        top: '',
                        left: '',
                        bottom: '',
                        right: '',
                        position: '',
                        transform: '',
                    })));
                };
                /**
                 * Sets positioning styles to the overlay element.
                 * @private
                 * @param {?} originPoint
                 * @param {?} position
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = function (originPoint, position) {
                    /** @type {?} */
                    var styles = ( /** @type {?} */({}));
                    if (this._hasExactPosition()) {
                        /** @type {?} */
                        var scrollPosition = this._viewportRuler.getViewportScrollPosition();
                        extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
                        extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
                    }
                    else {
                        styles.position = 'static';
                    }
                    // Use a transform to apply the offsets. We do this because the `center` positions rely on
                    // being in the normal flex flow and setting a `top` / `left` at all will completely throw
                    // off the position. We also can't use margins, because they won't have an effect in some
                    // cases where the element doesn't have anything to "push off of". Finally, this works
                    // better both with flexible and non-flexible positioning.
                    /** @type {?} */
                    var transformString = '';
                    /** @type {?} */
                    var offsetX = this._getOffset(position, 'x');
                    /** @type {?} */
                    var offsetY = this._getOffset(position, 'y');
                    if (offsetX) {
                        transformString += "translateX(" + offsetX + "px) ";
                    }
                    if (offsetY) {
                        transformString += "translateY(" + offsetY + "px)";
                    }
                    styles.transform = transformString.trim();
                    // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
                    // we need these values to both be set to "100%" for the automatic flexible sizing to work.
                    // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
                    if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
                        styles.maxHeight = '';
                    }
                    if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
                        styles.maxWidth = '';
                    }
                    extendStyles(this._pane.style, styles);
                };
                /**
                 * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
                 * @private
                 * @param {?} position
                 * @param {?} originPoint
                 * @param {?} scrollPosition
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = function (position, originPoint, scrollPosition) {
                    // Reset any existing styles. This is necessary in case the
                    // preferred position has changed since the last `apply`.
                    /** @type {?} */
                    var styles = ( /** @type {?} */({ top: null, bottom: null }));
                    /** @type {?} */
                    var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
                    if (this._isPushed) {
                        overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
                    }
                    /** @type {?} */
                    var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
                    // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
                    // autocomplete), mobile browsers will shift everything in order to put the input in the middle
                    // of the screen and to make space for the virtual keyboard. We need to account for this offset,
                    // otherwise our positioning will be thrown off.
                    overlayPoint.y -= virtualKeyboardOffset;
                    // We want to set either `top` or `bottom` based on whether the overlay wants to appear
                    // above or below the origin and the direction in which the element will expand.
                    if (position.overlayY === 'bottom') {
                        // When using `bottom`, we adjust the y position such that it is the distance
                        // from the bottom of the viewport rather than the top.
                        /** @type {?} */
                        var documentHeight = ( /** @type {?} */(this._document.documentElement)).clientHeight;
                        styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
                    }
                    else {
                        styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
                    }
                    return styles;
                };
                /**
                 * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
                 * @private
                 * @param {?} position
                 * @param {?} originPoint
                 * @param {?} scrollPosition
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = function (position, originPoint, scrollPosition) {
                    // Reset any existing styles. This is necessary in case the preferred position has
                    // changed since the last `apply`.
                    /** @type {?} */
                    var styles = ( /** @type {?} */({ left: null, right: null }));
                    /** @type {?} */
                    var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
                    if (this._isPushed) {
                        overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
                    }
                    // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
                    // or "after" the origin, which determines the direction in which the element will expand.
                    // For the horizontal axis, the meaning of "before" and "after" change based on whether the
                    // page is in RTL or LTR.
                    /** @type {?} */
                    var horizontalStyleProperty;
                    if (this._isRtl()) {
                        horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
                    }
                    else {
                        horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
                    }
                    // When we're setting `right`, we adjust the x position such that it is the distance
                    // from the right edge of the viewport rather than the left edge.
                    if (horizontalStyleProperty === 'right') {
                        /** @type {?} */
                        var documentWidth = ( /** @type {?} */(this._document.documentElement)).clientWidth;
                        styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
                    }
                    else {
                        styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
                    }
                    return styles;
                };
                /**
                 * Gets the view properties of the trigger and overlay, including whether they are clipped
                 * or completely outside the view of any of the strategy's scrollables.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = function () {
                    // Note: needs fresh rects since the position could've changed.
                    /** @type {?} */
                    var originBounds = this._getOriginRect();
                    /** @type {?} */
                    var overlayBounds = this._pane.getBoundingClientRect();
                    // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
                    // every time, we should be able to use the scrollTop of the containers if the size of those
                    // containers hasn't changed.
                    /** @type {?} */
                    var scrollContainerBounds = this._scrollables.map(( /**
                     * @param {?} scrollable
                     * @return {?}
                     */function (/**
                     * @param {?} scrollable
                     * @return {?}
                     */ scrollable) {
                        return scrollable.getElementRef().nativeElement.getBoundingClientRect();
                    }));
                    return {
                        isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
                        isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
                        isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
                        isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
                    };
                };
                /**
                 * Subtracts the amount that an element is overflowing on an axis from its length.
                 * @private
                 * @param {?} length
                 * @param {...?} overflows
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._subtractOverflows = function (length) {
                    var overflows = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        overflows[_i - 1] = arguments[_i];
                    }
                    return overflows.reduce(( /**
                     * @param {?} currentValue
                     * @param {?} currentOverflow
                     * @return {?}
                     */function (currentValue, currentOverflow) {
                        return currentValue - Math.max(currentOverflow, 0);
                    }), length);
                };
                /**
                 * Narrows the given viewport rect by the current _viewportMargin.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = function () {
                    // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
                    // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
                    // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
                    // and `innerHeight` that do. This is necessary, because the overlay container uses
                    // 100% `width` and `height` which don't include the scrollbar either.
                    /** @type {?} */
                    var width = ( /** @type {?} */(this._document.documentElement)).clientWidth;
                    /** @type {?} */
                    var height = ( /** @type {?} */(this._document.documentElement)).clientHeight;
                    /** @type {?} */
                    var scrollPosition = this._viewportRuler.getViewportScrollPosition();
                    return {
                        top: scrollPosition.top + this._viewportMargin,
                        left: scrollPosition.left + this._viewportMargin,
                        right: scrollPosition.left + width - this._viewportMargin,
                        bottom: scrollPosition.top + height - this._viewportMargin,
                        width: width - (2 * this._viewportMargin),
                        height: height - (2 * this._viewportMargin),
                    };
                };
                /**
                 * Whether the we're dealing with an RTL context
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._isRtl = function () {
                    return this._overlayRef.getDirection() === 'rtl';
                };
                /**
                 * Determines whether the overlay uses exact or flexible positioning.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._hasExactPosition = function () {
                    return !this._hasFlexibleDimensions || this._isPushed;
                };
                /**
                 * Retrieves the offset of a position along the x or y axis.
                 * @private
                 * @param {?} position
                 * @param {?} axis
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getOffset = function (position, axis) {
                    if (axis === 'x') {
                        // We don't do something like `position['offset' + axis]` in
                        // order to avoid breking minifiers that rename properties.
                        return position.offsetX == null ? this._offsetX : position.offsetX;
                    }
                    return position.offsetY == null ? this._offsetY : position.offsetY;
                };
                /**
                 * Validates that the current position match the expected values.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._validatePositions = function () {
                    if (!this._preferredPositions.length) {
                        throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
                    }
                    // TODO(crisbeto): remove these once Angular's template type
                    // checking is advanced enough to catch these cases.
                    this._preferredPositions.forEach(( /**
                     * @param {?} pair
                     * @return {?}
                     */function (/**
                     * @param {?} pair
                     * @return {?}
                     */ pair) {
                        validateHorizontalPosition('originX', pair.originX);
                        validateVerticalPosition('originY', pair.originY);
                        validateHorizontalPosition('overlayX', pair.overlayX);
                        validateVerticalPosition('overlayY', pair.overlayY);
                    }));
                };
                /**
                 * Adds a single CSS class or an array of classes on the overlay panel.
                 * @private
                 * @param {?} cssClasses
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._addPanelClasses = function (cssClasses) {
                    var _this = this;
                    if (this._pane) {
                        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(( /**
                         * @param {?} cssClass
                         * @return {?}
                         */function (/**
                         * @param {?} cssClass
                         * @return {?}
                         */ cssClass) {
                            if (cssClass !== '' && _this._appliedPanelClasses.indexOf(cssClass) === -1) {
                                _this._appliedPanelClasses.push(cssClass);
                                _this._pane.classList.add(cssClass);
                            }
                        }));
                    }
                };
                /**
                 * Clears the classes that the position strategy has applied from the overlay panel.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._clearPanelClasses = function () {
                    var _this = this;
                    if (this._pane) {
                        this._appliedPanelClasses.forEach(( /**
                         * @param {?} cssClass
                         * @return {?}
                         */function (/**
                         * @param {?} cssClass
                         * @return {?}
                         */ cssClass) {
                            _this._pane.classList.remove(cssClass);
                        }));
                        this._appliedPanelClasses = [];
                    }
                };
                /**
                 * Returns the ClientRect of the current origin.
                 * @private
                 * @return {?}
                 */
                FlexibleConnectedPositionStrategy.prototype._getOriginRect = function () {
                    /** @type {?} */
                    var origin = this._origin;
                    if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
                        return origin.nativeElement.getBoundingClientRect();
                    }
                    if (origin instanceof HTMLElement) {
                        return origin.getBoundingClientRect();
                    }
                    /** @type {?} */
                    var width = origin.width || 0;
                    /** @type {?} */
                    var height = origin.height || 0;
                    // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
                    return {
                        top: origin.y,
                        bottom: origin.y + height,
                        left: origin.x,
                        right: origin.x + width,
                        height: height,
                        width: width
                    };
                };
                return FlexibleConnectedPositionStrategy;
            }());
            /**
             * Shallow-extends a stylesheet object with another stylesheet object.
             * @param {?} dest
             * @param {?} source
             * @return {?}
             */
            function extendStyles(dest, source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        dest[key] = source[key];
                    }
                }
                return dest;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A strategy for positioning overlays. Using this strategy, an overlay is given an
             * implicit position relative to some origin element. The relative position is defined in terms of
             * a point on the origin element that is connected to a point on the overlay element. For example,
             * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
             * of the overlay.
             * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
             * \@breaking-change 8.0.0
             */
            var ConnectedPositionStrategy = /** @class */ (function () {
                /**
                 * @param {?} originPos
                 * @param {?} overlayPos
                 * @param {?} connectedTo
                 * @param {?} viewportRuler
                 * @param {?} document
                 * @param {?} platform
                 * @param {?} overlayContainer
                 */
                function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
                    /**
                     * Ordered list of preferred positions, from most to least desirable.
                     */
                    this._preferredPositions = [];
                    // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
                    // the extra logic, we create an instance of the positioning strategy that has some
                    // defaults that make it behave as the old position strategy and to which we'll
                    // proxy all of the API calls.
                    this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
                        .withFlexibleDimensions(false)
                        .withPush(false)
                        .withViewportMargin(0);
                    this.withFallbackPosition(originPos, overlayPos);
                }
                Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
                    /**
                     * Whether the we're dealing with an RTL context
                     * @return {?}
                     */
                    get: function () {
                        return this._overlayRef.getDirection() === 'rtl';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
                    /**
                     * Emits an event when the connection point changes.
                     * @return {?}
                     */
                    get: function () {
                        return this._positionStrategy.positionChanges;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
                    /**
                     * Ordered list of preferred positions, from most to least desirable.
                     * @return {?}
                     */
                    get: function () {
                        return this._preferredPositions;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Attach this position strategy to an overlay.
                 * @param {?} overlayRef
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.attach = function (overlayRef) {
                    this._overlayRef = overlayRef;
                    this._positionStrategy.attach(overlayRef);
                    if (this._direction) {
                        overlayRef.setDirection(this._direction);
                        this._direction = null;
                    }
                };
                /**
                 * Disposes all resources used by the position strategy.
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.dispose = function () {
                    this._positionStrategy.dispose();
                };
                /**
                 * \@docs-private
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.detach = function () {
                    this._positionStrategy.detach();
                };
                /**
                 * Updates the position of the overlay element, using whichever preferred position relative
                 * to the origin fits on-screen.
                 * \@docs-private
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.apply = function () {
                    this._positionStrategy.apply();
                };
                /**
                 * Re-positions the overlay element with the trigger in its last calculated position,
                 * even if a position higher in the "preferred positions" list would now fit. This
                 * allows one to re-align the panel without changing the orientation of the panel.
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.recalculateLastPosition = function () {
                    this._positionStrategy.reapplyLastPosition();
                };
                /**
                 * Sets the list of Scrollable containers that host the origin element so that
                 * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
                 * Scrollable must be an ancestor element of the strategy's origin element.
                 * @param {?} scrollables
                 * @return {?}
                 */
                ConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
                    this._positionStrategy.withScrollableContainers(scrollables);
                };
                /**
                 * Adds a new preferred fallback position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} originPos
                 * @param {?} overlayPos
                 * @param {?=} offsetX
                 * @param {?=} offsetY
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos, offsetX, offsetY) {
                    /** @type {?} */
                    var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
                    ( /** @type {?} */(this))._preferredPositions.push(position);
                    ( /** @type {?} */(this))._positionStrategy.withPositions(( /** @type {?} */(this))._preferredPositions);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the layout direction so the overlay's position can be adjusted to match.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} dir New layout direction.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withDirection = function (dir) {
                    // Since the direction might be declared before the strategy is attached,
                    // we save the value in a temporary property and we'll transfer it to the
                    // overlay ref on attachment.
                    if (( /** @type {?} */(this))._overlayRef) {
                        ( /** @type {?} */(this))._overlayRef.setDirection(dir);
                    }
                    else {
                        ( /** @type {?} */(this))._direction = dir;
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets an offset for the overlay's connection point on the x-axis
                 * @template THIS
                 * @this {THIS}
                 * @param {?} offset New offset in the X axis.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
                    ( /** @type {?} */(this))._positionStrategy.withDefaultOffsetX(offset);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets an offset for the overlay's connection point on the y-axis
                 * @template THIS
                 * @this {THIS}
                 * @param {?} offset New offset in the Y axis.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
                    ( /** @type {?} */(this))._positionStrategy.withDefaultOffsetY(offset);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets whether the overlay's position should be locked in after it is positioned
                 * initially. When an overlay is locked in, it won't attempt to reposition itself
                 * when the position is re-applied (e.g. when the user scrolls away).
                 * @template THIS
                 * @this {THIS}
                 * @param {?} isLocked Whether the overlay should locked in.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withLockedPosition = function (isLocked) {
                    ( /** @type {?} */(this))._positionStrategy.withLockedPosition(isLocked);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Overwrites the current set of positions with an array of new ones.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} positions Position pairs to be set on the strategy.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.withPositions = function (positions) {
                    ( /** @type {?} */(this))._preferredPositions = positions.slice();
                    ( /** @type {?} */(this))._positionStrategy.withPositions(( /** @type {?} */(this))._preferredPositions);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the origin element, relative to which to position the overlay.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} origin Reference to the new origin element.
                 * @return {THIS}
                 */
                ConnectedPositionStrategy.prototype.setOrigin = function (origin) {
                    ( /** @type {?} */(this))._positionStrategy.setOrigin(origin);
                    return ( /** @type {?} */(this));
                };
                return ConnectedPositionStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Class to be added to the overlay pane wrapper.
             * @type {?}
             */
            var wrapperClass = 'cdk-global-overlay-wrapper';
            /**
             * A strategy for positioning overlays. Using this strategy, an overlay is given an
             * explicit position relative to the browser's viewport. We use flexbox, instead of
             * transforms, in order to avoid issues with subpixel rendering which can cause the
             * element to become blurry.
             */
            var GlobalPositionStrategy = /** @class */ (function () {
                function GlobalPositionStrategy() {
                    this._cssPosition = 'static';
                    this._topOffset = '';
                    this._bottomOffset = '';
                    this._leftOffset = '';
                    this._rightOffset = '';
                    this._alignItems = '';
                    this._justifyContent = '';
                    this._width = '';
                    this._height = '';
                }
                /**
                 * @param {?} overlayRef
                 * @return {?}
                 */
                GlobalPositionStrategy.prototype.attach = function (overlayRef) {
                    /** @type {?} */
                    var config = overlayRef.getConfig();
                    this._overlayRef = overlayRef;
                    if (this._width && !config.width) {
                        overlayRef.updateSize({ width: this._width });
                    }
                    if (this._height && !config.height) {
                        overlayRef.updateSize({ height: this._height });
                    }
                    overlayRef.hostElement.classList.add(wrapperClass);
                    this._isDisposed = false;
                };
                /**
                 * Sets the top position of the overlay. Clears any previously set vertical position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New top offset.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.top = function (value) {
                    if (value === void 0) { value = ''; }
                    ( /** @type {?} */(this))._bottomOffset = '';
                    ( /** @type {?} */(this))._topOffset = value;
                    ( /** @type {?} */(this))._alignItems = 'flex-start';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the left position of the overlay. Clears any previously set horizontal position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New left offset.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.left = function (value) {
                    if (value === void 0) { value = ''; }
                    ( /** @type {?} */(this))._rightOffset = '';
                    ( /** @type {?} */(this))._leftOffset = value;
                    ( /** @type {?} */(this))._justifyContent = 'flex-start';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the bottom position of the overlay. Clears any previously set vertical position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New bottom offset.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.bottom = function (value) {
                    if (value === void 0) { value = ''; }
                    ( /** @type {?} */(this))._topOffset = '';
                    ( /** @type {?} */(this))._bottomOffset = value;
                    ( /** @type {?} */(this))._alignItems = 'flex-end';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the right position of the overlay. Clears any previously set horizontal position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New right offset.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.right = function (value) {
                    if (value === void 0) { value = ''; }
                    ( /** @type {?} */(this))._leftOffset = '';
                    ( /** @type {?} */(this))._rightOffset = value;
                    ( /** @type {?} */(this))._justifyContent = 'flex-end';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the overlay width and clears any previously set width.
                 * @deprecated Pass the `width` through the `OverlayConfig`.
                 * \@breaking-change 8.0.0
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New width for the overlay
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.width = function (value) {
                    if (value === void 0) { value = ''; }
                    if (( /** @type {?} */(this))._overlayRef) {
                        ( /** @type {?} */(this))._overlayRef.updateSize({ width: value });
                    }
                    else {
                        ( /** @type {?} */(this))._width = value;
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the overlay height and clears any previously set height.
                 * @deprecated Pass the `height` through the `OverlayConfig`.
                 * \@breaking-change 8.0.0
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} value New height for the overlay
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.height = function (value) {
                    if (value === void 0) { value = ''; }
                    if (( /** @type {?} */(this))._overlayRef) {
                        ( /** @type {?} */(this))._overlayRef.updateSize({ height: value });
                    }
                    else {
                        ( /** @type {?} */(this))._height = value;
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Centers the overlay horizontally with an optional offset.
                 * Clears any previously set horizontal position.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} offset Overlay offset from the horizontal center.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
                    if (offset === void 0) { offset = ''; }
                    ( /** @type {?} */(this)).left(offset);
                    ( /** @type {?} */(this))._justifyContent = 'center';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Centers the overlay vertically with an optional offset.
                 * Clears any previously set vertical position.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} offset Overlay offset from the vertical center.
                 * @return {THIS}
                 */
                GlobalPositionStrategy.prototype.centerVertically = function (offset) {
                    if (offset === void 0) { offset = ''; }
                    ( /** @type {?} */(this)).top(offset);
                    ( /** @type {?} */(this))._alignItems = 'center';
                    return ( /** @type {?} */(this));
                };
                /**
                 * Apply the position to the element.
                 * \@docs-private
                 * @return {?}
                 */
                GlobalPositionStrategy.prototype.apply = function () {
                    // Since the overlay ref applies the strategy asynchronously, it could
                    // have been disposed before it ends up being applied. If that is the
                    // case, we shouldn't do anything.
                    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
                        return;
                    }
                    /** @type {?} */
                    var styles = this._overlayRef.overlayElement.style;
                    /** @type {?} */
                    var parentStyles = this._overlayRef.hostElement.style;
                    /** @type {?} */
                    var config = this._overlayRef.getConfig();
                    styles.position = this._cssPosition;
                    styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
                    styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
                    styles.marginBottom = this._bottomOffset;
                    styles.marginRight = this._rightOffset;
                    if (config.width === '100%') {
                        parentStyles.justifyContent = 'flex-start';
                    }
                    else if (this._justifyContent === 'center') {
                        parentStyles.justifyContent = 'center';
                    }
                    else if (this._overlayRef.getConfig().direction === 'rtl') {
                        // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
                        // don't want that because our positioning is explicitly `left` and `right`, hence
                        // why we do another inversion to ensure that the overlay stays in the same position.
                        // TODO: reconsider this if we add `start` and `end` methods.
                        if (this._justifyContent === 'flex-start') {
                            parentStyles.justifyContent = 'flex-end';
                        }
                        else if (this._justifyContent === 'flex-end') {
                            parentStyles.justifyContent = 'flex-start';
                        }
                    }
                    else {
                        parentStyles.justifyContent = this._justifyContent;
                    }
                    parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
                };
                /**
                 * Cleans up the DOM changes from the position strategy.
                 * \@docs-private
                 * @return {?}
                 */
                GlobalPositionStrategy.prototype.dispose = function () {
                    if (this._isDisposed || !this._overlayRef) {
                        return;
                    }
                    /** @type {?} */
                    var styles = this._overlayRef.overlayElement.style;
                    /** @type {?} */
                    var parent = this._overlayRef.hostElement;
                    /** @type {?} */
                    var parentStyles = parent.style;
                    parent.classList.remove(wrapperClass);
                    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
                        styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
                    this._overlayRef = ( /** @type {?} */(null));
                    this._isDisposed = true;
                };
                return GlobalPositionStrategy;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Builder for overlay position strategy.
             */
            var OverlayPositionBuilder = /** @class */ (function () {
                /**
                 * @param {?} _viewportRuler
                 * @param {?} _document
                 * @param {?} _platform
                 * @param {?} _overlayContainer
                 */
                function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
                    this._viewportRuler = _viewportRuler;
                    this._document = _document;
                    this._platform = _platform;
                    this._overlayContainer = _overlayContainer;
                }
                /**
                 * Creates a global position strategy.
                 * @return {?}
                 */
                OverlayPositionBuilder.prototype.global = function () {
                    return new GlobalPositionStrategy();
                };
                /**
                 * Creates a relative position strategy.
                 * @deprecated Use `flexibleConnectedTo` instead.
                 * \@breaking-change 8.0.0
                 * @param {?} elementRef
                 * @param {?} originPos
                 * @param {?} overlayPos
                 * @return {?}
                 */
                OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
                    return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
                };
                /**
                 * Creates a flexible position strategy.
                 * @param {?} origin Origin relative to which to position the overlay.
                 * @return {?}
                 */
                OverlayPositionBuilder.prototype.flexibleConnectedTo = function (origin) {
                    return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
                };
                return OverlayPositionBuilder;
            }());
            OverlayPositionBuilder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            OverlayPositionBuilder.ctorParameters = function () { return [
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
                { type: OverlayContainer }
            ]; };
            /** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Next overlay unique ID.
             * @type {?}
             */
            var nextUniqueId = 0;
            // Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
            // it needs is different based on where OverlayModule is imported.
            /**
             * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
             * used as a low-level building block for other components. Dialogs, tooltips, menus,
             * selects, etc. can all be built using overlays. The service should primarily be used by authors
             * of re-usable components rather than developers building end-user applications.
             *
             * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
             */
            var Overlay = /** @class */ (function () {
                /**
                 * @param {?} scrollStrategies
                 * @param {?} _overlayContainer
                 * @param {?} _componentFactoryResolver
                 * @param {?} _positionBuilder
                 * @param {?} _keyboardDispatcher
                 * @param {?} _injector
                 * @param {?} _ngZone
                 * @param {?} _document
                 * @param {?} _directionality
                 * @param {?=} _location
                 */
                function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
                    this.scrollStrategies = scrollStrategies;
                    this._overlayContainer = _overlayContainer;
                    this._componentFactoryResolver = _componentFactoryResolver;
                    this._positionBuilder = _positionBuilder;
                    this._keyboardDispatcher = _keyboardDispatcher;
                    this._injector = _injector;
                    this._ngZone = _ngZone;
                    this._document = _document;
                    this._directionality = _directionality;
                    this._location = _location;
                }
                /**
                 * Creates an overlay.
                 * @param {?=} config Configuration applied to the overlay.
                 * @return {?} Reference to the created overlay.
                 */
                Overlay.prototype.create = function (config) {
                    /** @type {?} */
                    var host = this._createHostElement();
                    /** @type {?} */
                    var pane = this._createPaneElement(host);
                    /** @type {?} */
                    var portalOutlet = this._createPortalOutlet(pane);
                    /** @type {?} */
                    var overlayConfig = new OverlayConfig(config);
                    overlayConfig.direction = overlayConfig.direction || this._directionality.value;
                    return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
                };
                /**
                 * Gets a position builder that can be used, via fluent API,
                 * to construct and configure a position strategy.
                 * @return {?} An overlay position builder.
                 */
                Overlay.prototype.position = function () {
                    return this._positionBuilder;
                };
                /**
                 * Creates the DOM element for an overlay and appends it to the overlay container.
                 * @private
                 * @param {?} host
                 * @return {?} Newly-created pane element
                 */
                Overlay.prototype._createPaneElement = function (host) {
                    /** @type {?} */
                    var pane = this._document.createElement('div');
                    pane.id = "cdk-overlay-" + nextUniqueId++;
                    pane.classList.add('cdk-overlay-pane');
                    host.appendChild(pane);
                    return pane;
                };
                /**
                 * Creates the host element that wraps around an overlay
                 * and can be used for advanced positioning.
                 * @private
                 * @return {?} Newly-create host element.
                 */
                Overlay.prototype._createHostElement = function () {
                    /** @type {?} */
                    var host = this._document.createElement('div');
                    this._overlayContainer.getContainerElement().appendChild(host);
                    return host;
                };
                /**
                 * Create a DomPortalOutlet into which the overlay content can be loaded.
                 * @private
                 * @param {?} pane The DOM element to turn into a portal outlet.
                 * @return {?} A portal outlet for the given DOM element.
                 */
                Overlay.prototype._createPortalOutlet = function (pane) {
                    // We have to resolve the ApplicationRef later in order to allow people
                    // to use overlay-based providers during app initialization.
                    if (!this._appRef) {
                        this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
                    }
                    return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
                };
                return Overlay;
            }());
            Overlay.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
            ];
            /** @nocollapse */
            Overlay.ctorParameters = function () { return [
                { type: ScrollStrategyOptions },
                { type: OverlayContainer },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] },
                { type: OverlayPositionBuilder },
                { type: OverlayKeyboardDispatcher },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Default set of positions for the overlay. Follows the behavior of a dropdown.
             * @type {?}
             */
            var defaultPositionList = [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                }
            ];
            /**
             * Injection token that determines the scroll handling while the connected overlay is open.
             * @type {?}
             */
            var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
            /**
             * Directive applied to an element to make it usable as an origin for an Overlay using a
             * ConnectedPositionStrategy.
             */
            var CdkOverlayOrigin = /** @class */ (function () {
                /**
                 * @param {?} elementRef
                 */
                function CdkOverlayOrigin(elementRef) {
                    this.elementRef = elementRef;
                }
                return CdkOverlayOrigin;
            }());
            CdkOverlayOrigin.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                            exportAs: 'cdkOverlayOrigin',
                        },] },
            ];
            /** @nocollapse */
            CdkOverlayOrigin.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
            ]; };
            /**
             * Directive to facilitate declarative creation of an
             * Overlay using a FlexibleConnectedPositionStrategy.
             */
            var CdkConnectedOverlay = /** @class */ (function () {
                // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
                /**
                 * @param {?} _overlay
                 * @param {?} templateRef
                 * @param {?} viewContainerRef
                 * @param {?} scrollStrategyFactory
                 * @param {?} _dir
                 */
                function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
                    this._overlay = _overlay;
                    this._dir = _dir;
                    this._hasBackdrop = false;
                    this._lockPosition = false;
                    this._growAfterOpen = false;
                    this._flexibleDimensions = false;
                    this._push = false;
                    this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    /**
                     * Margin between the overlay and the viewport edges.
                     */
                    this.viewportMargin = 0;
                    /**
                     * Whether the overlay is open.
                     */
                    this.open = false;
                    /**
                     * Event emitted when the backdrop is clicked.
                     */
                    this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /**
                     * Event emitted when the position has changed.
                     */
                    this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /**
                     * Event emitted when the overlay has been attached.
                     */
                    this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /**
                     * Event emitted when the overlay has been detached.
                     */
                    this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /**
                     * Emits when there are keyboard events that are targeted at the overlay.
                     */
                    this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](templateRef, viewContainerRef);
                    this._scrollStrategyFactory = scrollStrategyFactory;
                    this.scrollStrategy = this._scrollStrategyFactory();
                }
                Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
                    /**
                     * The offset in pixels for the overlay connection point on the x-axis
                     * @return {?}
                     */
                    get: function () { return this._offsetX; },
                    /**
                     * @param {?} offsetX
                     * @return {?}
                     */
                    set: function (offsetX) {
                        this._offsetX = offsetX;
                        if (this._position) {
                            this._updatePositionStrategy(this._position);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
                    /**
                     * The offset in pixels for the overlay connection point on the y-axis
                     * @return {?}
                     */
                    get: function () { return this._offsetY; },
                    /**
                     * @param {?} offsetY
                     * @return {?}
                     */
                    set: function (offsetY) {
                        this._offsetY = offsetY;
                        if (this._position) {
                            this._updatePositionStrategy(this._position);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
                    /**
                     * Whether or not the overlay should attach a backdrop.
                     * @return {?}
                     */
                    get: function () { return this._hasBackdrop; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
                    /**
                     * Whether or not the overlay should be locked when scrolling.
                     * @return {?}
                     */
                    get: function () { return this._lockPosition; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDimensions", {
                    /**
                     * Whether the overlay's width and height can be constrained to fit within the viewport.
                     * @return {?}
                     */
                    get: function () { return this._flexibleDimensions; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
                    /**
                     * Whether the overlay can grow after the initial open when flexible positioning is turned on.
                     * @return {?}
                     */
                    get: function () { return this._growAfterOpen; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
                    /**
                     * Whether the overlay can be pushed on-screen if none of the provided positions fit.
                     * @return {?}
                     */
                    get: function () { return this._push; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
                    /**
                     * The associated overlay reference.
                     * @return {?}
                     */
                    get: function () {
                        return this._overlayRef;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
                    /**
                     * The element's layout direction.
                     * @return {?}
                     */
                    get: function () {
                        return this._dir ? this._dir.value : 'ltr';
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype.ngOnDestroy = function () {
                    if (this._overlayRef) {
                        this._overlayRef.dispose();
                    }
                    this._backdropSubscription.unsubscribe();
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype.ngOnChanges = function (changes) {
                    if (this._position) {
                        this._updatePositionStrategy(this._position);
                        this._overlayRef.updateSize({
                            width: this.width,
                            minWidth: this.minWidth,
                            height: this.height,
                            minHeight: this.minHeight,
                        });
                        if (changes['origin'] && this.open) {
                            this._position.apply();
                        }
                    }
                    if (changes['open']) {
                        this.open ? this._attachOverlay() : this._detachOverlay();
                    }
                };
                /**
                 * Creates an overlay
                 * @private
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._createOverlay = function () {
                    var _this = this;
                    if (!this.positions || !this.positions.length) {
                        this.positions = defaultPositionList;
                    }
                    this._overlayRef = this._overlay.create(this._buildConfig());
                    this._overlayRef.keydownEvents().subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        _this.overlayKeydown.next(event);
                        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                            event.preventDefault();
                            _this._detachOverlay();
                        }
                    }));
                };
                /**
                 * Builds the overlay config based on the directive's inputs
                 * @private
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._buildConfig = function () {
                    /** @type {?} */
                    var positionStrategy = this._position = this._createPositionStrategy();
                    /** @type {?} */
                    var overlayConfig = new OverlayConfig({
                        direction: this._dir,
                        positionStrategy: positionStrategy,
                        scrollStrategy: this.scrollStrategy,
                        hasBackdrop: this.hasBackdrop
                    });
                    if (this.width || this.width === 0) {
                        overlayConfig.width = this.width;
                    }
                    if (this.height || this.height === 0) {
                        overlayConfig.height = this.height;
                    }
                    if (this.minWidth || this.minWidth === 0) {
                        overlayConfig.minWidth = this.minWidth;
                    }
                    if (this.minHeight || this.minHeight === 0) {
                        overlayConfig.minHeight = this.minHeight;
                    }
                    if (this.backdropClass) {
                        overlayConfig.backdropClass = this.backdropClass;
                    }
                    if (this.panelClass) {
                        overlayConfig.panelClass = this.panelClass;
                    }
                    return overlayConfig;
                };
                /**
                 * Updates the state of a position strategy, based on the values of the directive inputs.
                 * @private
                 * @param {?} positionStrategy
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._updatePositionStrategy = function (positionStrategy) {
                    var _this = this;
                    /** @type {?} */
                    var positions = this.positions.map(( /**
                     * @param {?} currentPosition
                     * @return {?}
                     */function (/**
                     * @param {?} currentPosition
                     * @return {?}
                     */ currentPosition) { return ({
                        originX: currentPosition.originX,
                        originY: currentPosition.originY,
                        overlayX: currentPosition.overlayX,
                        overlayY: currentPosition.overlayY,
                        offsetX: currentPosition.offsetX || _this.offsetX,
                        offsetY: currentPosition.offsetY || _this.offsetY,
                        panelClass: currentPosition.panelClass || undefined,
                    }); }));
                    return positionStrategy
                        .setOrigin(this.origin.elementRef)
                        .withPositions(positions)
                        .withFlexibleDimensions(this.flexibleDimensions)
                        .withPush(this.push)
                        .withGrowAfterOpen(this.growAfterOpen)
                        .withViewportMargin(this.viewportMargin)
                        .withLockedPosition(this.lockPosition);
                };
                /**
                 * Returns the position strategy of the overlay to be set on the overlay config
                 * @private
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._createPositionStrategy = function () {
                    var _this = this;
                    /** @type {?} */
                    var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
                    this._updatePositionStrategy(strategy);
                    strategy.positionChanges.subscribe(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) { return _this.positionChange.emit(p); }));
                    return strategy;
                };
                /**
                 * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
                 * @private
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._attachOverlay = function () {
                    var _this = this;
                    if (!this._overlayRef) {
                        this._createOverlay();
                    }
                    else {
                        // Update the overlay size, in case the directive's inputs have changed
                        this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
                    }
                    if (!this._overlayRef.hasAttached()) {
                        this._overlayRef.attach(this._templatePortal);
                        this.attach.emit();
                    }
                    if (this.hasBackdrop) {
                        this._backdropSubscription = this._overlayRef.backdropClick().subscribe(( /**
                         * @param {?} event
                         * @return {?}
                         */function (/**
                         * @param {?} event
                         * @return {?}
                         */ event) {
                            _this.backdropClick.emit(event);
                        }));
                    }
                    else {
                        this._backdropSubscription.unsubscribe();
                    }
                };
                /**
                 * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
                 * @private
                 * @return {?}
                 */
                CdkConnectedOverlay.prototype._detachOverlay = function () {
                    if (this._overlayRef) {
                        this._overlayRef.detach();
                        this.detach.emit();
                    }
                    this._backdropSubscription.unsubscribe();
                };
                return CdkConnectedOverlay;
            }());
            CdkConnectedOverlay.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                            exportAs: 'cdkConnectedOverlay'
                        },] },
            ];
            /** @nocollapse */
            CdkConnectedOverlay.ctorParameters = function () { return [
                { type: Overlay },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
            ]; };
            CdkConnectedOverlay.propDecorators = {
                origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOrigin',] }],
                positions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPositions',] }],
                offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetX',] }],
                offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetY',] }],
                width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayWidth',] }],
                height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHeight',] }],
                minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinWidth',] }],
                minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinHeight',] }],
                backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayBackdropClass',] }],
                panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPanelClass',] }],
                viewportMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayViewportMargin',] }],
                scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] }],
                open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOpen',] }],
                hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] }],
                lockPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayLockPosition',] }],
                flexibleDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] }],
                growAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] }],
                push: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPush',] }],
                backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
                positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
                attach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
                detach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
                overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
            };
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.reposition(); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
                provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
                deps: [Overlay],
                useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var OverlayModule = /** @class */ (function () {
                function OverlayModule() {
                }
                return OverlayModule;
            }());
            OverlayModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                            providers: [
                                Overlay,
                                CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                            ],
                        },] },
            ];
            /**
             * @deprecated Use `OverlayModule` instead.
             * \@breaking-change 8.0.0
             * \@docs-private
             * @type {?}
             */
            var OVERLAY_PROVIDERS = [
                Overlay,
                OverlayPositionBuilder,
                OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"],
                OVERLAY_CONTAINER_PROVIDER,
                CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Alternative to OverlayContainer that supports correct displaying of overlay elements in
             * Fullscreen mode
             * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
             *
             * Should be provided in the root component.
             */
            var FullscreenOverlayContainer = /** @class */ (function (_super) {
                __extends(FullscreenOverlayContainer, _super);
                /**
                 * @param {?} _document
                 */
                function FullscreenOverlayContainer(_document) {
                    return _super.call(this, _document) || this;
                }
                /**
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                    if (this._fullScreenEventName && this._fullScreenListener) {
                        this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
                    }
                };
                /**
                 * @protected
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype._createContainer = function () {
                    var _this = this;
                    _super.prototype._createContainer.call(this);
                    this._adjustParentForFullscreenChange();
                    this._addFullscreenChangeListener(( /**
                     * @return {?}
                     */function () { return _this._adjustParentForFullscreenChange(); }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = function () {
                    if (!this._containerElement) {
                        return;
                    }
                    /** @type {?} */
                    var fullscreenElement = this.getFullscreenElement();
                    /** @type {?} */
                    var parent = fullscreenElement || this._document.body;
                    parent.appendChild(this._containerElement);
                };
                /**
                 * @private
                 * @param {?} fn
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype._addFullscreenChangeListener = function (fn) {
                    /** @type {?} */
                    var eventName = this._getEventName();
                    if (eventName) {
                        if (this._fullScreenListener) {
                            this._document.removeEventListener(eventName, this._fullScreenListener);
                        }
                        this._document.addEventListener(eventName, fn);
                        this._fullScreenListener = fn;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype._getEventName = function () {
                    if (!this._fullScreenEventName) {
                        /** @type {?} */
                        var _document = ( /** @type {?} */(this._document));
                        if (_document.fullscreenEnabled) {
                            this._fullScreenEventName = 'fullscreenchange';
                        }
                        else if (_document.webkitFullscreenEnabled) {
                            this._fullScreenEventName = 'webkitfullscreenchange';
                        }
                        else if (_document.mozFullScreenEnabled) {
                            this._fullScreenEventName = 'mozfullscreenchange';
                        }
                        else if (_document.msFullscreenEnabled) {
                            this._fullScreenEventName = 'MSFullscreenChange';
                        }
                    }
                    return this._fullScreenEventName;
                };
                /**
                 * When the page is put into fullscreen mode, a specific element is specified.
                 * Only that element and its children are visible when in fullscreen mode.
                 * @return {?}
                 */
                FullscreenOverlayContainer.prototype.getFullscreenElement = function () {
                    /** @type {?} */
                    var _document = ( /** @type {?} */(this._document));
                    return _document.fullscreenElement ||
                        _document.webkitFullscreenElement ||
                        _document.mozFullScreenElement ||
                        _document.msFullscreenElement ||
                        null;
                };
                return FullscreenOverlayContainer;
            }(OverlayContainer));
            FullscreenOverlayContainer.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            FullscreenOverlayContainer.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: FullscreenOverlayContainer, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=overlay.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/button.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/button.js ***!
          \**********************************************************/
        /*! exports provided: MatButtonModule, MatButton, MatAnchor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () { return MatButtonModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function () { return MatButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function () { return MatAnchor; });
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Default color palette for round buttons (mat-fab and mat-mini-fab)
             * @type {?}
             */
            var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
            /**
             * List of classes to add to MatButton instances based on host attributes to
             * style as different variants.
             * @type {?}
             */
            var BUTTON_HOST_ATTRIBUTES = [
                'mat-button',
                'mat-flat-button',
                'mat-icon-button',
                'mat-raised-button',
                'mat-stroked-button',
                'mat-mini-fab',
                'mat-fab',
            ];
            // Boilerplate for applying mixins to MatButton.
            /**
             * \@docs-private
             */
            var MatButtonBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatButtonBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatButtonBase;
            }());
            /** @type {?} */
            var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));
            /**
             * Material design button.
             */
            var MatButton = /** @class */ (function (_super) {
                __extends(MatButton, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _focusMonitor
                 * @param {?} _animationMode
                 */
                function MatButton(elementRef, _focusMonitor, _animationMode) {
                    var e_4, _a;
                    var _this = _super.call(this, elementRef) || this;
                    _this._focusMonitor = _focusMonitor;
                    _this._animationMode = _animationMode;
                    /**
                     * Whether the button is round.
                     */
                    _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
                    /**
                     * Whether the button is icon button.
                     */
                    _this.isIconButton = _this._hasHostAttributes('mat-icon-button');
                    try {
                        // For each of the variant selectors that is present in the button's host
                        // attributes, add the correct corresponding class.
                        for (var BUTTON_HOST_ATTRIBUTES_1 = __values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next(); !BUTTON_HOST_ATTRIBUTES_1_1.done; BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next()) {
                            var attr = BUTTON_HOST_ATTRIBUTES_1_1.value;
                            if (_this._hasHostAttributes(attr)) {
                                (( /** @type {?} */(_this._getHostElement()))).classList.add(attr);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (BUTTON_HOST_ATTRIBUTES_1_1 && !BUTTON_HOST_ATTRIBUTES_1_1.done && (_a = BUTTON_HOST_ATTRIBUTES_1.return)) _a.call(BUTTON_HOST_ATTRIBUTES_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    // Add a class that applies to all buttons. This makes it easier to target if somebody
                    // wants to target all Material buttons. We do it here rather than `host` to ensure that
                    // the class is applied to derived classes.
                    elementRef.nativeElement.classList.add('mat-button-base');
                    _this._focusMonitor.monitor(_this._elementRef, true);
                    if (_this.isRoundButton) {
                        _this.color = DEFAULT_ROUND_BUTTON_COLOR;
                    }
                    return _this;
                }
                /**
                 * @return {?}
                 */
                MatButton.prototype.ngOnDestroy = function () {
                    this._focusMonitor.stopMonitoring(this._elementRef);
                };
                /**
                 * Focuses the button.
                 * @param {?=} origin
                 * @param {?=} options
                 * @return {?}
                 */
                MatButton.prototype.focus = function (origin, options) {
                    if (origin === void 0) { origin = 'program'; }
                    this._focusMonitor.focusVia(this._getHostElement(), origin, options);
                };
                /**
                 * @return {?}
                 */
                MatButton.prototype._getHostElement = function () {
                    return this._elementRef.nativeElement;
                };
                /**
                 * @return {?}
                 */
                MatButton.prototype._isRippleDisabled = function () {
                    return this.disableRipple || this.disabled;
                };
                /**
                 * Gets whether the button has one of the given attributes.
                 * @param {...?} attributes
                 * @return {?}
                 */
                MatButton.prototype._hasHostAttributes = function () {
                    var _this = this;
                    var attributes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        attributes[_i] = arguments[_i];
                    }
                    return attributes.some(( /**
                     * @param {?} attribute
                     * @return {?}
                     */function (/**
                     * @param {?} attribute
                     * @return {?}
                     */ attribute) { return _this._getHostElement().hasAttribute(attribute); }));
                };
                return MatButton;
            }(_MatButtonMixinBase));
            MatButton.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
                            exportAs: 'matButton',
                            host: {
                                '[attr.disabled]': 'disabled || null',
                                '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                            },
                            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                            inputs: ['disabled', 'disableRipple', 'color'],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatButton.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatButton.propDecorators = {
                ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], { static: false },] }]
            };
            /**
             * Material design anchor button.
             */
            var MatAnchor = /** @class */ (function (_super) {
                __extends(MatAnchor, _super);
                /**
                 * @param {?} focusMonitor
                 * @param {?} elementRef
                 * @param {?} animationMode
                 */
                function MatAnchor(focusMonitor, elementRef, animationMode) {
                    return _super.call(this, elementRef, focusMonitor, animationMode) || this;
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatAnchor.prototype._haltDisabledEvents = function (event) {
                    // A disabled button shouldn't apply any actions
                    if (this.disabled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                };
                return MatAnchor;
            }(MatButton));
            MatAnchor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
                            exportAs: 'matButton, matAnchor',
                            host: {
                                // Note that we ignore the user-specified tabindex when it's disabled for
                                // consistency with the `mat-button` applied on native buttons where even
                                // though they have an index, they're not tabbable.
                                '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                                '[attr.disabled]': 'disabled || null',
                                '[attr.aria-disabled]': 'disabled.toString()',
                                '(click)': '_haltDisabledEvents($event)',
                                '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                            },
                            inputs: ['disabled', 'disableRipple', 'color'],
                            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatAnchor.ctorParameters = function () { return [
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatAnchor.propDecorators = {
                tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatButtonModule = /** @class */ (function () {
                function MatButtonModule() {
                }
                return MatButtonModule;
            }());
            MatButtonModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                            ],
                            exports: [
                                MatButton,
                                MatAnchor,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                            ],
                            declarations: [
                                MatButton,
                                MatAnchor,
                            ],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=button.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/form-field.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/form-field.js ***!
          \**************************************************************/
        /*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () { return MatFormFieldModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function () { return MatError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function () { return MatFormField; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () { return MatFormFieldControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () { return getMatFormFieldPlaceholderConflictError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () { return getMatFormFieldDuplicatedHintError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () { return getMatFormFieldMissingControlError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function () { return MatHint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () { return MatPlaceholder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function () { return MatPrefix; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function () { return MatSuffix; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function () { return MatLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () { return matFormFieldAnimations; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextUniqueId = 0;
            /**
             * Single error message to be shown underneath the form field.
             */
            var MatError = /** @class */ (function () {
                function MatError() {
                    this.id = "mat-error-" + nextUniqueId++;
                }
                return MatError;
            }());
            MatError.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-error',
                            host: {
                                'class': 'mat-error',
                                'role': 'alert',
                                '[attr.id]': 'id',
                            }
                        },] },
            ];
            MatError.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Animations used by the MatFormField.
             * \@docs-private
             * @type {?}
             */
            var matFormFieldAnimations = {
                /**
                 * Animation that transitions the form field's error and hint messages.
                 */
                transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [
                    // TODO(mmalerba): Use angular animations for label animation as well.
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
                    ]),
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * An interface which allows a control to work inside of a `MatFormField`.
             * @abstract
             * @template T
             */
            var MatFormFieldControl = /** @class */ (function () {
                function MatFormFieldControl() {
                }
                return MatFormFieldControl;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@docs-private
             * @return {?}
             */
            function getMatFormFieldPlaceholderConflictError() {
                return Error('Placeholder attribute and child element were both specified.');
            }
            /**
             * \@docs-private
             * @param {?} align
             * @return {?}
             */
            function getMatFormFieldDuplicatedHintError(align) {
                return Error("A hint was already declared for 'align=\"" + align + "\"'.");
            }
            /**
             * \@docs-private
             * @return {?}
             */
            function getMatFormFieldMissingControlError() {
                return Error('mat-form-field must contain a MatFormFieldControl.');
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextUniqueId$1 = 0;
            /**
             * Hint text to be shown underneath the form field control.
             */
            var MatHint = /** @class */ (function () {
                function MatHint() {
                    /**
                     * Whether to align the hint label at the start or end of the line.
                     */
                    this.align = 'start';
                    /**
                     * Unique ID for the hint. Used for the aria-describedby on the form field control.
                     */
                    this.id = "mat-hint-" + nextUniqueId$1++;
                }
                return MatHint;
            }());
            MatHint.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-hint',
                            host: {
                                'class': 'mat-hint',
                                '[class.mat-right]': 'align == "end"',
                                '[attr.id]': 'id',
                                // Remove align attribute to prevent it from interfering with layout.
                                '[attr.align]': 'null',
                            }
                        },] },
            ];
            MatHint.propDecorators = {
                align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The floating label for a `mat-form-field`.
             */
            var MatLabel = /** @class */ (function () {
                function MatLabel() {
                }
                return MatLabel;
            }());
            MatLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-label'
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The placeholder text for an `MatFormField`.
             * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
             *     placeholder.
             * \@breaking-change 8.0.0
             */
            var MatPlaceholder = /** @class */ (function () {
                function MatPlaceholder() {
                }
                return MatPlaceholder;
            }());
            MatPlaceholder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-placeholder'
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Prefix to be placed in front of the form field.
             */
            var MatPrefix = /** @class */ (function () {
                function MatPrefix() {
                }
                return MatPrefix;
            }());
            MatPrefix.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matPrefix]',
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Suffix to be placed at the end of the form field.
             */
            var MatSuffix = /** @class */ (function () {
                function MatSuffix() {
                }
                return MatSuffix;
            }());
            MatSuffix.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matSuffix]',
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextUniqueId$2 = 0;
            /** @type {?} */
            var floatingLabelScale = 0.75;
            /** @type {?} */
            var outlineGapPadding = 5;
            /**
             * Boilerplate for applying mixins to MatFormField.
             * \@docs-private
             */
            var MatFormFieldBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatFormFieldBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatFormFieldBase;
            }());
            /**
             * Base class to which we're applying the form field mixins.
             * \@docs-private
             * @type {?}
             */
            var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase, 'primary');
            /**
             * Injection token that can be used to configure the
             * default options for all form field within an app.
             * @type {?}
             */
            var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
            /**
             * Container for form controls that applies Material Design styling and behavior.
             */
            var MatFormField = /** @class */ (function (_super) {
                __extends(MatFormField, _super);
                /**
                 * @param {?} _elementRef
                 * @param {?} _changeDetectorRef
                 * @param {?} labelOptions
                 * @param {?} _dir
                 * @param {?} _defaults
                 * @param {?} _platform
                 * @param {?} _ngZone
                 * @param {?} _animationMode
                 */
                function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
                    var _this = _super.call(this, _elementRef) || this;
                    _this._elementRef = _elementRef;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._dir = _dir;
                    _this._defaults = _defaults;
                    _this._platform = _platform;
                    _this._ngZone = _ngZone;
                    /**
                     * Whether the outline gap needs to be calculated
                     * immediately on the next change detection run.
                     */
                    _this._outlineGapCalculationNeededImmediately = false;
                    /**
                     * Whether the outline gap needs to be calculated next time the zone has stabilized.
                     */
                    _this._outlineGapCalculationNeededOnStable = false;
                    _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    /**
                     * Override for the logic that disables the label animation in certain cases.
                     */
                    _this._showAlwaysAnimate = false;
                    /**
                     * State of the mat-hint and mat-error animations.
                     */
                    _this._subscriptAnimationState = '';
                    _this._hintLabel = '';
                    // Unique id for the hint label.
                    _this._hintLabelId = "mat-hint-" + nextUniqueId$2++;
                    // Unique id for the internal form field label.
                    _this._labelId = "mat-form-field-label-" + nextUniqueId$2++;
                    /* Holds the previous direction emitted by directionality service change emitter.
                         This is used in updateOutlineGap() method to update the width and position of the gap in the
                         outline. Only relevant for the outline appearance. The direction is getting updated in the
                         UI after directionality service change emission. So the outlines gaps are getting
                         updated in updateOutlineGap() method before connectionContainer child direction change
                         in UI. We may get wrong calculations. So we are storing the previous direction to get the
                         correct outline calculations*/
                    _this._previousDirection = 'ltr';
                    _this._labelOptions = labelOptions ? labelOptions : {};
                    _this.floatLabel = _this._labelOptions.float || 'auto';
                    _this._animationsEnabled = _animationMode !== 'NoopAnimations';
                    // Set the default through here so we invoke the setter on the first run.
                    _this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
                    _this._hideRequiredMarker = (_defaults && _defaults.hideRequiredMarker != null) ?
                        _defaults.hideRequiredMarker : false;
                    return _this;
                }
                Object.defineProperty(MatFormField.prototype, "appearance", {
                    /**
                     * The form-field appearance style.
                     * @return {?}
                     */
                    get: function () { return this._appearance; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var oldValue = this._appearance;
                        this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
                        if (this._appearance === 'outline' && oldValue !== value) {
                            this._outlineGapCalculationNeededOnStable = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "hideRequiredMarker", {
                    /**
                     * Whether the required marker should be hidden.
                     * @return {?}
                     */
                    get: function () { return this._hideRequiredMarker; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "_shouldAlwaysFloat", {
                    /**
                     * Whether the floating label should always float or not.
                     * @return {?}
                     */
                    get: function () {
                        return this.floatLabel === 'always' && !this._showAlwaysAnimate;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "_canLabelFloat", {
                    /**
                     * Whether the label can float or not.
                     * @return {?}
                     */
                    get: function () { return this.floatLabel !== 'never'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "hintLabel", {
                    /**
                     * Text for the form field hint.
                     * @return {?}
                     */
                    get: function () { return this._hintLabel; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._hintLabel = value;
                        this._processHints();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "floatLabel", {
                    /**
                     * Whether the label should always float, never float or float as the user types.
                     *
                     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
                     * way to make the floating label emulate the behavior of a standard input placeholder. However
                     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
                     * appearances the `never` option has been disabled in favor of just using the placeholder.
                     * @return {?}
                     */
                    get: function () {
                        return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value !== this._floatLabel) {
                            this._floatLabel = value || this._labelOptions.float || 'auto';
                            this._changeDetectorRef.markForCheck();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "_control", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
                        // and ViewEngine. We should clean this up once Ivy is the default renderer.
                        return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._explicitFormFieldControl = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatFormField.prototype, "_labelChild", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._labelChildNonStatic || this._labelChildStatic;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Gets an ElementRef for the element that a overlay attached to the form-field should be
                 * positioned relative to.
                 * @return {?}
                 */
                MatFormField.prototype.getConnectedOverlayOrigin = function () {
                    return this._connectionContainerRef || this._elementRef;
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._validateControlChild();
                    /** @type {?} */
                    var control = this._control;
                    if (control.controlType) {
                        this._elementRef.nativeElement.classList.add("mat-form-field-type-" + control.controlType);
                    }
                    // Subscribe to changes in the child control state in order to update the form field UI.
                    control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(( /** @type {?} */(null)))).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._validatePlaceholders();
                        _this._syncDescribedByIds();
                        _this._changeDetectorRef.markForCheck();
                    }));
                    // Run change detection if the value changes.
                    if (control.ngControl && control.ngControl.valueChanges) {
                        control.ngControl.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                            .subscribe(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                    }
                    // Note that we have to run outside of the `NgZone` explicitly,
                    // in order to avoid throwing users into an infinite loop
                    // if `zone-patch-rxjs` is included.
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this._destroyed)).subscribe(( /**
                         * @return {?}
                         */function () {
                            if (_this._outlineGapCalculationNeededOnStable) {
                                _this.updateOutlineGap();
                            }
                        }));
                    }));
                    // Run change detection and update the outline if the suffix or prefix changes.
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._outlineGapCalculationNeededOnStable = true;
                        _this._changeDetectorRef.markForCheck();
                    }));
                    // Re-validate when the number of hints changes.
                    this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._processHints();
                        _this._changeDetectorRef.markForCheck();
                    }));
                    // Update the aria-described by when the number of errors changes.
                    this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._syncDescribedByIds();
                        _this._changeDetectorRef.markForCheck();
                    }));
                    if (this._dir) {
                        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this.updateOutlineGap();
                            _this._previousDirection = _this._dir.value;
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype.ngAfterContentChecked = function () {
                    this._validateControlChild();
                    if (this._outlineGapCalculationNeededImmediately) {
                        this.updateOutlineGap();
                    }
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype.ngAfterViewInit = function () {
                    // Avoid animations on load.
                    this._subscriptAnimationState = 'enter';
                    this._changeDetectorRef.detectChanges();
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype.ngOnDestroy = function () {
                    this._destroyed.next();
                    this._destroyed.complete();
                };
                /**
                 * Determines whether a class from the NgControl should be forwarded to the host element.
                 * @param {?} prop
                 * @return {?}
                 */
                MatFormField.prototype._shouldForward = function (prop) {
                    /** @type {?} */
                    var ngControl = this._control ? this._control.ngControl : null;
                    return ngControl && ngControl[prop];
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype._hasPlaceholder = function () {
                    return !!(this._control && this._control.placeholder || this._placeholderChild);
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype._hasLabel = function () {
                    return !!this._labelChild;
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype._shouldLabelFloat = function () {
                    return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype._hideControlPlaceholder = function () {
                    // In the legacy appearance the placeholder is promoted to a label if no label is given.
                    return this.appearance === 'legacy' && !this._hasLabel() ||
                        this._hasLabel() && !this._shouldLabelFloat();
                };
                /**
                 * @return {?}
                 */
                MatFormField.prototype._hasFloatingLabel = function () {
                    // In the legacy appearance the placeholder is promoted to a label if no label is given.
                    return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
                };
                /**
                 * Determines whether to display hints or errors.
                 * @return {?}
                 */
                MatFormField.prototype._getDisplayedMessages = function () {
                    return (this._errorChildren && this._errorChildren.length > 0 &&
                        this._control.errorState) ? 'error' : 'hint';
                };
                /**
                 * Animates the placeholder up and locks it in position.
                 * @return {?}
                 */
                MatFormField.prototype._animateAndLockLabel = function () {
                    var _this = this;
                    if (this._hasFloatingLabel() && this._canLabelFloat) {
                        // If animations are disabled, we shouldn't go in here,
                        // because the `transitionend` will never fire.
                        if (this._animationsEnabled) {
                            this._showAlwaysAnimate = true;
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(( /**
                             * @return {?}
                             */function () {
                                _this._showAlwaysAnimate = false;
                            }));
                        }
                        this.floatLabel = 'always';
                        this._changeDetectorRef.markForCheck();
                    }
                };
                /**
                 * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
                 * or child element with the `mat-placeholder` directive).
                 * @private
                 * @return {?}
                 */
                MatFormField.prototype._validatePlaceholders = function () {
                    if (this._control.placeholder && this._placeholderChild) {
                        throw getMatFormFieldPlaceholderConflictError();
                    }
                };
                /**
                 * Does any extra processing that is required when handling the hints.
                 * @private
                 * @return {?}
                 */
                MatFormField.prototype._processHints = function () {
                    this._validateHints();
                    this._syncDescribedByIds();
                };
                /**
                 * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
                 * attribute being considered as `align="start"`.
                 * @private
                 * @return {?}
                 */
                MatFormField.prototype._validateHints = function () {
                    var _this = this;
                    if (this._hintChildren) {
                        /** @type {?} */
                        var startHint_1;
                        /** @type {?} */
                        var endHint_1;
                        this._hintChildren.forEach(( /**
                         * @param {?} hint
                         * @return {?}
                         */function (hint) {
                            if (hint.align === 'start') {
                                if (startHint_1 || _this.hintLabel) {
                                    throw getMatFormFieldDuplicatedHintError('start');
                                }
                                startHint_1 = hint;
                            }
                            else if (hint.align === 'end') {
                                if (endHint_1) {
                                    throw getMatFormFieldDuplicatedHintError('end');
                                }
                                endHint_1 = hint;
                            }
                        }));
                    }
                };
                /**
                 * Sets the list of element IDs that describe the child control. This allows the control to update
                 * its `aria-describedby` attribute accordingly.
                 * @private
                 * @return {?}
                 */
                MatFormField.prototype._syncDescribedByIds = function () {
                    if (this._control) {
                        /** @type {?} */
                        var ids = [];
                        if (this._getDisplayedMessages() === 'hint') {
                            /** @type {?} */
                            var startHint = this._hintChildren ?
                                this._hintChildren.find(( /**
                                 * @param {?} hint
                                 * @return {?}
                                 */function (/**
                                 * @param {?} hint
                                 * @return {?}
                                 */ hint) { return hint.align === 'start'; })) : null;
                            /** @type {?} */
                            var endHint = this._hintChildren ?
                                this._hintChildren.find(( /**
                                 * @param {?} hint
                                 * @return {?}
                                 */function (/**
                                 * @param {?} hint
                                 * @return {?}
                                 */ hint) { return hint.align === 'end'; })) : null;
                            if (startHint) {
                                ids.push(startHint.id);
                            }
                            else if (this._hintLabel) {
                                ids.push(this._hintLabelId);
                            }
                            if (endHint) {
                                ids.push(endHint.id);
                            }
                        }
                        else if (this._errorChildren) {
                            ids = this._errorChildren.map(( /**
                             * @param {?} error
                             * @return {?}
                             */function (/**
                             * @param {?} error
                             * @return {?}
                             */ error) { return error.id; }));
                        }
                        this._control.setDescribedByIds(ids);
                    }
                };
                /**
                 * Throws an error if the form field's control is missing.
                 * @protected
                 * @return {?}
                 */
                MatFormField.prototype._validateControlChild = function () {
                    if (!this._control) {
                        throw getMatFormFieldMissingControlError();
                    }
                };
                /**
                 * Updates the width and position of the gap in the outline. Only relevant for the outline
                 * appearance.
                 * @return {?}
                 */
                MatFormField.prototype.updateOutlineGap = function () {
                    var e_5, _a;
                    /** @type {?} */
                    var labelEl = this._label ? this._label.nativeElement : null;
                    if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
                        !labelEl.textContent.trim()) {
                        return;
                    }
                    if (!this._platform.isBrowser) {
                        // getBoundingClientRect isn't available on the server.
                        return;
                    }
                    // If the element is not present in the DOM, the outline gap will need to be calculated
                    // the next time it is checked and in the DOM.
                    if (!( /** @type {?} */(document.documentElement)).contains(this._elementRef.nativeElement)) {
                        this._outlineGapCalculationNeededImmediately = true;
                        return;
                    }
                    /** @type {?} */
                    var startWidth = 0;
                    /** @type {?} */
                    var gapWidth = 0;
                    /** @type {?} */
                    var container = this._connectionContainerRef.nativeElement;
                    /** @type {?} */
                    var startEls = container.querySelectorAll('.mat-form-field-outline-start');
                    /** @type {?} */
                    var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');
                    if (this._label && this._label.nativeElement.children.length) {
                        /** @type {?} */
                        var containerRect = container.getBoundingClientRect();
                        // If the container's width and height are zero, it means that the element is
                        // invisible and we can't calculate the outline gap. Mark the element as needing
                        // to be checked the next time the zone stabilizes. We can't do this immediately
                        // on the next change detection, because even if the element becomes visible,
                        // the `ClientRect` won't be reclaculated immediately. We reset the
                        // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
                        if (containerRect.width === 0 && containerRect.height === 0) {
                            this._outlineGapCalculationNeededOnStable = true;
                            this._outlineGapCalculationNeededImmediately = false;
                            return;
                        }
                        /** @type {?} */
                        var containerStart = this._getStartEnd(containerRect);
                        /** @type {?} */
                        var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
                        /** @type {?} */
                        var labelWidth = 0;
                        try {
                            for (var _b = __values(labelEl.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var child = _c.value;
                                labelWidth += child.offsetWidth;
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        startWidth = labelStart - containerStart - outlineGapPadding;
                        gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
                    }
                    for (var i = 0; i < startEls.length; i++) {
                        startEls.item(i).style.width = startWidth + "px";
                    }
                    for (var i = 0; i < gapEls.length; i++) {
                        gapEls.item(i).style.width = gapWidth + "px";
                    }
                    this._outlineGapCalculationNeededOnStable =
                        this._outlineGapCalculationNeededImmediately = false;
                };
                /**
                 * Gets the start end of the rect considering the current directionality.
                 * @private
                 * @param {?} rect
                 * @return {?}
                 */
                MatFormField.prototype._getStartEnd = function (rect) {
                    return this._previousDirection === 'rtl' ? rect.right : rect.left;
                };
                return MatFormField;
            }(_MatFormFieldMixinBase));
            MatFormField.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-form-field',
                            exportAs: 'matFormField',
                            template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
                            // MatInput is a directive and can't have styles, so we need to include its styles here
                            // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
                            // big deal for people who aren't using MatInput.
                            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
                            animations: [matFormFieldAnimations.transitionMessages],
                            host: {
                                'class': 'mat-form-field',
                                '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                                '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                                '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                                '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                                '[class.mat-form-field-invalid]': '_control.errorState',
                                '[class.mat-form-field-can-float]': '_canLabelFloat',
                                '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                                '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
                                '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                                '[class.mat-form-field-disabled]': '_control.disabled',
                                '[class.mat-form-field-autofilled]': '_control.autofilled',
                                '[class.mat-focused]': '_control.focused',
                                '[class.mat-accent]': 'color == "accent"',
                                '[class.mat-warn]': 'color == "warn"',
                                '[class.ng-untouched]': '_shouldForward("untouched")',
                                '[class.ng-touched]': '_shouldForward("touched")',
                                '[class.ng-pristine]': '_shouldForward("pristine")',
                                '[class.ng-dirty]': '_shouldForward("dirty")',
                                '[class.ng-valid]': '_shouldForward("valid")',
                                '[class.ng-invalid]': '_shouldForward("invalid")',
                                '[class.ng-pending]': '_shouldForward("pending")',
                                '[class._mat-animation-noopable]': '!_animationsEnabled',
                            },
                            inputs: ['color'],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatFormField.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"],] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatFormField.propDecorators = {
                appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['underline', { static: false },] }],
                _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['connectionContainer', { static: true },] }],
                _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputContainer', { static: false },] }],
                _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['label', { static: false },] }],
                _controlNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: false },] }],
                _controlStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: true },] }],
                _labelChildNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: false },] }],
                _labelChildStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: true },] }],
                _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatPlaceholder, { static: false },] }],
                _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatError,] }],
                _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatHint,] }],
                _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatPrefix,] }],
                _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatSuffix,] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatFormFieldModule = /** @class */ (function () {
                function MatFormFieldModule() {
                }
                return MatFormFieldModule;
            }());
            MatFormFieldModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [
                                MatError,
                                MatFormField,
                                MatHint,
                                MatLabel,
                                MatPlaceholder,
                                MatPrefix,
                                MatSuffix,
                            ],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"],
                            ],
                            exports: [
                                MatError,
                                MatFormField,
                                MatHint,
                                MatLabel,
                                MatPlaceholder,
                                MatPrefix,
                                MatSuffix,
                            ],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=form-field.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/paginator.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/paginator.js ***!
          \*************************************************************/
        /*! exports provided: MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () { return MatPaginatorModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function () { return PageEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function () { return MatPaginator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () { return MatPaginatorIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () { return MAT_PAGINATOR_INTL_PROVIDER; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
             * include it in a custom provider
             */
            var MatPaginatorIntl = /** @class */ (function () {
                function MatPaginatorIntl() {
                    /**
                     * Stream to emit from when labels are changed. Use this to notify components when the labels have
                     * changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    /**
                     * A label for the page size selector.
                     */
                    this.itemsPerPageLabel = 'Items per page:';
                    /**
                     * A label for the button that increments the current page.
                     */
                    this.nextPageLabel = 'Next page';
                    /**
                     * A label for the button that decrements the current page.
                     */
                    this.previousPageLabel = 'Previous page';
                    /**
                     * A label for the button that moves to the first page.
                     */
                    this.firstPageLabel = 'First page';
                    /**
                     * A label for the button that moves to the last page.
                     */
                    this.lastPageLabel = 'Last page';
                    /**
                     * A label for the range of items within the current page and the length of the whole list.
                     */
                    this.getRangeLabel = ( /**
                     * @param {?} page
                     * @param {?} pageSize
                     * @param {?} length
                     * @return {?}
                     */function (page, pageSize, length) {
                        if (length == 0 || pageSize == 0) {
                            return "0 of " + length;
                        }
                        length = Math.max(length, 0);
                        /** @type {?} */
                        var startIndex = page * pageSize;
                        // If the start index exceeds the list length, do not try and fix the end index to the end.
                        /** @type {?} */
                        var endIndex = startIndex < length ?
                            Math.min(startIndex + pageSize, length) :
                            startIndex + pageSize;
                        return startIndex + 1 + " \u2013 " + endIndex + " of " + length;
                    });
                }
                return MatPaginatorIntl;
            }());
            MatPaginatorIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentIntl
             * @return {?}
             */
            function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
                return parentIntl || new MatPaginatorIntl();
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_PAGINATOR_INTL_PROVIDER = {
                // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
                provide: MatPaginatorIntl,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
                useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The default page size if there is no page size and there are no provided page size options.
             * @type {?}
             */
            var DEFAULT_PAGE_SIZE = 50;
            /**
             * Change event object that is emitted when the user selects a
             * different page size or navigates to another page.
             */
            var PageEvent = /** @class */ (function () {
                function PageEvent() {
                }
                return PageEvent;
            }());
            // Boilerplate for applying mixins to MatPaginator.
            /**
             * \@docs-private
             */
            var MatPaginatorBase = /** @class */ (function () {
                function MatPaginatorBase() {
                }
                return MatPaginatorBase;
            }());
            /** @type {?} */
            var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(MatPaginatorBase));
            /**
             * Component to provide navigation between paged information. Displays the size of the current
             * page, user-selectable options to change that size, what items are being shown, and
             * navigational button to go to the previous or next page.
             */
            var MatPaginator = /** @class */ (function (_super) {
                __extends(MatPaginator, _super);
                /**
                 * @param {?} _intl
                 * @param {?} _changeDetectorRef
                 */
                function MatPaginator(_intl, _changeDetectorRef) {
                    var _this = _super.call(this) || this;
                    _this._intl = _intl;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._pageIndex = 0;
                    _this._length = 0;
                    _this._pageSizeOptions = [];
                    _this._hidePageSize = false;
                    _this._showFirstLastButtons = false;
                    /**
                     * Event emitted when the paginator changes the page size or page index.
                     */
                    _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._intlChanges = _intl.changes.subscribe(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                    return _this;
                }
                Object.defineProperty(MatPaginator.prototype, "pageIndex", {
                    /**
                     * The zero-based page index of the displayed list of items. Defaulted to 0.
                     * @return {?}
                     */
                    get: function () { return this._pageIndex; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "length", {
                    /**
                     * The length of the total number of items that are being paginated. Defaulted to 0.
                     * @return {?}
                     */
                    get: function () { return this._length; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "pageSize", {
                    /**
                     * Number of items to display on a page. By default set to 50.
                     * @return {?}
                     */
                    get: function () { return this._pageSize; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);
                        this._updateDisplayedPageSizeOptions();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
                    /**
                     * The set of provided page size options to display to the user.
                     * @return {?}
                     */
                    get: function () { return this._pageSizeOptions; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageSizeOptions = (value || []).map(( /**
                         * @param {?} p
                         * @return {?}
                         */function (/**
                         * @param {?} p
                         * @return {?}
                         */ p) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(p); }));
                        this._updateDisplayedPageSizeOptions();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
                    /**
                     * Whether to hide the page size selection UI from the user.
                     * @return {?}
                     */
                    get: function () { return this._hidePageSize; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
                    /**
                     * Whether to show the first/last buttons UI to the user.
                     * @return {?}
                     */
                    get: function () { return this._showFirstLastButtons; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatPaginator.prototype.ngOnInit = function () {
                    this._initialized = true;
                    this._updateDisplayedPageSizeOptions();
                    this._markInitialized();
                };
                /**
                 * @return {?}
                 */
                MatPaginator.prototype.ngOnDestroy = function () {
                    this._intlChanges.unsubscribe();
                };
                /**
                 * Advances to the next page if it exists.
                 * @return {?}
                 */
                MatPaginator.prototype.nextPage = function () {
                    if (!this.hasNextPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex++;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move back to the previous page if it exists.
                 * @return {?}
                 */
                MatPaginator.prototype.previousPage = function () {
                    if (!this.hasPreviousPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex--;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move to the first page if not already there.
                 * @return {?}
                 */
                MatPaginator.prototype.firstPage = function () {
                    // hasPreviousPage being false implies at the start
                    if (!this.hasPreviousPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = 0;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move to the last page if not already there.
                 * @return {?}
                 */
                MatPaginator.prototype.lastPage = function () {
                    // hasNextPage being false implies at the end
                    if (!this.hasNextPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = this.getNumberOfPages() - 1;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Whether there is a previous page.
                 * @return {?}
                 */
                MatPaginator.prototype.hasPreviousPage = function () {
                    return this.pageIndex >= 1 && this.pageSize != 0;
                };
                /**
                 * Whether there is a next page.
                 * @return {?}
                 */
                MatPaginator.prototype.hasNextPage = function () {
                    /** @type {?} */
                    var maxPageIndex = this.getNumberOfPages() - 1;
                    return this.pageIndex < maxPageIndex && this.pageSize != 0;
                };
                /**
                 * Calculate the number of pages
                 * @return {?}
                 */
                MatPaginator.prototype.getNumberOfPages = function () {
                    if (!this.pageSize) {
                        return 0;
                    }
                    return Math.ceil(this.length / this.pageSize);
                };
                /**
                 * Changes the page size so that the first item displayed on the page will still be
                 * displayed using the new page size.
                 *
                 * For example, if the page size is 10 and on the second page (items indexed 10-19) then
                 * switching so that the page size is 5 will set the third page as the current page so
                 * that the 10th item will still be displayed.
                 * @param {?} pageSize
                 * @return {?}
                 */
                MatPaginator.prototype._changePageSize = function (pageSize) {
                    // Current page needs to be updated to reflect the new page size. Navigate to the page
                    // containing the previous page's first item.
                    /** @type {?} */
                    var startIndex = this.pageIndex * this.pageSize;
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
                    this.pageSize = pageSize;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Checks whether the buttons for going forwards should be disabled.
                 * @return {?}
                 */
                MatPaginator.prototype._nextButtonsDisabled = function () {
                    return this.disabled || !this.hasNextPage();
                };
                /**
                 * Checks whether the buttons for going backwards should be disabled.
                 * @return {?}
                 */
                MatPaginator.prototype._previousButtonsDisabled = function () {
                    return this.disabled || !this.hasPreviousPage();
                };
                /**
                 * Updates the list of page size options to display to the user. Includes making sure that
                 * the page size is an option and that the list is sorted.
                 * @private
                 * @return {?}
                 */
                MatPaginator.prototype._updateDisplayedPageSizeOptions = function () {
                    if (!this._initialized) {
                        return;
                    }
                    // If no page size is provided, use the first page size option or the default page size.
                    if (!this.pageSize) {
                        this._pageSize = this.pageSizeOptions.length != 0 ?
                            this.pageSizeOptions[0] :
                            DEFAULT_PAGE_SIZE;
                    }
                    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
                    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
                        this._displayedPageSizeOptions.push(this.pageSize);
                    }
                    // Sort the numbers using a number-specific sort function.
                    this._displayedPageSizeOptions.sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) { return a - b; }));
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Emits an event notifying that a change of the paginator's properties has been triggered.
                 * @private
                 * @param {?} previousPageIndex
                 * @return {?}
                 */
                MatPaginator.prototype._emitPageEvent = function (previousPageIndex) {
                    this.page.emit({
                        previousPageIndex: previousPageIndex,
                        pageIndex: this.pageIndex,
                        pageSize: this.pageSize,
                        length: this.length
                    });
                };
                return MatPaginator;
            }(_MatPaginatorBase));
            MatPaginator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-paginator',
                            exportAs: 'matPaginator',
                            template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
                            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
                            inputs: ['disabled'],
                            host: {
                                'class': 'mat-paginator',
                            },
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                        },] },
            ];
            /** @nocollapse */
            MatPaginator.ctorParameters = function () { return [
                { type: MatPaginatorIntl },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            MatPaginator.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hidePageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showFirstLastButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatPaginatorModule = /** @class */ (function () {
                function MatPaginatorModule() {
                }
                return MatPaginatorModule;
            }());
            MatPaginatorModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                            ],
                            exports: [MatPaginator],
                            declarations: [MatPaginator],
                            providers: [MAT_PAGINATOR_INTL_PROVIDER],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=paginator.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/select.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/select.js ***!
          \**********************************************************/
        /*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () { return MatSelectModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () { return SELECT_PANEL_MAX_HEIGHT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () { return SELECT_PANEL_PADDING_X; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () { return SELECT_PANEL_INDENT_PADDING_X; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () { return SELECT_ITEM_HEIGHT_EM; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () { return SELECT_MULTIPLE_PANEL_PADDING_X; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () { return SELECT_PANEL_VIEWPORT_PADDING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () { return MAT_SELECT_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () { return MatSelectChange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () { return MatSelectTrigger; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function () { return MatSelect; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () { return matSelectAnimations; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function () { return transformPanel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function () { return fadeInContent; });
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The following are all the animations for the mat-select component, with each
             * const containing the metadata for one animation.
             *
             * The values below match the implementation of the AngularJS Material mat-select animation.
             * \@docs-private
             * @type {?}
             */
            var matSelectAnimations = {
                /**
                 * This animation ensures the select's overlay panel animation (transformPanel) is called when
                 * closing the select.
                 * This is needed due to https://github.com/angular/angular/issues/23302
                 */
                transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanelWrap', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], { optional: true }))
                ]),
                /**
                 * This animation transforms the select's overlay panel on and off the page.
                 *
                 * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
                 * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
                 * side to ensure the option text correctly overlaps the trigger text.
                 *
                 * When the panel is removed from the DOM, it simply fades out linearly.
                 */
                transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scaleY(0.8)',
                        minWidth: '100%',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        minWidth: 'calc(100% + 32px)',
                        // 32px = 2 * 16px padding
                        transform: 'scaleY(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        minWidth: 'calc(100% + 64px)',
                        // 64px = 48px padding on the left + 16px padding on the right
                        transform: 'scaleY(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
                ]),
                /**
                 * This animation fades in the background color and text content of the
                 * select's options. It is time delayed to occur 100ms after the overlay
                 * panel has transformed in.
                 * @deprecated Not used anymore. To be removed.
                 * \@breaking-change 8.0.0
                 */
                fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
                    ])
                ])
            };
            /**
             * @deprecated
             * \@breaking-change 8.0.0
             * \@docs-private
             * @type {?}
             */
            var transformPanel = matSelectAnimations.transformPanel;
            /**
             * @deprecated
             * \@breaking-change 8.0.0
             * \@docs-private
             * @type {?}
             */
            var fadeInContent = matSelectAnimations.fadeInContent;
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Returns an exception to be thrown when attempting to change a select's `multiple` option
             * after initialization.
             * \@docs-private
             * @return {?}
             */
            function getMatSelectDynamicMultipleError() {
                return Error('Cannot change `multiple` mode of select after initialization.');
            }
            /**
             * Returns an exception to be thrown when attempting to assign a non-array value to a select
             * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
             * resetting the value.
             * \@docs-private
             * @return {?}
             */
            function getMatSelectNonArrayValueError() {
                return Error('Value must be an array in multiple-selection mode.');
            }
            /**
             * Returns an exception to be thrown when assigning a non-function value to the comparator
             * used to determine if a value corresponds to an option. Note that whether the function
             * actually takes two values and returns a boolean is not checked.
             * @return {?}
             */
            function getMatSelectNonFunctionValueError() {
                return Error('`compareWith` must be a function.');
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var nextUniqueId = 0;
            /**
             * The max height of the select's overlay panel
             * @type {?}
             */
            var SELECT_PANEL_MAX_HEIGHT = 256;
            /**
             * The panel's padding on the x-axis
             * @type {?}
             */
            var SELECT_PANEL_PADDING_X = 16;
            /**
             * The panel's x axis padding if it is indented (e.g. there is an option group).
             * @type {?}
             */
            var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
            /**
             * The height of the select items in `em` units.
             * @type {?}
             */
            var SELECT_ITEM_HEIGHT_EM = 3;
            // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
            /**
             * Distance between the panel edge and the option text in
             * multi-selection mode.
             *
             * Calculated as:
             * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
             * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
             * The checkbox width is 16px.
             * @type {?}
             */
            var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
            /**
             * The select panel will only "fit" inside the viewport if it is positioned at
             * this value or more away from the viewport boundary.
             * @type {?}
             */
            var SELECT_PANEL_VIEWPORT_PADDING = 8;
            /**
             * Injection token that determines the scroll handling while a select is open.
             * @type {?}
             */
            var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.reposition(); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
                provide: MAT_SELECT_SCROLL_STRATEGY,
                deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
                useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
            };
            /**
             * Change event object that is emitted when the select value has changed.
             */
            var MatSelectChange = /** @class */ (function () {
                /**
                 * @param {?} source
                 * @param {?} value
                 */
                function MatSelectChange(source, value) {
                    this.source = source;
                    this.value = value;
                }
                return MatSelectChange;
            }());
            // Boilerplate for applying mixins to MatSelect.
            /**
             * \@docs-private
             */
            var MatSelectBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _defaultErrorStateMatcher
                 * @param {?} _parentForm
                 * @param {?} _parentFormGroup
                 * @param {?} ngControl
                 */
                function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
                    this._elementRef = _elementRef;
                    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
                    this._parentForm = _parentForm;
                    this._parentFormGroup = _parentFormGroup;
                    this.ngControl = ngControl;
                }
                return MatSelectBase;
            }());
            /** @type {?} */
            var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
            /**
             * Allows the user to customize the trigger that is displayed when the select has a value.
             */
            var MatSelectTrigger = /** @class */ (function () {
                function MatSelectTrigger() {
                }
                return MatSelectTrigger;
            }());
            MatSelectTrigger.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"], args: [{
                            selector: 'mat-select-trigger'
                        },] },
            ];
            var MatSelect = /** @class */ (function (_super) {
                __extends(MatSelect, _super);
                /**
                 * @param {?} _viewportRuler
                 * @param {?} _changeDetectorRef
                 * @param {?} _ngZone
                 * @param {?} _defaultErrorStateMatcher
                 * @param {?} elementRef
                 * @param {?} _dir
                 * @param {?} _parentForm
                 * @param {?} _parentFormGroup
                 * @param {?} _parentFormField
                 * @param {?} ngControl
                 * @param {?} tabIndex
                 * @param {?} scrollStrategyFactory
                 * @param {?=} _liveAnnouncer
                 */
                function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer) {
                    var _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
                    _this._viewportRuler = _viewportRuler;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._ngZone = _ngZone;
                    _this._dir = _dir;
                    _this._parentFormField = _parentFormField;
                    _this.ngControl = ngControl;
                    _this._liveAnnouncer = _liveAnnouncer;
                    /**
                     * Whether or not the overlay panel is open.
                     */
                    _this._panelOpen = false;
                    /**
                     * Whether filling out the select is required in the form.
                     */
                    _this._required = false;
                    /**
                     * The scroll position of the overlay panel, calculated to center the selected option.
                     */
                    _this._scrollTop = 0;
                    /**
                     * Whether the component is in multiple selection mode.
                     */
                    _this._multiple = false;
                    /**
                     * Comparison function to specify which option is displayed. Defaults to object equality.
                     */
                    _this._compareWith = ( /**
                     * @param {?} o1
                     * @param {?} o2
                     * @return {?}
                     */function (o1, o2) { return o1 === o2; });
                    /**
                     * Unique id for this input.
                     */
                    _this._uid = "mat-select-" + nextUniqueId++;
                    /**
                     * Emits whenever the component is destroyed.
                     */
                    _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
                    /**
                     * The cached font-size of the trigger element.
                     */
                    _this._triggerFontSize = 0;
                    /**
                     * `View -> model callback called when value changes`
                     */
                    _this._onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * `View -> model callback called when select has been touched`
                     */
                    _this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * The IDs of child options to be passed to the aria-owns attribute.
                     */
                    _this._optionIds = '';
                    /**
                     * The value of the select panel's transform-origin property.
                     */
                    _this._transformOrigin = 'top';
                    /**
                     * Emits when the panel element is finished transforming in.
                     */
                    _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
                    /**
                     * The y-offset of the overlay panel in relation to the trigger's top start corner.
                     * This must be adjusted to align the selected option text over the trigger text.
                     * when the panel opens. Will change based on the y-position of the selected option.
                     */
                    _this._offsetY = 0;
                    /**
                     * This position config ensures that the top "start" corner of the overlay
                     * is aligned with with the top "start" of the origin by default (overlapping
                     * the trigger completely). If the panel cannot fit below the trigger, it
                     * will fall back to a position above the trigger.
                     */
                    _this._positions = [
                        {
                            originX: 'start',
                            originY: 'top',
                            overlayX: 'start',
                            overlayY: 'top',
                        },
                        {
                            originX: 'start',
                            originY: 'bottom',
                            overlayX: 'start',
                            overlayY: 'bottom',
                        },
                    ];
                    /**
                     * Whether the component is disabling centering of the active option over the trigger.
                     */
                    _this._disableOptionCentering = false;
                    _this._focused = false;
                    /**
                     * A name for this control that can be used by `mat-form-field`.
                     */
                    _this.controlType = 'mat-select';
                    /**
                     * Aria label of the select. If not specified, the placeholder will be used as label.
                     */
                    _this.ariaLabel = '';
                    /**
                     * Combined stream of all of the child options' change events.
                     */
                    _this.optionSelectionChanges = ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var options = _this.options;
                        if (options) {
                            return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(( /**
                             * @return {?}
                             */function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, __spread(options.map(( /**
                             * @param {?} option
                             * @return {?}
                             */function (/**
                             * @param {?} option
                             * @return {?}
                             */ option) { return option.onSelectionChange; })))); })));
                        }
                        return _this._ngZone.onStable
                            .asObservable()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(( /**
                     * @return {?}
                     */function () { return _this.optionSelectionChanges; })));
                    }))));
                    /**
                     * Event emitted when the select panel has been toggled.
                     */
                    _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                    /**
                     * Event emitted when the select has been opened.
                     */
                    _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(( /**
                     * @param {?} o
                     * @return {?}
                     */function (/**
                     * @param {?} o
                     * @return {?}
                     */ o) { return o; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(( /**
                     * @return {?}
                     */function () { })));
                    /**
                     * Event emitted when the select has been closed.
                     */
                    _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(( /**
                     * @param {?} o
                     * @return {?}
                     */function (/**
                     * @param {?} o
                     * @return {?}
                     */ o) { return !o; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(( /**
                     * @return {?}
                     */function () { })));
                    /**
                     * Event emitted when the selected value has been changed by the user.
                     */
                    _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                    /**
                     * Event that emits whenever the raw value of the select changes. This is here primarily
                     * to facilitate the two-way binding for the `value` input.
                     * \@docs-private
                     */
                    _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
                    if (_this.ngControl) {
                        // Note: we provide the value accessor through here, instead of
                        // the `providers` to avoid running into a circular import.
                        _this.ngControl.valueAccessor = _this;
                    }
                    _this._scrollStrategyFactory = scrollStrategyFactory;
                    _this._scrollStrategy = _this._scrollStrategyFactory();
                    _this.tabIndex = parseInt(tabIndex) || 0;
                    // Force setter to be called in case id was not specified.
                    _this.id = _this.id;
                    return _this;
                }
                Object.defineProperty(MatSelect.prototype, "focused", {
                    /**
                     * Whether the select is focused.
                     * @return {?}
                     */
                    get: function () {
                        return this._focused || this._panelOpen;
                    },
                    /**
                     * @deprecated Setter to be removed as this property is intended to be readonly.
                     * \@breaking-change 8.0.0
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._focused = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "placeholder", {
                    /**
                     * Placeholder to be shown if no value has been selected.
                     * @return {?}
                     */
                    get: function () { return this._placeholder; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._placeholder = value;
                        this.stateChanges.next();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "required", {
                    /**
                     * Whether the component is required.
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                        this.stateChanges.next();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "multiple", {
                    /**
                     * Whether the user should be allowed to select multiple options.
                     * @return {?}
                     */
                    get: function () { return this._multiple; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._selectionModel) {
                            throw getMatSelectDynamicMultipleError();
                        }
                        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "disableOptionCentering", {
                    /**
                     * Whether to center the active option over the trigger.
                     * @return {?}
                     */
                    get: function () { return this._disableOptionCentering; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "compareWith", {
                    /**
                     * Function to compare the option values with the selected values. The first argument
                     * is a value from an option. The second is a value from the selection. A boolean
                     * should be returned.
                     * @return {?}
                     */
                    get: function () { return this._compareWith; },
                    /**
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw getMatSelectNonFunctionValueError();
                        }
                        this._compareWith = fn;
                        if (this._selectionModel) {
                            // A different comparator means the selection could change.
                            this._initializeSelection();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "value", {
                    /**
                     * Value of the select control.
                     * @return {?}
                     */
                    get: function () { return this._value; },
                    /**
                     * @param {?} newValue
                     * @return {?}
                     */
                    set: function (newValue) {
                        if (newValue !== this._value) {
                            this.writeValue(newValue);
                            this._value = newValue;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "id", {
                    /**
                     * Unique id of the element.
                     * @return {?}
                     */
                    get: function () { return this._id; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._id = value || this._uid;
                        this.stateChanges.next();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatSelect.prototype.ngOnInit = function () {
                    var _this = this;
                    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.multiple);
                    this.stateChanges.next();
                    // We need `distinctUntilChanged` here, because some browsers will
                    // fire the animation end event twice for the same animation. See:
                    // https://github.com/angular/angular/issues/24084
                    this._panelDoneAnimatingStream
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        if (_this.panelOpen) {
                            _this._scrollTop = 0;
                            _this.openedChange.emit(true);
                        }
                        else {
                            _this.openedChange.emit(false);
                            _this.overlayDir.offsetX = 0;
                            _this._changeDetectorRef.markForCheck();
                        }
                    }));
                    this._viewportRuler.change()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        if (_this._panelOpen) {
                            _this._triggerRect = _this.trigger.nativeElement.getBoundingClientRect();
                            _this._changeDetectorRef.markForCheck();
                        }
                    }));
                };
                /**
                 * @return {?}
                 */
                MatSelect.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._initKeyManager();
                    this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        event.added.forEach(( /**
                         * @param {?} option
                         * @return {?}
                         */function (/**
                         * @param {?} option
                         * @return {?}
                         */ option) { return option.select(); }));
                        event.removed.forEach(( /**
                         * @param {?} option
                         * @return {?}
                         */function (/**
                         * @param {?} option
                         * @return {?}
                         */ option) { return option.deselect(); }));
                    }));
                    this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._resetOptions();
                        _this._initializeSelection();
                    }));
                };
                /**
                 * @return {?}
                 */
                MatSelect.prototype.ngDoCheck = function () {
                    if (this.ngControl) {
                        this.updateErrorState();
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatSelect.prototype.ngOnChanges = function (changes) {
                    // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
                    // the parent form field know to run change detection when the disabled state changes.
                    if (changes['disabled']) {
                        this.stateChanges.next();
                    }
                    if (changes['typeaheadDebounceInterval'] && this._keyManager) {
                        this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
                    }
                };
                /**
                 * @return {?}
                 */
                MatSelect.prototype.ngOnDestroy = function () {
                    this._destroy.next();
                    this._destroy.complete();
                    this.stateChanges.complete();
                };
                /**
                 * Toggles the overlay panel open or closed.
                 * @return {?}
                 */
                MatSelect.prototype.toggle = function () {
                    this.panelOpen ? this.close() : this.open();
                };
                /**
                 * Opens the overlay panel.
                 * @return {?}
                 */
                MatSelect.prototype.open = function () {
                    var _this = this;
                    if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
                        return;
                    }
                    this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                    // Note: The computed font-size will be a string pixel value (e.g. "16px").
                    // `parseInt` ignores the trailing 'px' and converts this to a number.
                    this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
                    this._panelOpen = true;
                    this._keyManager.withHorizontalOrientation(null);
                    this._calculateOverlayPosition();
                    this._highlightCorrectOption();
                    this._changeDetectorRef.markForCheck();
                    // Set the font size on the panel element once it exists.
                    this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this._triggerFontSize && _this.overlayDir.overlayRef &&
                            _this.overlayDir.overlayRef.overlayElement) {
                            _this.overlayDir.overlayRef.overlayElement.style.fontSize = _this._triggerFontSize + "px";
                        }
                    }));
                };
                /**
                 * Closes the overlay panel and focuses the host element.
                 * @return {?}
                 */
                MatSelect.prototype.close = function () {
                    if (this._panelOpen) {
                        this._panelOpen = false;
                        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
                        this._changeDetectorRef.markForCheck();
                        this._onTouched();
                    }
                };
                /**
                 * Sets the select's value. Part of the ControlValueAccessor interface
                 * required to integrate with Angular's core forms API.
                 *
                 * @param {?} value New value to be written to the model.
                 * @return {?}
                 */
                MatSelect.prototype.writeValue = function (value) {
                    if (this.options) {
                        this._setSelectionByValue(value);
                    }
                };
                /**
                 * Saves a callback function to be invoked when the select's value
                 * changes from user input. Part of the ControlValueAccessor interface
                 * required to integrate with Angular's core forms API.
                 *
                 * @param {?} fn Callback to be triggered when the value changes.
                 * @return {?}
                 */
                MatSelect.prototype.registerOnChange = function (fn) {
                    this._onChange = fn;
                };
                /**
                 * Saves a callback function to be invoked when the select is blurred
                 * by the user. Part of the ControlValueAccessor interface required
                 * to integrate with Angular's core forms API.
                 *
                 * @param {?} fn Callback to be triggered when the component has been touched.
                 * @return {?}
                 */
                MatSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouched = fn;
                };
                /**
                 * Disables the select. Part of the ControlValueAccessor interface required
                 * to integrate with Angular's core forms API.
                 *
                 * @param {?} isDisabled Sets whether the component is disabled.
                 * @return {?}
                 */
                MatSelect.prototype.setDisabledState = function (isDisabled) {
                    this.disabled = isDisabled;
                    this._changeDetectorRef.markForCheck();
                    this.stateChanges.next();
                };
                Object.defineProperty(MatSelect.prototype, "panelOpen", {
                    /**
                     * Whether or not the overlay panel is open.
                     * @return {?}
                     */
                    get: function () {
                        return this._panelOpen;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "selected", {
                    /**
                     * The currently selected option.
                     * @return {?}
                     */
                    get: function () {
                        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSelect.prototype, "triggerValue", {
                    /**
                     * The value displayed in the trigger.
                     * @return {?}
                     */
                    get: function () {
                        if (this.empty) {
                            return '';
                        }
                        if (this._multiple) {
                            /** @type {?} */
                            var selectedOptions = this._selectionModel.selected.map(( /**
                             * @param {?} option
                             * @return {?}
                             */function (/**
                             * @param {?} option
                             * @return {?}
                             */ option) { return option.viewValue; }));
                            if (this._isRtl()) {
                                selectedOptions.reverse();
                            }
                            // TODO(crisbeto): delimiter should be configurable for proper localization.
                            return selectedOptions.join(', ');
                        }
                        return this._selectionModel.selected[0].viewValue;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Whether the element is in RTL mode.
                 * @return {?}
                 */
                MatSelect.prototype._isRtl = function () {
                    return this._dir ? this._dir.value === 'rtl' : false;
                };
                /**
                 * Handles all keydown events on the select.
                 * @param {?} event
                 * @return {?}
                 */
                MatSelect.prototype._handleKeydown = function (event) {
                    if (!this.disabled) {
                        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
                    }
                };
                /**
                 * Handles keyboard events while the select is closed.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                MatSelect.prototype._handleClosedKeydown = function (event) {
                    /** @type {?} */
                    var keyCode = event.keyCode;
                    /** @type {?} */
                    var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] ||
                        keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"];
                    /** @type {?} */
                    var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"];
                    /** @type {?} */
                    var manager = this._keyManager;
                    // Open the select on ALT + arrow key to match the native <select>
                    if ((isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) || ((this.multiple || event.altKey) && isArrowKey)) {
                        event.preventDefault(); // prevents the page from scrolling down when pressing space
                        this.open();
                    }
                    else if (!this.multiple) {
                        /** @type {?} */
                        var previouslySelectedOption = this.selected;
                        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
                            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                            event.preventDefault();
                        }
                        else {
                            manager.onKeydown(event);
                        }
                        /** @type {?} */
                        var selectedOption = this.selected;
                        // Since the value has changed, we need to announce it ourselves.
                        // @breaking-change 8.0.0 remove null check for _liveAnnouncer.
                        if (this._liveAnnouncer && selectedOption && previouslySelectedOption !== selectedOption) {
                            // We set a duration on the live announcement, because we want the live element to be
                            // cleared after a while so that users can't navigate to it using the arrow keys.
                            this._liveAnnouncer.announce((( /** @type {?} */(selectedOption))).viewValue, 10000);
                        }
                    }
                };
                /**
                 * Handles keyboard events when the selected is open.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                MatSelect.prototype._handleOpenKeydown = function (event) {
                    /** @type {?} */
                    var keyCode = event.keyCode;
                    /** @type {?} */
                    var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"];
                    /** @type {?} */
                    var manager = this._keyManager;
                    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
                        event.preventDefault();
                        keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                    }
                    else if (isArrowKey && event.altKey) {
                        // Close the select on ALT + arrow key to match the native <select>
                        event.preventDefault();
                        this.close();
                    }
                    else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]) && manager.activeItem &&
                        !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) {
                        event.preventDefault();
                        manager.activeItem._selectViaInteraction();
                    }
                    else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["A"] && event.ctrlKey) {
                        event.preventDefault();
                        /** @type {?} */
                        var hasDeselectedOptions_1 = this.options.some(( /**
                         * @param {?} opt
                         * @return {?}
                         */function (/**
                         * @param {?} opt
                         * @return {?}
                         */ opt) { return !opt.disabled && !opt.selected; }));
                        this.options.forEach(( /**
                         * @param {?} option
                         * @return {?}
                         */function (/**
                         * @param {?} option
                         * @return {?}
                         */ option) {
                            if (!option.disabled) {
                                hasDeselectedOptions_1 ? option.select() : option.deselect();
                            }
                        }));
                    }
                    else {
                        /** @type {?} */
                        var previouslyFocusedIndex = manager.activeItemIndex;
                        manager.onKeydown(event);
                        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                            manager.activeItemIndex !== previouslyFocusedIndex) {
                            manager.activeItem._selectViaInteraction();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                MatSelect.prototype._onFocus = function () {
                    if (!this.disabled) {
                        this._focused = true;
                        this.stateChanges.next();
                    }
                };
                /**
                 * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
                 * "blur" to the panel when it opens, causing a false positive.
                 * @return {?}
                 */
                MatSelect.prototype._onBlur = function () {
                    this._focused = false;
                    if (!this.disabled && !this.panelOpen) {
                        this._onTouched();
                        this._changeDetectorRef.markForCheck();
                        this.stateChanges.next();
                    }
                };
                /**
                 * Callback that is invoked when the overlay panel has been attached.
                 * @return {?}
                 */
                MatSelect.prototype._onAttached = function () {
                    var _this = this;
                    this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._changeDetectorRef.detectChanges();
                        _this._calculateOverlayOffsetX();
                        _this.panel.nativeElement.scrollTop = _this._scrollTop;
                    }));
                };
                /**
                 * Returns the theme to be used on the panel.
                 * @return {?}
                 */
                MatSelect.prototype._getPanelTheme = function () {
                    return this._parentFormField ? "mat-" + this._parentFormField.color : '';
                };
                Object.defineProperty(MatSelect.prototype, "empty", {
                    /**
                     * Whether the select has a value.
                     * @return {?}
                     */
                    get: function () {
                        return !this._selectionModel || this._selectionModel.isEmpty();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._initializeSelection = function () {
                    var _this = this;
                    // Defer setting the value in order to avoid the "Expression
                    // has changed after it was checked" errors from Angular.
                    Promise.resolve().then(( /**
                     * @return {?}
                     */function () {
                        _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value);
                        _this.stateChanges.next();
                    }));
                };
                /**
                 * Sets the selected option based on a value. If no option can be
                 * found with the designated value, the select trigger is cleared.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatSelect.prototype._setSelectionByValue = function (value) {
                    var _this = this;
                    if (this.multiple && value) {
                        if (!Array.isArray(value)) {
                            throw getMatSelectNonArrayValueError();
                        }
                        this._selectionModel.clear();
                        value.forEach(( /**
                         * @param {?} currentValue
                         * @return {?}
                         */function (currentValue) { return _this._selectValue(currentValue); }));
                        this._sortValues();
                    }
                    else {
                        this._selectionModel.clear();
                        /** @type {?} */
                        var correspondingOption = this._selectValue(value);
                        // Shift focus to the active item. Note that we shouldn't do this in multiple
                        // mode, because we don't know what option the user interacted with last.
                        if (correspondingOption) {
                            this._keyManager.setActiveItem(correspondingOption);
                        }
                        else if (!this.panelOpen) {
                            // Otherwise reset the highlighted option. Note that we only want to do this while
                            // closed, because doing it while open can shift the user's focus unnecessarily.
                            this._keyManager.setActiveItem(-1);
                        }
                    }
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Finds and selects and option based on its value.
                 * @private
                 * @param {?} value
                 * @return {?} Option that has the corresponding value.
                 */
                MatSelect.prototype._selectValue = function (value) {
                    var _this = this;
                    /** @type {?} */
                    var correspondingOption = this.options.find(( /**
                     * @param {?} option
                     * @return {?}
                     */function (option) {
                        try {
                            // Treat null as a special reset value.
                            return option.value != null && _this._compareWith(option.value, value);
                        }
                        catch (error) {
                            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
                                // Notify developers of errors in their comparator.
                                console.warn(error);
                            }
                            return false;
                        }
                    }));
                    if (correspondingOption) {
                        this._selectionModel.select(correspondingOption);
                    }
                    return correspondingOption;
                };
                /**
                 * Sets up a key manager to listen to keyboard events on the overlay panel.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._initKeyManager = function () {
                    var _this = this;
                    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendantKeyManager"](this.options)
                        .withTypeAhead(this.typeaheadDebounceInterval)
                        .withVerticalOrientation()
                        .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
                        .withAllowedModifierKeys(['shiftKey']);
                    this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(( /**
                     * @return {?}
                     */function () {
                        // Restore focus to the trigger before closing. Ensures that the focus
                        // position won't be lost if the user got focus into the overlay.
                        _this.focus();
                        _this.close();
                    }));
                    this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this._panelOpen && _this.panel) {
                            _this._scrollActiveOptionIntoView();
                        }
                        else if (!_this._panelOpen && !_this.multiple && _this._keyManager.activeItem) {
                            _this._keyManager.activeItem._selectViaInteraction();
                        }
                    }));
                };
                /**
                 * Drops current option subscriptions and IDs and resets from scratch.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._resetOptions = function () {
                    var _this = this;
                    /** @type {?} */
                    var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
                    this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this._onSelect(event.source, event.isUserInput);
                        if (event.isUserInput && !_this.multiple && _this._panelOpen) {
                            _this.close();
                            _this.focus();
                        }
                    }));
                    // Listen to changes in the internal state of the options and react accordingly.
                    // Handles cases like the labels of the selected options changing.
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, __spread(this.options.map(( /**
                     * @param {?} option
                     * @return {?}
                     */function (/**
                     * @param {?} option
                     * @return {?}
                     */ option) { return option._stateChanges; })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this._changeDetectorRef.markForCheck();
                        _this.stateChanges.next();
                    }));
                    this._setOptionIds();
                };
                /**
                 * Invoked when an option is clicked.
                 * @private
                 * @param {?} option
                 * @param {?} isUserInput
                 * @return {?}
                 */
                MatSelect.prototype._onSelect = function (option, isUserInput) {
                    /** @type {?} */
                    var wasSelected = this._selectionModel.isSelected(option);
                    if (option.value == null && !this._multiple) {
                        option.deselect();
                        this._selectionModel.clear();
                        this._propagateChanges(option.value);
                    }
                    else {
                        if (wasSelected !== option.selected) {
                            option.selected ? this._selectionModel.select(option) :
                                this._selectionModel.deselect(option);
                        }
                        if (isUserInput) {
                            this._keyManager.setActiveItem(option);
                        }
                        if (this.multiple) {
                            this._sortValues();
                            if (isUserInput) {
                                // In case the user selected the option with their mouse, we
                                // want to restore focus back to the trigger, in order to
                                // prevent the select keyboard controls from clashing with
                                // the ones from `mat-option`.
                                this.focus();
                            }
                        }
                    }
                    if (wasSelected !== this._selectionModel.isSelected(option)) {
                        this._propagateChanges();
                    }
                    this.stateChanges.next();
                };
                /**
                 * Sorts the selected values in the selected based on their order in the panel.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._sortValues = function () {
                    var _this = this;
                    if (this.multiple) {
                        /** @type {?} */
                        var options_1 = this.options.toArray();
                        this._selectionModel.sort(( /**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */function (a, b) {
                            return _this.sortComparator ? _this.sortComparator(a, b, options_1) :
                                options_1.indexOf(a) - options_1.indexOf(b);
                        }));
                        this.stateChanges.next();
                    }
                };
                /**
                 * Emits change event to set the model value.
                 * @private
                 * @param {?=} fallbackValue
                 * @return {?}
                 */
                MatSelect.prototype._propagateChanges = function (fallbackValue) {
                    /** @type {?} */
                    var valueToEmit = null;
                    if (this.multiple) {
                        valueToEmit = (( /** @type {?} */(this.selected))).map(( /**
                         * @param {?} option
                         * @return {?}
                         */function (/**
                         * @param {?} option
                         * @return {?}
                         */ option) { return option.value; }));
                    }
                    else {
                        valueToEmit = this.selected ? (( /** @type {?} */(this.selected))).value : fallbackValue;
                    }
                    this._value = valueToEmit;
                    this.valueChange.emit(valueToEmit);
                    this._onChange(valueToEmit);
                    this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Records option IDs to pass to the aria-owns property.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._setOptionIds = function () {
                    this._optionIds = this.options.map(( /**
                     * @param {?} option
                     * @return {?}
                     */function (/**
                     * @param {?} option
                     * @return {?}
                     */ option) { return option.id; })).join(' ');
                };
                /**
                 * Highlights the selected item. If no option is selected, it will highlight
                 * the first item instead.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._highlightCorrectOption = function () {
                    if (this._keyManager) {
                        if (this.empty) {
                            this._keyManager.setFirstItemActive();
                        }
                        else {
                            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
                        }
                    }
                };
                /**
                 * Scrolls the active option into view.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._scrollActiveOptionIntoView = function () {
                    /** @type {?} */
                    var activeOptionIndex = this._keyManager.activeItemIndex || 0;
                    /** @type {?} */
                    var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
                    this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
                };
                /**
                 * Focuses the select element.
                 * @param {?=} options
                 * @return {?}
                 */
                MatSelect.prototype.focus = function (options) {
                    this._elementRef.nativeElement.focus(options);
                };
                /**
                 * Gets the index of the provided option in the option list.
                 * @private
                 * @param {?} option
                 * @return {?}
                 */
                MatSelect.prototype._getOptionIndex = function (option) {
                    return this.options.reduce(( /**
                     * @param {?} result
                     * @param {?} current
                     * @param {?} index
                     * @return {?}
                     */function (result, current, index) {
                        return result === undefined ? (option === current ? index : undefined) : result;
                    }), undefined);
                };
                /**
                 * Calculates the scroll position and x- and y-offsets of the overlay panel.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._calculateOverlayPosition = function () {
                    /** @type {?} */
                    var itemHeight = this._getItemHeight();
                    /** @type {?} */
                    var items = this._getItemCount();
                    /** @type {?} */
                    var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
                    /** @type {?} */
                    var scrollContainerHeight = items * itemHeight;
                    // The farthest the panel can be scrolled before it hits the bottom
                    /** @type {?} */
                    var maxScroll = scrollContainerHeight - panelHeight;
                    // If no value is selected we open the popup to the first item.
                    /** @type {?} */
                    var selectedOptionOffset = this.empty ? 0 : ( /** @type {?} */(this._getOptionIndex(this._selectionModel.selected[0])));
                    selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
                    // We must maintain a scroll buffer so the selected option will be scrolled to the
                    // center of the overlay panel rather than the top.
                    /** @type {?} */
                    var scrollBuffer = panelHeight / 2;
                    this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
                    this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
                    this._checkOverlayWithinViewport(maxScroll);
                };
                /**
                 * Calculates the scroll position of the select's overlay panel.
                 *
                 * Attempts to center the selected option in the panel. If the option is
                 * too high or too low in the panel to be scrolled to the center, it clamps the
                 * scroll position to the min or max scroll positions respectively.
                 * @param {?} selectedIndex
                 * @param {?} scrollBuffer
                 * @param {?} maxScroll
                 * @return {?}
                 */
                MatSelect.prototype._calculateOverlayScroll = function (selectedIndex, scrollBuffer, maxScroll) {
                    /** @type {?} */
                    var itemHeight = this._getItemHeight();
                    /** @type {?} */
                    var optionOffsetFromScrollTop = itemHeight * selectedIndex;
                    /** @type {?} */
                    var halfOptionHeight = itemHeight / 2;
                    // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
                    // scroll container, then subtracts the scroll buffer to scroll the option down to
                    // the center of the overlay panel. Half the option height must be re-added to the
                    // scrollTop so the option is centered based on its middle, not its top edge.
                    /** @type {?} */
                    var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
                    return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
                };
                /**
                 * Returns the aria-label of the select component.
                 * @return {?}
                 */
                MatSelect.prototype._getAriaLabel = function () {
                    // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
                    // `aria-labelledby` value by setting the ariaLabel to the placeholder.
                    return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
                };
                /**
                 * Returns the aria-labelledby of the select component.
                 * @return {?}
                 */
                MatSelect.prototype._getAriaLabelledby = function () {
                    if (this.ariaLabelledby) {
                        return this.ariaLabelledby;
                    }
                    // Note: we use `_getAriaLabel` here, because we want to check whether there's a
                    // computed label. `this.ariaLabel` is only the user-specified label.
                    if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() ||
                        this._getAriaLabel()) {
                        return null;
                    }
                    return this._parentFormField._labelId || null;
                };
                /**
                 * Determines the `aria-activedescendant` to be set on the host.
                 * @return {?}
                 */
                MatSelect.prototype._getAriaActiveDescendant = function () {
                    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
                        return this._keyManager.activeItem.id;
                    }
                    return null;
                };
                /**
                 * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
                 * This must be adjusted to align the selected option text over the trigger text when
                 * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
                 * can't be calculated until the panel has been attached, because we need to know the
                 * content width in order to constrain the panel within the viewport.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._calculateOverlayOffsetX = function () {
                    /** @type {?} */
                    var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
                    /** @type {?} */
                    var viewportSize = this._viewportRuler.getViewportSize();
                    /** @type {?} */
                    var isRtl = this._isRtl();
                    /** @type {?} */
                    var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
                        SELECT_PANEL_PADDING_X * 2;
                    /** @type {?} */
                    var offsetX;
                    // Adjust the offset, depending on the option padding.
                    if (this.multiple) {
                        offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
                    }
                    else {
                        /** @type {?} */
                        var selected = this._selectionModel.selected[0] || this.options.first;
                        offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
                    }
                    // Invert the offset in LTR.
                    if (!isRtl) {
                        offsetX *= -1;
                    }
                    // Determine how much the select overflows on each side.
                    /** @type {?} */
                    var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
                    /** @type {?} */
                    var rightOverflow = overlayRect.right + offsetX - viewportSize.width
                        + (isRtl ? 0 : paddingWidth);
                    // If the element overflows on either side, reduce the offset to allow it to fit.
                    if (leftOverflow > 0) {
                        offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
                    }
                    else if (rightOverflow > 0) {
                        offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
                    }
                    // Set the offset directly in order to avoid having to go through change detection and
                    // potentially triggering "changed after it was checked" errors. Round the value to avoid
                    // blurry content in some browsers.
                    this.overlayDir.offsetX = Math.round(offsetX);
                    this.overlayDir.overlayRef.updatePosition();
                };
                /**
                 * Calculates the y-offset of the select's overlay panel in relation to the
                 * top start corner of the trigger. It has to be adjusted in order for the
                 * selected option to be aligned over the trigger when the panel opens.
                 * @private
                 * @param {?} selectedIndex
                 * @param {?} scrollBuffer
                 * @param {?} maxScroll
                 * @return {?}
                 */
                MatSelect.prototype._calculateOverlayOffsetY = function (selectedIndex, scrollBuffer, maxScroll) {
                    /** @type {?} */
                    var itemHeight = this._getItemHeight();
                    /** @type {?} */
                    var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
                    /** @type {?} */
                    var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
                    /** @type {?} */
                    var optionOffsetFromPanelTop;
                    // Disable offset if requested by user by returning 0 as value to offset
                    if (this._disableOptionCentering) {
                        return 0;
                    }
                    if (this._scrollTop === 0) {
                        optionOffsetFromPanelTop = selectedIndex * itemHeight;
                    }
                    else if (this._scrollTop === maxScroll) {
                        /** @type {?} */
                        var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
                        /** @type {?} */
                        var selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
                        // The first item is partially out of the viewport. Therefore we need to calculate what
                        // portion of it is shown in the viewport and account for it in our offset.
                        /** @type {?} */
                        var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
                        // Because the panel height is longer than the height of the options alone,
                        // there is always extra padding at the top or bottom of the panel. When
                        // scrolled to the very bottom, this padding is at the top of the panel and
                        // must be added to the offset.
                        optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
                    }
                    else {
                        // If the option was scrolled to the middle of the panel using a scroll buffer,
                        // its offset will be the scroll buffer minus the half height that was added to
                        // center it.
                        optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
                    }
                    // The final offset is the option's offset from the top, adjusted for the height difference,
                    // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
                    // The value is rounded to prevent some browsers from blurring the content.
                    return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
                };
                /**
                 * Checks that the attempted overlay position will fit within the viewport.
                 * If it will not fit, tries to adjust the scroll position and the associated
                 * y-offset so the panel can open fully on-screen. If it still won't fit,
                 * sets the offset back to 0 to allow the fallback position to take over.
                 * @private
                 * @param {?} maxScroll
                 * @return {?}
                 */
                MatSelect.prototype._checkOverlayWithinViewport = function (maxScroll) {
                    /** @type {?} */
                    var itemHeight = this._getItemHeight();
                    /** @type {?} */
                    var viewportSize = this._viewportRuler.getViewportSize();
                    /** @type {?} */
                    var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
                    /** @type {?} */
                    var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
                    /** @type {?} */
                    var panelHeightTop = Math.abs(this._offsetY);
                    /** @type {?} */
                    var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
                    /** @type {?} */
                    var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
                    if (panelHeightBottom > bottomSpaceAvailable) {
                        this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
                    }
                    else if (panelHeightTop > topSpaceAvailable) {
                        this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
                    }
                    else {
                        this._transformOrigin = this._getOriginBasedOnOption();
                    }
                };
                /**
                 * Adjusts the overlay panel up to fit in the viewport.
                 * @private
                 * @param {?} panelHeightBottom
                 * @param {?} bottomSpaceAvailable
                 * @return {?}
                 */
                MatSelect.prototype._adjustPanelUp = function (panelHeightBottom, bottomSpaceAvailable) {
                    // Browsers ignore fractional scroll offsets, so we need to round.
                    /** @type {?} */
                    var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
                    // Scrolls the panel up by the distance it was extending past the boundary, then
                    // adjusts the offset by that amount to move the panel up into the viewport.
                    this._scrollTop -= distanceBelowViewport;
                    this._offsetY -= distanceBelowViewport;
                    this._transformOrigin = this._getOriginBasedOnOption();
                    // If the panel is scrolled to the very top, it won't be able to fit the panel
                    // by scrolling, so set the offset to 0 to allow the fallback position to take
                    // effect.
                    if (this._scrollTop <= 0) {
                        this._scrollTop = 0;
                        this._offsetY = 0;
                        this._transformOrigin = "50% bottom 0px";
                    }
                };
                /**
                 * Adjusts the overlay panel down to fit in the viewport.
                 * @private
                 * @param {?} panelHeightTop
                 * @param {?} topSpaceAvailable
                 * @param {?} maxScroll
                 * @return {?}
                 */
                MatSelect.prototype._adjustPanelDown = function (panelHeightTop, topSpaceAvailable, maxScroll) {
                    // Browsers ignore fractional scroll offsets, so we need to round.
                    /** @type {?} */
                    var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
                    // Scrolls the panel down by the distance it was extending past the boundary, then
                    // adjusts the offset by that amount to move the panel down into the viewport.
                    this._scrollTop += distanceAboveViewport;
                    this._offsetY += distanceAboveViewport;
                    this._transformOrigin = this._getOriginBasedOnOption();
                    // If the panel is scrolled to the very bottom, it won't be able to fit the
                    // panel by scrolling, so set the offset to 0 to allow the fallback position
                    // to take effect.
                    if (this._scrollTop >= maxScroll) {
                        this._scrollTop = maxScroll;
                        this._offsetY = 0;
                        this._transformOrigin = "50% top 0px";
                        return;
                    }
                };
                /**
                 * Sets the transform origin point based on the selected option.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._getOriginBasedOnOption = function () {
                    /** @type {?} */
                    var itemHeight = this._getItemHeight();
                    /** @type {?} */
                    var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
                    /** @type {?} */
                    var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
                    return "50% " + originY + "px 0px";
                };
                /**
                 * Calculates the amount of items in the select. This includes options and group labels.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._getItemCount = function () {
                    return this.options.length + this.optionGroups.length;
                };
                /**
                 * Calculates the height of the select's options.
                 * @private
                 * @return {?}
                 */
                MatSelect.prototype._getItemHeight = function () {
                    return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
                };
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @param {?} ids
                 * @return {?}
                 */
                MatSelect.prototype.setDescribedByIds = function (ids) {
                    this._ariaDescribedby = ids.join(' ');
                };
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                MatSelect.prototype.onContainerClick = function () {
                    this.focus();
                    this.open();
                };
                Object.defineProperty(MatSelect.prototype, "shouldLabelFloat", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        return this._panelOpen || !this.empty;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MatSelect;
            }(_MatSelectMixinBase));
            MatSelect.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{ selector: 'mat-select',
                            exportAs: 'matSelect',
                            template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\u00A0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"mat-select-panel-wrap\" [@transformPanelWrap]><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></div></ng-template>",
                            styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
                            inputs: ['disabled', 'disableRipple', 'tabIndex'],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
                            host: {
                                'role': 'listbox',
                                '[attr.id]': 'id',
                                '[attr.tabindex]': 'tabIndex',
                                '[attr.aria-label]': '_getAriaLabel()',
                                '[attr.aria-labelledby]': '_getAriaLabelledby()',
                                '[attr.aria-required]': 'required.toString()',
                                '[attr.aria-disabled]': 'disabled.toString()',
                                '[attr.aria-invalid]': 'errorState',
                                '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                                '[attr.aria-multiselectable]': 'multiple',
                                '[attr.aria-describedby]': '_ariaDescribedby || null',
                                '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                                '[class.mat-select-disabled]': 'disabled',
                                '[class.mat-select-invalid]': 'errorState',
                                '[class.mat-select-required]': 'required',
                                '[class.mat-select-empty]': 'empty',
                                'class': 'mat-select',
                                '(keydown)': '_handleKeydown($event)',
                                '(focus)': '_onFocus()',
                                '(blur)': '_onBlur()',
                            },
                            animations: [
                                matSelectAnimations.transformPanelWrap,
                                matSelectAnimations.transformPanel
                            ],
                            providers: [
                                { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"], useExisting: MatSelect },
                                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                            ],
                        },] },
            ];
            /** @nocollapse */
            MatSelect.ctorParameters = function () { return [
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
                { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"], args: ['tabindex',] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["LiveAnnouncer"] }
            ]; };
            MatSelect.propDecorators = {
                trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['trigger', { static: false },] }],
                panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['panel', { static: false },] }],
                overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], { static: false },] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], { descendants: true },] }],
                optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"],] }],
                panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [MatSelectTrigger, { static: false },] }],
                placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-label',] }],
                ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-labelledby',] }],
                errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                typeaheadDebounceInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
                openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }],
                _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['opened',] }],
                _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['closed',] }],
                selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }],
                valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatSelectModule = /** @class */ (function () {
                function MatSelectModule() {
                }
                return MatSelectModule;
            }());
            MatSelectModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                            ],
                            exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
                            declarations: [MatSelect, MatSelectTrigger],
                            providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=select.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/tooltip.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/tooltip.js ***!
          \***********************************************************/
        /*! exports provided: MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () { return MatTooltipModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () { return getMatTooltipInvalidPositionError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () { return SCROLL_THROTTLE_MS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () { return TOOLTIP_PANEL_CLASS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () { return MAT_TOOLTIP_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function () { return MatTooltip; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () { return TooltipComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () { return matTooltipAnimations; });
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Animations used by MatTooltip.
             * \@docs-private
             * @type {?}
             */
            var matTooltipAnimations = {
                /**
                 * Animation that transitions a tooltip in and out.
                 */
                tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('state', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.5, transform: 'scale(0.99)', offset: 0.5 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1 })
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))),
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Time in ms to throttle repositioning after scroll events.
             * @type {?}
             */
            var SCROLL_THROTTLE_MS = 20;
            /**
             * CSS class that will be attached to the overlay panel.
             * @type {?}
             */
            var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
            /**
             * Creates an error to be thrown if the user supplied an invalid tooltip position.
             * \@docs-private
             * @param {?} position
             * @return {?}
             */
            function getMatTooltipInvalidPositionError(position) {
                return Error("Tooltip position \"" + position + "\" is invalid.");
            }
            /**
             * Injection token that determines the scroll handling while a tooltip is visible.
             * @type {?}
             */
            var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-scroll-strategy');
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS }); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
                provide: MAT_TOOLTIP_SCROLL_STRATEGY,
                deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
                useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
            };
            /**
             * Injection token to be used to override the default options for `matTooltip`.
             * @type {?}
             */
            var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-default-options', {
                providedIn: 'root',
                factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
                return {
                    showDelay: 0,
                    hideDelay: 0,
                    touchendHideDelay: 1500,
                };
            }
            /**
             * Directive that attaches a material design tooltip to the host element. Animates the showing and
             * hiding of a tooltip provided position (defaults to below the element).
             *
             * https://material.io/design/components/tooltips.html
             */
            var MatTooltip = /** @class */ (function () {
                /**
                 * @param {?} _overlay
                 * @param {?} _elementRef
                 * @param {?} _scrollDispatcher
                 * @param {?} _viewContainerRef
                 * @param {?} _ngZone
                 * @param {?} platform
                 * @param {?} _ariaDescriber
                 * @param {?} _focusMonitor
                 * @param {?} scrollStrategy
                 * @param {?} _dir
                 * @param {?} _defaultOptions
                 * @param {?=} hammerLoader
                 */
                function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, hammerLoader) {
                    var _this = this;
                    this._overlay = _overlay;
                    this._elementRef = _elementRef;
                    this._scrollDispatcher = _scrollDispatcher;
                    this._viewContainerRef = _viewContainerRef;
                    this._ngZone = _ngZone;
                    this._ariaDescriber = _ariaDescriber;
                    this._focusMonitor = _focusMonitor;
                    this._dir = _dir;
                    this._defaultOptions = _defaultOptions;
                    this._position = 'below';
                    this._disabled = false;
                    /**
                     * The default delay in ms before showing the tooltip after show is called
                     */
                    this.showDelay = this._defaultOptions.showDelay;
                    /**
                     * The default delay in ms before hiding the tooltip after hide is called
                     */
                    this.hideDelay = this._defaultOptions.hideDelay;
                    this._message = '';
                    this._manualListeners = new Map();
                    /**
                     * Emits when the component is destroyed.
                     */
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
                    this._scrollStrategy = scrollStrategy;
                    /** @type {?} */
                    var element = _elementRef.nativeElement;
                    /** @type {?} */
                    var hasGestures = typeof window === 'undefined' || (( /** @type {?} */(window))).Hammer || hammerLoader;
                    // The mouse events shouldn't be bound on mobile devices, because they can prevent the
                    // first tap from firing its click event or can cause the tooltip to open for clicks.
                    if (!platform.IOS && !platform.ANDROID) {
                        this._manualListeners
                            .set('mouseenter', ( /**
                     * @return {?}
                     */function () { return _this.show(); }))
                            .set('mouseleave', ( /**
                     * @return {?}
                     */function () { return _this.hide(); }));
                    }
                    else if (!hasGestures) {
                        // If Hammerjs isn't loaded, fall back to showing on `touchstart`, otherwise
                        // there's no way for the user to trigger the tooltip on a touch device.
                        this._manualListeners.set('touchstart', ( /**
                         * @return {?}
                         */function () { return _this.show(); }));
                    }
                    this._manualListeners.forEach(( /**
                     * @param {?} listener
                     * @param {?} event
                     * @return {?}
                     */function (listener, event) { return element.addEventListener(event, listener); }));
                    _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @param {?} origin
                     * @return {?}
                     */function (/**
                     * @param {?} origin
                     * @return {?}
                     */ origin) {
                        // Note that the focus monitor runs outside the Angular zone.
                        if (!origin) {
                            _ngZone.run(( /**
                             * @return {?}
                             */function () { return _this.hide(0); }));
                        }
                        else if (origin === 'keyboard') {
                            _ngZone.run(( /**
                             * @return {?}
                             */function () { return _this.show(); }));
                        }
                    }));
                    if (_defaultOptions && _defaultOptions.position) {
                        this.position = _defaultOptions.position;
                    }
                }
                Object.defineProperty(MatTooltip.prototype, "position", {
                    /**
                     * Allows the user to define the position of the tooltip relative to the parent element
                     * @return {?}
                     */
                    get: function () { return this._position; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value !== this._position) {
                            this._position = value;
                            if (this._overlayRef) {
                                this._updatePosition();
                                if (this._tooltipInstance) {
                                    ( /** @type {?} */(this._tooltipInstance)).show(0);
                                }
                                this._overlayRef.updatePosition();
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTooltip.prototype, "disabled", {
                    /**
                     * Disables the display of the tooltip.
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                        // If tooltip is disabled, hide immediately.
                        if (this._disabled) {
                            this.hide(0);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTooltip.prototype, "message", {
                    /**
                     * The message to be displayed in the tooltip
                     * @return {?}
                     */
                    get: function () { return this._message; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        var _this = this;
                        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message);
                        // If the message is not a string (e.g. number), convert it to a string and trim it.
                        this._message = value != null ? ("" + value).trim() : '';
                        if (!this._message && this._isTooltipVisible()) {
                            this.hide(0);
                        }
                        else {
                            this._updateTooltipMessage();
                            this._ngZone.runOutsideAngular(( /**
                             * @return {?}
                             */function () {
                                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                                Promise.resolve().then(( /**
                                 * @return {?}
                                 */function () {
                                    _this._ariaDescriber.describe(_this._elementRef.nativeElement, _this.message);
                                }));
                            }));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTooltip.prototype, "tooltipClass", {
                    /**
                     * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
                     * @return {?}
                     */
                    get: function () { return this._tooltipClass; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._tooltipClass = value;
                        if (this._tooltipInstance) {
                            this._setTooltipClass(this._tooltipClass);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Setup styling-specific things
                 * @return {?}
                 */
                MatTooltip.prototype.ngOnInit = function () {
                    /** @type {?} */
                    var element = this._elementRef.nativeElement;
                    /** @type {?} */
                    var elementStyle = ( /** @type {?} */(element.style));
                    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                        // When we bind a gesture event on an element (in this case `longpress`), HammerJS
                        // will add some inline styles by default, including `user-select: none`. This is
                        // problematic on iOS and in Safari, because it will prevent users from typing in inputs.
                        // Since `user-select: none` is not needed for the `longpress` event and can cause unexpected
                        // behavior for text fields, we always clear the `user-select` to avoid such issues.
                        elementStyle.webkitUserSelect = elementStyle.userSelect = elementStyle.msUserSelect = '';
                    }
                    // Hammer applies `-webkit-user-drag: none` on all elements by default,
                    // which breaks the native drag&drop. If the consumer explicitly made
                    // the element draggable, clear the `-webkit-user-drag`.
                    if (element.draggable && elementStyle.webkitUserDrag === 'none') {
                        elementStyle.webkitUserDrag = '';
                    }
                };
                /**
                 * Dispose the tooltip when destroyed.
                 * @return {?}
                 */
                MatTooltip.prototype.ngOnDestroy = function () {
                    var _this = this;
                    if (this._overlayRef) {
                        this._overlayRef.dispose();
                        this._tooltipInstance = null;
                    }
                    // Clean up the event listeners set in the constructor
                    this._manualListeners.forEach(( /**
                     * @param {?} listener
                     * @param {?} event
                     * @return {?}
                     */function (listener, event) {
                        _this._elementRef.nativeElement.removeEventListener(event, listener);
                    }));
                    this._manualListeners.clear();
                    this._destroyed.next();
                    this._destroyed.complete();
                    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);
                    this._focusMonitor.stopMonitoring(this._elementRef);
                };
                /**
                 * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
                 * @param {?=} delay
                 * @return {?}
                 */
                MatTooltip.prototype.show = function (delay) {
                    var _this = this;
                    if (delay === void 0) { delay = this.showDelay; }
                    if (this.disabled || !this.message || (this._isTooltipVisible() &&
                        !( /** @type {?} */(this._tooltipInstance))._showTimeoutId && !( /** @type {?} */(this._tooltipInstance))._hideTimeoutId)) {
                        return;
                    }
                    /** @type {?} */
                    var overlayRef = this._createOverlay();
                    this._detach();
                    this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
                    this._tooltipInstance = overlayRef.attach(this._portal).instance;
                    this._tooltipInstance.afterHidden()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () { return _this._detach(); }));
                    this._setTooltipClass(this._tooltipClass);
                    this._updateTooltipMessage();
                    ( /** @type {?} */(this._tooltipInstance)).show(delay);
                };
                /**
                 * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
                 * @param {?=} delay
                 * @return {?}
                 */
                MatTooltip.prototype.hide = function (delay) {
                    if (delay === void 0) { delay = this.hideDelay; }
                    if (this._tooltipInstance) {
                        this._tooltipInstance.hide(delay);
                    }
                };
                /**
                 * Shows/hides the tooltip
                 * @return {?}
                 */
                MatTooltip.prototype.toggle = function () {
                    this._isTooltipVisible() ? this.hide() : this.show();
                };
                /**
                 * Returns true if the tooltip is currently visible to the user
                 * @return {?}
                 */
                MatTooltip.prototype._isTooltipVisible = function () {
                    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
                };
                /**
                 * Handles the keydown events on the host element.
                 * @param {?} e
                 * @return {?}
                 */
                MatTooltip.prototype._handleKeydown = function (e) {
                    if (this._isTooltipVisible() && e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(e)) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.hide(0);
                    }
                };
                /**
                 * Handles the touchend events on the host element.
                 * @return {?}
                 */
                MatTooltip.prototype._handleTouchend = function () {
                    this.hide(this._defaultOptions.touchendHideDelay);
                };
                /**
                 * Create the overlay config and position strategy
                 * @private
                 * @return {?}
                 */
                MatTooltip.prototype._createOverlay = function () {
                    var _this = this;
                    if (this._overlayRef) {
                        return this._overlayRef;
                    }
                    /** @type {?} */
                    var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
                    // Create connected position strategy that listens for scroll events to reposition.
                    /** @type {?} */
                    var strategy = this._overlay.position()
                        .flexibleConnectedTo(this._elementRef)
                        .withTransformOriginOn('.mat-tooltip')
                        .withFlexibleDimensions(false)
                        .withViewportMargin(8)
                        .withScrollableContainers(scrollableAncestors);
                    strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @param {?} change
                     * @return {?}
                     */function (/**
                     * @param {?} change
                     * @return {?}
                     */ change) {
                        if (_this._tooltipInstance) {
                            if (change.scrollableViewProperties.isOverlayClipped && _this._tooltipInstance.isVisible()) {
                                // After position changes occur and the overlay is clipped by
                                // a parent scrollable then close the tooltip.
                                _this._ngZone.run(( /**
                                 * @return {?}
                                 */function () { return _this.hide(0); }));
                            }
                        }
                    }));
                    this._overlayRef = this._overlay.create({
                        direction: this._dir,
                        positionStrategy: strategy,
                        panelClass: TOOLTIP_PANEL_CLASS,
                        scrollStrategy: this._scrollStrategy()
                    });
                    this._updatePosition();
                    this._overlayRef.detachments()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () { return _this._detach(); }));
                    return this._overlayRef;
                };
                /**
                 * Detaches the currently-attached tooltip.
                 * @private
                 * @return {?}
                 */
                MatTooltip.prototype._detach = function () {
                    if (this._overlayRef && this._overlayRef.hasAttached()) {
                        this._overlayRef.detach();
                    }
                    this._tooltipInstance = null;
                };
                /**
                 * Updates the position of the current tooltip.
                 * @private
                 * @return {?}
                 */
                MatTooltip.prototype._updatePosition = function () {
                    /** @type {?} */
                    var position = ( /** @type {?} */(( /** @type {?} */(this._overlayRef)).getConfig().positionStrategy));
                    /** @type {?} */
                    var origin = this._getOrigin();
                    /** @type {?} */
                    var overlay = this._getOverlayPosition();
                    position.withPositions([
                        Object.assign({}, origin.main, overlay.main),
                        Object.assign({}, origin.fallback, overlay.fallback)
                    ]);
                };
                /**
                 * Returns the origin position and a fallback position based on the user's position preference.
                 * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
                 * @return {?}
                 */
                MatTooltip.prototype._getOrigin = function () {
                    /** @type {?} */
                    var isLtr = !this._dir || this._dir.value == 'ltr';
                    /** @type {?} */
                    var position = this.position;
                    /** @type {?} */
                    var originPosition;
                    if (position == 'above' || position == 'below') {
                        originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
                    }
                    else if (position == 'before' ||
                        (position == 'left' && isLtr) ||
                        (position == 'right' && !isLtr)) {
                        originPosition = { originX: 'start', originY: 'center' };
                    }
                    else if (position == 'after' ||
                        (position == 'right' && isLtr) ||
                        (position == 'left' && !isLtr)) {
                        originPosition = { originX: 'end', originY: 'center' };
                    }
                    else {
                        throw getMatTooltipInvalidPositionError(position);
                    }
                    var _a = this._invertPosition(originPosition.originX, originPosition.originY), x = _a.x, y = _a.y;
                    return {
                        main: originPosition,
                        fallback: { originX: x, originY: y }
                    };
                };
                /**
                 * Returns the overlay position and a fallback position based on the user's preference
                 * @return {?}
                 */
                MatTooltip.prototype._getOverlayPosition = function () {
                    /** @type {?} */
                    var isLtr = !this._dir || this._dir.value == 'ltr';
                    /** @type {?} */
                    var position = this.position;
                    /** @type {?} */
                    var overlayPosition;
                    if (position == 'above') {
                        overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
                    }
                    else if (position == 'below') {
                        overlayPosition = { overlayX: 'center', overlayY: 'top' };
                    }
                    else if (position == 'before' ||
                        (position == 'left' && isLtr) ||
                        (position == 'right' && !isLtr)) {
                        overlayPosition = { overlayX: 'end', overlayY: 'center' };
                    }
                    else if (position == 'after' ||
                        (position == 'right' && isLtr) ||
                        (position == 'left' && !isLtr)) {
                        overlayPosition = { overlayX: 'start', overlayY: 'center' };
                    }
                    else {
                        throw getMatTooltipInvalidPositionError(position);
                    }
                    var _a = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY), x = _a.x, y = _a.y;
                    return {
                        main: overlayPosition,
                        fallback: { overlayX: x, overlayY: y }
                    };
                };
                /**
                 * Updates the tooltip message and repositions the overlay according to the new message length
                 * @private
                 * @return {?}
                 */
                MatTooltip.prototype._updateTooltipMessage = function () {
                    var _this = this;
                    // Must wait for the message to be painted to the tooltip so that the overlay can properly
                    // calculate the correct positioning based on the size of the text.
                    if (this._tooltipInstance) {
                        this._tooltipInstance.message = this.message;
                        this._tooltipInstance._markForCheck();
                        this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(( /**
                         * @return {?}
                         */function () {
                            if (_this._tooltipInstance) {
                                ( /** @type {?} */(_this._overlayRef)).updatePosition();
                            }
                        }));
                    }
                };
                /**
                 * Updates the tooltip class
                 * @private
                 * @param {?} tooltipClass
                 * @return {?}
                 */
                MatTooltip.prototype._setTooltipClass = function (tooltipClass) {
                    if (this._tooltipInstance) {
                        this._tooltipInstance.tooltipClass = tooltipClass;
                        this._tooltipInstance._markForCheck();
                    }
                };
                /**
                 * Inverts an overlay position.
                 * @private
                 * @param {?} x
                 * @param {?} y
                 * @return {?}
                 */
                MatTooltip.prototype._invertPosition = function (x, y) {
                    if (this.position === 'above' || this.position === 'below') {
                        if (y === 'top') {
                            y = 'bottom';
                        }
                        else if (y === 'bottom') {
                            y = 'top';
                        }
                    }
                    else {
                        if (x === 'end') {
                            x = 'start';
                        }
                        else if (x === 'start') {
                            x = 'end';
                        }
                    }
                    return { x: x, y: y };
                };
                return MatTooltip;
            }());
            MatTooltip.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"], args: [{
                            selector: '[matTooltip]',
                            exportAs: 'matTooltip',
                            host: {
                                '(longpress)': 'show()',
                                '(keydown)': '_handleKeydown($event)',
                                '(touchend)': '_handleTouchend()',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatTooltip.ctorParameters = function () { return [
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatcher"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"],] }] }
            ]; };
            MatTooltip.propDecorators = {
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltipPosition',] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltipDisabled',] }],
                showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltipShowDelay',] }],
                hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltipHideDelay',] }],
                message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltip',] }],
                tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"], args: ['matTooltipClass',] }]
            };
            /**
             * Internal component that wraps the tooltip's content.
             * \@docs-private
             */
            var TooltipComponent = /** @class */ (function () {
                /**
                 * @param {?} _changeDetectorRef
                 * @param {?} _breakpointObserver
                 */
                function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
                    this._changeDetectorRef = _changeDetectorRef;
                    this._breakpointObserver = _breakpointObserver;
                    /**
                     * Property watched by the animation framework to show or hide the tooltip
                     */
                    this._visibility = 'initial';
                    /**
                     * Whether interactions on the page should close the tooltip
                     */
                    this._closeOnInteraction = false;
                    /**
                     * Subject for notifying that the tooltip has been hidden from the view
                     */
                    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
                    /**
                     * Stream that emits whether the user has a handset-sized display.
                     */
                    this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset);
                }
                /**
                 * Shows the tooltip with an animation originating from the provided origin
                 * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
                 * @return {?}
                 */
                TooltipComponent.prototype.show = function (delay) {
                    var _this = this;
                    // Cancel the delayed hide if it is scheduled
                    if (this._hideTimeoutId) {
                        clearTimeout(this._hideTimeoutId);
                        this._hideTimeoutId = null;
                    }
                    // Body interactions should cancel the tooltip if there is a delay in showing.
                    this._closeOnInteraction = true;
                    this._showTimeoutId = setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._visibility = 'visible';
                        _this._showTimeoutId = null;
                        // Mark for check so if any parent component has set the
                        // ChangeDetectionStrategy to OnPush it will be checked anyways
                        _this._markForCheck();
                    }), delay);
                };
                /**
                 * Begins the animation to hide the tooltip after the provided delay in ms.
                 * @param {?} delay Amount of milliseconds to delay showing the tooltip.
                 * @return {?}
                 */
                TooltipComponent.prototype.hide = function (delay) {
                    var _this = this;
                    // Cancel the delayed show if it is scheduled
                    if (this._showTimeoutId) {
                        clearTimeout(this._showTimeoutId);
                        this._showTimeoutId = null;
                    }
                    this._hideTimeoutId = setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._visibility = 'hidden';
                        _this._hideTimeoutId = null;
                        // Mark for check so if any parent component has set the
                        // ChangeDetectionStrategy to OnPush it will be checked anyways
                        _this._markForCheck();
                    }), delay);
                };
                /**
                 * Returns an observable that notifies when the tooltip has been hidden from view.
                 * @return {?}
                 */
                TooltipComponent.prototype.afterHidden = function () {
                    return this._onHide.asObservable();
                };
                /**
                 * Whether the tooltip is being displayed.
                 * @return {?}
                 */
                TooltipComponent.prototype.isVisible = function () {
                    return this._visibility === 'visible';
                };
                /**
                 * @return {?}
                 */
                TooltipComponent.prototype.ngOnDestroy = function () {
                    this._onHide.complete();
                };
                /**
                 * @return {?}
                 */
                TooltipComponent.prototype._animationStart = function () {
                    this._closeOnInteraction = false;
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                TooltipComponent.prototype._animationDone = function (event) {
                    /** @type {?} */
                    var toState = ( /** @type {?} */(event.toState));
                    if (toState === 'hidden' && !this.isVisible()) {
                        this._onHide.next();
                    }
                    if (toState === 'visible' || toState === 'hidden') {
                        this._closeOnInteraction = true;
                    }
                };
                /**
                 * Interactions on the HTML body should close the tooltip immediately as defined in the
                 * material design spec.
                 * https://material.io/design/components/tooltips.html#behavior
                 * @return {?}
                 */
                TooltipComponent.prototype._handleBodyInteraction = function () {
                    if (this._closeOnInteraction) {
                        this.hide(0);
                    }
                };
                /**
                 * Marks that the tooltip needs to be checked in the next change detection run.
                 * Mainly used for rendering the initial text before positioning a tooltip, which
                 * can be problematic in components with OnPush change detection.
                 * @return {?}
                 */
                TooltipComponent.prototype._markForCheck = function () {
                    this._changeDetectorRef.markForCheck();
                };
                return TooltipComponent;
            }());
            TooltipComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{ selector: 'mat-tooltip-component',
                            template: "<div class=\"mat-tooltip\" [ngClass]=\"tooltipClass\" [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\">{{message}}</div>",
                            styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
                            animations: [matTooltipAnimations.tooltipState],
                            host: {
                                // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                                // won't be rendered if the animations are disabled or there is no web animations polyfill.
                                '[style.zoom]': '_visibility === "visible" ? 1 : null',
                                '(body:click)': 'this._handleBodyInteraction()',
                                'aria-hidden': 'true',
                            }
                        },] },
            ];
            /** @nocollapse */
            TooltipComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"] },
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatTooltipModule = /** @class */ (function () {
                function MatTooltipModule() {
                }
                return MatTooltipModule;
            }());
            MatTooltipModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                            imports: [
                                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"],
                            ],
                            exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"]],
                            declarations: [MatTooltip, TooltipComponent],
                            entryComponents: [TooltipComponent],
                            providers: [
                                MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
                                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["GestureConfig"] },
                            ]
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=tooltip.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1-es2015.js.map
//# sourceMappingURL=default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1-es5.js.map
//# sourceMappingURL=default~components-genre-genre-module~components-genre-list-genre-list-module~components-movie-detai~319376c1-es5.js.map