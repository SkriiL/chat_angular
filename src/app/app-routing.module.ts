import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserViewComponent} from './pages/user-view/user-view.component';
import {ChatComponent} from './pages/chat/chat.component';
import {FriendsComponent} from './pages/friends/friends.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user-view', component: UserViewComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'friends', component: FriendsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
