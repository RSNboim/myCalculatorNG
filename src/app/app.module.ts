import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { Input1historyComponent } from './input1history/input1history.component';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Input1historyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
