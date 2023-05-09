import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { TransactionsComponent } from './salary-details/transactions/transactions.component';
import { UpdateSalaryDetailsComponent } from './salary-details/update-salary-details/update-salary-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectReportsComponent } from './project-reports/project-reports.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {path: '', component: NavigationComponent, children: [
    {
      path: '',
      redirectTo : 'attendance',
      pathMatch : 'full'
    }, {
      path:      'employeeDetails', 
      component: EmployeeDetailsComponent,
      data :     { pageId : 'employeeDetails' }
    },{
      path:      'addSalary', 
      component: AddSalaryComponent,
      data :     { pageId : 'addSalary' }
    },{
      path:      'salaryDetails', 
      component: SalaryDetailsComponent,
      data :     { pageId : 'salaryDetails' },
      children : [
        {
          path: '',
          redirectTo : 'transactions',
          pathMatch : 'full'
        },{
          path: 'transactions',
          component : TransactionsComponent,
          data : { pageId : 'transactions'}
        },{
          path: 'employeeSalary',
          component : UpdateSalaryDetailsComponent,
          data : { pageId : 'employeeSalary'}
        },
      ]
    },{
      path:      'addProject', 
      component: AddProjectComponent,
      data :     { pageId : 'addProject' }
    },{
      path:      'projectDetails', 
      component: ProjectDetailsComponent,
      data :     { pageId : 'projectDetails' }
    },{
      path:      'projectReports', 
      component: ProjectReportsComponent,
      data :     { pageId : 'projectReports' }
    },{
      path:      'approveLeaves', 
      component: ApproveLeaveComponent,
      data :     { pageId : 'approveLeaves' }
    },{
      path:      'attendance', 
      component: AttendanceComponent,
      data :     { pageId : 'attendance' }

    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
