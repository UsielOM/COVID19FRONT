import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPagesComponent } from './user-pages.component';
import { NavbarUserComponent } from './Components/navbar-user/navbar-user.component';
import { SidbarUserComponent } from './Components/sidbar-user/sidbar-user.component';
import { UserPerfilComponent } from './Components/user-perfil/user-perfil.component';


@NgModule({
  declarations: [
    UserPagesComponent,
    NavbarUserComponent,
    SidbarUserComponent,
    UserPerfilComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
