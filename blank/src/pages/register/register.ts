import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { user } from '../../app/model/user';
import { AngularFireAuth} from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
   
}

alert (message: string){
  this.alertCtrl.create({
    title: 'Information',
    subTitle: message,
    buttons: ['OK']
  }).present();
    }

registerUser()
{
  this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
  .then(data => {
    console.log('got data', data);
    this.alert('Register succesful!');
    this.navCtrl.setRoot(TabsPage);
  })
 .catch (error => {
 console.log('got an error', error);
 this.alert(error.message);
  })
  console.log('Would register user with ', this.user.value, this.password.value);
}
}
