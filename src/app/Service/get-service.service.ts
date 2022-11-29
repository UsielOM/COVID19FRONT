import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signos } from '../Interface/signos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  
  constructor(private http:HttpClient ) { }

  getConsultas():Observable<Signos[]>{
    return this.http.get<Signos[]>(environment.apiUrl + '/get/consultas')
  }
  
  getSignosPacientes(idPaciente:String):Observable<Signos[]>{
    return this.http.get<Signos[]>(environment.apiUrl + '/get/signos/'+ idPaciente);
    }
}
