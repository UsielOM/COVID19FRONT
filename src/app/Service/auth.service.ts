import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Interface/User';
import {AuthResponse} from '../Interface/Auth';
import { catchError, map, of, tap } from 'rxjs';
import { offset } from '@popperjs/core';

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
}
