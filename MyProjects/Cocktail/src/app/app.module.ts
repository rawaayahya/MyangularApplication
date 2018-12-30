import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail/cocktail-details/cocktail-details.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ColorDirective } from './shared/directives/color.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
