import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
})
export class AllChatsComponent implements OnInit {
  chats = [
    {user: 'Test', messages: [{user: 0, message: 'Hi'}, {user: 1, message: 'Hey'}]},
    {user: 'Dummy', messages: [{user: 0, message: 'Na'}, {user: 1, message: 'Was geht'}]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
