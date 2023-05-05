import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.scss']
})
export class ProjectReportsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projectReports : {[key: string]: any}[] = [
    {
      projectName : 'abd',
      empId       : 122,
      empName     : 'name',
      report      : 'asdff',
      reportedTime: 11223232
    }
  ]
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
  }

}
