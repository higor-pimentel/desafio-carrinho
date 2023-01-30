import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
  },
  {
    path: 'admin',
    component: AccountComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class AppRoutingModule {}
