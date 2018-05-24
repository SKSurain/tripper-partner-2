import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { Stripe } from '@ionic-native/stripe';

/**
 * Generated class for the Card page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe, public http: Http,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }

  pay() {
    this.stripe.setPublishableKey('pk_test_GcHy72HnKhc0Um3HixWKq1d1');
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      var data = 'stripetoken=' + token + '&amount=50';
      var headers = new Headers();
      headers.append('Conent-Type', 'application/x-www-form-urlencoded');
      this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
        if (res.json().success)
        alert('transaction Successfull!!')
        else{
          // alert('The res is : ' + res)  
          let alert = this.alertCtrl.create({
            title: 'Payment Made!',
            subTitle: 'The res is : ' + res,
            buttons: ['OK']
          });
          alert.present();
        }  
      })
      

    })
  }
    
}