import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotLoggedInComponent} from './pages/not-logged-in/not-logged-in.component';
import {RegisterComponent} from './pages/register/register.component';
import {UserViewComponent} from './pages/user-view/user-view.component';
import {ChatComponent} from './pages/chat/chat.component';

const routes: Routes = [
  {path: '', component: NotLoggedInComponent},
  {path: ':id/register', component: RegisterComponent},
  {path: ':id/user-view', component: UserViewComponent},
  {path: ':id/chat', component: ChatComponent}
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
