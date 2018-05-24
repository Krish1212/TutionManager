import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController, ToastController, Events } from 'ionic-angular';

import { StudentsProvider } from '../../providers/students/students';
//import { Student } from '../../models/student';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading:Loading;
  studentsHList:any;
  studentsVList:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private studProvider: StudentsProvider, 
    private loadingCtrl:LoadingController, 
    private alertCtrl:AlertController, 
    private toastCtrl:ToastController, 
    private events:Events) {

  }
  ionViewDidLoad(){
    this.getAllStudents();
  }
  getAllStudents(){
    this.loading = this.loadingCtrl.create({
      content: 'Fetching students...Please wait',
      spinner: 'ios',
    });
    this.studProvider.getAllStudents().subscribe(students => {
      this.studentsHList = [];
      this.studentsVList = [];
      students.forEach(student => {
        //console.log(student.data().centre);
        if(student.data().centre === "Home"){
          this.studentsHList.push(student);
        } else if (student.data().centre == "Vriksham"){
          this.studentsVList.push(student);
        }          
      });
      console.log(this.studentsHList);
      console.log(this.studentsVList);
      this.events.publish("studentsHList",this.studentsHList);
      this.events.publish("studentsVList",this.studentsVList);
      this.loading.dismiss().then(() =>{
        this.toastCtrl.create({
          message: 'Students Listed successfully',
          duration: 2000,
          position:'bottom'
        }).present();
      });
    }, (error) => {
      this.loading.dismiss().then(() => {
        this.alertCtrl.create({
          message: error.message,
          buttons: [{
            text: 'Ok',
            role: 'cancel'
          }]
        });
      });
    });
    this.loading.present();
  }

  //navigate to desired page
  navigate(id:string){
    this.navCtrl.push(id);
  }

}
