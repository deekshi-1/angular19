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

}
