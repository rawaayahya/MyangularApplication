import { NgModule, Component } from '@angular/core'


@Component({

    selector: 'manu-component',
    template: `<h1> Bonjour de {{nom}} </h1>`,
    styles:[`h1{

        color: green;
    }`]
})

export class ManuComponent{

    nom: string;
    constructor(){
        this.nom=`mon manu composant`
    }

}

