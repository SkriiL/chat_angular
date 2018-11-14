import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <div class="row">
        <div class="col">
          <input [(ngModel)]="username" name="username" type="text" class="form-control" placeholder="Nutzername">
        </div>
        <div class="col">
          <input [(ngModel)]="password" name="password" type="password" class="form-control" placeholder="Passwort">
        </div>
        <div class="col">
          <button (click)="login()" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  `
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private user: User;
  @Output() loggedIn = new EventEmitter<User>();

  login() {
    this.userService.getSingleByUsername(this.username).subscribe(u => this.user = u);
    if (this.user) {
      if (this.password === this.user.password) {
        this.toastr.success('Login erfolgreich!');
        sessionStorage.removeItem('id');
        sessionStorage.setItem('id', this.user.id.toString());
        this.loggedIn.emit(this.user);
      } else {
        this.toastr.error('Falsches Passwort.', 'Login fehlgeschlagen!');
      }
    } else {
      this.toastr.error('Nutzer existiert nicht.', 'Login fehlgeschlagen!');
    }

  }

  constructor(
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

}
