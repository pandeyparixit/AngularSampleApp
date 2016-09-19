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
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
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
   <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                    <ul class="nav nav-sidebar">
                        <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">Export</a></li>
                   </ul>
             </div>
             <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <router-outlet></router-outlet>
                <h2 class="sub-header">Section title</h2>
                <div class="table-responsive">
                <table class="table table-striped">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                    </tr>
                </thead>
                 <tbody>
                    <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                    </tr>
                 </tbody>
                </table>
            </div>
        </div>
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