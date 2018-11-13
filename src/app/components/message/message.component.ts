import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-message',
  template: `
    <div [class]="cardStyle" style="width: 100%">
      <strong class="card-title">{{ name }}</strong>
      <span class="card-text">{{ message.text }}</span>
      <span class="card-text -align-right font-italic">{{ message.date }}</span>
    </div>
  `,
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() otherUser: User;

  public name: string;
  public cardStyle = 'card mb-2 mr-2 text-right';

  constructor() { }

  ngOnInit() {
    if (this.otherUser === this.message.by) {
      this.cardStyle = 'card mb-2 mr-2 text-left';
      this.name = this.message.by.username;
    } else {
      this.cardStyle = 'card mb-2 mr-2 text-right';
      this.name = 'Ich';
    }
  }

}
