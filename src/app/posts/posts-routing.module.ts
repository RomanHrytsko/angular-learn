import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './component/posts/posts.component';
import {PostComponent} from './component/post/post.component';
import {FullPostComponent} from './component/full-post/full-post.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: ':id', component: FullPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
