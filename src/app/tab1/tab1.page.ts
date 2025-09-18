import { Component } from '@angular/core';
import { dishesService } from '../service/dishes';
import { Dishes } from 'src/assets/data/dishes.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  dishes: Dishes[];
  constructor(private dishService: dishesService) {}
  ionViewWillEnter() {
    this.dishes = this.dishService.getFavoriteDish();
    console.log(this.dishes);
  }

}
