import { Component, OnInit } from '@angular/core';
import { authService } from "./login.service";
import { userLogin } from "./login.model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [authService]
})
export class LoginComponent implements OnInit {
  public userlogin: userLogin;
  public authuser: userLogin;


  constructor(private _service: authService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.userlogin = new userLogin();
  }
  login() {
    this._service.login(this.userlogin).subscribe((res) => {
      console.log(this.userlogin);

      this.route.navigate(['userslist']);
      this.toastr.success('welcome');

    })

  }

}
