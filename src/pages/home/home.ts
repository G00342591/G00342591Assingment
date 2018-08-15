import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ EightballPage } from '../eightball/eightball';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,private storage: Storage) {}
  
  startButton() 
  {
    // Loads the eightball page using the nav controller
    this.navCtrl.push(EightballPage);
  }

}
