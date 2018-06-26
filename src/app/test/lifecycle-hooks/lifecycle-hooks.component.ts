import { Component,
 OnInit,
 Input,
 OnChanges,
 SimpleChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit
  } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
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

  constructor() {
  console.log("constructor is called!");
   }

  ngOnInit() {
  	console.log("ngOnInit is called!");
  	alert("hello manish");
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
  }
  ngAfterContentChecked(){
  	console.log("ngAfterContentChecked is called!");
  }
  ngAfterViewInit(){
  	console.log("ngAfterViewInit is called!");
  }
  ngAfterViewChecked(){
  	console.log("ngAfterViewChecked is called!");
  }
  ngOnDestroy(){
  	console.log("ngOnDestroy is called!");
  }

}
