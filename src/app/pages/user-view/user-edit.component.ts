import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  @Output() collapsed = new EventEmitter<boolean>();

  public username: string;
  public email: string;
  public changes = false;

  private currentUser: User;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.username = this.user.username;
    this.email = this.user.email;
  }

  edit() {
    const user: User = {
      id: this.user.id,
      username: this.username ? this.username : this.user.username,
      email: this.email ? this.email : this.user.email,
      password: this.user.password,
    };
    const success = this.userService.edit(user);
    if (success) {
      this.toastr.success('Der Nutzer ' + user.username + ' wurde erfolgreich bearbeitet!');
    } else {
      this.toastr.success('Der Nutzer konnte nicht gefunden werden!');
    }
    window.location.reload();
    this.collapsed.emit(true);
  }

  reset() {
    this.username = this.user.username;
    this.email = this.user.email;
  }

  abort() {
    this.collapsed.emit(true);
  }

  getUser() {
    let id = -1;
    this.route.params.subscribe(params => id = +params['id']);
    if (id !== -1) {
      this.userService.getSingleById(id).subscribe(u => this.currentUser = u);
    }
  }
}
