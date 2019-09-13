import { Component, OnInit } from '@angular/core';
import{AuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser} from 'angularx-social-login';
//import { AuthAPIService } from 'src/app/services/auth-api.service';
//import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  response: boolean;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _currentUser: UserService){}

  ngOnInit() {
    //  this._authService.authState.subscribe((user)=>{
    //    this.user = user;
    //    this.loggedIn = (user !=null);
    //    console.log('user', user);
    //  });
  }

  sighInWithGoogle():void{
    console.log("signInWithGoogle");
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((userData) =>{
      this.sendToRestApiMethod(userData);
      //send all data of idToken only?
    });
  }

  signInWithFB():void{
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((userData)=>{
      this.sendToRestApiMethod(userData);
    });
  }

  signOut():void{
    console.log("logout")
    if(this.loggedIn){
      this._authService.signOut();
      this._currentUser.logOut();
      this.loggedIn = false;
      console.log('user logged in?: ', this.loggedIn);
      this._router.navigate(['/home'])
    }
  }


   sendToRestApiMethod(data):void{
     console.log("userData: ",data);
     this.user = data;
     this.loggedIn = (this.user != null);
     this._currentUser= data;
     this._currentUser.storeData(data).then(result=>{
       this.response = result;
     }, err =>{
       console.log(err);
     });

  //   this.http.post("api url here", {token: token}
  // }).subscribe(
  //   onSuccess =>{}
  // )
  // this.userPostData.email = data.email;
  // this.userPostData.name = data.name;
  // this.userPostData.provider = data.provider;
  // this.userPostData.provider_id = data.id;
  // this.userPostData.provider_pic = data.image;
  // this.userPostData.token = data.idToken;

  // this.authAPIService.postData(this.userPostData, 'signup')
  // .then(result =>{
  //   this.responseData = result;
  //   if(this.responseData.userData){
  //     this.users.storeData(this.responseData.userData);
  //   }
  // }, err =>{
  //   console.log('error');
  // }
  // );
   }//sendToRestApiMethod

}//class
