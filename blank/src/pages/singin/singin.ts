import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {AuthService} from '../../services/auth';



@IonicPage()
@Component({
  selector: 'page-singin',
  templateUrl: 'singin.html',
})
export class SinginPage {
  constructor(private navCtrl:NavController,private authService: AuthService,private loadingCtrl: LoadingController,private alertCtrl: AlertController){}
  
  onSignin(form:NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signin you in...'
    });
    loading.present();
    //insert code to save user's email and password here or 
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        
        //insert code to save user's email and password here. 
        loading.dismiss();
        this.navCtrl.setRoot(SinginPage);
        
      })
      .catch(error => { 
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
    }
   }




