import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private pushPage;

  constructor(public navCtrl: NavController) {
    this.pushPage = ShopPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onGoToShop() {
    this.navCtrl.push(this.pushPage);
  }
}
