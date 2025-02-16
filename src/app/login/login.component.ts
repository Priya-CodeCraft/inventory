import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (!this.username.trim()) {
      this.errorMsg = "Username is required";
      return;
    }
    if (!this.password.trim()) {
      this.errorMsg = "Password is required";
      return;
    }
    
    this.errorMsg = "";
    let res = this.auth.login(this.username, this.password);
    
    if (res === 200) {
      this.router.navigate(['dashboard']);
    } else {
      this.errorMsg = "Invalid Credentials";
    }
  }
}
