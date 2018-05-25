import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { Student } from '../../models/student';

@Injectable()
export class StudentsProvider {

  constructor(private afStore: AngularFirestore) {
    //TODO: make the db connection reference global
  }
  //read all the students from db into one single object
  //this should be called only once when the app is open
  getAllStudents(){
    return Observable.create(observer => {
      this.afStore.collection("students").ref.get().then(students => {
        console.log(students);
        observer.next(students); 
      }).catch(failure => {
        observer.error(failure);
      });
    });
  }
  //add new student to the db
  addthisStudent(student:Student){
    return Observable.create(observer => {
      this.afStore.collection(`students`).add(student).then((success) => {
        observer.next(success);
      }).catch((failure) => {
        observer.error(failure);
      });
    });
  }

  //update the student profile
  updateStudentProfile(id:string,student:Student){
    return Observable.create(observer => {
      this.afStore.collection(`students`).ref.doc(`${id}`).update(student).then(success => {
        observer.next(success);
      }).catch(failure => {
        observer.error(failure);
      });
    });
  }

  //delete the student from db
  deleteStudentProfile(id:string){
    return Observable.create(observer => {
      this.afStore.collection(`students`).doc(`${id}`).delete().then(success => {
        observer.next(success);
      }).catch(failure => {
        observer.error(failure);
      });
    });
  }
}
