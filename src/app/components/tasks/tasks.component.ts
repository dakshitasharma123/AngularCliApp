import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Employee} from '../../employee';
import {Response} from '@angular/http';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
Students=[];

  constructor(private taskservice:TaskService) { }

  ngOnInit() {
  	
  	//this.taskservice.storeTask();
  }
  onGet(){
  	this.taskservice.getTasks()
  	.subscribe((response:Response)=>{
  		this.Students=response.json();
  	});
  }
  onSave(){
  	this.taskservice.storeTask()
  	.subscribe((response:Response)=>{
  		console.log(response);
  	});
  }

}
