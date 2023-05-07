import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule} from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input'

import { EmployeeRoutingModule } from './employee-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ProjectDetailsComponent,
    SalaryDetailsComponent,
    ProjectReportComponent,
    ApplyLeaveComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class EmployeeModule { }
