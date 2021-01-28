import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {RegisterComponent} from './components/register/register.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {UsersResolveService} from './services/resolve/users-resolve.service';


const routes = [
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'users', component: UsersComponent, resolve: {userData: UsersResolveService}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    UsersComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
