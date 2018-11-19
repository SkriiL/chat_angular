import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Users } from '../users';
import {Observable, of} from 'rxjs';
import {SocketService} from './socket.service';
import {Conversation} from '../models/conversation.model';
import {ConversationService} from './conversation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll(): Observable<User[]> {
    return of(Users);
  }

  getSingleById(id: number): Observable<User> {
    this.socketService.sendRequest('getUserById', id.toString());
    return new Observable<User>(observer => {
      this.socketService.returnUser.subscribe(x => {
        const _id = parseInt(x[0], 10);
        let convs: Conversation[];
        this.conversationService.getAllForUser(_id).subscribe(c => convs = c);
        const user = {id: id, username: x[1], email: x[2], password: x[3], conversations: convs, friendlist: undefined};
        return observer.next(user);
      });
    });
  }

  getObjById(id: number): User {
    return Users.find(user => id === user.id);
  }

  getSingleByUsername(username: string): Observable<User> {
    return of(Users.find(user => username === user.username));
  }
  constructor(private socketService: SocketService,
              private conversationService: ConversationService) { }

  add(username: string, email: string, password: string) {
    const id = Users.length + 1;
    const user: User = {
      id: id,
      username: username,
      email: email,
      password: password,
      conversations: undefined,
      friendlist: undefined
    };
    Users.push(user);
  }

  edit(user: User): boolean {
    const oldUser = this.getObjById(user.id);
    const index = Users.indexOf(oldUser);
    if (index === -1) {
      return false;
    } else {
      Users.splice(index, 1, user);
      return true;
    }
  }

  deleteById(id: number) {
    let user = this.getSingleById(id).subscribe(u => user = u);
    const index = Users.indexOf(user);
    if (index === -1) {
      return false;
    } else {
      Users.splice(index, 1);
      return true;
    }
  }
}
