import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.css']
})
export class CropImageComponent implements OnInit {
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  @Output() imageBase64: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  save(){
    this.imageBase64.emit(this.croppedImage);
  }
  rotateLeft(){
    this.imageCropper.rotateLeft();
  }
  rotateRight(){
    this.imageCropper.rotateRight();
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
