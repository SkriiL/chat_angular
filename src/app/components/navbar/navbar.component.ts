import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public currentUser: User;

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(user: User) {
    if (user) {
      this.router.navigate(['']);
      this.currentUser = user;
    }
  }

  logout() {
    this.toastr.info('Abgemeldet!');
    this.currentUser = undefined;
    sessionStorage.removeItem('id');
    this.router.navigate(['']);
  }

  signIn() {
    this.router.navigate(['register']);
  }
}
