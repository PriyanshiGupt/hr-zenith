import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {

  @Output() activePage                      = new EventEmitter<string>()
  pageId          : string                  = this.activatedRoute.snapshot.data['pageId']
  salaryPendingForMonths : string[]         = []
  employeeDetails : {[key: string] : any}[] = [ 
    {
      id : 112,
      name : 'Priyanshi',
      salary : '53788',
      salaryPendingForMonths : ['March', 'April']
    }
  ]
  employeeForm    : FormGroup

  constructor(
    private activatedRoute : ActivatedRoute,
    private fb             : FormBuilder,
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.employeeForm = this.fb.group({
      id     : [null, Validators.required],
      name   : [null],
      month  : [null],
      salary : [null],
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
      this.employeeDetails = response
    })
  }
}