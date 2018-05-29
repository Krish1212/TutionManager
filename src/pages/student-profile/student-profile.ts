import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'student-profile'
})
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {
  studProfile:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.studProfile = this.navParams.get("studentInfo");
    console.log(this.studProfile);
  }

}
