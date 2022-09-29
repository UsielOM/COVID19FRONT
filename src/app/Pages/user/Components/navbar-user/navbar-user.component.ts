import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Service/auth.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
