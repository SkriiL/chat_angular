import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';
import {Message} from '../models/message.model';
import {UserService} from './user.service';
import {User} from '../models/user.model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private sucMsg: string;
  private errMsg: string;

  initSocket() {
    this.socket = socketIo('localhost:56789'); // 'skriil.ddnss.de:56789'
  }

  send(message: Message) {
    const msg = message.by.id + '|' + message.text + '|' + message.date.toString();
    this.socket.emit('message', msg);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: string[]) => {
        let by: User = new User();
        // this.userService.getSingleById(parseInt(data[0], 10)).subscribe(u => by = u);
        const text = data[1];
        const date = new Date(data[2]);
        const msg: Message = {by: by, text: text, date: date};
        return observer.next(msg);
      });
    });
  }

  public sendRequest(event: string, args: string, toast: boolean, sucMsg = '', errMsg = '') {
    if (toast) {
      this.sucMsg = sucMsg;
      this.errMsg = errMsg;
      this.socket.emit(event, args, this.toast);
    } else {
      this.socket.emit(event, args);
    }
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }

  toast(success: boolean) {
    if (success) {
      this.toastr.success(this.sucMsg);
    } else {
      this.toastr.error(this.errMsg);
    }
  }

  constructor(private toastr: ToastrService) {this.initSocket(); }
}
