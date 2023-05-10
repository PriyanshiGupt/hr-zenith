import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  loginForm : FormGroup
  isPassVisible : boolean = false

  constructor(
    private activatedRoute : ActivatedRoute,
    private cookieStorageService : CookieStorageService,
    private router : Router,
    private formBuilder : FormBuilder,
    private loginService : LoginService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+ /= ?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]{2,}$')]],
      password: ['', Validators.required]
    })
  }

  navigateToEmployeePortal() {
    this.router.navigateByUrl('employee')
  }

  login() {
    const loginDetails = this.loginForm.value
    // console.log(loginDetails.password)
    // loginDetails.password = this.loginService.hashPassword(loginDetails.password)
    // console.log(loginDetails.password)
    this.loginService.employeeLogin(loginDetails).subscribe((response : string) => {
      console.log(response)
      this.cookieStorageService.setCookie('employeeId', response)
      this.toasterService.showSuccess("Login Success")
      this.navigateToEmployeePortal()
    }, err => {
      console.log(err)
      this.toasterService.showError(err.error)
    })
  }
}
