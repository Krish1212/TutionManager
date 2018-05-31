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
  students1Info:any;
  students2Info:any;
  choice:string = 'home';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.students1Info = this.navParams.get("students1Info");
    this.students2Info = this.navParams.get("students2Info");
  }

}
