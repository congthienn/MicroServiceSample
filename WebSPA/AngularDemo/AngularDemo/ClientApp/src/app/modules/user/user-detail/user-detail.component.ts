import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../user/user';
import { UserService } from '../user/user.service';
import { user_update } from './user-update';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: user | undefined;
  user_update: user_update | undefined;
  update: boolean = false;
  constructor(private userService:UserService,private router:ActivatedRoute,private redirect:Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    const id = String(this.router.snapshot.paramMap.get("id"));
    this.userService.getUser(id).subscribe(response => {
        console.log(response);
        this.user = response.object;
    });
  }
  goBack():void {
    this.redirect.navigate(["/users"])
  } 
  updateUser():void {
      this.update = true;
  }
  cancel():void{
    this.update = false;
  }
  updateData(name:string,phone:string,address:string):void {
    name = name.trim();
    phone = phone.trim();
    address = address.trim();
    this.user_update = {
      name:name,
      phone:phone,
      roleId:"K7N8D",
      address:address
    }
    const id = String(this.router.snapshot.paramMap.get("id"));
    this.userService.updateUser(this.user_update,id).subscribe((reponse) => {
      this.user = reponse.object;
      this.update = false;
    })
  }
}