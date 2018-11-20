import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  @Input('user')
  set user(value: User) {
    this._user = value;
    this.username = value.username;
    this.email = value.email;
  }
  @Output() collapsed = new EventEmitter<boolean>();

  public username: string;
  public email: string;
  public changes = false;
  public _user: User;

  private currentUser: User;

  constructor(
    private socketService: SocketService,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.username = this.user.username;
    // this.email = this.user.email;
  }

  edit(event: boolean) {
    this.userService.getSingleById(1);
    if (event) {
      const user: User = {
        id: this._user.id,
        username: this.username ? this.username : this._user.username,
        email: this.email ? this.email : this._user.email,
        password: this._user.password,
        conversations: this._user.conversations ? this._user.conversations : undefined,
        friendlist: this._user.friendlist ? this._user.friendlist : undefined,
      };
      this.userService.edit(user);
      this.toastr.success('Der Nutzer ' + user.username + ' wurde erfolgreich bearbeitet!');
      // window.location.reload();
      this.collapsed.emit(true);
    }
  }

  reset() {
    this.username = this.user.username;
    this.email = this.user.email;
  }

  abort() {
    this.collapsed.emit(true);
  }
}
