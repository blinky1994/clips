import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
   }

   inSubmission = false;

   showAlert = false;
   alertMsg = 'Logging into your account...';
   alertColor = 'blue';

   constructor(private auth: AngularFireAuth) {

   }

   async login() {
    this.showAlert = true;
    this.alertMsg = 'Logging into your account...';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )

    } catch(e) {
      console.log(e);
      this.alertMsg = 'An unexpected error occured. Please try again later.'
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    console.log('login success');
    this.alertMsg= 'Successully logged in!'
    this.alertColor= 'green'
  }

}
