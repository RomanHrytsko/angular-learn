import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from '../../Data/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {name: '', age: '', email: ''};
  usersArr = [];
  userArr: Users;


  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   age: new FormControl('', [this.ageValidator])
    // });
  }


  // submit(form: NgForm): void {
  //
  //   console.log(form);
  //   this.usersArr.push({name: form.controls.name.value, age: form.controls.age.value, email: form.controls.email.value});
  //   console.log(this.usersArr);
  //
  // }


  name = new FormControl('', Validators.minLength(4));
  age = new FormControl(0, [Validators.required, this.ageValidator]);
  email = new FormControl('', Validators.email);

  inputs = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });

  addNewUser(inputs): void {
    this.usersArr.push({name: this.name.value, age: this.age.value, email: this.email.value});
    console.log(inputs);

  }

  ageValidator(inputData: AbstractControl): { ageError: boolean } | null {
    if (inputData.value <= 15) {

      return {ageError: true};
    }
    return null;
  }


}
