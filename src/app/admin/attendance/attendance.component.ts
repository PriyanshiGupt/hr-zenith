import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, AfterViewInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  employeesPresent     = [
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
    private changeDetectorRef : ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges()
  }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    // this.changeDetectorRef.detectChanges()
  }

  get getRandomDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }

    return color; 
}

}
