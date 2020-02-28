
import { Component, Output,EventEmitter } from "@angular/core";
// import { EventEmitter } from "protractor";

@Component ({
    selector : 'app-edit',
    templateUrl : './edit.component.html'
})
export class EditClass {
    taskname = '';
    duedate = '';
    createdate = '';
   @Output() taskadded = new EventEmitter<{taskname: string,duedate:string,createdate:string}>();
    editData(){
        const data = {
            taskname: this.taskname,
            duedate : this.duedate,
            createdate: this.createdate
        };
        console.log(data);
        this.taskadded.emit(data);
    }


}