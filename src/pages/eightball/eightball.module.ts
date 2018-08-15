import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EightballPage } from './eightball';

@NgModule({
  declarations: [
    EightballPage,
  ],
  imports: [
    IonicPageModule.forChild(EightballPage),
  ],
})
export class EightballPageModule {}
