import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from '../Components/login/login.component';
import { SignupComponent } from '../Components/signup/signup.component';
import { LeftsideComponent } from '../Components/leftside/leftside.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    SignupComponent,
    LeftsideComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, MatInputModule, MatButtonModule],
})
export class PublicModule {}
