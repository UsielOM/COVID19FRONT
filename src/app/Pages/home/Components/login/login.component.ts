import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    Email: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthService ) { }


  login(){
    const {Email, Password} = this.miFormulario.value;
    this.authService.login(Email,Password).subscribe(ok =>{
      if(ok === true){
        this.router.navigateByUrl('/User')
      }else{
        alert("Warning");
      }
    })
  }
  ngOnInit(): void {
  }

}
