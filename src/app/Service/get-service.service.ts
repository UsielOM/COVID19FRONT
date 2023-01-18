import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signos, Signos2 } from '../Interface/signos';
import { environment } from 'src/environments/environment';
import { UserOne } from '../Interface/User';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  
  constructor(private http:HttpClient ) { }

  getConsultas():Observable<Signos[]>{
    return this.http.get<Signos[]>(environment.apiUrl + '/get/consultas')
  }

  getSignosPacientes(idPaciente:String):Observable<Signos2>{
    return this.http.get<Signos2>(environment.apiUrl + '/get/signos/'+ idPaciente);
    }
  
    getUserOne(id:string):Observable<UserOne>{
      return this.http.get<UserOne>(environment.apiUrl + '/get/User/'+ id);
    }

}
