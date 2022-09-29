import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-user-pages',
  templateUrl: './user-pages.component.html',
  styleUrls: ['./user-pages.component.css']
})
export class UserPagesComponent implements OnInit {

  constructor(private authService:AuthService) { }

  get usuario(){
    return this.authService.userDatos;
  }


  ngOnInit(): void {}

}
