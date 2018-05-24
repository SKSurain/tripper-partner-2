import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from'../home/home';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
 
  public event = {
    month: '2017-12-13',
    timeStarts: '15:30',
    timeEnds: '16:45'}
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  } 

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Requested Booking!',
      subTitle: 'Your booking request will be replied by host shortly. Thank you!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
    this.navCtrl.pop();
  }
}
