import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  routeRedirect = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.routeRedirect = route.snapshot.queryParams['redirect'];
  }

  submitLogin() {
    this.spinner.show();
    this.loginService.login(this.loginForm.value as Credentials).subscribe({
      next: (res) => {
        this.spinner.hide();
        res?.token
          ? this.router.navigate([this.routeRedirect])
          : this.loginForm.reset();
      },
      error: (err) => {
        this.spinner.hide();
        alert(err.error.message);
        this.loginForm.reset();
      },
    });
  }
}
