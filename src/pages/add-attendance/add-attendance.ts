import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';

//import { Attendance } from '../../models/attendance';

@IonicPage({
  name:'attendance-add'
})
@Component({
  selector: 'page-add-attendance',
  templateUrl: 'add-attendance.html',
})
export class AddAttendancePage {
  selectedDate = new Date();
  displayDate:string = moment(new Date()).format('DD/MMMM/YYYY');
  studentsRegister:any = [];
  students1Info:any;
  students2Info:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl:AlertController) {
      this.students1Info = this.navParams.get("students1Info");
      this.students2Info = this.navParams.get("students2Info");
    }
  addEvent(){
    let addRecord = this.alertCtrl.create();
    addRecord.setTitle('Add Attendance');
    addRecord.setSubTitle('Mark the students as present for today');
    this.students1Info.forEach(a => {
      let record:any = {
        'id':a.data().id,
        'name':a.data().name,
        'present':true
      }
      addRecord.addInput({
        type: 'checkbox',
        label: record.name,
        value: record,
      });
    });
    addRecord.addButton({
      text:'Cancel',
      role: 'cancel'
    });
    addRecord.addButton({
      text: 'Ok',
      handler: data => {
        console.log(data);
        if (data.length > 0){
          this.studentsRegister.date = this.displayDate;
          this.studentsRegister.attendance.push(data);
        }
      }
    });
    addRecord.present();
    console.log(this.studentsRegister);
  }
  prevDate(){
    var today = this.selectedDate;
    this.selectedDate = new Date(today.setDate((today).getDate() - 1));
    this.displayDate = moment(this.selectedDate).format('DD/MMMM/YYYY');
  }
  prevMonth(){
    var today = this.selectedDate;
    this.selectedDate = new Date(today.setMonth((today).getMonth() - 1));
    this.displayDate = moment(this.selectedDate).format('DD/MMMM/YYYY');
  }
  nextDate(){
    var today = this.selectedDate;
    this.selectedDate = new Date(today.setDate((today).getDate() + 1));
    this.displayDate = moment(this.selectedDate).format('DD/MMMM/YYYY');
  }
  nextMonth(){
    var today = this.selectedDate;
    this.selectedDate = new Date(today.setMonth((today).getMonth() + 1));
    this.displayDate = moment(this.selectedDate).format('DD/MMMM/YYYY');
  }

}
