import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() name_1: string;
  @Output() voted = new EventEmitter<boolean>();
  show = false;
  constructor() {

   }
 
  ngOnInit() {
  }
  voteCount(clicked: boolean){
    this.voted.emit(clicked);
    this.show=true ;
  }

}
