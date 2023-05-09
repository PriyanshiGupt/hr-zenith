import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginRoutingModule } from './login-routing.module'


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ] 
})
export class LoginModule { }
