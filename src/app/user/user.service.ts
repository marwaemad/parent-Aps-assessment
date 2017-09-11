import { Injectable } from '@angular/core';
import { UserList } from "../users-list/users-list.model";

@Injectable()
export class UserService {
 singleuser:UserList;
  constructor() { }

}
