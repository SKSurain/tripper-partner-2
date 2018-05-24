import { Component, OnInit, HostListener } from '@angular/core';
// import { PaymentService } from '../payment.service';


@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class MakePaymentComponent implements OnInit {

  handler: any;
  amount = 500;

  // constructor(private paymentSvc: PaymentService ) { }
  constructor( ) { }
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