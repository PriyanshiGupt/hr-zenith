import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  employeesPresent  : {[key : string]: any}[]   = [
    {
      empId : 112,
      empName : 'asdf',
      clockIn : '12:12 AM',
      clockOut : '12:30 PM'
    },
    {
      empId : 112,
      empName : 'asdf',
      clockIn : '12:12 AM',
      // clockOut : '12:30 PM'
    },

  ]

  employeesNotPresent  = [
    {empId : 112, empName : 'asdd'}
  ]

  constructor(
    private activatedRoute : ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.employeesPresent.forEach(val => {
      val['bgColor'] = this.getRandomDarkColor()
    })
    this.employeesNotPresent.forEach(val => {
      val['bgColor'] = this.getRandomDarkColor()
    })
  }

  getRandomDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }

    return color; 
}

}
