import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from '../../models/conversation.model';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-specific-chat',
  templateUrl: './specific-chat.component.html',
})
export class SpecificChatComponent implements OnInit {
  @Input() conversation: Conversation;
  @Input() currentUser: User;

  public message: string;

  private ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initToConnection();
  }

  send() {
    const messageObj: Message = {
      by: this.currentUser,
      text: this.message,
      date: new Date()
    };
    this.conversation.messages.push(messageObj);
    this.socketService.send(messageObj);
    this.message = undefined;
  }

  initToConnection() {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.conversation.messages.push(message);
      });
  }
}
