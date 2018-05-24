import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {TourismItem} from './../../models/tourismItem.model';
import {TourismListServices} from '../../services/tourism-list.services';
import {storage} from 'firebase'
import{TourismPage} from '../tourism/tourism';

import { Camera, CameraOptions } from '@ionic-native/camera';

// Start testing list
import { PostService } from '../../providers/post-service/post-service';
import { UserListServices } from '../../services/user-list.services';

//Start testing paul holiday version of list
// import {Observable} from 'rxjs/Observable';
// import "rxjs/add/Observable/of";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private userId :any;
  public tourismItem : TourismItem ={
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
//Start experiment to display list
private userPostsLists= [];
private finaluserPostsLists= [];
private arrLocationNames = [];
private topics = [];
	private userProfileLists: any;
	private userDisplayName: any;
	private userEmail: any;
  private userPhoto: any;
  private trueFalseArr = [];
  
  constructor(private userListService: UserListServices,private postsService: PostService, private camera: Camera,private tourismService:TourismListServices, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.userId = firebase.auth().currentUser.uid; // !!step 1 : Get the user id
    console.log("this show the user ID"+this.userId);
    // this.generateTopics();
    // console.log(this.userId);

    // get list of posts on page init
   this.listPosts();
  }
  // This is for camera(not working, paul haliday youtube)
//  async takePhoto(){
//    try{
//     //Defining Camera options
//     const options: CameraOptions = {
//       quality: 50,
//       targetHeight: 600,
//       targetWidth:600, 
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
//     }
//     const result = await this.camera.getPicture (options);
//     const image = 'data: image/jpeg;base64,${result}';
//     const pictures =  storage().ref('pictures');
//     pictures.putString(image, 'data_url');
//   }
//   catch(e){
//     console.log(e);
//   }
//   // This is for camera(not working, paul haliday youtube) || end
//   }
  ionViewDidLoad() {
    //this works data available  
    //call service to get user data from firebase 
    // this.tourismService.fetchTourismInfo(this.userId).then(snapshot=>{
    //   this.tourismItem = snapshot.val();// !!step 3 : save user data into a variable 
    // });

     //this works data available  
    // //call service to get user data from firebase 
    // this.tourismService.fetchTourismInfo(this.userId).then(snapshot=>{
    //   this.tourismItem = snapshot.val();// !!step 3 : save user data into a variable 
    // });

    ///Attention: Working code to display list of caards (before fetching user information)
  //   var that = this;
  //   this.tourismService.fetchTourismInfo(this.userId).then(snapshot=>{
  //     // this.tourismItem = snapshot.val();// !!step 3 : save user data into a variable
      
  //     that.userPostsLists.length = 0;
      
  //     snapshot.forEach(function (childSnapshot) {
       
  //       var data = childSnapshot.val();
  //       data['key'] = childSnapshot.key;
  //        that.userPostsLists.push(data);
  //       //  console.log("data details: "+);
  //       //  console.log("post details: "+that.userPostsLists[0].tourismName);
  //   });


  // });
// End of simple code to fetch card information (witohout user infomration)

  }

  redirectPage(data:TourismItem){
    // console.log("This data from search page: " + data.tourismName);
    this.navCtrl.push(TourismPage,{data});
  }

  
listPosts(){
  
  var that = this;
    this.tourismService.fetchTourismInfo(this.userId).then(snapshot=>{
      // this.tourismItem = snapshot.val();// !!step 3 : save user data into a variable
      
      that.userPostsLists.length = 0;
      
      snapshot.forEach(function (childSnapshot) {
       
        var data = childSnapshot.val();
        data['key'] = childSnapshot.key;
         that.userPostsLists.push(data);
         that.finaluserPostsLists.push(data);
    });
  });
}
// generateTopics(){
  // this.arrLocationNames;
// }

getTopics(ev:any){
  // this.generateTopics();
  var that = this;   
  that.finaluserPostsLists.length = 0;
  var arrLength = that.userPostsLists.length;
  let serVal = ev.target.value;
  
  //Actions if searchbar is not empty
  if(serVal && serVal.trim() != ''){  
    
    for(var i = 0;i<arrLength; i++){
      that.arrLocationNames[i] = that.userPostsLists[i].tourismLocation;
    }
    var j = 0; 
    // console.log("The arrLocationNames[1]: " + that.arrLocationNames[1]);
    this.arrLocationNames = this.arrLocationNames.filter((locations) => {
      // return (locations.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      if(locations.toLowerCase().indexOf(serVal.toLowerCase()) > -1){
        this.finaluserPostsLists.push(this.userPostsLists[j]);
      }
      j++;
      // if (this.finaluserPostsLists === undefined || this.finaluserPostsLists.length == 0) {
      // }else{
      //   console.log("This are the list of location :" + this.finaluserPostsLists[0].tourismLocation);
      // }
      return this.finaluserPostsLists; 
    }) 
  }
  //Actions if searchbar is empty
    else {
      console.log("Empty");
      var arrLengths = this.userPostsLists.length;
      for(var q = 0;q<arrLengths; q++){
        this.finaluserPostsLists.push(this.userPostsLists[q]);
      }
      
    }
  }
}
