import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

@IonicPage({
  name:'tution-home'
})
@Component({
  selector: 'page-tuhome',
  templateUrl: 'tuhome.html',
})
export class TuhomePage {
  studentsList:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private events:Events) {
    }

  ionViewDidEnter(){
    this.studentsList = [];
    this.events.subscribe("studentsHList", (students) => {
      console.log('from events');
      console.log(students);
      this.studentsList = students;
    });
    console.log('from home view');
    console.log(this.studentsList);
  }
  navigate(id:string){
    //TODO: Nav Params need to be transferred to the target view
    this.navCtrl.push(id);
  }

}
