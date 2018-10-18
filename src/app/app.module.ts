import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PosteditorComponent } from './posteditor/posteditor.component';
import { DirecthtmlComponent } from './directhtml/directhtml.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PosteditorComponent,
    DirecthtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
