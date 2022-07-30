import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { user } from './user';
import { UserService } from './user.service';
import * as signalR from '@microsoft/signalr';  
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$:user[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    const connection = new signalR.HubConnectionBuilder()  
      .configureLogging(signalR.LogLevel.Information)  
      .withUrl(environment.baseUrl + '/notify')  
      .build();  
  
    connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }) 
    connection.on("BroadcastMessage", () => {  
      console.log("Real time");
      this.getUsers();  
    }); 
    this.userService.RefreshData.subscribe(() => {
      console.log("Refresh data");
      this.getUsers();
    });
  }
  getUsers():void{
    this.userService.getUsers().subscribe(response => {
      this.users$ = response;
      console.log(this.users$);
    });  
  }
  deleteUser(user:user):void{
      this.users$ = this.users$.filter(x=>x !== user);
      this.userService.deleteUser(user.id).subscribe();
  }
}