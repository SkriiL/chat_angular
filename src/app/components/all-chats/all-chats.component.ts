import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conversations} from '../../users';
import {Conversation} from '../../models/conversation.model';
import {User} from '../../models/user.model';
import {ConversationService} from '../../services/conversation.service';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
})
export class AllChatsComponent implements OnInit {
  @Output() select = new EventEmitter<Conversation>();
  public conversations: Conversation[];

  @Input() currentUser: User;

  public selectedConversation: Conversation;

  constructor(private conversationService: ConversationService) { }

  ngOnInit() {
    this.conversationService.getAllForUser(this.currentUser.id).subscribe(cs => this.conversations = cs);
  }

  onSelect(conversation: Conversation) {
    this.select.emit(conversation);
  }
}
