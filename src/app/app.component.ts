import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private loginService: LoginService,
    private router: Router
  ) {
    iconRegistry.addSvgIcon(
      'account-login',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/account_icon.svg')
    );
  }
  title = 'desafio-angular';
  categories = environment.categories.categories;

  get isLoged(): boolean {
    return this.loginService.isLoged();
  }

  get name(): string {
    return this.loginService.getUserName();
  }

  logout() {
    if (confirm('Você quer fazer o logout?')) {
      this.loginService.clear();
      this.router.navigate(['/']);
    }
  }
}
