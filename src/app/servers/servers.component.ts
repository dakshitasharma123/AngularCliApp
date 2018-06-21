import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
   selector: 'app-servers',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	  	enable=true;
	  	serverstatus="Server is Disable";
	  	toggle=false;
	  	inputvalue="";
	  	SERVERS = ['server1'];
	  	log=[];
	  	random=0.5;

  constructor() { 
  	setTimeout(()=>{
  			this.enable=true;
  	},5000);

   }

  ngOnInit() {

  }
  saveLog()
  {
  	this.random=Math.random();
  	this.toggle=!this.toggle;
  	this.log.push(this.log.length +1);
  }
  creteNewServer(){
  				this.serverstatus="Server is Started. Server name is :- "+this.inputvalue;
  				this.SERVERS.push(this.inputvalue);
  			}
  onInputUpdate(e){
  	//this.inputvalue=e.target.value;
  	//console.log(e);
  	 // this.inputvalue=(<HTMLInputElement>e.target).value;
  	//console.log(e);
  }


}
