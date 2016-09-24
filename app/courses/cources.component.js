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
var CourcesComponent = (function () {
    function CourcesComponent(router, route, courcesServices) {
        this.router = router;
        this.route = route;
        this.courcesServices = courcesServices;
    }
    CourcesComponent.prototype.ngOnInit = function () {
        this.cources = this.courcesServices.getCources();
        //  .catch((err)=>{
        //     console.log(err);
        //     return Observable.of(true);
        // });
    };
    // this.courcesServices.getCources().subscribe(
    //                         res=> {
    //                              this.cources=res
    //                             },
    //                         err => {
    //                             // Log errors if any
    //                             console.log(err);
    //                         });
    CourcesComponent.prototype.onSelect = function (cource) {
        this.selectedCource = cource;
        this.router.navigate([cource.id], { relativeTo: this.route });
        //this.router.navigateByUrl(`/courses/${cource}`);
        // let link = ['/detail', cource.id];
        // this.router.navigate(link);
    };
    CourcesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-cources',
            templateUrl: 'cources.component.html',
            styleUrls: ['cources.component.css'],
            providers: [cources_service_1.CourcesService],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, cources_service_1.CourcesService])
    ], CourcesComponent);
    return CourcesComponent;
}());
exports.CourcesComponent = CourcesComponent;
//# sourceMappingURL=cources.component.js.map