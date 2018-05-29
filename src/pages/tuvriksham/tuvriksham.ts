import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'tution-vriksham'
})
@Component({
  selector: 'page-tuvriksham',
  templateUrl: 'tuvriksham.html',
})
export class TuvrikshamPage {
  studentsList:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.studentsList = this.navParams.get("studentInfo");
    console.log('from home view');
    console.log(this.studentsList);
}

navigate(id:string,student:any){
  //console.log(student);
  //Nav Params need to be transferred to the target view
  this.navCtrl.push(id, {"studentInfo":student});
}

}
