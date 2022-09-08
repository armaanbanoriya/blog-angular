import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../service/category.service';
import { PostService } from '../../../service/post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  categories!: Category[];
  createPost!: FormGroup;
  create!: boolean;
  id!: number;
  public Editor = ClassicEditor;
  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.show();
    this.createPost = new FormGroup({
      category_id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });

    // edit start
    this.create = this.route.snapshot.data['create'];
    this.id = this.route.snapshot.params['id'];

    if (!this.create) {
      this.postService.show(this.id).subscribe((posts) => {
        this.createPost.patchValue(posts);
      });
    }

    // edit end
  }

  show() {
    this.categoryService.index().subscribe((data) => {
      this.categories = data;
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createPost.get('image')?.setValue(file);
    }
  }

  store() {
    const formData = new FormData();
    formData.append('category_id', this.createPost.get('category_id')?.value);
    formData.append('name', this.createPost.get('name')?.value);
    formData.append('description', this.createPost.get('description')?.value);
    formData.append('image', this.createPost.get('image')?.value);

    const method = this.create
      ? this.postService.store(formData)
      : this.postService.update(this.id, formData);

    method.subscribe({});
    this.createPost.reset({});
    this.router.navigate(['admin/post']);
  }
}
