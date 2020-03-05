import { Component, Input } from '@angular/core';
import {Mytodo} from './mytodo.model';
// import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Mytodo;
  detail: {details:string};
  mytodoList: Mytodo[] = [];
  addData(mytodo : Mytodo){
    if(this.mytodoList.length){
      var flag: boolean = false;
      for(var i=0;i<this.mytodoList.length;i++){
        if(this.mytodoList[i].taskname===mytodo.taskname){
          flag = true;
          this.mytodoList[i] = mytodo;
        }
      }
      if(flag === false){
        this.mytodoList.push(mytodo);
      }
    }
    else{
      this.mytodoList.push(mytodo);
    }
  }
  showData(details:Mytodo){
    this.detail = details;
  }
  
  editData(detail:Mytodo){
      this.data=detail;
      // console.log(this.data);
  }
 
  

}
