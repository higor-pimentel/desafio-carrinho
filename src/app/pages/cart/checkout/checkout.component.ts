import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  payment = '';

  constructor(private router: Router) {}

  radioSelected(radio: any) {
    this.payment = radio.value;
  }

  navegar() {
    this.router.navigate(['cart', 'confirmation']);
  }
}
