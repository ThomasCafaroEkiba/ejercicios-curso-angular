import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.post = this.postService.post;
  }
}
