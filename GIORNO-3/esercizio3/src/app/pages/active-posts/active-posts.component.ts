import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { JsonContent } from '../../models/json-content';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  postsArr: Post [] = [];


  ngOnInit(){
    this.getActivePosts()
  
  }

  async getActivePosts(){
    const response = await fetch('../../assets/db.json')
    const jsonContent = <JsonContent> await response.json()
    const postFiltrati = jsonContent.posts.filter(p => p.active)
    this.postsArr = postFiltrati
    
  }

}





