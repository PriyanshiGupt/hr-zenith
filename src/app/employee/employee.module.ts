import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule} from '@angular/material/select'

import { EmployeeRoutingModule } from './employee-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [
    NavigationComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule
  ]
})
export class EmployeeModule { }
