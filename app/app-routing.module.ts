import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'user/list', component: UserLoginComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/new', component: UserRegisterComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
