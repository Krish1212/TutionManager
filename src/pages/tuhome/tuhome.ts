import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'tution-home'
})
@Component({
  selector: 'page-tuhome',
  templateUrl: 'tuhome.html',
})
export class TuhomePage {
  studentsList:any = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.studentsList = this.navParams.get("studentInfo");
      console.log('from home view');
      console.log(this.studentsList);
    }

  ionViewDidEnter(){
  }
  navigate(id:string){
    //TODO: Nav Params need to be transferred to the target view
    this.navCtrl.push(id);
  }

}
