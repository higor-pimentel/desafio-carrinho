import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable()
export class UserService {
  private url = environment.base.concat(environment.user);

  constructor(private httpClient: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.url.concat(`/${id}`));
  }

  create(user: User) {
    localStorage.setItem('users', JSON.stringify([user]));
    return this.httpClient.post<User>(this.url.concat('/add'), user);
  }
}
