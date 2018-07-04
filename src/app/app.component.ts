import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ActivatedUser1:boolean=false;
	ActivatedUser2:boolean=false;
	constructor(private userservice:UserService){	}
	ngOnInit(){
		this.userservice.userActivated.subscribe(
			(id:number)=>{
				if(id==1)
				{
					this.ActivatedUser1=true;
				}
				else if(id==2)
				{
					this.ActivatedUser2=true;
				}
			}
			);
		this.userservice.username.subscribe(
			(name:string)=>{
				console.log(name);
			}
			)
	}
	inputValue=10;
	oddNumbers=[];
	evenNumbers=[];
	onIntervalFired(firedNumber: number) {
		if(firedNumber % 2 === 0){
			this.evenNumbers.push(firedNumber);
	  }else{
	  	this.oddNumbers.push(firedNumber);
	  }
	}
}
