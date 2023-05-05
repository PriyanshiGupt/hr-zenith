import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin',    loadChildren: () => import('../app/admin/admin.module').then(module => module.AdminModule)},
  {path: 'employee', loadChildren: () => import('../app/employee/employee.module').then(module => module.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
