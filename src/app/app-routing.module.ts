import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PanelComponent } from './pages/panel/panel.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserLoggedGuard } from './utils/guards/user-logged.guard';
import { UserNotLoggedGuard } from './utils/guards/user-not-logged.guard';

const routes: Routes = [
  {path:'',redirectTo:'panel',pathMatch:'full'},
  {path:'panel',component:PanelComponent,canActivate:[UserLoggedGuard]},
  {path:'login',component:LoginComponent, canActivate:[UserNotLoggedGuard]},
  {path:'signup',component:SignupComponent, canActivate:[UserNotLoggedGuard]},
  {path:'forgot',component:ForgotPasswordComponent, canActivate:[UserNotLoggedGuard]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
