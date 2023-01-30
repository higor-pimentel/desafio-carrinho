import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/models';
import { LoginService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  submitLogin() {
    this.loginService
      .login(this.loginForm.value as Credentials)
      .subscribe((res) => {
        res.token ? this.router.navigate(['']) : this.loginForm.reset();
      });
  }
}
