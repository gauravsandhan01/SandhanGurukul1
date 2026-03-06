import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Subject {

 apiUrl = "https://server-o4sj.onrender.com/subjects";

  constructor(private http:HttpClient){}

  getSubjects(){
    return this.http.get<any>(this.apiUrl);
  }

  addSubject(data:any){
    return this.http.post(this.apiUrl,data);
  }

  getSubjectsByUser(userId:any){
  return this.http.get<any>(`https://server-o4sj.onrender.com/subjects?userId=${userId}`);
}

}
  

