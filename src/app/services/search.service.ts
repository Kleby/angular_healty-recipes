import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit{

  private baseUrl: string = 'https://api.spoonacular.com'
  private apiKey: string = '5079d41ab93f4286ae98b62638ce1eb0'

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  search(query: string){
    const apiUrl = `${this.baseUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}&number=9`;

    return this.http.get(apiUrl)
  }
}
