import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPacientesComponent } from './Components/ver-pacientes/ver-pacientes.component';
import { DoctorPagesComponent } from './doctor-pages.component';
import { ContenedorComponent } from './Components/contenedor/contenedor.component';

const routes: Routes = [

  {path: '', component:DoctorPagesComponent,children:[
    {path: '', component:ContenedorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
