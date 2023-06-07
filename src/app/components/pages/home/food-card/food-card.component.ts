import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs';

import { HealtFoodService } from 'src/app/services/healt-food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor(private healtFoodService: HealtFoodService) { };

  ngOnInit(): void {
    this.getFoods();
  };

  getFoods() {
    this.healtFoodService.listFood(12).pipe(
      finalize(() => this.loading = false)
    ).subscribe((data: any) =>  this.foods = this.foods.concat(data.recipes)
    )
  }

  loadMore() {
    this.loadingMore = true;
    this.healtFoodService.listFood(4)
      .pipe(finalize(() => this.loadingMore = false))
      .subscribe((data: any) => 
      this.foods = this.foods.concat(data.recipes)
    )
  };

}