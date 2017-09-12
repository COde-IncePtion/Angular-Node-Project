import { AuthService } from './auth/auth.service';
import { Http, HttpModule } from '@angular/http';
import { SignoutComponent } from './auth/signout.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { HeaderComponent } from './Header/header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageComponent } from './messages/message.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        SignoutComponent
    ],
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    providers:[AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}