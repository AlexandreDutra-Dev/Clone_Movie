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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5"], {
        /***/ "./node_modules/@angular/cdk/esm2015/text-field.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/text-field.js ***!
          \*********************************************************/
        /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () { return AutofillMonitor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () { return CdkAutofill; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () { return CdkTextareaAutosize; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () { return TextFieldModule; });
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
             * Options to pass to the animationstart listener.
             * @type {?}
             */
            var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
            /**
             * An injectable service that can be used to monitor the autofill state of an input.
             * Based on the following blog post:
             * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
             */
            var AutofillMonitor = /** @class */ (function () {
                /**
                 * @param {?} _platform
                 * @param {?} _ngZone
                 */
                function AutofillMonitor(_platform, _ngZone) {
                    this._platform = _platform;
                    this._ngZone = _ngZone;
                    this._monitoredElements = new Map();
                }
                /**
                 * @param {?} elementOrRef
                 * @return {?}
                 */
                AutofillMonitor.prototype.monitor = function (elementOrRef) {
                    var _this = this;
                    if (!this._platform.isBrowser) {
                        return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
                    }
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
                    /** @type {?} */
                    var info = this._monitoredElements.get(element);
                    if (info) {
                        return info.subject.asObservable();
                    }
                    /** @type {?} */
                    var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /** @type {?} */
                    var cssClass = 'cdk-text-field-autofilled';
                    /** @type {?} */
                    var listener = ( /** @type {?} */((( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        // Animation events fire on initial element render, we check for the presence of the autofill
                        // CSS class to make sure this is a real change in state, not just the initial render before
                        // we fire off events.
                        if (event.animationName === 'cdk-text-field-autofill-start' &&
                            !element.classList.contains(cssClass)) {
                            element.classList.add(cssClass);
                            _this._ngZone.run(( /**
                             * @return {?}
                             */function () { return result.next({ target: ( /** @type {?} */(event.target)), isAutofilled: true }); }));
                        }
                        else if (event.animationName === 'cdk-text-field-autofill-end' &&
                            element.classList.contains(cssClass)) {
                            element.classList.remove(cssClass);
                            _this._ngZone.run(( /**
                             * @return {?}
                             */function () { return result.next({ target: ( /** @type {?} */(event.target)), isAutofilled: false }); }));
                        }
                    }))));
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        element.addEventListener('animationstart', listener, listenerOptions);
                        element.classList.add('cdk-text-field-autofill-monitored');
                    }));
                    this._monitoredElements.set(element, {
                        subject: result,
                        unlisten: ( /**
                         * @return {?}
                         */function () {
                            element.removeEventListener('animationstart', listener, listenerOptions);
                        })
                    });
                    return result.asObservable();
                };
                /**
                 * @param {?} elementOrRef
                 * @return {?}
                 */
                AutofillMonitor.prototype.stopMonitoring = function (elementOrRef) {
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
                    /** @type {?} */
                    var info = this._monitoredElements.get(element);
                    if (info) {
                        info.unlisten();
                        info.subject.complete();
                        element.classList.remove('cdk-text-field-autofill-monitored');
                        element.classList.remove('cdk-text-field-autofilled');
                        this._monitoredElements.delete(element);
                    }
                };
                /**
                 * @return {?}
                 */
                AutofillMonitor.prototype.ngOnDestroy = function () {
                    var _this = this;
                    this._monitoredElements.forEach(( /**
                     * @param {?} _info
                     * @param {?} element
                     * @return {?}
                     */function (_info, element) { return _this.stopMonitoring(element); }));
                };
                return AutofillMonitor;
            }());
            AutofillMonitor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            AutofillMonitor.ctorParameters = function () { return [
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            /** @nocollapse */ AutofillMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: AutofillMonitor, providedIn: "root" });
            /**
             * A directive that can be used to monitor the autofill state of an input.
             */
            var CdkAutofill = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _autofillMonitor
                 */
                function CdkAutofill(_elementRef, _autofillMonitor) {
                    this._elementRef = _elementRef;
                    this._autofillMonitor = _autofillMonitor;
                    /**
                     * Emits when the autofill state of the element changes.
                     */
                    this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                CdkAutofill.prototype.ngOnInit = function () {
                    var _this = this;
                    this._autofillMonitor
                        .monitor(this._elementRef)
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return _this.cdkAutofill.emit(event); }));
                };
                /**
                 * @return {?}
                 */
                CdkAutofill.prototype.ngOnDestroy = function () {
                    this._autofillMonitor.stopMonitoring(this._elementRef);
                };
                return CdkAutofill;
            }());
            CdkAutofill.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[cdkAutofill]',
                        },] },
            ];
            /** @nocollapse */
            CdkAutofill.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: AutofillMonitor }
            ]; };
            CdkAutofill.propDecorators = {
                cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Directive to automatically resize a textarea to fit its content.
             */
            var CdkTextareaAutosize = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _platform
                 * @param {?} _ngZone
                 */
                function CdkTextareaAutosize(_elementRef, _platform, _ngZone) {
                    this._elementRef = _elementRef;
                    this._platform = _platform;
                    this._ngZone = _ngZone;
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this._enabled = true;
                    /**
                     * Value of minRows as of last resize. If the minRows has decreased, the
                     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
                     * does not have the same problem because it does not affect the textarea's scrollHeight.
                     */
                    this._previousMinRows = -1;
                    this._textareaElement = ( /** @type {?} */(this._elementRef.nativeElement));
                }
                Object.defineProperty(CdkTextareaAutosize.prototype, "minRows", {
                    /**
                     * Minimum amount of rows in the textarea.
                     * @return {?}
                     */
                    get: function () { return this._minRows; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._minRows = value;
                        this._setMinHeight();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkTextareaAutosize.prototype, "maxRows", {
                    /**
                     * Maximum amount of rows in the textarea.
                     * @return {?}
                     */
                    get: function () { return this._maxRows; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._maxRows = value;
                        this._setMaxHeight();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkTextareaAutosize.prototype, "enabled", {
                    /**
                     * Whether autosizing is enabled or not
                     * @return {?}
                     */
                    get: function () { return this._enabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                        // Only act if the actual value changed. This specifically helps to not run
                        // resizeToFitContent too early (i.e. before ngAfterViewInit)
                        if (this._enabled !== value) {
                            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the minimum height of the textarea as determined by minRows.
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype._setMinHeight = function () {
                    /** @type {?} */
                    var minHeight = this.minRows && this._cachedLineHeight ?
                        this.minRows * this._cachedLineHeight + "px" : null;
                    if (minHeight) {
                        this._textareaElement.style.minHeight = minHeight;
                    }
                };
                /**
                 * Sets the maximum height of the textarea as determined by maxRows.
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype._setMaxHeight = function () {
                    /** @type {?} */
                    var maxHeight = this.maxRows && this._cachedLineHeight ?
                        this.maxRows * this._cachedLineHeight + "px" : null;
                    if (maxHeight) {
                        this._textareaElement.style.maxHeight = maxHeight;
                    }
                };
                /**
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (this._platform.isBrowser) {
                        // Remember the height which we started with in case autosizing is disabled
                        this._initialHeight = this._textareaElement.style.height;
                        this.resizeToFitContent();
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize')
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroyed))
                                .subscribe(( /**
                         * @return {?}
                         */function () { return _this.resizeToFitContent(true); }));
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype.ngOnDestroy = function () {
                    this._destroyed.next();
                    this._destroyed.complete();
                };
                /**
                 * Cache the height of a single-row textarea if it has not already been cached.
                 *
                 * We need to know how large a single "row" of a textarea is in order to apply minRows and
                 * maxRows. For the initial version, we will assume that the height of a single line in the
                 * textarea does not ever change.
                 * @private
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype._cacheTextareaLineHeight = function () {
                    if (this._cachedLineHeight) {
                        return;
                    }
                    // Use a clone element because we have to override some styles.
                    /** @type {?} */
                    var textareaClone = ( /** @type {?} */(this._textareaElement.cloneNode(false)));
                    textareaClone.rows = 1;
                    // Use `position: absolute` so that this doesn't cause a browser layout and use
                    // `visibility: hidden` so that nothing is rendered. Clear any other styles that
                    // would affect the height.
                    textareaClone.style.position = 'absolute';
                    textareaClone.style.visibility = 'hidden';
                    textareaClone.style.border = 'none';
                    textareaClone.style.padding = '0';
                    textareaClone.style.height = '';
                    textareaClone.style.minHeight = '';
                    textareaClone.style.maxHeight = '';
                    // In Firefox it happens that textarea elements are always bigger than the specified amount
                    // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
                    // As a workaround that removes the extra space for the scrollbar, we can just set overflow
                    // to hidden. This ensures that there is no invalid calculation of the line height.
                    // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
                    textareaClone.style.overflow = 'hidden';
                    ( /** @type {?} */(this._textareaElement.parentNode)).appendChild(textareaClone);
                    this._cachedLineHeight = textareaClone.clientHeight;
                    ( /** @type {?} */(this._textareaElement.parentNode)).removeChild(textareaClone);
                    // Min and max heights have to be re-calculated if the cached line height changes
                    this._setMinHeight();
                    this._setMaxHeight();
                };
                /**
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype.ngDoCheck = function () {
                    if (this._platform.isBrowser) {
                        this.resizeToFitContent();
                    }
                };
                /**
                 * Resize the textarea to fit its content.
                 * @param {?=} force Whether to force a height recalculation. By default the height will be
                 *    recalculated only if the value changed since the last call.
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype.resizeToFitContent = function (force) {
                    var _this = this;
                    if (force === void 0) { force = false; }
                    // If autosizing is disabled, just skip everything else
                    if (!this._enabled) {
                        return;
                    }
                    this._cacheTextareaLineHeight();
                    // If we haven't determined the line-height yet, we know we're still hidden and there's no point
                    // in checking the height of the textarea.
                    if (!this._cachedLineHeight) {
                        return;
                    }
                    /** @type {?} */
                    var textarea = ( /** @type {?} */(this._elementRef.nativeElement));
                    /** @type {?} */
                    var value = textarea.value;
                    // Only resize if the value or minRows have changed since these calculations can be expensive.
                    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
                        return;
                    }
                    /** @type {?} */
                    var placeholderText = textarea.placeholder;
                    // Reset the textarea height to auto in order to shrink back to its default size.
                    // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
                    // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
                    // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
                    // need to be removed temporarily.
                    textarea.classList.add('cdk-textarea-autosize-measuring');
                    textarea.placeholder = '';
                    // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
                    // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
                    /** @type {?} */
                    var height = textarea.scrollHeight - 4;
                    // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
                    textarea.style.height = height + "px";
                    textarea.classList.remove('cdk-textarea-autosize-measuring');
                    textarea.placeholder = placeholderText;
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        if (typeof requestAnimationFrame !== 'undefined') {
                            requestAnimationFrame(( /**
                             * @return {?}
                             */function () { return _this._scrollToCaretPosition(textarea); }));
                        }
                        else {
                            setTimeout(( /**
                             * @return {?}
                             */function () { return _this._scrollToCaretPosition(textarea); }));
                        }
                    }));
                    this._previousValue = value;
                    this._previousMinRows = this._minRows;
                };
                /**
                 * Resets the textarea to its original size
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype.reset = function () {
                    // Do not try to change the textarea, if the initialHeight has not been determined yet
                    // This might potentially remove styles when reset() is called before ngAfterViewInit
                    if (this._initialHeight === undefined) {
                        return;
                    }
                    this._textareaElement.style.height = this._initialHeight;
                };
                /**
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype._noopInputHandler = function () {
                    // no-op handler that ensures we're running change detection on input events.
                };
                /**
                 * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
                 * prevent it from scrolling to the caret position. We need to re-set the selection
                 * in order for it to scroll to the proper position.
                 * @private
                 * @param {?} textarea
                 * @return {?}
                 */
                CdkTextareaAutosize.prototype._scrollToCaretPosition = function (textarea) {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!this._destroyed.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                };
                return CdkTextareaAutosize;
            }());
            CdkTextareaAutosize.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'textarea[cdkTextareaAutosize]',
                            exportAs: 'cdkTextareaAutosize',
                            host: {
                                'class': 'cdk-textarea-autosize',
                                // Textarea elements that have the directive applied should have a single row by default.
                                // Browsers normally show two rows by default and therefore this limits the minRows binding.
                                'rows': '1',
                                '(input)': '_noopInputHandler()',
                            },
                        },] },
            ];
            /** @nocollapse */
            CdkTextareaAutosize.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            CdkTextareaAutosize.propDecorators = {
                minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMinRows',] }],
                maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMaxRows',] }],
                enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTextareaAutosize',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var TextFieldModule = /** @class */ (function () {
                function TextFieldModule() {
                }
                return TextFieldModule;
            }());
            TextFieldModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            declarations: [CdkAutofill, CdkTextareaAutosize],
                            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                            exports: [CdkAutofill, CdkTextareaAutosize],
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
            //# sourceMappingURL=text-field.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/icon.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/icon.js ***!
          \********************************************************/
        /*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function () { return MatIconModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () { return MAT_ICON_LOCATION_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () { return MAT_ICON_LOCATION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function () { return MatIcon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () { return getMatIconNameNotFoundError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () { return getMatIconNoHttpProviderError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () { return getMatIconFailedToSanitizeUrlError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () { return getMatIconFailedToSanitizeLiteralError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () { return ICON_REGISTRY_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () { return MatIconRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () { return ICON_REGISTRY_PROVIDER; });
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
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
             * Returns an exception to be thrown in the case when attempting to
             * load an icon with a name that cannot be found.
             * \@docs-private
             * @param {?} iconName
             * @return {?}
             */
            function getMatIconNameNotFoundError(iconName) {
                return Error("Unable to find icon with the name \"" + iconName + "\"");
            }
            /**
             * Returns an exception to be thrown when the consumer attempts to use
             * `<mat-icon>` without including \@angular/common/http.
             * \@docs-private
             * @return {?}
             */
            function getMatIconNoHttpProviderError() {
                return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
                    'Please include the HttpClientModule from @angular/common/http in your ' +
                    'app imports.');
            }
            /**
             * Returns an exception to be thrown when a URL couldn't be sanitized.
             * \@docs-private
             * @param {?} url URL that was attempted to be sanitized.
             * @return {?}
             */
            function getMatIconFailedToSanitizeUrlError(url) {
                return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " +
                    ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
            }
            /**
             * Returns an exception to be thrown when a HTML string couldn't be sanitized.
             * \@docs-private
             * @param {?} literal HTML that was attempted to be sanitized.
             * @return {?}
             */
            function getMatIconFailedToSanitizeLiteralError(literal) {
                return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " +
                    ("Angular's DomSanitizer. Attempted literal was \"" + literal + "\"."));
            }
            /**
             * Configuration for an icon, including the URL and possibly the cached SVG element.
             * \@docs-private
             */
            var SvgIconConfig = /** @class */ (function () {
                /**
                 * @param {?} data
                 * @param {?=} options
                 */
                function SvgIconConfig(data, options) {
                    this.options = options;
                    // Note that we can't use `instanceof SVGElement` here,
                    // because it'll break during server-side rendering.
                    if (!!(( /** @type {?} */(data))).nodeName) {
                        this.svgElement = ( /** @type {?} */(data));
                    }
                    else {
                        this.url = ( /** @type {?} */(data));
                    }
                }
                return SvgIconConfig;
            }());
            /**
             * Service to register and display icons used by the `<mat-icon>` component.
             * - Registers icon URLs by namespace and name.
             * - Registers icon set URLs by namespace.
             * - Registers aliases for CSS classes, for use with icon fonts.
             * - Loads icons from URLs and extracts individual icons from icon sets.
             */
            var MatIconRegistry = /** @class */ (function () {
                /**
                 * @param {?} _httpClient
                 * @param {?} _sanitizer
                 * @param {?} document
                 * @param {?=} _errorHandler
                 */
                function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
                    this._httpClient = _httpClient;
                    this._sanitizer = _sanitizer;
                    this._errorHandler = _errorHandler;
                    /**
                     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
                     */
                    this._svgIconConfigs = new Map();
                    /**
                     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
                     * Multiple icon sets can be registered under the same namespace.
                     */
                    this._iconSetConfigs = new Map();
                    /**
                     * Cache for icons loaded by direct URLs.
                     */
                    this._cachedIconsByUrl = new Map();
                    /**
                     * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
                     */
                    this._inProgressUrlFetches = new Map();
                    /**
                     * Map from font identifiers to their CSS class names. Used for icon fonts.
                     */
                    this._fontCssClassesByAlias = new Map();
                    /**
                     * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
                     * The default 'material-icons' value assumes that the material icon font has been loaded as
                     * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
                     */
                    this._defaultFontSetClass = 'material-icons';
                    this._document = document;
                }
                /**
                 * Registers an icon by URL in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIcon = function (iconName, url, options) {
                    return ( /** @type {?} */(this)).addSvgIconInNamespace('', iconName, url, options);
                };
                /**
                 * Registers an icon using an HTML string in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} literal SVG source of the icon.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconLiteral = function (iconName, literal, options) {
                    return ( /** @type {?} */(this)).addSvgIconLiteralInNamespace('', iconName, literal, options);
                };
                /**
                 * Registers an icon by URL in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which the icon should be registered.
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url, options) {
                    return ( /** @type {?} */(this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options));
                };
                /**
                 * Registers an icon using an HTML string in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which the icon should be registered.
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} literal SVG source of the icon.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconLiteralInNamespace = function (namespace, iconName, literal, options) {
                    /** @type {?} */
                    var sanitizedLiteral = ( /** @type {?} */(this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
                    if (!sanitizedLiteral) {
                        throw getMatIconFailedToSanitizeLiteralError(literal);
                    }
                    /** @type {?} */
                    var svgElement = ( /** @type {?} */(this))._createSvgElementForSingleIcon(sanitizedLiteral, options);
                    return ( /** @type {?} */(this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options));
                };
                /**
                 * Registers an icon set by URL in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSet = function (url, options) {
                    return ( /** @type {?} */(this)).addSvgIconSetInNamespace('', url, options);
                };
                /**
                 * Registers an icon set using an HTML string in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} literal SVG source of the icon set.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetLiteral = function (literal, options) {
                    return ( /** @type {?} */(this)).addSvgIconSetLiteralInNamespace('', literal, options);
                };
                /**
                 * Registers an icon set by URL in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon set.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url, options) {
                    return ( /** @type {?} */(this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options));
                };
                /**
                 * Registers an icon set using an HTML string in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon set.
                 * @param {?} literal SVG source of the icon set.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetLiteralInNamespace = function (namespace, literal, options) {
                    /** @type {?} */
                    var sanitizedLiteral = ( /** @type {?} */(this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
                    if (!sanitizedLiteral) {
                        throw getMatIconFailedToSanitizeLiteralError(literal);
                    }
                    /** @type {?} */
                    var svgElement = ( /** @type {?} */(this))._svgElementFromString(sanitizedLiteral);
                    return ( /** @type {?} */(this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options));
                };
                /**
                 * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
                 * component with the alias as the fontSet input will cause the class name to be applied
                 * to the `<mat-icon>` element.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?} alias Alias for the font.
                 * @param {?=} className Class name override to be used instead of the alias.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
                    if (className === void 0) { className = alias; }
                    ( /** @type {?} */(this))._fontCssClassesByAlias.set(alias, className);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Returns the CSS class name associated with the alias by a previous call to
                 * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
                 * @param {?} alias
                 * @return {?}
                 */
                MatIconRegistry.prototype.classNameForFontAlias = function (alias) {
                    return this._fontCssClassesByAlias.get(alias) || alias;
                };
                /**
                 * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
                 * have a fontSet input value, and is not loading an icon by name or URL.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?} className
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.setDefaultFontSetClass = function (className) {
                    ( /** @type {?} */(this))._defaultFontSetClass = className;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
                 * have a fontSet input value, and is not loading an icon by name or URL.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getDefaultFontSetClass = function () {
                    return this._defaultFontSetClass;
                };
                /**
                 * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
                 * The response from the URL may be cached so this will not always cause an HTTP request, but
                 * the produced element will always be a new copy of the originally fetched icon. (That is,
                 * it will not contain any modifications made to elements previously returned).
                 *
                 * @param {?} safeUrl URL from which to fetch the SVG icon.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getSvgIconFromUrl = function (safeUrl) {
                    var _this = this;
                    /** @type {?} */
                    var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
                    if (!url) {
                        throw getMatIconFailedToSanitizeUrlError(safeUrl);
                    }
                    /** @type {?} */
                    var cachedIcon = this._cachedIconsByUrl.get(url);
                    if (cachedIcon) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
                    }
                    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(( /**
                     * @param {?} svg
                     * @return {?}
                     */function (/**
                     * @param {?} svg
                     * @return {?}
                     */ svg) { return _this._cachedIconsByUrl.set(( /** @type {?} */(url)), svg); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @param {?} svg
                     * @return {?}
                     */function (/**
                     * @param {?} svg
                     * @return {?}
                     */ svg) { return cloneSvg(svg); })));
                };
                /**
                 * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
                 * and namespace. The icon must have been previously registered with addIcon or addIconSet;
                 * if not, the Observable will throw an error.
                 *
                 * @param {?} name Name of the icon to be retrieved.
                 * @param {?=} namespace Namespace in which to look for the icon.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
                    if (namespace === void 0) { namespace = ''; }
                    // Return (copy of) cached icon if possible.
                    /** @type {?} */
                    var key = iconKey(namespace, name);
                    /** @type {?} */
                    var config = this._svgIconConfigs.get(key);
                    if (config) {
                        return this._getSvgFromConfig(config);
                    }
                    // See if we have any icon sets registered for the namespace.
                    /** @type {?} */
                    var iconSetConfigs = this._iconSetConfigs.get(namespace);
                    if (iconSetConfigs) {
                        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
                };
                /**
                 * @return {?}
                 */
                MatIconRegistry.prototype.ngOnDestroy = function () {
                    this._svgIconConfigs.clear();
                    this._iconSetConfigs.clear();
                    this._cachedIconsByUrl.clear();
                };
                /**
                 * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._getSvgFromConfig = function (config) {
                    if (config.svgElement) {
                        // We already have the SVG element for this icon, return a copy.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
                    }
                    else {
                        // Fetch the icon from the config's URL, cache it, and return a copy.
                        return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return config.svgElement = svg; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return cloneSvg(svg); })));
                    }
                };
                /**
                 * Attempts to find an icon with the specified name in any of the SVG icon sets.
                 * First searches the available cached icons for a nested element with a matching name, and
                 * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
                 * that have not been cached, and searches again after all fetches are completed.
                 * The returned Observable produces the SVG element if possible, and throws
                 * an error if no icon with the specified name can be found.
                 * @private
                 * @param {?} name
                 * @param {?} iconSetConfigs
                 * @return {?}
                 */
                MatIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
                    var _this = this;
                    // For all the icon set SVG elements we've fetched, see if any contain an icon with the
                    // requested name.
                    /** @type {?} */
                    var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
                    if (namedIcon) {
                        // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
                        // time anyway, there's probably not much advantage compared to just always extracting
                        // it from the icon set.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
                    }
                    // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
                    // fetched, fetch them now and look for iconName in the results.
                    /** @type {?} */
                    var iconSetFetchRequests = iconSetConfigs
                        .filter(( /**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */function (/**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */ iconSetConfig) { return !iconSetConfig.svgElement; }))
                        .map(( /**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */function (/**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */ iconSetConfig) {
                        return _this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(( /**
                         * @param {?} err
                         * @return {?}
                         */function (err) {
                            /** @type {?} */
                            var url = _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                            // Swallow errors fetching individual URLs so the
                            // combined Observable won't necessarily fail.
                            /** @type {?} */
                            var errorMessage = "Loading icon set URL: " + url + " failed: " + err.message;
                            // @breaking-change 9.0.0 _errorHandler parameter to be made required
                            if (_this._errorHandler) {
                                _this._errorHandler.handleError(new Error(errorMessage));
                            }
                            else {
                                console.error(errorMessage);
                            }
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                        })));
                    }));
                    // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
                    // cached SVG element (unless the request failed), and we can check again for the icon.
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
                        if (!foundIcon) {
                            throw getMatIconNameNotFoundError(name);
                        }
                        return foundIcon;
                    })));
                };
                /**
                 * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
                 * tag matches the specified name. If found, copies the nested element to a new SVG element and
                 * returns it. Returns null if no matching element is found.
                 * @private
                 * @param {?} iconName
                 * @param {?} iconSetConfigs
                 * @return {?}
                 */
                MatIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
                    // Iterate backwards, so icon sets added later have precedence.
                    for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
                        /** @type {?} */
                        var config = iconSetConfigs[i];
                        if (config.svgElement) {
                            /** @type {?} */
                            var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);
                            if (foundIcon) {
                                return foundIcon;
                            }
                        }
                    }
                    return null;
                };
                /**
                 * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
                 * from it.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
                    var _this = this;
                    return this._fetchUrl(config.url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                 * @param {?} svgText
                 * @return {?}
                 */function (/**
                 * @param {?} svgText
                 * @return {?}
                 */ svgText) { return _this._createSvgElementForSingleIcon(svgText, config.options); })));
                };
                /**
                 * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
                 * from it.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
                    var _this = this;
                    // If the SVG for this icon set has already been parsed, do nothing.
                    if (config.svgElement) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
                    }
                    return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @param {?} svgText
                     * @return {?}
                     */function (/**
                     * @param {?} svgText
                     * @return {?}
                     */ svgText) {
                        // It is possible that the icon set was parsed and cached by an earlier request, so parsing
                        // only needs to occur if the cache is yet unset.
                        if (!config.svgElement) {
                            config.svgElement = _this._svgElementFromString(svgText);
                        }
                        return config.svgElement;
                    })));
                };
                /**
                 * Creates a DOM element from the given SVG string, and adds default attributes.
                 * @private
                 * @param {?} responseText
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, options) {
                    /** @type {?} */
                    var svg = this._svgElementFromString(responseText);
                    this._setSvgAttributes(svg, options);
                    return svg;
                };
                /**
                 * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
                 * tag matches the specified name. If found, copies the nested element to a new SVG element and
                 * returns it. Returns null if no matching element is found.
                 * @private
                 * @param {?} iconSet
                 * @param {?} iconName
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, options) {
                    // Use the `id="iconName"` syntax in order to escape special
                    // characters in the ID (versus using the #iconName syntax).
                    /** @type {?} */
                    var iconSource = iconSet.querySelector("[id=\"" + iconName + "\"]");
                    if (!iconSource) {
                        return null;
                    }
                    // Clone the element and remove the ID to prevent multiple elements from being added
                    // to the page with the same ID.
                    /** @type {?} */
                    var iconElement = ( /** @type {?} */(iconSource.cloneNode(true)));
                    iconElement.removeAttribute('id');
                    // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
                    // the content of a new <svg> node.
                    if (iconElement.nodeName.toLowerCase() === 'svg') {
                        return this._setSvgAttributes(( /** @type {?} */(iconElement)), options);
                    }
                    // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
                    // that the same could be achieved by referring to it via <use href="#id">, however the <use>
                    // tag is problematic on Firefox, because it needs to include the current page path.
                    if (iconElement.nodeName.toLowerCase() === 'symbol') {
                        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
                    }
                    // createElement('SVG') doesn't work as expected; the DOM ends up with
                    // the correct nodes, but the SVG content doesn't render. Instead we
                    // have to create an empty SVG node using innerHTML and append its content.
                    // Elements created using DOMParser.parseFromString have the same problem.
                    // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
                    /** @type {?} */
                    var svg = this._svgElementFromString('<svg></svg>');
                    // Clone the node so we don't remove it from the parent icon set element.
                    svg.appendChild(iconElement);
                    return this._setSvgAttributes(svg, options);
                };
                /**
                 * Creates a DOM element from the given SVG string.
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                MatIconRegistry.prototype._svgElementFromString = function (str) {
                    /** @type {?} */
                    var div = this._document.createElement('DIV');
                    div.innerHTML = str;
                    /** @type {?} */
                    var svg = ( /** @type {?} */(div.querySelector('svg')));
                    if (!svg) {
                        throw Error('<svg> tag not found');
                    }
                    return svg;
                };
                /**
                 * Converts an element into an SVG node by cloning all of its children.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                MatIconRegistry.prototype._toSvgElement = function (element) {
                    /** @type {?} */
                    var svg = this._svgElementFromString('<svg></svg>');
                    /** @type {?} */
                    var attributes = element.attributes;
                    // Copy over all the attributes from the `symbol` to the new SVG, except the id.
                    for (var i = 0; i < attributes.length; i++) {
                        var _a = attributes[i], name = _a.name, value = _a.value;
                        if (name !== 'id') {
                            svg.setAttribute(name, value);
                        }
                    }
                    for (var i = 0; i < element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                            svg.appendChild(element.childNodes[i].cloneNode(true));
                        }
                    }
                    return svg;
                };
                /**
                 * Sets the default attributes for an SVG element to be used as an icon.
                 * @private
                 * @param {?} svg
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._setSvgAttributes = function (svg, options) {
                    svg.setAttribute('fit', '');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
                    if (options && options.viewBox) {
                        svg.setAttribute('viewBox', options.viewBox);
                    }
                    return svg;
                };
                /**
                 * Returns an Observable which produces the string contents of the given URL. Results may be
                 * cached, so future calls with the same URL may not cause another HTTP request.
                 * @private
                 * @param {?} safeUrl
                 * @return {?}
                 */
                MatIconRegistry.prototype._fetchUrl = function (safeUrl) {
                    var _this = this;
                    if (!this._httpClient) {
                        throw getMatIconNoHttpProviderError();
                    }
                    if (safeUrl == null) {
                        throw Error("Cannot fetch icon from URL \"" + safeUrl + "\".");
                    }
                    /** @type {?} */
                    var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
                    if (!url) {
                        throw getMatIconFailedToSanitizeUrlError(safeUrl);
                    }
                    // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
                    // already a request in progress for that URL. It's necessary to call share() on the
                    // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
                    /** @type {?} */
                    var inProgressFetch = this._inProgressUrlFetches.get(url);
                    if (inProgressFetch) {
                        return inProgressFetch;
                    }
                    // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
                    // Observable. Figure out why and fix it.
                    /** @type {?} */
                    var req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(( /**
                     * @return {?}
                     */function () { return _this._inProgressUrlFetches.delete(url); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
                    this._inProgressUrlFetches.set(url, req);
                    return req;
                };
                /**
                 * Registers an icon config by name in the specified namespace.
                 * @private
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon config.
                 * @param {?} iconName Name under which to register the config.
                 * @param {?} config Config to be registered.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype._addSvgIconConfig = function (namespace, iconName, config) {
                    ( /** @type {?} */(this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Registers an icon set config in the specified namespace.
                 * @private
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon config.
                 * @param {?} config Config to be registered.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype._addSvgIconSetConfig = function (namespace, config) {
                    /** @type {?} */
                    var configNamespace = ( /** @type {?} */(this))._iconSetConfigs.get(namespace);
                    if (configNamespace) {
                        configNamespace.push(config);
                    }
                    else {
                        ( /** @type {?} */(this))._iconSetConfigs.set(namespace, [config]);
                    }
                    return ( /** @type {?} */(this));
                };
                return MatIconRegistry;
            }());
            MatIconRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            MatIconRegistry.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
            ]; };
            /** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], 8)); }, token: MatIconRegistry, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentRegistry
             * @param {?} httpClient
             * @param {?} sanitizer
             * @param {?=} document
             * @param {?=} errorHandler
             * @return {?}
             */
            function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
                return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var ICON_REGISTRY_PROVIDER = {
                // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
                provide: MatIconRegistry,
                deps: [
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ( /** @type {?} */(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
                ],
                useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
            };
            /**
             * Clones an SVGElement while preserving type information.
             * @param {?} svg
             * @return {?}
             */
            function cloneSvg(svg) {
                return ( /** @type {?} */(svg.cloneNode(true)));
            }
            /**
             * Returns the cache key to use for an icon namespace and name.
             * @param {?} namespace
             * @param {?} name
             * @return {?}
             */
            function iconKey(namespace, name) {
                return namespace + ':' + name;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatIcon.
            /**
             * \@docs-private
             */
            var MatIconBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatIconBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatIconBase;
            }());
            /** @type {?} */
            var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
            /**
             * Injection token used to provide the current location to `MatIcon`.
             * Used to handle server-side rendering and to stub out during unit tests.
             * \@docs-private
             * @type {?}
             */
            var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
                providedIn: 'root',
                factory: MAT_ICON_LOCATION_FACTORY
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_ICON_LOCATION_FACTORY() {
                /** @type {?} */
                var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
                /** @type {?} */
                var _location = _document ? _document.location : null;
                return {
                    // Note that this needs to be a function, rather than a property, because Angular
                    // will only resolve it once, but we want the current path on each call.
                    getPathname: ( /**
                     * @return {?}
                     */function () { return _location ? (_location.pathname + _location.search) : ''; })
                };
            }
            /**
             * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
             * @type {?}
             */
            var funcIriAttributes = [
                'clip-path',
                'color-profile',
                'src',
                'cursor',
                'fill',
                'filter',
                'marker',
                'marker-start',
                'marker-mid',
                'marker-end',
                'mask',
                'stroke'
            ];
            var ɵ0 = /**
             * @param {?} attr
             * @return {?}
             */ function (/**
             * @param {?} attr
             * @return {?}
             */ attr) { return "[" + attr + "]"; };
            /**
             * Selector that can be used to find all elements that are using a `FuncIRI`.
             * @type {?}
             */
            var funcIriAttributeSelector = funcIriAttributes.map((ɵ0)).join(', ');
            /**
             * Regex that can be used to extract the id out of a FuncIRI.
             * @type {?}
             */
            var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
            /**
             * Component to display an icon. It can be used in the following ways:
             *
             * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
             *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
             *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
             *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
             *   Examples:
             *     `<mat-icon svgIcon="left-arrow"></mat-icon>
             *     <mat-icon svgIcon="animals:cat"></mat-icon>`
             *
             * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
             *   component. By default the Material icons font is used as described at
             *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
             *   alternate font by setting the fontSet input to either the CSS class to apply to use the
             *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
             *   Examples:
             *     `<mat-icon>home</mat-icon>
             *     <mat-icon fontSet="myfont">sun</mat-icon>`
             *
             * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
             *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
             *   CSS class which causes the glyph to be displayed via a :before selector, as in
             *   https://fortawesome.github.io/Font-Awesome/examples/
             *   Example:
             *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
             */
            var MatIcon = /** @class */ (function (_super) {
                __extends(MatIcon, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _iconRegistry
                 * @param {?} ariaHidden
                 * @param {?=} _location
                 * @param {?=} _errorHandler
                 */
                function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
                    var _this = _super.call(this, elementRef) || this;
                    _this._iconRegistry = _iconRegistry;
                    _this._location = _location;
                    _this._errorHandler = _errorHandler;
                    _this._inline = false;
                    // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
                    // the right thing to do for the majority of icon use-cases.
                    if (!ariaHidden) {
                        elementRef.nativeElement.setAttribute('aria-hidden', 'true');
                    }
                    return _this;
                }
                Object.defineProperty(MatIcon.prototype, "inline", {
                    /**
                     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
                     * the element the icon is contained in.
                     * @return {?}
                     */
                    get: function () {
                        return this._inline;
                    },
                    /**
                     * @param {?} inline
                     * @return {?}
                     */
                    set: function (inline) {
                        this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(inline);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatIcon.prototype, "fontSet", {
                    /**
                     * Font set that the icon is a part of.
                     * @return {?}
                     */
                    get: function () { return this._fontSet; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._fontSet = this._cleanupFontValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatIcon.prototype, "fontIcon", {
                    /**
                     * Name of an icon within a font set.
                     * @return {?}
                     */
                    get: function () { return this._fontIcon; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._fontIcon = this._cleanupFontValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Splits an svgIcon binding value into its icon set and icon name components.
                 * Returns a 2-element array of [(icon set), (icon name)].
                 * The separator for the two fields is ':'. If there is no separator, an empty
                 * string is returned for the icon set and the entire value is returned for
                 * the icon name. If the argument is falsy, returns an array of two empty strings.
                 * Throws an error if the name contains two or more ':' separators.
                 * Examples:
                 *   `'social:cake' -> ['social', 'cake']
                 *   'penguin' -> ['', 'penguin']
                 *   null -> ['', '']
                 *   'a:b:c' -> (throws Error)`
                 * @private
                 * @param {?} iconName
                 * @return {?}
                 */
                MatIcon.prototype._splitIconName = function (iconName) {
                    if (!iconName) {
                        return ['', ''];
                    }
                    /** @type {?} */
                    var parts = iconName.split(':');
                    switch (parts.length) {
                        case 1: return ['', parts[0]]; // Use default namespace.
                        case 2: return ( /** @type {?} */(parts));
                        default: throw Error("Invalid icon name: \"" + iconName + "\"");
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatIcon.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
                    /** @type {?} */
                    var svgIconChanges = changes['svgIcon'];
                    if (svgIconChanges) {
                        if (this.svgIcon) {
                            var _a = __read(this._splitIconName(this.svgIcon), 2), namespace_1 = _a[0], iconName_1 = _a[1];
                            this._iconRegistry.getNamedSvgIcon(iconName_1, namespace_1)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                                .subscribe(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return _this._setSvgElement(svg); }), ( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                /** @type {?} */
                                var errorMessage = "Error retrieving icon " + namespace_1 + ":" + iconName_1 + "! " + err.message;
                                // @breaking-change 9.0.0 _errorHandler parameter to be made required.
                                if (_this._errorHandler) {
                                    _this._errorHandler.handleError(new Error(errorMessage));
                                }
                                else {
                                    console.error(errorMessage);
                                }
                            }));
                        }
                        else if (svgIconChanges.previousValue) {
                            this._clearSvgElement();
                        }
                    }
                    if (this._usingFontIcon()) {
                        this._updateFontIconClasses();
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngOnInit = function () {
                    // Update font classes because ngOnChanges won't be called if none of the inputs are present,
                    // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
                    if (this._usingFontIcon()) {
                        this._updateFontIconClasses();
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngAfterViewChecked = function () {
                    /** @type {?} */
                    var cachedElements = this._elementsWithExternalReferences;
                    if (cachedElements && this._location && cachedElements.size) {
                        /** @type {?} */
                        var newPath = this._location.getPathname();
                        // We need to check whether the URL has changed on each change detection since
                        // the browser doesn't have an API that will let us react on link clicks and
                        // we can't depend on the Angular router. The references need to be updated,
                        // because while most browsers don't care whether the URL is correct after
                        // the first render, Safari will break if the user navigates to a different
                        // page and the SVG isn't re-rendered.
                        if (newPath !== this._previousPath) {
                            this._previousPath = newPath;
                            this._prependPathToReferences(newPath);
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngOnDestroy = function () {
                    if (this._elementsWithExternalReferences) {
                        this._elementsWithExternalReferences.clear();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._usingFontIcon = function () {
                    return !this.svgIcon;
                };
                /**
                 * @private
                 * @param {?} svg
                 * @return {?}
                 */
                MatIcon.prototype._setSvgElement = function (svg) {
                    this._clearSvgElement();
                    // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
                    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
                    // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
                    /** @type {?} */
                    var styleTags = ( /** @type {?} */(svg.querySelectorAll('style')));
                    for (var i = 0; i < styleTags.length; i++) {
                        styleTags[i].textContent += ' ';
                    }
                    // Note: we do this fix here, rather than the icon registry, because the
                    // references have to point to the URL at the time that the icon was created.
                    if (this._location) {
                        /** @type {?} */
                        var path = this._location.getPathname();
                        this._previousPath = path;
                        this._cacheChildrenWithExternalReferences(svg);
                        this._prependPathToReferences(path);
                    }
                    this._elementRef.nativeElement.appendChild(svg);
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._clearSvgElement = function () {
                    /** @type {?} */
                    var layoutElement = this._elementRef.nativeElement;
                    /** @type {?} */
                    var childCount = layoutElement.childNodes.length;
                    if (this._elementsWithExternalReferences) {
                        this._elementsWithExternalReferences.clear();
                    }
                    // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
                    // we can't use innerHTML, because IE will throw if the element has a data binding.
                    while (childCount--) {
                        /** @type {?} */
                        var child = layoutElement.childNodes[childCount];
                        // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
                        // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
                        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                            layoutElement.removeChild(child);
                        }
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._updateFontIconClasses = function () {
                    if (!this._usingFontIcon()) {
                        return;
                    }
                    /** @type {?} */
                    var elem = this._elementRef.nativeElement;
                    /** @type {?} */
                    var fontSetClass = this.fontSet ?
                        this._iconRegistry.classNameForFontAlias(this.fontSet) :
                        this._iconRegistry.getDefaultFontSetClass();
                    if (fontSetClass != this._previousFontSetClass) {
                        if (this._previousFontSetClass) {
                            elem.classList.remove(this._previousFontSetClass);
                        }
                        if (fontSetClass) {
                            elem.classList.add(fontSetClass);
                        }
                        this._previousFontSetClass = fontSetClass;
                    }
                    if (this.fontIcon != this._previousFontIconClass) {
                        if (this._previousFontIconClass) {
                            elem.classList.remove(this._previousFontIconClass);
                        }
                        if (this.fontIcon) {
                            elem.classList.add(this.fontIcon);
                        }
                        this._previousFontIconClass = this.fontIcon;
                    }
                };
                /**
                 * Cleans up a value to be used as a fontIcon or fontSet.
                 * Since the value ends up being assigned as a CSS class, we
                 * have to trim the value and omit space-separated values.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatIcon.prototype._cleanupFontValue = function (value) {
                    return typeof value === 'string' ? value.trim().split(' ')[0] : value;
                };
                /**
                 * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
                 * reference. This is required because WebKit browsers require references to be prefixed with
                 * the current path, if the page has a `base` tag.
                 * @private
                 * @param {?} path
                 * @return {?}
                 */
                MatIcon.prototype._prependPathToReferences = function (path) {
                    /** @type {?} */
                    var elements = this._elementsWithExternalReferences;
                    if (elements) {
                        elements.forEach(( /**
                         * @param {?} attrs
                         * @param {?} element
                         * @return {?}
                         */function (attrs, element) {
                            attrs.forEach(( /**
                             * @param {?} attr
                             * @return {?}
                             */function (/**
                             * @param {?} attr
                             * @return {?}
                             */ attr) {
                                element.setAttribute(attr.name, "url('" + path + "#" + attr.value + "')");
                            }));
                        }));
                    }
                };
                /**
                 * Caches the children of an SVG element that have `url()`
                 * references that we need to prefix with the current path.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                MatIcon.prototype._cacheChildrenWithExternalReferences = function (element) {
                    /** @type {?} */
                    var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
                    /** @type {?} */
                    var elements = this._elementsWithExternalReferences =
                        this._elementsWithExternalReferences || new Map();
                    var _loop_1 = function (i) {
                        funcIriAttributes.forEach(( /**
                         * @param {?} attr
                         * @return {?}
                         */function (/**
                         * @param {?} attr
                         * @return {?}
                         */ attr) {
                            /** @type {?} */
                            var elementWithReference = elementsWithFuncIri[i];
                            /** @type {?} */
                            var value = elementWithReference.getAttribute(attr);
                            /** @type {?} */
                            var match = value ? value.match(funcIriPattern) : null;
                            if (match) {
                                /** @type {?} */
                                var attributes = elements.get(elementWithReference);
                                if (!attributes) {
                                    attributes = [];
                                    elements.set(elementWithReference, attributes);
                                }
                                ( /** @type {?} */(attributes)).push({ name: attr, value: match[1] });
                            }
                        }));
                    };
                    for (var i = 0; i < elementsWithFuncIri.length; i++) {
                        _loop_1(i);
                    }
                };
                return MatIcon;
            }(_MatIconMixinBase));
            MatIcon.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{ template: '<ng-content></ng-content>',
                            selector: 'mat-icon',
                            exportAs: 'matIcon',
                            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                            inputs: ['color'],
                            host: {
                                'role': 'img',
                                'class': 'mat-icon notranslate',
                                '[class.mat-icon-inline]': 'inline',
                                '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatIcon.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: MatIconRegistry },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
            ]; };
            MatIcon.propDecorators = {
                inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatIconModule = /** @class */ (function () {
                function MatIconModule() {
                }
                return MatIconModule;
            }());
            MatIconModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                            exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                            declarations: [MatIcon],
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
            //# sourceMappingURL=icon.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/input.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/input.js ***!
          \*********************************************************/
        /*! exports provided: MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () { return MatTextareaAutosize; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function () { return MatInput; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () { return getMatInputUnsupportedTypeError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function () { return MatInputModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () { return MAT_INPUT_VALUE_ACCESSOR; });
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
             * Directive to automatically resize a textarea to fit its content.
             * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
             * \@breaking-change 8.0.0
             */
            var MatTextareaAutosize = /** @class */ (function (_super) {
                __extends(MatTextareaAutosize, _super);
                function MatTextareaAutosize() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMinRows", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.minRows; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this.minRows = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMaxRows", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.maxRows; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this.maxRows = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTextareaAutosize.prototype, "matAutosize", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.enabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this.enabled = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTextareaAutosize.prototype, "matTextareaAutosize", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this.enabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this.enabled = value; },
                    enumerable: true,
                    configurable: true
                });
                return MatTextareaAutosize;
            }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]));
            MatTextareaAutosize.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                            exportAs: 'matTextareaAutosize',
                            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                            host: {
                                'class': 'cdk-textarea-autosize mat-autosize',
                                // Textarea elements that have the directive applied should have a single row by default.
                                // Browsers normally show two rows by default and therefore this limits the minRows binding.
                                'rows': '1',
                                '(input)': '_noopInputHandler()',
                            },
                        },] },
            ];
            MatTextareaAutosize.propDecorators = {
                matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-autosize',] }],
                matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@docs-private
             * @param {?} type
             * @return {?}
             */
            function getMatInputUnsupportedTypeError(type) {
                return Error("Input type \"" + type + "\" isn't supported by matInput.");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * This token is used to inject the object whose value should be set into `MatInput`. If none is
             * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
             * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
             * value to them.
             * @type {?}
             */
            var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
            /** @type {?} */
            var MAT_INPUT_INVALID_TYPES = [
                'button',
                'checkbox',
                'file',
                'hidden',
                'image',
                'radio',
                'range',
                'reset',
                'submit'
            ];
            /** @type {?} */
            var nextUniqueId = 0;
            // Boilerplate for applying mixins to MatInput.
            /**
             * \@docs-private
             */
            var MatInputBase = /** @class */ (function () {
                /**
                 * @param {?} _defaultErrorStateMatcher
                 * @param {?} _parentForm
                 * @param {?} _parentFormGroup
                 * @param {?} ngControl
                 */
                function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
                    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
                    this._parentForm = _parentForm;
                    this._parentFormGroup = _parentFormGroup;
                    this.ngControl = ngControl;
                }
                return MatInputBase;
            }());
            /** @type {?} */
            var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
            /**
             * Directive that allows a native input to work inside a `MatFormField`.
             */
            var MatInput = /** @class */ (function (_super) {
                __extends(MatInput, _super);
                /**
                 * @param {?} _elementRef
                 * @param {?} _platform
                 * @param {?} ngControl
                 * @param {?} _parentForm
                 * @param {?} _parentFormGroup
                 * @param {?} _defaultErrorStateMatcher
                 * @param {?} inputValueAccessor
                 * @param {?} _autofillMonitor
                 * @param {?} ngZone
                 */
                function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
                    var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
                    _this._elementRef = _elementRef;
                    _this._platform = _platform;
                    _this.ngControl = ngControl;
                    _this._autofillMonitor = _autofillMonitor;
                    _this._uid = "mat-input-" + nextUniqueId++;
                    /**
                     * Whether the component is being rendered on the server.
                     */
                    _this._isServer = false;
                    /**
                     * Whether the component is a native html select.
                     */
                    _this._isNativeSelect = false;
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     */
                    _this.focused = false;
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     */
                    _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     */
                    _this.controlType = 'mat-input';
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     */
                    _this.autofilled = false;
                    _this._disabled = false;
                    _this._required = false;
                    _this._type = 'text';
                    _this._readonly = false;
                    _this._neverEmptyInputTypes = [
                        'date',
                        'datetime',
                        'datetime-local',
                        'month',
                        'time',
                        'week'
                    ].filter(( /**
                     * @param {?} t
                     * @return {?}
                     */function (/**
                     * @param {?} t
                     * @return {?}
                     */ t) { return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t); }));
                    /** @type {?} */
                    var element = _this._elementRef.nativeElement;
                    // If no input value accessor was explicitly specified, use the element as the input value
                    // accessor.
                    _this._inputValueAccessor = inputValueAccessor || element;
                    _this._previousNativeValue = _this.value;
                    // Force setter to be called in case id was not specified.
                    _this.id = _this.id;
                    // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
                    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
                    // exists on iOS, we only bother to install the listener on iOS.
                    if (_platform.IOS) {
                        ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            _elementRef.nativeElement.addEventListener('keyup', ( /**
                             * @param {?} event
                             * @return {?}
                             */function (event) {
                                /** @type {?} */
                                var el = ( /** @type {?} */(event.target));
                                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                                    // Note: Just setting `0, 0` doesn't fix the issue. Setting
                                    // `1, 1` fixes it for the first time that you type text and
                                    // then hold delete. Toggling to `1, 1` and then back to
                                    // `0, 0` seems to completely fix it.
                                    el.setSelectionRange(1, 1);
                                    el.setSelectionRange(0, 0);
                                }
                            }));
                        }));
                    }
                    _this._isServer = !_this._platform.isBrowser;
                    _this._isNativeSelect = element.nodeName.toLowerCase() === 'select';
                    if (_this._isNativeSelect) {
                        _this.controlType = (( /** @type {?} */(element))).multiple ? 'mat-native-select-multiple' :
                            'mat-native-select';
                    }
                    return _this;
                }
                Object.defineProperty(MatInput.prototype, "disabled", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        if (this.ngControl && this.ngControl.disabled !== null) {
                            return this.ngControl.disabled;
                        }
                        return this._disabled;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                        // Browsers may not fire the blur event if the input is disabled too quickly.
                        // Reset from here to ensure that the element doesn't become stuck.
                        if (this.focused) {
                            this.focused = false;
                            this.stateChanges.next();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "id", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () { return this._id; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._id = value || this._uid; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "required", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "type", {
                    /**
                     * Input type of the element.
                     * @return {?}
                     */
                    get: function () { return this._type; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._type = value || 'text';
                        this._validateType();
                        // When using Angular inputs, developers are no longer able to set the properties on the native
                        // input element. To ensure that bindings for `type` work, we need to sync the setter
                        // with the native property. Textarea elements don't support the type property or attribute.
                        if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
                            (( /** @type {?} */(this._elementRef.nativeElement))).type = this._type;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "value", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () { return this._inputValueAccessor.value; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value !== this.value) {
                            this._inputValueAccessor.value = value;
                            this.stateChanges.next();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "readonly", {
                    /**
                     * Whether the element is readonly.
                     * @return {?}
                     */
                    get: function () { return this._readonly; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatInput.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._platform.isBrowser) {
                        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(( /**
                         * @param {?} event
                         * @return {?}
                         */function (/**
                         * @param {?} event
                         * @return {?}
                         */ event) {
                            _this.autofilled = event.isAutofilled;
                            _this.stateChanges.next();
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                MatInput.prototype.ngOnChanges = function () {
                    this.stateChanges.next();
                };
                /**
                 * @return {?}
                 */
                MatInput.prototype.ngOnDestroy = function () {
                    this.stateChanges.complete();
                    if (this._platform.isBrowser) {
                        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
                    }
                };
                /**
                 * @return {?}
                 */
                MatInput.prototype.ngDoCheck = function () {
                    if (this.ngControl) {
                        // We need to re-evaluate this on every change detection cycle, because there are some
                        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
                        // that whatever logic is in here has to be super lean or we risk destroying the performance.
                        this.updateErrorState();
                    }
                    // We need to dirty-check the native element's value, because there are some cases where
                    // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
                    // updating the value using `emitEvent: false`).
                    this._dirtyCheckNativeValue();
                };
                /**
                 * Focuses the input.
                 * @param {?=} options
                 * @return {?}
                 */
                MatInput.prototype.focus = function (options) {
                    this._elementRef.nativeElement.focus(options);
                };
                /**
                 * Callback for the cases where the focused state of the input changes.
                 * @param {?} isFocused
                 * @return {?}
                 */
                MatInput.prototype._focusChanged = function (isFocused) {
                    if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
                        this.focused = isFocused;
                        this.stateChanges.next();
                    }
                };
                /**
                 * @return {?}
                 */
                MatInput.prototype._onInput = function () {
                    // This is a noop function and is used to let Angular know whenever the value changes.
                    // Angular will run a new change detection each time the `input` event has been dispatched.
                    // It's necessary that Angular recognizes the value change, because when floatingLabel
                    // is set to false and Angular forms aren't used, the placeholder won't recognize the
                    // value changes and will not disappear.
                    // Listening to the input event wouldn't be necessary when the input is using the
                    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
                };
                /**
                 * Does some manual dirty checking on the native input `value` property.
                 * @protected
                 * @return {?}
                 */
                MatInput.prototype._dirtyCheckNativeValue = function () {
                    /** @type {?} */
                    var newValue = this._elementRef.nativeElement.value;
                    if (this._previousNativeValue !== newValue) {
                        this._previousNativeValue = newValue;
                        this.stateChanges.next();
                    }
                };
                /**
                 * Make sure the input is a supported type.
                 * @protected
                 * @return {?}
                 */
                MatInput.prototype._validateType = function () {
                    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
                        throw getMatInputUnsupportedTypeError(this._type);
                    }
                };
                /**
                 * Checks whether the input type is one of the types that are never empty.
                 * @protected
                 * @return {?}
                 */
                MatInput.prototype._isNeverEmpty = function () {
                    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
                };
                /**
                 * Checks whether the input is invalid based on the native validation.
                 * @protected
                 * @return {?}
                 */
                MatInput.prototype._isBadInput = function () {
                    // The `validity` property won't be present on platform-server.
                    /** @type {?} */
                    var validity = (( /** @type {?} */(this._elementRef.nativeElement))).validity;
                    return validity && validity.badInput;
                };
                /**
                 * Determines if the component host is a textarea.
                 * @protected
                 * @return {?}
                 */
                MatInput.prototype._isTextarea = function () {
                    return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
                };
                Object.defineProperty(MatInput.prototype, "empty", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
                            !this.autofilled;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatInput.prototype, "shouldLabelFloat", {
                    /**
                     * Implemented as part of MatFormFieldControl.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        if (this._isNativeSelect) {
                            // For a single-selection `<select>`, the label should float when the selected option has
                            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
                            // overlapping the label with the options.
                            /** @type {?} */
                            var selectElement = ( /** @type {?} */(this._elementRef.nativeElement));
                            /** @type {?} */
                            var firstOption = selectElement.options[0];
                            // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
                            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
                            return this.focused || selectElement.multiple || !this.empty ||
                                !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
                        }
                        else {
                            return this.focused || !this.empty;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @param {?} ids
                 * @return {?}
                 */
                MatInput.prototype.setDescribedByIds = function (ids) {
                    this._ariaDescribedby = ids.join(' ');
                };
                /**
                 * Implemented as part of MatFormFieldControl.
                 * \@docs-private
                 * @return {?}
                 */
                MatInput.prototype.onContainerClick = function () {
                    // Do not re-focus the input element if the element is already focused. Otherwise it can happen
                    // that someone clicks on a time input and the cursor resets to the "hours" field while the
                    // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
                    if (!this.focused) {
                        this.focus();
                    }
                };
                return MatInput;
            }(_MatInputMixinBase));
            MatInput.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
                            exportAs: 'matInput',
                            host: {
                                /**
                                 * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                                 */
                                'class': 'mat-input-element mat-form-field-autofill-control',
                                '[class.mat-input-server]': '_isServer',
                                // Native input properties that are overwritten by Angular inputs need to be synced with
                                // the native input element. Otherwise property bindings for those don't work.
                                '[attr.id]': 'id',
                                '[attr.placeholder]': 'placeholder',
                                '[disabled]': 'disabled',
                                '[required]': 'required',
                                '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                                '[attr.aria-describedby]': '_ariaDescribedby || null',
                                '[attr.aria-invalid]': 'errorState',
                                '[attr.aria-required]': 'required.toString()',
                                '(blur)': '_focusChanged(false)',
                                '(focus)': '_focusChanged(true)',
                                '(input)': '_onInput()',
                            },
                            providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], useExisting: MatInput }],
                        },] },
            ];
            /** @nocollapse */
            MatInput.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
                { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            MatInput.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatInputModule = /** @class */ (function () {
                function MatInputModule() {
                }
                return MatInputModule;
            }());
            MatInputModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            declarations: [MatInput, MatTextareaAutosize],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                            ],
                            exports: [
                                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                                // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                                // be used together with `MatFormField`.
                                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                                MatInput,
                                MatTextareaAutosize,
                            ],
                            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
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
            //# sourceMappingURL=input.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5-es2015.js.map
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5-es5.js.map
//# sourceMappingURL=default~components-genre-list-genre-list-module~components-movie-details-movie-details-module~compon~fdf253b5-es5.js.map