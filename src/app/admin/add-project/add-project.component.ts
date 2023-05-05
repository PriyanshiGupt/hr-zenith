import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projectForm : FormGroup

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder    : FormBuilder
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.projectForm = this.formBuilder.group({
      projectName         :[null, [Validators.required]],
      clientName          :[null, [Validators.required]],
      projectType         :[null, [Validators.required]],
      projectManager      :[null, [Validators.required]],
      developingPlatform  :[null, [Validators.required]],
      databaseTechnology  :[null, [Validators.required]],
      projectDescription  :[null, [Validators.required]],
    })
  }

  addProject() {

  }
}
