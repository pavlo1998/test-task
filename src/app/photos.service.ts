import { Injectable } from '@angular/core';
import { Photo } from './models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }


  counter = 0
  
  getId(){
    return this.counter++
  }

  photoList: Photo[] = [
    
    {
      src: "./assets/bazaart-edit-app.jpg",
      name: "Default picture",
      textDecor: '',
      id: this.getId(),
      
    },
    
  
]


getPhotoList(){  
  
  this.photoList = JSON.parse(localStorage.getItem("photoList") || '[]')

  return this.photoList 
  
}


add(photo: any){

  this.photoList.push(photo)
  localStorage.setItem('photoList', JSON.stringify(this.photoList))
  
}

delete(id: number){
  let index = this.photoList.findIndex(user => user.id == id);
  this.photoList[index].textDecor = 'line-through'

  setTimeout(() =>{
    this.photoList.splice(index, 1)
    localStorage.setItem('photoList', JSON.stringify(this.photoList))
  },700)
  
 
}

}