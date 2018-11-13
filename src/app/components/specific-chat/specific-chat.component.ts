import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from '../../models/conversation.model';

@Component({
  selector: 'app-specific-chat',
  templateUrl: './specific-chat.component.html',
})
export class SpecificChatComponent implements OnInit {
  @Input() conversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

}
