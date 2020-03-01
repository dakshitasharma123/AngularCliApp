import { Component, Input, Output,EventEmitter } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";
// import { EventEmitter } from "protractor";

@Component({
    selector : 'app-view',
    templateUrl: './view.component.html',
})
export class ViewClass {
    @Input() myTodo: {taskname: string,duedate: string,createdate: string}[];
    editDetail : {taskname: string,duedate: string,createdate: string};
    @Output() editdata = new EventEmitter<{taskname: string,duedate: string,createdate: string}>()
    // myArra/y:[number,number] = [1,2];

    deleteData(id:number){
        if(confirm("Are You Sure, Want to delete?")){
            this.myTodo.splice(id,1); 
        }
        
    }
    editData(id:number){
       this.editDetail = this.myTodo[id];
       this.editdata.emit(this.editDetail);
    }
}