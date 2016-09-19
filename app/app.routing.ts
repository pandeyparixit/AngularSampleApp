import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { CourcesComponent }   from './courses/cources.component';
import { AboutUsComponent }   from './aboutUs/aboutUs.component';

const appRoutes: Routes = [
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);