import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-eightball',
  templateUrl: 'eightball.html',
})
export class EightballPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EightBallPage');
  }
  
  // Calculates a random number between 0 and 4 and displays a unique alert for each answer in order to stimulate the randomness off a magic eight ball
  eightBallQuestion() {
    let randomQuestion: number = Math.floor(Math.random()*5);
    switch(randomQuestion)
    {
      case 1:
      {
        // creates a new alert 
        let alert = this.alertCtrl.create({
          title: 'The Eight Ball Says',
          message: ('Maybe'),
          buttons: ['Ask Again']
        });
        alert.present();
        // without the break it keeps going until all answers appear
        break
      }
      case 2:
      {
        let alert = this.alertCtrl.create({
          title: 'The Eight Ball Says',
          message: ('Definitely'),
          buttons: ['Ask Again']
        });
        alert.present();
        break
      }
      case 3:
      {
        let alert = this.alertCtrl.create({
          title: 'The Eight Ball Says',
          message: ('It is uncertain'),
          buttons: ['Ask Again']
        });
        alert.present();
        break
      }
      case 4:
      {
        let alert = this.alertCtrl.create({
          title: 'The Eight Ball Says',
          message: ('Signs point to No'),
          buttons: ['Ask Again']
        });
        alert.present();
        break
      }
      default:
      {
        let alert = this.alertCtrl.create({
          title: 'The Eight Ball Says',
          message: ('Signs point to Yes'),
          buttons: ['Ask Again']
        });
        alert.present();
        break
      }
    }
  }
}

