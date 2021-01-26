import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToUsers(): void {
    this.router.navigate(['users']);
  }

  goToHome(): void {
    this.router.navigate(['home']);
  }

  gotToPosts(): void {
    this.router.navigate(['posts']);
  }
}
