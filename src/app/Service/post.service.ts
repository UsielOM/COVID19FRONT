import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../Interface/register';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createRegistroUser(register:Register):Observable<Register>{
    return this.http.post<Register>(environment.apiUrl + "/post/userRegistro", register )
  }


  postImage(formDate:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl + "/file",formDate)
  }
}
