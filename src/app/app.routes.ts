import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DataListComponent } from './data-list/data-list.component';
import { HomeComponent } from './home/home.component';


export const routes = [{path:  "", pathMatch:  "full",redirectTo:  "home", useHash: true},
  {path: "home", component: HomeComponent, useHash: true},
  {path: "data-list", component: DataListComponent, useHash: true}  ];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutes { }
