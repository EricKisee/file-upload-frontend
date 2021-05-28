import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyFile } from '../File';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FileService {
  
  private apiUrl = "http://localhost:8080/file/";

  constructor( private http: HttpClient) {  }

  getFiles () : Observable<MyFile[]>{
    return this.http.get<MyFile[]> (this.apiUrl+"all")
  }

  deleteFile (file: MyFile) : Observable<MyFile> {
    const deleteUrl = this.apiUrl+"delete";
    const url = `${deleteUrl}/${file.id}`;
    return this.http.delete<MyFile>(url);
  }

  updateFile (file:MyFile): Observable<MyFile> {
    const updateUrl = this.apiUrl+"update";
    const url = `${updateUrl}/${file.id}`;
    return this.http.put<MyFile>(url,file,httpOptions);
  }

  uploadFile (file: MyFile) : Observable<MyFile> {
    const addUrl = this.apiUrl+"add?name="+file.name+"&date="+file.date;
    const uploadData = new FormData();
    // uploadData.append("name", file.name);
    // uploadData.append("date", file.date);
    uploadData.append("file", file.file);

    return this.http.post<MyFile>(addUrl, uploadData);
  }

}
