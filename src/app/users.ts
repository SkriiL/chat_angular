import {User} from './models/user.model';
import {Conversation} from './models/conversation.model';

export const Users: User[] = [
  { id: 1, username: 'SkriiL', email: 'flx.grimm@gmail.com', password: 'Seedraking1'},
  { id: 2, username: 'Dummy', email: 'dummy@test.com', password: '123x'}
];

export const Conversations: Conversation[] = [
  {member: [Users[0], Users[1]],
    messages: [{by: Users[1], text: 'Hey', date: new Date()}]},
  {member: [Users[1], Users[0]],
    messages: [{by: Users[0], text: 'na großer', date: new Date()},
                {by: Users[1], text: 'alles fit bei dir?', date: new Date()}]},
];
