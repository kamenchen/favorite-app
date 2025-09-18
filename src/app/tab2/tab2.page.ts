import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import dishes from 'src/assets/data/dishes';
import { Dishes } from 'src/assets/data/dishes.interface';
import { dishesService } from '../service/dishes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  dishCollection: {category: string, dishes: Dishes[]}[];
  constructor(private alertController: AlertController, 
    private dishesService: dishesService
  ) {}

  ngOnInit() {
    this.dishCollection = dishes;
    console.log(this.dishCollection);
  }
  async onAddToFavorite(selectedDish: Dishes) {
    const alert = await this.alertController.create({
      header: 'Add Dish',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to add this dish?',
      buttons: [
        {text: 'Yes',
          handler: () => {
            this.dishesService.addDishToFavorite(selectedDish);
          }
        },
        {text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled')
          }
        }
      ]
    });
    await alert.present();
  }

}
