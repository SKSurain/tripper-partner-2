import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  constructor(private authService : AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController){}

  onSignup(form:NgForm){
  const loading =this.loadingCtrl.create({
    content: 'Signing you up...'
  });
  loading.present();
  this.authService.signup(form.value.email, form.value.password)
  .then(data => {
    loading.dismiss();
  })
  .catch(error=>{
    loading.dismiss();
    const alert = this.alertCtrl.create({
      title: 'Signup failed!',
      message: error.message,
      buttons: ['ok']
    });
    alert.present();
  });
  }
}

