import { Component, OnInit } from '@angular/core';
import{ MyFile } from '../../File';
import {FileService} from '../../services/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  files: MyFile[] = [];

  constructor( private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((files)=>(this.files=files));
  }
  
  deleteFile (file:MyFile){
    this.fileService.deleteFile(file).subscribe(()=>(
      this.files = this.files.filter((f)=> f.id!== file.id)
    ));
  }

  toggleFile(file: MyFile){
    // console.log(task.reminder);
    this.fileService.updateFile(file).subscribe();
  }

  uploadFile (file: MyFile){
    this.fileService.uploadFile(file).subscribe((file)=>(
      this.files.push(file)
    ));
  }
}
