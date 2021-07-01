import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../app.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },

  {
    path: ':id/edit',
    component: UserEditComponent
  },

  {
    path: 'create',
    component: UserAddComponent
  }


];

@NgModule({
  declarations: [
    ListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),

  ]
})
export class UsersModule { }
