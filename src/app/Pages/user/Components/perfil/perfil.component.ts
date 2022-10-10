import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService:AuthService) { }

  get usuario(){
    return this.authService.userDatos;
  }

  ngOnInit(): void {
  }

}
