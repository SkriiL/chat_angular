import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Users } from '../users';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll(): Observable<User[]> {
    return of(Users);
  }

  getSingleById(id: number): Observable<User> {
    return of(Users.find(user => id === user.id));
  }

  getSingleByUsername(username: string): Observable<User> {
    return of(Users.find(user => username === user.username));
  }
  constructor() { }

  add(username: string, email: string, password: string) {
    const id = Users.length + 1;
    const user: User = {
      id: id,
      username: username,
      email: email,
      password: password
    };
    Users.push(user);
  }
}
