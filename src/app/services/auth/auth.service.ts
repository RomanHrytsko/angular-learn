import {Injectable} from '@angular/core';
import {IAuth} from '../../model/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: IAuth[] = [{log: 'max', password: '1111'}, {log: 'kokos', password: '2222'}];

  constructor() {
  }

  login(user: IAuth): boolean {
    const res = this.users.find(value => JSON.stringify(value) === JSON.stringify(user));
    return res ? !!res : false;

  }
}
