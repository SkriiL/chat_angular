import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  initSocket() {
    this.socket = socketIo('http://localhost:12321');
  }

  send(message: Message) {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  constructor() {
    this.initSocket();
  }
}
