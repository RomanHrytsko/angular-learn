import {Injectable} from '@angular/core';
import {UsersService} from '../users/users.service';
import {Resolve} from '@angular/router';
import {User} from '../../models/user/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]> {

  constructor(private usersService: UsersService) {

  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.usersService.getUser();

  }
}
