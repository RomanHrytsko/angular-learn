import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.component.html',
  styleUrls: ['./full-user-info.component.css']
})
export class FullUserInfoComponent implements OnInit {

  user: any;

  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation().extras.state as any;
  }

  ngOnInit(): void {
  }

}
