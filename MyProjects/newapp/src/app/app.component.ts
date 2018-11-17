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

  obj:{}={

    cle:'ma cle'
  }
    nom:string;
  constructor() {
    this.nom = `Angular`;
  }
  sqr(a:number):number{

    return(a *a );
  }
}