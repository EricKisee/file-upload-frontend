import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MyFile} from '../../File';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import { Event } from '@angular/router';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  
  @Output() onUploadFile : EventEmitter <MyFile> = new EventEmitter();
 
  name!: string ;
  date!: string ;
  file!: File;
  showUploadFile!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showUploadFile=value));
  }

  ngOnInit(): void {
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {

    this.file = event.target.files[0];
    this.name = this.file.name;
    this.date = this.file.lastModified.toString();


  }

  onSubmit(){
    if(!this.name){
      alert('Please select a file!');
      return;
    }

    const newFile = ({
      name: this.name,
      date: this.date,
      file: this.file,
      fileBytes: []
    });

    this.onUploadFile.emit(newFile);

    this.name = '';
    this.date = '';
    // this.file = new File();

  }

}
