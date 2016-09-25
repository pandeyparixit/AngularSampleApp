import { Injectable } from '@angular/core';

import { Feedback,Rating } from '../../model/feedback'

import { Http, Response, Headers, RequestOptions} from '@angular/http'

import { Observable } from 'rxjs/Rx'
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()
export class FeedbackService {

    constructor(private http: Http) { }
    private feedbackUrl='app/services/feedback/feedback.json';

     AddFeedback(feedback:Object): Observable<Feedback[]> {
            console.log(JSON.stringify(feedback));
            let bodystring = 'json='+ JSON.stringify(feedback); // Stringify payload
            //let headers = new Headers({ 'Content-Type': 'application/json' });
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let options = new RequestOptions({ headers: headers }); // Create a request option

           return this.http.post(this.feedbackUrl,bodystring, { headers: headers })
           .map((response:Response) => response.json())
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
           //.catch(this.handleError)
     } 
    //post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
}