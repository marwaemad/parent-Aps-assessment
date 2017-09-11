import { Injectable } from '@angular/core';
import { UserList } from "../users-list/users-list.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class updateUserService {
  private updateUser = 'https://reqres.in/api/users/2';
  constructor(private https: Http) { }

  public updateuser(user: UserList): Observable<UserList> {
      return this.https.put(this.updateUser,Option).map((res) => res.json());
  }
}
