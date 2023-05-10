import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

enum GENDER {
  'M' = 'Male',
  'F' = 'Female',
  'O' = 'Other'
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  profile : {[key: string] : any} = {}
  GENDER = GENDER

  constructor(
    private activatedRoute : ActivatedRoute,
    private employeeService : EmployeeService,
    private cookieStorageService : CookieStorageService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getEmployeeById()
  }

  getEmployeeById() {
    let id = this.cookieStorageService.getDecodedCookie('employeeId') || localStorage.getItem('employeeId')
    this.employeeService.getEmployeeById(id).subscribe(response => {
      this.profile = response
    })
  }
}
