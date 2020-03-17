import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mytodo} from '../mytodo.model';
import { MytodoService } from '../mytodo.service';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'

})
export class EditComponent implements OnInit {
    taskname: string;
    createdate: Date;
    duedate: Date;
    status = 'Active';
    disabletaskname = false;
    details: string;
    editmode = false;
    constructor( private mytodoservice: MytodoService, private activatedroute: ActivatedRoute) {}
    ngOnInit() {
      const id = this.activatedroute.snapshot.params['id'];
      if ( id ) {
        const data =  this.mytodoservice.getTodoList( id - 1 );
        this.taskname = data.taskname;
        this.createdate =  new Date(data.createdate);
        this.duedate = new Date(data.duedate);
        this.status = data.status;
        this.details = data.details;
        this.editmode = true;
        this.disabletaskname = true;
      }
    }

    addTask() {
        const todoData = {
            taskname: this.taskname,
            createdate: this.createdate.getDate() + '/' + this.createdate.getMonth() + '/' + this.createdate.getFullYear(),
            duedate: this.duedate.getDate() + '/' + this.duedate.getMonth() + '/' + this.duedate.getFullYear(),
            status: this.status,
            details: this.details
        };
        if (this.editmode) {
          this.mytodoservice.updateTodoList(todoData);
          this.editmode = false;
        } else {
          this.mytodoservice.addTodoList(todoData);
          this.taskname = '';
          // this.createdate = '';
          // this.duedate = '';
          this.status = '';
          this.details = '';
          this.disabletaskname = false;
        }






    }

}
