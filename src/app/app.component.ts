import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTodo = [];
  taskpush(myData: {taskname: string,duedate:string,createdate:string}){
    //console.log("app"+ myData);
    this.myTodo.push(myData);
    console.log(this.myTodo);
  }

}
