import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url);
  }

  getPostsById(id): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url + '/' + id + '/comments');
  }
}
