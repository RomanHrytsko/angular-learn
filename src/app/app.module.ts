import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserServiceResolveService} from './services/resolve/user-service-resolve.service';
import {FullUserComponent} from './components/full-user/full-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserServiceResolveService},
    children: [{
      path: ':id', component: FullUserComponent
    }]
  },
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
