import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaymentPage} from '../payment/payment';

/**
 * Generated class for the BookingStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-status',
  templateUrl: 'booking-status.html',
})
export class BookingStatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingStatusPage');
  }
  
  redirectPage(){
    this.navCtrl.push(PaymentPage);
  }
}
