import firebase from 'firebase';
export class AuthService{

    signup(email:string, password: string){
       return firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    signin(email:string, password:string){
        console.log("email: " +email+" password: " + password);
        return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password);
      }
    logout(){
        firebase.auth().signOut();
    }
    getActiveUser(){
        return firebase.auth().currentUser;
    }
}