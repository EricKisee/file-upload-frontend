import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MyFile} from '../../File';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  
  @Input() file!: MyFile;
  @Output() onDeleteFile : EventEmitter<MyFile> = new EventEmitter();
  @Output() onToggleFile : EventEmitter<MyFile> = new EventEmitter();
  faTrash = faTrash;
  
  base64Data: any;
  retrievedImage: any;

  constructor() {
   }

  ngOnInit(): void {
    this.image();
  }

  onDelete (file:MyFile){
    this.onDeleteFile.emit(file);
  }

  onToggle (file:MyFile){
    this.onToggleFile.emit(file);
  }

  image (){
    this.base64Data = this.file.fileBytes;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  
  }

  date (date:string): string{
    return new Date(parseInt(date)).toDateString();
  }

}
