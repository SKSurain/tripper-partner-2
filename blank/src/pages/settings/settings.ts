import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { tap, filter } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

import { Camera,CameraOptions } from '@ionic-native/camera';
// import { AngularFirestore } from 'angularfire2/firestore';
import firebase from 'firebase';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
//Upload Task
task: AngularFireUploadTask;
task1: any;
imageurl:any;
imgSource: any;
//Firestore data
result$: Observable<any>;

loading:Loading;
image:string;

//testing new way to display image
firestore = firebase.storage();

constructor(public zone: NgZone,
            public storage: AngularFireStorage,
            public camera: Camera,
            public loadingCtrl: LoadingController,
            public alertCtrl: AlertController) {
              this.loading = this.loadingCtrl.create({
                content: 'Detecting...'
              });       
}

 // Gets the pic from the native camera then starts the upload
 async captureAndUpload() {
  const options: CameraOptions = {
    quality: 100,
    targetHeight:600,
    targetWidth:600,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    correctOrientation: true
  }

  const image64 = await this.camera.getPicture(options)
  this.startUpload(image64);
}

async startUpload(file: string) {
 //Assign random value for image name
  const path = `1223450.jpg`;

  // The main task
 this.image = 'data:image/jpg;base64,' + file;
 this.task1 = this.storage.ref(path).putString(this.image, 'data_url');

 //Wait for the image to load on database
 await delay(1500);

  // trying new way to display image 
  this.firestore.ref(path).getDownloadURL().then((url) => {
    this.zone.run(() =>{
      this.imgSource = url;

  //Alert user successful file upload
      let alert = this.alertCtrl.create({
        title: 'Image id: ' +  this.imgSource,
        subTitle: 'Your image is ready to use',
        buttons: ['OK']
      });
      alert.present();
    })
    
  } 
)

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
    }
  }
}