import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../employee';
//import { Observable, of,map } from 'rxjs';  //rxjs(Reactive extension of java script)
//import 'rxjs/add/operator';
//import 'rxjs/Rx';
@Injectable()
export class TaskService {
	student:{name:string,roll:number};

  constructor(private http:HttpClient) {
  	console.log('Task Services Initilized..');
   }
/*   getTasks(){
   	return this.http.get('http://localhost:3000/api/tasks').map(res => res.json());
   }*/
   getTasks(){
   	return this.http.get<Employee[]>("http://localhost:3000/api/tasks");
   }
}
