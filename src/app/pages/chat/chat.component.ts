import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Conversation} from '../../models/conversation.model';
import {ConversationService} from '../../services/conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  public currentUser: User;
  public selectedConversation: Conversation;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private conversationService: ConversationService) { }

  ngOnInit() {
    this.getUser();
    if (!this.currentUser) {
      this.router.navigate(['']);
    }
    // this.getSelectedById();
  }

  getUser() {
    let id;
    id = parseInt(sessionStorage.getItem('id'), 10);
    if (id) {
      this.userService.getSingleById(id).subscribe(u => this.currentUser = u);
    }
  }

  select(conversation: Conversation) {
    this.selectedConversation = conversation;
  }

  /*getSelectedById() {
    let user = this.userService.getSingleById(parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(u => user = u);
    const obs = this.conversationService.getSingleByUsers(this.currentUser, user);
    if (obs) {
      obs.subscribe(c => this.selectedConversation = c);
    }
  }*/
}
