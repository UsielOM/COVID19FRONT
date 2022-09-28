import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Interface/User';
import {AuthResponse} from '../Interface/Auth';
import { catchError, map, of, tap, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user!: User;

  get userDatos(){
    return {...this._user};
  }
  constructor(private http: HttpClient) { }

  login(Email: string, Password: string){
    const url = `${environment.apiUrl}/post/login`;
    const body = {Email, Password}
    return this.http.post<AuthResponse>(url,body).pipe( tap(resp =>{
      if(resp.ok){
        localStorage.setItem('token', resp.token!);
      }
    }),
    map(resp => resp.ok),
    catchError(err => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean>{
    const url = `${environment.apiUrl}/get/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );
    return this.http.get<AuthResponse>(url, {headers})
    .pipe(
      map(resp =>{
        localStorage.setItem('token', resp.token!)
        this._user = {
          idUser: resp.idUser!,
          Email: resp.Email!
        }
        return resp.ok;
      }),
      catchError(err => of(false))
    )

  }

  logout(){
    localStorage.clear();
  }
}
