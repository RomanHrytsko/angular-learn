import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from '../../Models/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {name: '', age: '', email: ''};
  usersArr = [];
  userArr: Users;

  name = new FormControl('', Validators.minLength(4));
  age = new FormControl(0, [Validators.required, this.ageValidator]);
  email = new FormControl('', Validators.email);
  form: FormGroup;

  inputs = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });

  constructor() {
  }

  ngOnInit(): void {
  }


  addNewUser(inputs: FormGroup): void {
    this.usersArr.push(inputs.getRawValue());
    console.log(inputs);
    console.log(inputs.getRawValue());

  }

  // addNewUser(inputs): void {
  //   this.usersArr.push({name: this.name.value, age: this.age.value, email: this.email.value});
  //   console.log(inputs);
  //
  // }

  ageValidator(inputData: AbstractControl): { ageError: boolean } | null {
    if (inputData.value <= 15) {

      return {ageError: true};
    }
    return null;
  }


}
