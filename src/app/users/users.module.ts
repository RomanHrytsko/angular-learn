import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { FullUserComponent } from './components/full-user/full-user.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UsersModule {
}
