import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribers } from 'src/app/interface/subscribers';
import { SubscribersService } from 'src/app/service/subscribers.service';

@Component({
  selector: 'app-sub-display',
  templateUrl: './sub-display.component.html',
  styleUrls: ['./sub-display.component.css'],
})
export class SubDisplayComponent implements OnInit {
  page = 1;
  subscribers!: Subscribers[];
  constructor(
    private subscribeService: SubscribersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeService.index().subscribe((subscribers) => {
      this.subscribers = subscribers;
    });
  }

  delete(id: number) {
    this.subscribeService.destroy(id).subscribe();
    this.router.navigate(['admin/subscribe']);
  }
}
