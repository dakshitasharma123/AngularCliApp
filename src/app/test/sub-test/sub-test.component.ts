import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-sub-test',
  templateUrl: './sub-test.component.html',
  styleUrls: ['./sub-test.component.css']
})
export class SubTestComponent implements OnInit {
  @Output('srvCreated') serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName="";
  newServerContent="";

  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }
  onAddBlueprint(){
        this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });

  }

}
