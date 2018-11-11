import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotLoggedInComponent} from './pages/not-logged-in/not-logged-in.component';
import {RegisterComponent} from './pages/register/register.component';
import {UserViewComponent} from './pages/user-view/user-view.component';

const routes: Routes = [
  {path: '', component: NotLoggedInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-view', component: UserViewComponent}
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
