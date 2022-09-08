import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit(): void {
    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe(
        () => this.router.navigate(['admin/dashboard']));
  }
}
