import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm !:FormGroup

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:[''],
      mobile:[''],
      email:[''],
      password:['']
    })
  }


  signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signUpForm.value).subscribe(res=>{
      alert('Signed up successfully !!');
      this.signUpForm.reset();
      this.router.navigate(['login']);
    })
  }

}
