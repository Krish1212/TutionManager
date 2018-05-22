import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'tution-home'
})
@Component({
  selector: 'page-tuhome',
  templateUrl: 'tuhome.html',
})
export class TuhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TuhomePage');
  }

  navigate(id:string){
    //TODO: Nav Params need to be transferred to the target view
    this.navCtrl.push(id);
  }

}
