import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';

import { Attendance } from '../../models/attendance';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
 
  //event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  attendance:Attendance = { id:'', name:'', date: new Date().toISOString(), present:false };
  studentsRegister:any = [];
  //minDate = new Date().toISOString();
  students1Info:any;
  students2Info:any;
  choice:string = 'home';
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    this.students1Info = this.navParams.get("students1Info");
    this.students2Info = this.navParams.get("students2Info");
    let preselectedDate = moment(this.navParams.get('selectedDay')).format('DD/MMMM/YYYY');
    this.students1Info.forEach(element => {
      this.attendance = {'id': element.data().id, 'date': preselectedDate, 'name':element.data().name, 'present':false}
      this.studentsRegister.push(this.attendance);
    });
    this.students2Info.forEach(element => {
      this.attendance = {'id': element.data().id, 'date': preselectedDate, 'name':element.data().name, 'present':false}
      this.studentsRegister.push(this.attendance);
    });
    //this.event.startTime = preselectedDate;
    //this.event.endTime = preselectedDate;
    //console.log(this.students1Info);
    //console.log(this.students2Info);
    //console.log(this.studentsRegister);
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    //console.log(this.studentsRegister);
    this.viewCtrl.dismiss(this.studentsRegister);
  }
 
}