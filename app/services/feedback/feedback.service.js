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
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
        this.feedbackUrl = 'app/services/feedback/feedback.json';
    }
    FeedbackService.prototype.AddFeedback = function (feedback) {
        console.log(JSON.stringify(feedback));
        var bodystring = 'json=' + JSON.stringify(feedback); // Stringify payload
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.feedbackUrl, bodystring, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        //.catch(this.handleError)
    };
    FeedbackService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map