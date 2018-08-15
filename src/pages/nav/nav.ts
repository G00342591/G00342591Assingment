import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ HomePage } from '../home/home';
import{ InfoPage } from '../info/info';
import{ EightballPage } from '../eightball/eightball';

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavigationTabsPage 
{

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = EightballPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationTabsPage');
  }

}