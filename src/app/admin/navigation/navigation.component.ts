import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MatDrawerMode} from '@angular/material/sidenav'
import { CookieStorageService } from 'src/app/shared/services/cookie-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  screenWidth: number
  navMode: MatDrawerMode
  navOpened: boolean
  activeTab: string
  greeting : string 
  adminName : string

  pageNavigationData = [
    
    { pageName: 'Employee' ,        pageIcon: 'fa fa-user',     pageLink: 'employeeDetails' },
    { pageName: 'Add Salary',       pageIcon: 'fa fa-user',     pageLink: 'addSalary' },
    { pageName: 'Add Project',      pageIcon: 'fa fa-user',     pageLink: 'addProject'},
    { pageName: 'Project Details',  pageIcon: 'fa fa-user',     pageLink: 'projectDetails' },
    { pageName: 'Project Report',   pageIcon: 'fa fa-user',     pageLink: 'projectReport' },
    { pageName: 'Approve Leave',    pageIcon: 'fa fa-user',     pageLink: 'approveLeave' },
    { pageName: 'Attendance',       pageIcon: 'fa fa-user',     pageLink: 'attendance' },

   
  ]

  constructor(
    private cookieStorageService : CookieStorageService
  ) {}

  ngOnInit(): void {
    this.setGreeting()
    this.onResizeOrLoad()
    fromEvent(window ,'resize').subscribe(() => this.onResizeOrLoad())
  }

  /*============================================================================
                          PRIVATE
  ============================================================================*/
  private setGreeting(){
    const date = new Date()
    const hours = date.getHours()
    
    if(hours < 12) this.greeting = 'Good Morning'
    else if (hours < 17) this.greeting = 'Good Afternoon'
    else this.greeting = 'Good Evening'
  }

  private onResizeOrLoad() {
    this.screenWidth = window.innerWidth
    if(this.screenWidth <= 768) {
      this.navMode = 'over'
      this.navOpened = false
    } else {
      this.navMode = 'side'
      this.navOpened = true
    }
  }

  /*============================================================================
                          CALLBACKS
  ============================================================================*/
  onActivate(componentRef) {
    if( componentRef.pageId ) {
      componentRef.activePage.subscribe((data)=>{
        setTimeout(() => {
          this.activeTab = data;
        }, 0)
      })
    }
  }

  /*============================================================================
                          HTML
  ============================================================================*/
  logout(): void {
    this.cookieStorageService.clearAllCookies();
    window.location.href = 'localhost:4200';
        
  }
}
