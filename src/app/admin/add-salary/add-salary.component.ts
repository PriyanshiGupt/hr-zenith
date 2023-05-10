import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {

  @Output() activePage                      = new EventEmitter<string>()
  pageId          : string                  = this.activatedRoute.snapshot.data['pageId']
  salaryPendingForMonths : string[]         = []
  employeeDetails : {[key: string] : any}[] = [ ]
  employeeForm    : FormGroup

  constructor(
    private activatedRoute : ActivatedRoute,
    private fb             : FormBuilder,
    private employeeService : EmployeeService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.employeeForm = this.fb.group({
      empId     : [null, Validators.required],
      name   : [null],
      month  : [null, Validators.required],
      salary : [null, [Validators.required, Validators.min(1)]],
    })
    this.getEmployeeDetails()
  }

  setSelectedEmployee(employee) {
    this.employeeForm.controls['name'].setValue(employee.name)
    this.employeeForm.controls['salary'].setValue(employee.salary)
    this.salaryPendingForMonths = employee.salaryPendingForMonths
  }

  getEmployeeDetails() {
    this.employeeService.getAllEmployees().subscribe((response : {[key: string] : any}[]) => {
      this.employeeDetails = response.filter(employee => employee['salaryPendingForMonths'].length)
    })
  }
  payEmployee() {
    const transactionDetails = this.employeeForm.value

    this.employeeService.addEmployeeSalary(transactionDetails).subscribe((response: string) => {
      this.getEmployeeDetails()
      this.employeeForm.reset()
      this.toasterService.showSuccess(response)
    }, err => {
      this.toasterService.showError(err.error)
    })
  }
}