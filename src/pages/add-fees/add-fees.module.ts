import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFeesPage } from './add-fees';

@NgModule({
  declarations: [
    AddFeesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFeesPage),
  ],
})
export class AddFeesPageModule {}
