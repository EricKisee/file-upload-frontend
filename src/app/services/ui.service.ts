import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showUploadFile: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleUploadFile (): void {
    this.showUploadFile = !this.showUploadFile;
    this.subject.next(this.showUploadFile);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
