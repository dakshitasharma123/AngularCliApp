import { Component, OnInit,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnChanges{
	 peoples=[{name:'manish',roll:'m160043ca',class:'mca'}];
	 Servers=[];

  constructor() { 
  }

  ngOnInit() {

  }
    ngOnChanges(changes:SimpleChanges){
  	console.log("ngOnChanges is called!");
  	console.log(changes);
  }


  serverDetail(event:{name:string , type:string})
  {
  		this.Servers.push({name:event.name ,type:event.type });
  }
  changeServername(){
  	this.peoples[0].name="kajal";
  }
    changeServername1(){
  	this.peoples.splice(0);
  }
}
