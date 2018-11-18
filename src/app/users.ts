import {User} from './models/user.model';
import {Conversation} from './models/conversation.model';

export const Users: User[] = [
  { id: 1, username: 'SkriiL', email: 'flx.grimm@gmail.com', password: 'Seedraking1', conversations: undefined, friendlist: undefined},
  { id: 2, username: 'Dummy', email: 'dummy@test.com', password: '123x', conversations: undefined, friendlist: undefined},
  { id: 3, username: 'MarcelDavis', email: 'marcel@davis.com', password: '123x', conversations: undefined, friendlist: undefined}
];

export const Conversations: Conversation[] = [
  {member: [Users[0], Users[1]],
    messages: [{by: Users[1], text: 'Hey', date: new Date()}]},
  {member: [Users[1], Users[0]],
    messages: [{by: Users[0], text: 'na', date: new Date()}]},
];

Users[0].friendlist = [Users[2]];
Users[2].friendlist = [Users[0]];
Users[0].conversations = [Conversations[0]];
Users[1].conversations = [Conversations[1]];
