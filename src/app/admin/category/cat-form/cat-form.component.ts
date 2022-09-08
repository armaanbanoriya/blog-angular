import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css'],
})
export class CatFormComponent implements OnInit {
  createForm!: FormGroup;
  create!: boolean;
  id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    // edit start
    this.create = this.route.snapshot.data['create'];

    if (!this.create) {
      this.id = this.route.snapshot.params['id'];

      this.categoryService.show(this.id).subscribe((categories) => {
        this.createForm.patchValue(categories);
      });
    }

    // edit end
  }
  get f() {
    return this.createForm.controls;
  }

  store() {
    const method = this.create
      ? this.categoryService.store(this.createForm.getRawValue())
      : this.categoryService.update(this.id, this.createForm.getRawValue());

    method.subscribe(() => this.router.navigate(['admin/category']));
  }
}
