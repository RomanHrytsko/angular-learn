import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Posts} from '../../models/Posts';
import {PostsService} from '../posts/posts.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Posts[]> {

  constructor(private postService: PostsService) {
  }

  resolve(id): Observable<Posts[]> | Promise<Posts[]> | Posts[] {
    return this.postService.getPostsById(id);
  }
}
