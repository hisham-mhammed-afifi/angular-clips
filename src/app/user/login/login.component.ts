import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  // for alert component
  showAlert = false;
  alertMsg = 'Please wait, logging you in...';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait, logging you in...';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      const { email, password } = this.credentials;
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.inSubmission = false;
      this.alertMsg = 'an unexpected error occurred.';
      this.alertColor = 'red';
      return;
    }
    this.alertMsg = 'Success, your logged in.';
    this.alertColor = 'green';
  }
}
