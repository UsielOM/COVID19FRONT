import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorPagesComponent } from './doctor-pages.component';
import { VerPacientesComponent } from './Components/ver-pacientes/ver-pacientes.component';
import { CitasHoyComponent } from './Components/citas-hoy/citas-hoy.component';
import { SidbarDoctorComponent } from './Components/sidbar-doctor/sidbar-doctor.component';


@NgModule({
  declarations: [
    DoctorPagesComponent,
    VerPacientesComponent,
    CitasHoyComponent,
    SidbarDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
