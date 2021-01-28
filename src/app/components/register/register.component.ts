import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  newUser = {name: '', surname: '', email: '', password: '', checkedPass: ''};


  ngOnInit(): void {
  }

  registration(form): void {
    console.log(form);
  }
}
