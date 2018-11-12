import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html'
})
export class UserViewComponent implements OnInit {
  public users: User[];
  public selectedUser: User;

  private currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getUser();
    if (!this.currentUser) {
      this.router.navigate(['']);
    }
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

  getUser() {
    let id = -1;
    this.route.params.subscribe(params => id = +params['id']);
    if (id !== -1) {
      this.userService.getSingleById(id).subscribe(u => this.currentUser = u);
    }
  }
}
