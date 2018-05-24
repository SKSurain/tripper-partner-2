import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {TourismItem} from './../../models/tourismItem.model';
import {TourismListServices} from '../../services/tourism-list.services';
import {storage} from 'firebase'
import {ProfileUpdatePage} from '../profile-update/profile-update';
import { UserListServices } from '../../services/user-list.services';
import { userItem } from '../../models/useritem.model';
import { PostService } from '../../providers/post-service/post-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
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
private userPostsLists= [];
private finaluserPostsLists= [];
private arrLocationNames = [];
private topics = [];
  
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
  chatRedirect(){
    this.navCtrl.push(ProfileUpdatePage);
  }

  listPosts(){  
    var that = this;
      this.userService.fetchUserInfo(this.userId).then(snapshot=>{
        that.userPostsLists.length = 0;
        
        snapshot.forEach(function (childSnapshot) {
         
          var data = childSnapshot.val();
          data['key'] = childSnapshot.key;
           that.finaluserPostsLists.push(data);
      });
    });
  }
}
