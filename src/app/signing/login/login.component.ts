import { Component, OnInit } from '@angular/core';
import{AuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser} from 'angularx-social-login';


@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user !=null);
    });
  }

  sighInWithGoogle():void{
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB():void{
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut():void{
    this._authService.signOut();
  }

}
