import { Component } from '@angular/core';
import { JsonContent } from '../../models/json-content';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  currentPost!:Post ; 

  constructor (
    private route: ActivatedRoute
  ){}


  ngOnInit(){

    //4)grazie a route ottengo un oggetto params, contenete l'id del post da renderizzare  
    this.route.params.subscribe((pharams:any) => {

    
    this.getActivePosts(pharams.id)
  })
  }
//1) in questo metodo arrivano tutti i ID DI POST , il metodo cercherà quello uguale da poter visualizzare nella pagina dettaglio 
  async getActivePosts(id:number){

    const response = await fetch('../../assets/db.json')
    const jsonContent = <JsonContent> await response.json()
    
    //2)con find filtro la lista dei vari ID
    const postTrovato = jsonContent.posts.find(p => p.id == id)

    //3)controllo se l'emeento esiste e lo salvo su current post 
    if (postTrovato) this.currentPost = postTrovato    
    
  }

}
