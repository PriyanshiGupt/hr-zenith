import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }
  
  employeeLogin(data) {
    return this.http.post(environment.baseUrl + 'Employee/login', data)
  }

  adminLogin(data) {
    return this.http.post(environment.baseUrl + 'Admin/adminlogin', data)
  }
}
