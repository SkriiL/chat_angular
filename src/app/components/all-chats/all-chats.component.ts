import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Conversations} from '../../users';
import {Conversation} from '../../models/conversation.model';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
})
export class AllChatsComponent implements OnInit {
  @Output() select = new EventEmitter<Conversation>();
  public conversations = Conversations;
  public selectedConversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

  onSelect(conversation: Conversation) {
    this.select.emit(conversation);
  }
}
