import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  
  imports: [
    CommonModule,
    SocialLoginModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent}
    ])   
  ],
  providers:[
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]

})
export class SigningModule { }
