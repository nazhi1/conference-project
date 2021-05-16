import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.loginForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.loginForm.get('password');
  }
// tslint:disable-next-line:typedef
onLogin(){
    this.authService.onLoginUser(this.loginForm.value).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('home');
    });
}
}
