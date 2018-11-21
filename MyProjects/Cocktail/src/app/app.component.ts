import { Component } from '@angular/core';
import {Cocktail} from './Cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktail';

    cocktail= new Cocktail("mojito");
}