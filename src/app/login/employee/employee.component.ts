import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(
    private activatedRoute : ActivatedRoute, 
    private cookieStorageService : CookieStorageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
  }

  navigateToEmployeePortal() {
    this.cookieStorageService.setCookie('role','EMPLOYEE')
    this.router.navigateByUrl('employee')
  }
}
