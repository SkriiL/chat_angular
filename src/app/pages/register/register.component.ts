import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  template: `
    <form class="container">
      <div class="form-group">
        <label for="username">Nutzername</label>
        <input class="form-control" type="text" [(ngModel)]="username" id="username" name="username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="email" [(ngModel)]="email" id="email" name="email"></div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control" type="password" [(ngModel)]="password" id="password" name="password"></div>
      <button class="btn btn-primary" (click)="register()">Registrieren</button>
    </form>
  `,
})
export class RegisterComponent implements OnInit {
  public username: string;
  public password: string;
  public email: string;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private location: Location) { }

  ngOnInit() {
  }

  register() {
    this.userService.add(this.username, this.email, this.password);
    this.toastr.success('Sie können sich jetzt anmelden.', 'Nutzer ' + this.username + ' wurde erstellt.');
    this.location.back();
  }

}
