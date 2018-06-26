import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	onEventFired(onIntervalfired:number){
		console.log(onIntervalfired);
	}

}
