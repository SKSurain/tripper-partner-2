import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {TourismItem} from './../../models/tourismItem.model';
import {TourismListServices} from '../../services/tourism-list.services';
import { tourismInfo } from '../../models/tourismInfo';
import { NgForm } from '@angular/forms';
import { BookingPage } from '../booking/booking';

@IonicPage()
@Component({
  selector: 'page-display-tourism-list',
  templateUrl: 'display-tourism-list.html',
})
export class DisplayTourismListPage {
  private userId :any;
  public tourismItem: TourismItem ={
    tourismName: '',
    tourismType: undefined,
    tourismProvideInformation: '',
    tourismDescription: '',
    tourismLanguage: '',
    tourismDuration: '',
    tourismPrice: '',
    tourismPromotionalPicture: '',
    tourismPromotionalVideo: '',
    tourismLocation: '',
    tourismAvailableDays: '',
    tourismHostName: ''
}
  
  constructor(private tourismService:TourismListServices, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.userId = firebase.auth().currentUser.uid; // !!step 1 : Get the user id
    console.log("this show the user ID"+this.userId);
  }
  
 //Will load only once when the page enters and then caches it 
  ionViewDidLoad() {
    //this works data available  
    // //call service to get user data from firebase 
    this.tourismService.fetchTourismInfo(this.userId).then(snapshot=>{
      this.tourismItem = snapshot.val();// !!step 3 : save user data into a variable 
    });

    //this works when data not available
    // /testing 
    //  call service to get user data from firebase 
//      this.tourismService.fetchTourismInfo(this.userId)
//      .then(function(snapshot){
//        if(snapshot.val()){
//          console.log("Success");
//         //  this.tourismItem.tourismName = "Surain";
//         var tourismItem2: TourismItem = {
//           tourismName: '',
//         tourismType: undefined,
//         tourismProvideInformation: '',
//         tourismDescription: '',
//         tourismLanguage: '',
//         tourismDuration: '',
//         tourismPrice: '',
//         tourismPromotionalPicture: '',
//         tourismPromotionalVideo: '',
//         tourismLocation: '',
//         tourismAvailableDays: ''
//         };
//          tourismItem2 = snapshot.val();
//         //  console.log(this.tourismItem);
//         // this.tourismItem = tourismItem2;

//        } else{
//          console.log("Data doesnt exist");
//        } 
//     },function(error){
//       console.log("Promise rejected : " +error);
//     }
//   );

  }

addItem(tourismItem:TourismItem){

    // !!step 4 : pass user data together with other data into a function to create a new node or update existing node
    this.tourismService.updateTourismInfo(this.userId,this.tourismItem).then(() => {    
      this.navCtrl.setRoot(BookingPage);
      }, 
      error => {
          console.log("Error in updating TourismProfile");
      });
    }
}
