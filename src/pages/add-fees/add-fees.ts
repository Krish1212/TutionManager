import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'fees-add'
})
@Component({
  selector: 'page-add-fees',
  templateUrl: 'add-fees.html',
})
export class AddFeesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFeesPage');
  }

}
