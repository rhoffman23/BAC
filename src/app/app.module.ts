import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalenderComponent } from './calender/calender.component';
import { TermsComponent } from './terms/terms.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    EmployeeComponent,
    CalenderComponent,
    TermsComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
