import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


//const api url

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  constructor(public http: Http) { 
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject)=>{
      const headers = new Headers();
      this.http.post(this.getAPIUrl() + type, JSON.stringify(credentials), {headers:headers})
      .subscribe(res =>{
        resolve(res.json());
      }, (err)=>{
        reject(err);
      });
    });
  }//postData

  getAPIUrl(){
    const apiUrl = "http://localhost/SulavServiceAPI/";
    return apiUrl;
  }
}//class
