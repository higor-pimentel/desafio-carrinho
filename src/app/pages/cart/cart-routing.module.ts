import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartGuard } from 'src/app/core/guards/cart.guard';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    canDeactivate: [CartGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartGuard],
})
export class CartRoutingModule {}
