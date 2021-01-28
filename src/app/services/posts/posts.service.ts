import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPostsByUserId(id: number): Observable<{ id: number, title: string }> {
    return this.httpClient.get<{ id: number, title: string }>(`${this.url}?userId=${id}`);
  }
}
