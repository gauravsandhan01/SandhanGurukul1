import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = "https://server-o4sj.onrender.com/users";

  constructor(private http: HttpClient) {}

 registerUser(data:any){
  return this.http.post("https://server-o4sj.onrender.com/users",data);
}
  getUsers(){
    return this.http.get<any>(this.apiUrl);
  }

  addSubject(data:any){
  return this.http.post("https://server-o4sj.onrender.com/subjects",data);
}
  
}
