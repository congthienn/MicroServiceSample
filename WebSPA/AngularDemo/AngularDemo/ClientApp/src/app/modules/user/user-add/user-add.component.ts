import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { user, user_add } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user:user_add = {
    address:'',
    email:'',
    password:'',
    phone:'',
    roleId:'K7N8D',
    name:''
  };
  constructor(private location:Location,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  goBack():void{
    this.location.back();
  }
  clear():void{
    this.user = {
      address:'',
      email:'',
      password:'',
      phone:'',
      roleId:'K7N8D',
      name:''
    }
  }
  save(user:user_add):void{
    this.user = user;
    this.userService.adduser(this.user).subscribe(
      (response:any) =>{
        this.router.navigate([`users/detail/${response.object.id}`]);
      }
    )
  }
}