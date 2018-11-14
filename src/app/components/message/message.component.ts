import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-message',
  template: `
    <div [class]="cardStyle" style="width: 100%">
      <strong [class]="titleStyle">{{ name }}</strong>
      <span [class]="textStyle">{{ message.text }}</span>
      <span [class]="textStyle">{{ message.date | dateFormat: 'time'}}</span>
    </div>
  `,
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() otherUser: User;

  public name: string;
  public cardStyle = 'card mb-2 mr-4 text-right';
  public textStyle = 'card-text mr-2';
  public titleStyle = 'card-title mr-2';

  constructor() { }

  ngOnInit() {
    if (this.otherUser === this.message.by) {
      this.cardStyle = 'card mb-2 mr-4 text-left';
      this.textStyle = 'card-text ml-2';
      this.titleStyle = 'card-title ml-2';
      this.name = this.message.by.username;
    } else {
      this.cardStyle = 'card mb-2 mr-4 text-right';
      this.textStyle = 'card-text mr-2';
      this.titleStyle = 'card-title mr-2';
      this.name = 'Ich';
    }
  }

}
