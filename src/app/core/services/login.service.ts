import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Credentials } from '../models';

type ResponseLogin = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

@Injectable({ providedIn: 'root' })
export class LoginService {
  private userCredentials = {
    username: 'atuny0',
    password: '9uQFF1Lh',
  };

  constructor(private httpClient: HttpClient) {}

  login(credentials: Credentials) {
    return this.httpClient
      .post<ResponseLogin>(
        environment.login,
        JSON.stringify(this.userCredentials),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .pipe(
        tap((res) => {
          localStorage.setItem('user-info', JSON.stringify(res));
        })
      );
  }

  isLoged(): boolean {
    return !!localStorage.getItem('user-info');
  }

  getToken(): string {
    const userinfo = localStorage.getItem('user-info');
    if (!!userinfo) {
      return JSON.parse(userinfo).token;
    }
    return '';
  }

  clear() {
    localStorage.removeItem('user-info');
  }
}
