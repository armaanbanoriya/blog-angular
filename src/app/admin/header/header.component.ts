import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../admin.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user!: any;
  ngOnInit(): void {
    this.authService.user().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
