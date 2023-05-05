import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-salary-details',
  templateUrl: './update-salary-details.component.html',
  styleUrls: ['./update-salary-details.component.scss']
})
export class UpdateSalaryDetailsComponent implements OnInit {

  @Output() activePage                      = new EventEmitter<string>()
  pageId          : string                  = this.activatedRoute.snapshot.data['pageId']
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
    private fb             : FormBuilder
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.employeeForm = this.fb.group({
      id            : [null, Validators.required],
      name          : [null],
      salary        : [null, Validators.required, Validators.pattern('[1-9][0-9]*')],
      updatedSalary : [null, Validators.required, Validators.pattern('[1-9][0-9]*')],
    })
  }

  setSelectedEmployee(employee) {
    this.employeeForm.controls['name'].setValue(employee.name)
    this.employeeForm.controls['salary'].setValue(employee.salary)
  }

  updateSalary() {
    
  }
}