webpackJsonp(["common"],{

/***/ "../../../../../src/app/core/od-resource-crud.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODResourceCrud; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__od_resource__ = __webpack_require__("../../../../../src/app/core/od-resource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_resource__ = __webpack_require__("../../../../ngx-resource/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ODResourceCrud = class ODResourceCrud extends __WEBPACK_IMPORTED_MODULE_0__od_resource__["a" /* ODResource */] {
    constructor(http) {
        super(http);
    }
    // Alias to save
    create(data, callback) {
        return this.save(data, callback);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        isArray: true
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "query", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "get", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        path: '/{!id}'
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "get2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Post
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "save", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Put,
        path: '/{!_id}'
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "update", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ngx_resource__["b" /* ResourceAction */])({
        method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Delete,
        path: '/{!_id}'
    }),
    __metadata("design:type", Function)
], ODResourceCrud.prototype, "remove", void 0);
ODResourceCrud = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ODResourceCrud);



/***/ }),

/***/ "../../../../../src/app/core/od-resource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODResource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_resource__ = __webpack_require__("../../../../ngx-resource/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ODResource = class ODResource extends __WEBPACK_IMPORTED_MODULE_0_ngx_resource__["a" /* Resource */] {
    constructor(http) {
        super(http);
    }
};
ODResource = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0_ngx_resource__["c" /* ResourceParams */])({ url: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].host }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], ODResource);



/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_resource__ = __webpack_require__("../../../../ngx-resource/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_od_resource_crud__ = __webpack_require__("../../../../../src/app/core/od-resource-crud.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MainpageService = class MainpageService extends __WEBPACK_IMPORTED_MODULE_1__core_od_resource_crud__["a" /* ODResourceCrud */] {
    constructor(http, sanitizer) {
        super(http);
        this.sanitizer = sanitizer;
    }
    querySafeHtml() {
        return this.query().$observable.map(array => {
            array.forEach((value, index) => {
                if (typeof value.description.description == 'object')
                    return;
                array[index].description.description = this.sanitizer.bypassSecurityTrustHtml(value.description.description);
                array[index].description.short_description = this.sanitizer.bypassSecurityTrustHtml(value.description.short_description);
                array[index].title = this.sanitizer.bypassSecurityTrustHtml(value.title);
            });
            return array;
        });
    }
};
MainpageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0_ngx_resource__["c" /* ResourceParams */])({ pathPrefix: 'news' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
], MainpageService);



/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckbutton.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm2015/core.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            }
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Attribute 'name' is required on <ckbutton>");
        if (!this.command)
            throw new Error("Attribute 'command' is required on <ckbutton>");
    };
    return CKButtonDirective;
}());
CKButtonDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckbutton'
            },] },
];
/** @nocollapse */
CKButtonDirective.ctorParameters = function () { return []; };
CKButtonDirective.propDecorators = {
    'click': [{ type: core_1.Output },],
    'label': [{ type: core_1.Input },],
    'command': [{ type: core_1.Input },],
    'toolbar': [{ type: core_1.Input },],
    'name': [{ type: core_1.Input },],
    'icon': [{ type: core_1.Input },],
};
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__("../../../core/esm2015/core.js");
var forms_1 = __webpack_require__("../../../forms/esm2015/forms.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function () {
                _this.onTouched();
                var value = _this.instance.getData();
                // Debounce update
                if (_this.debounce) {
                    if (_this.debounceTimeout)
                        clearTimeout(_this.debounceTimeout);
                    _this.debounceTimeout = setTimeout(function () {
                        _this.updateValue(value);
                        _this.debounceTimeout = null;
                    }, parseInt(_this.debounce));
                    // Live update
                }
                else {
                    _this.updateValue(value);
                }
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CKEditorComponent;
}());
CKEditorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ckeditor',
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return CKEditorComponent; }),
                        multi: true
                    }
                ],
                template: "<textarea #host></textarea>",
            },] },
];
/** @nocollapse */
CKEditorComponent.ctorParameters = function () { return [
    { type: core_1.NgZone, },
]; };
CKEditorComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'readonly': [{ type: core_1.Input },],
    'debounce': [{ type: core_1.Input },],
    'change': [{ type: core_1.Output },],
    'ready': [{ type: core_1.Output },],
    'blur': [{ type: core_1.Output },],
    'focus': [{ type: core_1.Output },],
    'host': [{ type: core_1.ViewChild, args: ['host',] },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
    'toolbarGroups': [{ type: core_1.ContentChildren, args: [ckgroup_directive_1.CKGroupDirective,] },],
    'value': [{ type: core_1.Input },],
};
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm2015/core.js");
var common_1 = __webpack_require__("../../../common/esm2015/common.js");
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    return CKEditorModule;
}());
CKEditorModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ],
                exports: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ]
            },] },
];
/** @nocollapse */
CKEditorModule.ctorParameters = function () { return []; };
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckgroup.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm2015/core.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return button.toolbar = _this.name; });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    return CKGroupDirective;
}());
CKGroupDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckgroup'
            },] },
];
/** @nocollapse */
CKGroupDirective.ctorParameters = function () { return []; };
CKGroupDirective.propDecorators = {
    'name': [{ type: core_1.Input },],
    'previous': [{ type: core_1.Input },],
    'subgroupOf': [{ type: core_1.Input },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
};
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-resource/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__ = __webpack_require__("../../../../ngx-resource/src/ResourceProviders.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Resource__ = __webpack_require__("../../../../ngx-resource/src/Resource.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__ = __webpack_require__("../../../../ngx-resource/src/ResourceAction.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceAction__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceCRUD__ = __webpack_require__("../../../../ngx-resource/src/ResourceCRUD.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceCRUDBase__ = __webpack_require__("../../../../ngx-resource/src/ResourceCRUDBase.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceGlobalConfig__ = __webpack_require__("../../../../ngx-resource/src/ResourceGlobalConfig.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ResourceModel__ = __webpack_require__("../../../../ngx-resource/src/ResourceModel.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_ResourceODATA__ = __webpack_require__("../../../../ngx-resource/src/ResourceODATA.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_ResourceParams__ = __webpack_require__("../../../../ngx-resource/src/ResourceParams.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__src_ResourceParams__["a"]; });
/* unused harmony namespace reexport */













var ResourceModule = /** @class */ (function () {
    function ResourceModule() {
    }
    ResourceModule.forRoot = function () {
        return {
            ngModule: ResourceModule,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[__WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].mainProvidersName]
        };
    };
    ResourceModule.forChild = function (subSet) {
        return {
            ngModule: ResourceModule,
            providers: __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] ? __WEBPACK_IMPORTED_MODULE_3__src_ResourceProviders__["a" /* ResourceProviders */].providers[subSet] : []
        };
    };
    ResourceModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]]
                },] },
    ];
    /** @nocollapse */
    ResourceModule.ctorParameters = function () { return []; };
    return ResourceModule;
}());



/***/ }),

/***/ "../../../../ngx-resource/src/Resource.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_publish__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__ = __webpack_require__("../../../../ngx-resource/src/ResourceGlobalConfig.js");








var Resource = /** @class */ (function () {
    function Resource(http) {
        this.http = http;
        this.$url = null;
        this.$path = null;
        this.$headers = null;
        this.$params = null;
        this.$data = null;
    }
    Resource.$cleanData = function (obj) {
        if (Array.isArray(obj)) {
            return this.$cleanDataArray(obj);
        }
        else {
            return this.$cleanDataObject(obj);
        }
    };
    Resource.$cleanDataArray = function (obj) {
        for (var propName in obj) {
            if (typeof obj[propName] === 'function' || this.$cleanDataFields.indexOf(propName) > -1) {
                delete obj[propName];
            }
        }
        return obj;
    };
    Resource.$cleanDataObject = function (obj) {
        var cleanedObj = {};
        for (var propName in obj) {
            if (typeof obj[propName] !== 'function' && this.$cleanDataFields.indexOf(propName) === -1) {
                cleanedObj[propName] = obj[propName];
            }
        }
        return cleanedObj;
    };
    /**
     * Get main url of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.$getUrl = function (methodOptions) {
        return this.$url || this.$_getUrl(methodOptions) || __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].url || '';
    };
    /**
     * Set resource url
     * @param url
     */
    Resource.prototype.$setUrl = function (url) {
        this.$url = url;
    };
    /**
     * Get path of the resource
     * @returns {string|Promise<string>}
     */
    Resource.prototype.$getPath = function (methodOptions) {
        return this.$path || this.$_getPath(methodOptions) || __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].path || '';
    };
    /**
     * Set resource path
     * @param path
     */
    Resource.prototype.$setPath = function (path) {
        this.$path = path;
    };
    /**
     * Get headers
     * @returns {any|Promise<any>}
     */
    Resource.prototype.$getHeaders = function (methodOptions) {
        return this.$headers || this.$_getHeaders(methodOptions) || __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].headers || {};
    };
    /**
     * Set resource headers
     * @param headers
     */
    Resource.prototype.$setHeaders = function (headers) {
        this.$headers = headers;
    };
    /**
     * Get default params
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.$getParams = function (methodOptions) {
        return this.$params || this.$_getParams(methodOptions) || __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].params || {};
    };
    /**
     * Set default resource params
     * @param params
     */
    Resource.prototype.$setParams = function (params) {
        this.$params = params;
    };
    /**
     * Get default data
     * @returns {any|Promise<any>|{}}
     */
    Resource.prototype.$getData = function (methodOptions) {
        return this.$data || this.$_getData(methodOptions) || __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].data || {};
    };
    /**
     * Set default resource params
     * @param data
     */
    Resource.prototype.$setData = function (data) {
        this.$data = data;
    };
    /**
     * Create the model
     *
     * @returns {any}
     */
    Resource.prototype.$createModel = function () {
        var ret = this.$initResultObject();
        ret.$resource = this;
        return ret;
    };
    /**
     * Body serializer
     *
     * @param body
     * @returns {string}
     */
    Resource.prototype.$bodySerializer = function (body) {
        return JSON.stringify(body);
    };
    /**
     * That is called before executing request
     * @param req
     */
    Resource.prototype.$requestInterceptor = function (req, methodOptions) {
        return req;
    };
    /**
     * Request observable interceptor
     * @param observable
     * @returns {Observable<any>}
     */
    Resource.prototype.$responseInterceptor = function (observable, req, methodOptions) {
        return observable.map(function (res) { return res._body ? res.json() : null; });
    };
    // removeTrailingSlash(): boolean {
    //   return true;
    // }
    Resource.prototype.$initResultObject = function (methodOptions) {
        if (methodOptions === void 0) { methodOptions = null; }
        return {};
    };
    Resource.prototype.$map = function (item) {
        return item;
    };
    Resource.prototype.$filter = function (item) {
        return true;
    };
    Resource.prototype.$getResourceOptions = function () {
        return null;
    };
    Resource.prototype.$request = function (req, methodOptions) {
        if (methodOptions === void 0) { methodOptions = {}; }
        var requestObservable = this.http.request(req);
        // noinspection TypeScriptValidateTypes
        return methodOptions.responseInterceptor ?
            methodOptions.responseInterceptor(requestObservable, req, methodOptions) :
            this.$responseInterceptor(requestObservable, req, methodOptions);
    };
    Resource.prototype.$resourceAction = function (data, params, callback, onError, methodOptions) {
        this.$_setGlobalsToOptions(methodOptions);
        if (methodOptions.toObservable && methodOptions.isLazy === undefined) {
            methodOptions.isLazy = true;
        }
        var shell = {
            returnInternal: this.$_createReturnData(data, methodOptions),
            data: data,
            params: params,
            options: methodOptions,
            callback: callback,
            onError: onError
        };
        shell.returnExternal = methodOptions.lean ? this.$_createReturnData(data, methodOptions) : shell.returnInternal;
        this.$_cleanData(shell);
        this.$_fillInternal(shell);
        this.$_mainRequest(shell);
        var $observable = methodOptions.lean ? shell.returnInternal.$observable : shell.returnExternal.$observable;
        if (methodOptions.toObservable) {
            return $observable;
        }
        if (methodOptions.toPromise) {
            return $observable.toPromise();
        }
        return shell.returnExternal;
    };
    Resource.prototype.$_createReturnData = function (data, methodOptions) {
        if (methodOptions.isLazy) {
            return {};
        }
        if (methodOptions.isArray) {
            return [];
        }
        if (methodOptions.lean || !data || data.$resource !== this) {
            return this.$_initResultObject(methodOptions);
        }
        return data;
    };
    Resource.prototype.$_initResultObject = function (methodOptions) {
        return methodOptions.initResultObject ? methodOptions.initResultObject() : this.$initResultObject(methodOptions);
    };
    Resource.prototype.$_map = function (methodOptions) {
        return methodOptions.map ? methodOptions.map : this.$map;
    };
    Resource.prototype.$_filter = function (methodOptions) {
        return methodOptions.filter ? methodOptions.filter : this.$filter;
    };
    Resource.prototype.$_cleanData = function (shell) {
        if (shell.data && !shell.options.skipDataCleaning) {
            shell.data = shell.data.toJSON ? shell.data.toJSON() : Resource.$cleanData(shell.data);
        }
    };
    Resource.prototype.$_fillInternal = function (shell) {
        var returnInternal = shell.returnInternal;
        var $observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (subscriber) {
            shell.mainDeferredSubscriber = subscriber;
        }).flatMap(function () { return shell.mainObservable; });
        var $abortRequest = function () {
            returnInternal.$resolved = true;
        };
        if (!shell.options.isLazy) {
            $observable = $observable.publish();
            $observable.connect();
        }
        Object.defineProperty(returnInternal, '$resolved', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(returnInternal, '$observable', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: $observable
        });
        Object.defineProperty(returnInternal, '$abortRequest', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: $abortRequest
        });
        Object.defineProperty(returnInternal, '$resource', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: this
        });
    };
    Resource.prototype.$_mainRequest = function (shell) {
        var _this = this;
        this.$_resolveMainOptions(shell)
            .then(function (extraOptions) {
            shell.extraOptions = extraOptions;
            if (shell.returnInternal.$resolved) {
                shell.mainObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (subscriber) {
                    subscriber.next(null);
                });
                _this.$_releaseMainDeferredSubscriber(shell);
                return;
            }
            shell.url = extraOptions.url + extraOptions.path;
            _this.$_prepareDataParams(shell);
            _this.$_prepareBody(shell);
            _this.$_prepareSearch(shell);
            _this.$_createRequestOptions(shell);
            var mainRequest = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](shell.requestOptions);
            mainRequest = shell.options.requestInterceptor ?
                shell.options.requestInterceptor(mainRequest, shell.options) :
                _this.$requestInterceptor(mainRequest, shell.options);
            if (!mainRequest) {
                shell.mainObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                    observer.error(new Error('Request is null'));
                });
                console.warn('Request is null');
                _this.$_releaseMainDeferredSubscriber(shell);
                return;
            }
            // Doing the request
            var requestObservable = _this.$request(mainRequest, shell.options);
            shell.mainObservable = shell.options.isLazy ? requestObservable : _this.$_createMainObservable(shell, requestObservable);
            _this.$_releaseMainDeferredSubscriber(shell);
        });
    };
    Resource.prototype.$_resolveMainOptions = function (shell) {
        return Promise
            .all([
            Promise.resolve(shell.options.url || this.$getUrl(shell.options)),
            Promise.resolve(shell.options.path || this.$getPath(shell.options)),
            Promise.resolve(shell.options.headers || this.$getHeaders(shell.options)),
            Promise.resolve(shell.options.params || this.$getParams(shell.options)),
            Promise.resolve(shell.options.data || this.$getData(shell.options))
        ])
            .then(function (data) {
            if (shell.options.pathPrefix) {
                data[1] = shell.options.pathPrefix + data[1];
            }
            return {
                url: data[0],
                path: data[1],
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](data[2] ? Object.assign({}, data[2]) : data[2]),
                params: data[3] ? Object.assign({}, data[3]) : data[3],
                data: data[4]
            };
        });
    };
    Resource.prototype.$_releaseMainDeferredSubscriber = function (shell) {
        if (shell.mainDeferredSubscriber) {
            shell.mainDeferredSubscriber.next();
            shell.mainDeferredSubscriber.complete();
            shell.mainDeferredSubscriber = null;
        }
    };
    Resource.prototype.$_prepareDataParams = function (shell) {
        var usedPathParams = {};
        shell.usedPathParams = usedPathParams;
        if (!Array.isArray(shell.data) || shell.params) {
            if (!Array.isArray(shell.data)) {
                shell.data = Object.assign({}, shell.extraOptions.data, shell.data);
            }
            var pathParams = shell.url.match(/{([^}]*)}/g) || [];
            var _loop_1 = function (i) {
                var pathParam = pathParams[i];
                var pathKey = pathParam.substr(1, pathParam.length - 2);
                var isMandatory = pathKey[0] === '!';
                if (isMandatory) {
                    pathKey = pathKey.substr(1);
                }
                var isGetOnly = pathKey[0] === ':';
                if (isGetOnly) {
                    pathKey = pathKey.substr(1);
                }
                var value = this_1.$_getValueForPath(pathKey, shell.extraOptions.params, shell.params || shell.data, usedPathParams);
                if (isGetOnly && !shell.params) {
                    delete shell.data[pathKey];
                }
                if (this_1.$_isNullOrUndefined(value)) {
                    if (isMandatory) {
                        var consoleMsg_1 = "Mandatory " + pathParam + " path parameter is missing";
                        shell.mainObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
                            observer.error(new Error(consoleMsg_1));
                        });
                        console.warn(consoleMsg_1);
                        this_1.$_releaseMainDeferredSubscriber(shell);
                        throw new Error(consoleMsg_1);
                    }
                    shell.url = shell.url.substr(0, shell.url.indexOf(pathParam));
                    return "break";
                }
                // Replacing in the url
                shell.url = shell.url.replace(pathParam, value);
            };
            var this_1 = this;
            for (var i = 0; i < pathParams.length; i++) {
                var state_1 = _loop_1(i);
                if (state_1 === "break")
                    break;
            }
        }
        // Removing double slashed from final url
        shell.url = shell.url.replace(/\/\/+/g, '/');
        if (shell.url.startsWith('http')) {
            shell.url = shell.url.replace(':/', '://');
        }
        // Remove trailing slash
        if (typeof shell.options.removeTrailingSlash === 'undefined') {
            shell.options.removeTrailingSlash = true;
        }
        if (shell.options.removeTrailingSlash) {
            while (shell.url[shell.url.length - 1] === '/') {
                shell.url = shell.url.substr(0, shell.url.length - 1);
            }
        }
        // Remove mapped params
        for (var key in shell.extraOptions.params) {
            if (shell.extraOptions.params[key][0] === '@') {
                delete shell.extraOptions.params[key];
            }
        }
    };
    Resource.prototype.$_prepareBody = function (shell) {
        if (shell.options.method === __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get) {
            // GET
            shell.searchParams = Object.assign({}, shell.extraOptions.params, shell.data);
        }
        else {
            // NON GET
            if (shell.data) {
                var _body = {};
                if (shell.options.rootNode) {
                    _body["" + shell.options.rootNode] = shell.data;
                }
                else {
                    _body = shell.data;
                }
                // shell.body = JSON.stringify(_body);
                shell.body = shell.options.bodySerializer ? shell.options.bodySerializer(_body) : this.$bodySerializer(_body);
            }
            shell.searchParams = shell.params;
        }
        if (!shell.body) {
            shell.extraOptions.headers.delete('content-type');
        }
    };
    Resource.prototype.$_prepareSearch = function (shell) {
        shell.search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        if (!shell.params) {
            for (var key in shell.searchParams) {
                if (shell.searchParams.hasOwnProperty(key) && !shell.usedPathParams[key]) {
                    var value = shell.searchParams[key];
                    this.$_appendSearchParams(shell.search, key, value);
                }
            }
        }
        var tsName = shell.options.addTimestamp;
        if (tsName) {
            if (tsName === true) {
                tsName = 'ts';
            }
            shell.search.append(tsName, '' + Date.now());
        }
    };
    Resource.prototype.$_createRequestOptions = function (shell) {
        shell.requestOptions = {
            method: shell.options.method,
            headers: shell.extraOptions.headers,
            body: shell.body,
            url: shell.url,
            withCredentials: shell.options.withCredentials
        };
        if (shell.options.angularV2) {
            shell.requestOptions.search = shell.search;
        }
        else {
            shell.requestOptions.params = shell.search;
        }
    };
    Resource.prototype.$_createMainObservable = function (shell, requestObservable) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (subscriber) {
            var reqSubscr = requestObservable.subscribe(function (resp) {
                var filter = _this.$_filter(shell.options);
                var map = _this.$_map(shell.options);
                if (resp !== null) {
                    if (shell.options.isArray) {
                        // Expecting array
                        if (!Array.isArray(resp)) {
                            console.error('Returned data should be an array. Received', resp);
                        }
                        else {
                            (_a = shell.returnExternal).push.apply(_a, resp
                                .filter(filter)
                                .map(map)
                                .map(function (respItem) {
                                if (!respItem) {
                                    return respItem;
                                }
                                if (typeof respItem === 'object') {
                                    if (!shell.options.lean) {
                                        respItem.$resource = _this;
                                    }
                                    return _this.$_setDataToObject(_this.$_initResultObject(shell.options), respItem);
                                }
                                return respItem;
                            }));
                        }
                    }
                    else {
                        // Expecting object
                        if (Array.isArray(resp)) {
                            console.error('Returned data should be an object. Received', resp);
                        }
                        else {
                            if (filter(resp)) {
                                shell.returnExternal = _this.$_setDataToObject(shell.returnExternal, map(resp));
                            }
                        }
                    }
                }
                shell.returnInternal.$resolved = true;
                subscriber.next(shell.returnExternal);
                var _a;
            }, function (err) {
                subscriber.error(err);
                if (shell.onError) {
                    shell.onError(err);
                }
            }, function () {
                // shell.returnInternal.$resolved = true;
                subscriber.complete();
                if (shell.callback) {
                    shell.callback(shell.returnExternal);
                }
            });
            shell.returnInternal.$abortRequest = function () {
                if (shell.returnInternal.$resolved) {
                    return;
                }
                reqSubscr.unsubscribe();
                shell.returnInternal.$resolved = true;
            };
        });
    };
    Resource.prototype.$_setDataToObject = function (ret, resp) {
        if (ret.$setData) {
            ret.$setData(resp);
        }
        else {
            if (Array.isArray(resp)) {
                ret = resp;
            }
            else {
                Object.assign(ret, resp);
            }
        }
        return ret;
    };
    Resource.prototype.$_getValueForPath = function (key, params, data, usedPathParams) {
        if (!this.$_isNullOrUndefined(data[key]) && typeof data[key] !== 'object') {
            usedPathParams[key] = true;
            return data[key];
        }
        if (this.$_isNullOrUndefined(params[key])) {
            return null;
        }
        if (params[key][0] === '@') {
            return this.$_getValueForPath(params[key].substr(1), params, data, usedPathParams);
        }
        usedPathParams[key] = true;
        return params[key];
    };
    Resource.prototype.$_isNullOrUndefined = function (value) {
        return value === null || value === undefined;
    };
    Resource.prototype.$_appendSearchParams = function (search, key, value) {
        /// Convert dates to ISO format string
        if (value instanceof Date) {
            search.append(key, value.toISOString());
            return;
        }
        if (typeof value === 'object') {
            switch (__WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].getParamsMappingType) {
                case __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["b" /* TGetParamsMappingType */].Plain:
                    if (Array.isArray(value)) {
                        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                            var arr_value = value_1[_i];
                            search.append(key, arr_value);
                        }
                    }
                    else {
                        if (value && typeof value === 'object') {
                            /// Convert dates to ISO format string
                            if (value instanceof Date) {
                                value = value.toISOString();
                            }
                            else {
                                value = JSON.stringify(value);
                            }
                        }
                        search.append(key, value);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["b" /* TGetParamsMappingType */].Bracket:
                    /// Convert object and arrays to query params
                    for (var k in value) {
                        if (value.hasOwnProperty(k)) {
                            this.$_appendSearchParams(search, key + '[' + k + ']', value[k]);
                        }
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["b" /* TGetParamsMappingType */].JQueryParamsBracket:
                    /// Convert object and arrays to query params according to $.params
                    for (var k in value) {
                        if (value.hasOwnProperty(k)) {
                            var path = key + "[" + k + "]";
                            if (Array.isArray(value) && typeof value[k] !== 'object') {
                                path = key + "[]";
                            }
                            this.$_appendSearchParams(search, path, value[k]);
                        }
                    }
                    break;
            }
            return;
        }
        search.append(key, value);
    };
    /**
     * Get url to be replaced by ResourceParamsBase
     *
     * @param methodOptions
     * @returns { any | Promise<any>}
     * @private
     */
    Resource.prototype.$_getUrl = function (methodOptions) {
        return null;
    };
    /**
     * Get get path to be replaced by ResourceParamsBase
     *
     * @param methodOptions
     * @returns { any | Promise<any>}
     * @private
     */
    Resource.prototype.$_getPath = function (methodOptions) {
        return null;
    };
    /**
     * Get headers to be replaced by ResourceParamsBase
     *
     * @param methodOptions
     * @returns { any | Promise<any>}
     * @private
     */
    Resource.prototype.$_getHeaders = function (methodOptions) {
        return null;
    };
    /**
     * Get params to be replaced by ResourceParamsBase
     *
     * @param methodOptions
     * @returns { any | Promise<any>}
     * @private
     */
    Resource.prototype.$_getParams = function (methodOptions) {
        return null;
    };
    /**
     * Get data to be replaced by ResourceParamsBase
     *
     * @param methodOptions
     * @returns { any | Promise<any>}
     * @private
     */
    Resource.prototype.$_getData = function (methodOptions) {
        return null;
    };
    Resource.prototype.$_setGlobalsToOptions = function (methodOptions) {
        if (methodOptions.toPromise === undefined && __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].toPromise !== null) {
            methodOptions.toPromise = __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].toPromise;
        }
        if (methodOptions.toObservable === undefined && __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].toObservable !== null) {
            methodOptions.toObservable = __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].toObservable;
        }
        if (methodOptions.lean === undefined && __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].lean !== null) {
            methodOptions.lean = __WEBPACK_IMPORTED_MODULE_7__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].lean;
        }
    };
    Resource.$cleanDataFields = [
        '$cleanDataFields',
        '$resolved',
        '$observable',
        '$abortRequest',
        '$resource'
    ];
    Resource.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Resource.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    ]; };
    return Resource;
}());



/***/ }),

/***/ "../../../../ngx-resource/src/ResourceAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceAction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");

function ResourceAction(methodOptions) {
    methodOptions = methodOptions || {};
    if (methodOptions.method === undefined) {
        methodOptions.method = __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get;
    }
    return function (target, propertyKey) {
        target[propertyKey] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var data = null;
            var params = null;
            var callback = null;
            var onError = null;
            args.forEach(function (arg) {
                if (typeof arg === 'function') {
                    if (callback) {
                        onError = arg;
                    }
                    else {
                        callback = arg;
                    }
                }
                else {
                    if (data) {
                        params = arg;
                    }
                    else {
                        data = arg;
                    }
                }
            });
            var options = Object.assign({}, this.getResourceOptions(), methodOptions);
            return this.$resourceAction(data, params, callback, onError, options);
        };
    };
}


/***/ }),

/***/ "../../../../ngx-resource/src/ResourceCRUD.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceCRUD */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__("../../../../ngx-resource/src/Resource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__("../../../../ngx-resource/src/ResourceAction.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUD = /** @class */ (function (_super) {
    __extends(ResourceCRUD, _super);
    function ResourceCRUD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUD.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            isArray: true
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "query", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "get", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Put,
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete,
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "remove", void 0);
    return ResourceCRUD;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));



/***/ }),

/***/ "../../../../ngx-resource/src/ResourceCRUDBase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceCRUDBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Resource__ = __webpack_require__("../../../../ngx-resource/src/Resource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceAction__ = __webpack_require__("../../../../ngx-resource/src/ResourceAction.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUDBase = /** @class */ (function (_super) {
    __extends(ResourceCRUDBase, _super);
    function ResourceCRUDBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUDBase.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            isArray: true
        }),
        __metadata("design:type", Function)
    ], ResourceCRUDBase.prototype, "query", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])(),
        __metadata("design:type", Function)
    ], ResourceCRUDBase.prototype, "get", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post
        }),
        __metadata("design:type", Function)
    ], ResourceCRUDBase.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Put
        }),
        __metadata("design:type", Function)
    ], ResourceCRUDBase.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete
        }),
        __metadata("design:type", Function)
    ], ResourceCRUDBase.prototype, "remove", void 0);
    return ResourceCRUDBase;
}(__WEBPACK_IMPORTED_MODULE_1__Resource__["a" /* Resource */]));



/***/ }),

/***/ "../../../../ngx-resource/src/ResourceGlobalConfig.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TGetParamsMappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceGlobalConfig; });
var TGetParamsMappingType;
(function (TGetParamsMappingType) {
    TGetParamsMappingType[TGetParamsMappingType["Plain"] = 0] = "Plain";
    TGetParamsMappingType[TGetParamsMappingType["Bracket"] = 1] = "Bracket";
    TGetParamsMappingType[TGetParamsMappingType["JQueryParamsBracket"] = 2] = "JQueryParamsBracket";
})(TGetParamsMappingType || (TGetParamsMappingType = {}));
var ResourceGlobalConfig = /** @class */ (function () {
    function ResourceGlobalConfig() {
    }
    ResourceGlobalConfig.url = null;
    ResourceGlobalConfig.path = null;
    ResourceGlobalConfig.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    ResourceGlobalConfig.params = null;
    ResourceGlobalConfig.data = null;
    ResourceGlobalConfig.add2Provides = null;
    ResourceGlobalConfig.lean = null;
    ResourceGlobalConfig.toPromise = null;
    ResourceGlobalConfig.toObservable = null;
    ResourceGlobalConfig.getParamsMappingType = TGetParamsMappingType.Plain;
    return ResourceGlobalConfig;
}());



/***/ }),

/***/ "../../../../ngx-resource/src/ResourceModel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource__ = __webpack_require__("../../../../ngx-resource/src/Resource.js");

var ResourceModel = /** @class */ (function () {
    function ResourceModel() {
    }
    ResourceModel.prototype.$setData = function (data) {
        Object.assign(this, data);
        return this;
    };
    ResourceModel.prototype.$save = function () {
        if (this.isNew()) {
            return this.$create();
        }
        else {
            return this.$update();
        }
    };
    ResourceModel.prototype.$create = function () {
        return this.$resource_method('create');
    };
    ResourceModel.prototype.$update = function () {
        return this.$resource_method('update');
    };
    ResourceModel.prototype.$remove = function () {
        return this.$resource_method('remove');
    };
    ResourceModel.prototype.toJSON = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Resource__["a" /* Resource */].$cleanData(this);
    };
    ResourceModel.prototype.isNew = function () {
        return !this['id'];
    };
    ResourceModel.prototype.$resource_method = function (methodName) {
        if (!this.$resource) {
            console.error("Your Resource is not set. Please use resource.createModel() method to create model.");
            return this;
        }
        if (!this.$resource[methodName]) {
            console.error("Your Resource has no implemented " + methodName + " method.");
            return this;
        }
        this.$resource[methodName](this);
        return this;
    };
    return ResourceModel;
}());



/***/ }),

/***/ "../../../../ngx-resource/src/ResourceODATA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceODATA */
/* unused harmony export ResourceODATAParams */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Resource__ = __webpack_require__("../../../../ngx-resource/src/Resource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResourceAction__ = __webpack_require__("../../../../ngx-resource/src/ResourceAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResourceParams__ = __webpack_require__("../../../../ngx-resource/src/ResourceParams.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** A Resource base class for ODATA entities. To create a resource is just
 * enough to extend this class and all the base ODATA functionalities will be present.
 */
var ResourceODATA = /** @class */ (function (_super) {
    __extends(ResourceODATA, _super);
    function ResourceODATA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceODATA.prototype.$getUrl = function () {
        return _super.prototype.$getUrl.call(this) + "/" + this.getEntitySetName();
    };
    ResourceODATA.prototype.getEntityName = function () {
        return null;
    };
    ResourceODATA.prototype.getEntitySetName = function () {
        return this.getEntityName() + "s";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ResourceAction__["a" /* ResourceAction */])({
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceODATA.prototype, "get", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post
        }),
        __metadata("design:type", Function)
    ], ResourceODATA.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ResourceAction__["a" /* ResourceAction */])({
            params: {
                "$filter": "@$filter",
                "$search": "@$search",
                "$expand": "@$expand",
                "$limit": "@$limit",
                "query": "@query"
            },
            isArray: true
        }),
        __metadata("design:type", Function)
    ], ResourceODATA.prototype, "search", void 0);
    return ResourceODATA;
}(__WEBPACK_IMPORTED_MODULE_2__Resource__["a" /* Resource */]));

/**
 * A ODATA annotation for a resource for a ODATA entity resource extending {@link ResourceODATA}.
 */
function ResourceODATAParams(params) {
    var injectable = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])();
    var zuper = Object(__WEBPACK_IMPORTED_MODULE_4__ResourceParams__["a" /* ResourceParams */])(params);
    return function (target) {
        injectable(target);
        zuper(target);
        target.prototype.getEntityName = function () {
            if (params.name) {
                return params.name;
            }
            return typeof params.entity === "string" ? params.entity : params.entity.name;
        };
    };
}


/***/ }),

/***/ "../../../../ngx-resource/src/ResourceParams.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceParams;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__ = __webpack_require__("../../../../ngx-resource/src/ResourceProviders.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__ = __webpack_require__("../../../../ngx-resource/src/ResourceGlobalConfig.js");


function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.prototype.getResourceOptions = function () {
            return params;
        };
        if (params.add2Provides === undefined && __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].add2Provides !== null) {
            params.add2Provides = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].add2Provides;
        }
        if (params.add2Provides !== false) {
            __WEBPACK_IMPORTED_MODULE_0__ResourceProviders__["a" /* ResourceProviders */].add(target, params.providersSubSet);
        }
        if (typeof params.removeTrailingSlash !== 'undefined') {
            target.prototype.removeTrailingSlash = function () {
                return !!params.removeTrailingSlash;
            };
        }
        if (params.url) {
            target.prototype.$_getUrl = function () {
                return params.url;
            };
        }
        if (params.path) {
            target.prototype.$_getPath = function () {
                return params.path;
            };
        }
        if (params.headers) {
            target.prototype.$_getHeaders = function () {
                return params.headers;
            };
        }
        if (params.params) {
            target.prototype.$_getParams = function () {
                return params.params;
            };
        }
        if (params.data) {
            target.prototype.$_getData = function () {
                return params.data;
            };
        }
    };
}


/***/ }),

/***/ "../../../../ngx-resource/src/ResourceProviders.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");

var ResourceProviders = /** @class */ (function () {
    function ResourceProviders() {
    }
    ResourceProviders.add = function (resource, subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        if (!this.providers[subSet]) {
            this.providers[subSet] = [];
        }
        var deps = Reflect.getMetadata('design:paramtypes', resource);
        if (!deps || deps.length === 0) {
            deps = [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]];
        }
        this.providers[subSet].push({
            provide: resource,
            useFactory: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return new (resource.bind.apply(resource, [void 0].concat(args)))();
            },
            deps: deps
        });
    };
    ResourceProviders.get = function (subSet) {
        if (subSet === void 0) { subSet = null; }
        if (!subSet) {
            subSet = this.mainProvidersName;
        }
        return this.providers[subSet] || [];
    };
    ResourceProviders.mainProvidersName = '__mainProviders';
    ResourceProviders.providers = {
        __mainProviders: []
    };
    return ResourceProviders;
}());



/***/ }),

/***/ "../../../../rxjs/_esm2015/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("../../../../rxjs/_esm2015/operator/map.js");


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../rxjs/_esm2015/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm2015/operator/mergeMap.js");


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "../../../../rxjs/_esm2015/add/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publish__ = __webpack_require__("../../../../rxjs/_esm2015/operator/publish.js");


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publish = __WEBPACK_IMPORTED_MODULE_1__operator_publish__["a" /* publish */];
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "../../../../rxjs/_esm2015/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../rxjs/_esm2015/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publish;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publish__ = __webpack_require__("../../../../rxjs/_esm2015/operators/publish.js");

/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publish__["a" /* publish */])(selector)(this);
}
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "../../../../rxjs/_esm2015/operators/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publish;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("../../../../rxjs/_esm2015/operators/multicast.js");


/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ?
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(() => new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */](), selector) :
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]());
}
//# sourceMappingURL=publish.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map