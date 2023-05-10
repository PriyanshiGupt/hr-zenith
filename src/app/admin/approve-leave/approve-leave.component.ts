import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

enum LEAVE_STATUS {
  'APPROVED' = 'APPROVED',
  'WAITING'  = 'WAITING',
  'REJECTED' = 'REJECTED'
}

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.scss']
})
export class ApproveLeaveComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  pendingLeaves : {[key: string]: any}[] = []
  LEAVE_STATUS = LEAVE_STATUS 

  constructor(
    private activatedRoute : ActivatedRoute,
    private adminService : AdminService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getAllLeaves()
  }

  getAllLeaves() {
    this.adminService.getAllLeaves().subscribe((response : {[key: string]: any}[]) => {
      this.pendingLeaves = response
    })
  }

  approveLeave(id) {
    this.adminService.approveLeave(id).subscribe((response : string) => {
      this.getAllLeaves()
      this.toasterService.showSuccess(response)
    })
  }
  rejectLeave(id) {
    this.adminService.rejectLeave(id).subscribe((response : string) => {
      this.getAllLeaves()
      this.toasterService.showSuccess(response)
    })
  }
  

}
