import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, ToastController  } from 'ionic-angular';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { StudentsProvider } from '../../providers/students/students';
import { Student } from '../../models/student';

@IonicPage({
  name:'admission'
})
@Component({
  selector: 'page-admission',
  templateUrl: 'admission.html',
})
export class AdmissionPage {
  loading:Loading;
  newStudent:FormGroup;
  id:string;
  age:number;
  name:AbstractControl;
  gender:AbstractControl;
  fees:AbstractControl;
  centre:AbstractControl;
  dob:AbstractControl;
  doa:AbstractControl;
  parentName:AbstractControl;
  parentMobile:AbstractControl;
  parentWork:AbstractControl;
  student = {} as Student;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private frmBuilder:FormBuilder, 
    private studProvider:StudentsProvider, 
    private loadingCtrl:LoadingController, 
    private alertCtrl:AlertController, 
    private toastCtrl:ToastController) {
      let num = this.navParams.get("dataSize");
      num++;
      if (num > 0 && num < 10) {
        num = '00'+num.toString();
      } else if (num > 9 && num < 100) {
        num = '0'+num.toString();
      }
      this.id = 'STUD' + num;
      this.newStudent = this.frmBuilder.group({
        'name': ['', Validators.compose([Validators.required])],
        'gender': ['', Validators.compose([Validators.required])],
        'fees': ['',Validators.compose([Validators.required])],
        'centre':['',Validators.compose([Validators.required])],
        'dob':['',Validators.compose([Validators.required])],
        'doa':['',Validators.compose([Validators.required])],
        'parentName':['',Validators.compose([Validators.required])],
        'parentMobile':['',Validators.compose([Validators.required])],
        'parentWork':['',Validators.compose([Validators.required])],
      });
      this.name         = this.newStudent.controls['name'];
      this.gender       = this.newStudent.controls['gender'];
      this.fees         = this.newStudent.controls['fees'];
      this.centre       = this.newStudent.controls['centre'];
      this.dob          = this.newStudent.controls['dob'];
      this.doa          = this.newStudent.controls['doa'];
      this.parentName   = this.newStudent.controls['parentName'];
      this.parentMobile = this.newStudent.controls['parentMobile'];
      this.parentWork   = this.newStudent.controls['parentWork'];
    }

    addStudent(){
      let now:any = moment().format('DD/MM/YYYY');
      this.age = now - this.dob.value;
      this.loading = this.loadingCtrl.create({
        content: 'Saving new student information...Please wait',
        spinner: 'ios'
      });
      this.student = {'id':this.id,'name':this.name.value,'gender':this.gender.value,'age':this.age,'fees':this.fees.value,'centre':this.centre.value,'dob':this.dob.value,'doa':this.doa.value,'parentName':this.parentName.value,'parentMobile':this.parentMobile.value,'parentWork':this.parentWork.value,'deleted':false};
      console.log('form submission');
      this.studProvider.addthisStudent(this.student).subscribe(student => {
        this.loading.dismiss().then(() => {
          this.alertCtrl.create({
            message:'New Student added successfully',
            buttons: [{
              text:'OK',
              role:'cancel'
            }]
          }).present();
          this.navCtrl.pop();
        }).catch((error) => {
          this.alertCtrl.create({
            message: error.message,
            buttons: [{
              text: 'OK',
              role: 'cancel'
            }]
          }).present();
        });
      });
      this.loading.present();
    }

}
