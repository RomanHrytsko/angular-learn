import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Post} from '../../models/post/Post';
import {PostsService} from '../posts/posts.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {


  constructor(private postService: PostsService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getPost();
  }
}
