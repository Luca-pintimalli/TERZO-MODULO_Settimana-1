import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { Page404Component } from './pages/page404/page404.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  
  {
    path:" ",
    redirectTo: "/home",
    pathMatch: "full"
  },
  
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "active-post",
    component: ActivePostsComponent
  },
  {
    path:"inactive-post",
    component: InactivePostsComponent,
  },
  {
    path:'detail/:id',
    component: DetailComponent,
  },
  {
    path:"**", //serve per la pagina 404
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
