import { ModuleWithProviders }  from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent }      from './home/home.component';

import { CourcesComponent }   from './courses/cources.component';
import { CourceDetailComponent }   from './courses/cource-detail.component';


import { AboutUsComponent }   from './aboutUs/aboutUs.component';

//index Route
const indexRoute: Route ={
    path:'',
    component:DashboardComponent
}

//fallback Route
const fallbackRoute: Route ={
    path:'**',
    component:DashboardComponent
}

//shell Route
const courcesRoutes: Routes = [
  {
     path: 'cources', 
     component: CourcesComponent 
  },
  { 
    path: 'cource/:id',
   component: CourceDetailComponent 
  }
];

const appRoutes: Routes = [
   {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
   {
     path: 'cources', 
     children:[
       {
         path:'',
         component:CourcesComponent,
       },
       {
         path:':id',
         component:CourceDetailComponent,
       },
     ]
   },
   {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  indexRoute,
  fallbackRoute //for unknow route, always apply in last because having top priority.
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);