import { Injectable } from '@angular/core';
import { Dishes } from 'src/assets/data/dishes.interface';

@Injectable({
  providedIn: 'root'
})
export class dishesService {
  private favoriteDishes: Dishes[] = [];
  addDishToFavorite(dish: Dishes) {
    this.favoriteDishes.push(dish);
    console.log(this.favoriteDishes);
  }
  getFavoriteDish() {
    return this.favoriteDishes.slice();
  }
}
