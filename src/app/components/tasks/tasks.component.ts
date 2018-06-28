import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Employee} from '../../employee';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
Students=[];

  constructor(private taskservice:TaskService) { }

  ngOnInit() {
  	this.taskservice.getTasks().subscribe(data => this.Students=data);
  }

}
