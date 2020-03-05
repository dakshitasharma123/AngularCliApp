import { Component, Output,EventEmitter, Input, OnChanges, SimpleChanges} from "@angular/core";
// import { EventEmitter } from "protractor";
import{Mytodo} from '../mytodo.model';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'

})
export class EditComponent implements OnChanges{
    taskname: string = '';
    createdate: string = '';
    duedate: string = '';
    disabletaskname: boolean = false;
    details: string='';
    

    @Output() taskAdded = new EventEmitter<Mytodo>();
    
    @Input() editDetail: Mytodo;
    addTask(){
        const todoData = {
            taskname:this.taskname, 
            createdate: this.createdate, 
            duedate:this.duedate,
            details: this.details
        };
        this.taskAdded.emit(todoData);
        this.disabletaskname = false;
        this.taskname = '';
        this.createdate = '';
        this.duedate = '';
        this.details = '';
        
    }
    ngOnChanges(changes: SimpleChanges){
        console.log(changes.editDetail.currentValue);
         if(this.editDetail){
             this.disabletaskname= true;
             this.taskname= changes.editDetail.currentValue.taskname;
             this.createdate = changes.editDetail.currentValue.createdate;
             this.duedate = changes.editDetail.currentValue.duedate;
             this.details = changes.editDetail.currentValue.details;
        }
    }
    
}