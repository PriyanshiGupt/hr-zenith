import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    {
      empId : 112,
      empName : 'bhavna',
      amount : 23443,
      month : 'may',
      transactedOn : 123213232
    }
  ]

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
  }

}
