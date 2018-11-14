import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserEditComponent } from './pages/user-view/user-edit.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { AllChatsComponent } from './components/all-chats/all-chats.component';
import { SpecificChatComponent } from './components/specific-chat/specific-chat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReallyModalComponent } from './modals/really-modal/really-modal.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    UserViewComponent,
    UserEditComponent,
    ChatComponent,
    MessageComponent,
    AllChatsComponent,
    SpecificChatComponent,
    ReallyModalComponent,
    DateFormatPipe,
    RegisterModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
