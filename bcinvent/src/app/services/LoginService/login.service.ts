import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  login(UserDetails : any){
    return this.http.post(this.baseUrl + "Login/Login",UserDetails);
  }

}
