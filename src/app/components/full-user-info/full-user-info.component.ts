import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.component.html',
  styleUrls: ['./full-user-info.component.css']
})
export class FullUserInfoComponent implements OnInit {
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.user = this.router.getCurrentNavigation().extras.state as User);
  }

  ngOnInit(): void {
 ;
  }

}
