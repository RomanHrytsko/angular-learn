import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Users} from '../../Data/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {name: '', age: '', email: '' };
  usersArr = [];
  userArr: Users;

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {

    console.log(form);
    this.usersArr.push({name: form.controls.name.value, age: form.controls.age.value, email: form.controls.email.value});
    console.log(this.usersArr);

  }
}
