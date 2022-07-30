import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashbroadRoutingModule } from './dashbroad-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DashbroadRoutingModule
  ]
})
export class DashboardModule { }
