import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  api = environment.apiUrl
  constructor(private http: HttpClient) { }
  getaboutData() {
    return this.http.get(this.api + 'about')
  }
  getProjectData() {
    return this.http.get(this.api + 'projects')
  }

  sendQuery(data: any) {
    return this.http.post(this.api + 'contact', data)
  }

  getQuerryData() {
    return this.http.get(this.api + 'contact')
  }
  addProject(data: any) {
    return this.http.post(this.api + 'projects', data)
  }
  patchProject(id: string, data: any) {
    return this.http.put(this.api + 'projects/' + id, data)
  }
  getProject(id: any) {
    return this.http.get(this.api + 'projects/' + id);
  }
  checkAdmin() {
    const savedRole = localStorage.getItem('role');
    if (savedRole === 'admin') return true
    else return false;
  }
}
