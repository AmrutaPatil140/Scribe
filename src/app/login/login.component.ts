import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email : string ="";
  // password : any;

  myform : FormGroup;
  message : string ="";
  userError :any;

  constructor(public fb : FormBuilder, public authService: AuthService , public router:Router) { 
    this.myform = this.fb.group({
      email :['',[Validators.email, Validators.required]],
      password :['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form){
   this.authService.login(form.value.email , form.value.password)
    .then((data)=>{
      console.log(data);
      this.message = "you have logged i n successfully"
      this.router.navigate(['/myblogs'])
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })
  }

}
