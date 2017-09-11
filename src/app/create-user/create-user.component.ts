import { Component, OnInit } from '@angular/core';
import { UserList } from "../users-list/users-list.model";
import { CreateUserService } from "./create-user.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers:[CreateUserService]
})
export class CreateUserComponent implements OnInit {
  public newUser: UserList;
  constructor(private create: CreateUserService,private toastr: ToastrService,private route: Router) { }

  ngOnInit() {
    this.newUser = new UserList();
  }

  public addUser() {
    this.create.addUser(this.newUser).subscribe((res=>{
       this.toastr.success('your acount created');
       this.route.navigate(['/userslist']);
    }))
   }

}
