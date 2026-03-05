import { Component, OnInit } from '@angular/core';
import { Subject } from '../../services/subject';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-subject',
  imports: [FormsModule,CommonModule],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subjects implements OnInit{
subjects:any[]=[];

  constructor(private subjectService: Subject) {}

  ngOnInit(){

    const user = JSON.parse(localStorage.getItem("user") || '{}');

    this.subjectService.getSubjectsByUser(user.id)
      .subscribe((data:any)=>{

        this.subjects = data;

      });

  }
}



//   subject:any = {};
//   subjects:any[] = [];

//   constructor(private service: Subject) {}
  
//   ngOnInit(){

//     const user = JSON.parse(localStorage.getItem("user") || '{}');

//     this.subjectService.getSubjectsByUser(user.id)
//       .subscribe((data:any)=>{

//         this.subjects = data;

//       });

//   }

//   addSubject(){

//     this.service.addSubject(this.subject).subscribe(()=>{
//       alert("Subject Added");
//       this.subject = {};
//       this.loadSubjects();
//     });

//   }

//   loadSubjects(){

//     this.service.getSubjects().subscribe((data:any)=>{
//       this.subjects = data;
//     });

//   }

// }

              
