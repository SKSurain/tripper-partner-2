import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{TourismPage} from '../pages/tourism/tourism';
import{BookingPage} from '../pages/booking/booking';
import {BookingStatusPage} from '../pages/booking-status/booking-status';
import {PaymentPage} from '../pages/payment/payment';
import {PaymentHistoryPage} from '../pages/payment-history/payment-history';
import {ReceiptDetailPage} from '../pages/receipt-detail/receipt-detail';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LogoutPage} from '../pages/logout/logout';
import {WelcomePage} from '../pages/welcome/welcome';
import {ProfileUpdatePage } from '../pages/profile-update/profile-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { SinginPage } from '../pages/singin/singin';
import { SingupPage } from '../pages/singup/singup';
import {TourismListServices} from '../services/tourism-list.services';
import {UserListServices} from '../services/user-list.services';

import * as firebase from 'firebase';
import {AuthService} from '../services/auth';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { DisplayTourismListPage } from '../pages/display-tourism-list/display-tourism-list';

import { Camera } from '@ionic-native/camera';
import { PostService } from '../providers/post-service/post-service';

import { Stripe } from '@ionic-native/stripe';
import { HttpModule } from '@angular/http';
import { PaymentServiceProvider } from '../providers/payment-service/payment-service';
import { CardPage } from '../pages/card/card';
import { SettingsPage } from '../pages/settings/settings';
import { AngularFireStorage } from 'angularfire2/storage';


class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

var config ={
  apiKey: "AIzaSyD7EFY2wpMb4osmsMbmm4kLSgcoDM6CcIQ",
  authDomain: "tripper-s-partner.firebaseapp.com",
  databaseURL: "https://tripper-s-partner.firebaseio.com",
  projectId: "tripper-s-partner",
  storageBucket: "tripper-s-partner.appspot.com",
  messagingSenderId: "114268255450"
}
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    TourismPage,
    BookingPage,
    BookingStatusPage,
    PaymentPage,
    PaymentHistoryPage,
    ReceiptDetailPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    LogoutPage,
    ProfileUpdatePage,
    SinginPage,
    SingupPage,
    DisplayTourismListPage,
    CardPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    TourismPage,
    BookingPage,
    BookingStatusPage,
    PaymentPage,
    PaymentHistoryPage,
    ReceiptDetailPage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    LogoutPage,
    ProfileUpdatePage,
    SinginPage,
    SingupPage,
    DisplayTourismListPage,
    CardPage,
    SettingsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    UserListServices,
    AngularFireDatabase,
    TourismListServices,
    Camera,
    AngularFireStorage,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostService,
    PaymentServiceProvider
  ]
})
export class AppModule {}
