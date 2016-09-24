import { Injectable } from '@angular/core';
import { Cource } from './cource'

import { Http,Response } from '@angular/http'
// Import RxJs required methods

//import * 'rxjs/Rx'; //get everthing from rxjs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Rx';

const URL='app/services/cources.json';

@Injectable()
export class CourcesService {

    constructor(private http: Http) { }

    //1.Observable
     getCources(): Observable<Cource[]> {
           return this.http.get(URL)
           .map((response:Response) => response.json())
           .catch(this.handleError)
     } 

     getCource(id: number): Promise<Cource> {
           return this.getCources().toPromise()
             .then(cources => cources.find(cource => cource.id === id));
     }

     handleError(err: any)
     {
         console.log(err);
         return Observable.throw(err);
     }

//  getCources(): Observable<Cource[]> {

//            return this.http.get(URL)
//             .map((response:Response) => response.json() )
//             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//      } 
}
