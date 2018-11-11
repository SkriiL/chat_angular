import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html'
})
export class UserViewComponent implements OnInit {
  public users: User[];
  public selectedUser: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  collapse() {
    this.selectedUser = undefined;
  }
}
