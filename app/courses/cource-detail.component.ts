import { Component, OnInit,Input } from '@angular/core';

import { Cource } from './cource';

@Component({
    moduleId: module.id,
    selector: 'app-cource-detail',
    templateUrl: 'cource-detail.component.html',
    styleUrls: ['cource-detail.component.css']
})
export class CourceDetailComponent implements OnInit {
    @Input()
    cource: Cource;
    constructor() { }

    ngOnInit() { }
}