import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule} from '@angular/material/select'

import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddProjectComponent } from './add-project/add-project.component'

@NgModule({
  declarations: [
    NavigationComponent,
    EmployeeDetailsComponent,
    AddSalaryComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    AdminRoutingModule,
    MatSelectModule
  ]
})
export class AdminModule { }
