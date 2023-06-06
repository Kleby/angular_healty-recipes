import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  private ApiKey: string = '5079d41ab93f4286ae98b62638ce1eb0';
  
  private urlBase: string = 'https://api.spoonacular.com';

  constructor( private http: HttpClient) { }

  takeRecipesInformation(id: number){
    const apiUrl = `${this.urlBase}/recipes/${id}/information?apiKey=${this.ApiKey}`
    return this.http.get(apiUrl);
  }

  getSimilarRecipes(id: number){
    const apiUrl = `${this.urlBase}/recipes/${id}/similar?apiKey=${this.ApiKey}`
    return this.http.get(apiUrl);
  }

}
