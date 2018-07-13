import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

Students:{'title':string,'isDone':boolean}[]=[];
  constructor(private datastorageservice:DataStorageService) { }

  ngOnInit() {
  }
  onGet(){
  	 	this.datastorageservice.getTasks()
  	.subscribe((response:Response)=>{
  		this.Students=response.json();
  	});
  }
  onSave(){
  	  	this.datastorageservice.storeTask()
  	.subscribe((response:Response)=>{
  		console.log(response);
  	});

  }

}
