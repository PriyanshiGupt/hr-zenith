import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  leaveForm : FormGroup
  

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder    : FormBuilder
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.leaveForm = this.formBuilder.group({
      fromDate     :[null, [Validators.required]],
      toDate       :[null, [Validators.required]],
      reason       :[null, [Validators.required]]
    })
  }

  applyLeave() {

  }
}
