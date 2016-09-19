import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent }      from './home/home.component';
import { CourcesComponent }      from './courses/cources.component';
import { AboutUsComponent }      from './aboutUs/aboutUs.component';

import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,DashboardComponent,HomeComponent,CourcesComponent,AboutUsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }