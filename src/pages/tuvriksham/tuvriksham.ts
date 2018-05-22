import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'tution-vriksham'
})
@Component({
  selector: 'page-tuvriksham',
  templateUrl: 'tuvriksham.html',
})
export class TuvrikshamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TuvrikshamPage');
  }
  navigate(id:string){
    //TODO: Nav Params need to be transferred to the target view
    this.navCtrl.push(id);
  }

}
