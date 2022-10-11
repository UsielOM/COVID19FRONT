import { Component, OnInit } from '@angular/core';
import { EncuestaService, preguntasBasica } from '../../service/encuesta.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  preguntasBasicas:preguntasBasica [] = []; 
  constructor(private _encuestaService:EncuestaService) { }

  ngOnInit(): void {
    this.preguntasBasicas = this._encuestaService.getPreguntas();
  }

}
