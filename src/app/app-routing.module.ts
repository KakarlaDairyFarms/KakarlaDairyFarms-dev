import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ILoginComponent } from './i-login/i-login.component';
import { ILoginServiceComponent } from './i-login-service/i-login-service.component';
import { AdminUserManagementComponent } from 'src/admin-user-management/admin-user-management.component';
import { AdminGuard } from 'src/admin/admin.guard';

const routes: Routes = [
  { path: 'login', component: ILoginComponent },
  { path: 'services', component: ILoginServiceComponent },
  { path: 'admin/user-management', component: AdminUserManagementComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
