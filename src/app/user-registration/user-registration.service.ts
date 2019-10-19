import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserRegistration {

  constructor(private http:HttpClient) { }
   private _url = 'http://localhost:8888/api/v1/user';


  saveUser(userObj): any
  {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      };

    return this.http.post(this._url,userObj,httpOptions);
  }


 
}
