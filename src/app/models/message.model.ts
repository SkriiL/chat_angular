import {User} from './user.model';

export class Message {
  by: User;
  text: string;
  date: Date;
}
