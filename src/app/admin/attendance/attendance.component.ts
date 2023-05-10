import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  employeesPresent  : {[key : string]: any}[]   = []

  employeesNotPresent  = []

  constructor(
    private activatedRoute : ActivatedRoute,
    private employeeService : EmployeeService
  ) { }
  
  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getAllEmployees()
  }

  getRandomDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }

    return color; 
}
getAllEmployees() {
  this.employeeService.getAllEmployees().subscribe((response : {[key: string]: any}[]) => {
    const allEmployee = response
    allEmployee.forEach(val => {
      val['bgColor'] = this.getRandomDarkColor()
      if(val['clockIn']) this.employeesPresent.push(val)
      else this.employeesNotPresent.push(val)
    })
  })
}

}
