import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController,App } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { NavigationTabsPage } from '../pages/nav/nav';
import { EightballPage } from '../pages/eightball/eightball';
import { InfoPage } from '../pages/info/info';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavigationTabsPage,
    EightballPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavigationTabsPage,
    EightballPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
