import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  activeTab : string = null
  constructor() { }

  ngOnInit(): void {
  }
  
  onActivate(componentRef) {
    if( componentRef.pageId ) {
      componentRef.activePage.subscribe((data)=>{
        setTimeout(() => {
          this.activeTab = data;
        }, 0)
      })
    }
  }

}
