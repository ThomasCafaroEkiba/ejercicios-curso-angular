import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[];
  comments: any[];
  nuevoPost: any = {};

  constructor(
    private api: ApiService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.getPosts().subscribe((res) => {
      this.posts = res;
      this.getComments();
    });
  }

  getComments() {
    this.api.getComments().subscribe((res) => {
      this.comments = res;
      this.comments.forEach((comment) => {
        const postAlCualPertenece = this.posts.find(
          (post) => post.id === comment.postId
        );
        if (!postAlCualPertenece.comments) postAlCualPertenece.comments = [];
        postAlCualPertenece.comments.push(comment);
      });
    });
  }

  abrirPost(post) {
    this.postService.post = post;
    this.router.navigate(['/post']);
  }

  crearPost() {
    this.api.crearPost(this.nuevoPost).subscribe((res) => {
      console.log('Post creado con éxito');
      this.posts.push(res);
    });
  }
}
