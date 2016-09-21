import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from  '@angular/router';

import { Cource } from '../services/cource'
import { CourcesService } from '../services/cources.service'

import { CourceDetailComponent } from './cource-detail.component'

import {Observable} from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-cources',
    templateUrl: 'cources.component.html',
    styleUrls: ['cources.component.css'],
    providers: [CourcesService],
})
export class CourcesComponent implements OnInit {

    cources: Observable<Cource[]> ;

    selectedCource: Cource;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private courcesServices:CourcesService
    ) { }

    ngOnInit() { 
         
         this.cources = this.courcesServices.getCources()
                        //  .catch((err)=>{
                        //     console.log(err);
                        //     return Observable.of(true);
                        // });
    }
         
        // this.courcesServices.getCources().subscribe(
        //                         res=> {
        //                              this.cources=res
        //                             },
        //                         err => {
        //                             // Log errors if any
        //                             console.log(err);
        //                         });

       
       
    

    onSelect(cource:Cource){
        this.selectedCource = cource;
        //this.router.navigate([cource.id], { relativeTo: this.route });
        //this.router.navigateByUrl(`/courses/${cource}`);
    }
}