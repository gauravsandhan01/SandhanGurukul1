import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from '../../services/subject';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard implements OnInit{
 subjects:any[]=[];
  u:any={};   // logged user object

  overallProgress:number = 0;

  constructor(private subjectService:Subject){}

  ngOnInit(){

    // Get user from localStorage
    const userData = localStorage.getItem("user");

    if(userData){
      this.u = JSON.parse(userData);
    }

    // Load subjects
    this.subjectService.getSubjectsByUser(this.u.id)
    .subscribe((data:any)=>{
      this.subjects = data;

    // calculate average progress
    if(this.subjects.length > 0){

      const total = this.subjects.reduce((sum:number, s:any)=>{
        return sum + s.progress;
      },0);

      this.overallProgress = Math.round(total / this.subjects.length);
    }

    });

  }

}