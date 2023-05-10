import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  employeeForm : FormGroup 
  isPassVisible : boolean = false

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private employeeService : EmployeeService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name          : [null, [Validators.required]],
      email         : [null, [Validators.required]],
      dob           : [null, [Validators.required]],
      gender        : [null, [Validators.required]],
      mobileNumber  : [null, [Validators.required]],
      address       : [null, [Validators.required]],
      designation   : [null, [Validators.required]],
      password      : [null, [Validators.required]]
    })
  }

  registerEmployee() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe(response => {

      this.router.navigateByUrl('/login')
      this.toasterService.showSuccess('Employee Registered Successfully')
    })
  } 
}
