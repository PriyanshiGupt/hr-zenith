import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: NavigationComponent, children: [
    {
      path: '',
      redirectTo : 'profile',
      pathMatch : 'full'
    }, {
      path: 'profile',
      component: ProfileComponent,
      data : {pageId : 'profile'}
    }, {
      path: 'projectDetails',
      component: ProjectDetailsComponent,
      data : {pageId : 'projectDetails'}
    }, {
      path : 'salaryDetails',
      component : SalaryDetailsComponent,
      data : {pageId : 'salaryDetails'}
    },{
      path : 'addProjectReport',
      component : ProjectReportComponent,
      data : {pageId : 'addProjectReport'}
    }, {
      path : 'applyLeave',
      component : ApplyLeaveComponent,
      data : {pageId : 'applyLeave'}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
