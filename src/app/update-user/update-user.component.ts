import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { UserList } from "../users-list/users-list.model";
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { ToastrService } from "ngx-toastr";
import { updateUserService } from "./update-user.service";
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  public updateuser: UserList;

  constructor(private route: ActivatedRoute,private router: Router, private toastr: ToastrService,private update:updateUserService) {
    this.route.queryParams.subscribe((params: Params) => {
      this.updateuser = JSON.parse(params["single"]);
    });
  }
  ngOnInit() {
  }
  public updateUser() {
    this.update.updateuser(this.updateuser).subscribe(res => {
      this.toastr.success('you are updated your profile');
      this.router.navigate(['/userslist']);
    })

  }


}
