import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTodo = [];

  editdetail : {taskname: string,duedate:string,createdate:string};
  taskpush(myData: {taskname: string,duedate:string,createdate:string}){
    if(this.myTodo.length){
      var flag: boolean = false;
      for(var i=0; i<this.myTodo.length;i++){
        if(this.myTodo[i].taskname===myData.taskname){
          flag =  true;
          this.myTodo[i] = myData;
        }
      }
      if (flag === false){
        this.myTodo.push(myData);
      }
    } else{
      this.myTodo.push(myData);
    }
  }
  editdata(detail:{taskname: string,duedate:string,createdate:string} ){
    this.editdetail = detail;
  }

}
