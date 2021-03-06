import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/core/menu/menu.component';
import { ListComponent } from './components/users/list/list.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MessageComponent } from './components/share/message/message.component';
import {ToastNoAnimationModule, ToastrModule} from "ngx-toastr";
import {MatToolbarModule} from "@angular/material/toolbar";
import { UserAddComponent } from './components/users/user-add/user-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MessageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
