import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sidbar-user',
  templateUrl: './sidbar-user.component.html',
  styleUrls: ['./sidbar-user.component.css']
})
export class SidbarUserComponent implements OnInit {

  constructor(private authService:AuthService) { }

  get usuario(){
    return this.authService.userDatos;
  }


  ngOnInit(): void {
    console.log("Hola soy el id" + this.usuario.id)
    console.log("Hola soy el correo: " + this.usuario.Email)
  }

}
