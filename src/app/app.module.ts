import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ILoginComponent } from './i-login/i-login.component';
import { ILoginServiceComponent } from './i-login-service/i-login-service.component';
import { FormsModule } from '@angular/forms';
import { IAuthServiceService } from './i-auth-service.service';
import { KFUserService } from 'src/KFKUserService/kfuser.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from 'src/admin/admin.service';
import { AdminUserManagementComponent } from 'src/admin-user-management/admin-user-management.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ILoginComponent,
    ILoginServiceComponent,
    AdminUserManagementComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IAuthServiceService, KFUserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
