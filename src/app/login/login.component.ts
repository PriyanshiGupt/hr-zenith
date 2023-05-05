import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieStorageService } from '../shared/services/cookie-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private cookieStorageService : CookieStorageService
  ) { }

  ngOnInit(): void {
  }
  navigateToEmployeePortal() {
    this.cookieStorageService.setCookie('role','EMPLOYEE')
    this.router.navigateByUrl('employee')
  }
  navigateToAdminPortal() {
    this.cookieStorageService.setCookie('role','ADMIN')
    this.router.navigateByUrl('admin')
  }

}
