import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../models/User';
import {UsersService} from '../users/users.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceResolveService implements Resolve<User[]> {

  constructor(private userService: UsersService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUser();
  }
}
