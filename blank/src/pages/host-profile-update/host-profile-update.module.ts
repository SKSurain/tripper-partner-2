import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HostProfileUpdatePage } from './host-profile-update';

@NgModule({
  declarations: [
    HostProfileUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(HostProfileUpdatePage),
  ],
})
export class HostProfileUpdatePageModule {}
