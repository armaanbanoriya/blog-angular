import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }


  loginForm = this.formbuilder.group({
    email: ['', [Validators.required,Validators.minLength(3)]],
    password: ["",[Validators.required,Validators.minLength(3)]],
  });


  get errors() {
    return this.loginForm.controls;
  }

  submit(): void {
    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe(() => this.router.navigate(['admin/dashboard']));
  }
}
