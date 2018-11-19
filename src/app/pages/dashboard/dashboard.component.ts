import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private currentUser: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private socketService: SocketService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.socketService.initSocket();
    let id;
    id = parseInt(sessionStorage.getItem('id'), 10);
    if (id) {
      this.userService.getSingleById(id).subscribe(u => this.currentUser = u);
    }
  }
}
