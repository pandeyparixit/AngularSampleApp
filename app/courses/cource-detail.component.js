"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cource_1 = require('./cource');
var CourceDetailComponent = (function () {
    function CourceDetailComponent() {
    }
    CourceDetailComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cource_1.Cource)
    ], CourceDetailComponent.prototype, "cource", void 0);
    CourceDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-cource-detail',
            templateUrl: 'cource-detail.component.html',
            styleUrls: ['cource-detail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CourceDetailComponent);
    return CourceDetailComponent;
}());
exports.CourceDetailComponent = CourceDetailComponent;
//# sourceMappingURL=cource-detail.component.js.map