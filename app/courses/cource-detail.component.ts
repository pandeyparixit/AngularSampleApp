import { Component, OnInit,Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { CourcesService } from '../services/cources.service'
import { Cource } from '../services/cource'


@Component({
    moduleId: module.id,
    selector: 'app-cource-detail',
    templateUrl: 'cource-detail.component.html',
    styleUrls: ['cource-detail.component.css'],
     providers: [CourcesService],
})
export class CourceDetailComponent implements OnInit {
    //  @Input()
    //  cource: Cource;

    cource: Cource;
    courseId :number;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private courcesServices:CourcesService
               ) {
                     route.params.subscribe(
                        params =>{
                            this.courseId = parseInt(params['id']);
                        }
                    );

                    console.log(this.courseId);
                }

        ngOnInit() { 
           // this.route.data.forEach((data: { cource: Cource }) => {
            //this.editName = data.crisis.name;
            //this.cource = data.cource;
    //});

        //     this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.courcesServices.getCource(id)
        //     .then(cource => this.cource = cource);
        // });
        
         this.courcesServices.getCource(this.courseId)
            .then(cource => this.cource = cource);
            
            console.log(this.courseId);

         }

    gotoHeroes() { this.router.navigate(['/cources']); }
}