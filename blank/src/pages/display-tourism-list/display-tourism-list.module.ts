import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayTourismListPage } from './display-tourism-list';

@NgModule({
  declarations: [
    DisplayTourismListPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayTourismListPage),
  ],
})
export class DisplayTourismListPageModule {}
