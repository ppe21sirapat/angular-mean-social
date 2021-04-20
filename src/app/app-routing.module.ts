import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const routes: Routes = [
    { path: '' , pathMatch: 'full' , redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'main', component: MainUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
