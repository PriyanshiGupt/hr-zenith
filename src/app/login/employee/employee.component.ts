import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';

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
    private formBuilder : FormBuilder
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
}
