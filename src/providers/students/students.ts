import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentsProvider');
    //make the db connection reference
    
  }
  //read all the students from db into one single object
  //this should be called only once when the app is open

  //add new student to the db

  //update the student profile

  //delete the student from db



}
