import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPagesComponent } from './user-pages.component';
import { NavbarUserComponent } from './Components/navbar-user/navbar-user.component';
import { SidbarUserComponent } from './Components/sidbar-user/sidbar-user.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { CuestionarioComponent } from './Components/cuestionario/cuestionario.component';
import { SignosVitalesComponent } from './Components/signos-vitales/signos-vitales.component';
import { RecomendacionesComponent } from './Components/recomendaciones/recomendaciones.component';
import { FormsModule } from '@angular/forms';
import { RegistroDatosMPComponent } from './Components/registro-datos-mp/registro-datos-mp.component';



@NgModule({
  declarations: [
    UserPagesComponent,
    NavbarUserComponent,
    SidbarUserComponent,
    PerfilComponent,
    CuestionarioComponent,
    SignosVitalesComponent,
    RecomendacionesComponent,
    RegistroDatosMPComponent,

    

 
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
