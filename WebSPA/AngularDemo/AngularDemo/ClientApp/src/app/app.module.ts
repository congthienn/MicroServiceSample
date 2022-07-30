import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './modules/user/user/users.module';
import { UserDetailModule } from './modules/user/user-detail/user-detail.module';
import { UserAddModule } from './modules/user/user-add/user-add.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    UsersModule,  
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }