import { Component,ViewChild,ElementRef} from '@angular/core';
import {ItemComponent} from './item/item.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap';

  public active:boolean=false;

  public fruit:string="";
  public fruits:string[]=[];

  // on peut acceder à une reference locale d'un element html en declarant un viewChild qui est un elemenr Ref
  //on passe le nom de la refrence 'f'
  @ViewChild('f') public el: ElementRef;

  @ViewChild('item') public item:ItemComponent;
  constructor(){


  }

  deleteFruit(fruit:string){
    this.fruits.splice(this.fruits.indexOf(fruit),1);
    this.item.incrementer();
  
    console.log(this.fruits);
  }

  activebutton():boolean{
    if(this.fruit=="")
    return false
    else
    return true;
  }
  addFruit(){
   
    this.fruits.push(this.el.nativeElement.value);
  }
}
