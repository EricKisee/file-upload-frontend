import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FilesComponent } from './components/files/files.component';
import { FileItemComponent } from './components/file-item/file-item.component';
import { ViewFileComponent } from './components/view-file/view-file.component';
import { AddFileComponent } from './components/add-file/add-file.component';

const appRoutes: Routes = [
  { path:'' , component: FilesComponent},
  { path:'file', component: ViewFileComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FilesComponent,
    FileItemComponent,
    ViewFileComponent,
    AddFileComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
