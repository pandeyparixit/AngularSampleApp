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
var feedback_1 = require('../model/feedback');
var feedback_service_1 = require('../services/feedback/feedback.service');
var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.submitted = false;
        this.feedback = new feedback_1.Feedback(1, 'abc@gmail.com', 'twitterAcount', 'Leslie Rollover', feedback_1.Rating.GOOD);
    }
    FeedbackComponent.prototype.ngOnInit = function () { };
    FeedbackComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var feedbackOperation;
        feedbackOperation = this.feedbackService.AddFeedback(this.feedback);
        // Subscribe to observable
        feedbackOperation.subscribe(function (feedback) {
            // Empty model
            console.log("Sucess");
            _this.feedback = new feedback_1.Feedback(2, '', '', '', feedback_1.Rating.GOOD);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
        //console.log("Submitted");
    };
    FeedbackComponent.prototype.myEvent = function (val, abc) {
        //   console.log(val);
        //   console.log(val.target);
        //   console.log(val.target.value);
        // console.log(JSON.stringify(this.feedback));
        //console.log($event.target.value);
        this.feedback.email = val.target.value;
        //console.log(JSON.stringify(this.feedback));
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-feedback',
            templateUrl: 'feedback.component.html',
            styleUrls: ['feedback.component.css'],
            providers: [feedback_service_1.FeedbackService]
        }), 
        __metadata('design:paramtypes', [feedback_service_1.FeedbackService])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map