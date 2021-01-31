import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './component/posts/posts.component';
import {PostComponent} from './component/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';
import { FullPostComponent } from './component/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostsService]
})
export class PostsModule {
}
