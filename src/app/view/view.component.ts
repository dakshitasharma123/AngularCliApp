import { Component, Input, Output, EventEmitter } from "@angular/core";
import {Mytodo} from '../mytodo.model';
import { Router } from "@angular/router";
// import { EventEmitter } from "protractor";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html'
})
export class ViewComponent{
    @Input() mytodoList:Mytodo[];
    @Output() editDetail =new EventEmitter<Mytodo>();
    @Output() showData = new EventEmitter<Mytodo>();

    constructor(private router: Router){}

    deleteData(id: number){
        if(confirm("Are You sure,want to delete?")){
            this.mytodoList.splice(id,1);
        }

       
    }
    showDetail(id:number){
        this.showData.emit(this.mytodoList[id]);
        this.router.navigate(['/show']);
    }

    editData(id:number){
        this.editDetail.emit(this.mytodoList[id]);
    }

}