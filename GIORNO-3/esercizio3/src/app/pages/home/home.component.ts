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
  randomPosts: Post[] = [];

  ngOnInit(){
    this.getposts().then(() =>{
      let firstPost = this.getFirstPost()

      if (firstPost){
        this.firstPost = firstPost ; 
      }

      this.randomPosts = this.getRandomPost()
    })

  }

  async getposts(){
    const response = await fetch('../../../assets/db.json')
    const posts = <JsonContent> await response.json()
    this.postsArr = posts.posts
  }

  //recupero il primo post da mettere in evidenza
  getFirstPost(){
    return this.postsArr.shift()
  }


  //per recuperare 4 post da mettere nell'ultima sezione 
  getRandomPost(): Post[]{
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 4); 
  }




}
