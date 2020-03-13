import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {Mytodo} from '../mytodo.model';
import { MytodoService } from '../mytodo.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnChanges {

  // @Input() showdetail: {details: string} 
  // @Input() showDetail: Mytodo;
  showDetail: Mytodo;


  constructor(private mytodoservice: MytodoService) { 
    //this.showDetail = this.mytodoservice.showTodoListData();
    //console.log(this.showDetail);
  }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges){
    if(this.showDetail){
      console.log(change);
    }
    

  }

}
