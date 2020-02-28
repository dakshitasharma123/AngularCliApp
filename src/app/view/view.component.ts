import { Component, Input } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";

@Component({
    selector : 'app-view',
    templateUrl: './view.component.html',
})
export class ViewClass {
    @Input() myTodo: {taskname: string,duedate: string,createdate: string}[];

    // myArra/y:[number,number] = [1,2];

}