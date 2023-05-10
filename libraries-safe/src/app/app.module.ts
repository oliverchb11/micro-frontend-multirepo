import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentesModule } from 'projects/componentes/src/public-api';

import { LoadingModule } from 'projects/loading/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSelectModule } from 'input-select';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputSelectModule,
    ComponentesModule,
    LoadingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
