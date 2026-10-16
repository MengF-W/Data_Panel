import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DataListComponent } from './data-list/data-list.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [{path:  "", component: HomeComponent},
  {path: "data-list", component: DataListComponent}  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }
