import { Component, OnInit, HostListener } from '@angular/core';
import { PaymentServiceProvider } from '../../providers/payment-service/payment-service';
// import { environment } from '../../../environments/environment';
/**
 * Generated class for the MakePaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'make-payment',
  templateUrl: 'make-payment.html'
})
export class MakePaymentComponent implements OnInit {
  handler: any;
  amount = 500;

  text: string;

  constructor( private paymentSvc: PaymentServiceProvider) {
    console.log('Hello MakePaymentComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() {
    // this.handler = StripeCheckout.configure({
    //   key: environment.stripeKey,
    //   image: '/your/awesome/logo.jpg',
    //   locale: 'auto',
    //   token: token => {
    //     this.paymentSvc.processPayment(token, this.amount)
    //   }
    // });
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }

}


