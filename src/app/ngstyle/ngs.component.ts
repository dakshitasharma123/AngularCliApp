import {Component} from '@angular/core';

@Component({
	selector:'ngs',
	templateUrl:'ngs.component.html',
	styles:[`
				.online {
					color:white;
				}
			`]
})
export class Ngs{
	name="";
	status="";
	constructor(){
		this.status=Math.random() > 0.5? 'online' : 'offline';
	}
	getColor()
	{
		return this.status==='online'? 'green' : 'red';
	}

}