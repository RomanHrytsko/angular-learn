import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getPostInfo(): void {
   this.router.navigate([this.post.id], {relativeTo: this.activatedRouter, state: this.post});
  }
}
