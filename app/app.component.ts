import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
    <nav>
        <a routerLink="/home">Home</a>
        <a routerLink="/cources">Cources</a>
        <a routerLink="/aboutUs">AboutUs</a>
    </nav>
    <div class="outlet-border">
        <router-outlet></router-outlet>
    </div>
 `,
 styles:[
     `
        .outlet-border{
            border:1px solid red;
        }
     `
 ]
})
export class AppComponent {
    title="Parixit Angular App";
 }