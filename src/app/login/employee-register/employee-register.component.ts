import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router : Router
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name          : [null, [Validators.required]],
      email         : [null, [Validators.required]],
      dob           : [null, [Validators.required]],
      gender        : [null, [Validators.required]],
      mobileNumber  : [null, [Validators.required]],
      address       : [null, [Validators.required]],
      // profilePicture: [null, [Validators.required]],
      password      : [null, [Validators.required]]
    })
  }

  registerEmployee() {
    this.router.navigateByUrl('/login')
  } 
}
