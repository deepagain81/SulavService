import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthAPIService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _router:Router, 
              private _http: HttpClient,
              private _authAPIservice: AuthAPIService) { }

  async storeData(data){
    localStorage.setItem('userData', JSON.stringify(data));
    const newData = await this.getData();
    return this._router.navigate(['home'], newData);
  }//storeData

  getData(){
    return JSON.parse(localStorage.getItem('userData'));
  }//getData

  sessionIn(){
    let A;
    if(this.getData()){
      A = this._router.navigate(['home'], this.getData());
    }
    return A;
  }//sessionIn

  sessionOut(){
    let A;
    if(!this.getData()){
      A = this._router.navigate(['/login']);
    }
    return A;
  }//sessionOut

  logOut(){
    localStorage.setItem('userData', '');
    localStorage.clear();
    return this._router.navigate(['/login']);
  }//logOut

  userAuthentication(userData){
    var data = "Email="+userData.email+"&token="+userData.token+"&grant_type=passport";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded', 'no-Auth':'True'});
    return this._http.post(this._authAPIservice.getAPIUrl()+'/token'+ data, {headers:reqHeader});
  }
  

}//class
