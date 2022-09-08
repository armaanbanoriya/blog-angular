import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-cat-links',
  templateUrl: './cat-links.component.html',
  styleUrls: ['./cat-links.component.css','../user.component.css']
})
export class CatLinksComponent implements OnInit {
  categories!: Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.show();
  }

  show(){
    this.categoryService.index().subscribe(data=>{
      this.categories = data
    });
  }

}
