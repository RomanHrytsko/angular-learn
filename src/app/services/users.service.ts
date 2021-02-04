import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
