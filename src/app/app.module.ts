import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FulluserComponent} from './components/fulluser/fulluser.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    FulluserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'link/home', component: HomeComponent
      },
      {
        path: 'link/users', component: UsersComponent, children: [
          {path: ':id', component: FulluserComponent}
        ]
      },
      // {
      //   path: 'link/users', component: UsersComponent
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
