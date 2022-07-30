import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { 
    path:"users",
    children:[
      { path:"",component: UserComponent },
      { path:"detail/:id",component:UserDetailComponent },
      { path:"add",component:UserAddComponent },
      // {path:"**",component:} Not found
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
