import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 user:any={};

  constructor(private auth:Auth){}

  register(){

    this.auth.registerUser(this.user).subscribe((newUser:any)=>{

      const subjects = [

        {
          userId:newUser.id,
          name:"Physics",
          progress:0,
          notes:0,
          tests:0,
          tasks:0
        },

        {
          userId:newUser.id,
          name:"Chemistry",
          progress:0,
          notes:0,
          tests:0,
          tasks:0
        },

        {
          userId:newUser.id,
          name:"Mathematics",
          progress:0,
          notes:0,
          tests:0,
          tasks:0
        },

        {
          userId:newUser.id,
          name:"Biology",
          progress:0,
          notes:0,
          tests:0,
          tasks:0
        }

      ];

      subjects.forEach(sub=>{
        this.auth.addSubject(sub).subscribe();
      });

      alert("Registration Successful");

    });

  }
}