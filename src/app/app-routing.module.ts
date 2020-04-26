import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'signup', component: SignUPComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'emailReset', component: EmailResetComponent},
  { path: 'employeeHome', component: EmployeeHomeComponent},
  { path: 'UserHome', component: UserHomeComponent},
  { path: 'billing', component: BillingComponent},
  { path: 'scheduleEvent', component: ScheduleEventComponent},
  { path: 'food', component: FoodComponent},
  { path: 'equipment', component: EquipmentComponent},
  { path: 'employeeSchedule', component: EmployeeScheduleComponent},
  { path: 'eventSchedule', component: EventScheduleComponent},
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
