import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts!: Post[];
  page: number = 1;
  image:any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.postService.index().subscribe((data) => {
      this.posts = data;
    });
  }
}
