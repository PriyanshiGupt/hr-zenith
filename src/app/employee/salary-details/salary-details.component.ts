import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.scss']
})
export class SalaryDetailsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  activeTab : string = null
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  transactions : {[key: string]: any}[] = [
  ]

  constructor(
    private activatedRoute : ActivatedRoute,
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getSalaryDetails()
  }

  getSalaryDetails() {
    const employeeId = localStorage.getItem('employeeId')
    this.employeeService.getSalaryDetails(employeeId).subscribe((response : {[key: string]: any}[] )=> {
      this.transactions = response
    })
  }
}
