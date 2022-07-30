import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserAddComponent } from './user-add.component';
import { UserComponent } from '../user/user.component';
import { UsersModule } from '../user/users.module';



@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    UsersModule
  ]
})
export class UserAddModule { }
