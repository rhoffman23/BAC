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
import { SignUPComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailResetComponent } from './email-reset/email-reset.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { BillingComponent } from './billing/billing.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';
import { FoodComponent } from './food/food.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    EmployeeComponent,
    CalenderComponent,
    TermsComponent,
    NoPageFoundComponent,
    SignUPComponent,
    ForgotPasswordComponent,
    EmailResetComponent,
    EmployeeHomeComponent,
    UserHomeComponent,
    BillingComponent,
    ScheduleEventComponent,
    FoodComponent,
    EquipmentComponent,
    EmployeeScheduleComponent,
    EventScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
