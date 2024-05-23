import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { JsonContent } from '../../models/json-content';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {

  postsArr: Post [] = [];


  ngOnInit(){
    this.getActivePosts()
  
  }

  async getActivePosts(){
    const response = await fetch('../../assets/db.json')
    const jsonContent = <JsonContent> await response.json()
    const postFiltrati = jsonContent.posts.filter(p => !p.active)
    this.postsArr = postFiltrati
    
  }

}
