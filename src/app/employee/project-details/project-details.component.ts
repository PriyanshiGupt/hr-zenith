import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projects : {[key: string]: any}[] = []
  constructor(
    private activatedRoute : ActivatedRoute,
    private projectService : ProjectsService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getProjectDetailsById()
  }

  getProjectDetailsById() {
    const employeeId  = localStorage.getItem('employeeId')
    this.projectService.getProjectDetailsById(employeeId).subscribe((response: {[key: string]: any}[]) => {
      this.projects = response
    })

  }

}
