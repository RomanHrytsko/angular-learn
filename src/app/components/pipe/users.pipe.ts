import {Input, Pipe, PipeTransform} from '@angular/core';
import {User} from '../../interface/User';

@Pipe({
  name: 'usersPipe'
})
export class UsersPipe implements PipeTransform {


  transform(value: User[], ...args: any[]): string[] {

    return  value.map((user) => `My name is ${user.name}, my email is ${user.email}`);
  }

}

// `My name is ${value.name} my email is ${value.email}`
