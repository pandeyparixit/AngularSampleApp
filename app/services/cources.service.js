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
var http_1 = require('@angular/http');
// Import RxJs required methods
//import * 'rxjs/Rx'; //get everthing from rxjs
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Rx_1 = require('rxjs/Rx');
var URL = 'app/services/cources.json';
var CourcesService = (function () {
    function CourcesService(http) {
        this.http = http;
    }
    //1.Observable
    CourcesService.prototype.getCources = function () {
        return this.http.get(URL)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CourcesService.prototype.getCource = function (id) {
        return this.getCources().toPromise()
            .then(function (cources) { return cources.find(function (cource) { return cource.id === id; }); });
    };
    CourcesService.prototype.handleError = function (err) {
        console.log(err);
        return Rx_1.Observable.throw(err);
    };
    CourcesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourcesService);
    return CourcesService;
}());
exports.CourcesService = CourcesService;
//# sourceMappingURL=cources.service.js.map