import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {TourismItem} from '../../models/TourismItem.model';


@Injectable()
export class PostService {

private tourismItem: TourismItem;
private data: any;
private userNode: any;
private fireRef: any;
private postsNode: any;
private usersPostsNode: any;

  constructor() {
      
  	     this.postsNode = firebase.database().ref('tourism-posts');
  	     this.usersPostsNode = firebase.database().ref('user-tourism-posts');
  	    this.fireRef = firebase.database().ref();
  	
  }
         

// //view a certain Post 
// viewPostService(postId:any){
// 			var userRef = this.postsNode.child(postId);
// 			return userRef.once('value'); 
// }

// //view all posts made by this userId
// viewUsersPostsService(userId: any){
// 	var userRef = this.usersPostsNode.child(userId);
// 			return userRef.on('value'); 
// }

listPostService(){
			return this.postsNode.once('value'); 
}

createPostService(userId: any, tName: any, tType: any, tProvideInformation: any, tDescription:any, tLanguage: any, tDuration:any, tPrice:any, tPromotionPicture: any, tPromotionVideo:any, tLocation:any,tAvailableDays:any){
//   console.log(userId, tName, tType, tProvideInformation, tDescription, tLanguage, tDuration, tPrice, tPromotionPicture, tPromotionVideo, tLocation,tAvailableDays)   
//   // A post entry.
//     //  this.tourismItem.tourismName = tName;
//     //  this.tourismItem.tourismType = tType;
//     //  this.tourismItem.tourismProvideInformation = tProvideInformation;
//     //  this.tourismItem.tourismDescription = tDescription;
//     //  this.tourismItem.tourismLanguage = tLanguage;
//     //  this.tourismItem.tourismDuration = tDuration;
//     //  this.tourismItem.tourismPrice = tPrice; 
//     //  this.tourismItem.tourismPromotionalPicture = tPromotionPicture;
//     //  this.tourismItem.tourismPromotionalVideo = tPromotionVideo;
//     //  this.tourismItem.tourismLocation = tLocation;
//     //  this.tourismItem.tourismAvailableDays = tAvailableDays; 
     

//   // Get a key for a new Post.
//   var newPostKey = this.postsNode.push().key;




//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updatePath = {};
//   updatePath['/posts/' + newPostKey] = this.tourismItem;
//   updatePath['/user-posts/' +userId+"/"+ newPostKey] = this.tourismItem;
  
// //update both tables simultaneously
//   return this.fireRef.update(updatePath);
  

  	
  }
  	 
}