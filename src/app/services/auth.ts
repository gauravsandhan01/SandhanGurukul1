import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

 registerUser(data:any){
  return this.http.post("http://localhost:3000/users",data);
}
  getUsers(){
    return this.http.get<any>(this.apiUrl);
  }

  addSubject(data:any){
  return this.http.post("http://localhost:3000/subjects",data);
}
  
}
