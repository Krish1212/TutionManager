import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TuhomePage } from './tuhome';

@NgModule({
  declarations: [
    TuhomePage,
  ],
  imports: [
    IonicPageModule.forChild(TuhomePage),
  ],
})
export class TuhomePageModule {}
