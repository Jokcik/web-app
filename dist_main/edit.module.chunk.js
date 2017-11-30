webpackJsonp(["edit.module"],{

/***/ "../../../../../src/app/admin/edit/dshi-edit/dshi-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-form-field *ngIf=\"currentIndex != -1\">\r\n    <mat-select>\r\n      <mat-option *ngFor=\"let school of schools\" [value]=\"school.title\">\r\n        {{ school.title }}\r\n      </mat-option>\r\n    </mat-select>\r\n    <div>\r\n      <input matInput [(ngModel)]=\"schools[currentIndex].title\">\r\n    </div>\r\n  </mat-form-field>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/edit/dshi-edit/dshi-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DshiEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DshiEditComponent = class DshiEditComponent {
    constructor() {
        this.schools = [];
        this.currentIndex = -1;
    }
    ngOnInit() {
    }
};
DshiEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-dshi-edit',
        template: __webpack_require__("../../../../../src/app/admin/edit/dshi-edit/dshi-edit.component.html")
    }),
    __metadata("design:paramtypes", [])
], DshiEditComponent);



/***/ }),

/***/ "../../../../../src/app/admin/edit/edit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_component__ = __webpack_require__("../../../../../src/app/admin/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EditRoutingModule = class EditRoutingModule {
};
EditRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__edit_component__["a" /* EditComponent */],
                }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], EditRoutingModule);



/***/ }),

/***/ "../../../../../src/app/admin/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"admin-edit\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Главная страница\">\r\n      <od-main></od-main>\r\n    </mat-tab>\r\n    <mat-tab label=\"Регион\">\r\n      <od-region></od-region>\r\n    </mat-tab>\r\n    <mat-tab label=\"ДШИ\">\r\n      <od-dshi-edit></od-dshi-edit>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let EditComponent = class EditComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-edit',
        template: __webpack_require__("../../../../../src/app/admin/edit/edit.component.html")
    }),
    __metadata("design:paramtypes", [])
], EditComponent);



/***/ }),

/***/ "../../../../../src/app/admin/edit/edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_routing_module__ = __webpack_require__("../../../../../src/app/admin/edit/edit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_od_common_module__ = __webpack_require__("../../../../../src/app/core/od-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_component__ = __webpack_require__("../../../../../src/app/admin/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("../../../cdk/esm2015/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_paginator__ = __webpack_require__("../../../material/esm2015/paginator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainpage_mainpage_service__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__("../../../../../src/app/admin/edit/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__region_region_component__ = __webpack_require__("../../../../../src/app/admin/edit/region/region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__region_region_service__ = __webpack_require__("../../../../../src/app/admin/edit/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__region_region_dialog_add__ = __webpack_require__("../../../../../src/app/admin/edit/region/region-dialog-add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dshi_edit_dshi_edit_component__ = __webpack_require__("../../../../../src/app/admin/edit/dshi-edit/dshi-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let EditModule = class EditModule {
};
EditModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__core_od_common_module__["a" /* ODCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__edit_routing_module__["a" /* EditRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_paginator__["b" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSelectModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_12__region_region_component__["a" /* RegionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__region_region_dialog_add__["a" /* RegionDialogAdd */],
            __WEBPACK_IMPORTED_MODULE_16__dshi_edit_dshi_edit_component__["a" /* DshiEditComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__region_region_dialog_add__["a" /* RegionDialogAdd */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__mainpage_mainpage_service__["a" /* MainpageService */], __WEBPACK_IMPORTED_MODULE_13__region_region_service__["a" /* RegionService */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */], useValue: {} },
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogRef */], useValue: {} }
        ]
    })
], EditModule);



/***/ }),

/***/ "../../../../../src/app/admin/edit/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let material of materials\" class=\"outer-wrap-mainpage\">\r\n  <div class=\"text\">Заголовок</div>\r\n  <ckeditor [(ngModel)]=\"material.title\" [config]=\"config\"></ckeditor>\r\n  <hr/>\r\n  <div class=\"text\">Вводный текст на главной</div>\r\n  <ckeditor [(ngModel)]=\"material.description.short_description\" [config]=\"config\"></ckeditor>\r\n  <hr/>\r\n  <div class=\"text\">Текст</div>\r\n  <ckeditor [(ngModel)]=\"material.description.description\" [config]=\"config\"></ckeditor>\r\n  <div class=\"button-row\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"saveHistory(material)\">Сохранить</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/edit/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainpage_mainpage_service__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MainComponent = class MainComponent {
    constructor(mainpageService) {
        this.mainpageService = mainpageService;
        this.materials = [];
        this.config = {
            toolbar: 'full',
            format_tags: 'p',
            language: 'ru',
            allowedContent: true,
            disableNativeSpellChecker: false,
            forcePasteAsPlainText: true,
            title: false,
            autoGrow_onStartup: true,
            disableAutoInline: true,
            enableContextMenu: false,
            sharedSpaces: {
                top: 'top',
                bottom: 'bottom'
            },
            resize_enabled: false,
            extraPlugins: 'autogrow,sharedspace,divarea,removeformat',
            removePlugins: 'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
        };
    }
    ngOnInit() {
        this.materials = this.mainpageService.query();
    }
    saveHistory(material) {
        let a = JSON.parse(JSON.stringify(material, (key, value) => key.startsWith('$') ? undefined : value));
        this.mainpageService.update(a);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MainComponent.prototype, "materials", void 0);
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-main',
        template: __webpack_require__("../../../../../src/app/admin/edit/main/main.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mainpage_mainpage_service__["a" /* MainpageService */]])
], MainComponent);



/***/ }),

/***/ "../../../../../src/app/admin/edit/region/region-dialog-add.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>Добавить регион</mat-card-header>\r\n  <mat-form-field style=\"margin-top: 10px;\">\r\n    <input matInput [(ngModel)]=\"title\" placeholder=\"Название\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"telephone\" placeholder=\"Телефон\">\r\n  </mat-form-field>\r\n\r\n  <button mat-raised-button style=\"margin-top: 5px;\" (click)=\"add()\">Добавить</button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/edit/region/region-dialog-add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionDialogAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let RegionDialogAdd = class RegionDialogAdd {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    add() {
        this.dialogRef.close({ title: this.title, telephone: this.telephone });
    }
};
RegionDialogAdd = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'region-dialog-add',
        template: __webpack_require__("../../../../../src/app/admin/edit/region/region-dialog-add.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */], Object])
], RegionDialogAdd);



/***/ }),

/***/ "../../../../../src/app/admin/edit/region/region.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"example-container mat-elevation-z8 outer-region-edit\" (odClickOutside)=\"close()\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Поиск\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\" matSort>\r\n    <ng-container cdkColumnDef=\"title\">\r\n      <cdk-header-cell *cdkHeaderCellDef mat-sort-header class=\"example-header-cell\"> Название </cdk-header-cell>\r\n      <cdk-cell *cdkCellDef=\"let row; let idx = index\" class=\"example-cell\" [class.edit]=\"idx == currentIndex && editable\">\r\n        <div class=\"show\">{{row.title}}</div>\r\n        <div class=\"edit\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"row.title\">\r\n          </mat-form-field>\r\n        </div>\r\n      </cdk-cell>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container cdkColumnDef=\"telephone\">\r\n      <cdk-header-cell *cdkHeaderCellDef mat-sort-header class=\"example-header-cell\"> Телефон </cdk-header-cell>\r\n      <cdk-cell *cdkCellDef=\"let row; let idx = index\" class=\"example-cell\" [class.edit]=\"idx == currentIndex && editable\">\r\n        <div class=\"show\">{{row.telephone}}</div>\r\n        <div class=\"edit\" >\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"row.telephone\">\r\n          </mat-form-field>\r\n        </div>\r\n      </cdk-cell>\r\n      <!--<mat-icon>input</mat-icon>-->\r\n    </ng-container>\r\n\r\n    <ng-container cdkColumnDef=\"edit\">\r\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\" [style.flex]=\"'0 0 40px'\"></cdk-header-cell>\r\n      <cdk-cell *cdkCellDef=\"let row; let idx = index\" class=\"example-cell\" [style.flex]=\"'0 0 10px'\"\r\n                [class.edit]=\"idx == currentIndex && editable\">\r\n        <button mat-icon-button (click)=\"editRegion(row, idx)\">\r\n            <mat-icon class=\"show\">edit</mat-icon>\r\n          <mat-icon class=\"edit\">done</mat-icon>\r\n        </button>\r\n      </cdk-cell>\r\n    </ng-container>\r\n\r\n    <ng-container cdkColumnDef=\"delete\">\r\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\" [style.flex]=\"'0 0 40px'\"></cdk-header-cell>\r\n      <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\" [style.flex]=\"'0 0 10px'\">\r\n        <button mat-icon-button (click)=\"deleteRegion(row)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </cdk-cell>\r\n    </ng-container>\r\n\r\n    <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row>\r\n    <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row>\r\n  </cdk-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n<button mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px;\" (click)=\"openDialog()\">Добавить регион</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/edit/region/region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__region_service__ = __webpack_require__("../../../../../src/app/admin/edit/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__region_dialog_add__ = __webpack_require__("../../../../../src/app/admin/edit/region/region-dialog-add.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegionComponent = class RegionComponent {
    constructor(regionService, dialog) {
        this.regionService = regionService;
        this.dialog = dialog;
        this.displayedColumns = ['title', 'telephone', 'edit', 'delete'];
        this.regions = [];
        this.editable = false;
        this.currentIndex = -1;
    }
    ngOnInit() {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableDataSource */](this.regions);
        this.updateRegion();
    }
    updateRegion() {
        this.regionService.query().$observable.subscribe(regions => {
            this.regions.length = 0;
            this.regions.push(...regions);
            this.dataSource._updateChangeSubscription();
        });
    }
    openDialog() {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__region_dialog_add__["a" /* RegionDialogAdd */], { width: '250px' }).afterClosed().subscribe(result => {
            if (!result)
                return;
            this.regionService.save(result);
            this.updateRegion();
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    editRegion(region, index) {
        if (index != this.currentIndex) {
            this.editable = true;
            this.currentIndex = index;
        }
        else {
            this.regionService.update(region);
            this.close();
        }
    }
    deleteRegion(row) {
        if (window.confirm('Действительно хотите удалить этот регион?')) {
            this.regionService.remove({ _id: row._id }).$observable.subscribe(() => this.updateRegion());
        }
    }
    close() {
        this.editable = false;
        this.currentIndex = -1;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginator */])
], RegionComponent.prototype, "paginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSort */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSort */])
], RegionComponent.prototype, "sort", void 0);
RegionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-region',
        template: __webpack_require__("../../../../../src/app/admin/edit/region/region.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__region_service__["a" /* RegionService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
], RegionComponent);



/***/ }),

/***/ "../../../../../src/app/admin/edit/region/region.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_od_resource_crud__ = __webpack_require__("../../../../../src/app/core/od-resource-crud.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_resource__ = __webpack_require__("../../../../ngx-resource/index.js");
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




let RegionService = class RegionService extends __WEBPACK_IMPORTED_MODULE_1__core_od_resource_crud__["a" /* ODResourceCrud */] {
    constructor(http) {
        super(http);
    }
};
RegionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_2_ngx_resource__["c" /* ResourceParams */])({ pathPrefix: 'region' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], RegionService);



/***/ })

});
//# sourceMappingURL=edit.module.chunk.js.map