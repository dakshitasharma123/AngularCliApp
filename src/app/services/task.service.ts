import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Employee} from '../employee';
//import { Observable, of,map } from 'rxjs';  //rxjs(Reactive extension of java script)
//import 'rxjs/add/operator';
//import 'rxjs/Rx';
@Injectable()
export class TaskService {
	student:{name:string,roll:number};

  constructor(private http:Http) {
  	console.log('Task Services Initilized..');
   }
   employe:Employee={
   	'title':'manish',
   	'isDone':false
   }
/*   getTasks(){
   	return this.http.get('http://localhost:3000/api/tasks').map(res => res.json());
   }*/
   getTasks(){
   	return this.http.get("http://localhost:3000/api/tasks");
   }
   storeTask(){
   	return this.http.post("http://localhost:3000/api/task",this.employe);
   }
}
