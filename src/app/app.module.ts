import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PostsModule} from './posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    },
      {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
