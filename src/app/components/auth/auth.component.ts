import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Route, Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  user = {log: '', password: ''};

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const res = this.authService.login(this.user);
    res ? this.router.navigate(['users']) : console.log(res);
  }


}
