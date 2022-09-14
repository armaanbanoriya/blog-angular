import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitter } from 'src/app/emitters/emitter';
import { Category } from 'src/app/interface/category';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-cat-display',
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.css'],
})
export class CatDisplayComponent implements OnInit {
  categories!: Category[];
  page: number = 1;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.display();
  }

  display() {
    // Emitter.categoryEmitter.subscribe(data => {
    //   categories = data;
    // });
    this.categoryService.index().subscribe( data =>{
      this.categories  = data
    })
  }

  delete(id: number) {
    this.categoryService.destroy(id).subscribe(
      () => {
        this.categories = this.categories.filter((p:Category) =>p.id !==id);
      }
    );
    this.router.navigate(['admin/category']);
  }
}
