import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})
export class SignosVitalesComponent implements OnInit {
  title='uploadFiles';
  image = '';
  imgURL='../../../../../assets/upload.png'
  constructor( private postService:PostService) { }

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
