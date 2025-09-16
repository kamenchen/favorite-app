import { Component, OnInit } from '@angular/core';
import dishes from 'src/assets/data/dishes';
import { Dishes } from 'src/assets/data/dishes.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  dishCollection: {category: string, dishes: Dishes[]}[];
  constructor() {}

  ngOnInit() {
    this.dishCollection = dishes;
    console.log(this.dishCollection);
  }

}
