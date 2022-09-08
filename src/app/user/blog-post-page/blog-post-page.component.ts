import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.css','../user.component.css']
})
export class BlogPostPageComponent implements OnInit {
  id!:number;
  post!:any;
  categoryBoolean!:boolean;
  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.show();
    this.categoryBoolean = this.route.snapshot.data['categoryBoolean'];
  }

  show(){
    this.postService.show(this.id).subscribe(data=>{
      this.post = data
    });
  }


}
