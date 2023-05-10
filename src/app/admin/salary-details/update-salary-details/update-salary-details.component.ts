import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-update-salary-details',
  templateUrl: './update-salary-details.component.html',
  styleUrls: ['./update-salary-details.component.scss']
})
export class UpdateSalaryDetailsComponent implements OnInit {

  @Output() activePage                      = new EventEmitter<string>()
  pageId          : string                  = this.activatedRoute.snapshot.data['pageId']
  employeeDetails : {[key: string] : any}[] = [ 
  ]
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
      id            : [null, Validators.required],
      name          : [null],
      salary        : [null],
      updatedSalary : [null, [Validators.required, Validators.pattern('[1-9][0-9]*')]],
    })
    this.getEmployeeDetails()
  }

  setSelectedEmployee(employee) {

    this.employeeForm.controls['name'].setValue(employee.name)
    this.employeeForm.controls['salary'].setValue(employee.salary || 0)
    // console.log(employee)
  }

  getEmployeeDetails() {
    this.employeeService.getAllEmployees().subscribe((response : {[key: string] : any}[]) => {
      this.employeeDetails = response
    })
  }

  updateSalary() {
    const salaryDetails = this.employeeForm.value
    const id = salaryDetails.id._id
    const salaryBody = {
      salary: salaryDetails.updatedSalary
    }
    this.employeeService.updateEmployeeSalary(id, salaryBody).subscribe((response : string)=> {
      this.employeeForm.reset()
      this.getEmployeeDetails()
      this.toasterService.showSuccess(response)
    })
    
  }
}