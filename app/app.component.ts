import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" routerLink="/dashboard">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a routerLink="/dashboard">Dashboard</a></li>
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/cources">Cources</a></li>
            <li> <a routerLink="/aboutUs">AboutUs</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    <div class="container">
        <div class="row">
            <router-outlet></router-outlet>
        </div>
    </div>

     


    <footer class="footer">
      <div class="container">
        <p class="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
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