import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projectForm : FormGroup
  employees : {[key: string]: any}[]

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder    : FormBuilder,
    private projectService : ProjectsService,
    private toasterService : ToasterService,
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.projectForm = this.formBuilder.group({
      projectName         :[null, [Validators.required]],
      clientName          :[null, [Validators.required]],
      projectType         :[null, [Validators.required]],
      projectManager      :[null, [Validators.required]],
      developingPlatform  :[null, [Validators.required]],
      databaseTech  :[null, [Validators.required]],
      description         :[null, [Validators.required]],
    })
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((response: {[key: string]: any}[]) => {
      this.employees = response
    })
  }

  addProject() {
    const data  = this.projectForm.value
    data.empId = data.projectManager._id
    data.projectManager = data.projectManager.name
    this.projectService.addProject(data).subscribe(response => {
      this.projectForm.reset()
      this.toasterService.showSuccess('Project Created Successfully')
    }, err => {
      this.toasterService.showError(err.error)
    })
  }
}
