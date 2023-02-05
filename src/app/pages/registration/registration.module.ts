import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

export const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    NgxSpinnerModule,
  ],
  providers: [UserService],
})
export class RegistrationModule {}
