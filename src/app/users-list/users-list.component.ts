import { Routes } from '@angular/router';
import { UserList } from './users-list.model';
import { userListService } from './users-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { UserService } from "../user/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [userListService]
})
export class UsersListComponent implements OnInit {
  public userlist: UserList;
  public update: boolean = false;

  constructor(private router: Router, private userservice: userListService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUser();
  }


  private onClick(user) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "single": JSON.stringify({
          "first_name": user.first_name,
          "last_name": user.last_name,
          "avatar": user.avatar,
          "id": user.id
        })
      }
    }

    if (this.update == true) {
      this.router.navigate(['updateuser/'], navigationExtras);
    } else {
      this.router.navigate(['user/'], navigationExtras);
    }
  }
  public createUser() {
    this.router.navigate(['/createuser']);
  }
  private getUser() {
    this.userservice.getUser().subscribe((res) => {
      this.userlist = res;
    })
  }
  public removeUser(id) {
    this.userservice.removeUser(id).subscribe((res => {
      this.toastr.success('the account removed');
    }))

  }
  public updateUser(user) {

    this.update = true;
    this.onClick(user);

  }

}
