import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { User } from '../shared/user';
import { USERS } from '../shared/users';
import { AuthService } from '../services/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   modelArr:User[] = USERS;
   model: User;
  // model: User = { username: 'user1', password: 'pass1'};

  // modelArr.find(obj => obj.username == '');

  loginForm: FormGroup;  
  message: string;  
  returnUrl: string; 

  user = { username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    this.authService.logout();
    this.returnUrl = '/home';
  }

  //** Login form controls: get function */
  get f() { return this.loginForm.controls; }

  login() {

    if (this.loginForm.invalid) {
      return;
    } else {

      /** Get username-pass from model */
      this.model = this.modelArr.find(obj => 
        obj.username == this.f.username.value);
      
      /** Test if username-pass match */
      if(this.f.username.value == this.model.username && 
        this.f.password.value == this.model.password) {
          console.log("Successful login");
          sessionStorage.setItem('isLoggedIn', "true");
          sessionStorage.setItem('token', this.f.username.value)
          this.dialogRef.close();
          this.router.navigate([this.returnUrl]);
          
      } else {
        this.message = "Please check your username and password"
      }
    }

  }

  // onSubmit() {
  //   console.log('User:', this.user);
  //   this.login();
  //   this.dialogRef.close();
  // }



}
