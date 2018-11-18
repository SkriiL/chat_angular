import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conversations} from '../../users';
import {Conversation} from '../../models/conversation.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
})
export class AllChatsComponent implements OnInit {
  @Output() select = new EventEmitter<Conversation>();

  @Input() currentUser: User;

  public selectedConversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

  onSelect(conversation: Conversation) {
    this.select.emit(conversation);
  }
}
