import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{BookingPage} from'../booking/booking';    
import{ChatPage} from'../chat/chat'; 
import {TourismItem} from './../../models/tourismItem.model';                
/**
 * Generated class for the TourismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourism',
  templateUrl: 'tourism.html',
})
export class TourismPage {
  public tourismItem : TourismItem ={
    tourismName: '',
    tourismType: undefined,
    tourismProvideInformation: '',
    tourismDescription: '',
    tourismLanguage: '',
    tourismDuration: '',
    tourismPrice: '',
    tourismPromotionalPicture: '',
    tourismPromotionalVideo: '',
    tourismLocation: '',
    tourismAvailableDays: '',
    tourismHostName: ''
}
public testing: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tourismItem = this.navParams.get('data');
    console.log("This is data I get: " + this.tourismItem.tourismHostName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }

  redirectChat(){
    this.navCtrl.push(BookingPage);
  }
  redirectPage(){
    this.navCtrl.push(ChatPage);
  }
  
}
