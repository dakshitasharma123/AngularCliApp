import { Directive,Renderer2,ElementRef,OnInit, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@HostBinding('style.backgroundColor') backgroundcolor:string="green";

  constructor(private elementRef:ElementRef, private randerer:Renderer2) { }

  ngOnInit(){
  	this.randerer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  	this.randerer.setStyle(this.elementRef.nativeElement,'color','white');
  }
  @HostListener('mouseenter') mouseover(event:Event){
  	//this.randerer.setStyle(this.elementRef.nativeElement,'font-size','50px');
  	this.backgroundcolor="orange";//use this if you use @HostBiding
  }
    @HostListener('mouseleave') mouseleave(event:Event){
  	/*this.randerer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  	this.randerer.setStyle(this.elementRef.nativeElement,'font-size','16px');*/
  	this.backgroundcolor="blue";//use this if you use @HostBiding
  }
}
