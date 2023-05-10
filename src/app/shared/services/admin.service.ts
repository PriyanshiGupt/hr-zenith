import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http : HttpClient
  ) { }

  getAllTransactions() {
    return this.http.get(environment.baseUrl + 'Transactions/getAllTransactions')
  }
}
