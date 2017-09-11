import { UserList } from "../users-list/users-list.model";
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CreateUserService {
    private createUser = 'https://reqres.in/api/users';
    constructor(private https: Http) { }

    public addUser(user: UserList): Observable<UserList> {
        return this.https.post(this.createUser, user).map((res:Response)=>res.json());
    }
}
