import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})
export class SignosVitalesComponent implements OnInit {
  title='uploadFiles';
  image = '';
  imgURL='../../../../../assets/upload.png'
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
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
