import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
	serverElement=[{type:'server',name:'testServer', content:'just a test'}];
onServerAdded(serverData:{serverName:string,serverContent:string}){
	this.serverElement.push({
		type:'server',
		name:serverData.serverName,
		content:serverData.serverContent
	});
}
onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
	this.serverElement.push({
		type:'blueprint',
		name:blueprintData.serverName,
		content:blueprintData.serverContent
	});
}

  constructor() { }

  ngOnInit() {
  }

}
