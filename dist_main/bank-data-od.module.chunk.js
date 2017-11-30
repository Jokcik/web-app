webpackJsonp(["bank-data-od.module"],{

/***/ "../../../../../src/app/bank-data-od/bank-data-od-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankDataOdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_data_od_component__ = __webpack_require__("../../../../../src/app/bank-data-od/bank-data-od.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BankDataOdRoutingModule = class BankDataOdRoutingModule {
};
BankDataOdRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__bank_data_od_component__["a" /* BankDataOdComponent */],
                }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], BankDataOdRoutingModule);



/***/ }),

/***/ "../../../../../src/app/bank-data-od/bank-data-od.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bank-data-od works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/bank-data-od/bank-data-od.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankDataOdComponent; });
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

let BankDataOdComponent = class BankDataOdComponent {
    constructor() { }
    ngOnInit() {
    }
};
BankDataOdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'od-bank-data-od',
        template: __webpack_require__("../../../../../src/app/bank-data-od/bank-data-od.component.html")
    }),
    __metadata("design:paramtypes", [])
], BankDataOdComponent);



/***/ }),

/***/ "../../../../../src/app/bank-data-od/bank-data-od.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDataOdModule", function() { return BankDataOdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_od_common_module__ = __webpack_require__("../../../../../src/app/core/od-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_data_od_component__ = __webpack_require__("../../../../../src/app/bank-data-od/bank-data-od.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bank_data_od_routing_module__ = __webpack_require__("../../../../../src/app/bank-data-od/bank-data-od-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let BankDataOdModule = class BankDataOdModule {
};
BankDataOdModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__core_od_common_module__["a" /* ODCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__bank_data_od_routing_module__["a" /* BankDataOdRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bank_data_od_component__["a" /* BankDataOdComponent */],
        ],
        providers: []
    })
], BankDataOdModule);



/***/ })

});
//# sourceMappingURL=bank-data-od.module.chunk.js.map