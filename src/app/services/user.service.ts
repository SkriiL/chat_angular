import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Users } from '../users';
import {Observable, of} from 'rxjs';
import {SocketService} from './socket.service';
import {Conversation} from '../models/conversation.model';
import {ConversationService} from './conversation.service';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll(): Observable<User[]> {
    this.socketService.sendRequest('getAllUsers', '');
    return new Observable<User[]>(observer => {
      this.socketService.onEvent('allUsers').subscribe(((x: string[][]) => {
        let users: User[] = [];
        for (let i = 0; i < x.length; i++) {
          const id = parseInt(x[i][0], 10);
          let convs: Conversation[];
          this.conversationService.getAllForUser(id).subscribe(c => convs = c);
          const user = {id: id, username: x[i][1], email: x[i][2], password: x[i][3], conversations: convs, friendlist: undefined};
          users.push(user);
        }
        return observer.next(users);
      }));
    });
  }

  getSingleById(id: number): Observable<User> {
    this.socketService.sendRequest('getUserById', id.toString());
    return new Observable<User>(observer => {
      this.socketService.onEvent('user').subscribe((x: string[]) => {
        let convs: Conversation[];
        this.conversationService.getAllForUser(id).subscribe(c => convs = c);
        const user = {id: id, username: x[1], email: x[2], password: x[3], conversations: convs, friendlist: undefined};
        return observer.next(user);
      });
    });
  }

  getObjById(id: number): User {
    return Users.find(user => id === user.id);
  }

  getSingleByUsername(username: string): Observable<User> {
    this.socketService.sendRequest('getUserByName', username);
    return new Observable<User>(observer => {
      this.socketService.onEvent('user').subscribe((x: string[]) => {
        const id = parseInt(x[0], 10);
        let convs: Conversation[];
        this.conversationService.getAllForUser(id).subscribe(c => convs = c);
        const user = {id: id, username: x[1], email: x[2], password: x[3], conversations: convs, friendlist: undefined};
        console.log(user);
        return observer.next(user);
      });
    });
  }
  constructor(private socketService: SocketService,
              private conversationService: ConversationService) {}

  add(username: string, email: string, password: string) {
    const user: string = username + '|' + email + '|' + password;
    this.socketService.sendRequest('addUser', user);
  }

  edit(user: User) {
    const user_str: string = user.id + '|' + user.username + '|' + user.email + '|' + user.password + '|' + user.conversations + '|' + user.friendlist;
    this.socketService.sendRequest('editUser', user_str);
  }

  deleteById(id: number) {
    this.socketService.sendRequest('deleteUser', id.toString());
  }
}
