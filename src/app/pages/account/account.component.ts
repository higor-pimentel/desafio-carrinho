import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService, UserService } from 'src/app/core/services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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
    private loginService: LoginService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.userService.getUser(this.loginService.getUserId()).subscribe({
      next: (user) => {
        this.spinner.hide();
        this.userForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          gender: user.gender,
          phone: user.phone,
          endereco: user.address.address,
          city: user.address.city,
          state: user.address.state,
          cep: user.address.postalCode,
        });
      },
    });
  }

  salvar() {}
}
