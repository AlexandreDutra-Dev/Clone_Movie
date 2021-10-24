(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tv-show-details-tv-show-details-module"],{

/***/ "./node_modules/primeng/fesm2015/primeng-tabview.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-tabview.js ***!
  \**********************************************************/
/*! exports provided: TabPanel, TabView, TabViewModule, TabViewNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return TabView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewModule", function() { return TabViewModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabViewNav", function() { return TabViewNav; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm2015/primeng-tooltip.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let idx = 0;
let TabViewNav = class TabViewNav {
    constructor() {
        this.orientation = 'top';
        this.onTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTabCloseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getDefaultHeaderClass(tab) {
        let styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    }
    clickTab(event, tab) {
        this.onTabClick.emit({
            originalEvent: event,
            tab: tab
        });
    }
    clickClose(event, tab) {
        this.onTabCloseClick.emit({
            originalEvent: event,
            tab: tab
        });
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabViewNav.prototype, "tabs", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabViewNav.prototype, "orientation", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], TabViewNav.prototype, "onTabClick", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], TabViewNav.prototype, "onTabCloseClick", void 0);
TabViewNav = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: '[p-tabViewNav]',
        host: {
            '[class.ui-tabview-nav]': 'true',
            '[class.ui-helper-reset]': 'true',
            '[class.ui-helper-clearfix]': 'true',
            '[class.ui-widget-header]': 'true',
            '[class.ui-corner-all]': 'true'
        },
        template: `
        <ng-template ngFor let-tab [ngForOf]="tabs">
            <li [class]="getDefaultHeaderClass(tab)" [ngStyle]="tab.headerStyle" role="presentation"
                [ngClass]="{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-disabled': tab.disabled}"
                (click)="clickTab($event,tab)" *ngIf="!tab.closed" tabindex="0" (keydown.enter)="clickTab($event,tab)">
                <a [attr.id]="tab.id + '-label'" role="tab" [attr.aria-selected]="tab.selected" [attr.aria-controls]="tab.id" [pTooltip]="tab.tooltip" [tooltipPosition]="tab.tooltipPosition" [positionStyle]="tab.tooltipPositionStyle" [tooltipStyleClass]="tab.tooltipStyleClass">
                    <ng-container *ngIf="!tab.headerTemplate" >
                        <span class="ui-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                        <span class="ui-tabview-title">{{tab.header}}</span>
                        <span class="ui-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
                    </ng-container>
                    <ng-container *ngIf="tab.headerTemplate">
                        <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                    </ng-container>
                </a>
                <span *ngIf="tab.closable" class="ui-tabview-close pi pi-times" (click)="clickClose($event,tab)"></span>
            </li>
        </ng-template>
    `
    })
], TabViewNav);
let TabPanel = class TabPanel {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
        this.cache = true;
        this.tooltipPosition = 'top';
        this.tooltipPositionStyle = 'absolute';
        this.id = `ui-tabpanel-${idx++}`;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        this.loaded = true;
    }
    ngOnDestroy() {
        this.view = null;
    }
};
TabPanel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "closable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "headerStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "headerStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "leftIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "rightIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "cache", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "tooltip", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "tooltipPosition", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "tooltipPositionStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "tooltipStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"])
], TabPanel.prototype, "templates", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabPanel.prototype, "selected", null);
TabPanel = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-tabPanel',
        template: `
        <div [attr.id]="id" class="ui-tabview-panel ui-widget-content" [ngClass]="{'ui-helper-hidden': !selected}"
            role="tabpanel" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id + '-label'" *ngIf="!closed">
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `
    })
], TabPanel);
let TabView = class TabView {
    constructor(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabPanels.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    initTabs() {
        this.tabs = this.tabPanels.toArray();
        let selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
        }
    }
    open(event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            let selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            let selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    }
    close(event, tab) {
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: () => {
                    this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    }
    closeTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            tab.selected = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    }
    findSelectedTab() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    findTabIndex(tab) {
        let index = -1;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }
        if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
            this.findSelectedTab().selected = false;
            this.tabs[this._activeIndex].selected = true;
        }
    }
};
TabView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabView.prototype, "orientation", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabView.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabView.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabView.prototype, "controlClose", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(TabPanel)
], TabView.prototype, "tabPanels", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], TabView.prototype, "onChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], TabView.prototype, "onClose", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], TabView.prototype, "activeIndexChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], TabView.prototype, "activeIndex", null);
TabView = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'p-tabView',
        template: `
        <div [ngClass]="'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation" [ngStyle]="style" [class]="styleClass">
            <ul p-tabViewNav role="tablist" *ngIf="orientation!='bottom'" [tabs]="tabs" [orientation]="orientation"
                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>
            <div class="ui-tabview-panels">
                <ng-content></ng-content>
            </div>
            <ul p-tabViewNav role="tablist" *ngIf="orientation=='bottom'" [tabs]="tabs" [orientation]="orientation"
                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>
        </div>
    `
    })
], TabView);
let TabViewModule = class TabViewModule {
};
TabViewModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]],
        exports: [TabView, TabPanel, TabViewNav, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        declarations: [TabView, TabPanel, TabViewNav]
    })
], TabViewModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tabview.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm2015/primeng-tooltip.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-tooltip.js ***!
  \**********************************************************/
/*! exports provided: Tooltip, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm2015/primeng-dom.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Tooltip = class Tooltip {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            if (this.tooltipEvent === 'hover') {
                this.mouseEnterListener = this.onMouseEnter.bind(this);
                this.mouseLeaveListener = this.onMouseLeave.bind(this);
                this.clickListener = this.onClick.bind(this);
                this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
                this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
                this.el.nativeElement.addEventListener('click', this.clickListener);
            }
            else if (this.tooltipEvent === 'focus') {
                this.focusListener = this.onFocus.bind(this);
                this.blurListener = this.onBlur.bind(this);
                this.el.nativeElement.addEventListener('focus', this.focusListener);
                this.el.nativeElement.addEventListener('blur', this.blurListener);
            }
        });
    }
    onMouseEnter(e) {
        if (!this.container && !this.showTimeout) {
            this.activate();
        }
    }
    onMouseLeave(e) {
        this.deactivate();
    }
    onFocus(e) {
        this.activate();
    }
    onBlur(e) {
        this.deactivate();
    }
    onClick(e) {
        this.deactivate();
    }
    activate() {
        this.active = true;
        this.clearHideTimeout();
        if (this.showDelay)
            this.showTimeout = setTimeout(() => { this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            let duration = this.showDelay ? this.life + this.showDelay : this.life;
            this.hideTimeout = setTimeout(() => { this.hide(); }, duration);
        }
    }
    deactivate() {
        this.active = false;
        this.clearShowTimeout();
        if (this.hideDelay) {
            this.clearHideTimeout(); //life timeout
            this.hideTimeout = setTimeout(() => { this.hide(); }, this.hideDelay);
        }
        else {
            this.hide();
        }
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
        if (this.active) {
            if (this._text) {
                if (this.container && this.container.offsetParent) {
                    this.updateText();
                    this.align();
                }
                else {
                    this.show();
                }
            }
            else {
                this.hide();
            }
        }
    }
    create() {
        this.container = document.createElement('div');
        let tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.el.nativeElement);
        else
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    }
    show() {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    }
    hide() {
        this.remove();
    }
    updateText() {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    }
    align() {
        let position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    }
    getHostOffset() {
        if (this.appendTo === 'body' || this.appendTo === 'target') {
            let offset = this.el.nativeElement.getBoundingClientRect();
            let targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
            let targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
            return { left: targetLeft, top: targetTop };
        }
        else {
            return { left: 0, top: 0 };
        }
    }
    alignRight() {
        this.preAlign('right');
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement);
        let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignLeft() {
        this.preAlign('left');
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        let top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignTop() {
        this.preAlign('top');
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        let top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    alignBottom() {
        this.preAlign('bottom');
        let hostOffset = this.getHostOffset();
        let left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        let top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    }
    preAlign(position) {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
        let defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
        this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
    }
    isOutOfBounds() {
        let offset = this.container.getBoundingClientRect();
        let targetTop = offset.top;
        let targetLeft = offset.left;
        let width = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        let height = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    }
    onWindowResize(e) {
        this.hide();
    }
    bindDocumentResizeListener() {
        this.zone.runOutsideAngular(() => {
            this.resizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.resizeListener);
        });
    }
    unbindDocumentResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }
    unbindEvents() {
        if (this.tooltipEvent === 'hover') {
            this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
            this.el.nativeElement.removeEventListener('click', this.clickListener);
        }
        else if (this.tooltipEvent === 'focus') {
            this.el.nativeElement.removeEventListener('focus', this.focusListener);
            this.el.nativeElement.removeEventListener('blur', this.blurListener);
        }
        this.unbindDocumentResizeListener();
    }
    remove() {
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeChild(this.container, this.appendTo);
        }
        this.unbindDocumentResizeListener();
        this.clearTimeouts();
        this.container = null;
    }
    clearShowTimeout() {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    }
    clearHideTimeout() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }
    clearTimeouts() {
        this.clearShowTimeout();
        this.clearHideTimeout();
    }
    ngOnDestroy() {
        this.unbindEvents();
        this.remove();
    }
};
Tooltip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "tooltipPosition", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "tooltipEvent", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "appendTo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "positionStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "tooltipStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "tooltipZIndex", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltipDisabled")
], Tooltip.prototype, "disabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "escape", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "showDelay", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "hideDelay", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Tooltip.prototype, "life", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pTooltip')
], Tooltip.prototype, "text", null);
Tooltip = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[pTooltip]'
    })
], Tooltip);
let TooltipModule = class TooltipModule {
};
TooltipModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [Tooltip],
        declarations: [Tooltip]
    })
], TooltipModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tooltip.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-movie\">\n    <div class=\"movie-details-modal\">\n        <a href=\"javascipt:void(0)\" class=\"float-right\">\n            <mat-icon class=\"cross-icon\" (click)=\"closeDialog()\">close</mat-icon>\n        </a>\n    </div>\n    <div *ngIf=\"data.video\" class=\"video-movie-main\">\n        <iframe [src]=\"data.video.url\" width=\"100%\" height=\"478px\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n            allowfullscreen></iframe>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/tv-show-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/tv-show-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero\">\n    <div class=\"backdrop\">\n        <div class=\"lazyloaded\">\n            <button class=\"play\" type=\"button\" (click)=\"openDialogTv(this.video)\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"55\" height=\"55\" viewBox=\"0 0 55 55\">\n                    <circle cx=\"27.5\" cy=\"27.5\" r=\"26.75\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\" stroke-width=\"1.5\" />\n                    <path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"\n                        d=\"M20.97 40.81L40.64 27.5 20.97 14.19v26.62z\" /></svg>\n            </button>\n            <img class=\"lazyload image\" src=\"https://image.tmdb.org/t/p/original/{{ episode?.backdrop_path }}\">\n        </div>\n    </div>\n    <div class=\"pane\">\n        <div>\n            <div class=\"name\">{{ episode?.name }}</div>\n            <div class=\"meta\">\n                <div class=\"info\">\n                    <span class=\"rate\">\n                        <i class=\"material-icons\">star</i><span>{{ episode?.vote_average }}</span> /10\n                    </span>\n                    <span> {{ episode?.vote_count | numberWithCommas }} Reviews</span>\n                    <span>Season {{ episode?.number_of_seasons }}</span>\n                    <span>{{ episode?.first_air_date | date: 'yyyy' }}</span>\n                </div>\n            </div>\n            <div class=\"desc\">{{ episode?.overview }}</div>\n            <button type=\"button\" class=\"button button--icon trailer\" (click)=\"openDialogTv(this.video)\">\n                <span class=\"mr-2\"><img src=\"assets/images/play.svg\"></span>\n                <span class=\"txt\">Watch Trailer</span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-tab-group class=\"mt-5 mb-5\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n                <mat-tab label=\"Overview\">\n                    <div class=\"listing-space info\">\n                        <div class=\"left\">\n                            <div class=\"poster\">\n                                <img src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{ episode?.poster_path }}\">\n                            </div>\n                        </div>\n                        <div class=\"right\">\n                            <div class=\"overview\">\n                                <h2 class=\"title\">Storyline</h2>\n                                <div>{{ episode?.overview}}</div>\n                            </div>\n                            <div class=\"stats\">\n                                <ul class=\"nolist\">\n                                    <li *ngIf=\"episode?.first_air_date\">\n                                        <div class=\"label\">\n                                            First Aired\n                                        </div>\n                                        <div class=\"value\">\n                                            {{episode?.first_air_date | fullDate }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.last_air_date\">\n                                        <div class=\"label\">\n                                            Last Aired\n                                        </div>\n                                        <div class=\"value\">\n                                            {{episode?.last_air_date | fullDate }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.episode_run_time\">\n                                        <div class=\"label\">\n                                            Runtime\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ episode?.episode_run_time | time  }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.created_by.length\">\n                                        <div class=\"label\">\n                                            Creater\n                                        </div>\n                                        <div class=\"comma_\" *ngFor=\"let creater of episode?.created_by\">\n                                            <a [routerLink]=\"['/person/', creater.id]\">{{ creater?.name }}</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.genres.length\">\n                                        <div class=\"label\">\n                                            Genre\n                                        </div>\n                                        <div class=\"comma_\" *ngFor=\"let genre of episode?.genres\">\n                                            <a routerLink=\"/genres-tv/{{genre.id}}/{{genre.name}}\">{{ genre?.name }}</a>\n                                        </div>\n                                    </li>\n\n                                    <li *ngIf=\"episode?.number_of_seasons\">\n                                        <div class=\"label\">\n                                            Seasons\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ episode?.number_of_seasons }}\n                                        </div>\n                                    </li>\n\n                                    <li *ngIf=\"episode?.status\">\n                                        <div class=\"label\">\n                                            Status\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ episode?.status }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.original_language\">\n                                        <div class=\"label\">\n                                            Language\n                                        </div>\n                                        <div class=\"value\">\n                                            {{ episode?.original_language | fullLanguage }}\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"episode?.networks?.length\">\n                                        <div class=\"label\">\n                                            Network\n                                        </div>\n                                        <div class=\"comma_\" *ngFor=\"let netwok of episode?.networks\">\n                                            {{ netwok?.name }}\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Videos\">\n                    <div class=\"listing-space videos__status\">\n                        <div class=\"items\">\n                            <div class=\"item\" *ngFor=\"let list of related_video\">\n                                <div (click)=\"openDialogTv(list)\" class=\"link\">\n                                    <div class=\"image lazyloaded\">\n                                        <img class=\"lazyload\"\n                                            src=\"https://img.youtube.com/vi/{{list?.key}}/mqdefault.jpg\">\n                                        <div class=\"play__icon\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\"\n                                                viewBox=\"0 0 55 55\">\n                                                <circle cx=\"27.5\" cy=\"27.5\" r=\"26.75\" fill=\"none\" stroke=\"#fff\"\n                                                    stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" />\n                                                <path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\"\n                                                    stroke-linejoin=\"round\" stroke-width=\"1.5\"\n                                                    d=\"M20.97 40.81L40.64 27.5 20.97 14.19v26.62z\" />\n                                            </svg>\n                                        </div>\n                                    </div>\n                                    <div class=\"name\">\n                                        {{list?.name}}\n                                    </div>\n                                    <div class=\"type\">\n                                        {{list?.type}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Photos\">\n                    <div class=\"listing-space backdrop_\">\n                        <div class=\"head\">\n                            <h2 class=\"title\">Backdrops</h2>\n                        </div>\n                        <div class=\"items\">\n                            <div class=\"item backdrop_\" *ngFor=\"let item of backdrop | slice: 1:10\">\n                                <div class=\"image\">\n                                    <img class=\"lazyload\"\n                                        src=\"https://image.tmdb.org/t/p/w533_and_h300_bestv2/{{ item?.file_path }}\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n            <div class=\"listing-space mt-20 mb-5\">\n                <div class=\"listing__head\">\n                    <h2 class=\"listing__title\">Recommended Movies</h2>\n                </div>\n                <p-carousel [value]=\"_recomend\" [numVisible]=\"6\" [numScroll]=\"4\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n                    <ng-template let-recomend pTemplate=\"item\">\n                        <div class=\"listing-item-style\" [routerLink]=\"['/tv/', recomend.id]\">\n                            <div class=\"overlay\">\n                                <div class=\"hover\"><i class=\"material-icons\">play_arrow</i> PLAY NOW</div>\n                            </div>\n                            <img *ngIf=\"recomend?.poster_path\"\n                                src=\"https://image.tmdb.org/t/p/w370_and_h556_bestv2/{{recomend?.poster_path}}\">\n                            <img *ngIf=\"!recomend?.poster_path\" src=\"assets/images/default-movie.png\">\n                            <h6>{{ recomend?.name }}</h6>\n                            <p class=\"rate\"><i class=\"material-icons\">star</i><span>{{recomend?.vote_average}}</span>\n                                /10</p>\n                            <div class=\"year\"><span>{{recomend?.release_date | date: 'yyyy'}}</span></div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHYtc2hvdy1kZXRhaWxzL2FwcC10di1kaWFsb2cvYXBwLXR2LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppTvDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTvDialogComponent", function() { return AppTvDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AppTvDialogComponent = class AppTvDialogComponent {
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
AppTvDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AppTvDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-tv-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-tv-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-tv-dialog.component.scss */ "./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AppTvDialogComponent);



/***/ }),

/***/ "./src/app/components/tv-show-details/tv-show-details-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TvShowDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsRoutingModule", function() { return TvShowDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tv_show_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-show-details.component */ "./src/app/components/tv-show-details/tv-show-details.component.ts");




const routes = [
    {
        path: '',
        component: _tv_show_details_component__WEBPACK_IMPORTED_MODULE_3__["TvShowDetailsComponent"]
    }
];
let TvShowDetailsRoutingModule = class TvShowDetailsRoutingModule {
};
TvShowDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TvShowDetailsRoutingModule);



/***/ }),

/***/ "./src/app/components/tv-show-details/tv-show-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHYtc2hvdy1kZXRhaWxzL3R2LXNob3ctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/tv-show-details/tv-show-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: TvShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsComponent", function() { return TvShowDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_tv_dialog_app_tv_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-tv-dialog/app-tv-dialog.component */ "./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.ts");
/* harmony import */ var src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/tv.service */ "./src/app/service/tv.service.ts");







let TvShowDetailsComponent = class TvShowDetailsComponent {
    constructor(tvService, router, sanitizer, dialog) {
        this.tvService = tvService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.autoplay = '?rel=0;&autoplay=1&mute=0';
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
            this.id = params.id;
            this.getTvDetails(this.id);
            this.getTvVideos(this.id);
            this.getTvCast(this.id);
            this.getTvBackropsImages(this.id);
            this.getRecomendTv(this.id);
        });
    }
    getTvDetails(id) {
        this.tvService.getTVShow(id).subscribe((res) => {
            this.episode = res;
        });
    }
    getTvVideos(id) {
        this.tvService.getTvVideos(id).subscribe((res) => {
            if (res.results.length) {
                this.video = res.results[0];
                this.related_video = res.results;
            }
        });
    }
    openDialogTv(video) {
        this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay);
        this.dialog.open(_app_tv_dialog_app_tv_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppTvDialogComponent"], {
            height: '600px',
            width: '900px',
            data: { video: this.video }
        });
    }
    getTvCast(id) {
        this.tvService.getMovieCredits(id).subscribe((res) => {
            this.casts = res.cast;
        });
    }
    getTvBackropsImages(id) {
        this.tvService.getTvBackdropsImages(id).subscribe((res) => {
            this.backdrop = res.backdrops;
        });
    }
    getRecomendTv(id) {
        this.tvService.getRecomendTv(id).subscribe((res) => {
            this._recomend = res.results;
        });
    }
};
TvShowDetailsComponent.ctorParameters = () => [
    { type: src_app_service_tv_service__WEBPACK_IMPORTED_MODULE_6__["TvService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
TvShowDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv-show-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tv-show-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tv-show-details/tv-show-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tv-show-details.component.scss */ "./src/app/components/tv-show-details/tv-show-details.component.scss")).default]
    })
], TvShowDetailsComponent);



/***/ }),

/***/ "./src/app/components/tv-show-details/tv-show-details.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details.module.ts ***!
  \**********************************************************************/
/*! exports provided: TvShowDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsModule", function() { return TvShowDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tv_show_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-show-details-routing.module */ "./src/app/components/tv-show-details/tv-show-details-routing.module.ts");
/* harmony import */ var _tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-show-details.component */ "./src/app/components/tv-show-details/tv-show-details.component.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_tv_dialog_app_tv_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-tv-dialog/app-tv-dialog.component */ "./src/app/components/tv-show-details/app-tv-dialog/app-tv-dialog.component.ts");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");











let TvShowDetailsModule = class TvShowDetailsModule {
};
TvShowDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__["TvShowDetailsComponent"],
            _app_tv_dialog_app_tv_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AppTvDialogComponent"]
        ],
        entryComponents: [
            _app_tv_dialog_app_tv_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AppTvDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tv_show_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["TvShowDetailsRoutingModule"],
            src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"]
        ]
    })
], TvShowDetailsModule);



/***/ })

}]);
//# sourceMappingURL=components-tv-show-details-tv-show-details-module-es2015.js.map