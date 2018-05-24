import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {TourismItem} from './../models/tourismitem.model';
import * as firebase from 'firebase';

@Injectable()
export class TourismListServices{
    private userNode: any;
    private fireRef: any;

    constructor (private db: AngularFireDatabase){
        this.fireRef = firebase.database().ref();
        this.userNode = firebase.database().ref('tourismList');
    }
    fetchTourismInfo(userId: any){
        // var userRef = this.userNode.child(userId);
        // return userRef.once('value'); //help to find the specify id data
        return this.userNode.once('value'); //help to find the specify id data 
    }

    updateTourismInfo(userId:string,tourismItem:TourismItem){
    
        // Define path to write the user's data .
  var updatePath = {};
  updatePath['/tourismList/' + userId] = tourismItem; 

   //update both tables simultaneously
  return this.fireRef.update(updatePath);
    }

}