import { Component, OnInit } from '@angular/core';
import {  Signos2 } from 'src/app/Interface/signos';
import { GetServiceService } from 'src/app/Service/get-service.service';
import { PostService } from 'src/app/Service/post.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../Service/auth.service';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})
export class SignosVitalesComponent implements OnInit {
  title='uploadFiles';
  image = '';
  imgURL='../../../../../assets/upload.png';
  signosGet: Signos2  = new Signos2;

  constructor( private postService:PostService, private getService:GetServiceService, private authService:AuthService) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.image)
    this.postService.postImage(formData).subscribe((res) =>(Swal.fire({

      icon:'success',
      title:'Imagen Cargada',
      text: 'La iamgen se subio correctamente'

    }).then((result)=>{
      if(result){
        location.reload();
      }
    })
    ), (err) =>Swal.fire({
      icon:'error',
      title: 'Opps..',
      text:'Parece que no se subio nada!!!'
    })
    );
    
  }
  
  obtenerSignos(): void{
   let id = this.authService.userDatos.id
  this,this.getService.getSignosPacientes(id).subscribe((signos2:Signos2) =>{
    if(signos2 === null){
      console.log('Error');
      return;
    }
    this.signosGet = signos2;
    console.log(this.signosGet);
  })
  }

  selectImage(event:any){

    if(event.target.files.length > 0){
      const file = event.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) =>{
        this.imgURL = event.target.result;
      }
      this.image = file;
      console.log(this.image);
    }else{
      console.error(event);
    }
  }
}
