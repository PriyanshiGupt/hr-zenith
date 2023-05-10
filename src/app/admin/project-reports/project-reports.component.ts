import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';

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
    private activatedRoute : ActivatedRoute,
    private projectService : ProjectsService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getProjectReports()
  }

  getProjectReports() {
    this.projectService.getProjectReports().subscribe((response: {[key : string]: any}[]) => {
      this.projectReports = response
    })
  }

}
