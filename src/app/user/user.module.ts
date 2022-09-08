import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CatLinksComponent } from './cat-links/cat-links.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import { RouterModule } from '@angular/router';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { ByCategoryComponent } from './by-category/by-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribersComponent } from './subscribers/subscribers.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    UserInfoComponent,
    CatLinksComponent,
    BlogPostPageComponent,
    MostRecentComponent,
    ByCategoryComponent,
    LoginComponent,
    SubscribersComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule,FormsModule,ReactiveFormsModule],
})
export class UserModule {}
