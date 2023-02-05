import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/core/models';
import { LoginService, UserService } from 'src/app/core/services';

@Component({
  selector: 'app-account',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  telRegex: RegExp = new RegExp('\\d{2}\\s?\\d{4,5}\\-?\\d{4}');

  userForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    newslettter: [''],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        //Validators.pattern(this.telRegex),
      ],
    ],
    endereco: ['', Validators.required],
    number: ['', Validators.required],
    complement: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    cep: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  salvar() {
    let user: User = { ...this.userForm.value };
    console.log(user);

    this.userService.create(user).subscribe({
      next: (res) => {
        this.userForm.reset();
        this.router.navigate(['login']);
      },
    });
  }
}
