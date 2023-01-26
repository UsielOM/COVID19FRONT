import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorPagesComponent } from './doctor-pages.component';
import { VerPacientesComponent } from './Components/ver-pacientes/ver-pacientes.component';
import { CitasHoyComponent } from './Components/citas-hoy/citas-hoy.component';
import { NavbarDoctorComponent } from './Components/navbar-doctor/navbar-doctor.component';
import { ContenedorComponent } from './Components/contenedor/contenedor.component';


@NgModule({
  declarations: [
    DoctorPagesComponent,
    VerPacientesComponent,
    CitasHoyComponent,
    NavbarDoctorComponent,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
