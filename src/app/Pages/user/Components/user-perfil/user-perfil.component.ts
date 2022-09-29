import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  constructor(private authService:AuthService) { }

  get usuario(){
    return this.authService.userDatos;
  }
  ngOnInit(): void {
  }

}
