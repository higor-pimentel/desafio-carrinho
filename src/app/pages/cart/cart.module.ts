import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartRoutingModule } from './cart-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [CartComponent, CheckoutComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
  ],
})
export class CartModule {}
