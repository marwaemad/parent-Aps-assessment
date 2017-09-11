import { AppRoutingModule } from './app-routing.module';
import { userListService } from './users-list/users-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsersListComponent  } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { CreateUserService } from "./create-user/create-user.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { updateUserService } from "./update-user/update-user.service";
import { authService } from "./login/login.service";
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FancyImageUploaderModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ 
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
  ],
  providers: [
    userListService,
    CreateUserService,
    updateUserService,
    authService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
