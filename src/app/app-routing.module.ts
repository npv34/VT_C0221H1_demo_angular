import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/users/list/list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {UsersModule} from "./components/users/users.module";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuardGuard} from "./auth-guard.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import("./components/users/users.module").then(m => m.UsersModule),
    canActivate: [AuthGuardGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
