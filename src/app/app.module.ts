import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { UserService } from "./service/user.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { SignUpComponent } from "./components/sign-up/sign-up.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainUserComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
