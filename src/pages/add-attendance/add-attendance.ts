import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import moment from 'moment';

@IonicPage({
  name:'attendance-add'
})
@Component({
  selector: 'page-add-attendance',
  templateUrl: 'add-attendance.html',
})
export class AddAttendancePage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  displayDate:string;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }
  lockSwipes:boolean;
  students1Info:any;
  students2Info:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl:ModalController, 
    private alertCtrl:AlertController) {
      this.students1Info = this.navParams.get("students1Info");
      this.students2Info = this.navParams.get("students2Info");
      //console.log(this.students1Info);
      //console.log(this.students2Info);
    }
  ionViewDidEnter(){
    setTimeout(() => {
      this.lockSwipes = true;
    }, 100);
  }
  prevMonth(){
    var today = this.calendar.currentDate;
    this.calendar.currentDate = new Date(today.setMonth((today).getMonth() - 1));
  }
  nextMonth(){
    var today = this.calendar.currentDate;
    this.calendar.currentDate = new Date(today.setMonth((today).getMonth() + 1));
  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay, students1Info: this.students1Info, students2Info:this.students2Info});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        //eventData.startTime = new Date(data.startTime);
        //eventData.endTime = new Date(data.endTime);
        console.log('eventData');
        console.log(eventData);
 
        let events = this.eventSource;
        events = eventData;
        //events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
  onCurrentDateChanged(ev:Date){
    this.displayDate = moment(ev).format('DD/MMMM/YYYY');
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
