import { Component, OnInit } from '@angular/core';
import { Signos } from 'src/app/Interface/signos';
import { GetServiceService } from 'src/app/Service/get-service.service';

@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css']
})
export class VerPacientesComponent implements OnInit {
  signosGet: Signos [] = [];
  constructor(private getService:GetServiceService) { }
  
  ngOnInit(): void {
    this.getService.getConsultas().subscribe(res =>{
      this.signosGet = res;
      console.log(this.signosGet);
    })
  }

}
