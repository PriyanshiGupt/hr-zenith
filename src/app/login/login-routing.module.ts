import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login.component";
import { EmployeeRegisterComponent } from "./employee-register/employee-register.component";

const routes : Routes = [
    {
        path : '',
        component : LoginComponent,
        children : [
            {
                path: '',
                redirectTo : 'employee',
                pathMatch : 'full'
            },{
                path : 'employee',
                component : EmployeeComponent,
                data : {pageId : 'employee'}
            }, {
                path : 'admin',
                component : AdminComponent,
                data : {pageId : 'admin'}
            }
        ]
    },{
        path: 'newEmployee',
        component : EmployeeRegisterComponent, 
        data : {pageId : 'employee/register'}
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class LoginRoutingModule {

}