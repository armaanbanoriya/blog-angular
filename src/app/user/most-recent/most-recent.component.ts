import { Component, OnInit } from '@angular/core';
import { MostRecent } from 'src/app/interface/most-recent';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.css'],
})
export class MostRecentComponent implements OnInit {
  lastpost!: any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.mostRecent();
  }
  mostRecent() {
    this.postService.mostRecent().subscribe((data) => {
      this.lastpost = data;
    });
  }
}
