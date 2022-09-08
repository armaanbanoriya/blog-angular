import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { AdminComponent } from './admin.component';
import { CatDisplayComponent } from './category/cat-display/cat-display.component';
import { CatFormComponent } from './category/cat-form/cat-form.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDisplayComponent } from './post/post-display/post-display.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { SubDisplayComponent } from './subscribers/sub-display/sub-display.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
    children: [
      { path:'dashboard',component:DashboardComponent },
      {path:'category',component:CategoryComponent,
        children: [
        {path:'',component:CatDisplayComponent},
        {path:'cat-add',component:CatFormComponent,data:{create:true}},
        {path:'cat-add/:id/edit',component:CatFormComponent,data:{create:false}}
        ]
      },
      { path:'post',component:PostComponent,
        children:[
          {path:'',component:PostDisplayComponent},
          {path:'post-add',component:PostFormComponent,data:{create:true}},
          {path:'post-add/:id/edit',component:PostFormComponent,data:{create:false}}
        ]
      },
      { path:'subscribe',component:SubscribersComponent,
        children:[
          {path:'',component:SubDisplayComponent},
          {path:'sub-add',component:PostFormComponent,data:{create:true}},
          {path:'sub-add/:id/edit',component:PostFormComponent,data:{create:false}}
        ]
      }

    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
