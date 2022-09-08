import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostPageComponent } from './user/blog-post-page/blog-post-page.component';
import { ByCategoryComponent } from './user/by-category/by-category.component';
import { LoginComponent } from './user/login/login.component';
import { SubscribersComponent } from './user/subscribers/subscribers.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'post/:id',component:BlogPostPageComponent},
  {path:'category/:id',component:ByCategoryComponent},
  {path:'login',component:LoginComponent},
  // {path:'subscribe',component:SubscribersComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
