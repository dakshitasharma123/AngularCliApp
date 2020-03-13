import { Component, Input, Output, EventEmitter } from "@angular/core";
import {Mytodo} from '../mytodo.model';
import { Router } from "@angular/router";
// import { EventEmitter } from "protractor";
import {MytodoService} from '../mytodo.service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html'
})
export class ViewComponent{
    mytodoList: Mytodo[];
    @Output() editDetail =new EventEmitter<Mytodo>();
    @Output() showData = new EventEmitter<Mytodo>();

    constructor(private router: Router, private mytodoservice: MytodoService ){
        this.mytodoList = this.mytodoservice.getAllTodoList();
        console.log(this.mytodoList);
    }

    deleteData(id: number){
        if(confirm("Are You sure,want to delete?")){
            this.mytodoservice.deleteTodoList(id);
           // this.mytodoList.splice(id,1);
        }

       
    // }
    // showDetail(id:number){
    //     // this.showData.emit(this.mytodoList[id]);
    //     // this.router.navigate(['/show']);
    //     this.mytodoservice.getTodoList(id);

    // }

    // editData(id:number){
    //     this.editDetail.emit(this.mytodoList[id]);
    // }

}