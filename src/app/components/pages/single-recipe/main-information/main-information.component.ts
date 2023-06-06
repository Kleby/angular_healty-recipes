import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { finalize } from 'rxjs';

import { SingleRecipeService } from 'src/app/services/single-recipe.service';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.scss']
})
export class MainInformationComponent implements OnInit{

  public loading: boolean = true; 
  public recipeDefaultId: number = 1;
  public recipeId!: number;
  public food: any = [];

  @Output() recipeIdSimilar!: number;

  constructor( 
    private singleRecipeService: SingleRecipeService,
    private route: ActivatedRoute
    ){};

  ngOnInit(): void {
    this.getRecipeForId();
    this.takeRecipe( this.recipeId | this.recipeDefaultId);
    this.recipeIdSimilar = this.recipeId | this.recipeDefaultId ;
  };

  getRecipeForId(){
    this.route.queryParams.subscribe((queryParams: any) => this.recipeId = queryParams.id)
  };

  takeRecipe( id:number ){
      this.singleRecipeService.takeRecipesInformation(id).pipe(finalize(() =>
        this.loading = false
      )).subscribe( (data: any) => this.food = data)
  }


}
