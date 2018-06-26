import { Component,
 OnInit,
 Input,
 ViewEncapsulation,
 OnChanges,
 SimpleChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 ViewChild,
 ElementRef,
 ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
  encapsulation:ViewEncapsulation.Emulated //non native
})
export class LifecycleHooksComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit
{
@Input() element:{type:string,name:string,content:string};
@Input() name:string;
@ViewChild('heading') header:ElementRef;
@ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
  console.log("constructor is called!");
   }

  ngOnInit() {
  	console.log("ngOnInit is called!");
  	console.log('text content:-'+this.header.nativeElement.textContent);// you can't check any value of the element in a Dom before View is Init
    console.log('text content of paragraph:-'+this.paragraph.nativeElement.textContent);//cant access this content before ngAfterContentInit hook is invoke                                                                     
  }
  ngOnChanges(changes:SimpleChanges){
  	console.log("ngOnChanges is called!");
  	console.log(changes);
  }
  ngDoCheck(){
  	console.log("ngDoCheck is called!");
  }
  ngAfterContentInit(){
  	console.log("ngAfterContentInit is called!");
    console.log('text content of paragraph:-'+this.paragraph.nativeElement.textContent);//now you can access this content after ngAfterContentInit hook is invoke
  }
  ngAfterContentChecked(){
  	console.log("ngAfterContentChecked is called!");
  }
  ngAfterViewInit(){
  	console.log("ngAfterViewInit is called!");
    console.log('text content:-'+this.header.nativeElement.textContent);// now you can check some value of the 
                                                                        //element in a Dom
  }
  ngAfterViewChecked(){
  	console.log("ngAfterViewChecked is called!");
  }
  ngOnDestroy(){
  	console.log("ngOnDestroy is called!");
  }

}
