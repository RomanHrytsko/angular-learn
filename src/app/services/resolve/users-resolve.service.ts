import {Injectable} from '@angular/core';
import {UsersService} from '../users/users.service';
import {Resolve} from '@angular/router';
import {User} from '../../model/user/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User[]> {

  constructor(private userService: UsersService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUser();
  }

}
