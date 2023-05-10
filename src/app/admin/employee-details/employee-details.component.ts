import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

enum EMPLOYEE_STATUS {
  'APPROVED' = 'APPROVED',
  'WAITING'  = 'WAITING',
  'REJECTED' = 'REJECTED'
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  employees : {[key: string]: any}[] = []
  EMPLOYEE_STATUS = EMPLOYEE_STATUS

  constructor(
    private activatedRoute : ActivatedRoute,
    private employeeService : EmployeeService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((response : {[key: string]: any}[]) => {
      this.employees = response.filter(employee => employee['status']!=-1)
    })
  }
  rejectEmployee(id) {
    this.employeeService.rejectEmployee(id).subscribe((response : string) => {
      this.getAllEmployees()
      this.toasterService.showSuccess(response)
      console.log(response)
    })
  }

  approveEmployee(id) {
    this.employeeService.approveEmployee(id).subscribe((response : {[key: string] : any}) => {
      console.log(response)
      this.getAllEmployees()
      this.toasterService.showSuccess("Employee Approved")
    })
  }
}
