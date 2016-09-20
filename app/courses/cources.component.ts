import { Component, OnInit } from '@angular/core';

import { Cource } from './cource'
import { CourceDetailComponent } from './cource-detail.component'

@Component({
    moduleId: module.id,
    selector: 'app-cources',
    templateUrl: 'cources.component.html',
    styleUrls: ['cources.component.css']
})
export class CourcesComponent implements OnInit {

    cources: Cource[] = [
        {
            id: 1,
            name: 'Routing'
        },
        {
            id: 2,
            name: 'Index Route'
        },
        {
            id: 3,
            name: 'Fallback Route'
        },
        {
            id: 4,
            name: 'Shell Route'
        },
        {
            id: 5,
            name: 'auxiliary Route'
        },
    ];

    selectedCource: Cource;

    constructor() { }

    ngOnInit() { }

    onSelect(cource:Cource){
        this.selectedCource = cource;
    }
}