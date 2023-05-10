import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  activeTab : string = null
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  transactions : {[key: string]: any}[] = []

  constructor(
    private activatedRoute : ActivatedRoute,
    private adminService : AdminService,
    private toasterService : ToasterService
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
    this.getAllTransactions()
  }

  getAllTransactions() {
    this.adminService.getAllTransactions().subscribe((response : {[key: string]: any}[]) => {
      this.transactions = response
    })
  }
}
