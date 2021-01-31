import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.userService.getUserById([this.user.id]).subscribe(value => console.log(value))
  }

  goTo(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }
}
