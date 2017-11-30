webpackJsonp(["contacts.module"],{

/***/ "../../../../../src/app/contacts/contacts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ContactsRoutingModule = class ContactsRoutingModule {
};
ContactsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__contacts_component__["a" /* ContactsComponent */],
                }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ContactsRoutingModule);



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-wrap-contacts\">\r\n  <p class=\"text title-input\">Контакты</p>\r\n  <p class=\"text\">308033, Россия, Белгород, ул. Королева 7</p>\r\n  <p class=\"text\">телефон/факс: +7 (4722) 73-22-04</p>\r\n  <p class=\"text\">e-mail: rumc@bgiik.ru</p>\r\n  <br/>\r\n  <p class=\"text\">Директор: <b>Белокурова Татьяна Федоровна</b>, т. 73-22-18</p>\r\n  <p class=\"text\">Заместитель директора: <b>Черенкова Инна Васильевна</b>, т. 73-22-04</p>\r\n  <p class=\"text\">Методисты, т. 73-22-04 </p>\r\n\r\n  <mat-form-field class=\"input-text\">\r\n    <input matInput placeholder=\"Ваше имя\" required>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"input-text\">\r\n    <input matInput placeholder=\"Ваш E-Mail адрес\" required>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"input-text\">\r\n    <input matInput placeholder=\"Тема\" required>\r\n  </mat-form-field>\r\n\r\n  <mat-input-container class=\"input-text\">\r\n    <textarea matInput  matTextareaAutosize  placeholder=\"Сообщение\" matAutosizeMinRows=\"7\" required></textarea>\r\n  </mat-input-container>\r\n\r\n  <button mat-raised-button color=\"primary\">Отправить</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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

let ContactsComponent = class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html")
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_od_common_module__ = __webpack_require__("../../../../../src/app/core/od-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_routing_module__ = __webpack_require__("../../../../../src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ContactsModule = class ContactsModule {
};
ContactsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__contacts_routing_module__["a" /* ContactsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__core_od_common_module__["a" /* ODCommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__contacts_component__["a" /* ContactsComponent */],
        ],
        providers: []
    })
], ContactsModule);



/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map