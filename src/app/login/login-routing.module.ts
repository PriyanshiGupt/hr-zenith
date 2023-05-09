import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login.component";

const routes : Routes = [
    {
        path : '',
        component : LoginComponent,
        children : [
            {
                path : 'employee',
                component : EmployeeComponent,
                data : {pageId : 'employee'}
            }, {
                path : 'admin',
                component : AdminComponent,
                data : {pageId : 'admin'}
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class LoginRoutingModule {

}