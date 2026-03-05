import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
;
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = "";
  password = "";

  constructor(private auth: Auth, private router: Router) {}

  login(){

  this.auth.getUsers().subscribe(users=>{

    const user = users.find((u:any)=>
      u.email === this.email && u.password === this.password
    );

    if(user){

      localStorage.setItem("user",JSON.stringify(user));

      this.router.navigate(['/dashbord']);
    }
    else{
      alert("Invalid Email or Password");
    }

  })
  }
}