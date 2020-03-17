import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Mytodo} from '../mytodo.model';
import { Router, ActivatedRoute } from '@angular/router';
// import { EventEmitter } from "protractor";
import {MytodoService} from '../mytodo.service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html'
})
export class ViewComponent {
    mytodoList: Mytodo[];
    selectedValue: any;
    showDetail: Mytodo;

    constructor(private router: Router,
      private activatedroute: ActivatedRoute,
      private mytodoservice: MytodoService ) {
        this.mytodoList = this.mytodoservice.getAllTodoList();
        console.log(this.mytodoList);
    }

    deleteData(id: number){
        if (confirm('Are You sure,want to delete?')) {
            this.mytodoservice.deleteTodoList(id);
           // this.mytodoList.splice(id,1);
        }
    }
    navigateServer(value: string, id: number): void {
      if ( value === 'view' ) {
        this.router.navigate(['view', id + 1]);
      } else if (value === 'edit') {
        this.router.navigate(['edit', id + 1]);
      }
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
