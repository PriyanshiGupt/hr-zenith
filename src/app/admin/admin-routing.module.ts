import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {path: '', component: NavigationComponent, children: [
    {
      path:      'employeeDetails', 
      component: EmployeeDetailsComponent,
      data :     { pageId : 'employeeDetails' }
    },{
      path:      'addSalary', 
      component: AddSalaryComponent,
      data :     { pageId : 'addSalary' }
    },{
      path:      'addProject', 
      component: AddProjectComponent,
      data :     { pageId : 'addProject' }
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
