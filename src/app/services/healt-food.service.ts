import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealtFoodService {

  private ApiKey: string = '5079d41ab93f4286ae98b62638ce1eb0';
  private urlBase: string = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) { 
  }


  listFood( take: number){

    //take = quantidade de receitas na requisição
    const apiUrl = `${this.urlBase}/recipes/random?apiKey=${this.ApiKey}&number=${take}`;

    return this.http.get(apiUrl)
  }
}
