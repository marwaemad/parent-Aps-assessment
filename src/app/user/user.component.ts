import { Component, OnInit, Input } from '@angular/core';
import { UserList } from "../users-list/users-list.model";
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { UserService } from "./user.service";

@Component({
  selector: 'single-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  public SingleUser: UserList=null;


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params :Params)=> {
      this.SingleUser=JSON.parse(params["single"]);
    });
  }

  ngOnInit() {
  }


}
