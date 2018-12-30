//directive d'attribut qui travaille sur l'affichage et l'apparence d'un element html
//notre directive attends un evenement avec le hostListner 
import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { createHost } from '@angular/compiler/src/core';


@Directive({
    selector:"[appColor]"
})
export class ColorDirective implements OnInit{

    @HostBinding('style.backgroundColor') backgroundColor:string; 
    @HostBinding('style.color') color:string;
    @Input('appColor') data;

    constructor(private el:ElementRef, private render:Renderer2){}

    ngOnInit(){

        this.color=this.data.text;

    }

    //hostLister pour detecter les events sur l'element html sur lequel la directive est positionné
   @HostListener('mouseenter') mouseenter(event:Event){
        this.backgroundColor = this.data.backgroundColor;
    }
    @HostListener('mouseleave') mouseleave(event:Event){
        this.backgroundColor = 'transparent';
    }
}