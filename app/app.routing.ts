import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent }      from './home/home.component';
import { CourcesComponent }   from './courses/cources.component';
import { AboutUsComponent }   from './aboutUs/aboutUs.component';

const indexRoute: Route ={
    path:'',
    component:DashboardComponent
}

const fallbackRoute: Route ={
    path:'**',
    component:DashboardComponent
}

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
    component: CourcesComponent
  },
   {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  indexRoute,
  fallbackRoute //for unknow route, always apply in last because having top priority.
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);