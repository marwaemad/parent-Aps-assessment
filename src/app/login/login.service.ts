import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { userLogin } from "./login.model";
@Injectable()
export class authService {
    private loginUser = 'https://reqres.in/api/login';
    constructor(private https: Http, private _router: Router) { }
   
  
   public login(user:userLogin):Observable<userLogin> {
        return this.https.post(this.loginUser,user).map((res) => res.json().data);
    }
}