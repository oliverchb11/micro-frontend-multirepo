"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_card_component_1 = require("../product-card/product-card.component");
var products_component_1 = require("./products.component");
var safe_input_select_component_1 = require("safe-input-select-component");
var safe_componentes_1 = require("safe-componentes");
var safe_popups_1 = require("safe-popups");
var routes = [{ path: '', component: products_component_1.ProductsComponent }];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            declarations: [products_component_1.ProductsComponent],
            imports: [router_1.RouterModule.forChild(routes), common_1.CommonModule, product_card_component_1.ProductCardComponent, safe_input_select_component_1.InputSelectModule, safe_componentes_1.ComponentesModule, safe_popups_1.PopupsModule],
            providers: []
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
