import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe.service';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.scss']
})
export class SimilarRecipesComponent implements OnInit {
 
  public loading: boolean = true;
  public similarRecipes: any = []


  @Input() recipeIdSimilar!: number;

  constructor( private singleRecipeService: SingleRecipeService){}

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar);    
  }
  
  takeSimilarRecipes( id: number){
    this.singleRecipeService.getSimilarRecipes(id)
    .pipe(finalize(() => this.loading = false))
    .subscribe((data: any) => {
      this.similarRecipes =  data.slice(0, 4);     
    })
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

}
