import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from "./create-user/create-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'userslist', component: UsersListComponent },
    { path: 'user', component: UserComponent },
    { path: 'createuser', component: CreateUserComponent },
    { path: 'updateuser', component: UpdateUserComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }

