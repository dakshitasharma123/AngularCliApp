import {Mytodo} from './mytodo.model';
export class MytodoService {
  private mytodoList: Mytodo[] = [{taskname:'firstTask', duedate: '12-12-2020', createdate: '12-12-2020', details:'NO DETAILS'}];
  // private showTodoList: Mytodo[]=[];
  getAllTodoList(){
    return this.mytodoList;
  }
  getTodoList(id: number) {
    //return this.mytodoList[id];
    // this.showTodoList.push(this.mytodoList[id]);
    // this.showTodoList.push(this.mytodoList[id]);
    // console.log(this.showTodoList[0]);
  }

  // showTodoListData(){
  //   return this.showTodoList[0];
  // }

  addTodoList(mytodo: Mytodo) {
    this.mytodoList.push(mytodo);
  }
  deleteTodoList(id: number){
    this.mytodoList.splice(id,1);
  }

  editTodoList(id: number) {

  }



  constructor() { }
}
