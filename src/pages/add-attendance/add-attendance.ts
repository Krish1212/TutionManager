import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'attendance-add'
})
@Component({
  selector: 'page-add-attendance',
  templateUrl: 'add-attendance.html',
})
export class AddAttendancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAttendancePage');
  }

}
