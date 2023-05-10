"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentesComponent = void 0;
var core_1 = require("@angular/core");
var ComponentesComponent = /** @class */ (function () {
    function ComponentesComponent(componentService) {
        this.componentService = componentService;
        this.sendOutput = new core_1.EventEmitter();
    }
    ComponentesComponent.prototype.send = function (text) {
        this.sendOutput.emit(text);
    };
    __decorate([
        core_1.Output()
    ], ComponentesComponent.prototype, "sendOutput");
    ComponentesComponent = __decorate([
        core_1.Component({
            selector: 'lib-componentes',
            template: "\n  <button class=\"btn-minimalista\" (click)=\"send('enviado')\">Haz clic aqu\u00ED por favor..</button>\n  ",
            styles: [
                "\n    .btn-minimalista {\n  background-color: transparent;\n  border: 1px solid #999;\n  color: #999;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  transition: all 0.3s ease;\n  border-radius: 8px;\n}\n\n.btn-minimalista:hover {\n  background-color: #999;\n  color: #fff;\n  cursor: pointer;\n}\n    "
            ]
        })
    ], ComponentesComponent);
    return ComponentesComponent;
}());
exports.ComponentesComponent = ComponentesComponent;
