import { Component,
 OnInit,
 Input,
 EventEmitter,
 Output,
 OnChanges,
 SimpleChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-sub-test',
  templateUrl: './sub-test.component.html',
  styleUrls: ['./sub-test.component.css']
})
export class SubTestComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,OnDestroy{
	@Input() people:{name: string , roll: string, class: string};
	@Output() onServerCreated=new EventEmitter<{name:string, type:string}>();
	@Input() name:string;
	serverName="";
	serverType="";
	serverName1="";
	serverType1="";
  constructor() { 
  	console.log("constructor is called!");
  }

  ngOnInit() {
  	console.log("ngOnInit is called!");
  }
  ngOnChanges(changes:SimpleChanges){
  	console.log("ngOnChanges is called!");
  	console.log(changes);
  }
    ngDoCheck(){
  	console.log("DoCheck is Called!");
  }
  ngAfterContentInit()
  {
  	console.log("ngAfterContentInit is called!");
  }
  ngAfterContentChecked()
  {
  	console.log("ngAfterContentChecked is called!");
  }
  ngOnDestroy(){
  	console.log("ngOnDistroy is called!");
  }
  createServer()
  {
  		this.onServerCreated.emit({name:this.serverName , type:this.serverType});
  }
    createServer1(localServerName:HTMLInputElement)
  {
  		this.onServerCreated.emit({name:localServerName.value , type:this.serverType});
  }


}
