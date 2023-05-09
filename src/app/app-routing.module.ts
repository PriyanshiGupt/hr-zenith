import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login',   loadChildren: () => LoginModule},
  {path: 'admin',    loadChildren: () => import('../app/admin/admin.module').then(module => module.AdminModule)},
  {path: 'employee', loadChildren: () => import('../app/employee/employee.module').then(module => module.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
