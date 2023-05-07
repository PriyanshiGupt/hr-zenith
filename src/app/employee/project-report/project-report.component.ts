import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    private formBuilder    : FormBuilder
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.projectForm = this.formBuilder.group({
      projectName         :[null, [Validators.required]],
      projectReport       :[null, [Validators.required]],
    })
  }

  addProject() {

  }
}
