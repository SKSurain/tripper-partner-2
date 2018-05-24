import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, AlertController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import { user } from '../../app/model/user';
import {AngularFireAuth} from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  
  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }


  Register(){
    //to pull up page
    // let registerModal = this.modalCtrl.create(RegisterPage);
    // registerModal.present();
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert (message: string){
this.alertCtrl.create({
  title: 'Information',
  subTitle: message,
  buttons: ['OK']
}).present();
  }


signInUser(){
  this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  .then(data => {
    console.log('got some data', data);
    this.alert('Login succesful!');
    this.navCtrl.setRoot(TabsPage);
  })
  .catch (error => {
    console.log('got an error',error);
    this.alert(error.message);
  })
  console.log('Would sign in with', this.user.value, this.password.value);
}

}
