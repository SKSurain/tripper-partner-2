import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {userItem} from './../models/useritem.model';
import * as firebase from 'firebase';

@Injectable()
export class UserListServices{
    private userNode: any;
    private fireRef: any;
    private productListRef = this.db.list<userItem>
    ('product-list');

    constructor (private db: AngularFireDatabase){
        this.fireRef = firebase.database().ref();
        this.userNode = firebase.database().ref('userList');
    }
    fetchUserInfo(userId: any){
        var userRef = this.userNode.child(userId);
        return userRef.once('value'); //help to find the specify id data 
    }

    updateUserProfile(userId:string,userItem:userItem){
    
        // Define path to write the user's data .
  var updatePath = {};
  updatePath['/userList/' + userId] = userItem; 

   //update both tables simultaneously
  return this.fireRef.update(updatePath);
    }

}