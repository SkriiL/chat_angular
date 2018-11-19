import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Conversation} from '../models/conversation.model';
import {Conversations} from '../users';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  getSingleByUsers(user1: User, user2: User): Observable<Conversation> {
    let isConversation: boolean;
    for (let i = 0; i < Conversations.length; i++) {
      isConversation = Conversations[i].member[0] === user1 && Conversations[i].member[1] === user2;
      if (isConversation) {
        return of(Conversations[i]);
      }
    }
  }

  getAllForUser(id: number) {
    let convs: Conversation[] = [];
    for (let i = 0; i < Conversations.length; i++) {
      if (Conversations[i].member[0].id === id) {
        convs.push(Conversations[i]);
      }
    }
    return of(convs);
  }

  constructor() { }
}
