import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: [`app.component.css`]
})
export class AppComponent {
  titre:string='mon titre';
  nombre:number=10;
  bool:boolean=true;
  display:boolean=false;
  //property binding nous permet une souplesse dans la definition des elements html
  // par exemple si vous voulez désactiver le click sur un boutton jusqu'à le remplissage 
  // de tous les champs dans le formulaire ;on peut lier la property disable avec un attribut dans le component
  // qui vérifie que tout les eleemnts dans le formulaire sont remplis pour se mettre à false
  date:string="number"; 
  color:string="red";
  obj:{}={

    cle:'ma cle'
  }
    nom:string;
    content:string="merde";
  constructor() {
    this.nom = `<script> Méchant script </script>`;
  }
  sqr(a:number):number{

    return(a *a );
  }
  iclick(event:Event):void{

    console.log(event);
  }
  changeColor(color:string):void{

    this.color=color;
  }
}