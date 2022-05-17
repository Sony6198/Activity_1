import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataComponent} from "./user/data/data.component";
import {ProfileComponent} from "./user/profile/profile.component";
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: "", component: ProfileComponent,
    children:[
      {path: "register", component:DataComponent}
    ]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
