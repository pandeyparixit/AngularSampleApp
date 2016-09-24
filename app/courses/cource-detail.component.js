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
var router_1 = require('@angular/router');
var cources_service_1 = require('../services/cources.service');
var CourceDetailComponent = (function () {
    function CourceDetailComponent(route, router, courcesServices) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.courcesServices = courcesServices;
        route.params.subscribe(function (params) {
            _this.courseId = parseInt(params['id']);
        });
        console.log(this.courseId);
    }
    CourceDetailComponent.prototype.ngOnInit = function () {
        // this.route.data.forEach((data: { cource: Cource }) => {
        //this.editName = data.crisis.name;
        //this.cource = data.cource;
        //});
        var _this = this;
        //     this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.courcesServices.getCource(id)
        //     .then(cource => this.cource = cource);
        // });
        this.courcesServices.getCource(this.courseId)
            .then(function (cource) { return _this.cource = cource; });
        console.log(this.courseId);
    };
    CourceDetailComponent.prototype.gotoHeroes = function () { this.router.navigate(['/cources']); };
    CourceDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-cource-detail',
            templateUrl: 'cource-detail.component.html',
            styleUrls: ['cource-detail.component.css'],
            providers: [cources_service_1.CourcesService],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, cources_service_1.CourcesService])
    ], CourceDetailComponent);
    return CourceDetailComponent;
}());
exports.CourceDetailComponent = CourceDetailComponent;
//# sourceMappingURL=cource-detail.component.js.map