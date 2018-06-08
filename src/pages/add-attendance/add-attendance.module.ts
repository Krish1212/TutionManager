import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAttendancePage } from './add-attendance';
import { NgCalendarModule } from 'ionic2-calendar'; 

@NgModule({
  declarations: [
    AddAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAttendancePage),
    NgCalendarModule
  ],
})
export class AddAttendancePageModule {}
