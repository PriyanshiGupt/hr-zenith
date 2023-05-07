import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Output() activePage = new EventEmitter<string>()
  pageId : string      = this.activatedRoute.snapshot.data['pageId']
  profile : {[key: string] : any} = {
    name : 'priyanshi',
    dob  : 'asdfd',
    designation : 'asdfd',
    email : 'email',
    address : '179-A Gurbax colony street no 1, patiala punjab, 147001',
    gender : 'male',
    clockIn : null,
    clockOut : null
  }

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activePage.emit(this.pageId)
  }

}
