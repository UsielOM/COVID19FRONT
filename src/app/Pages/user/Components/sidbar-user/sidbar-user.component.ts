import { Component, OnInit } from '@angular/core';
import { UserOne } from 'src/app/Interface/User';
import { AuthService } from 'src/app/Service/auth.service';
import { GetServiceService } from 'src/app/Service/get-service.service';

@Component({
  selector: 'app-sidbar-user',
  templateUrl: './sidbar-user.component.html',
  styleUrls: ['./sidbar-user.component.css']
})
export class SidbarUserComponent implements OnInit {

  constructor(private authService:AuthService, private getService:GetServiceService) { }
 
  userGetOne: UserOne = new UserOne;
  get usuario(){
    return this.authService.userDatos;
  }


  ngOnInit(): void {
  this.obtenerInfoUser();
  }

  obtenerInfoUser(): void{
    var id = this.authService.userDatos.id
    this.getService.getUserOne(id).subscribe((userOne:UserOne) =>{
      if(userOne === null){
        console.log("ERROR");
        return;
      }
      this.userGetOne = userOne;
      console.log(this.userGetOne);
    })
  }
  
}

