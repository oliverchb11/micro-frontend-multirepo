"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopupsService = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var PopupsService = /** @class */ (function () {
    function PopupsService() {
    }
    PopupsService.prototype.altertSucces = function (title, icon, background) {
        sweetalert2_1["default"].fire({
            title: title,
            icon: icon,
            background: background
        });
    };
    PopupsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PopupsService);
    return PopupsService;
}());
exports.PopupsService = PopupsService;
