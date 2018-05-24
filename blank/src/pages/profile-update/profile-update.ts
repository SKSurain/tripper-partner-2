import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import {userItem} from './../../models/userItem.model';
import { UserListServices } from '../../services/user-list.services';
import { ContactPage } from '../contact/contact';


@IonicPage()
@Component({
  selector: 'page-profile-update',
  templateUrl: 'profile-update.html',
})
export class ProfileUpdatePage {

  private userId :any;
  public userItem: userItem = {
    name: '',
    ic: '',
    gender: '',
    country: '',
    email: '',
    birthday:'',
    password: '',
    ic_pic: '',
    bank_stat: '',
    description: ''
  }

  public gender ="male";
  public state ="Johor";
  
  public event = {
    month: '2017-12-13',
    timeStarts: '15:30',
    timeEnds: '16:45'}

  constructor(private userService:UserListServices, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.userId = firebase.auth().currentUser.uid;
  }

  ionViewDidLoad() { 
    // //call service to get user data from firebase 
    this.userService.fetchUserInfo(this.userId).then(snapshot=>{
      if(snapshot.val() != null){
      this.userItem = snapshot.val();// !!step 3 : save user data into a variable 
      }
    });
  }

addItem(userItems:userItem){
      console.log("This is contents of name: " + userItems.name);
      this.userService.updateUserProfile(this.userId,userItems).then(() => {    
      this.navCtrl.setRoot(ContactPage);
      }, 
      error => {
          console.log("Error in updating userProfile");
      });
    }

  updateSuccess(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'Profile update success.',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
