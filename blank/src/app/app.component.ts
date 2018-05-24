import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';

import {RegisterPage} from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BookingStatusPage} from '../pages/booking-status/booking-status';
import {PaymentHistoryPage} from '../pages/payment-history/payment-history';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {LogoutPage} from '../pages/logout/logout';
import { TabsPage } from '../pages/tabs/tabs';
import{TourismPage} from '../pages/tourism/tourism';
import { SinginPage } from '../pages/singin/singin';
import { SingupPage } from '../pages/singup/singup';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  signinPage = SinginPage;
  signupPage = SingupPage;
  BookingStatusPage = BookingStatusPage;
  PaymentHistoryPage = PaymentHistoryPage;
  Homepage = HomePage;
  tabspage = TabsPage;
  settingspage = SettingsPage;
   
  isAuthenticated = false;
  rootPage:any=SinginPage;
  // rootPage:any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public menuCtrl:MenuController,public authService: AuthService ,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.isAuthenticated = true; 
          this.rootPage = TabsPage;
        }else{
          this.isAuthenticated=false;
          this.rootPage = SinginPage;
        }
      });
    });
    
  
  
  
    //   this.initializeApp();

  //   // used for an example of ngFor and navigation
  //   this.pages = [
  //     { title: 'Signin', component: SinginPage},
  //     { title: 'Signup', component: SingupPage},
  //     { title: 'Booking Status', component: BookingStatusPage },
  //     { title: 'Payment History', component: PaymentHistoryPage },
  //     { title: 'Logout', component: LogoutPage }
  //   ];
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  }
  onLoadHome(){
    // this.rootPage = TabsPage;
    this.nav.setRoot(TabsPage);
    this.menuCtrl.close();
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close(); 
  }
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SinginPage);
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }

}
