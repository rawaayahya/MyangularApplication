import { Component, OnInit, Input,EventEmitter,Output,ContentChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: []
})

//pour passer de l'information du component parent à un component enfant
//il nous faut ajouter @Input à la donnée qui va recevoir des valeurs de l'exterieur
//on peut ajouter un alia aussi 
//dans le component parent on ajoute à la property input [fruit]=la donnée definie dans le component parent 
//qu'on veut passer au component enfant
export class ItemComponent implements OnInit {

 @Input('AliasF') public fruit:string;

@ContentChild('p') public el:ElementRef;

 public compteur:number=0;

 //on goit declarer un objet de type EventEmitter pour qu'il emet des events, on defiit aussi quelle donnée va etre emise
 //par cet event
//la donnée qui sera emise est de type string parce que on va passer le nom du fruit à supprimer
//on ajoute le @Output pour forcer l'envoie des events 
@Output() public deleteF:EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
//cette methode va prevenir le component parent d'un event de delete pourqu'il fasse la suppression de sa table fruits
//pour cet objectif on utilise la classe EventEmitter pour instancier des events pour l'emettre à un autre componnet  
deleteFruit(){

  this.deleteF.emit(this.fruit);
  console.log(this.el.nativeElement);

  }
  incrementer(){
    this.compteur++;
  }

  decrementer(){
    this.compteur--;
  }

}
