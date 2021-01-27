import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserServiceResolveService} from './services/resolve/user-service-resolve.service';
import {FullUserComponent} from './components/full-user/full-user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import {FullPostInfoComponent} from './components/full-post-info/full-post-info.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserServiceResolveService},
    children: [{
      path: ':id', component: FullUserComponent
    }]
  },
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService},
    children: [{
      path: ':id', component: FullPostInfoComponent
    }]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    FullPostInfoComponent,
    PostComponent
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
