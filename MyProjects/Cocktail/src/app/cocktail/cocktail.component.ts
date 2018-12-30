import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/Cocktail.model';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  public cocktails:Cocktail[]=[
    new Cocktail('Mojito',"https://cdn.diffordsguide.com/contrib/stock-images/2016/1/01/20163e856fbeb76b298eb064a15897d2b5d6.jpg","Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"),
    new Cocktail('Margerita',"https://tse4.mm.bing.net/th?id=OIP.QvX5ZF4ttIJJZJguFNfvBAHaJA&pid=15.1&P=0&w=300&h=300","La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy (qui signifie « marguerite » en français, « margarita » en espagnol) dans lequel on remplaça le brandy par de la téquila1 durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières"),
    new Cocktail('miki',"https://tse3.mm.bing.net/th?id=OIP.f1uCHLkDBg4TL5GdQ9gy6AHaLH&pid=15.1&P=0&w=300&h=300","est une boisson alcoolisée incolore titrant environ 40 degrés. L'origine de cette eau-de-vie se situerait en Russie ou en Pologne1 selon les sources.La vodka peut être issue de la transformation de quantités de produits agricoles : les plus usités sont les céréales (blé, orge, sarrasin), mais d'autres produits agricoles peuvent être utilisés2, parmi eux, les betteraves, les pommes de terre")];

  public Cocktail:Cocktail;

  
  constructor() { }

  ngOnInit() {
    this.Cocktail=this.cocktails[0];
  }

  sendToDetails(event){
    console.log("sendToDetails");
    console.log(event.value+"==========="+this.cocktails.indexOf(event.value));
    this.Cocktail=this.cocktails[this.cocktails.indexOf(event.value)];
  }
 

}
