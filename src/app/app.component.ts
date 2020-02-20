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
    serverElement={type:'server',name:'testServer', content:'just a test'};
createServer()
{
	this.serverName=this.name;
	this.name="";
}

}
