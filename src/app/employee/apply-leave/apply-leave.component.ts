import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  leaveForm : FormGroup
  today 
  

  constructor(
    private activatedRoute : ActivatedRoute,
    private formBuilder    : FormBuilder,
    private employeeService : EmployeeService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.leaveForm = this.formBuilder.group({
      fromDate     :[null, [Validators.required]],
      toDate       :[null, [Validators.required]],
      reason       :[null, [Validators.required]]
    })
    this.today = new Date()
  }

  applyLeave() {
    const leaveDetails = this.leaveForm.value
    leaveDetails.empId = localStorage.getItem('employeeId')
    this.employeeService.applyLeave(leaveDetails).subscribe(response => {
      this.leaveForm.reset()
      this.toasterService.showSuccess('Leave applied successfully')
    })
  }
}
