import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Http } from '@angular/http';
import { CardPage } from '../card/card';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  count;
  public event = {
    month: '2017-12-13',
    timeStarts: '15:30',
    timeEnds: '16:45'}
    private keepToken: any;
  constructor(private stripe: Stripe,public http: Http,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    // http.get('https://us-central1-tripper-s-partner.cloudfunctions.net/test')
    // .subscribe((data) => {
    //   console.log('data', data);
    // })
    // http.get('https://us-central1-tripper-s-partner.cloudfunctions.net/countTasks')
    // .subscribe((data) => {
    //   console.log('data', data);
    //   this.count = data.json().count;
    // })
  }
  paymentDone(){
    var that = this; 
    this.stripe.setPublishableKey('pk_test_GcHy72HnKhc0Um3HixWKq1d1');

    let card = {
     number: '4242424242424242',
     expMonth: 12,
     expYear: 2020,
     cvc: '220'
    }; 
    var tryThis;
    this.stripe.createCardToken(card)
       .then(token => {tryThis  = token.id; 
      
       let alert = this.alertCtrl.create({
        title: 'Payment Made!',
        subTitle: 'Your transaction token id:' + tryThis,
        buttons: ['OK']
      });
      alert.present();


            })
       .catch(error => console.error(error));    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  carddetails() {
    this.navCtrl.push(CardPage);
  }

  showAlertPay() {
    let alert = this.alertCtrl.create({
      title: 'Payment Made!',
      subTitle: 'Your transaction is succesful! Happy tripping!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

}
