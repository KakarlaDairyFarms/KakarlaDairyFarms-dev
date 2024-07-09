import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ILoginComponent } from './i-login/i-login.component';
import { ILoginServiceComponent } from './i-login-service/i-login-service.component';

const routes: Routes = [
  { path: 'login', component: ILoginComponent },
  { path: 'services', component: ILoginServiceComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
