import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { JsonContent } from '../../models/json-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  postsArr: Post[] = []; 
  firstPost!: Post;

  ngOnInit(){
    this.getposts().then(() =>{
      let firstPost = this.getFirstPost()
      if (firstPost){
        this.firstPost = firstPost ; 
      }
    })

  }

  async getposts(){
    const response = await fetch('../../../assets/db.json')
    const posts = <JsonContent> await response.json()
    this.postsArr = posts.posts
  }

  getFirstPost(){
    return this.postsArr.shift()
  }




}
