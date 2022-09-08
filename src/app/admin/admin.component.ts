import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) {}
  user!: User;
  ngOnInit(): void {
    this.authService.user().subscribe(user => {
      console.log(user);
    },
    err=>{
      console.log(err);
      // this.router.navigate(['login']);
    });
  }

}
