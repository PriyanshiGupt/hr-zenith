import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http : HttpClient
  ) { }

  getAllEmployees() {
    return this.http.get(environment.baseUrl + 'Employee/getAllEmployee')
  }
  getEmployeeById(id) {
    return this.http.get(environment.baseUrl + 'Employee/detailsById/' + id)
  }
  rejectEmployee(id) {
    return this.http.patch(environment.baseUrl + 'Employee/rejectEmployee/' + id, {} )
  }
  approveEmployee(id) {
    return this.http.patch(environment.baseUrl + 'Employee/approveEmployee/' + id, {})
  }
    
  addEmployee(data) {
    return this.http.post(environment.baseUrl + 'Employee/addEmployee', data)
  }

  updateEmployeeSalary(id, data) {
    return this.http.patch(environment.baseUrl + 'Employee/updateSalary/' +id, data  )
  }

  addEmployeeSalary(data) {
    return this.http.post(environment.baseUrl + 'Employee/addSalary', data)
  }
  applyLeave(data) {
    return this.http.post(environment.baseUrl + 'Leaves/addLeave', data)
  }
  getSalaryDetails(id) {
    return this.http.get(environment.baseUrl + 'Transactions/transactionDetailsById/' + id)
  }
  clockIn(data) {
    return this.http.patch(environment.baseUrl + 'Employee/clockIn', data)
  }
  clockOut(data) {
    return this.http.patch(environment.baseUrl + 'Employee/clockOut', data)
  }
}
