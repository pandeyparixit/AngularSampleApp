import { Component, OnInit,Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { Cource } from '../services/cource'


@Component({
    moduleId: module.id,
    selector: 'app-cource-detail',
    templateUrl: 'cource-detail.component.html',
    styleUrls: ['cource-detail.component.css']
})
export class CourceDetailComponent implements OnInit {
    // @Input()
    // cource: Cource;

    cource: Cource;
    courseId :number;
    constructor(private route: ActivatedRoute,
                private router: Router
                
                
               ) {
                     route.params.subscribe(
                        params =>{
                            this.courseId = parseInt(params['id']);
                        }
                    );
                }

        ngOnInit() { 
            this.route.data.forEach((data: { cource: Cource }) => {
            //this.editName = data.crisis.name;
            
           
            //this.cource = data.cource;
    });
    }

    gotoHeroes() { this.router.navigate(['/cources']); }
}