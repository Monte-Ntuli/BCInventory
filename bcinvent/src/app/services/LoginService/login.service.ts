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

  CreateClassRoom(createClassRoom : any){
    return this.http.post(this.baseUrl + "ClassRoom/CreateClassRoom",createClassRoom);
  }

  UpdateClassRoom(updateClassRoom : any){
    return this.http.post(this.baseUrl + "ClassRoom/UpdateClassRoom",updateClassRoom);
  }

  UpdateClassName(updateClassRoom : any){
    return this.http.post(this.baseUrl + "ClassRoom/UpdateClassRoomName",updateClassRoom);
  }

  DeleteClassRoom(deleteClassRoom : any){
    return this.http.delete(this.baseUrl + "ClassRoom/DeleteClassRoom",deleteClassRoom);
  }

  GetAllClassRoom(){
    return this.http.get(this.baseUrl + "ClassRoom/GetAllClassRooms");
  }

  GetSpecificClassRoom(classRoomId : any){
    return this.http.get(this.baseUrl + "ClassRoom/GetSpecificClassRoom/" + classRoomId);
  }

}
