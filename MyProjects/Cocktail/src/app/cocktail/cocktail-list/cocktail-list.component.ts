import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { Cocktail } from '../../shared/Cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {

@Input()  cocktails:Array<Cocktail>[];
@Output() SelectCocktail=new EventEmitter();
public Enable:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  selectCocktail(cock:Cocktail){
    this.SelectCocktail.emit({value:cock});
  }

  setEnableTrue(){
    this.Enable=false;
  }

}
