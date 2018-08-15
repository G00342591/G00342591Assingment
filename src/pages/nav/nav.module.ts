import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationTabsPage } from './nav';

@NgModule({
  declarations: [
    NavigationTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationTabsPage),
  ],
})
export class NavigationTabsPageModule {}
