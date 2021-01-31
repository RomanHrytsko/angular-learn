import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private activatedRouted: ActivatedRoute) {

    // this.activatedRouted.data.subscribe(value => {
    //
    //
    //   console.log(value.userData);
    //   this.users = value.userData;
    // });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

}
