import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NouveaucomponentComponent } from './nouveaucomponent/nouveaucomponent.component';
import { ManuComponent } from './manucomposant/manucomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveaucomponentComponent,
    ManuComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
