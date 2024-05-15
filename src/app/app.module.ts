import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListComponent } from './list/list.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

const approute:Routes=[
  { path: '', component: LoginComponent} ,
  {path: 'register', component: RegistrationComponent },  
  {path: 'dashboard', component: DashBoardComponent },   
  {path: 'list', component: ListComponent },
  
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashBoardComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approute),
    [NgxWebstorageModule.forRoot()]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
