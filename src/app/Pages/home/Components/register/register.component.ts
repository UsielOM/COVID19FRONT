import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/Interface/register';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: Register = new Register();

  constructor(private postService:PostService) { }


  registroUser(): void{
    this.postService.createRegistroUser(this.reg).subscribe(result =>{
      this.reg = result;
    });
  }
  ngOnInit(): void {
  }

}
