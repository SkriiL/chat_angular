import {User} from './user.model';
import {Message} from './message.model';

export class Conversation {
  member: User[];
  messages: Message[];
}
