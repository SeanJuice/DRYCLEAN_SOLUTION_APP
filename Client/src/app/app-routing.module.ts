import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin/dashboard']);
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path:'forgot-password', component: ForgotpasswordComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
