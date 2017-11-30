webpackJsonp(["schools.module"],{

/***/ "../../../../../src/app/schools/schools-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schools_component__ = __webpack_require__("../../../../../src/app/schools/schools.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SchoolsRoutingModule = class SchoolsRoutingModule {
};
SchoolsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__schools_component__["a" /* SchoolsComponent */],
                }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], SchoolsRoutingModule);



/***/ }),

/***/ "../../../../../src/app/schools/schools.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-wrap-schools\">\r\n  <p class=\"title\">Детсткие школы искусств Белгородской области</p>\r\n  <div class=\"inner-wrap-schools\">\r\n    <div class=\"left\">\r\n      <ul>\r\n        <li>Город Белгород</li>\r\n        <li>Алексеевский район</li>\r\n        <li>Белгородский район</li>\r\n        <li>Борисовский район</li>\r\n        <li>Волуйский район</li>\r\n        <li>Вейделевский район</li>\r\n        <li>Волоконовский район</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"line\"></div>\r\n    <div class=\"left\">\r\n      <ul>\r\n        <li>Школа №1</li>\r\n        <li>Школа №2</li>\r\n        <li>Школа №3</li>\r\n        <li>Школа №4</li>\r\n        <li>Школа №5</li>\r\n        <li>Школа №6</li>\r\n        <li>Школа №7</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"line\"></div>\r\n    <div class=\"left\">\r\n      <ul>\r\n        <li>Фортепиано</li>\r\n        <li>Народные инструменты</li>\r\n        <li>Духоваые инструменты</li>\r\n        <li>Струнные смычковые инструменты</li>\r\n        <li>Хореография</li>\r\n        <li>Изобразительное искусство</li>\r\n        <li>Хоровое пение, вокал</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/schools/schools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolsComponent; });
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

let SchoolsComponent = class SchoolsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SchoolsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-schools',
        template: __webpack_require__("../../../../../src/app/schools/schools.component.html")
    }),
    __metadata("design:paramtypes", [])
], SchoolsComponent);



/***/ }),

/***/ "../../../../../src/app/schools/schools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsModule", function() { return SchoolsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schools_routing_module__ = __webpack_require__("../../../../../src/app/schools/schools-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_od_common_module__ = __webpack_require__("../../../../../src/app/core/od-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schools_component__ = __webpack_require__("../../../../../src/app/schools/schools.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SchoolsModule = class SchoolsModule {
};
SchoolsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__schools_routing_module__["a" /* SchoolsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__core_od_common_module__["a" /* ODCommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__schools_component__["a" /* SchoolsComponent */],
        ],
        providers: []
    })
], SchoolsModule);



/***/ })

});
//# sourceMappingURL=schools.module.chunk.js.map