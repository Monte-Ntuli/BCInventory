import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(UserDetails : any): Observable<Object>{
    return this.http.post<any>(this.baseUrl + "UserLogin/Login",UserDetails);
  }

}
