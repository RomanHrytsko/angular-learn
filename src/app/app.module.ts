import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {FullUserInfoComponent} from './components/full-user-info/full-user-info.component';
import {FullPostComponentComponent} from './components/full-post-component/full-post-component.component';
import {HomeComponent} from './components/home/home.component';
import {PostResolveService} from './services/resolve/post-resolve.service';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService},
    children: [
      {
        path: ':id', component: FullUserInfoComponent
      }
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService},
    children: [
      {
        path: ':id', component: FullPostComponentComponent
      }
    ]
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    FullUserInfoComponent,
    FullPostComponentComponent,
    HomeComponent
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
