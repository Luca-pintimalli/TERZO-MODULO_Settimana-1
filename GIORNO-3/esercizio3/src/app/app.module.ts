import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    DetailComponent,
    Page404Component,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
