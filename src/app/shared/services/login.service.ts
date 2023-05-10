import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as bcrypt from 'bcryptjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }
  
  // hashPassword(password) {
  //   return bcrypt.hashSync(password, 1)
  // }
  employeeLogin(data) {
    return this.http.post(environment.baseUrl + 'Employee/login', data)
  }

  adminLogin(data) {
    return this.http.post(environment.baseUrl + 'Admin/adminlogin', data)
  }
}
