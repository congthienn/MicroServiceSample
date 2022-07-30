import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UsersRoutingModule
  ],
  exports:[UserComponent],
  providers:[]


  
})
export class UsersModule { }
