import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/users/list/list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";

const routes: Routes = [
  {
    path: 'users',
    component: ListComponent
  },
  {
    path: 'users/create',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
