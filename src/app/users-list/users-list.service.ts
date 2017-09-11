import { UserList } from './users-list.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class userListService {
  private ApiUrlUser= 'https://reqres.in/api/users?per_page=12';
  private deleteuser='https://reqres.in/api/users/2';
  constructor(private https:Http) { }

  public getUser():Observable<UserList>{
    return this.https.get(this.ApiUrlUser).map((res:Response) => res.json().data);
  }

  public removeUser(id:number):Observable<UserList>{

    return this.https.delete(this.deleteuser).map((res:Response)=>res.json());
  }

}
