import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public currentUser: User;

  constructor(
    private toastr: ToastrService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  login(user: User) {
    if (user) {
      this.currentUser = user;
    }
  }

  logout() {
    this.toastr.info('Abgemeldet!');
    this.currentUser = undefined;
    this.location.go('');
    window.location.reload();
  }

  signIn() {
    this.location.go('-1/register');
    window.location.reload();
  }
}
