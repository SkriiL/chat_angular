import {User} from './user.model';
import {Message} from './message.model';

export class Conversation {
  id: number;
  member: User[];
  messages: Message[];
}
