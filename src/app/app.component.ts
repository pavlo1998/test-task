import { Component, OnInit } from '@angular/core';

import { Photo } from './models/photo';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testTask';

  selectedFile: any

  photoList: Photo[] = []
  src: string | undefined;
  name: string | undefined;
  id: number | undefined;
 
  styleForPhotoName: string | undefined

  constructor(public photosService: PhotosService) {
    
  }

  ngOnInit(){


    this.photoList = this.photosService.getPhotoList()
    
  }

  deletePhoto(id: number){
      this.photosService.delete(id)
      
  }

  onFileSelected(event: any){

    this.selectedFile = event.target.files[0]; 
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.photosService.add({
        src: reader.result,
        name: this.selectedFile.name,
        textDecor: '',
        id: this.photosService.getId()
      })
    }
    
  }
  
  
}


