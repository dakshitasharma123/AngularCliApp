import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	enable = false;
  	name = '';
    serverName="";
createServer()
{
	this.serverName=this.name;
	this.name="";
}

}
