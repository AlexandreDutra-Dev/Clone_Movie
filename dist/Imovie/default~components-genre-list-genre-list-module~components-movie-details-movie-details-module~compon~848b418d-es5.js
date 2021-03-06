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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d"], {
        /***/ "./node_modules/@angular/material/esm2015/tabs.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/tabs.js ***!
          \********************************************************/
        /*! exports provided: MatTabsModule, MatInkBar, _MAT_INK_BAR_POSITIONER, MatTabBody, _MatTabBodyBase, MatTabBodyPortal, MatTabHeader, _MatTabHeaderBase, MatTabLabelWrapper, MatTab, MatTabLabel, MatTabNav, MatTabLink, _MatTabNavBase, _MatTabLinkBase, MatTabContent, MatTabChangeEvent, MAT_TABS_CONFIG, _MatTabGroupBase, MatTabGroup, matTabsAnimations, ??a24, ??b24 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () { return MatTabsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function () { return MatInkBar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () { return _MAT_INK_BAR_POSITIONER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function () { return MatTabBody; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () { return _MatTabBodyBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () { return MatTabBodyPortal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () { return MatTabHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () { return _MatTabHeaderBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () { return MatTabLabelWrapper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTab", function () { return MatTab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () { return MatTabLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function () { return MatTabNav; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function () { return MatTabLink; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () { return _MatTabNavBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () { return _MatTabLinkBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function () { return MatTabContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () { return MatTabChangeEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () { return MAT_TABS_CONFIG; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () { return _MatTabGroupBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () { return MatTabGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () { return matTabsAnimations; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??a24", function () { return _MAT_INK_BAR_POSITIONER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??b24", function () { return MatPaginatedTabHeader; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
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
             * Injection token for the MatInkBar's Positioner.
             * @type {?}
             */
            var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatInkBarPositioner', {
                providedIn: 'root',
                factory: _MAT_INK_BAR_POSITIONER_FACTORY
            });
            /**
             * The default positioner function for the MatInkBar.
             * \@docs-private
             * @return {?}
             */
            function _MAT_INK_BAR_POSITIONER_FACTORY() {
                /** @type {?} */
                var method = ( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) { return ({
                    left: element ? (element.offsetLeft || 0) + 'px' : '0',
                    width: element ? (element.offsetWidth || 0) + 'px' : '0',
                }); });
                return method;
            }
            /**
             * The ink-bar is used to display and animate the line underneath the current active tab label.
             * \@docs-private
             */
            var MatInkBar = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _ngZone
                 * @param {?} _inkBarPositioner
                 * @param {?=} _animationMode
                 */
                function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
                    this._elementRef = _elementRef;
                    this._ngZone = _ngZone;
                    this._inkBarPositioner = _inkBarPositioner;
                    this._animationMode = _animationMode;
                }
                /**
                 * Calculates the styles from the provided element in order to align the ink-bar to that element.
                 * Shows the ink bar if previously set as hidden.
                 * @param {?} element
                 * @return {?}
                 */
                MatInkBar.prototype.alignToElement = function (element) {
                    var _this = this;
                    this.show();
                    if (typeof requestAnimationFrame !== 'undefined') {
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            requestAnimationFrame(( /**
                             * @return {?}
                             */function () { return _this._setStyles(element); }));
                        }));
                    }
                    else {
                        this._setStyles(element);
                    }
                };
                /**
                 * Shows the ink bar.
                 * @return {?}
                 */
                MatInkBar.prototype.show = function () {
                    this._elementRef.nativeElement.style.visibility = 'visible';
                };
                /**
                 * Hides the ink bar.
                 * @return {?}
                 */
                MatInkBar.prototype.hide = function () {
                    this._elementRef.nativeElement.style.visibility = 'hidden';
                };
                /**
                 * Sets the proper styles to the ink bar element.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                MatInkBar.prototype._setStyles = function (element) {
                    /** @type {?} */
                    var positions = this._inkBarPositioner(element);
                    /** @type {?} */
                    var inkBar = this._elementRef.nativeElement;
                    inkBar.style.left = positions.left;
                    inkBar.style.width = positions.width;
                };
                return MatInkBar;
            }());
            MatInkBar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-ink-bar',
                            host: {
                                'class': 'mat-ink-bar',
                                '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'",
                            },
                        },] },
            ];
            /** @nocollapse */
            MatInkBar.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_MAT_INK_BAR_POSITIONER,] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Decorates the `ng-template` tags and reads out the template from it.
             */
            var MatTabContent = /** @class */ (function () {
                /**
                 * @param {?} template
                 */
                function MatTabContent(template) {
                    this.template = template;
                }
                return MatTabContent;
            }());
            MatTabContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[matTabContent]' },] },
            ];
            /** @nocollapse */
            MatTabContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Used to flag tab labels for use with the portal directive
             */
            var MatTabLabel = /** @class */ (function (_super) {
                __extends(MatTabLabel, _super);
                function MatTabLabel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatTabLabel;
            }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]));
            MatTabLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[mat-tab-label], [matTabLabel]',
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatTab.
            /**
             * \@docs-private
             */
            var MatTabBase = /** @class */ (function () {
                function MatTabBase() {
                }
                return MatTabBase;
            }());
            /** @type {?} */
            var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatTabBase);
            var MatTab = /** @class */ (function (_super) {
                __extends(MatTab, _super);
                /**
                 * @param {?} _viewContainerRef
                 */
                function MatTab(_viewContainerRef) {
                    var _this = _super.call(this) || this;
                    _this._viewContainerRef = _viewContainerRef;
                    /**
                     * Plain text label for the tab, used when there is no template label.
                     */
                    _this.textLabel = '';
                    /**
                     * Portal that will be the hosted content of the tab
                     */
                    _this._contentPortal = null;
                    /**
                     * Emits whenever the internal state of the tab changes.
                     */
                    _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    /**
                     * The relatively indexed position where 0 represents the center, negative is left, and positive
                     * represents the right.
                     */
                    _this.position = null;
                    /**
                     * The initial relatively index origin of the tab if it was created and selected after there
                     * was already a selected tab. Provides context of what position the tab should originate from.
                     */
                    _this.origin = null;
                    /**
                     * Whether the tab is currently active.
                     */
                    _this.isActive = false;
                    return _this;
                }
                Object.defineProperty(MatTab.prototype, "content", {
                    /**
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        return this._contentPortal;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatTab.prototype.ngOnChanges = function (changes) {
                    if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
                        this._stateChanges.next();
                    }
                };
                /**
                 * @return {?}
                 */
                MatTab.prototype.ngOnDestroy = function () {
                    this._stateChanges.complete();
                };
                /**
                 * @return {?}
                 */
                MatTab.prototype.ngOnInit = function () {
                    this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
                };
                return MatTab;
            }(_MatTabMixinBase));
            MatTab.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-tab',
                            template: "<ng-template><ng-content></ng-content></ng-template>",
                            inputs: ['disabled'],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            exportAs: 'matTab',
                        },] },
            ];
            /** @nocollapse */
            MatTab.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
            ]; };
            MatTab.propDecorators = {
                templateLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatTabLabel, { static: false },] }],
                _explicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatTabContent, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
                _implicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
                textLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['label',] }],
                ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
                ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Animations used by the Material tabs.
             * \@docs-private
             * @type {?}
             */
            var matTabsAnimations = {
                /**
                 * Animation translates a tab along the X axis.
                 */
                translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('translateTab', [
                    // Note: transitions to `none` instead of 0, because some browsers might blur the content.
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'none' })),
                    // If the tab is either on the left or right, we additionally add a `min-height` of 1px
                    // in order to ensure that the element has a height before its state changes. This is
                    // necessary because Chrome does seem to skip the transition in RTL mode if the element does
                    // not have a static height and is not rendered. See related issue: #9465
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => left-origin-center', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(-100%, 0, 0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => right-origin-center', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(100%, 0, 0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
                    ])
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The portal host directive for the contents of the tab.
             * \@docs-private
             */
            var MatTabBodyPortal = /** @class */ (function (_super) {
                __extends(MatTabBodyPortal, _super);
                /**
                 * @param {?} componentFactoryResolver
                 * @param {?} viewContainerRef
                 * @param {?} _host
                 */
                function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host) {
                    var _this = _super.call(this, componentFactoryResolver, viewContainerRef) || this;
                    _this._host = _host;
                    /**
                     * Subscription to events for when the tab body begins centering.
                     */
                    _this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    /**
                     * Subscription to events for when the tab body finishes leaving from center position.
                     */
                    _this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    return _this;
                }
                /**
                 * Set initial visibility or set up subscription for changing visibility.
                 * @return {?}
                 */
                MatTabBodyPortal.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    this._centeringSub = this._host._beforeCentering
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._host._isCenterPosition(this._host._position)))
                        .subscribe(( /**
                 * @param {?} isCentering
                 * @return {?}
                 */function (isCentering) {
                        if (isCentering && !_this.hasAttached()) {
                            _this.attach(_this._host._content);
                        }
                    }));
                    this._leavingSub = this._host._afterLeavingCenter.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.detach();
                    }));
                };
                /**
                 * Clean up centering subscription.
                 * @return {?}
                 */
                MatTabBodyPortal.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                    this._centeringSub.unsubscribe();
                    this._leavingSub.unsubscribe();
                };
                return MatTabBodyPortal;
            }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]));
            MatTabBodyPortal.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matTabBodyHost]'
                        },] },
            ];
            /** @nocollapse */
            MatTabBodyPortal.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: MatTabBody, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return MatTabBody; })),] }] }
            ]; };
            /**
             * Base class with all of the `MatTabBody` functionality.
             * \@docs-private
             * @abstract
             */
            // tslint:disable-next-line:class-name
            var _MatTabBodyBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _dir
                 * @param {?} changeDetectorRef
                 */
                function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._dir = _dir;
                    /**
                     * Subscription to the directionality change observable.
                     */
                    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    /**
                     * Emits when an animation on the tab is complete.
                     */
                    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    /**
                     * Event emitted when the tab begins to animate towards the center as the active tab.
                     */
                    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted before the centering of the tab begins.
                     */
                    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted before the centering of the tab begins.
                     */
                    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted when the tab completes its animation towards the center.
                     */
                    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
                    // Note that the default value will always be overwritten by `MatTabBody`, but we need one
                    // anyway to prevent the animations module from throwing an error if the body is used on its own.
                    /**
                     * Duration for the tab's animation.
                     */
                    this.animationDuration = '500ms';
                    if (_dir) {
                        this._dirChangeSubscription = _dir.change.subscribe(( /**
                         * @param {?} dir
                         * @return {?}
                         */function (dir) {
                            _this._computePositionAnimationState(dir);
                            changeDetectorRef.markForCheck();
                        }));
                    }
                    // Ensure that we get unique animation events, because the `.done` callback can get
                    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
                    this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(( /**
                     * @param {?} x
                     * @param {?} y
                     * @return {?}
                     */function (x, y) {
                        return x.fromState === y.fromState && x.toState === y.toState;
                    }))).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        // If the transition to the center is complete, emit an event.
                        if (_this._isCenterPosition(event.toState) && _this._isCenterPosition(_this._position)) {
                            _this._onCentered.emit();
                        }
                        if (_this._isCenterPosition(event.fromState) && !_this._isCenterPosition(_this._position)) {
                            _this._afterLeavingCenter.emit();
                        }
                    }));
                }
                Object.defineProperty(_MatTabBodyBase.prototype, "position", {
                    /**
                     * The shifted index position of the tab body, where zero represents the active center tab.
                     * @param {?} position
                     * @return {?}
                     */
                    set: function (position) {
                        this._positionIndex = position;
                        this._computePositionAnimationState();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * After initialized, check if the content is centered and has an origin. If so, set the
                 * special position states that transition the tab from the left or right before centering.
                 * @return {?}
                 */
                _MatTabBodyBase.prototype.ngOnInit = function () {
                    if (this._position == 'center' && this.origin != null) {
                        this._position = this._computePositionFromOrigin();
                    }
                };
                /**
                 * @return {?}
                 */
                _MatTabBodyBase.prototype.ngOnDestroy = function () {
                    this._dirChangeSubscription.unsubscribe();
                    this._translateTabComplete.complete();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                _MatTabBodyBase.prototype._onTranslateTabStarted = function (event) {
                    /** @type {?} */
                    var isCentering = this._isCenterPosition(event.toState);
                    this._beforeCentering.emit(isCentering);
                    if (isCentering) {
                        this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
                    }
                };
                /**
                 * The text direction of the containing app.
                 * @return {?}
                 */
                _MatTabBodyBase.prototype._getLayoutDirection = function () {
                    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
                };
                /**
                 * Whether the provided position state is considered center, regardless of origin.
                 * @param {?} position
                 * @return {?}
                 */
                _MatTabBodyBase.prototype._isCenterPosition = function (position) {
                    return position == 'center' ||
                        position == 'left-origin-center' ||
                        position == 'right-origin-center';
                };
                /**
                 * Computes the position state that will be used for the tab-body animation trigger.
                 * @private
                 * @param {?=} dir
                 * @return {?}
                 */
                _MatTabBodyBase.prototype._computePositionAnimationState = function (dir) {
                    if (dir === void 0) { dir = this._getLayoutDirection(); }
                    if (this._positionIndex < 0) {
                        this._position = dir == 'ltr' ? 'left' : 'right';
                    }
                    else if (this._positionIndex > 0) {
                        this._position = dir == 'ltr' ? 'right' : 'left';
                    }
                    else {
                        this._position = 'center';
                    }
                };
                /**
                 * Computes the position state based on the specified origin position. This is used if the
                 * tab is becoming visible immediately after creation.
                 * @private
                 * @return {?}
                 */
                _MatTabBodyBase.prototype._computePositionFromOrigin = function () {
                    /** @type {?} */
                    var dir = this._getLayoutDirection();
                    if ((dir == 'ltr' && this.origin <= 0) || (dir == 'rtl' && this.origin > 0)) {
                        return 'left-origin-center';
                    }
                    return 'right-origin-center';
                };
                return _MatTabBodyBase;
            }());
            _MatTabBodyBase.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-tab-body-base'
                        },] },
            ];
            /** @nocollapse */
            _MatTabBodyBase.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            _MatTabBodyBase.propDecorators = {
                _onCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _beforeCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _afterLeavingCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _onCentered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['content',] }],
                origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * Wrapper for the contents of a tab.
             * \@docs-private
             */
            var MatTabBody = /** @class */ (function (_super) {
                __extends(MatTabBody, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} dir
                 * @param {?} changeDetectorRef
                 */
                function MatTabBody(elementRef, dir, changeDetectorRef) {
                    return _super.call(this, elementRef, dir, changeDetectorRef) || this;
                }
                return MatTabBody;
            }(_MatTabBodyBase));
            MatTabBody.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-tab-body',
                            template: "<div class=\"mat-tab-body-content\" #content [@translateTab]=\"{ value: _position, params: {animationDuration: animationDuration} }\" (@translateTab.start)=\"_onTranslateTabStarted($event)\" (@translateTab.done)=\"_translateTabComplete.next($event)\"><ng-template matTabBodyHost></ng-template></div>",
                            styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            animations: [matTabsAnimations.translateTab],
                            host: {
                                'class': 'mat-tab-body',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatTabBody.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            MatTabBody.propDecorators = {
                _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Used to generate unique ID's for each tab component
             * @type {?}
             */
            var nextId = 0;
            /**
             * A simple change event emitted on focus or selection changes.
             */
            var MatTabChangeEvent = /** @class */ (function () {
                function MatTabChangeEvent() {
                }
                return MatTabChangeEvent;
            }());
            /**
             * Injection token that can be used to provide the default options the tabs module.
             * @type {?}
             */
            var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_TABS_CONFIG');
            // Boilerplate for applying mixins to MatTabGroup.
            /**
             * \@docs-private
             */
            var MatTabGroupMixinBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatTabGroupMixinBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatTabGroupMixinBase;
            }());
            /** @type {?} */
            var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
            /**
             * Base class with all of the `MatTabGroupBase` functionality.
             * \@docs-private
             * @abstract
             */
            // tslint:disable-next-line:class-name
            var _MatTabGroupBase = /** @class */ (function (_super) {
                __extends(_MatTabGroupBase, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _changeDetectorRef
                 * @param {?=} defaultConfig
                 * @param {?=} _animationMode
                 */
                function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
                    var _this = _super.call(this, elementRef) || this;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._animationMode = _animationMode;
                    /**
                     * The tab index that should be selected after the content has been checked.
                     */
                    _this._indexToSelect = 0;
                    /**
                     * Snapshot of the height of the tab body wrapper before another tab is activated.
                     */
                    _this._tabBodyWrapperHeight = 0;
                    /**
                     * Subscription to tabs being added/removed.
                     */
                    _this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    /**
                     * Subscription to changes in the tab labels.
                     */
                    _this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
                    _this._dynamicHeight = false;
                    _this._selectedIndex = null;
                    /**
                     * Position of the tab header.
                     */
                    _this.headerPosition = 'above';
                    /**
                     * Output to enable support for two-way binding on `[(selectedIndex)]`
                     */
                    _this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted when focus has changed within a tab group.
                     */
                    _this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted when the body animation has completed
                     */
                    _this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted when the tab selection has changed.
                     */
                    _this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
                    _this._groupId = nextId++;
                    _this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
                        defaultConfig.animationDuration : '500ms';
                    return _this;
                }
                Object.defineProperty(_MatTabGroupBase.prototype, "dynamicHeight", {
                    /**
                     * Whether the tab group should grow to the size of the active tab.
                     * @return {?}
                     */
                    get: function () { return this._dynamicHeight; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(_MatTabGroupBase.prototype, "selectedIndex", {
                    /**
                     * The index of the active tab.
                     * @return {?}
                     */
                    get: function () { return this._selectedIndex; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value, null);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(_MatTabGroupBase.prototype, "animationDuration", {
                    /**
                     * Duration for the tab animation. Will be normalized to milliseconds if no units are set.
                     * @return {?}
                     */
                    get: function () { return this._animationDuration; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(_MatTabGroupBase.prototype, "backgroundColor", {
                    /**
                     * Background color of the tab group.
                     * @return {?}
                     */
                    get: function () { return this._backgroundColor; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var nativeElement = this._elementRef.nativeElement;
                        nativeElement.classList.remove("mat-background-" + this.backgroundColor);
                        if (value) {
                            nativeElement.classList.add("mat-background-" + value);
                        }
                        this._backgroundColor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * After the content is checked, this component knows what tabs have been defined
                 * and what the selected index should be. This is where we can know exactly what position
                 * each tab should be in according to the new selected index, and additionally we know how
                 * a new selected tab should transition in (from the left or right).
                 * @return {?}
                 */
                _MatTabGroupBase.prototype.ngAfterContentChecked = function () {
                    var _this = this;
                    // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
                    // the amount of tabs changes before the actual change detection runs.
                    /** @type {?} */
                    var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
                    // If there is a change in selected index, emit a change event. Should not trigger if
                    // the selected index has not yet been initialized.
                    if (this._selectedIndex != indexToSelect) {
                        /** @type {?} */
                        var isFirstRun_1 = this._selectedIndex == null;
                        if (!isFirstRun_1) {
                            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
                        }
                        // Changing these values after change detection has run
                        // since the checked content may contain references to them.
                        Promise.resolve().then(( /**
                         * @return {?}
                         */function () {
                            _this._tabs.forEach(( /**
                             * @param {?} tab
                             * @param {?} index
                             * @return {?}
                             */function (tab, index) { return tab.isActive = index === indexToSelect; }));
                            if (!isFirstRun_1) {
                                _this.selectedIndexChange.emit(indexToSelect);
                            }
                        }));
                    }
                    // Setup the position for each tab and optionally setup an origin on the next selected tab.
                    this._tabs.forEach(( /**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */function (tab, index) {
                        tab.position = index - indexToSelect;
                        // If there is already a selected tab, then set up an origin for the next selected tab
                        // if it doesn't have one already.
                        if (_this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                            tab.origin = indexToSelect - _this._selectedIndex;
                        }
                    }));
                    if (this._selectedIndex !== indexToSelect) {
                        this._selectedIndex = indexToSelect;
                        this._changeDetectorRef.markForCheck();
                    }
                };
                /**
                 * @return {?}
                 */
                _MatTabGroupBase.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._subscribeToTabLabels();
                    // Subscribe to changes in the amount of tabs, in order to be
                    // able to re-render the content as new tabs are added or removed.
                    this._tabsSubscription = this._tabs.changes.subscribe(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var indexToSelect = _this._clampTabIndex(_this._indexToSelect);
                        // Maintain the previously-selected tab if a new tab is added or removed and there is no
                        // explicit change that selects a different tab.
                        if (indexToSelect === _this._selectedIndex) {
                            /** @type {?} */
                            var tabs = _this._tabs.toArray();
                            for (var i = 0; i < tabs.length; i++) {
                                if (tabs[i].isActive) {
                                    // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                                    // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                                    // adding a tab within the `selectedIndexChange` event.
                                    _this._indexToSelect = _this._selectedIndex = i;
                                    break;
                                }
                            }
                        }
                        _this._subscribeToTabLabels();
                        _this._changeDetectorRef.markForCheck();
                    }));
                };
                /**
                 * @return {?}
                 */
                _MatTabGroupBase.prototype.ngOnDestroy = function () {
                    this._tabsSubscription.unsubscribe();
                    this._tabLabelSubscription.unsubscribe();
                };
                /**
                 * Re-aligns the ink bar to the selected tab element.
                 * @return {?}
                 */
                _MatTabGroupBase.prototype.realignInkBar = function () {
                    if (this._tabHeader) {
                        this._tabHeader._alignInkBarToSelectedTab();
                    }
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._focusChanged = function (index) {
                    this.focusChange.emit(this._createChangeEvent(index));
                };
                /**
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._createChangeEvent = function (index) {
                    /** @type {?} */
                    var event = new MatTabChangeEvent;
                    event.index = index;
                    if (this._tabs && this._tabs.length) {
                        event.tab = this._tabs.toArray()[index];
                    }
                    return event;
                };
                /**
                 * Subscribes to changes in the tab labels. This is needed, because the \@Input for the label is
                 * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
                 * binding to be updated, we need to subscribe to changes in it and trigger change detection
                 * manually.
                 * @private
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._subscribeToTabLabels = function () {
                    var _this = this;
                    if (this._tabLabelSubscription) {
                        this._tabLabelSubscription.unsubscribe();
                    }
                    this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, __spread(this._tabs.map(( /**
                     * @param {?} tab
                     * @return {?}
                     */function (/**
                     * @param {?} tab
                     * @return {?}
                     */ tab) { return tab._stateChanges; })))).subscribe(( /**
                 * @return {?}
                 */function () { return _this._changeDetectorRef.markForCheck(); }));
                };
                /**
                 * Clamps the given index to the bounds of 0 and the tabs length.
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._clampTabIndex = function (index) {
                    // Note the `|| 0`, which ensures that values like NaN can't get through
                    // and which would otherwise throw the component into an infinite loop
                    // (since Math.max(NaN, 0) === NaN).
                    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
                };
                /**
                 * Returns a unique id for each tab label element
                 * @param {?} i
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._getTabLabelId = function (i) {
                    return "mat-tab-label-" + this._groupId + "-" + i;
                };
                /**
                 * Returns a unique id for each tab content element
                 * @param {?} i
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._getTabContentId = function (i) {
                    return "mat-tab-content-" + this._groupId + "-" + i;
                };
                /**
                 * Sets the height of the body wrapper to the height of the activating tab if dynamic
                 * height property is true.
                 * @param {?} tabHeight
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._setTabBodyWrapperHeight = function (tabHeight) {
                    if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
                        return;
                    }
                    /** @type {?} */
                    var wrapper = this._tabBodyWrapper.nativeElement;
                    wrapper.style.height = this._tabBodyWrapperHeight + 'px';
                    // This conditional forces the browser to paint the height so that
                    // the animation to the new height can have an origin.
                    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
                        wrapper.style.height = tabHeight + 'px';
                    }
                };
                /**
                 * Removes the height of the tab body wrapper.
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._removeTabBodyWrapperHeight = function () {
                    /** @type {?} */
                    var wrapper = this._tabBodyWrapper.nativeElement;
                    this._tabBodyWrapperHeight = wrapper.clientHeight;
                    wrapper.style.height = '';
                    this.animationDone.emit();
                };
                /**
                 * Handle click events, setting new selected index if appropriate.
                 * @param {?} tab
                 * @param {?} tabHeader
                 * @param {?} index
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._handleClick = function (tab, tabHeader, index) {
                    if (!tab.disabled) {
                        this.selectedIndex = tabHeader.focusIndex = index;
                    }
                };
                /**
                 * Retrieves the tabindex for the tab.
                 * @param {?} tab
                 * @param {?} idx
                 * @return {?}
                 */
                _MatTabGroupBase.prototype._getTabIndex = function (tab, idx) {
                    if (tab.disabled) {
                        return null;
                    }
                    return this.selectedIndex === idx ? 0 : -1;
                };
                return _MatTabGroupBase;
            }(_MatTabGroupMixinBase));
            _MatTabGroupBase.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-tab-group-base'
                        },] },
            ];
            /** @nocollapse */
            _MatTabGroupBase.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            _MatTabGroupBase.propDecorators = {
                dynamicHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                headerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                focusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                selectedTabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * Material design tab-group component. Supports basic tab pairs (label + content) and includes
             * animated ink-bar, keyboard navigation, and screen reader.
             * See: https://material.io/design/components/tabs.html
             */
            var MatTabGroup = /** @class */ (function (_super) {
                __extends(MatTabGroup, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} changeDetectorRef
                 * @param {?=} defaultConfig
                 * @param {?=} animationMode
                 */
                function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
                    return _super.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode) || this;
                }
                return MatTabGroup;
            }(_MatTabGroupBase));
            MatTabGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-tab-group',
                            exportAs: 'matTabGroup',
                            template: "<mat-tab-header #tabHeader [selectedIndex]=\"selectedIndex\" [disableRipple]=\"disableRipple\" (indexFocused)=\"_focusChanged($event)\" (selectFocusedIndex)=\"selectedIndex = $event\"><div class=\"mat-tab-label\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabLabelId(i)\" [attr.tabIndex]=\"_getTabIndex(tab, i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"_tabs.length\" [attr.aria-controls]=\"_getTabContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"tab.ariaLabel || null\" [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\" [class.mat-tab-label-active]=\"selectedIndex == i\" [disabled]=\"tab.disabled\" [matRippleDisabled]=\"tab.disabled || disableRipple\" (click)=\"_handleClick(tab, tabHeader, i)\"><div class=\"mat-tab-label-content\"><ng-template [ngIf]=\"tab.templateLabel\"><ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template></ng-template><ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template></div></div></mat-tab-header><div class=\"mat-tab-body-wrapper\" [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\" #tabBodyWrapper><mat-tab-body role=\"tabpanel\" *ngFor=\"let tab of _tabs; let i = index\" [id]=\"_getTabContentId(i)\" [attr.aria-labelledby]=\"_getTabLabelId(i)\" [class.mat-tab-body-active]=\"selectedIndex == i\" [content]=\"tab.content\" [position]=\"tab.position\" [origin]=\"tab.origin\" [animationDuration]=\"animationDuration\" (_onCentered)=\"_removeTabBodyWrapperHeight()\" (_onCentering)=\"_setTabBodyWrapperHeight($event)\"></mat-tab-body></div>",
                            styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{padding:0 12px}}@media (max-width:959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['color', 'disableRipple'],
                            host: {
                                'class': 'mat-tab-group',
                                '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                                '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatTabGroup.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatTabGroup.propDecorators = {
                _tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatTab,] }],
                _tabBodyWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabBodyWrapper', { static: false },] }],
                _tabHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabHeader', { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatTabLabelWrapper.
            /**
             * \@docs-private
             */
            var MatTabLabelWrapperBase = /** @class */ (function () {
                function MatTabLabelWrapperBase() {
                }
                return MatTabLabelWrapperBase;
            }());
            /** @type {?} */
            var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatTabLabelWrapperBase);
            /**
             * Used in the `mat-tab-group` view to display tab labels.
             * \@docs-private
             */
            var MatTabLabelWrapper = /** @class */ (function (_super) {
                __extends(MatTabLabelWrapper, _super);
                /**
                 * @param {?} elementRef
                 */
                function MatTabLabelWrapper(elementRef) {
                    var _this = _super.call(this) || this;
                    _this.elementRef = elementRef;
                    return _this;
                }
                /**
                 * Sets focus on the wrapper element
                 * @return {?}
                 */
                MatTabLabelWrapper.prototype.focus = function () {
                    this.elementRef.nativeElement.focus();
                };
                /**
                 * @return {?}
                 */
                MatTabLabelWrapper.prototype.getOffsetLeft = function () {
                    return this.elementRef.nativeElement.offsetLeft;
                };
                /**
                 * @return {?}
                 */
                MatTabLabelWrapper.prototype.getOffsetWidth = function () {
                    return this.elementRef.nativeElement.offsetWidth;
                };
                return MatTabLabelWrapper;
            }(_MatTabLabelWrapperMixinBase));
            MatTabLabelWrapper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matTabLabelWrapper]',
                            inputs: ['disabled'],
                            host: {
                                '[class.mat-tab-disabled]': 'disabled',
                                '[attr.aria-disabled]': '!!disabled',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatTabLabelWrapper.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Config used to bind passive event listeners
             * @type {?}
             */
            var passiveEventListenerOptions = ( /** @type {?} */(Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({ passive: true })));
            /**
             * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
             * provide a small affordance to the label next to it.
             * @type {?}
             */
            var EXAGGERATED_OVERSCROLL = 60;
            /**
             * Amount of milliseconds to wait before starting to scroll the header automatically.
             * Set a little conservatively in order to handle fake events dispatched on touch devices.
             * @type {?}
             */
            var HEADER_SCROLL_DELAY = 650;
            /**
             * Interval in milliseconds at which to scroll the header
             * while the user is holding their pointer.
             * @type {?}
             */
            var HEADER_SCROLL_INTERVAL = 100;
            /**
             * Base class for a tab header that supported pagination.
             * \@docs-private
             * @abstract
             */
            var MatPaginatedTabHeader = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _changeDetectorRef
                 * @param {?} _viewportRuler
                 * @param {?} _dir
                 * @param {?} _ngZone
                 * @param {?=} _platform
                 * @param {?=} _animationMode
                 */
                function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._viewportRuler = _viewportRuler;
                    this._dir = _dir;
                    this._ngZone = _ngZone;
                    this._platform = _platform;
                    this._animationMode = _animationMode;
                    /**
                     * The distance in pixels that the tab labels should be translated to the left.
                     */
                    this._scrollDistance = 0;
                    /**
                     * Whether the header should scroll to the selected index after the view has been checked.
                     */
                    this._selectedIndexChanged = false;
                    /**
                     * Emits when the component is destroyed.
                     */
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    /**
                     * Whether the controls for pagination should be displayed
                     */
                    this._showPaginationControls = false;
                    /**
                     * Whether the tab list can be scrolled more towards the end of the tab label list.
                     */
                    this._disableScrollAfter = true;
                    /**
                     * Whether the tab list can be scrolled more towards the beginning of the tab label list.
                     */
                    this._disableScrollBefore = true;
                    /**
                     * Stream that will stop the automated scrolling.
                     */
                    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this._selectedIndex = 0;
                    /**
                     * Event emitted when the option is selected.
                     */
                    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Event emitted when a label is focused.
                     */
                    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
                    _ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_elementRef.nativeElement, 'mouseleave')
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed))
                            .subscribe(( /**
                     * @return {?}
                     */function () {
                            _this._stopInterval();
                        }));
                    }));
                }
                Object.defineProperty(MatPaginatedTabHeader.prototype, "selectedIndex", {
                    /**
                     * The index of the active tab.
                     * @return {?}
                     */
                    get: function () { return this._selectedIndex; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
                        if (this._selectedIndex != value) {
                            this._selectedIndexChanged = true;
                            this._selectedIndex = value;
                            if (this._keyManager) {
                                this._keyManager.updateActiveItemIndex(value);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    // We need to handle these events manually, because we want to bind passive event listeners.
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this._handlePaginatorPress('before');
                    }));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this._handlePaginatorPress('after');
                    }));
                };
                /**
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    /** @type {?} */
                    var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                    /** @type {?} */
                    var resize = this._viewportRuler.change(150);
                    /** @type {?} */
                    var realign = ( /**
                     * @return {?}
                     */function () {
                        _this.updatePagination();
                        _this._alignInkBarToSelectedTab();
                    });
                    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusKeyManager"](this._items)
                        .withHorizontalOrientation(this._getLayoutDirection())
                        .withWrap();
                    this._keyManager.updateActiveItem(0);
                    // Defer the first call in order to allow for slower browsers to lay out the elements.
                    // This helps in cases where the user lands directly on a page with paginated tabs.
                    typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
                    // On dir change or window resize, realign the ink bar and update the orientation of
                    // the key manager if the direction has changed.
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @return {?}
                     */function () {
                        realign();
                        _this._keyManager.withHorizontalOrientation(_this._getLayoutDirection());
                    }));
                    // If there is a change in the focus key manager we need to emit the `indexFocused`
                    // event in order to provide a public event that notifies about focus changes. Also we realign
                    // the tabs container by scrolling the new focused tab into the visible section.
                    this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @param {?} newFocusIndex
                     * @return {?}
                     */function (/**
                     * @param {?} newFocusIndex
                     * @return {?}
                     */ newFocusIndex) {
                        _this.indexFocused.emit(newFocusIndex);
                        _this._setTabFocus(newFocusIndex);
                    }));
                };
                /**
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype.ngAfterContentChecked = function () {
                    // If the number of tab labels have changed, check if scrolling should be enabled
                    if (this._tabLabelCount != this._items.length) {
                        this.updatePagination();
                        this._tabLabelCount = this._items.length;
                        this._changeDetectorRef.markForCheck();
                    }
                    // If the selected index has changed, scroll to the label and check if the scrolling controls
                    // should be disabled.
                    if (this._selectedIndexChanged) {
                        this._scrollToLabel(this._selectedIndex);
                        this._checkScrollingControls();
                        this._alignInkBarToSelectedTab();
                        this._selectedIndexChanged = false;
                        this._changeDetectorRef.markForCheck();
                    }
                    // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
                    // then translate the header to reflect this.
                    if (this._scrollDistanceChanged) {
                        this._updateTabScrollPosition();
                        this._scrollDistanceChanged = false;
                        this._changeDetectorRef.markForCheck();
                    }
                };
                /**
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype.ngOnDestroy = function () {
                    this._destroyed.next();
                    this._destroyed.complete();
                    this._stopScrolling.complete();
                };
                /**
                 * Handles keyboard events on the header.
                 * @param {?} event
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._handleKeydown = function (event) {
                    // We don't handle any key bindings with a modifier key.
                    if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                        return;
                    }
                    switch (event.keyCode) {
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                            this._keyManager.setFirstItemActive();
                            event.preventDefault();
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                            this._keyManager.setLastItemActive();
                            event.preventDefault();
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                            this.selectFocusedIndex.emit(this.focusIndex);
                            this._itemSelected(event);
                            break;
                        default:
                            this._keyManager.onKeydown(event);
                    }
                };
                /**
                 * Callback for when the MutationObserver detects that the content has changed.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._onContentChanges = function () {
                    var _this = this;
                    /** @type {?} */
                    var textContent = this._elementRef.nativeElement.textContent;
                    // We need to diff the text content of the header, because the MutationObserver callback
                    // will fire even if the text content didn't change which is inefficient and is prone
                    // to infinite loops if a poorly constructed expression is passed in (see #14249).
                    if (textContent !== this._currentTextContent) {
                        this._currentTextContent = textContent || '';
                        // The content observer runs outside the `NgZone` by default, which
                        // means that we need to bring the callback back in ourselves.
                        this._ngZone.run(( /**
                         * @return {?}
                         */function () {
                            _this.updatePagination();
                            _this._alignInkBarToSelectedTab();
                            _this._changeDetectorRef.markForCheck();
                        }));
                    }
                };
                /**
                 * Updates the view whether pagination should be enabled or not.
                 *
                 * WARNING: Calling this method can be very costly in terms of performance. It should be called
                 * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
                 * page.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype.updatePagination = function () {
                    this._checkPaginationEnabled();
                    this._checkScrollingControls();
                    this._updateTabScrollPosition();
                };
                Object.defineProperty(MatPaginatedTabHeader.prototype, "focusIndex", {
                    /**
                     * Tracks which element has focus; used for keyboard navigation
                     * @return {?}
                     */
                    get: function () {
                        return this._keyManager ? ( /** @type {?} */(this._keyManager.activeItemIndex)) : 0;
                    },
                    /**
                     * When the focus index is set, we must manually send focus to the correct label
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
                            return;
                        }
                        this._keyManager.setActiveItem(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
                 * providing a valid index and return true.
                 * @param {?} index
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._isValidIndex = function (index) {
                    if (!this._items) {
                        return true;
                    }
                    /** @type {?} */
                    var tab = this._items ? this._items.toArray()[index] : null;
                    return !!tab && !tab.disabled;
                };
                /**
                 * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
                 * scrolling is enabled.
                 * @param {?} tabIndex
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._setTabFocus = function (tabIndex) {
                    if (this._showPaginationControls) {
                        this._scrollToLabel(tabIndex);
                    }
                    if (this._items && this._items.length) {
                        this._items.toArray()[tabIndex].focus();
                        // Do not let the browser manage scrolling to focus the element, this will be handled
                        // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
                        // should be the full width minus the offset width.
                        /** @type {?} */
                        var containerEl = this._tabListContainer.nativeElement;
                        /** @type {?} */
                        var dir = this._getLayoutDirection();
                        if (dir == 'ltr') {
                            containerEl.scrollLeft = 0;
                        }
                        else {
                            containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
                        }
                    }
                };
                /**
                 * The layout direction of the containing app.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._getLayoutDirection = function () {
                    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
                };
                /**
                 * Performs the CSS transformation on the tab list that will cause the list to scroll.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._updateTabScrollPosition = function () {
                    /** @type {?} */
                    var scrollDistance = this.scrollDistance;
                    /** @type {?} */
                    var platform = this._platform;
                    /** @type {?} */
                    var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
                    // Don't use `translate3d` here because we don't want to create a new layer. A new layer
                    // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
                    // and ripples will exceed the boundaries of the visible tab bar.
                    // See: https://github.com/angular/components/issues/10276
                    // We round the `transform` here, because transforms with sub-pixel precision cause some
                    // browsers to blur the content of the element.
                    this._tabList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
                    // Setting the `transform` on IE will change the scroll offset of the parent, causing the
                    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
                    // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
                    // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
                    // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.
                    if (platform && (platform.TRIDENT || platform.EDGE)) {
                        this._tabListContainer.nativeElement.scrollLeft = 0;
                    }
                };
                Object.defineProperty(MatPaginatedTabHeader.prototype, "scrollDistance", {
                    /**
                     * Sets the distance in pixels that the tab header should be transformed in the X-axis.
                     * @return {?}
                     */
                    get: function () { return this._scrollDistance; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._scrollTo(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
                 * the end of the list, respectively). The distance to scroll is computed to be a third of the
                 * length of the tab list view window.
                 *
                 * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
                 * should be called sparingly.
                 * @param {?} direction
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._scrollHeader = function (direction) {
                    /** @type {?} */
                    var viewLength = this._tabListContainer.nativeElement.offsetWidth;
                    // Move the scroll distance one-third the length of the tab list's viewport.
                    /** @type {?} */
                    var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
                    return this._scrollTo(this._scrollDistance + scrollAmount);
                };
                /**
                 * Handles click events on the pagination arrows.
                 * @param {?} direction
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._handlePaginatorClick = function (direction) {
                    this._stopInterval();
                    this._scrollHeader(direction);
                };
                /**
                 * Moves the tab list such that the desired tab label (marked by index) is moved into view.
                 *
                 * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
                 * should be called sparingly.
                 * @param {?} labelIndex
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._scrollToLabel = function (labelIndex) {
                    /** @type {?} */
                    var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
                    if (!selectedLabel) {
                        return;
                    }
                    // The view length is the visible width of the tab labels.
                    /** @type {?} */
                    var viewLength = this._tabListContainer.nativeElement.offsetWidth;
                    var _a = selectedLabel.elementRef.nativeElement, offsetLeft = _a.offsetLeft, offsetWidth = _a.offsetWidth;
                    /** @type {?} */
                    var labelBeforePos;
                    /** @type {?} */
                    var labelAfterPos;
                    if (this._getLayoutDirection() == 'ltr') {
                        labelBeforePos = offsetLeft;
                        labelAfterPos = labelBeforePos + offsetWidth;
                    }
                    else {
                        labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
                        labelBeforePos = labelAfterPos - offsetWidth;
                    }
                    /** @type {?} */
                    var beforeVisiblePos = this.scrollDistance;
                    /** @type {?} */
                    var afterVisiblePos = this.scrollDistance + viewLength;
                    if (labelBeforePos < beforeVisiblePos) {
                        // Scroll header to move label to the before direction
                        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
                    }
                    else if (labelAfterPos > afterVisiblePos) {
                        // Scroll header to move label to the after direction
                        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
                    }
                };
                /**
                 * Evaluate whether the pagination controls should be displayed. If the scroll width of the
                 * tab list is wider than the size of the header container, then the pagination controls should
                 * be shown.
                 *
                 * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
                 * should be called sparingly.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._checkPaginationEnabled = function () {
                    /** @type {?} */
                    var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
                    if (!isEnabled) {
                        this.scrollDistance = 0;
                    }
                    if (isEnabled !== this._showPaginationControls) {
                        this._changeDetectorRef.markForCheck();
                    }
                    this._showPaginationControls = isEnabled;
                };
                /**
                 * Evaluate whether the before and after controls should be enabled or disabled.
                 * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
                 * before button. If the header is at the end of the list (scroll distance is equal to the
                 * maximum distance we can scroll), then disable the after button.
                 *
                 * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
                 * should be called sparingly.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._checkScrollingControls = function () {
                    // Check if the pagination arrows should be activated.
                    this._disableScrollBefore = this.scrollDistance == 0;
                    this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Determines what is the maximum length in pixels that can be set for the scroll distance. This
                 * is equal to the difference in width between the tab list container and tab header container.
                 *
                 * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
                 * should be called sparingly.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._getMaxScrollDistance = function () {
                    /** @type {?} */
                    var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
                    /** @type {?} */
                    var viewLength = this._tabListContainer.nativeElement.offsetWidth;
                    return (lengthOfTabList - viewLength) || 0;
                };
                /**
                 * Tells the ink-bar to align itself to the current label wrapper
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._alignInkBarToSelectedTab = function () {
                    /** @type {?} */
                    var selectedItem = this._items && this._items.length ?
                        this._items.toArray()[this.selectedIndex] : null;
                    /** @type {?} */
                    var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
                    if (selectedLabelWrapper) {
                        this._inkBar.alignToElement(selectedLabelWrapper);
                    }
                    else {
                        this._inkBar.hide();
                    }
                };
                /**
                 * Stops the currently-running paginator interval.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._stopInterval = function () {
                    this._stopScrolling.next();
                };
                /**
                 * Handles the user pressing down on one of the paginators.
                 * Starts scrolling the header after a certain amount of time.
                 * @param {?} direction In which direction the paginator should be scrolled.
                 * @return {?}
                 */
                MatPaginatedTabHeader.prototype._handlePaginatorPress = function (direction) {
                    var _this = this;
                    // Avoid overlapping timers.
                    this._stopInterval();
                    // Start a timer after the delay and keep firing based on the interval.
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
                        // Keep the timer going until something tells it to stop or the component is destroyed.
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._stopScrolling, this._destroyed)))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        var _a = _this._scrollHeader(direction), maxScrollDistance = _a.maxScrollDistance, distance = _a.distance;
                        // Stop the timer if we've reached the start or the end.
                        if (distance === 0 || distance >= maxScrollDistance) {
                            _this._stopInterval();
                        }
                    }));
                };
                /**
                 * Scrolls the header to a given position.
                 * @private
                 * @param {?} position Position to which to scroll.
                 * @return {?} Information on the current scroll distance and the maximum.
                 */
                MatPaginatedTabHeader.prototype._scrollTo = function (position) {
                    /** @type {?} */
                    var maxScrollDistance = this._getMaxScrollDistance();
                    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
                    // Mark that the scroll distance has changed so that after the view is checked, the CSS
                    // transformation can move the header.
                    this._scrollDistanceChanged = true;
                    this._checkScrollingControls();
                    return { maxScrollDistance: maxScrollDistance, distance: this._scrollDistance };
                };
                return MatPaginatedTabHeader;
            }());
            MatPaginatedTabHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-paginated-tab-header'
                        },] },
            ];
            /** @nocollapse */
            MatPaginatedTabHeader.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Base class with all of the `MatTabHeader` functionality.
             * \@docs-private
             * @abstract
             */
            // tslint:disable-next-line:class-name
            var _MatTabHeaderBase = /** @class */ (function (_super) {
                __extends(_MatTabHeaderBase, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} changeDetectorRef
                 * @param {?} viewportRuler
                 * @param {?} dir
                 * @param {?} ngZone
                 * @param {?} platform
                 * @param {?=} animationMode
                 */
                function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
                // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
                animationMode) {
                    var _this = _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
                    _this._disableRipple = false;
                    return _this;
                }
                Object.defineProperty(_MatTabHeaderBase.prototype, "disableRipple", {
                    /**
                     * Whether the ripple effect is disabled or not.
                     * @return {?}
                     */
                    get: function () { return this._disableRipple; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @protected
                 * @param {?} event
                 * @return {?}
                 */
                _MatTabHeaderBase.prototype._itemSelected = function (event) {
                    event.preventDefault();
                };
                return _MatTabHeaderBase;
            }(MatPaginatedTabHeader));
            _MatTabHeaderBase.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-tab-header-base'
                        },] },
            ];
            /** @nocollapse */
            _MatTabHeaderBase.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            _MatTabHeaderBase.propDecorators = {
                disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * The header of the tab group which displays a list of all the tabs in the tab group. Includes
             * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
             * width of the header container, then arrows will be displayed to allow the user to scroll
             * left and right across the header.
             * \@docs-private
             */
            var MatTabHeader = /** @class */ (function (_super) {
                __extends(MatTabHeader, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} changeDetectorRef
                 * @param {?} viewportRuler
                 * @param {?} dir
                 * @param {?} ngZone
                 * @param {?} platform
                 * @param {?=} animationMode
                 */
                function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
                // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
                animationMode) {
                    return _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
                }
                return MatTabHeader;
            }(_MatTabHeaderBase));
            MatTabHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-tab-header',
                            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\" #previousPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\" (click)=\"_handlePaginatorClick('before')\" (mousedown)=\"_handlePaginatorPress('before')\" (touchend)=\"_stopInterval()\"><div class=\"mat-tab-header-pagination-chevron\"></div></div><div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\"><div #tabList class=\"mat-tab-list\" [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\" role=\"tablist\" (cdkObserveContent)=\"_onContentChanges()\"><div class=\"mat-tab-labels\"><ng-content></ng-content></div><mat-ink-bar></mat-ink-bar></div></div><div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\" #nextPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\" (mousedown)=\"_handlePaginatorPress('after')\" (click)=\"_handlePaginatorClick('after')\" (touchend)=\"_stopInterval()\"><div class=\"mat-tab-header-pagination-chevron\"></div></div>",
                            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{min-width:72px}}"],
                            inputs: ['selectedIndex'],
                            outputs: ['selectFocusedIndex', 'indexFocused'],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            host: {
                                'class': 'mat-tab-header',
                                '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                                '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                            },
                        },] },
            ];
            /** @nocollapse */
            MatTabHeader.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatTabHeader.propDecorators = {
                _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatTabLabelWrapper,] }],
                _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatInkBar, { static: true },] }],
                _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabListContainer', { static: true },] }],
                _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabList', { static: true },] }],
                _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nextPaginator', { static: false },] }],
                _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['previousPaginator', { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Base class with all of the `MatTabNav` functionality.
             * \@docs-private
             * @abstract
             */
            // tslint:disable-next-line:class-name
            var _MatTabNavBase = /** @class */ (function (_super) {
                __extends(_MatTabNavBase, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} dir
                 * @param {?} ngZone
                 * @param {?} changeDetectorRef
                 * @param {?} viewportRuler
                 * @param {?=} platform
                 * @param {?=} animationMode
                 */
                function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
                /**
                 * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
                 */
                platform, animationMode) {
                    var _this = _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
                    _this._disableRipple = false;
                    /**
                     * Theme color of the nav bar.
                     */
                    _this.color = 'primary';
                    return _this;
                }
                Object.defineProperty(_MatTabNavBase.prototype, "backgroundColor", {
                    /**
                     * Background color of the tab nav.
                     * @return {?}
                     */
                    get: function () { return this._backgroundColor; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var classList = this._elementRef.nativeElement.classList;
                        classList.remove("mat-background-" + this.backgroundColor);
                        if (value) {
                            classList.add("mat-background-" + value);
                        }
                        this._backgroundColor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(_MatTabNavBase.prototype, "disableRipple", {
                    /**
                     * Whether the ripple effect is disabled or not.
                     * @return {?}
                     */
                    get: function () { return this._disableRipple; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @protected
                 * @return {?}
                 */
                _MatTabNavBase.prototype._itemSelected = function () {
                    // noop
                };
                /**
                 * @return {?}
                 */
                _MatTabNavBase.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    // We need this to run before the `changes` subscription in parent to ensure that the
                    // selectedIndex is up-to-date by the time the super class starts looking for it.
                    this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.updateActiveLink();
                    }));
                    _super.prototype.ngAfterContentInit.call(this);
                };
                /**
                 * Notifies the component that the active link has been changed.
                 * \@breaking-change 8.0.0 `element` parameter to be removed.
                 * @param {?=} _element
                 * @return {?}
                 */
                _MatTabNavBase.prototype.updateActiveLink = function (_element) {
                    if (!this._items) {
                        return;
                    }
                    /** @type {?} */
                    var items = this._items.toArray();
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].active) {
                            this.selectedIndex = i;
                            this._changeDetectorRef.markForCheck();
                            return;
                        }
                    }
                    // The ink bar should hide itself if no items are active.
                    this.selectedIndex = -1;
                    this._inkBar.hide();
                };
                return _MatTabNavBase;
            }(MatPaginatedTabHeader));
            _MatTabNavBase.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-tab-nav-base'
                        },] },
            ];
            /** @nocollapse */
            _MatTabNavBase.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            _MatTabNavBase.propDecorators = {
                backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * Navigation component matching the styles of the tab group header.
             * Provides anchored navigation with animated ink bar.
             */
            var MatTabNav = /** @class */ (function (_super) {
                __extends(MatTabNav, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} dir
                 * @param {?} ngZone
                 * @param {?} changeDetectorRef
                 * @param {?} viewportRuler
                 * @param {?=} platform
                 * @param {?=} animationMode
                 */
                function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
                /**
                 * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
                 */
                platform, animationMode) {
                    return _super.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) || this;
                }
                return MatTabNav;
            }(_MatTabNavBase));
            MatTabNav.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: '[mat-tab-nav-bar]',
                            exportAs: 'matTabNavBar, matTabNav',
                            inputs: ['color'],
                            template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\" #previousPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\" (click)=\"_handlePaginatorClick('before')\" (mousedown)=\"_handlePaginatorPress('before')\" (touchend)=\"_stopInterval()\"><div class=\"mat-tab-header-pagination-chevron\"></div></div><div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\"><div class=\"mat-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\"><div class=\"mat-tab-links\"><ng-content></ng-content></div><mat-ink-bar></mat-ink-bar></div></div><div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\" #nextPaginator aria-hidden=\"true\" mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\" [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\" (mousedown)=\"_handlePaginatorPress('after')\" (click)=\"_handlePaginatorClick('after')\" (touchend)=\"_stopInterval()\"><div class=\"mat-tab-header-pagination-chevron\"></div></div>",
                            styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}"],
                            host: {
                                'class': 'mat-tab-nav-bar mat-tab-header',
                                '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                                '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                                '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                                '[class.mat-accent]': 'color === "accent"',
                                '[class.mat-warn]': 'color === "warn"',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatTabNav.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatTabNav.propDecorators = {
                _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                         * @return {?}
                                         */function () { return MatTabLink; })), { descendants: true },] }],
                _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatInkBar, { static: true },] }],
                _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabListContainer', { static: true },] }],
                _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabList', { static: true },] }],
                _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nextPaginator', { static: false },] }],
                _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['previousPaginator', { static: false },] }]
            };
            // Boilerplate for applying mixins to MatTabLink.
            var MatTabLinkMixinBase = /** @class */ (function () {
                function MatTabLinkMixinBase() {
                }
                return MatTabLinkMixinBase;
            }());
            /** @type {?} */
            var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatTabLinkMixinBase)));
            /**
             * Base class with all of the `MatTabLink` functionality.
             */
            // tslint:disable-next-line:class-name
            var _MatTabLinkBase = /** @class */ (function (_super) {
                __extends(_MatTabLinkBase, _super);
                /**
                 * @param {?} _tabNavBar
                 * @param {?} elementRef
                 * @param {?} globalRippleOptions
                 * @param {?} tabIndex
                 * @param {?} _focusMonitor
                 * @param {?=} animationMode
                 */
                function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
                    var _this = _super.call(this) || this;
                    _this._tabNavBar = _tabNavBar;
                    _this.elementRef = elementRef;
                    _this._focusMonitor = _focusMonitor;
                    /**
                     * Whether the tab link is active or not.
                     */
                    _this._isActive = false;
                    _this.rippleConfig = globalRippleOptions || {};
                    _this.tabIndex = parseInt(tabIndex) || 0;
                    if (animationMode === 'NoopAnimations') {
                        _this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
                    }
                    _focusMonitor.monitor(elementRef);
                    return _this;
                }
                Object.defineProperty(_MatTabLinkBase.prototype, "active", {
                    /**
                     * Whether the link is active.
                     * @return {?}
                     */
                    get: function () { return this._isActive; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value !== this._isActive) {
                            this._isActive = value;
                            this._tabNavBar.updateActiveLink(this.elementRef);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(_MatTabLinkBase.prototype, "rippleDisabled", {
                    /**
                     * Whether ripples are disabled on interaction.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple ||
                            !!this.rippleConfig.disabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                _MatTabLinkBase.prototype.focus = function () {
                    this.elementRef.nativeElement.focus();
                };
                /**
                 * @return {?}
                 */
                _MatTabLinkBase.prototype.ngOnDestroy = function () {
                    this._focusMonitor.stopMonitoring(this.elementRef);
                };
                return _MatTabLinkBase;
            }(_MatTabLinkMixinBase));
            _MatTabLinkBase.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            // TODO(crisbeto): this selector can be removed when we update to Angular 9.0.
                            selector: 'do-not-use-abstract-mat-tab-link-base'
                        },] },
            ];
            /** @nocollapse */
            _MatTabLinkBase.ctorParameters = function () { return [
                { type: _MatTabNavBase },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            _MatTabLinkBase.propDecorators = {
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * Link inside of a `mat-tab-nav-bar`.
             */
            var MatTabLink = /** @class */ (function (_super) {
                __extends(MatTabLink, _super);
                /**
                 * @param {?} tabNavBar
                 * @param {?} elementRef
                 * @param {?} ngZone
                 * @param {?} platform
                 * @param {?} globalRippleOptions
                 * @param {?} tabIndex
                 * @param {?} focusMonitor
                 * @param {?=} animationMode
                 */
                function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
                    var _this = _super.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode) || this;
                    _this._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["RippleRenderer"](_this, ngZone, elementRef, platform);
                    _this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
                    return _this;
                }
                /**
                 * @return {?}
                 */
                MatTabLink.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                    this._tabLinkRipple._removeTriggerEvents();
                };
                return MatTabLink;
            }(_MatTabLinkBase));
            MatTabLink.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[mat-tab-link], [matTabLink]',
                            exportAs: 'matTabLink',
                            inputs: ['disabled', 'disableRipple', 'tabIndex'],
                            host: {
                                'class': 'mat-tab-link',
                                '[attr.aria-current]': 'active ? "page" : null',
                                '[attr.aria-disabled]': 'disabled',
                                '[attr.tabIndex]': 'tabIndex',
                                '[class.mat-tab-disabled]': 'disabled',
                                '[class.mat-tab-label-active]': 'active',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatTabLink.ctorParameters = function () { return [
                { type: MatTabNav },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatTabsModule = /** @class */ (function () {
                function MatTabsModule() {
                }
                return MatTabsModule;
            }());
            MatTabsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"],
                                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["A11yModule"],
                            ],
                            // Don't export all components because some are only to be used internally.
                            exports: [
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                                MatTabGroup,
                                MatTabLabel,
                                MatTab,
                                MatTabNav,
                                MatTabLink,
                                MatTabContent,
                            ],
                            declarations: [
                                MatTabGroup,
                                MatTabLabel,
                                MatTab,
                                MatInkBar,
                                MatTabLabelWrapper,
                                MatTabNav,
                                MatTabLink,
                                MatTabBody,
                                MatTabBodyPortal,
                                MatTabHeader,
                                MatTabContent,
                                ( /** @type {?} */(
                                // TODO(crisbeto): these can be removed once they're turned into selector-less directives.
                                MatPaginatedTabHeader)),
                                ( /** @type {?} */(_MatTabGroupBase)),
                                ( /** @type {?} */(_MatTabNavBase)),
                                ( /** @type {?} */(_MatTabBodyBase)),
                                ( /** @type {?} */(_MatTabHeaderBase)),
                                ( /** @type {?} */(_MatTabLinkBase)),
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
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=tabs.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d-es2015.js.map
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d-es5.js.map
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~848b418d-es5.js.map