import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { StudentsProvider } from '../../providers/students/students';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading:Loading;
  studentsHList:any;
  studentsVList:any;  
  dbSize:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private studProvider: StudentsProvider, 
    private loadingCtrl:LoadingController, 
    private alertCtrl:AlertController, 
    private toastCtrl:ToastController) {

  }
  ionViewDidEnter(){
    this.getAllStudents();
  }
  getAllStudents(){
    this.loading = this.loadingCtrl.create({
      content: 'Fetching records...Please wait',
      spinner: 'ios',
    });
    this.studProvider.getAllStudents().subscribe(students => {
      this.studentsHList = [];
      this.studentsVList = [];
      //console.log(students.size);
      students.forEach(student => {
        //console.log(student.data().centre);
        if(student.data().centre === "Home"){
          this.studentsHList.push(student);
        } else if (student.data().centre == "Vriksham"){
          this.studentsVList.push(student);
        } 
      });
      this.loading.dismiss().then(() =>{
        this.toastCtrl.create({
          message: 'Fetching completed',
          duration: 1000,
          position:'middle'
        }).present();
      });
    this.dbSize = students.size;
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
  navigate(id:string,params:boolean){
    if(params){
      switch (id){
        case 'tution-home':
          this.navCtrl.push(id, {"studentInfo": this.studentsHList});
          break;
        case 'tution-vriksham':
          this.navCtrl.push(id, {"studentInfo": this.studentsVList});
          break;
        case 'admission':
          this.navCtrl.push(id, {"dataSize":this.dbSize});
          break;
      }
    } else this.navCtrl.push(id);
  }

}
