import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../Cocktail';
@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails:Cocktail[]=[
    new Cocktail('Mojito',"https://cdn.diffordsguide.com/contrib/stock-images/2016/1/01/20163e856fbeb76b298eb064a15897d2b5d6.jpg","Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"),
    new Cocktail('Margerita',"#","#"),
    new Cocktail('miki',"#","#")
  ];
  constructor() { }

  ngOnInit() {
  }

}
