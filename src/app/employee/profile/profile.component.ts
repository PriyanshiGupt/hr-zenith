import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

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
  profilePic : {
    letter : string,
    bgColor : string
  }  = {
    letter : '',
    bgColor : ''
  }
  GENDER = GENDER
  empId = this.cookieStorageService.getDecodedCookie('employeeId') || localStorage.getItem('employeeId')

  constructor(
    private activatedRoute : ActivatedRoute,
    private employeeService : EmployeeService,
    private cookieStorageService : CookieStorageService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getEmployeeById()
  }

  getEmployeeById() {

    this.employeeService.getEmployeeById(this.empId).subscribe(response => {
      this.profile = response
      this.profilePic = {
        letter : response['name'].toUpperCase()[0],
        bgColor : this.getRandomDarkColor()
      }
    })
  }


  getRandomDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }

    return color; 
}

  clockIn() {
    let data  = {
      id : this.empId
    }
    this.employeeService.clockIn(data).subscribe(response => {
      this.getEmployeeById()
      this.toasterService.showSuccess('Clocked In Successfully')
    })
  }
  clockOut() {
    let data  = {
      id : this.empId
    }
    this.employeeService.clockOut(data).subscribe(response => {
      this.getEmployeeById()
      this.toasterService.showSuccess('Clocked Out Successfully')
    })
  }
}
