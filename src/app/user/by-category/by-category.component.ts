import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.css'],
})
export class ByCategoryComponent implements OnInit {
  bycatgories!: any;
  id!: number;
  isVisible!:boolean;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.show(this.id);
  }

  show(id:number) {
    this.bycatgories = this.postService
      .byCategory(id)
      .subscribe(adata => {
        this.bycatgories = adata;
        this.isVisible =  isNaN(this.bycatgories) ;
      });
  }
}
