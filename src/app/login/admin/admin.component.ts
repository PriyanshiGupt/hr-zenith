import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

  navigateToAdminPortal() {
    this.cookieStorageService.setCookie('role','ADMIN')
    this.router.navigateByUrl('admin')
  }
}
