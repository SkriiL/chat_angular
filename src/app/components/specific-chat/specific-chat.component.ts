import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from '../../models/conversation.model';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-specific-chat',
  templateUrl: './specific-chat.component.html',
})
export class SpecificChatComponent implements OnInit {
  @Input() conversation: Conversation;
  @Input() currentUser: User;

  public message: string;

  constructor() { }

  ngOnInit() {
  }

  send() {
    const messageObj: Message = {
      by: this.currentUser,
      text: this.message,
      date: new Date()
    };
    this.conversation.messages.push(messageObj);
    this.message = '';
  }
}
