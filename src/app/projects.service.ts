import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProjectDetails() {
    return this.http.get(environment.baseUrl + 'Project/getAllProjects')
  }
}
