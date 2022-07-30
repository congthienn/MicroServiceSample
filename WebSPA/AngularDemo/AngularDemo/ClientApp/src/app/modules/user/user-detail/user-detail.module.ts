import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from '../user/users.module';

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class UserDetailModule { }
