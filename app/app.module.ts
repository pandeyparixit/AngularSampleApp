import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent }      from './home/home.component';
import { CourcesComponent }      from './courses/cources.component';
import { AboutUsComponent }      from './aboutUs/aboutUs.component';

import { CourceDetailComponent } from './courses/cource-detail.component'

import { routing } from './app.routing' 

import { CourcesService } from './services/cources.service'
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  HomeComponent,
                  CourcesComponent,
                  AboutUsComponent,
                  CourceDetailComponent],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }