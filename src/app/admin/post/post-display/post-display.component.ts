import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { PostService } from '../../../service/post.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css'],
})
export class PostDisplayComponent implements OnInit {
  posts!: Post[];
  page: number = 1;
  constructor(private postService: PostService,private router:Router) {}

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.postService.index().subscribe((data) => {
      this.posts = data;
    });
  }

  delete(id: number): void {
    this.postService.destroy(id).subscribe({});
    this.router.navigate(['admin/post']);
  }
}
