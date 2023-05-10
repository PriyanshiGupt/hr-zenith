import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projectForm : FormGroup
  projectsAssigned : {[key: string] : any}[] = [
    {
      id : 12,
      name : 'add name to report'
    }
  ]

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder    : FormBuilder,
    private projectService : ProjectsService ,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.projectForm = this.formBuilder.group({
      projectName         :[null, [Validators.required]],
      projectReport       :[null, [Validators.required]],
    })
    this.getProjectDetailsById()
  }

  getProjectDetailsById() {
    const employeeId = localStorage.getItem('employeeId')
    this.projectService.getProjectDetailsById(employeeId).subscribe((response: {[key: string]: any}[]) => {
      this.projectsAssigned = response
    } )
  }
  addProjectReport() {

  }
}
