import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';

import { Feedback,Rating } from '../model/feedback'

import { FeedbackService } from '../services/feedback/feedback.service';

@Component({
    moduleId: module.id,
    selector: 'app-feedback',
    templateUrl: 'feedback.component.html',
    styleUrls:['feedback.component.css'],
    providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit {
   submitted = false;

   feedback =  new Feedback(1, 'abc@gmail.com',
                       'twitterAcount',
                       'Leslie Rollover',
                        Rating.GOOD);
    constructor(private feedbackService: FeedbackService) { 
        
    }

    ngOnInit() { }

     
  onSubmit() { 
      this.submitted = true; 
      let feedbackOperation:Observable<Feedback[]>;
        feedbackOperation = this.feedbackService.AddFeedback(this.feedback)
        
        
        // Subscribe to observable
         feedbackOperation.subscribe(
                                feedback => {
                                    // Empty model
                                    console.log("Sucess");
                                    this.feedback = new Feedback(2,'','', '', Rating.GOOD);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

       //console.log("Submitted");
    }

  myEvent(val,abc){
    //   console.log(val);
    //   console.log(val.target);
    //   console.log(val.target.value);
     // console.log(JSON.stringify(this.feedback));
      //console.log($event.target.value);
     this.feedback.email =val.target.value;
     //console.log(JSON.stringify(this.feedback));
  }
}