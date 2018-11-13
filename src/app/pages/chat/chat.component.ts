import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Conversation} from '../../models/conversation.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  private currentUser: User;
  public selectedConversation: Conversation;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getUser();
    if (!this.currentUser) {
      this.router.navigate(['']);
    }
  }

  getUser() {
    let id = -1;
    this.route.params.subscribe(params => id = +params['id']);
    if (id !== -1) {
      this.userService.getSingleById(id).subscribe(u => this.currentUser = u);
    }
  }

  select(conversation: Conversation) {
    this.selectedConversation = conversation;
  }
}
