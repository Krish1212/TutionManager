import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Toast } from 'ionic-angular';

@IonicPage({
  name: 'student-profile'
})
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {
  studProfile:any;
  switch:string = "info";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastCtrl:ToastController) {
    this.studProfile = this.navParams.get("studentInfo");
  }

  editStudent(){
    this.toastCtrl.create({
      message:'Edit Student clicked',
      duration:2000
    }).present();
  }

}
