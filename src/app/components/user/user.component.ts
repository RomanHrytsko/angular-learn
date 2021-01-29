import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts/posts.service';
import {Posts} from '../../models/Posts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  userPosts: Posts[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  goTo(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});

  }

  goToPosts(): void {
    this.router.navigate(['posts']);
  }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.postsService.getPostsByUserId(this.user.id).subscribe();
  }
}
