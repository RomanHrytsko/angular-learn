import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  singlePost: Post;

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPost().subscribe((value) => {
      this.posts = value;
    });

  }

  getBubblePost(post: Post): void {
    this.singlePost = post;
  }
}
