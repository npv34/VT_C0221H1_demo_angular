import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/users/list/list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: 'users',
    component: ListComponent,
  },
  {
    path: 'users/create',
    component: UserAddComponent
  },
  {
    path: 'users/:id/edit',
    component: UserEditComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
