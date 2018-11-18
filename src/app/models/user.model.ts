import {Conversation} from './conversation.model';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  conversations: Conversation[] | undefined;
  friendlist: User[] | undefined;
}
