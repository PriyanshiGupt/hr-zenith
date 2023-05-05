import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'

@NgModule({
  declarations: [
    NavigationComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
