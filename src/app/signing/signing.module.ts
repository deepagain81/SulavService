import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent}
    ])
  ]
})
export class SigningModule { }
