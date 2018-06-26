import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output() onEventFire = new EventEmitter<number>();
	interval;
	lastNumber:number = 0;

  constructor() { }

  ngOnInit() {
  }
  onStartGame(){
  	this.interval=setInterval(() => {
  		this.onEventFire.emit(this.lastNumber + 1);
  		this.lastNumber++;
  	},1000);
  }

}
