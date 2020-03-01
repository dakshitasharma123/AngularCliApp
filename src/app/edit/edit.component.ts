
import { Component, Output,EventEmitter, Input, OnChanges, SimpleChanges} from "@angular/core";
// import { EventEmitter } from "protractor";

@Component ({
    selector : 'app-edit',
    templateUrl : './edit.component.html'
})
export class EditClass implements OnChanges{
    taskname = '';
    duedate = '';
    createdate = '';
    disabletaskname: boolean = false;
    
    @Input() editdata : {taskname: string,duedate:string,createdate:string};

   @Output() taskadded = new EventEmitter<{taskname: string,duedate:string,createdate:string}>();
    editData(){
        const data = {
            taskname: this.taskname,
            duedate : this.duedate,
            createdate: this.createdate
        };
        console.log(data);
        this.taskadded.emit(data);
        this.disabletaskname = false;
        this.taskname = '';
        this.duedate = '';
        this.createdate = '';
    }
    ngOnChanges(changes: SimpleChanges) {
        if(this.editdata){
            this.disabletaskname = true;
            this.taskname = changes.editdata.currentValue.taskname;
            this.duedate = changes.editdata.currentValue.duedate;
            this.createdate = changes.editdata.currentValue.createdate; 
        }
    }




}