import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Posts} from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsData);
  }

  ngOnInit(): void {
  }

}
