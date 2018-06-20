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
	  	inputvalue="";

  constructor() { 
  	setTimeout(()=>{
  			this.enable=true;
  	},5000);

   }

  ngOnInit() {


  }
  creteNewServer(){
  				this.serverstatus="Server is Started. Server name is :- "+this.inputvalue;
  				this.inputvalue="";
  			}
  onInputUpdate(e){
  	//this.inputvalue=e.target.value;
  	//console.log(e);
  	 // this.inputvalue=(<HTMLInputElement>e.target).value;
  	//console.log(e);
  }


}
