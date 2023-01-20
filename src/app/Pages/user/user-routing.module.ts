import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './Components/cuestionario/cuestionario.component';
import { NavbarUserComponent } from './Components/navbar-user/navbar-user.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { SidbarUserComponent } from './Components/sidbar-user/sidbar-user.component';
import { SignosVitalesComponent } from './Components/signos-vitales/signos-vitales.component';
import { UserPagesComponent } from './user-pages.component';
import { RegistroDatosMPComponent } from './Components/registro-datos-mp/registro-datos-mp.component';


const routes: Routes = [

  {path: '', component:UserPagesComponent, 
children:[
{path: '', component:SidbarUserComponent},
{path:'perfil', component:PerfilComponent},
{path:'encuesta', component:CuestionarioComponent},
{path: 'signos', component:SignosVitalesComponent},
{path:'registerMP', component:RegistroDatosMPComponent}


]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
