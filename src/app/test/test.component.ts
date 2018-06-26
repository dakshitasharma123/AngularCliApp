import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
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
  onChange(){
    this.serverElement[0].name="manish1";
  }
  onDelete(){
    this.serverElement.splice(0,1);
  }

}
