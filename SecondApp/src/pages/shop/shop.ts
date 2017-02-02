import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BuyoutPage} from "../buyout/buyout";

/*
  Generated class for the Shop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  private pushPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = BuyoutPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  onBuyout() {
    this.navCtrl.push(this.pushPage);
  }

  onBuy(productData:{name: string, quantity: string}) {
    this.navCtrl.push(this.pushPage, productData);
  }

  onCancel() {
    this.navCtrl.pop();
  }

}
