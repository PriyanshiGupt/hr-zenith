import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginRoutingModule } from './login-routing.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component'

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ] 
})
export class LoginModule { }
