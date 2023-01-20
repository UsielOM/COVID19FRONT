import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'src/app/Service/get-service.service';
import { AuthService } from '../../../../Service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService:AuthService, private getService:GetServiceService) { }
 bandera: any ;
  get usuario(){
    return this.authService.userDatos;
  }

  ngOnInit(): void {
this.falseAndTrue();
  }

  falseAndTrue(): void{
    let idUser = this.authService.userDatos.id
    this.getService.getTrueAndFalse(idUser).subscribe((result) =>{
      this.bandera = result;
    });
  }

}
