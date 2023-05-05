import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  projects : {[key: string]: any}[] = [
    {
      projectName : 'abd',
      clientName : 'asd',
      projectType : '',
      projectManager : ''
    }
  ]
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
  }

}
