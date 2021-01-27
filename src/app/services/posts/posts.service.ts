<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../../models/Posts';
=======
import { Injectable } from '@angular/core';
>>>>>>> origin/homework_4

@Injectable({
  providedIn: 'root'
})
export class PostsService {
<<<<<<< HEAD
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url);
  }

  getPostsById(id): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url + '/' + id + '/comments');
  }
=======

  constructor() { }
>>>>>>> origin/homework_4
}
