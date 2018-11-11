import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public loggedIn = false;

  constructor(
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  login(isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.toastr.info('Abgemeldet!');
    this.loggedIn = false;
  }

  signIn() {
    this.location.
  }
}
