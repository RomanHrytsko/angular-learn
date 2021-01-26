import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-post-component',
  templateUrl: './full-post-component.component.html',
  styleUrls: ['./full-post-component.component.css']
})
export class FullPostComponentComponent implements OnInit {
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.post = this.router.getCurrentNavigation().extras.state as Post);
  }

  ngOnInit(): void {
  }

}
