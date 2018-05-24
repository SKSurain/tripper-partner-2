import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private userId :any;
  private userNode :any;
  Subscription;
  comments: object[] = [];
  email:string;
  comment:string='';
  
  constructor(public db:AngularFireDatabase ,public navCtrl: NavController, public navParams: NavParams) {
    this.Subscription = this.db.list('/comments').valueChanges().subscribe( data => {
      this.comments = data;  //comments is the object  
    });
    // this.userNode = firebase.database().ref('tourismList');
    this.userId = firebase.auth().currentUser.uid;
  }

  chatlog(){
    if(this.comment!=''){
      this.db.list('/comments').push({
        username: this.userId,
        comment:this.comment
      })
    }else{

    }
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ChatPage');
  }

}
