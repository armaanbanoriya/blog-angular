import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { CatFormComponent } from './category/cat-form/cat-form.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { CatDisplayComponent } from './category/cat-display/cat-display.component';
import { PostDisplayComponent } from './post/post-display/post-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { SubDisplayComponent } from './subscribers/sub-display/sub-display.component';
import { SubFormComponent } from './subscribers/sub-form/sub-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    CategoryComponent,
    PostComponent,
    CatFormComponent,
    PostFormComponent,
    CatDisplayComponent,
    PostDisplayComponent,
    SubscribersComponent,
    SubDisplayComponent,
    SubFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
